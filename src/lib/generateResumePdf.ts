import type {
  ResumeData,
  ResumeExperience,
  ResumeSkillGroup,
} from "@/types/resume";

const fileName = "nithiwut-wilainuch-resume.pdf";

type PdfDocument = import("jspdf").jsPDF;

type Layout = {
  pageWidth: number;
  pageHeight: number;
  marginX: number;
  marginTop: number;
  marginBottom: number;
  contentWidth: number;
  y: number;
};

const colors = {
  ink: [24, 24, 27] as const,
  muted: [82, 82, 91] as const,
  line: [212, 212, 216] as const,
  accent: [5, 150, 105] as const,
};

export async function downloadResumePdf(resume: ResumeData) {
  const { jsPDF } = await import("jspdf");
  const doc = new jsPDF({
    unit: "pt",
    format: "a4",
    orientation: "portrait",
    compress: true,
  });

  const layout: Layout = {
    pageWidth: doc.internal.pageSize.getWidth(),
    pageHeight: doc.internal.pageSize.getHeight(),
    marginX: 46,
    marginTop: 42,
    marginBottom: 46,
    contentWidth: doc.internal.pageSize.getWidth() - 92,
    y: 42,
  };

  renderHeader(doc, layout, resume);
  renderSection(doc, layout, "Professional Summary", () => {
    addParagraph(doc, layout, resume.summary, 10.5, 15);
  });
  renderSection(doc, layout, "Technical Skills", () => {
    resume.skills.forEach((group) => addSkillGroup(doc, layout, group));
  });
  renderSection(doc, layout, "Professional Experience", () => {
    resume.experience.forEach((item) => addExperience(doc, layout, item));
  });
  renderSection(doc, layout, "Leadership and Team Contribution", () => {
    addBulletList(doc, layout, resume.leadership);
  });
  renderSection(doc, layout, "Education", () => {
    ensureSpace(doc, layout, 62);
    setText(doc, "bold", 11, colors.ink);
    doc.text(resume.education.degree, layout.marginX, layout.y);
    setText(doc, "normal", 9.5, colors.muted);
    doc.text(
      `${resume.education.school} - ${resume.education.location}`,
      layout.marginX,
      layout.y + 15,
    );
    layout.y += 34;
    addBulletList(doc, layout, resume.education.details);
  });

  addPageNumbers(doc, layout);
  doc.save(fileName);
}

function renderHeader(doc: PdfDocument, layout: Layout, resume: ResumeData) {
  setText(doc, "bold", 22, colors.ink);
  doc.text(resume.name, layout.marginX, layout.y);
  layout.y += 20;

  setText(doc, "normal", 10.5, colors.muted);
  doc.text(resume.title, layout.marginX, layout.y);
  layout.y += 17;

  const contactLine = [
    resume.location,
    resume.email,
    resume.phone,
    `${resume.linkedIn.label}: ${resume.linkedIn.value}`,
    `${resume.portfolio.label}: ${resume.portfolio.value}`,
  ].join("  |  ");
  addWrappedText(
    doc,
    layout,
    contactLine,
    layout.marginX,
    layout.contentWidth,
    9,
    12,
  );
  layout.y += 8;

  drawLine(doc, layout, layout.y);
  layout.y += 20;
}

function renderSection(
  doc: PdfDocument,
  layout: Layout,
  title: string,
  renderContent: () => void,
) {
  ensureSpace(doc, layout, 56);
  setText(doc, "bold", 10.5, colors.accent);
  doc.text(title.toUpperCase(), layout.marginX, layout.y);
  layout.y += 8;
  drawLine(doc, layout, layout.y);
  layout.y += 16;
  renderContent();
  layout.y += 8;
}

function addSkillGroup(
  doc: PdfDocument,
  layout: Layout,
  group: ResumeSkillGroup,
) {
  ensureSpace(doc, layout, 28);
  setText(doc, "bold", 9.5, colors.ink);
  const label = `${group.title}:`;
  doc.text(label, layout.marginX, layout.y);

  const labelWidth = doc.getTextWidth(label) + 7;
  setText(doc, "normal", 9.5, colors.muted);
  const lines = doc.splitTextToSize(
    group.items.join(", "),
    layout.contentWidth - labelWidth,
  ) as string[];
  doc.text(lines, layout.marginX + labelWidth, layout.y);
  layout.y += lines.length * 13 + 4;
}

function addExperience(
  doc: PdfDocument,
  layout: Layout,
  item: ResumeExperience,
) {
  ensureSpace(doc, layout, 74);
  setText(doc, "bold", 11, colors.ink);
  doc.text(item.role, layout.marginX, layout.y);
  setText(doc, "normal", 9.5, colors.muted);
  doc.text(item.period, layout.pageWidth - layout.marginX, layout.y, {
    align: "right",
  });
  layout.y += 15;

  setText(doc, "bold", 9.8, colors.muted);
  doc.text(`${item.company} - ${item.location}`, layout.marginX, layout.y);
  layout.y += 14;

  addBulletList(doc, layout, item.highlights);

  if (item.technologies?.length) {
    ensureSpace(doc, layout, 22);
    setText(doc, "normal", 9, colors.muted);
    addWrappedText(
      doc,
      layout,
      `Technologies: ${item.technologies.join(", ")}`,
      layout.marginX,
      layout.contentWidth,
      9,
      12,
    );
  }

  layout.y += 7;
}

function addBulletList(doc: PdfDocument, layout: Layout, items: string[]) {
  items.forEach((item) => {
    const bulletIndent = 12;
    const textX = layout.marginX + bulletIndent;
    const maxWidth = layout.contentWidth - bulletIndent;
    setText(doc, "normal", 9.4, colors.muted);
    const lines = doc.splitTextToSize(item, maxWidth) as string[];
    const blockHeight = lines.length * 12.5 + 4;
    ensureSpace(doc, layout, blockHeight);
    doc.text("-", layout.marginX, layout.y);
    doc.text(lines, textX, layout.y);
    layout.y += blockHeight;
  });
}

function addParagraph(
  doc: PdfDocument,
  layout: Layout,
  text: string,
  fontSize: number,
  lineHeight: number,
) {
  setText(doc, "normal", fontSize, colors.muted);
  addWrappedText(
    doc,
    layout,
    text,
    layout.marginX,
    layout.contentWidth,
    fontSize,
    lineHeight,
  );
}

function addWrappedText(
  doc: PdfDocument,
  layout: Layout,
  text: string,
  x: number,
  width: number,
  fontSize: number,
  lineHeight: number,
) {
  setText(doc, "normal", fontSize, colors.muted);
  const lines = doc.splitTextToSize(text, width) as string[];
  ensureSpace(doc, layout, lines.length * lineHeight);
  doc.text(lines, x, layout.y);
  layout.y += lines.length * lineHeight;
}

function ensureSpace(doc: PdfDocument, layout: Layout, requiredHeight: number) {
  if (layout.y + requiredHeight <= layout.pageHeight - layout.marginBottom) {
    return;
  }

  doc.addPage();
  layout.y = layout.marginTop;
}

function drawLine(doc: PdfDocument, layout: Layout, y: number) {
  doc.setDrawColor(...colors.line);
  doc.setLineWidth(0.8);
  doc.line(layout.marginX, y, layout.pageWidth - layout.marginX, y);
}

function setText(
  doc: PdfDocument,
  style: "normal" | "bold",
  size: number,
  color: readonly [number, number, number],
) {
  doc.setFont("helvetica", style);
  doc.setFontSize(size);
  doc.setTextColor(...color);
}

function addPageNumbers(doc: PdfDocument, layout: Layout) {
  const totalPages = doc.getNumberOfPages();

  for (let page = 1; page <= totalPages; page += 1) {
    doc.setPage(page);
    setText(doc, "normal", 8, colors.muted);
    doc.text(
      `${page} / ${totalPages}`,
      layout.pageWidth - layout.marginX,
      layout.pageHeight - 24,
      { align: "right" },
    );
  }
}
