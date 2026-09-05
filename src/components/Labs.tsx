import React, { useState, useRef } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, Bot, Users, Heart, Briefcase, Mail, Boxes } from 'lucide-react';
import { Reveal } from './Reveal';

interface LabApp {
  id: string;
  name: string;
  description: string;
  category: string;
  link: string;
  icon: React.ReactNode;
  color: string;
  image: string;
  tag: string;
}

const apps: LabApp[] = [
  {
    id: 'sparclo-agents',
    name: 'Sparclo Multi-Agent Pipeline',
    description: 'Lead Finder, Outreach, Follow-up, and Daily Summary agents automating influencer discovery and brand deals.',
    category: 'AI Agents, Sparclo Media · 2025',
    link: 'https://instagram.com/sparclo.media',
    icon: <Bot className="size-4 text-court-glow" />,
    color: 'from-blue-600/30 to-indigo-900/40',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=85',
    tag: '4 Autonomous Agents',
  },
  {
    id: 'erm-system',
    name: 'Employee Relationship (ERM)',
    description: 'Supervisor management dashboard for employee records, shift attendance, task distribution, and daily workflows.',
    category: 'Business Systems · 2025',
    link: 'https://github.com/sunny1256777-cloud/kuldeep-erm-',
    icon: <Users className="size-4 text-emerald-400" />,
    color: 'from-emerald-600/30 to-teal-900/40',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=85',
    tag: 'Operations Dashboard',
  },
  {
    id: 'river-foundation',
    name: 'River Charitable Foundation',
    description: 'Official web portal for an NGO championing child rights, primary education, nutrition, and emergency community aid.',
    category: 'Client Project, Web · 2025',
    link: 'https://ai.studio/apps/0d1ef5cf-7b8f-481e-b2e9-2563b554b843?fullscreenApplet=true',
    icon: <Heart className="size-4 text-rose-400" />,
    color: 'from-rose-600/30 to-pink-900/40',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=85',
    tag: 'NGO Web Portal',
  },
  {
    id: 'consultancy-web',
    name: 'Consultancy Web Portal',
    description: 'High-converting business web presence featuring dynamic inquiry flows, service breakdowns, and lead capture.',
    category: 'Web Development · 2025',
    link: 'https://github.com/sunny1256777-cloud/SIYA-CONSULTANCY-CRM',
    icon: <Briefcase className="size-4 text-amber-400" />,
    color: 'from-amber-600/30 to-orange-900/40',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=85',
    tag: 'Lead Conversion UI',
  },
  {
    id: 'outreach-engine',
    name: 'D2C Outreach Automation',
    description: 'Structured cold-email orchestration and custom Excel agency tracker connecting Indian D2C brands with influencers.',
    category: 'Agency Tooling · 2025',
    link: 'https://instagram.com/sparclo.media',
    icon: <Mail className="size-4 text-purple-400" />,
    color: 'from-purple-600/30 to-violet-900/40',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=85',
    tag: 'Outreach Pipeline',
  },
  {
    id: 'webgl-shaders',
    name: 'Procedural WebGL Shaders',
    description: 'Real-time 3D interactive materials, fabric normal map manipulation, and 360° product inspection for luxury goods.',
    category: 'WebGL, 3D Graphics · 2025',
    link: 'https://ai.studio/apps/6322a514-0759-46f6-b563-d576e0222fa6?fullscreenApplet=true',
    icon: <Boxes className="size-4 text-cyan-400" />,
    color: 'from-cyan-600/30 to-blue-900/40',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=85',
    tag: '3D Interactive Silk',
  },
];

interface LabsProps {
  onSelectProject?: (id: string) => void;
}

export const Labs: React.FC<LabsProps> = ({ onSelectProject }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    if (index < 0 || index >= apps.length) return;
    setActiveSlide(index);
    if (carouselRef.current) {
      const cardWidth = 320;
      carouselRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="labs" className="bg-ink py-20 text-white md:py-32">
      <div className="mx-auto max-w-[1600px] md:px-10">
        {/* Section Heading */}
        <div className="mb-12 flex flex-col items-start justify-between gap-5 px-6 md:mb-16 md:flex-row md:items-end md:px-0">
          <Reveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/50">
              Systems &amp; Labs
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.02em] md:text-6xl">
              Systems I built,
              <br />
              <span className="text-[oklch(0.78_0.14_235)]">designed &amp; automated.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="max-w-sm text-pretty text-white/70">
              Autonomous multi-agent pipelines, business backends, and full-stack utilities built to eliminate manual friction. Tap any system to read the deep dive.
            </p>
          </Reveal>
        </div>

        {/* Apps Showcase (Horizontal scroll on mobile, 3-column grid on desktop) */}
        <div
          ref={carouselRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-6 px-6 pb-4 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:px-0 md:pb-0"
        >
          {apps.map((app, idx) => (
            <Reveal key={app.id} delay={idx * 0.1}>
              <div
                role="button"
                tabIndex={0}
                onClick={() => onSelectProject?.(app.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectProject?.(app.id);
                  }
                }}
                className="group block w-[75vw] max-w-[320px] shrink-0 snap-start md:w-auto md:max-w-none cursor-pointer text-left select-none outline-none focus-visible:ring-2 focus-visible:ring-court-glow rounded-3xl"
              >
                {/* Phone Mockup Frame */}
                <div className="mx-auto w-full max-w-[260px] md:max-w-none">
                  <div className="relative mx-auto aspect-[720/1564] w-full max-w-[240px] rounded-[2.4rem] border border-white/10 bg-[oklch(0.12_0.01_260)] p-[6px] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6),inset_0_0_0_1.5px_rgba(255,255,255,0.06)] transition-transform duration-500 group-hover:scale-[1.02]">
                    <div className="pointer-events-none absolute inset-0 rounded-[2.4rem] ring-1 ring-white/5" />
                    <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-black">
                      {/* Dynamic Island Notch */}
                      <div className="absolute left-1/2 top-3 z-20 h-4 w-20 -translate-x-1/2 rounded-full bg-neutral-900 border border-white/10 shadow-sm" />

                      {/* Screen Content With Realistic Photo / UI */}
                      <div className="relative size-full overflow-hidden">
                        {/* Real Project UI Photo */}
                        <img
                          src={app.image}
                          alt={app.name}
                          className="size-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                          loading="lazy"
                        />

                        {/* Ambient Scrim Gradient for Depth & Legibility */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/20" />

                        {/* Top Bar Floating Pill Badge */}
                        <div className="absolute top-10 inset-x-0 px-3.5 flex items-center justify-between z-10">
                          <span className="inline-flex size-8 items-center justify-center rounded-xl bg-black/50 backdrop-blur-md border border-white/20 p-1.5 shadow-sm">
                            {app.icon}
                          </span>
                          <span className="rounded-full bg-black/60 backdrop-blur-md border border-white/20 px-2.5 py-0.5 font-mono text-[9px] font-medium text-white/90">
                            {app.tag}
                          </span>
                        </div>

                        {/* Bottom Floating Glassmorphic Dock */}
                        <div className="absolute bottom-3 inset-x-3 z-10">
                          <div className="rounded-2xl bg-black/65 border border-white/15 p-3 backdrop-blur-md shadow-lg transition-transform duration-300 group-hover:translate-y-[-2px]">
                            <div className="flex items-center justify-between text-[11px] font-mono">
                              <span className="font-display font-medium text-white text-xs truncate pr-2">
                                {app.name}
                              </span>
                              <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 font-semibold shrink-0">
                                <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                Active
                              </span>
                            </div>

                            <div className="mt-2.5 flex items-center justify-between border-t border-white/10 pt-2 text-[10px] font-mono text-white/70">
                              <span>Deep Dive</span>
                              <span className="text-court-glow group-hover:text-white transition-colors flex items-center gap-0.5">
                                Case Study ↗
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* App Description */}
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center gap-1.5 font-display text-xl font-semibold tracking-[-0.01em] transition-colors duration-300 group-hover:text-[oklch(0.78_0.14_235)] md:text-2xl">
                    {app.name}
                    <ArrowUpRight className="h-4 w-4 opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <div className="mt-2 text-sm text-white/65 text-pretty md:text-[15px]">
                    {app.description}
                  </div>
                  <div className="mt-3 flex items-center justify-center gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
                      {app.category}
                    </span>
                    <span className="font-mono text-[10px] text-court-glow opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      · View Deep Dive →
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Mobile Pagination Chevrons & Dots */}
        <div className="mt-6 md:hidden flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => scrollToIndex(activeSlide - 1)}
            disabled={activeSlide === 0}
            aria-label="Previous system"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/25 text-white/80 transition-all active:scale-90 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-1">
            {apps.map((_, idx) => {
              const isActive = activeSlide === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => scrollToIndex(idx)}
                  aria-label={`Go to system ${idx + 1}`}
                  className="grid h-8 w-8 place-items-center rounded-full"
                >
                  <span
                    className={`block h-2.5 rounded-full transition-all duration-300 ${
                      isActive ? 'w-[26px] bg-accent' : 'w-[10px] bg-white/30'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => scrollToIndex(activeSlide + 1)}
            disabled={activeSlide === apps.length - 1}
            aria-label="Next system"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/25 text-white/80 transition-all active:scale-90 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
