import React from 'react';
import { 
  ArrowRight, 
  FileText, 
  Sparkles, 
  Github, 
  Linkedin, 
  Mail, 
  Database, 
  TrendingUp, 
  Terminal, 
  CheckCircle2, 
  Code2,
  ExternalLink
} from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';

interface HeroProps {
  data: PortfolioData;
  onOpenRecruiterBrief: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ data, onOpenRecruiterBrief, onOpenResume }) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Positioning & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status & Role Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping inline-block" />
              <span>{data.personal.status}</span>
            </div>

            {/* Main Headline */}
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Portfolio & Engineering Dossier
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent">
                  {data.personal.name}
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-200 mt-2">
                {data.personal.headline}
              </h2>
            </div>

            {/* Value Proposition */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              {data.personal.tagline}
            </p>

            {/* Target Roles Pills */}
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Target Roles:
              </span>
              <div className="flex flex-wrap gap-2">
                {data.personal.targetRoles.map((role) => (
                  <span
                    key={role}
                    className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 transition-all hover:translate-y-[-1px]"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenRecruiterBrief}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-amber-50 hover:bg-amber-100 text-amber-900 dark:bg-amber-950/40 dark:hover:bg-amber-900/50 dark:text-amber-300 border border-amber-300 dark:border-amber-800 transition-all shadow-xs"
              >
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Recruiter 10s Summary</span>
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 transition-colors"
              >
                <FileText className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Verified Profile Links */}
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center gap-6 text-sm">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Verified Links:
              </span>
              <a
                href={data.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-xs"
              >
                <Linkedin className="w-4 h-4 text-blue-600" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>

              <a
                href={data.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors font-medium text-xs"
              >
                <Github className="w-4 h-4" />
                <span>GitHub (azarbasha786)</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>

              <a
                href={`mailto:${data.personal.email}`}
                className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-xs"
              >
                <Mail className="w-4 h-4 text-rose-500" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Technical Candidate Card (ATS & Recruiter Optimized) */}
          <div className="lg:col-span-5">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xl relative overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-slate-400">candidate_profile.py</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-sm">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Profile Verified</span>
                </div>
              </div>

              {/* Terminal Code Snippet */}
              <div className="py-4 font-mono text-xs text-slate-700 dark:text-slate-300 space-y-2 bg-slate-50 dark:bg-slate-950/50 p-3.5 rounded-lg border border-slate-100 dark:border-slate-800/80 my-3">
                <div className="text-slate-400 dark:text-slate-500"># Azar's Analytical Profile</div>
                <div>
                  <span className="text-purple-600 dark:text-purple-400">candidate</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-blue-600 dark:text-blue-400">"name"</span>: <span className="text-emerald-600 dark:text-emerald-400">"{data.personal.name}"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-blue-600 dark:text-blue-400">"core_languages"</span>: [<span className="text-emerald-600 dark:text-emerald-400">"Python"</span>, <span className="text-emerald-600 dark:text-emerald-400">"SQL"</span>],
                </div>
                <div className="pl-4">
                  <span className="text-blue-600 dark:text-blue-400">"data_toolkit"</span>: [<span className="text-emerald-600 dark:text-emerald-400">"Pandas"</span>, <span className="text-emerald-600 dark:text-emerald-400">"NumPy"</span>, <span className="text-emerald-600 dark:text-emerald-400">"Scikit-Learn"</span>],
                </div>
                <div className="pl-4">
                  <span className="text-blue-600 dark:text-blue-400">"strengths"</span>: [<span className="text-emerald-600 dark:text-emerald-400">"EDA"</span>, <span className="text-emerald-600 dark:text-emerald-400">"Business Metrics"</span>, <span className="text-emerald-600 dark:text-emerald-400">"Clean Code"</span>],
                </div>
                <div className="pl-4">
                  <span className="text-blue-600 dark:text-blue-400">"availability"</span>: <span className="text-amber-600 dark:text-amber-400">"Immediate / Open for Roles"</span>
                </div>
                <div>&#125;</div>
              </div>

              {/* 3 Core Competency Highlights */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-lg bg-blue-50/60 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40">
                  <div className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 text-xs font-bold mb-1">
                    <Database className="w-3.5 h-3.5" />
                    <span>Data & Analytics</span>
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-tight">
                    Statistical distributions, multi-table SQL queries, and clean preprocessing.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/40">
                  <div className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 text-xs font-bold mb-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Machine Learning</span>
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-tight">
                    Supervised models, classification evaluation (ROC/F1), and feature selection.
                  </p>
                </div>
              </div>

              {/* Recruiter Callout */}
              <div className="mt-4 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-slate-700 dark:text-slate-300 font-medium">
                    Looking for a dedicated Data Analyst or ML Intern?
                  </span>
                </div>
                <a
                  href={`mailto:${data.personal.email}?subject=Interview%20Inquiry%20for%20Azar%20Basha`}
                  className="font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Hire Azar &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
