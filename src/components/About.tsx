import React from 'react';
import { 
  User, 
  ShieldCheck, 
  FileCode2, 
  Lightbulb, 
  Target, 
  CheckCircle,
  Briefcase,
  GraduationCap
} from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';

interface AboutProps {
  data: PortfolioData;
}

export const About: React.FC<AboutProps> = ({ data }) => {
  return (
    <section id="about" className="py-20 border-t border-slate-200/60 dark:border-slate-800/60 bg-white/50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200 dark:border-blue-800 mb-3">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Who I Am & How I Approach Data
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            A grounded perspective on building data solutions, analytical rigor, and career direction.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-7 space-y-5">
            <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 space-y-4 text-sm sm:text-base leading-relaxed">
              {data.personal.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Core Analytical Principles */}
            <div className="pt-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                My Core Working Principles
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-xs">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-2.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-1">
                    1. Data Integrity First
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">
                    Never jump to conclusions without thorough null handling, distribution checks, and validation.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-xs">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-2.5">
                    <FileCode2 className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-1">
                    2. Reproducible Code
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">
                    Modular notebooks, clear documentation, and version control so findings can be audited.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-xs">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-2.5">
                    <Lightbulb className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-1">
                    3. Actionable Insights
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">
                    Data analysis isn't just about formulas; it must inform business decisions and ROI.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Recruiter Fact Sheet */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Target className="w-4 h-4 text-blue-600" />
                <span>Recruiter Quick Facts</span>
              </h3>

              <div className="divide-y divide-slate-100 dark:divide-slate-700/60 text-xs">
                <div className="py-2.5 flex justify-between gap-4">
                  <span className="text-slate-500 dark:text-slate-400">Target Roles:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200 text-right">
                    Data Analyst, ML Intern, BI Analyst
                  </span>
                </div>

                <div className="py-2.5 flex justify-between gap-4">
                  <span className="text-slate-500 dark:text-slate-400">Primary Languages:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200 font-mono">
                    Python, SQL
                  </span>
                </div>

                <div className="py-2.5 flex justify-between gap-4">
                  <span className="text-slate-500 dark:text-slate-400">Analytical Libraries:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    Pandas, NumPy, Scikit-Learn
                  </span>
                </div>

                <div className="py-2.5 flex justify-between gap-4">
                  <span className="text-slate-500 dark:text-slate-400">Availability:</span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                    Immediate / Open for Interviews
                  </span>
                </div>

                <div className="py-2.5 flex justify-between gap-4">
                  <span className="text-slate-500 dark:text-slate-400">Work Preferences:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    Remote / Hybrid / Onsite
                  </span>
                </div>

                <div className="py-2.5 flex justify-between gap-4">
                  <span className="text-slate-500 dark:text-slate-400">Direct Contact:</span>
                  <a
                    href={`mailto:${data.personal.email}`}
                    className="font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {data.personal.email}
                  </a>
                </div>
              </div>

              {/* Recruiter Trust Note */}
              <div className="mt-4 p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40 text-[11px] text-emerald-800 dark:text-emerald-300">
                <div className="flex items-center gap-1.5 font-bold mb-0.5">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Truthful Profile Guarantee</span>
                </div>
                <span>
                  No inflated metrics or fabricated claims. Every technical capability listed is backed by conceptual knowledge and coding practice.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
