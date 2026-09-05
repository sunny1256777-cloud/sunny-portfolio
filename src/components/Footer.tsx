import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from './Reveal';

export const Footer: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative overflow-hidden bg-court text-white">
      <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-10 md:py-28">
        {/* Giant "Say hello" headline */}
        <Reveal>
          <a
            href="mailto:sunny1256777@gmail.com"
            className="group block font-display text-[14vw] font-semibold leading-[0.95] tracking-[-0.04em] md:text-[9vw]"
          >
            <span className="flex flex-wrap items-baseline gap-x-4">
              <span>Say hello</span>
              <ArrowUpRight
                strokeWidth={1.5}
                className="size-[11vw] shrink-0 transition-transform duration-500 group-hover:translate-x-3 group-hover:-translate-y-3 md:size-[7vw]"
              />
            </span>
          </a>
        </Reveal>

        {/* 3-Column Info Footer */}
        <Reveal delay={0.15}>
          <div className="mt-16 grid grid-cols-1 gap-8 border-t border-white/20 pt-10 text-sm md:grid-cols-3">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
                Email
              </div>
              <a
                href="mailto:sunny1256777@gmail.com"
                className="mt-2 inline-block text-white hover:opacity-80 transition-opacity"
              >
                sunny1256777@gmail.com
              </a>
              <div className="mt-1 text-xs text-white/70 font-mono">
                +91 9128207889
              </div>
            </div>

            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
                Elsewhere
              </div>
              <div className="mt-2 flex flex-wrap gap-4">
                <a
                  href="https://github.com/sunny1256777-cloud"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-white hover:opacity-80 transition-opacity underline decoration-white/30 underline-offset-4"
                >
                  GitHub
                </a>
                <span className="text-white/40">·</span>
                <a
                  href="https://instagram.com/sparclo.media"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-white hover:opacity-80 transition-opacity underline decoration-white/30 underline-offset-4"
                >
                  Instagram (@sparclo.media)
                </a>
              </div>
            </div>

            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
                Location &amp; Education
              </div>
              <div className="mt-2 text-white font-medium">
                Surat, Gujarat, India
              </div>
              <div className="text-xs text-white/70 mt-0.5 font-mono">
                IIIT Manipur · CSE (AI/ML)
              </div>
            </div>
          </div>
        </Reveal>

        {/* Bottom copyright line */}
        <Reveal delay={0.25}>
          <div className="mt-12 flex flex-col gap-2 text-[11px] text-white/60 md:flex-row md:justify-between">
            <span>© 2026 Sunny Sah · Founder, Sparclo Media</span>
          </div>
        </Reveal>
      </div>

      {/* Floating Scroll-To-Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            type="button"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            aria-label="Scroll to top"
            className="fixed bottom-6 right-6 z-40 flex size-12 items-center justify-center rounded-full border border-border bg-background/80 text-foreground shadow-lg backdrop-blur-md transition-all hover:bg-surface-2 active:scale-90 md:bottom-8 md:right-8"
          >
            <ArrowUp className="size-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};
