import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Explicitly set muted on DOM properties (required by Android Chrome / iOS Safari)
    video.muted = true;
    video.defaultMuted = true;

    const startPlayback = () => {
      video.play().catch(() => {});
    };

    startPlayback();

    // Fallback: If low power mode or mobile browser delayed autoplay, start on first touch/scroll
    window.addEventListener('touchstart', startPlayback, { once: true, passive: true });
    window.addEventListener('scroll', startPlayback, { once: true, passive: true });

    return () => {
      window.removeEventListener('touchstart', startPlayback);
      window.removeEventListener('scroll', startPlayback);
    };
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[560px] w-full overflow-hidden bg-ink text-white">
      {/* Background Basketball Video with Gradient Overlay */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          src="/hero.mp4"
          poster="/hero-poster.webp"
          autoPlay
          muted
          loop
          playsInline
          {...({ 'webkit-playsinline': 'true' } as any)}
          preload="auto"
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/65 pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 pt-28 md:px-10 md:pb-20">
        <div className="max-w-[1600px]">
          {/* Animated Large Headline */}
          <h1 className="font-display text-[11vw] font-semibold leading-[0.95] tracking-[-0.03em] md:text-[7vw]">
            <span className="block overflow-hidden pb-[0.08em]">
              <motion.span
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                className="block"
              >
                Sunny Sah.
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.08em]">
              <motion.span
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
                className="block text-white/55"
              >
                AI Developer &amp; Founder.
              </motion.span>
            </span>
          </h1>

          {/* Subtitle & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
            className="mt-8 flex max-w-xl flex-col items-start gap-6"
          >
            <p className="text-pretty text-base text-white/80 md:text-lg">
              Study in IIIT Manipur (CSE AI/ML). Founder at Sparclo Media. Engineering multi-agent AI pipelines, WebGL 3D web experiences, and business automation platforms. Based in Surat, Gujarat.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#work"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-ink transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                View my work
                <ArrowDown className="size-4 animate-bounce" />
              </a>
              <a
                href="#about"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-ink active:scale-[0.98]"
              >
                About me
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
