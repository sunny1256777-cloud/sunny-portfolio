import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: 'work', label: 'Work' },
  { id: 'labs', label: 'Labs' },
  { id: 'about', label: 'About' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('work');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [menuOpen, setMenuOpen] = useState(false);

  // Initialize theme
  useEffect(() => {
    const saved = localStorage.getItem('theme:v1');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = (saved as 'light' | 'dark') || (prefersDark ? 'dark' : 'light');
    setTheme(initial);
    if (initial === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = (e: React.MouseEvent) => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme:v1', next);
    
    const root = document.documentElement;
    root.style.setProperty('--x', `${e.clientX}px`);
    root.style.setProperty('--y', `${e.clientY}px`);

    if ((document as any).startViewTransition) {
      (document as any).startViewTransition(() => {
        if (next === 'dark') {
          root.classList.add('dark');
        } else {
          root.classList.remove('dark');
        }
      });
    } else {
      if (next === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }
  };

  // Scroll listener for compact navbar & active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const heroThreshold = window.innerHeight * 0.45;
      setIsScrolled(scrollPos > heroThreshold);

      const sections = ['work', 'labs', 'about'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isOverHero = !isScrolled && !menuOpen;

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.getElementById('contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
      className="fixed inset-x-0 top-0 z-40 pointer-events-none"
    >
      <motion.div
        animate={{
          maxWidth: isScrolled ? 768 : 1440,
          paddingTop: isScrolled ? 12 : 20,
        }}
        transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
        className="relative mx-auto px-4 md:px-6 w-full pointer-events-auto"
      >
        <motion.div
          animate={{
            paddingTop: isScrolled ? 8 : 14,
            paddingBottom: isScrolled ? 8 : 14,
            paddingLeft: isScrolled ? 16 : 8,
            paddingRight: isScrolled ? 16 : 8,
          }}
          transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
          className={`flex items-center justify-between gap-4 rounded-full transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 ${
            isScrolled || menuOpen
              ? 'border border-border/60 bg-background/80 backdrop-blur-xl shadow-lg'
              : 'border border-transparent bg-transparent'
          }`}
        >
          {/* Logo */}
          <a
            href="#"
            className={`group flex items-center gap-2 transition-colors ${
              isOverHero ? 'text-white' : 'text-foreground'
            }`}
          >
            <span
              aria-hidden="true"
              className="inline-block text-[20px] leading-none transition-transform duration-300 ease-out group-hover:rotate-12"
            >
              ✦
            </span>
            <span className="font-display text-[22px] font-semibold leading-none tracking-[-0.03em]">
              Sunny<span>.</span>
            </span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`relative rounded-full px-3.5 py-1.5 text-[14px] font-medium transition-colors ${
                    isActive
                      ? isOverHero
                        ? 'text-ink'
                        : 'text-foreground'
                      : isOverHero
                      ? 'text-white/80 hover:text-white'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className={`absolute inset-0 rounded-full ${
                        isOverHero ? 'bg-white shadow-sm' : 'bg-surface-2 shadow-sm'
                      }`}
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Actions: Theme Toggle & Say Hi */}
          <div className="flex items-center gap-2">
            <motion.button
              type="button"
              onClick={toggleTheme}
              whileTap={{ scale: 0.9, rotate: -15 }}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="group relative inline-flex size-9 items-center justify-center overflow-hidden rounded-full border border-border bg-background/60 text-foreground backdrop-blur shadow-sm transition-colors hover:bg-surface-2"
            >
              <span
                aria-hidden="true"
                className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                  theme === 'dark'
                    ? '[background:radial-gradient(circle_at_center,rgba(96,165,250,0.35),transparent_70%)]'
                    : '[background:radial-gradient(circle_at_center,rgba(251,191,36,0.40),transparent_70%)]'
                }`}
              />
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ y: -10, rotate: -90, opacity: 0 }}
                  animate={{ y: 0, rotate: 0, opacity: 1 }}
                  exit={{ y: 10, rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                  className="relative inline-flex"
                >
                  {theme === 'dark' ? (
                    <Moon className="size-4 text-court-glow" />
                  ) : (
                    <Sun className="size-4 text-amber-500" />
                  )}
                </motion.span>
              </AnimatePresence>
            </motion.button>

            {/* Say Hi Button */}
            <a
              href="#contact"
              onClick={scrollToContact}
              className={`hidden items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[14px] font-medium transition-colors sm:inline-flex ${
                isOverHero
                  ? 'border-white/30 bg-white/10 text-white hover:border-white/60 hover:bg-white/20'
                  : 'border-border bg-card/40 text-foreground hover:border-foreground/40 hover:bg-muted'
              }`}
            >
              Say Hi <span aria-hidden="true">👋</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className="relative inline-flex size-10 items-center justify-center rounded-full border border-border bg-background/60 transition-transform active:scale-90 md:hidden"
            >
              <span
                className={`absolute h-0.5 w-4 bg-foreground transition-all duration-300 ${
                  menuOpen ? 'rotate-45' : '-translate-y-1'
                }`}
              />
              <span
                className={`absolute h-0.5 w-4 bg-foreground transition-all duration-300 ${
                  menuOpen ? '-rotate-45' : 'translate-y-1'
                }`}
              />
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.2, 0.7, 0.2, 1] }}
            className="absolute right-4 top-full z-30 mt-2 w-56 overflow-hidden rounded-2xl border border-border/60 bg-background/95 shadow-2xl backdrop-blur-xl md:hidden pointer-events-auto"
          >
            <nav className="flex flex-col p-3">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-2.5 font-display text-[15px] font-medium tracking-[-0.01em] text-foreground transition-colors hover:bg-muted active:bg-muted/80"
                >
                  {item.label}
                </a>
              ))}
              <div className="mx-1 my-2 h-px bg-border/60" />
              <a
                href="#contact"
                onClick={scrollToContact}
                className="mx-1 flex items-center justify-center gap-2 rounded-full border border-border bg-card/40 px-4 py-2.5 text-[14px] font-medium text-foreground transition-colors hover:border-foreground/20"
              >
                Say hi <span aria-hidden="true">👋</span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
