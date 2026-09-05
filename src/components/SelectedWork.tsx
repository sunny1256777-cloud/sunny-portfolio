import React from 'react';
import { ArrowUpRight, Sparkles, Database, Globe, Cpu } from 'lucide-react';
import { Reveal } from './Reveal';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string;
  year: string;
  icon: React.ReactNode;
  poster: string;
  gradient: string;
  deviceType: 'tablet' | 'phone' | 'full';
  link: string;
  stats?: string;
}

const projects: Project[] = [
  {
    id: 'namrata-textiles',
    title: 'Namrata Textiles — Immersive 3D E-Commerce',
    description: "Designed and developed a luxury 3D e-commerce platform for Surat's textile market. Built WebGL procedural silk shaders, an interactive 360° fabric inspector, and digital lookbook.",
    tags: 'Client Project · WebGL & 3D',
    year: '2025',
    icon: <Sparkles className="size-4 text-amber-400" />,
    poster: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=80',
    gradient: 'bg-gradient-to-br from-[oklch(0.55_0.16_240)] via-[oklch(0.40_0.14_245)] to-[oklch(0.22_0.09_252)]',
    deviceType: 'tablet',
    link: 'https://ai.studio/apps/6322a514-0759-46f6-b563-d576e0222fa6?fullscreenApplet=true',
    stats: 'WebGL · 360° Fabric Shaders',
  },
  {
    id: 'consultancy-crm',
    title: 'AI-Powered Offline Consultancy CRM',
    description: 'Designed and developed an offline CRM for consultancy businesses using AI-assisted development (Claude Code). Includes client pipeline, lead tracking, document management, and workflow automation.',
    tags: 'Business Systems · AI Assisted',
    year: '2025',
    icon: <Database className="size-4 text-emerald-400" />,
    poster: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    gradient: 'bg-gradient-to-br from-[oklch(0.58_0.15_160)] via-[oklch(0.42_0.13_170)] to-[oklch(0.20_0.08_250)]',
    deviceType: 'tablet',
    link: 'https://github.com/sunny1256777-cloud/SIYA-CONSULTANCY-CRM',
    stats: 'Multi-Module · Offline-First',
  },
  {
    id: 'govconnect',
    title: 'GovConnect — Public Transparency Portal',
    description: 'Digital RTI (Right to Information) and government project tracking portal designed to present public project expenditures and timeline statuses in a clear, citizen-friendly format.',
    tags: 'Civic Tech · Full Stack',
    year: '2025',
    icon: <Globe className="size-4 text-sky-400" />,
    poster: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1000&q=80',
    gradient: 'bg-gradient-to-br from-[oklch(0.60_0.16_236)] via-[oklch(0.40_0.15_244)] to-[oklch(0.20_0.08_252)]',
    deviceType: 'phone',
    link: 'https://gov-connect-fc9d2537.base44.app',
    stats: 'Open Data · Citizen First',
  },
  {
    id: 'prd-generator',
    title: 'Autonomous PRD Generator & Requirement Collector',
    description: 'AI-powered interactive web application that dynamically interrogates clients with contextual follow-up questions to automatically generate structured, production-ready Product Requirements Documents.',
    tags: 'Generative AI · Automation',
    year: '2025',
    icon: <Cpu className="size-4 text-purple-400" />,
    poster: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    gradient: 'bg-ink',
    deviceType: 'full',
    link: 'https://ai.studio/apps/b429f882-d743-4311-8e4e-0c9f844c17ec',
    stats: 'LLM Orchestration · Auto PRD',
  },
];

interface SelectedWorkProps {
  onSelectProject?: (id: string) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectProject }) => {
  return (
    <section id="work" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        {/* Section Header */}
        <Reveal>
          <div className="mb-14 flex items-end justify-between gap-6 border-b border-foreground/10 pb-6 md:mb-20">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                Featured Projects
              </span>
              <h2 className="mt-3 font-display text-4xl font-semibold tracking-[-0.02em] md:text-6xl">
                Selected work
              </h2>
            </div>
            <p className="hidden max-w-[36ch] text-right text-sm text-muted-foreground md:block">
              Full-stack web applications, AI agent systems, and client solutions engineered from concept to deployment.
            </p>
          </div>
        </Reveal>

        {/* 2-Column Work Grid */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 md:gap-x-10">
          {projects.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 0.12}>
              <div
                onClick={() => onSelectProject?.(project.id)}
                className="group/card block cursor-pointer"
              >
                {/* Visual Card Container */}
                <div
                  className={`group relative aspect-[4/3] overflow-hidden rounded-2xl ${project.gradient} p-4 sm:p-5 md:p-6 transition-transform duration-200 active:scale-[0.98] cursor-pointer`}
                >
                  {/* Subtle Lighting Accent */}
                  <div className="pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay [background-image:radial-gradient(circle_at_25%_15%,white,transparent_55%)]" />

                  {/* Device Showcase Frame */}
                  <div className="relative z-[1] flex h-full w-full items-center justify-center transition-transform duration-[900ms] ease-out group-hover/card:scale-[1.03]">
                    {project.deviceType === 'tablet' && (
                      <div className="w-[90%] -translate-y-[4%] md:translate-y-0">
                        <div className="rounded-[1.2rem] bg-[oklch(0.08_0.01_255)] p-[7px] shadow-[0_22px_48px_-28px_rgba(0,0,0,0.45)] ring-1 ring-black/25">
                          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[0.95rem] bg-black">
                            <div className="absolute left-1/2 top-1.5 z-10 h-[3px] w-10 -translate-x-1/2 rounded-full bg-white/20" />
                            <img
                              src={project.poster}
                              alt={project.title}
                              className="size-full object-cover"
                              loading="lazy"
                            />
                            {project.stats && (
                              <div className="absolute bottom-2 left-3 rounded-full bg-black/60 px-3 py-1 text-[11px] font-mono text-white/90 backdrop-blur-md border border-white/10">
                                {project.stats}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    {project.deviceType === 'phone' && (
                      <div className="w-[50%] max-w-[230px] translate-y-[10%] sm:w-[46%] md:w-[44%]">
                        <div className="rounded-[clamp(24px,11%,36px)] bg-[oklch(0.09_0.01_255)] p-[3.5%] shadow-[0_24px_48px_-22px_rgba(0,0,0,0.55)] ring-1 ring-black/40">
                          <div className="relative overflow-hidden rounded-[clamp(20px,8.5%,30px)] bg-black">
                            <div className="absolute left-1/2 top-[3%] z-10 h-[3.5%] w-[24%] -translate-x-1/2 rounded-full bg-black ring-1 ring-white/5" />
                            <img
                              src={project.poster}
                              alt={project.title}
                              className="block aspect-[9/19.5] w-full object-cover object-top"
                              loading="lazy"
                            />
                            {project.stats && (
                              <div className="absolute bottom-3 inset-x-3 text-center rounded-full bg-black/70 px-2 py-1 text-[10px] font-mono text-white/90 backdrop-blur-md border border-white/10">
                                {project.stats}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    {project.deviceType === 'full' && (
                      <div className="relative h-full w-full overflow-hidden rounded-xl">
                        <img
                          src={project.poster}
                          alt={project.title}
                          className="size-full object-cover"
                          loading="lazy"
                        />
                        {project.stats && (
                          <div className="absolute bottom-4 left-4 rounded-full bg-black/70 px-3.5 py-1.5 text-xs font-mono text-white/90 backdrop-blur-md border border-white/10">
                            {project.stats}
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Dark Glass Hover Backdrop */}
                  <div className="pointer-events-none absolute inset-0 bg-black/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-500 group-hover/card:opacity-100" />

                  {/* Floating Action Pill */}
                  <div className="pointer-events-none absolute inset-0 z-[2] flex items-center justify-center opacity-0 transition-all duration-500 group-hover/card:opacity-100">
                    <span className="inline-flex translate-y-2 items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-ink shadow-lg transition-transform duration-500 group-hover/card:translate-y-0">
                      View details
                      <ArrowUpRight className="size-4" />
                    </span>
                  </div>
                </div>

                {/* Card Metadata */}
                <div className="group/meta mt-5">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex min-w-0 items-center gap-2 font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                      <span className="flex items-center justify-center rounded bg-foreground/5 p-1">
                        {project.icon}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{project.tags}</span>
                    </div>
                    <span className="shrink-0 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:text-[11px]">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="mt-2 flex min-w-0 items-start gap-2 font-display text-[22px] font-medium leading-[1.15] tracking-[-0.01em] transition-colors duration-300 group-hover/card:text-accent sm:text-2xl md:text-[28px]">
                    <span className="min-w-0 flex-1 text-pretty">{project.title}</span>
                    <ArrowUpRight className="size-5 shrink-0 -translate-x-1 translate-y-1 opacity-0 transition-all duration-500 group-hover/card:translate-x-0 group-hover/card:opacity-100" />
                  </h3>

                  <p className="mt-1.5 max-w-[56ch] text-pretty text-sm text-muted-foreground md:text-[15px]">
                    {project.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
