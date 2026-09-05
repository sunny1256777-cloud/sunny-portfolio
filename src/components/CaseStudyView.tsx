import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Plus, ExternalLink } from 'lucide-react';
import type { ProjectDetail } from '../data/projectsData';
import { Footer } from './Footer';
import { Reveal } from './Reveal';

interface CaseStudyViewProps {
  project: ProjectDetail;
  onBack: () => void;
  onSelectNextProject: (projectId: string) => void;
}

export const CaseStudyView: React.FC<CaseStudyViewProps> = ({
  project,
  onBack,
  onSelectNextProject,
}) => {
  const [contributionsOpen, setContributionsOpen] = useState(true);

  // Top scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Scroll to top on mount or when project changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [project.id]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen bg-background text-foreground selection:bg-court selection:text-white"
    >
      {/* Top Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-accent z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* Floating Top Navigation Header */}
      <div className="fixed inset-x-0 top-0 z-40 px-6 pt-6 md:px-10 pointer-events-none">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between pointer-events-auto">
          <button
            type="button"
            onClick={onBack}
            className="group flex items-center gap-2 rounded-full border border-white/20 bg-ink/70 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-xl transition-all hover:bg-ink hover:text-white active:scale-95 shadow-lg"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
            <span>All Work</span>
          </button>

          {project.externalLink && project.externalLink !== '#' && (
            <a
              href={project.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/20 bg-ink/70 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-xl transition-all hover:bg-ink hover:text-white active:scale-95 shadow-lg"
            >
              <span>{project.externalLinkLabel || 'View Live'}</span>
              <ExternalLink className="size-3.5" />
            </a>
          )}
        </div>
      </div>

      {/* Hero Header */}
      <section
        className={`relative overflow-hidden ${project.gradient} px-6 pb-20 pt-36 text-white md:px-10 md:pb-28`}
      >
        {/* Ambient Radial Lighting */}
        <div className="absolute inset-0 opacity-40 mix-blend-overlay [background-image:radial-gradient(circle_at_20%_30%,white,transparent_55%)] pointer-events-none" />
        <div className="absolute inset-0 opacity-30 mix-blend-overlay [background-image:radial-gradient(circle_at_80%_80%,white,transparent_45%)] pointer-events-none" />

        <div className="relative mx-auto w-full max-w-[1600px]">
          {/* Breadcrumbs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.2em] text-white/80"
          >
            <span>{project.client}</span>
            <span className="opacity-40">·</span>
            <span>{project.year}</span>
            <span className="opacity-40">·</span>
            <span className="text-court-glow">{project.tags}</span>
          </motion.div>

          {/* Title */}
          <h1 className="max-w-[22ch] font-display text-[9vw] font-semibold leading-[0.98] tracking-[-0.03em] text-white md:text-[5.5vw]">
            <span className="block overflow-hidden pb-[0.08em]">
              <motion.span
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="block"
              >
                {project.title}
              </motion.span>
            </span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="mt-6 max-w-[48ch] text-pretty text-lg text-white/90 md:text-2xl leading-relaxed"
          >
            {project.subtitle}
          </motion.p>

          {/* Large Realistic Device Preview Frame */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
            className="mt-14 md:mt-20"
          >
            <div className="mx-auto max-w-[1100px] rounded-[22px] bg-[#0a0a0a] p-[10px] shadow-2xl ring-1 ring-white/10 md:rounded-[28px] md:p-[14px]">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[14px] bg-black md:rounded-[18px]">
                {/* Camera notch */}
                <div className="absolute left-1/2 top-2 z-20 h-[4px] w-14 -translate-x-1/2 rounded-full bg-white/20 md:w-20" />
                <img
                  src={project.poster}
                  alt={project.title}
                  className="size-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Study Overview & Metrics Bar */}
      <section className="border-t border-border/60 bg-secondary/30 py-14 md:py-20">
        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
            {/* Left Story & Contributions */}
            <div className="md:col-span-7">
              <Reveal>
                <div className="mb-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                  <span className="inline-block h-px w-6 bg-accent" />
                  Engineering Story
                </div>
                <h3 className="font-display text-2xl font-medium leading-snug tracking-[-0.01em] md:text-[32px] text-foreground">
                  Building with intent, speed, and real-world impact.
                </h3>
              </Reveal>

              {/* Collapsible Contributions Accordion */}
              <Reveal delay={0.15}>
                <div className="mt-8 border-t border-border/70 pt-6">
                  <button
                    type="button"
                    onClick={() => setContributionsOpen(!contributionsOpen)}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 text-left select-none group"
                  >
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground group-hover:text-foreground transition-colors">
                      Key Engineering Contributions
                    </span>
                    <span className="inline-flex size-7 items-center justify-center rounded-full border border-border text-foreground/70 group-hover:border-accent group-hover:text-accent transition-all">
                      <Plus
                        className={`size-3.5 transition-transform duration-300 ${
                          contributionsOpen ? 'rotate-45' : ''
                        }`}
                      />
                    </span>
                  </button>

                  {contributionsOpen && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 space-y-3"
                    >
                      {project.contributions.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex gap-3 text-[15px] leading-[1.6] text-foreground/85"
                        >
                          <span className="mt-[9px] inline-block size-[6px] shrink-0 rounded-full bg-accent" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </div>
              </Reveal>
            </div>

            {/* Right Meta & 3 Big Numeric Stats */}
            <div className="md:col-span-5">
              <Reveal delay={0.1}>
                <dl className="grid grid-cols-2 gap-x-6 gap-y-4">
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Role
                    </dt>
                    <dd className="mt-1 text-[15px] font-medium leading-snug">{project.role}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Client / Project
                    </dt>
                    <dd className="mt-1 text-[15px] font-medium leading-snug">{project.client}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Year
                    </dt>
                    <dd className="mt-1 text-[15px] font-medium leading-snug">{project.year}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Discipline
                    </dt>
                    <dd className="mt-1 text-[15px] font-medium leading-snug">{project.discipline}</dd>
                  </div>
                </dl>

                {/* Scope Pills */}
                <div className="mt-6">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Technologies &amp; Scope
                  </div>
                  <ul className="mt-2.5 flex flex-wrap gap-2">
                    {project.scope.map((tag, idx) => (
                      <li
                        key={idx}
                        className="rounded-full border border-border bg-background px-3 py-1 text-[12px] text-foreground/80 shadow-xs"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 3 Large Stat Metrics */}
                <div className="mt-8 grid grid-cols-3 gap-3 border-t border-border pt-8">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx}>
                      <div className="font-display text-xl md:text-2xl font-semibold tracking-[-0.02em] text-accent">
                        {metric.value}
                      </div>
                      <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground leading-tight">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Chapters (Deep Dive Breakdown) */}
      <section className="py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
          <div className="space-y-24 md:space-y-32">
            {project.chapters.map((chapter) => (
              <Reveal key={chapter.number}>
                <div className="mx-auto max-w-[900px] text-center">
                  <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
                    Chapter {chapter.number}
                  </span>
                  <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.02em] md:text-5xl">
                    {chapter.title}
                  </h2>
                  <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                    {chapter.description}
                  </p>
                </div>

                {/* Points / Architecture Grid */}
                {chapter.points && (
                  <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
                    {chapter.points.map((pt, pIdx) => (
                      <div
                        key={pIdx}
                        className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm transition-all hover:border-accent/40 hover:shadow-md"
                      >
                        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                          0{pIdx + 1}
                        </div>
                        <h4 className="mt-2 font-display text-lg font-semibold text-foreground">
                          {pt.title}
                        </h4>
                        <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                          {pt.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Next Project Teaser Footer Bar */}
      <section className="border-t border-border/60 bg-secondary/20 py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Next Project
                </span>
                <h3 className="mt-2 font-display text-3xl font-semibold md:text-4xl text-foreground">
                  {project.nextProjectTitle}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => onSelectNextProject(project.nextProjectId)}
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-md"
              >
                Read case study
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </motion.div>
  );
};
