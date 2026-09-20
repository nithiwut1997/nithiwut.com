export type EngineeringArea = {
  title: string;
  description: string;
  technologies: readonly string[];
};

export type EngineeringStory = {
  id: string;
  title: string;
  category: string;
  context: string;
  approach: string;
  consideration: string;
  diagram: { caption: string; steps: readonly string[] };
};

export type EngineeringNote = {
  id: string;
  title: string;
  description: string;
  diagram?: EngineeringStory["diagram"];
};

export const profile = {
  name: "Nithiwut Wilainuch",
  role: "Senior Software Engineer",
  location: "Bangkok, Thailand",
  summary: "Backend-focused software engineer with 6 years of experience building production systems across banking and startup environments.",
  supporting: "My work spans application code, data, asynchronous processing, cloud infrastructure, and the day-to-day realities of running software in production.",
};

export const contact = {
  email: "nithiwut.w@gmail.com",
  phone: "088-607-9220",
};

export const resume = {
  href: "/Nithiwut_Wilainuch_Resume.pdf",
  label: "Resume",
};

export const navItems = [
  { label: "Areas", href: "#areas" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/nithiwut1997" },
  { label: "LinkedIn", href: "https://linkedin.com/in/nithiwut-wilainuch-a90152179" },
];

export const engineeringAreas: readonly EngineeringArea[] = [
  {
    title: "Backend & application",
    description: "Services, APIs, and the workflows behind them.",
    technologies: ["Java 11–21", "Spring Boot", "Spring Data JPA", "JDBC", "REST APIs"],
  },
  {
    title: "Data & performance",
    description: "Relational data access, caching, and search.",
    technologies: ["PostgreSQL", "MySQL", "Redis", "Elasticsearch"],
  },
  {
    title: "Async & event-driven",
    description: "Background jobs and event-triggered processing.",
    technologies: ["AWS SQS", "Lambda", "S3", "EventBridge"],
  },
  {
    title: "Production & observability",
    description: "Application logs and production troubleshooting.",
    technologies: ["Kubernetes", "Logstash", "Elasticsearch", "Kibana"],
  },
  {
    title: "Delivery & infrastructure",
    description: "Application deployment and release workflows.",
    technologies: ["Docker", "Kubernetes", "Helm", "GitLab CI/CD", "Jenkins", "Terraform", "AWS"],
  },
  {
    title: "Additional experience",
    description: "Web applications and supporting services.",
    technologies: ["Python", "TypeScript", "NestJS", "Angular", "React", "Next.js"],
  },
];

export const engineeringStories: readonly EngineeringStory[] = [
  {
    id: "database-processing",
    title: "High-volume database processing",
    category: "Persistence / performance",
    context: "A backend workflow relied on repetitive JPA operations for high-volume persistence, adding unnecessary ORM overhead to the processing path.",
    approach: "Refactored the high-volume path to use explicit JDBC bulk operations, while keeping the change focused on the workload that needed it.",
    consideration: "The access pattern matters as much as the abstraction. Bulk operations address repetitive persistence work; explicit SQL also brings more responsibility for maintaining that path.",
    diagram: {
      caption: "Persistence path · bulk operations through JDBC",
      steps: ["Spring Boot", "JPA / JDBC", "PostgreSQL"],
    },
  },
  {
    id: "async-exports",
    title: "Asynchronous export processing",
    category: "Background workloads / queues",
    context: "Large report and data exports take longer than a typical API request should remain open.",
    approach: "Used AWS SQS to queue export work for background workers, separating processing from the HTTP request-response lifecycle.",
    consideration: "Accepting a request and completing an export are separate events. The workflow needs a clear way to represent the result and its processing status.",
    diagram: {
      caption: "Export workflow · processing beyond the request",
      steps: ["Client / API", "AWS SQS", "Worker", "Result / status"],
    },
  },
  {
    id: "image-optimization",
    title: "Event-driven image optimization",
    category: "Media processing / AWS",
    context: "Original vehicle images are larger than necessary for many marketplace views, adding avoidable bandwidth to image delivery.",
    approach: "Used S3 upload events to trigger Lambda processing that resizes images and creates WebP variants.",
    consideration: "Processing after upload keeps transformation out of the main request path. Reusable, presentation-ready variants make image delivery more efficient.",
    diagram: {
      caption: "Image workflow · transformation after upload",
      steps: ["Upload to S3", "S3 event", "Lambda", "Resize / WebP"],
    },
  },
];

export const engineeringNotes: readonly EngineeringNote[] = [
  {
    id: "production-observability",
    title: "Production & observability",
    description: "Hands-on production support includes searching and filtering centralized application logs, investigating Kubernetes application and deployment issues, and tracing failures toward a root cause.",
    diagram: {
      caption: "Centralized application logging",
      steps: ["Application", "Logstash", "Elasticsearch", "Kibana"],
    },
  },
  {
    id: "java-modernization",
    title: "Java 11 → 21",
    description: "Upgraded backend services from Java 11 to Java 21, adopting modern language features such as records where appropriate. The work combined a platform upgrade with focused changes to application code.",
  },
];

export const experience = [
  {
    company: "ttb bank",
    role: "Senior Software Engineer",
    period: "Apr 2023 – Present",
    description: "Backend engineering for the Roddonjai used-car marketplace and lead generation platforms in a banking environment.",
    highlights: [
      "Develop services supporting seller onboarding, inspections, listings, campaigns, and internal operations.",
      "Co-develop lead generation systems with vendor teams and contribute to an internal Angular and NestJS implementation.",
      "Contribute to technical design, code reviews, delivery planning, and production support.",
    ],
    link: { label: "Roddonjai marketplace", href: "https://www.roddonjai.com" },
  },
  {
    company: "Purple Ventures",
    role: "Software Engineer",
    period: "May 2021 – Mar 2023",
    description: "Production backend services built with Java, Python, and AWS Serverless in a startup environment.",
    highlights: [
      "Built Lambda-based APIs, background workflows, promotion verification, and automated reporting services.",
      "Replaced manual ZIP deployments with Docker and Jenkins delivery pipelines.",
      "Investigated production issues with engineering and data teams.",
    ],
  },
  {
    company: "Institute of Public Policy and Development",
    role: "Backend Developer",
    period: "Jun 2020 – Apr 2021",
    description: "Public-policy applications and data workflows, with experience across backend and web development.",
    highlights: [
      "Developed Django and PostgreSQL services and REST APIs.",
      "Built React and Next.js interfaces and maintained ETL and data pipelines.",
    ],
  },
];

export const workingPrinciples = [
  {
    title: "Understand before optimizing",
    description: "Start by locating the bottleneck: application logic, database access, an external dependency, or infrastructure. Let the problem guide the change.",
  },
  {
    title: "Design with failure in mind",
    description: "Ask what happens when work fails halfway through. Consider transaction boundaries, retries, and whether repeating an operation is safe.",
  },
  {
    title: "Own beyond the code",
    description: "Consider how a change will be deployed, observed, and debugged in production, and how someone else will maintain it later.",
  },
];

export const education = {
  degree: "Bachelor of Engineering (Computer Engineering)",
  school: "Chulalongkorn University",
  seniorProject: "License Plate Recognition Using Deep Learning",
  description: "YOLO transfer learning with Python and Keras; containerized deployment to Google Cloud Run.",
};
