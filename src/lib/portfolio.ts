export type SkillGroup = {
  title: string;
  skills: readonly string[];
  emphasis: "primary" | "standard" | "supporting";
};

export type CaseStudy = {
  title: string;
  context: string;
  problem: string;
  approach: string;
  value: string;
  tags: readonly string[];
  flow?: readonly string[];
  link?: string;
  featured?: boolean;
};

export type ArchitectureWorkflow = {
  title: string;
  description: string;
  flow: readonly {
    label: string;
    detail: string;
  }[];
};

export const profile = {
  name: "Nithiwut Wilainuch",
  role: "Senior Software Engineer",
  location: "Bangkok, Thailand",
  focus:
    "Backend-focused engineer specializing in Java, Spring Boot, cloud-native systems, and production reliability.",
  summary:
    "Senior Software Engineer with 6 years of experience designing and developing backend and web applications across banking and startup environments.",
};

export const contact = {
  email: "nithiwut.w@gmail.com",
  phone: "088-607-9220",
  location: "Bangkok, Thailand",
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Highlights", href: "#highlights" },
  { label: "Architecture", href: "#architecture" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/nithiwut-wilainuch-a90152179",
  },
  {
    label: "GitHub",
    href: "https://github.com/nithiwut1997",
  },
];

export const contactLinks = [
  {
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
  },
  {
    label: "Phone",
    value: contact.phone,
    href: `tel:${contact.phone.replaceAll("-", "")}`,
  },
];

export const heroStats = [
  { label: "Experience", value: "6 years" },
  { label: "Current", value: "TTB bank" },
  { label: "Location", value: "Bangkok" },
];

export const currentEngineeringScope = [
  {
    title: "Backend services",
    detail:
      "Java and Spring Boot services for marketplace, lead generation, and internal banking workflows.",
    tag: "APIs",
  },
  {
    title: "Async and event-driven systems",
    detail:
      "Background processing and cloud workflows built around AWS SQS, S3 events, and Lambda.",
    tag: "AWS",
  },
  {
    title: "Production reliability",
    detail:
      "Performance optimization, Kubernetes troubleshooting, root-cause analysis, and delivery support.",
    tag: "Operations",
  },
];

export const productionStack = [
  "Java 21",
  "Spring Boot",
  "PostgreSQL",
  "AWS",
  "Kubernetes",
  "GitLab CI/CD",
];

export const strengths = [
  "Designs Java and Spring Boot services, RESTful APIs, relational data access, and asynchronous workflows for production systems.",
  "Improves application and database performance, investigates production issues, and strengthens reliability through root-cause analysis.",
  "Delivers cloud-native systems with AWS, Docker, Kubernetes, and CI/CD across banking and startup environments.",
  "Brings additional full-stack experience with React and Next.js, plus current hands-on work with Angular and NestJS.",
];

export const experience = [
  {
    company: "TTB Bank",
    role: "Senior Software Engineer",
    period: "Apr 2023 - Present",
    location: "Bangkok",
    description:
      "Develops backend systems in banking, including the Roddonjai used-car marketplace and multi-channel lead generation platforms.",
    highlights: [
      "Design and develop Java and Spring Boot services for Roddonjai, supporting seller onboarding, vehicle inspection, listings, campaign configuration, and internal operations.",
      "Co-develop a multi-channel lead generation platform with an external vendor using Angular, Node.js, and AWS Lambda, capturing and routing leads into internal banking systems.",
      "Build proof-of-concept and core features for a new internally developed lead generation platform using Angular and NestJS.",
      "Optimize high-volume data processing by replacing iterative JPA operations with JDBC bulk operations, reducing unnecessary ORM overhead.",
      "Design asynchronous export workflows with AWS SQS and an event-driven S3/Lambda pipeline that produces resized WebP vehicle images.",
      "Drive backend upgrades from Java 11 to Java 21, including adoption of modern language features such as records.",
      "Support Kubernetes production workloads through application and deployment troubleshooting, root-cause analysis, reliability improvements, technical design, code reviews, estimation, and cross-functional delivery planning.",
    ],
    technologies: [
      "Java 11-21",
      "Spring Boot",
      "JPA / JDBC",
      "NestJS",
      "AWS",
      "PostgreSQL",
      "Redis",
      "Elasticsearch",
      "Kubernetes",
    ],
  },
  {
    company: "Purple Ventures Company Limited",
    role: "Software Engineer",
    period: "May 2021 - Mar 2023",
    location: "Bangkok",
    description:
      "Developed and supported production backend services using Java, Python, and AWS Serverless technologies in a startup environment.",
    highlights: [
      "Built Lambda-based APIs and background workflows for production services using Java, Python, and AWS Serverless.",
      "Replaced manual ZIP deployments with automated CI/CD pipelines, using Docker and Jenkins to make releases more consistent.",
      "Developed internal promotion verification services for call-center workflows and reporting services with automated email delivery.",
      "Investigated production issues and coordinated with engineering and data teams to restore and improve service behavior.",
    ],
    technologies: [
      "Java",
      "Python",
      "AWS Lambda",
      "API Gateway",
      "Docker",
      "Jenkins",
      "CI/CD",
    ],
  },
  {
    company: "Institute of Public Policy and Development",
    role: "Backend Developer",
    period: "Jun 2020 - Apr 2021",
    location: "Bangkok",
    description:
      "Built public-policy applications and data workflows, establishing an early full-stack foundation.",
    highlights: [
      "Developed Django and PostgreSQL backend services and REST APIs.",
      "Implemented frontend experiences with React and Next.js, and maintained ETL and data pipelines.",
    ],
    technologies: ["Django", "PostgreSQL", "REST APIs", "React", "Next.js", "ETL"],
  },
];

export const skillGroups = [
  {
    title: "Languages",
    skills: ["Java 11-21", "Python", "TypeScript", "JavaScript"],
    emphasis: "standard",
  },
  {
    title: "Backend",
    skills: [
      "Spring Boot",
      "Spring Data JPA",
      "JDBC",
      "NestJS",
      "Node.js",
      "Django",
      "RESTful APIs",
    ],
    emphasis: "primary",
  },
  {
    title: "Architecture",
    skills: [
      "Microservices",
      "Event-Driven Architecture",
      "Asynchronous Processing",
    ],
    emphasis: "primary",
  },
  {
    title: "Databases & Search",
    skills: ["PostgreSQL", "MySQL", "Redis", "Elasticsearch"],
    emphasis: "standard",
  },
  {
    title: "Cloud",
    skills: [
      "AWS S3",
      "AWS SQS",
      "AWS Lambda",
      "API Gateway",
      "EKS",
      "AWS Batch",
      "EventBridge",
    ],
    emphasis: "primary",
  },
  {
    title: "DevOps & Infrastructure",
    skills: [
      "Docker",
      "Kubernetes",
      "Helm",
      "GitLab CI/CD",
      "Jenkins",
      "Terraform",
    ],
    emphasis: "standard",
  },
  {
    title: "Engineering Practices",
    skills: [
      "Code Review",
      "Troubleshooting",
      "Root-Cause Analysis",
      "Performance Optimization",
    ],
    emphasis: "standard",
  },
  {
    title: "Frontend / Additional",
    skills: ["Angular", "React", "Next.js", "HTML", "CSS"],
    emphasis: "supporting",
  },
] satisfies readonly SkillGroup[];

export const caseStudies: readonly CaseStudy[] = [
  {
    title: "Multi-channel Lead Generation Platform",
    context: "Banking systems integration",
    problem:
      "Leads arrive from multiple channels and need to reach internal banking systems through dependable, maintainable workflows.",
    approach:
      "Co-develop the current platform with a vendor using Angular, Node.js, and AWS Lambda, while exploring a parallel internal implementation with Angular and NestJS.",
    value:
      "Creates a clearer path for channel integration and informs migration and rebuild decisions without tying workflows to a single intake source.",
    tags: ["NestJS", "Node.js", "AWS Lambda", "System Integration"],
    featured: true,
  },
  {
    title: "High-volume Database Processing",
    context: "Backend performance",
    problem:
      "Iterative ORM-based operations add avoidable overhead to data-intensive, high-volume workloads.",
    approach:
      "Refactor iterative Spring Data JPA operations into explicit JDBC bulk operations designed around the workload.",
    value:
      "Reduces unnecessary ORM work and makes large data-processing paths more efficient and predictable.",
    tags: ["Spring Data JPA", "JDBC", "Relational Databases"],
  },
  {
    title: "Asynchronous Export Processing",
    context: "Long-running workflows",
    problem:
      "Large report and data exports should not hold open synchronous API requests while processing completes.",
    approach:
      "Queue export jobs with AWS SQS and let background workers process them independently from the request-response lifecycle.",
    value:
      "Decouples long-running work from APIs and provides a clearer model for export result and status handling.",
    tags: ["AWS SQS", "Async Processing", "Background Workers"],
    flow: ["API", "SQS", "Background Worker", "Export Result / Status"],
  },
  {
    title: "Event-driven Image Optimization",
    context: "Cloud-native media processing",
    problem:
      "Serving original vehicle images increases delivery bandwidth and cost when smaller presentation-ready assets are sufficient.",
    approach:
      "React to S3 upload events with AWS Lambda and automatically generate resized WebP variants.",
    value:
      "Moves image transformation out of the request path and supports more efficient image delivery through reusable optimized assets.",
    tags: ["Amazon S3", "AWS Lambda", "Event-Driven", "WebP"],
    flow: [
      "Image Upload",
      "Amazon S3",
      "S3 Event",
      "AWS Lambda",
      "WebP Variants",
    ],
  },
  {
    title: "Roddonjai Marketplace Backend",
    context: "Used-car marketplace",
    problem:
      "A customer-facing marketplace needs coordinated backend workflows across sellers, inspections, vehicle listings, campaigns, and internal operations.",
    approach:
      "Develop Spring Boot services and integrations using relational data, Redis, and Elasticsearch, with backend integrations to OCR and image categorization services where required.",
    value:
      "Provides a maintainable backend foundation for marketplace operations, search, supporting workflows, and ongoing production support.",
    tags: [
      "Spring Boot",
      "Redis",
      "Elasticsearch",
      "Backend integration with AI-powered services",
    ],
    link: "https://www.roddonjai.com",
  },
];

export const engineeringOwnership = [
  {
    title: "Technical contribution",
    description:
      "Contributes to technical discussions and design decisions, reviews code, and helps teams converge on maintainable implementation approaches.",
  },
  {
    title: "Planning and delivery",
    description:
      "Breaks down work, supports estimation and delivery planning, and coordinates with BA, SA, QA, architects, vendors, operations, and engineers.",
  },
  {
    title: "Team enablement",
    description:
      "Helps onboard team members by sharing system context, architecture, development workflows, and practical project setup knowledge.",
  },
  {
    title: "Production decisions",
    description:
      "Supports troubleshooting and root-cause analysis, then helps turn production findings into concrete reliability improvements.",
  },
];

export const architectureWorkflows = [
  {
    title: "Asynchronous export processing",
    description:
      "A queue separates API response handling from report and data-export workloads that may take longer to complete.",
    flow: [
      {
        label: "Client / API",
        detail: "Accept and validate the export request.",
      },
      {
        label: "Backend Service",
        detail: "Create the job and publish work for processing.",
      },
      {
        label: "AWS SQS",
        detail: "Buffer and decouple the long-running task.",
      },
      {
        label: "Background Worker",
        detail: "Generate the requested report or dataset.",
      },
      {
        label: "Storage / Status",
        detail: "Store the result and expose job status.",
      },
    ],
  },
  {
    title: "Event-driven image processing",
    description:
      "S3 events trigger media transformation automatically after vehicle images are uploaded.",
    flow: [
      {
        label: "Image Upload",
        detail: "Receive the original vehicle image.",
      },
      {
        label: "Amazon S3",
        detail: "Persist the source asset in object storage.",
      },
      {
        label: "S3 Event",
        detail: "Emit an event when the image is stored.",
      },
      {
        label: "AWS Lambda",
        detail: "Resize and convert the source image.",
      },
      {
        label: "Optimized WebP",
        detail: "Store presentation-ready image variants.",
      },
    ],
  },
] satisfies readonly ArchitectureWorkflow[];

export const education = {
  degree: "Bachelor of Engineering, Computer Engineering",
  school: "Chulalongkorn University",
  location: "Bangkok",
  seniorProject: "License Plate Recognition Using Deep Learning",
  highlights: [
    "Built a license plate recognition system using YOLO transfer learning, Python, and Keras.",
    "Deployed the application to Google Cloud Run using containerized deployment.",
  ],
};
