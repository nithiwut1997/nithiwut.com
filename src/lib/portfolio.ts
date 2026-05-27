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
      "Developing backend services for Roddonjai, a customer-facing used-car marketplace platform supporting public vehicle listing, browsing, seller operations, and internal administration workflows.",
    highlights: [
      "Designed and implemented seller onboarding and vehicle inspection workflows, including seller information submission, verification processes, inspection status handling, and publication readiness checks.",
      "Built and maintained RESTful APIs supporting car listings, seller-related operations, inspection workflows, campaign configuration, and platform content management.",
      "Collaborated with AI engineering teams to integrate OCR-based vehicle registration data extraction, vehicle image categorization, intelligent search enhancements, and AI-assisted vehicle recommendation features.",
      "Designed and integrated event-driven image processing workflows using AWS Lambda and S3 triggers for automatic vehicle image resizing and WebP optimization.",
      "Improved marketplace search performance and user experience using Redis caching and Elasticsearch indexing.",
      "Designed asynchronous workflow integrations using AWS SQS for background processing, workflow orchestration, and scalable task handling.",
      "Supported production services running in Kubernetes environments, including deployment troubleshooting, monitoring, incident investigation, and operational reliability improvements.",
      "Investigated production issues, identified root causes, and applied fixes to improve system stability, reliability, and operational readiness.",
      "Worked with CI/CD pipelines and deployment processes to release changes across multiple environments.",
      "Coordinated with business, operations, and cross-functional engineering teams to clarify requirements, support campaign operations, and deliver platform enhancements.",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "AWS Lambda",
      "AWS S3",
      "AWS SQS",
      "Redis",
      "Elasticsearch",
      "Kubernetes",
      "CI/CD",
      "AI Integration",
    ],
  },
  {
    company: "Purple Ventures Company Limited",
    role: "Software Engineer",
    period: "May 2021 - Mar 2023",
    location: "Bangkok",
    description:
      "Developed backend services using Java, Python, and AWS Serverless technologies for production systems in a startup environment.",
    highlights: [
      "Delivered multiple backend features across several production software releases.",
      "Migrated deployment workflows from manual zip-based deployment to automated CI/CD pipelines, improving release consistency and deployment efficiency.",
      "Containerized services using Docker and integrated deployment workflows with Jenkins pipelines.",
      "Developed internal promotion code verification services used by call center teams.",
      "Collaborated with data teams to build reporting services and automated email reporting workflows.",
      "Supported production systems and worked with cross-functional teams to investigate and resolve operational issues.",
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
      "Coordinated with team members to ensure data accuracy, system stability, and reliable delivery.",
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
    title: "Roddonjai Used-Car Marketplace Platform",
    description:
      "Core backend services for Thailand’s used-car marketplace platform (roddonjai.com), covering seller onboarding, vehicle inspection workflows, public listing systems, search infrastructure, caching, campaign operations, and marketplace reliability improvements within the banking domain. Also contributed to event-driven vehicle image optimization pipelines using AWS Lambda and S3 triggers for automatic image resizing and WebP conversion.",
    tags: [
      "Spring Boot",
      "AWS",
      "Kubernetes",
      "Redis",
      "Elasticsearch",
      "AWS SQS",
      "AWS Lambda",
      "S3",
      "WebP",
      "Banking",
    ],
    link: "https://www.roddonjai.com",
  },
  {
    title: "AI-Powered Marketplace Integrations",
    description:
      "Integrated AI-powered workflows into the automotive marketplace platform, including OCR-based vehicle registration data extraction, AI-assisted vehicle image categorization, intelligent search enhancements, and AI-driven vehicle recommendation experiences. Worked closely with AI engineering teams to design backend integration flows, asynchronous processing pipelines, and production-ready cloud integration architectures.",
    tags: [
      "AI Integration",
      "OCR",
      "AWS",
      "Backend Systems",
      "Async Processing",
      "Cloud Architecture",
      "Search Systems",
    ],
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
