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
    externalLink: 'https://ai.studio/apps/6322a514-0759-46f6-b563-d576e0222fa6?fullscreenApplet=true',
    externalLinkLabel: 'Launch Live 3D Store',
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
      { value: '100% Offline', label: 'Local-First Data Architecture' },
      { value: '4 Modules', label: 'Pipeline, Leads, Docs, Automated Tracking' },
      { value: 'Zero Latency', label: 'Instant Client File Retrieval' },
    ],
    role: 'Systems Architect & Lead Developer',
    scope: ['Offline-First DB', 'Claude Code Workflows', 'Client Management UX', 'Export & Reporting Engine'],
    contributions: [
      'Architected local SQLite and IndexedDB persistent storage ensuring zero data loss during unstable connectivity.',
      'Constructed pipeline visualizers with kanban drag-and-drop states tailored specifically to high-ticket consultancy engagements.',
      'Leveraged Claude Code CLI workflows to rapidly scaffold, test, and iterate complex data schema migrations.',
      'Integrated auto-generating proposal documents and invoice previews with one-click export capabilities.',
    ],
    chapters: [
      {
        number: '01',
        title: 'The Challenge: Fragile SaaS in Mobile Environments',
        description: 'Consultants travel frequently between client factories, workshops, and transit hubs where cellular signals drop. Typical web-based CRMs choke on slow connections, losing unsaved notes and stalling critical calls. We engineered an offline-first desktop/web architecture where all operations happen locally first and synchronize invisibly when connectivity returns.',
      },
      {
        number: '02',
        title: 'Engineering With Claude Code',
        description: 'Leveraging AI-native development practices, we accelerated the design and implementation of nested relational data models and complex query optimizers.',
        points: [
          {
            title: 'Conflict-Free Synchronization',
            desc: 'Ensures changes made offline never overwrite collaborative updates from other agency members.',
          },
          {
            title: 'Granular Client Dossiers',
            desc: 'Every client interaction, call recording summary, and deliverable timeline is unified in a single, high-density dashboard.',
          },
          {
            title: 'Financial & Invoice Automation',
            desc: 'Generates GST-compliant PDF billing records directly in the browser with zero external API dependencies.',
          },
        ],
      },
      {
        number: '03',
        title: 'Operational Independence',
        description: 'Agency teams gained complete data privacy, lightning-fast search across thousands of records, and total freedom from recurring SaaS subscription costs.',
      },
    ],
    nextProjectId: 'govconnect',
    nextProjectTitle: 'GovConnect — Public Transparency Portal',
    externalLink: 'https://github.com/sunny1256777-cloud/SIYA-CONSULTANCY-CRM',
    externalLinkLabel: 'Explore on GitHub',
  },

  'govconnect': {
    id: 'govconnect',
    title: 'GovConnect — Public Transparency Portal',
    subtitle: 'A modern digital governance portal tracking public municipal projects, RTI applications, and infrastructure expenditures with radical clarity and citizen-friendly interfaces.',
    client: 'Civic Technology & Open Governance',
    year: '2025',
    discipline: 'Civic Tech · Full-Stack Development',
    tags: 'Civic Tech · Full Stack',
    gradient: 'bg-gradient-to-br from-[oklch(0.60_0.16_236)] via-[oklch(0.40_0.15_244)] to-[oklch(0.20_0.08_252)]',
    poster: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80',
    metrics: [
      { value: 'Real-Time', label: 'Ward & Municipal Project Statuses' },
      { value: 'Open Data', label: 'Transparent Budget Allocation Charts' },
      { value: '100%', label: 'Mobile Responsive Citizen Portal' },
    ],
    role: 'Full-Stack Developer & UI Architect',
    scope: ['Public Data Aggregation', 'Interactive Charts', 'Citizen Feedback Pipeline', 'Accessibility (a11y)'],
    contributions: [
      'Designed a clean, high-contrast user interface prioritizing readability for citizens across diverse age groups and devices.',
      'Developed interactive budgetary breakdown charts illustrating fund utilization across roads, sanitation, and parks.',
      'Created a streamlined grievance submission flow with automatic reference ticket generation.',
      'Engineered localized multi-language toggle components allowing seamless transition between regional dialects.',
    ],
    chapters: [
      {
        number: '01',
        title: 'Democratizing Public Accountability',
        description: 'Municipal governance information is often buried inside complex departmental PDFs and fragmented government portals. Citizens struggle to verify whether road tenders, park renovations, or street lighting projects in their ward are on schedule or where funds were allocated. GovConnect synthesizes this information into an intuitive dashboard.',
      },
      {
        number: '02',
        title: 'Designing for Radical Clarity',
        description: 'Every interface element was measured against strict usability and accessibility heuristics.',
        points: [
          {
            title: 'Ward-Level Drilldown',
            desc: 'Citizens can select their locality and instantly view all active municipal tenders with budget vs spent figures.',
          },
          {
            title: 'Timeline Tracker',
            desc: 'Visual milestone stepper showing tender issue date, contractor assignment, progress percentage, and targeted completion.',
          },
          {
            title: 'Citizen Audit Photos',
            desc: 'Allows verified local residents to upload on-site photographic proof of project progress.',
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
    externalLink: 'https://gov-connect-fc9d2537.base44.app',
    externalLinkLabel: 'Launch GovConnect Portal',
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
    nextProjectId: 'river-foundation',
    nextProjectTitle: 'River Charitable Foundation',
    externalLink: 'https://ai.studio/apps/b429f882-d743-4311-8e4e-0c9f844c17ec',
    externalLinkLabel: 'Launch ScopeForge AI',
  },

  'river-foundation': {
    id: 'river-foundation',
    title: 'River Charitable Foundation — NGO Web Portal',
    subtitle: 'An emotionally resonant, high-performance web platform built for an NGO dedicated to child rights, primary education, nutrition, and urgent grassroots community aid.',
    client: 'River Charitable Foundation (NGO)',
    year: '2025',
    discipline: 'Client Project · Non-Profit & Web',
    tags: 'Client Project · NGO Web',
    gradient: 'bg-gradient-to-br from-rose-600 via-pink-700 to-purple-900',
    poster: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1400&q=80',
    metrics: [
      { value: '100%', label: 'Mobile Optimized & Accessible' },
      { value: 'Instant', label: 'Transparent Donor Impact Breakdown' },
      { value: '4 Pillars', label: 'Education, Nutrition, Health & Shelter' },
    ],
    role: 'Lead Designer & Frontend Architect',
    scope: ['UI/UX Design', 'Donation Flows', 'Impact Storytelling', 'High Accessibility'],
    contributions: [
      'Created an immersive storytelling layout showcasing real field missions, volunteer narratives, and verified beneficiary impact.',
      'Engineered transparent fund tracking so donors can see exactly how each contribution converts to meals, books, or medical aid.',
      'Designed responsive donor onboarding with automated tax receipt generation and recurring pledge options.',
      'Engineered ultra-lightweight page payloads for instant loading even on 2G/3G mobile devices in rural areas.',
    ],
    chapters: [
      {
        number: '01',
        title: 'The Mission: Human Connection at Scale',
        description: 'Non-governmental organizations thrive on trust and transparency. River Charitable Foundation needed a digital portal that moved beyond standard charitable appeals, giving visitors a palpable, tangible view into field operations, children supported, and schools rehabilitated.',
      },
      {
        number: '02',
        title: 'Storytelling Meets Transparent Ledger',
        description: 'We built a digital experience that bridges the gap between urban donors and grassroots rural operations.',
        points: [
          {
            title: 'Impact Calculator',
            desc: 'Allows contributors to visualize exactly what their contribution delivers—from 30 days of mid-day nutrition to a semester of STEM kits.',
          },
          {
            title: 'Volunteer Dispatch Portal',
            desc: 'Coordinates local on-ground volunteers with automated schedule notifications and campaign supplies.',
          },
          {
            title: 'Radical Financial Transparency',
            desc: 'Integrates public annual financial audit summaries and project-wise expenditure pie charts.',
          },
        ],
      },
      {
        number: '03',
        title: 'Amplifying Real Grassroots Change',
        description: 'The foundation reported record online volunteer signups and sustained corporate sponsorship inquiries within weeks of the digital launch.',
      },
    ],
    nextProjectId: 'sparclo-agents',
    nextProjectTitle: 'Sparclo Multi-Agent Pipeline',
    externalLink: 'https://ai.studio/apps/0d1ef5cf-7b8f-481e-b2e9-2563b554b843?fullscreenApplet=true',
    externalLinkLabel: 'Visit River Foundation Live',
  },

  'sparclo-agents': {
    id: 'sparclo-agents',
    title: 'Sparclo Multi-Agent Pipeline — Autonomous Agency Ops',
    subtitle: 'A 4-agent autonomous AI workflow engine orchestrating influencer discovery, brand deal qualification, customized outreach, and daily pipeline intelligence for Sparclo Media.',
    client: 'Sparclo Media (Internal Infrastructure)',
    year: '2025',
    discipline: 'AI Agent Architectures · Automation',
    tags: '4 Autonomous Agents · AI Ops',
    gradient: 'bg-gradient-to-br from-blue-700 via-indigo-800 to-slate-900',
    poster: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=80',
    metrics: [
      { value: '4 Agents', label: 'Discovery, Qualify, Outreach & Intelligence' },
      { value: '10×', label: 'Agency Deal Pipeline Throughput' },
      { value: '24/7', label: 'Autonomous Lead Ingestion & Scoring' },
    ],
    role: 'Founder & AI Systems Architect',
    scope: ['Multi-Agent Orchestration', 'LLM Context Engineering', 'CRM Sync', 'Automated Scoring'],
    contributions: [
      'Architected 4 specialized AI agents that pass structured JSON payloads asynchronously to qualify creators and brands.',
      'Engineered an influencer vetting algorithm analyzing engagement genuineness, follower demographics, and niche affinity.',
      'Implemented automated personalized cold-outreach templates based on recent brand releases and creator aesthetic.',
      'Integrated daily executive Telegram/WhatsApp brief summarizing new warm replies and scheduling calls.',
    ],
    chapters: [
      {
        number: '01',
        title: 'The Bottleneck of Modern Media Agencies',
        description: 'Traditional talent and marketing agencies spend 70% of human hours manually scrolling social media feeds, copying profile metrics into spreadsheets, and drafting repetitive outreach emails. At Sparclo Media, we wanted to replace manual drudgery with an autonomous pipeline of coordinated AI agents.',
      },
      {
        number: '02',
        title: 'The 4-Agent Autonomous System',
        description: 'Each agent is specialized with a distinct role, prompt guidelines, and strict validation guardrails.',
        points: [
          {
            title: 'Lead Finder Agent',
            desc: 'Monitors brand campaigns, sponsored posts, and creator growth metrics to spot emerging match opportunities.',
          },
          {
            title: 'Qualification Agent',
            desc: 'Audits engagement velocity, audience quality, and brand safety parameters before adding prospects to pipeline.',
          },
          {
            title: 'Outreach & Follow-Up Agent',
            desc: 'Drafts bespoke multi-stage communication tailored specifically to each brand manager and creator voice.',
          },
          {
            title: 'Executive Summary Agent',
            desc: 'Compiles overnight pipeline health, conversion ratios, and critical action items every morning at 8 AM.',
          },
        ],
      },
      {
        number: '03',
        title: 'Superhuman Agency Scalability',
        description: 'Allowed Sparclo Media to operate with the capacity of a 15-person agency team while maintaining boutique personalization and high-touch relationship management.',
      },
    ],
    nextProjectId: 'erm-system',
    nextProjectTitle: 'Employee Relationship Management (ERM)',
    externalLink: 'https://instagram.com/sparclo.media',
    externalLinkLabel: 'Explore Sparclo Media',
  },

  'erm-system': {
    id: 'erm-system',
    title: 'Kuldeep ERM — Employee Relationship Management',
    subtitle: 'A full-spectrum enterprise operations platform built for factory supervisors and department leads to oversee workforce attendance, daily shift tasks, and operational efficiency.',
    client: 'Enterprise Industrial Operations',
    year: '2025',
    discipline: 'Enterprise Software · Operations',
    tags: 'Enterprise Systems · Workforce Ops',
    gradient: 'bg-gradient-to-br from-emerald-600 via-teal-700 to-slate-900',
    poster: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=80',
    metrics: [
      { value: 'Shift-Ready', label: 'Instant Daily Task Allocation' },
      { value: 'Zero Latency', label: 'Optimized Real-Time Rostering' },
      { value: '100%', label: 'Audit-Proof Attendance Logs' },
    ],
    role: 'Full-Stack Developer & Product Lead',
    scope: ['Role-Based Access Control', 'Shift Scheduling', 'Performance Metrics', 'Supervisor UX'],
    contributions: [
      'Developed a clean, high-efficiency dashboard tailored for busy supervisors operating in factory floor environments.',
      'Implemented robust role-based permissions separating workers, department heads, and executive management.',
      'Designed automated attendance anomaly detection flagging late logins, unscheduled overtime, and unassigned shifts.',
      'Engineered CSV/Excel batch imports and automated end-of-month payroll reconciliation exports.',
    ],
    chapters: [
      {
        number: '01',
        title: 'Tackling Industrial Workforce Friction',
        description: 'In fast-paced manufacturing and enterprise operations, supervisor hours are drained by paper attendance registers, verbal shift handovers, and disorganized task dispatching. Mistakes in logs cause payroll disputes and delayed production quotas. Kuldeep ERM was engineered to digitize the entire daily floor lifecycle.',
      },
      {
        number: '02',
        title: 'Floor-First Architecture',
        description: 'Built with rugged usability principles so supervisors can execute core tasks in 3 clicks or less on tablet devices.',
        points: [
          {
            title: 'Rapid Shift Roster Grid',
            desc: 'Drag-and-drop workforce assignment across assembly lines, maintenance bays, and packaging stations.',
          },
          {
            title: 'Task Completion Verification',
            desc: 'Real-time checklists with photo verification requirements for critical machinery safety inspections.',
          },
          {
            title: 'Incident & Grievance Reporting',
            desc: 'Confidential digital logging for floor accidents, equipment breakdowns, and worker requests.',
          },
        ],
      },
      {
        number: '03',
        title: 'Measurable Floor Productivity',
        description: 'Cut morning shift transition delays from 35 minutes down to 8 minutes, boosting plant floor utilization and worker satisfaction.',
      },
    ],
    nextProjectId: 'consultancy-web',
    nextProjectTitle: 'Consultancy Web Portal',
    externalLink: 'https://github.com/sunny1256777-cloud/kuldeep-erm-',
    externalLinkLabel: 'View ERM on GitHub',
  },

  'consultancy-web': {
    id: 'consultancy-web',
    title: 'Siya Consultancy — High-Converting Web Platform',
    subtitle: 'A high-impact digital presence and interactive client intake pipeline engineered for business consultants to convert cold traffic into qualified retainer proposals.',
    client: 'Siya Consultancy & Advisory',
    year: '2025',
    discipline: 'Web Architecture · Conversion UX',
    tags: 'Client Web · Conversion Systems',
    gradient: 'bg-gradient-to-br from-amber-600 via-orange-700 to-stone-900',
    poster: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80',
    metrics: [
      { value: '4.2×', label: 'Consultation Inquiry Rate' },
      { value: '<1s', label: 'Ultra-Fast Page Load Time' },
      { value: 'Dynamic', label: 'Interactive Project Estimator' },
    ],
    role: 'Full-Stack Developer & Growth Engineer',
    scope: ['Interactive Forms', 'Brand Strategy', 'SEO & Performance', 'CRM Webhook Pipeline'],
    contributions: [
      'Designed an authoritative, corporate-grade visual aesthetic tailored to high-net-worth commercial clients.',
      'Created a multi-step dynamic inquiry calculator that pre-qualifies client budget and timeline expectations.',
      'Built automated webhooks routing qualified leads directly into CRM pipelines with instantaneous email acknowledgments.',
      'Achieved a 99+ Google Lighthouse performance score through optimized asset delivery and semantic markup.',
    ],
    chapters: [
      {
        number: '01',
        title: 'The Challenge: Establishing Unmistakable Authority',
        description: 'High-ticket advisory firms compete in crowded markets where clients demand proof of competence before scheduling a call. Static brochure sites fail because they do not engage visitors or collect actionable scoping requirements. Siya Consultancy required an interactive digital flagship.',
      },
      {
        number: '02',
        title: 'Interactive Scope Qualification',
        description: 'Engineered an intuitive consultation builder that turns prospective clients into active participants.',
        points: [
          {
            title: 'Dynamic Scope Calculator',
            desc: 'Guides prospective clients through service selection, company size, and deliverable targets to generate custom advisory bundles.',
          },
          {
            title: 'Interactive Case Study Sliders',
            desc: 'Presents before/after client transformation metrics with verified financial and operational impact graphs.',
          },
          {
            title: 'Instant Calendar Integration',
            desc: 'Allows pre-qualified enterprise leads to book confidential advisory sessions directly on partner calendars.',
          },
        ],
      },
      {
        number: '03',
        title: 'Transforming Inbound Pipeline',
        description: 'Replaced endless back-and-forth introductory calls with pre-qualified discovery meetings, dramatically accelerating deal closure cycles.',
      },
    ],
    nextProjectId: 'outreach-engine',
    nextProjectTitle: 'D2C Outreach Automation Engine',
    externalLink: 'https://github.com/sunny1256777-cloud/SIYA-CONSULTANCY-CRM',
    externalLinkLabel: 'View Consultancy Repository',
  },

  'outreach-engine': {
    id: 'outreach-engine',
    title: 'D2C Outreach Automation — Brand Pipeline Engine',
    subtitle: 'An automated outbound prospecting and deal pipeline tracker built for Sparclo Media to match high-growth D2C consumer brands with target creators at scale.',
    client: 'Sparclo Media Agency Suite',
    year: '2025',
    discipline: 'Automation & Data Pipelines',
    tags: 'Agency Tooling · Growth Engineering',
    gradient: 'bg-gradient-to-br from-purple-700 via-violet-800 to-slate-900',
    poster: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1400&q=80',
    metrics: [
      { value: '500+', label: 'Personalized D2C Brand Contacts / Week' },
      { value: '38%', label: 'Open & Engagement Response Rate' },
      { value: 'Custom', label: 'Real-Time Excel/Sheets Sync' },
    ],
    role: 'Growth Automation Architect',
    scope: ['Outreach Orchestration', 'Domain Health Management', 'Data Scraping', 'Dynamic Templates'],
    contributions: [
      'Engineered automated cold outreach sequences with randomized delays and inbox rotation to protect sender reputation.',
      'Developed real-time bidirectional synchronization between outreach engines and internal master agency tracking sheets.',
      'Built custom enrichment scripts extracting brand CMO/Marketing Director verified contact coordinates.',
      'Configured automated reminder triggers when high-intent prospects view proposals or open deck attachments.',
    ],
    chapters: [
      {
        number: '01',
        title: 'Scaling Personalization Without Spam',
        description: 'Brand decision makers receive dozens of bland, AI-generated pitches daily. Standard mass mailers end up straight in spam folders and damage agency credibility. Sparclo Media required a system that could generate deep, genuinely personalized campaign ideas for each individual consumer brand at scale.',
      },
      {
        number: '02',
        title: 'The Precision Outbound Architecture',
        description: 'Combines dynamic brand data enrichment with intelligent follow-up mechanics.',
        points: [
          {
            title: 'Dynamic Angle Synthesis',
            desc: 'Scrapes brand product launches and pairs them with specific creators whose audience demographics align with the brand’s target customer.',
          },
          {
            title: 'Multi-Channel Touchpoints',
            desc: 'Coordinates email outreach with professional LinkedIn connection sequences and Instagram brand partnership inquiries.',
          },
          {
            title: 'Sentiment Detection',
            desc: 'Parses incoming replies to detect buying signals vs "not interested", immediately escalating warm opportunities to the agency founders.',
          },
        ],
      },
      {
        number: '03',
        title: 'Sustained Commercial Growth',
        description: 'Established consistent monthly sponsor retainers for Sparclo creators across apparel, wellness, and tech verticals.',
      },
    ],
    nextProjectId: 'webgl-shaders',
    nextProjectTitle: 'Procedural WebGL Fabric Shaders',
    externalLink: 'https://instagram.com/sparclo.media',
    externalLinkLabel: 'Discover Sparclo Media',
  },

  'webgl-shaders': {
    id: 'webgl-shaders',
    title: 'Procedural WebGL Shaders & 3D Fabric Sim',
    subtitle: 'An experimental 3D laboratory rendering real-time procedural silk, velvet, and metallic jacquard textiles in the browser with physically-accurate light scattering.',
    client: 'Graphics Research & 3D Web',
    year: '2025',
    discipline: 'WebGL · GLSL Shaders · Three.js',
    tags: 'WebGL · 3D Shaders · Interactive',
    gradient: 'bg-gradient-to-br from-cyan-600 via-blue-700 to-indigo-950',
    poster: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1400&q=80',
    metrics: [
      { value: '60 FPS', label: 'Smooth Render On Mobile Hardware' },
      { value: '<300KB', label: 'Asset Payload Without Heavy Textures' },
      { value: 'Real-Time', label: 'Procedural Anisotropic Reflections' },
    ],
    role: 'Creative Technologist & Shader Engineer',
    scope: ['GLSL Programming', 'Three.js Pipeline', 'Mathematical Lighting Models', 'Mobile Shader Optimization'],
    contributions: [
      'Wrote custom GLSL vertex and fragment shaders calculating micro-facet normal perturbations procedurally on the GPU.',
      'Implemented real-time mouse/touch light tracking allowing users to see anisotropic streaks shift across virtual silk folds.',
      'Eliminated megabytes of heavy 4K texture downloads by synthesizing weave patterns purely via mathematical noise algorithms.',
      'Developed responsive viewport resizing and dynamic DPI scaling for crisp rendering on high-density Retina and OLED screens.',
    ],
    chapters: [
      {
        number: '01',
        title: 'The Art of Simulating Sheen on the GPU',
        description: 'Standard phong and PBR lighting models treat surfaces as uniformly rough or smooth. Natural fabrics—especially Indian silks, brocades, and velvets—possess directional weave microstructures that bend specular highlights into elliptical ribbons of light. Simulating this in real time on mobile browsers without lagging required bespoke GLSL shader development.',
      },
      {
        number: '02',
        title: 'Algorithmic Textile Synthesis',
        description: 'Pushing the boundaries of what is possible in contemporary browser-based 3D graphics.',
        points: [
          {
            title: 'Ward Anisotropic Reflection',
            desc: 'Calculates custom tangent and binormal vector reflections to generate the signature streak of luxury silk.',
          },
          {
            title: 'Procedural Normal Map Generation',
            desc: 'Synthesizes thread weave density and cross-stitch relief using sine wave interference and simplex noise.',
          },
          {
            title: 'Subsurface Scattering Approximation',
            desc: 'Simulates the warm light transmission through thin fabric edges, giving materials an authentic organic softness.',
          },
        ],
      },
      {
        number: '03',
        title: 'Next-Generation E-Commerce Standard',
        description: 'Demonstrated how high-performance creative coding can elevate standard product catalogs into unforgettable sensory interactions.',
      },
    ],
    nextProjectId: 'namrata-textiles',
    nextProjectTitle: 'Namrata Textiles — Luxury 3D E-Commerce',
    externalLink: 'https://ai.studio/apps/6322a514-0759-46f6-b563-d576e0222fa6?fullscreenApplet=true',
    externalLinkLabel: 'Launch Interactive 3D Demo',
  },
};
