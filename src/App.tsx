import React, { useState, useEffect } from 'react';
import { initialPortfolioData, PortfolioData } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ExperienceEducation } from './components/ExperienceEducation';
import { CareerStrategyGuide } from './components/CareerStrategyGuide';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { RecruiterBriefModal } from './components/RecruiterBriefModal';
import { ResumeModal } from './components/ResumeModal';
import { DataConfiguratorModal } from './components/DataConfiguratorModal';

export default function App() {
  // Theme state
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('azar_portfolio_theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Portfolio data state (persisted locally so user customizations stay active, merged safely with code)
  const [data, setData] = useState<PortfolioData>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('azar_portfolio_data');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          return {
            ...initialPortfolioData,
            ...parsed,
            experiences: initialPortfolioData.experiences,
            education: initialPortfolioData.education,
            certifications: parsed.certifications ?? initialPortfolioData.certifications ?? [],
          };
        } catch (e) {
          console.error('Failed to parse saved portfolio data', e);
        }
      }
    }
    return initialPortfolioData;
  });

  // Modal visibility states
  const [isRecruiterBriefOpen, setIsRecruiterBriefOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isConfiguratorOpen, setIsConfiguratorOpen] = useState(false);

  // Apply dark class to documentElement
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('azar_portfolio_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('azar_portfolio_theme', 'light');
    }
  }, [darkMode]);

  // Handle saving data
  const handleSaveData = (newData: PortfolioData) => {
    setData(newData);
    localStorage.setItem('azar_portfolio_data', JSON.stringify(newData));
  };

  // Handle resetting data
  const handleResetData = () => {
    setData(initialPortfolioData);
    localStorage.removeItem('azar_portfolio_data');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-500 selection:text-white transition-colors duration-200 flex flex-col font-sans">
      {/* Top Navigation */}
      <Navbar
        data={data}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenRecruiterBrief={() => setIsRecruiterBriefOpen(true)}
        onOpenResume={() => setIsResumeModalOpen(true)}
        onOpenConfigurator={() => setIsConfiguratorOpen(true)}
      />

      {/* Main Semantic Content */}
      <main className="flex-1">
        <Hero
          data={data}
          onOpenRecruiterBrief={() => setIsRecruiterBriefOpen(true)}
          onOpenResume={() => setIsResumeModalOpen(true)}
        />

        <About data={data} />

        <Skills data={data} />

        <Projects
          data={data}
          onOpenConfigurator={() => setIsConfiguratorOpen(true)}
        />

        <ExperienceEducation
          data={data}
          onOpenConfigurator={() => setIsConfiguratorOpen(true)}
        />

        <CareerStrategyGuide />

        <Contact data={data} />
      </main>

      {/* Footer */}
      <Footer
        data={data}
        onOpenRecruiterBrief={() => setIsRecruiterBriefOpen(true)}
        onOpenResume={() => setIsResumeModalOpen(true)}
        onOpenConfigurator={() => setIsConfiguratorOpen(true)}
      />

      {/* Recruiter Fast-Track Modal */}
      <RecruiterBriefModal
        isOpen={isRecruiterBriefOpen}
        onClose={() => setIsRecruiterBriefOpen(false)}
        data={data}
        onOpenResume={() => {
          setIsRecruiterBriefOpen(false);
          setIsResumeModalOpen(true);
        }}
      />

      {/* Resume Access Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        data={data}
      />

      {/* In-App Portfolio Settings & Live Configurator */}
      <DataConfiguratorModal
        isOpen={isConfiguratorOpen}
        onClose={() => setIsConfiguratorOpen(false)}
        data={data}
        onSave={handleSaveData}
        onReset={handleResetData}
      />
    </div>
  );
}
