export type ExperienceEntry = {
  period: string;
  company: string;
  role: string;
  summary: string;
  projects: Array<{
    name: string;
    domain: string;
    role: string;
    technologies: string[];
    whatBuilt: string;
    engineeringProblem: string;
    impact: string;
  }>;
};

export const experience: ExperienceEntry[] = [
  {
    period: "2024 → PRESENT",
    company: "TATA CONSULTANCY SERVICES",
    role: "Systems Engineer",
    summary:
      "Working across backend engineering, full-stack delivery, system architecture, data processing, and AI-driven enterprise solutions.",
    projects: [
      {
        name: "Confidential Government/Defense Project",
        domain: "Project & Material Management",
        role: "Technical Lead",
        technologies: ["Spring Boot", "Angular", "PostgreSQL", "REST APIs"],
        whatBuilt:
          "Designed the application architecture, backend modules, and PostgreSQL database model for an enterprise project and material management platform supporting project planning, execution, and monitoring.",
        engineeringProblem:
          "The platform needed to support role-based workflows, project tracking, and coordination across multiple users throughout a complex project lifecycle.",
        impact:
          "Led a 15+ member frontend/backend engineering team and delivered 60+ screens within four months, driving technical task allocation, code reviews, frontend-backend integration, feature development, and delivery coordination.",
      },
      {
        name: "PETRONAS & Inland Waterways Authority of India",
        domain: "Enterprise Project Management",
        role: "Full-Stack Engineer",
        technologies: ["Spring Boot", "Angular", "REST APIs"],
        whatBuilt:
          "Built a project management proof of concept covering workflow modeling, role-based dashboards, REST services, and data structures for monitoring project activity.",
        engineeringProblem:
          "The solution had to make project status and operational accountability clearer for different stakeholder groups without overloading the interface.",
        impact:
          "Created a reusable enterprise architecture pattern with role-aware reporting, monitoring surfaces, and structured data models for a broad project-management workflow.",
      },
      {
        name: "BCCI",
        domain: "Sports Analytics",
        role: "Backend & Data Engineer",
        technologies: ["Data Pipelines", "REST APIs", "Analytics"],
        whatBuilt:
          "Worked on data processing pipelines for stadium, merchandise, and ticketing data, flattening complex datasets into analytical models for faster access and reuse.",
        engineeringProblem:
          "The data landscape combined multiple event sources and formats, which required a reliable processing and caching strategy to support analytics and API requests.",
        impact:
          "Improved data accessibility and reduced friction in analytical workflows through pipeline design and caching-oriented API optimization.",
      },
      {
        name: "ICAI",
        domain: "Certification Workflow",
        role: "Integration Engineer",
        technologies: ["Zoom API", "Workflow Integration", "REST APIs"],
        whatBuilt:
          "Built and integrated a remote certification workflow using Zoom APIs to support a distributed, event-driven examination flow.",
        engineeringProblem:
          "The process required reliable API orchestration and consistent coordination between user workflows and external platform integrations.",
        impact:
          "Enabled a smoother remote certification process with a more structured digital workflow for participants and administrators.",
      },
      {
        name: "Tata Play Fiber",
        domain: "Inventory & Procurement",
        role: "Backend Engineer",
        technologies: [
          "Spring Boot",
          "Angular",
          "REST APIs",
          "Inventory Workflow",
        ],
        whatBuilt:
          "Developed backend modules and Angular interfaces for inventory management, purchase orders, material balance, and vendor invoice workflows.",
        engineeringProblem:
          "The system needed to support operational reporting and material visibility without sacrificing consistency across procurement and inventory actions.",
        impact:
          "Helped streamline material and vendor processes with a structured, API-driven operational workflow.",
      },
    ],
  },
  {
    period: "2024",
    company: "TATVASOFT",
    role: "Trainee Software Engineer",
    summary:
      "Built backend services and API workflows for transactional systems with a focus on reliability and concurrency.",
    projects: [
      {
        name: "DoPay",
        domain: "Crypto Trading & Wallet Systems",
        role: "Backend Engineer",
        technologies: ["Node.js", "Express.js", "RabbitMQ", "REST APIs"],
        whatBuilt:
          "Worked on wallet transactions, market orders, and account management services for a cryptocurrency trading platform.",
        engineeringProblem:
          "The platform needed to handle high-concurrency financial operations while maintaining correctness and recoverability under load.",
        impact:
          "Contributed to concurrency and reliability improvements across transactional workflows and system integrations.",
      },
    ],
  },
  {
    period: "2023",
    company: "THE KARMIC UNIVERSE",
    role: "Backend Developer Intern",
    summary:
      "Worked on stock-market data services, automation jobs, and response-time optimization using Redis and API integrations.",
    projects: [
      {
        name: "Finosauras / Saras",
        domain: "Stock Market Data Systems",
        role: "Backend Engineer",
        technologies: ["Node.js", "Upstox APIs", "Redis", "Schedulers"],
        whatBuilt:
          "Built backend components to process live stock-market data, automate scheduled fetch workflows, and integrate with Upstox APIs.",
        engineeringProblem:
          "High-frequency market data access and response latency created a significant performance bottleneck for downstream workflows.",
        impact:
          "Used caching and workflow optimization strategies to reduce API response times from about 800ms to 100ms in relevant flows.",
      },
    ],
  },
];
