import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  Copy, 
  Check, 
  ExternalLink, 
  FileText, 
  Mail, 
  Github, 
  Linkedin,
  Clock,
  MapPin,
  Briefcase,
  GraduationCap
} from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';

interface RecruiterBriefModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioData;
  onOpenResume: () => void;
}

export const RecruiterBriefModal: React.FC<RecruiterBriefModalProps> = ({
  isOpen,
  onClose,
  data,
  onOpenResume
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const summaryText = `Candidate: ${data.personal.name}
Role Target: ${data.personal.targetRoles.join(', ')}
Key Languages: Python, SQL
Core Competencies: Exploratory Data Analysis (EDA), Pandas, NumPy, Scikit-Learn, Data Cleaning, SQL CTEs/Window Functions, Business Metrics
Status: ${data.personal.status}
LinkedIn: ${data.personal.linkedin}
GitHub: ${data.personal.github}
Email: ${data.personal.email}
Summary: Dedicated analytical candidate seeking entry-level and internship roles in data analytics and machine learning. Strong commitment to data integrity and reproducible analysis.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
        role="dialog"
        aria-modal="true"
        aria-labelledby="recruiter-brief-title"
      >
        {/* Header */}
        <div className="sticky top-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 id="recruiter-brief-title" className="text-lg font-bold text-slate-900 dark:text-white">
                Recruiter 10-Second Executive Summary
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Condensed briefing for technical hiring managers & sourcers
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 text-sm">
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-1">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Primary Target</span>
              </div>
              <div className="font-semibold text-slate-900 dark:text-white text-xs">
                Data Analyst / ML
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-1">
                <Clock className="w-3.5 h-3.5" />
                <span>Availability</span>
              </div>
              <div className="font-semibold text-emerald-600 dark:text-emerald-400 text-xs">
                Immediate / 2026
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>Location</span>
              </div>
              <div className="font-semibold text-slate-900 dark:text-white text-xs truncate">
                Remote / Onsite
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-1">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Focus</span>
              </div>
              <div className="font-semibold text-slate-900 dark:text-white text-xs">
                Analytical Rigor
              </div>
            </div>
          </div>

          {/* Key Competencies Checklist */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2.5">
              Core Technical Strengths
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="flex items-start gap-2 p-2 rounded-lg bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Python Data Ecosystem:</span>
                  <span className="text-slate-600 dark:text-slate-400"> Pandas, NumPy, Scikit-Learn for analysis & ML pipelines.</span>
                </div>
              </div>

              <div className="flex items-start gap-2 p-2 rounded-lg bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Relational SQL:</span>
                  <span className="text-slate-600 dark:text-slate-400"> Multi-table joins, aggregations, window functions, and CTEs.</span>
                </div>
              </div>

              <div className="flex items-start gap-2 p-2 rounded-lg bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Data Preprocessing & EDA:</span>
                  <span className="text-slate-600 dark:text-slate-400"> Imputation, outlier handling, categorical encoding, feature scaling.</span>
                </div>
              </div>

              <div className="flex items-start gap-2 p-2 rounded-lg bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Data Storytelling:</span>
                  <span className="text-slate-600 dark:text-slate-400"> Clear visualizations with Matplotlib, Seaborn, and KPI dashboards.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Why Consider Azar? */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              Why Azar Stands Out
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 list-disc list-inside">
              <li><strong>Zero Fluff / 100% Truthful:</strong> Committed to building real, reproducible projects without exaggerated claims.</li>
              <li><strong>Continuous Learner:</strong> Rapidly masters new tools, libraries, and analytical frameworks.</li>
              <li><strong>Bridge between Data & Code:</strong> Comfortable with both relational databases and Python scripting.</li>
            </ul>
          </div>

          {/* Quick Verified Profiles */}
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={data.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 hover:bg-blue-100"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn Profile</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <a
              href={data.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-200"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub (azarbasha786)</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <a
              href={`mailto:${data.personal.email}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{data.personal.email}</span>
            </a>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 bg-slate-50 dark:bg-slate-800/90 backdrop-blur-sm border-t border-slate-200 dark:border-slate-800 px-6 py-4 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-xs"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied Candidate Summary!' : 'Copy Summary for ATS / Notes'}</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onOpenResume();
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-xs"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Resume</span>
            </button>

            <a
              href={`mailto:${data.personal.email}?subject=Interview%20Invitation%20for%20Azar%20Basha`}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors shadow-xs"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Schedule Interview</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
