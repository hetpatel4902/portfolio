export type Project = {
  id: string;
  name: string;
  oneLiner: string;
  problem: string;
  architecture: string;
  engineering: string;
  impact: string;
  technologies: string[];
  link: string | null;
  projectType: string;
};

export const projects: Project[] = [
  {
    id: "ai-performance-platform",
    name: "AI-Driven Performance Testing & Optimization Platform",
    oneLiner:
      "An AI-assisted performance engineering platform that turns telemetry, logs, metrics, traces, and load-test history into realistic testing scenarios and optimization guidance.",
    problem:
      "Performance testing often starts from incomplete context: logs are fragmented, telemetry is noisy, and root causes are hard to trace when systems behave differently under load.",
    architecture:
      "The concept combines telemetry ingestion, AI-driven scenario generation, test-script synthesis, historical data correlation, observability analysis, and optimization recommendations into a single performance engineering workflow.",
    engineering:
      "The platform reasons across application metrics, traces, bottleneck signals, and historical test behavior to generate realistic load scenarios, predicted bottlenecks, and actionable recommendations for JMeter/k6 workflows, test-data generation, and tuning guidance.",
    impact:
      "The goal is to reduce the manual overhead in performance validation while improving the realism and usefulness of test planning and optimization decisions across API, JVM, database, and infrastructure layers.",
    technologies: [
      "AI Agents",
      "RAG",
      "Performance Engineering",
      "Observability",
      "JMeter",
      "k6",
      "PostgreSQL",
      "Kubernetes",
      "Redis",
    ],
    link: "https://github.com/hetpatel4902/AI-driven-performance-testing-and-optimization-platform",
    projectType: "Primary project",
  },
  {
    id: "imaze",
    name: "Imaze",
    oneLiner:
      "A production-deployed event platform for a college technology festival with registrations, event discovery, token purchases, and certificate flows.",
    problem:
      "Festival operations needed a coordinated digital experience for participant discovery, registration, payments, and event access without forcing users into multiple disconnected systems.",
    architecture:
      "The app was designed around a participant-first mobile experience with event data, registration workflows, and a deployment-ready backend integration model.",
    engineering:
      "I led development as part of a four-member team and coordinated the implementation, deployment, and operational setup for a production-facing event app.",
    impact:
      "The app reached 1,500+ downloads and held a 4.7 Play Store rating.",
    technologies: ["React Native", "AWS", "CI/CD", "Mobile Deployment"],
    link: "https://github.com/hetpatel4902/Imaze23",
    projectType: "Production app",
  },
  {
    id: "sachivalay-canteen",
    name: "Sachivalay Canteen",
    oneLiner:
      "A digital canteen ordering system built for Gujarat government employees to simplify meal ordering and reduce operational friction.",
    problem:
      "The canteen workflow needed a faster, more accessible way for employees to order meals without relying on manual or fragmented processes.",
    architecture:
      "The application was built as a React Native solution with cloud-backed support to handle ordering workflows for a public-sector environment.",
    engineering:
      "The work focused on real usability and deployment constraints: a simple ordering flow, reliable services, and a mobile experience suited to a practical civic-use context.",
    impact:
      "This project was developed for the Gujarat Government SSIP Hackathon and won 1st place among 2,500+ teams.",
    technologies: ["React Native", "AWS", "Mobile UX", "Public Sector App"],
    link: "https://github.com/hetpatel4902/sachivalay-canteen-app",
    projectType: "Hackathon product",
  },
];
