export const profile = {
  name: "Nithiwut Wilainuch",
  role: "Senior Software Engineer / Squad Lead",
  location: "Bangkok, Thailand",
  focus: "Full-stack capable, with a backend and cloud engineering focus",
  summary:
    "Senior Software Engineer with 5+ years of experience building scalable systems in banking and startup environments. Open to full-stack product work, with strongest focus on backend services, cloud-native delivery, marketplace workflows, and production support.",
};

export const contact = {
  email: "nithiwut.w@gmail.com",
  phone: "088-607-9220",
  location: "Bangkok, Thailand",
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Architecture", href: "#architecture" },
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
  { label: "Experience", value: "5+ years" },
  { label: "Current", value: "TTB bank" },
  { label: "Location", value: "Bangkok" },
];

export const strengths = [
  "Designs scalable RESTful APIs and backend services for seller onboarding, car listing, inspection status, and marketplace operations.",
  "Builds reliable production workflows with Java Spring Boot, AWS services, asynchronous processing, Kubernetes support, and CI/CD delivery.",
  "Contributes across the full stack when needed, including React and Next.js UI work, while keeping backend reliability and cloud operations as the main depth.",
  "Works closely with business, operations, data, and engineering teams to clarify requirements, support campaigns, and improve system behavior.",
];

export const experience = [
  {
    company: "TTB bank",
    role: "Senior Software Engineer",
    period: "Apr 2023 - Present",
    location: "Bangkok",
    description:
      "Developing backend systems for a used-car marketplace platform that allows users to list and browse vehicles through a public website.",
    highlights: [
      "Designed and implemented seller onboarding workflows, including seller information submission and verification processes.",
      "Implemented vehicle inspection workflows required before cars can be published on the platform.",
      "Built and maintained RESTful APIs supporting car listing, inspection status, and seller-related operations.",
      "Developed internal administration systems for managing marketing configurations, banners, and platform content settings.",
      "Improved search performance and user experience using Redis caching and Elasticsearch indexing.",
      "Implemented asynchronous workflows using AWS SQS for background task processing and workflow handling.",
      "Supported production systems in Kubernetes environments, including monitoring services, investigating issues, and troubleshooting deployments.",
      "Coordinated with business and operations teams to support campaign configurations and platform enhancements.",
      "Investigated production issues, identified root causes, and applied fixes to improve system stability and reliability.",
      "Worked with CI/CD pipelines and deployment processes to release changes across multiple environments.",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "AWS SQS",
      "Redis",
      "Elasticsearch",
      "Kubernetes",
      "CI/CD",
    ],
  },
  {
    company: "Purple Ventures Company Limited",
    role: "Software Engineer",
    period: "May 2021 - Mar 2023",
    location: "Bangkok",
    description:
      "Developed backend services and production features using Java, Python, and AWS serverless technologies in a startup environment.",
    highlights: [
      "Delivered multiple features across several production software releases.",
      "Migrated deployment workflows from manual zip-based deployment to automated CI/CD pipelines.",
      "Containerized services using Docker and Jenkins pipelines.",
      "Developed internal promotion code verification services used by call center teams.",
      "Collaborated with data teams to build reporting services and automated email reporting systems.",
      "Supported production systems and collaborated with cross-functional teams to resolve operational issues.",
    ],
    technologies: [
      "Java",
      "Python",
      "AWS Serverless",
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
      "Built backend services, frontend components, and data workflows for public-policy software systems.",
    highlights: [
      "Developed backend services using Django and PostgreSQL.",
      "Built frontend components using React and Next.js based on UI/UX designs.",
      "Worked on ETL-related tasks and maintained data pipelines.",
      "Coordinated with team members to ensure data accuracy and system stability.",
    ],
    technologies: ["Django", "PostgreSQL", "React", "Next.js", "ETL"],
  },
];

export const skillGroups = [
  {
    title: "Languages",
    skills: ["Java 11-21", "Python", "TypeScript"],
  },
  {
    title: "Backend",
    skills: [
      "Spring Boot",
      "Django",
      "Node.js",
      "RESTful APIs",
      "Async workflows",
    ],
  },
  {
    title: "Cloud",
    skills: ["AWS Lambda", "API Gateway", "S3", "SQS", "Aurora"],
  },
  {
    title: "Platform",
    skills: [
      "Docker",
      "Kubernetes",
      "Jenkins",
      "GitLab CI/CD",
      "Production support",
    ],
  },
  {
    title: "Data",
    skills: ["MySQL", "PostgreSQL", "Redis", "Elasticsearch", "ETL"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "UI implementation"],
  },
];

export const projects = [
  {
    title: "Used-Car Marketplace Platform",
    description:
      "Backend services for public vehicle listing and browsing workflows in the banking domain, including car listings, seller operations, and platform reliability work.",
    tags: ["Spring Boot", "AWS", "Kubernetes", "Banking"],
  },
  {
    title: "Seller Onboarding and Inspection Workflows",
    description:
      "Seller verification, vehicle inspection status, background workflow handling, and internal administration capabilities required before marketplace publication.",
    tags: ["REST APIs", "AWS SQS", "Workflow Design", "Admin Systems"],
  },
  {
    title: "Search, Cache, and Campaign Operations",
    description:
      "Redis caching, Elasticsearch indexing, marketing banner configuration, campaign settings, and operational fixes to improve marketplace stability and user experience.",
    tags: ["Redis", "Elasticsearch", "Marketing Config", "Production Support"],
  },
  {
    title: "Promotion Verification and Reporting Services",
    description:
      "Internal promotion code verification services for call center teams, plus reporting services and automated email reporting built with cross-functional data teams.",
    tags: ["Java", "Python", "AWS Serverless", "Reporting"],
  },
  {
    title: "License Plate Recognition Using Deep Learning",
    description:
      "Senior project at Chulalongkorn University using labeled image datasets, YOLO transfer learning, Python, Keras, and container deployment on Google Cloud Run.",
    tags: ["YOLO", "Python", "Keras", "Cloud Run"],
  },
];

export const leadership = [
  "Supported backend technical leadership within the squad through technical discussions, delivery coordination, and production support activities.",
  "Reviewed code and provided feedback to improve code quality and engineering consistency.",
  "Helped onboard new team members by explaining system architecture, development workflows, and project setup.",
  "Collaborated with business and operations teams to clarify requirements and system behavior.",
];

export const education = {
  degree: "Bachelor of Engineering, Computer Engineering",
  school: "Chulalongkorn University",
  location: "Bangkok",
  seniorProject: "License Plate Recognition Using Deep Learning",
  highlights: [
    "Prepared and labeled image datasets for license plate detection model training.",
    "Implemented license plate detection using YOLO with transfer learning techniques.",
    "Built a recognition pipeline using Python and Keras.",
    "Deployed the service on Google Cloud Run using container-based deployment.",
  ],
};
