import React from 'react';
import { 
  ArrowUp, 
  Github, 
  Linkedin, 
  Mail, 
  CheckCircle2, 
  FileText, 
  Sparkles,
  Settings
} from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';

interface FooterProps {
  data: PortfolioData;
  onOpenRecruiterBrief: () => void;
  onOpenResume: () => void;
  onOpenConfigurator: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  data,
  onOpenRecruiterBrief,
  onOpenResume,
  onOpenConfigurator
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Col 1: Identity & Brand */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold flex items-center justify-center text-sm shadow-xs">
                AB
              </div>
              <span className="font-bold text-slate-900 dark:text-white text-sm">
                {data.personal.name}
              </span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
              Aspiring Data Analyst and Machine Learning professional. Transforming raw datasets into structured intelligence.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={data.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={data.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${data.personal.email}`}
                className="p-1.5 rounded-lg text-slate-500 hover:text-rose-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Email Azar"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Navigation
            </h4>
            <ul className="space-y-1.5">
              <li><a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About Me</a></li>
              <li><a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Technical Skills</a></li>
              <li><a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Curated Projects</a></li>
              <li><a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Education & Experience</a></li>
              <li><a href="#strategy" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Career Strategy Guide</a></li>
              <li><a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Col 3: Recruiter Fast-Track */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Recruiter Resources
            </h4>
            <ul className="space-y-1.5">
              <li>
                <button
                  onClick={onOpenRecruiterBrief}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1.5 text-left"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>10-Second Executive Summary</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenResume}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1.5 text-left"
                >
                  <FileText className="w-3.5 h-3.5 text-blue-500" />
                  <span>Download Resume Dossier</span>
                </button>
              </li>
              <li>
                <a
                  href={`mailto:${data.personal.email}?subject=Interview%20Inquiry%20for%20Azar%20Basha`}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-rose-500" />
                  <span>Email Invitation</span>
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenConfigurator}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1.5 text-left text-slate-400"
                >
                  <Settings className="w-3.5 h-3.5" />
                  <span>Customize Portfolio Data</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Recruiter Standards Guarantee */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Recruiter Standard
            </h4>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[11px] leading-relaxed">
              <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold mb-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Zero AI Slop / Verified Information</span>
              </div>
              <p className="text-slate-500 dark:text-slate-400">
                Built strictly with verified technical credentials and honest experience representation.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} {data.personal.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono">React &bull; TypeScript &bull; Tailwind CSS</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
