import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { Labs } from './components/Labs';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { CaseStudyView } from './components/CaseStudyView';
import { projectsData } from './data/projectsData';

export const App: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  // Sync hash with selected project for direct link sharing & browser back button
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('work/')) {
        const projectId = hash.replace('work/', '');
        if (projectsData[projectId]) {
          setSelectedProjectId(projectId);
          return;
        }
      }
      if (hash === '' || !hash.startsWith('work/')) {
        setSelectedProjectId(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectProject = (id: string) => {
    window.location.hash = `work/${id}`;
    setSelectedProjectId(id);
  };

  const handleBackToWork = () => {
    window.location.hash = 'work';
    setSelectedProjectId(null);
  };

  const currentProject = selectedProjectId ? projectsData[selectedProjectId] : null;

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-court selection:text-white">
      <AnimatePresence mode="wait">
        {currentProject ? (
          <CaseStudyView
            key={currentProject.id}
            project={currentProject}
            onBack={handleBackToWork}
            onSelectNextProject={handleSelectProject}
          />
        ) : (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Floating Morphing Navigation Island */}
            <Navbar />

            {/* Main Sections */}
            <main className="relative">
              <Hero />
              <SelectedWork onSelectProject={handleSelectProject} />
              <Labs onSelectProject={handleSelectProject} />
              <About />
            </main>

            {/* Contact & Global Footer */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
