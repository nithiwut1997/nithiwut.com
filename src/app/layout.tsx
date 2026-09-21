import type { Metadata, Viewport } from "next";
import { SiteHeader } from "@/components/site-header";
import { profile, socialLinks } from "@/lib/portfolio";
import { seo, siteUrl } from "@/lib/seo";
import "./globals.css";

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f3f5f7",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seo.title,
    template: "%s | Nithiwut Wilainuch",
  },
  description: seo.description,
  applicationName: "nithiwut.com",
  authors: [{ name: profile.name }],
  keywords: [
    "Nithiwut Wilainuch",
    "Senior Software Engineer",
    "Backend Engineer",
    "Java",
    "Spring Boot",
    "AWS",
    "Kubernetes",
    "PostgreSQL",
    "Software Engineer Thailand",
    "Backend Engineer Thailand",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: siteUrl,
    siteName: profile.name,
    locale: "en_US",
    type: "website",
    images: [seo.image],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [seo.image],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: siteUrl,
    jobTitle: profile.role,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangkok",
      addressCountry: "Thailand",
    },
    sameAs: socialLinks.map((link) => link.href),
  };

  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="min-h-full bg-background text-foreground">
        <a
          href="#main"
          className="sr-only z-50 rounded-sm border border-border bg-surface px-4 py-3 text-sm font-medium text-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <div className="min-h-screen bg-background text-foreground">
          <SiteHeader />
          {children}
        </div>
      </body>
    </html>
  );
}
