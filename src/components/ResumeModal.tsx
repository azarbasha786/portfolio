import React, { useState } from 'react';
import { 
  X, 
  FileText, 
  Download, 
  Copy, 
  Check, 
  AlertCircle, 
  ExternalLink,
  UploadCloud,
  FileCheck2
} from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioData;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, data }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const candidateTextResume = `=====================================================
${data.personal.name.toUpperCase()} - RESUME DOSSIER
${data.personal.headline}
=====================================================
Email: ${data.personal.email}
LinkedIn: ${data.personal.linkedin}
GitHub: ${data.personal.github}
Location: ${data.personal.location}
Status: ${data.personal.status}

SUMMARY:
${data.personal.bio.join('\n\n')}

TARGET ROLES:
${data.personal.targetRoles.map(r => `* ${r}`).join('\n')}

TECHNICAL SKILLS:
* Programming: Python, SQL, JavaScript / TypeScript
* Data & Analytics: Pandas, NumPy, Exploratory Data Analysis (EDA), Data Preprocessing, Statistical Analysis
* Machine Learning: Scikit-Learn, Supervised Learning, Model Evaluation (ROC-AUC, F1, Confusion Matrix)
* Visualization: Matplotlib, Seaborn, Power BI, Excel
* Tools: Git, GitHub, Jupyter Notebooks, VS Code

FEATURED PROJECTS:
${data.projects.map(p => `
[${p.title}] (${p.categoryLabel})
- Problem: ${p.problem}
- Approach: ${p.approach}
- Stack: ${p.technologies.join(', ')}
- Repository: ${p.githubUrl}
`).join('\n')}

EDUCATION:
${data.education.map(e => `
- ${e.degree} | ${e.institution} (${e.period})
  Relevant Coursework: ${e.relevantCoursework.join(', ')}
`).join('\n')}
=====================================================`;

  const handleCopyText = () => {
    navigator.clipboard.writeText(candidateTextResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadTextFile = () => {
    const element = document.createElement('a');
    const file = new Blob([candidateTextResume], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${data.personal.name.replace(/\s+/g, '_')}_Resume_Dossier.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-modal-title"
      >
        {/* Header */}
        <div className="sticky top-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 id="resume-modal-title" className="text-base font-bold text-slate-900 dark:text-white">
                Candidate Resume Center
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Official resume access and recruiter dossier
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
        <div className="p-6 space-y-5 text-sm">
          {/* Instructions Card for Azar */}
          <div className="p-4 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200/80 dark:border-blue-900/50 space-y-2 text-xs">
            <div className="flex items-center gap-2 font-bold text-blue-900 dark:text-blue-300">
              <UploadCloud className="w-4 h-4 text-blue-600" />
              <span>How to Link Your Actual PDF Resume</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              To attach your finalized PDF resume, place your file at <code className="font-mono bg-blue-100 dark:bg-blue-900 px-1 py-0.5 rounded text-[11px]">/public/resume.pdf</code>. The portfolio is preconfigured to download that file instantly.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Available Resume Formats
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* PDF Resume Direct Link */}
              <a
                href={data.personal.resumeUrl}
                download="Azar_Basha_P_Resume.pdf"
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all flex flex-col justify-between group shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-900 dark:text-white mb-1">
                    <span>PDF Resume</span>
                    <Download className="w-4 h-4 text-blue-600 group-hover:translate-y-0.5 transition-transform" />
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Official PDF document format for applicant tracking systems.
                  </p>
                </div>
                <div className="mt-3 text-[11px] font-semibold text-blue-600 dark:text-blue-400">
                  Download PDF &rarr;
                </div>
              </a>

              {/* Text Dossier */}
              <button
                onClick={handleDownloadTextFile}
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all text-left flex flex-col justify-between group shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-900 dark:text-white mb-1">
                    <span>Plain Text Dossier</span>
                    <FileCheck2 className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Pre-compiled plain text format for direct parsing and ATS input.
                  </p>
                </div>
                <div className="mt-3 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                  Download .TXT &rarr;
                </div>
              </button>
            </div>
          </div>

          {/* Copy Text Resume Button */}
          <div className="pt-2">
            <button
              onClick={handleCopyText}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Resume Text Copied to Clipboard!' : 'Copy Full Text Resume to Clipboard'}</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-slate-50 dark:bg-slate-850 border-t border-slate-200 dark:border-slate-800 px-6 py-3.5 flex items-center justify-between">
          <span className="text-[11px] text-slate-400">
            Azar Basha P &bull; Verified Candidate
          </span>
          <button
            onClick={onClose}
            className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
