import React from 'react';
import { ArrowUpRight, Download } from 'lucide-react';
import { Reveal } from './Reveal';
import { ScrollColorText } from './ScrollColorText';

export const About: React.FC = () => {
  const bioTags = [
    { emoji: '📍', text: 'Surat, Gujarat ➔ IIIT Manipur' },
    { emoji: '🚀', text: 'Founder @ Sparclo Media' },
    { emoji: '🏀', text: 'Basketball & fitness enthusiast' },
    { emoji: '🤖', text: 'Autonomous Multi-Agent Workflows' },
    { emoji: '💻', text: 'AI-Assisted Dev (Claude Code)' },
    { emoji: '🌐', text: 'WebGL 3D & Full-Stack Execution' },
  ];

  return (
    <section id="about" className="bg-background py-20 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            About Sunny
          </span>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          {/* Main Story & Scroll-Driven Illuminated Text */}
          <div className="md:col-span-8">
            <Reveal>
              <ScrollColorText className="font-display text-3xl font-medium leading-snug tracking-[-0.01em] md:text-[40px]">
                {"I'm **Sunny**, an AI developer and founder in **Surat**, heading to **IIIT Manipur**. Over the past years I've founded **Sparclo Media** and built real-world AI applications that automate business operations, client pipelines, and digital commerce. Right now I'm building **autonomous multi-agent systems**, the workflows that feel fast, reliable, and a little bit alive."}
              </ScrollColorText>
            </Reveal>

            {/* Quick Facts / Badges */}
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-2">
                {bioTags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm"
                  >
                    <span className="text-sm leading-none">{tag.emoji}</span>
                    {tag.text}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Philosophy & Downloads Sidebar */}
          <div className="md:col-span-4 md:pt-3">
            <Reveal delay={0.3}>
              <p className="text-pretty text-muted-foreground text-base md:text-lg leading-relaxed">
                I think of AI not as a novelty or simple API call, but as autonomous team members that transform everyday business operations. The best software runs quietly, eliminates friction, and genuinely scales.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://github.com/sunny1256777-cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-foreground/20 px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
                >
                  <svg className="size-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub profile
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </a>

                <a
                  href="mailto:sunny1256777@gmail.com?subject=Resume%20Request%20-%20Sunny%20Sah"
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Download className="size-4" />
                  Get Resume
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
