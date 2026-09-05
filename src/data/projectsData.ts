export interface Chapter {
  number: string;
  title: string;
  description: string;
  points?: { title: string; desc: string }[];
  highlight?: string;
}

export interface ProjectDetail {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  year: string;
  discipline: string;
  tags: string;
  gradient: string;
  poster: string;
  metrics: { value: string; label: string }[];
  role: string;
  scope: string[];
  contributions: string[];
  chapters: Chapter[];
  nextProjectId: string;
  nextProjectTitle: string;
  externalLink?: string;
  externalLinkLabel?: string;
}

export const projectsData: Record<string, ProjectDetail> = {
  'namrata-textiles': {
    id: 'namrata-textiles',
    title: 'Namrata Textiles — Luxury 3D E-Commerce',
    subtitle: "Rethinking traditional textile shopping through an interactive 3D WebGL fabric inspector, real-time procedural silk shaders, and a digital luxury lookbook for Surat's premier textile market.",
    client: 'Namrata Textiles (Surat, Gujarat)',
    year: '2025',
    discipline: 'Client Project · WebGL & 3D Web',
    tags: 'Client Project · WebGL & 3D',
    gradient: 'bg-gradient-to-br from-[oklch(0.55_0.16_240)] via-[oklch(0.40_0.14_245)] to-[oklch(0.22_0.09_252)]',
    poster: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1400&q=80',
    metrics: [
      { value: '360°', label: 'Interactive Fabric Orbit Inspector' },
      { value: '100%', label: 'Procedural WebGL Silk Shaders' },
      { value: '3×', label: 'Customer Engagement vs Static Photos' },
    ],
    role: 'Lead Full-Stack & 3D Web Developer',
    scope: ['WebGL & Three.js', 'Procedural Shaders', 'E-Commerce UX', 'Performance Optimization'],
    contributions: [
      'Engineered procedural GLSL silk shaders to recreate real-world light anisotropic reflection on luxury fabrics.',
      'Built an orbit-controlled 360° fabric inspection tool allowing buyers to inspect weaving density, gloss, and drape.',
      'Designed a sleek editorial lookbook matching high-fashion luxury standards for domestic and export clients.',
      'Optimized 3D render pipelines for mobile devices, maintaining consistent 60 FPS on standard smartphones.',
    ],
    chapters: [
      {
        number: '01',
        title: "The Vision: Beyond Flat Product Photos",
        description: "Surat's textile market produces some of the finest silk and designer fabrics in the world, yet online presentation was trapped in flat, static photos that failed to convey texture, sheen, or drape. Namrata Textiles wanted a digital flagship that gave remote wholesale and retail buyers the tactile sensation of holding silk under natural showroom lights.",
      },
      {
        number: '02',
        title: 'Procedural Silk Shaders & 3D Orbit Pipeline',
        description: 'Rather than using heavy, pre-baked 3D video loops, we implemented real-time procedural WebGL shaders that react dynamically to cursor movement and ambient virtual lighting.',
        points: [
          {
            title: 'Anisotropic Specular Highlights',
            desc: 'Simulates the micro-threads of raw silk where light refracts in continuous streaks along the weave direction.',
          },
          {
            title: 'Interactive 360° Orbit',
            desc: 'Buyers can zoom, pan, and tilt the fabric swatch to inspect edge stitching, weave density, and light falloff in real time.',
          },
          {
            title: 'Instant Palette Swapping',
            desc: 'Allowed buyers to switch yarn colorways without downloading separate 3D assets, reducing bundle sizes by 70%.',
          },
        ],
      },
      {
        number: '03',
        title: 'Business Impact & Wholesale Velocity',
        description: 'The platform transformed client conversations from days of courier fabric swatch samples to immediate digital approvals, expanding the brand reach across India and foreign export inquiries.',
      },
    ],
    nextProjectId: 'consultancy-crm',
    nextProjectTitle: 'AI-Powered Offline Consultancy CRM',
    externalLink: '#',
    externalLinkLabel: 'Live Showcase Demo',
  },

  'consultancy-crm': {
    id: 'consultancy-crm',
    title: 'AI-Powered Offline Consultancy CRM',
    subtitle: 'An offline-first operational operating system for business consultants and agency teams, engineered using Claude Code AI-assisted development workflows.',
    client: 'Consultancy & Agency Infrastructure',
    year: '2025',
    discipline: 'Business Systems · AI-Assisted Dev',
    tags: 'Business Systems · AI Assisted',
    gradient: 'bg-gradient-to-br from-[oklch(0.58_0.15_160)] via-[oklch(0.42_0.13_170)] to-[oklch(0.20_0.08_250)]',
    poster: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80',
    metrics: [
      { value: 'Zero Latency', label: '100% Offline-Capable Architecture' },
      { value: '5 Modules', label: 'Clients, Leads, Docs, Follow-ups, Tasks' },
      { value: 'Claude Code', label: 'AI-Assisted Multi-Module Engineering' },
    ],
    role: 'Architect & Full-Stack Developer',
    scope: ['System Architecture', 'Local DB & Sync', 'Claude Code Workflow', 'Lead Pipeline Logic'],
    contributions: [
      'Pioneered AI-assisted development methodology with Claude Code to rapidly scaffold, refactor, and test complex CRM modules.',
      'Designed local-first data persistence ensuring consultancy consultants have uninterrupted access to client files during travel.',
      'Implemented automated multi-stage pipeline tracking for deals, meetings, document verifications, and invoice status.',
      'Created proactive reminder algorithms that alert consultants when client follow-ups are due based on historical engagement.',
    ],
    chapters: [
      {
        number: '01',
        title: 'The Challenge: The Bloat of Modern Cloud CRMs',
        description: 'Traditional enterprise CRMs are expensive, sluggish, and completely dependent on persistent internet connections. Consultants frequently operate on client sites, flights, or remote branches where cloud dashboards stutter. The goal was to build a distraction-free, privacy-conscious CRM designed specifically around consultancy workflows.',
      },
      {
        number: '02',
        title: 'AI-Assisted Architecture with Claude Code',
        description: 'Using advanced AI-assisted engineering with Claude Code, the entire application was built with modular clean-architecture principles.',
        points: [
          {
            title: 'Lead & Deal Staging Pipeline',
            desc: 'Visual drag-and-drop board tracking clients from initial discovery call through contract signing and post-onboarding.',
          },
          {
            title: 'Document & NDA Management',
            desc: 'Secure local storage linking confidential briefs, contracts, and proposals directly to client records.',
          },
          {
            title: 'Smart Follow-up Queue',
            desc: 'Automated notification logic prioritizing clients based on deal size, last touchpoint date, and urgent action items.',
          },
        ],
      },
      {
        number: '03',
        title: 'Operational Outcomes',
        description: 'Eliminated reliance on messy spreadsheets and costly SaaS subscriptions, creating a private, lightning-fast workspace that keeps consultants focused on closing deals rather than data entry.',
      },
    ],
    nextProjectId: 'govconnect',
    nextProjectTitle: 'GovConnect — Public Transparency Portal',
    externalLink: 'https://github.com/sunny1256777-cloud',
    externalLinkLabel: 'View on GitHub',
  },

  'govconnect': {
    id: 'govconnect',
    title: 'GovConnect — Public Transparency & RTI Portal',
    subtitle: 'Democratizing civic governance: A modern web platform tracking public infrastructure projects, budget allocations, and streamlining Right to Information (RTI) access for everyday citizens.',
    client: 'Civic Tech & Open Governance',
    year: '2025',
    discipline: 'Civic Tech · Full-Stack Web',
    tags: 'Civic Tech · Full Stack',
    gradient: 'bg-gradient-to-br from-[oklch(0.60_0.16_236)] via-[oklch(0.40_0.15_244)] to-[oklch(0.20_0.08_252)]',
    poster: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80',
    metrics: [
      { value: 'Digital RTI', label: 'Streamlined Information Filing' },
      { value: 'Open Data', label: 'Expenditure & Progress Tracking' },
      { value: 'Citizen-First', label: 'High Accessibility & Mobile UX' },
    ],
    role: 'Product Designer & Full-Stack Developer',
    scope: ['Civic UX Design', 'Open Data Schemas', 'RTI Workflow', 'Accessibility Standards'],
    contributions: [
      'Researched Right to Information (RTI) filing friction and engineered an intuitive step-by-step digital application wizard.',
      'Designed visual tracking timelines for public works projects (roads, schools, municipal infrastructure) with progress milestones.',
      'Created interactive expenditure breakdowns comparing sanctioned budgets against actual ground disbursement.',
      'Ensured strict adherence to mobile responsiveness and lightweight loading for low-bandwidth rural connections.',
    ],
    chapters: [
      {
        number: '01',
        title: 'The Mission: Accountability Through Usability',
        description: 'Government portals often bury critical public interest data under confusing navigation, broken PDF links, and bureaucratic jargon. GovConnect was conceived as a modern civic technology bridge, converting opaque municipal project registers into clean, easily readable dashboards that empower citizens to monitor tax expenditures in their neighborhood.',
      },
      {
        number: '02',
        title: 'Platform Architecture & Transparency Engines',
        description: 'GovConnect bridges raw civic data with intuitive public visualizations.',
        points: [
          {
            title: 'Project Status Radar',
            desc: 'Color-coded milestone tracking (Sanctioned, In Progress, Delayed, Completed) with verified contractor details.',
          },
          {
            title: 'RTI Document Assistant',
            desc: 'Guides citizens through drafting legally sound RTI inquiries with pre-filled department templates.',
          },
          {
            title: 'Community Feedback Loop',
            desc: 'Allows local residents to upload on-ground photos verifying project progress against official claims.',
          },
        ],
      },
      {
        number: '03',
        title: 'Civic Impact',
        description: 'Demonstrated how clean design, transparent open data, and modern web frameworks can make government accountability as effortless as checking a social feed.',
      },
    ],
    nextProjectId: 'prd-generator',
    nextProjectTitle: 'Autonomous PRD Generator & Requirement Collector',
    externalLink: '#',
    externalLinkLabel: 'Explore GovConnect Live',
  },

  'prd-generator': {
    id: 'prd-generator',
    title: 'Autonomous PRD Generator & Requirement Collector',
    subtitle: 'An intelligent AI product discovery agent that dynamically interviews non-technical founders and clients to automatically engineer complete, production-ready Product Requirements Documents.',
    client: 'Generative AI & Software Discovery',
    year: '2025',
    discipline: 'Generative AI · Autonomous Tools',
    tags: 'Generative AI · Automation',
    gradient: 'bg-gradient-to-br from-[oklch(0.55_0.18_300)] via-[oklch(0.38_0.14_290)] to-[oklch(0.18_0.08_270)]',
    poster: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=80',
    metrics: [
      { value: 'Dynamic AI', label: 'Contextual Follow-Up Questioning' },
      { value: '90% Faster', label: 'Requirement Scoping to PRD Delivery' },
      { value: 'Production Ready', label: 'Structured Tech Specs & User Stories' },
    ],
    role: 'AI System Designer & Engineer',
    scope: ['Prompt Engineering', 'Multi-turn LLM Context', 'Structured JSON Output', 'Export Engine'],
    contributions: [
      'Designed dynamic question chaining: the AI analyzes each answer and detects edge-cases or missing specifications before proceeding.',
      'Constructed prompt schemas enforcing strict software engineering standards (User Personas, Acceptance Criteria, API Models).',
      'Implemented automated Markdown and PDF exports with formatted tables, tech stack recommendations, and database schemas.',
      'Reduced software scoping turnaround time from multiple client consultation calls down to a single 15-minute interactive session.',
    ],
    chapters: [
      {
        number: '01',
        title: 'The Problem: Lost in Translation',
        description: 'When clients hire developers or agencies, requirements are almost always vague: "I want an app like Airbnb but for fitness". Developers spend weeks asking back-and-forth questions, or start coding based on assumptions that inevitably lead to expensive scope creep. What was needed was an intelligent agent that could interrogate the idea thoroughly before a single line of code is written.',
      },
      {
        number: '02',
        title: 'The Interactive Discovery Engine',
        description: 'Rather than presenting a static form, the application acts as an experienced Technical Product Manager.',
        points: [
          {
            title: 'Adaptive Socratic Questioning',
            desc: 'If a user mentions "user payments", the agent immediately branches to ask about gateway preferences, recurring billing, and refund policies.',
          },
          {
            title: 'Edge-Case Identification',
            desc: 'Actively flags missing details such as offline behavior, role-based access control, and GDPR/privacy compliance.',
          },
          {
            title: 'Structured Output Synthesis',
            desc: 'Transforms conversational transcripts into rigorous engineering documents with Epics, User Stories, and Data Models.',
          },
        ],
      },
      {
        number: '03',
        title: 'Empowering Builders Everywhere',
        description: 'Bridged the gap between non-technical dreamers and technical executors, proving how generative AI can transform chaotic brainstorming into bulletproof engineering roadmaps.',
      },
    ],
    nextProjectId: 'namrata-textiles',
    nextProjectTitle: 'Namrata Textiles — Luxury 3D E-Commerce',
    externalLink: 'https://github.com/sunny1256777-cloud',
    externalLinkLabel: 'View on GitHub',
  },
};
