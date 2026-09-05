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
  tag: string;
}

const apps: LabApp[] = [
  {
    id: 'sparclo-agents',
    name: 'Sparclo Multi-Agent Pipeline',
    description: 'Lead Finder, Outreach, Follow-up, and Daily Summary agents automating influencer discovery and brand deals.',
    category: 'AI Agents, Sparclo Media · 2025',
    link: 'https://instagram.com/sparclo.media',
    icon: <Bot className="size-6 text-court-glow" />,
    color: 'from-blue-600/30 to-indigo-900/40',
    tag: '4 Autonomous Agents',
  },
  {
    id: 'erm-system',
    name: 'Employee Relationship (ERM)',
    description: 'Supervisor management dashboard for employee records, shift attendance, task distribution, and daily workflows.',
    category: 'Business Systems · 2025',
    link: 'https://github.com/sunny1256777-cloud',
    icon: <Users className="size-6 text-emerald-400" />,
    color: 'from-emerald-600/30 to-teal-900/40',
    tag: 'Operational Efficiency',
  },
  {
    id: 'river-foundation',
    name: 'River Charitable Foundation',
    description: 'Official web portal for an NGO championing child rights, primary education, nutrition, and emergency community aid.',
    category: 'Client Project, Web · 2025',
    link: '#',
    icon: <Heart className="size-6 text-rose-400" />,
    color: 'from-rose-600/30 to-pink-900/40',
    tag: 'Accessible & Modern',
  },
  {
    id: 'consultancy-web',
    name: 'Consultancy Web Portal',
    description: 'High-converting business web presence featuring dynamic inquiry flows, service breakdowns, and lead capture.',
    category: 'Web Development · 2025',
    link: '#',
    icon: <Briefcase className="size-6 text-amber-400" />,
    color: 'from-amber-600/30 to-orange-900/40',
    tag: 'Lead Generation',
  },
  {
    id: 'outreach-engine',
    name: 'D2C Outreach Automation',
    description: 'Structured cold-email orchestration and custom Excel agency tracker connecting Indian D2C brands with influencers.',
    category: 'Agency Tooling · 2025',
    link: 'https://instagram.com/sparclo.media',
    icon: <Mail className="size-6 text-purple-400" />,
    color: 'from-purple-600/30 to-violet-900/40',
    tag: 'Scale & Conversion',
  },
  {
    id: 'webgl-shaders',
    name: 'Procedural WebGL Shaders',
    description: 'Real-time 3D interactive materials, fabric normal map manipulation, and 360° product inspection for luxury goods.',
    category: 'WebGL, 3D Graphics · 2025',
    link: '#',
    icon: <Boxes className="size-6 text-cyan-400" />,
    color: 'from-cyan-600/30 to-blue-900/40',
    tag: 'Interactive 360°',
  },
];

export const Labs: React.FC = () => {
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
              Autonomous multi-agent pipelines, business backends, and full-stack utilities built to eliminate manual friction.
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
              <a
                href={app.link}
                target={app.link.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="group block w-[75vw] max-w-[320px] shrink-0 snap-start md:w-auto md:max-w-none"
              >
                {/* Phone Mockup Frame */}
                <div className="mx-auto w-full max-w-[260px] md:max-w-none">
                  <div className="relative mx-auto aspect-[720/1564] w-full max-w-[240px] rounded-[2.4rem] border border-white/10 bg-[oklch(0.12_0.01_260)] p-[6px] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6),inset_0_0_0_1.5px_rgba(255,255,255,0.06)] transition-transform duration-500 group-hover:scale-[1.02]">
                    <div className="pointer-events-none absolute inset-0 rounded-[2.4rem] ring-1 ring-white/5" />
                    <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-black">
                      {/* Dynamic Island Notch */}
                      <div className="absolute left-1/2 top-3 z-20 h-4 w-20 -translate-x-1/2 rounded-full bg-neutral-900 border border-white/10" />

                      {/* Screen Content Preview */}
                      <div className={`size-full bg-gradient-to-b ${app.color} p-6 flex flex-col justify-between pt-12`}>
                        <div className="text-center">
                          <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-3 shadow-inner">
                            {app.icon}
                          </span>
                          <h4 className="mt-3 font-display text-base font-semibold leading-tight text-white">
                            {app.name}
                          </h4>
                          <span className="mt-1 inline-block rounded-full bg-white/10 px-2.5 py-0.5 font-mono text-[10px] text-white/80">
                            {app.tag}
                          </span>
                        </div>

                        <div className="space-y-2 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-sm">
                          <div className="flex items-center justify-between text-[11px] font-mono text-white/70">
                            <span>Status</span>
                            <span className="text-emerald-400">● Active</span>
                          </div>
                          <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                            <div className="h-full w-3/4 bg-court-glow rounded-full" />
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
                    <ArrowUpRight className="h-4 w-4 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                  </div>
                  <div className="mt-2 text-sm text-white/65 text-pretty md:text-[15px]">
                    {app.description}
                  </div>
                  <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
                    {app.category}
                  </div>
                </div>
              </a>
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
