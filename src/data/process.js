export const processSteps = [
  {
    step: '01',
    code: 'DISCOVER',
    title: 'Requirement & System Analysis',
    subtitle: 'Deconstructing problem spaces into architectural objectives',
    description:
      'Unpacking business logic, technical constraints, user user-flows, and performance benchmarks to establish clear scope and data contracts.',
    deliverables: ['System Scope', 'Data Flow Diagrams', 'API Specifications'],
    badge: 'STAGE // 01'
  },
  {
    step: '02',
    code: 'ARCHITECT',
    title: 'Database & Component Design',
    subtitle: 'Structuring resilient schemas and modular UI hierarchies',
    description:
      'Modeling efficient MongoDB / SQL relational structures, planning reusable component abstractions, and establishing state management patterns.',
    deliverables: ['Schema Blueprints', 'Component Trees', 'Design Tokens'],
    badge: 'STAGE // 02'
  },
  {
    step: '03',
    code: 'DEVELOP',
    title: 'Clean Code Implementation',
    subtitle: 'Crafting performant web, mobile and backend modules',
    description:
      'Writing type-safe, modular React.js, React Native, and Node.js code with strict separation of concerns, clean controllers, and robust error handling.',
    deliverables: ['Full Stack Codebase', 'RESTful Endpoints', 'Mobile Builds'],
    badge: 'STAGE // 03'
  },
  {
    step: '04',
    code: 'INTEGRATE',
    title: 'AI, Auth & Cloud Pipelines',
    subtitle: 'Connecting external APIs, Gen-AI models and cloud storage',
    description:
      'Seamlessly wiring third-party AI endpoints, JWT/session authentication, AWS services (S3/EC2), and third-party webhooks with zero friction.',
    deliverables: ['AI API Pipelines', 'Secure Auth Handlers', 'Cloud Storage'],
    badge: 'STAGE // 04'
  },
  {
    step: '05',
    code: 'VALIDATE',
    title: 'Testing, Security & Edge Cases',
    subtitle: 'Ensuring resilience across devices and network conditions',
    description:
      'Validating responsive breakpoints from 320px to 4K, cross-browser compatibility, API latency, error boundaries, and payload sanitization.',
    deliverables: ['Cross-Device QA', 'Edge Case Audits', 'Performance Tuning'],
    badge: 'STAGE // 05'
  },
  {
    step: '06',
    code: 'DEPLOY',
    title: 'Production Deployment & Monitoring',
    subtitle: 'Delivering optimized, live production systems',
    description:
      'Deploying applications to VPS / Cloud environments with automated build pipelines, caching policies, SSL certificates, and uptime monitoring.',
    deliverables: ['VPS Deployment', 'CI/CD Automation', 'Production Monitoring'],
    badge: 'STAGE // 06'
  }
];
