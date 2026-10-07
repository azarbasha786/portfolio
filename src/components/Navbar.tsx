import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Sparkles, 
  Moon, 
  Sun, 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink 
} from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';

interface NavbarProps {
  data: PortfolioData;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenRecruiterBrief: () => void;
  onOpenResume: () => void;
  onOpenConfigurator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  data,
  darkMode,
  setDarkMode,
  onOpenRecruiterBrief,
  onOpenResume,
  onOpenConfigurator,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'strategy', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience & Edu', href: '#experience' },
    { name: 'Career Strategy', href: '#strategy' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 dark:bg-slate-900/85 backdrop-blur-md shadow-xs border-b border-slate-200/80 dark:border-slate-800/80 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Personal Brand */}
          <a
            href="#hero"
            className="group flex items-center gap-3 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold text-lg flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              AB
            </div>
            <div>
              <div className="font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                <span>{data.personal.name}</span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse"></span>
                  Open for Roles
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono hidden sm:block">
                Data Analyst &bull; ML
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/70 dark:bg-slate-800/60 p-1.5 rounded-full border border-slate-200/60 dark:border-slate-700/60 text-sm font-medium">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full transition-all duration-150 ${
                    isActive
                      ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Recruiter 10-Second Brief */}
            <button
              onClick={onOpenRecruiterBrief}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-50 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300 border border-amber-200 dark:border-amber-800 hover:bg-amber-100 dark:hover:bg-amber-900/40 transition-colors shadow-xs"
              title="Fast 10-Second Recruiter Summary"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin-slow" />
              <span>Recruiter 10s Brief</span>
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 transition-colors shadow-xs"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* Dark / Light Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle theme"
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle theme"
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-2 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2 pt-3 border-t border-slate-200 dark:border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRecruiterBrief();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold bg-amber-50 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300 border border-amber-200 dark:border-amber-800"
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Recruiter 10-Second Brief</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold bg-blue-600 text-white"
            >
              <FileText className="w-4 h-4" />
              <span>Download Resume</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConfigurator();
              }}
              className="w-full text-center text-xs text-slate-500 dark:text-slate-400 py-1 underline"
            >
              Customize Data & Settings
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
