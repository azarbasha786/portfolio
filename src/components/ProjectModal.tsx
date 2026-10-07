import React from 'react';
import { 
  X, 
  Github, 
  ExternalLink, 
  Layers, 
  CheckCircle2, 
  AlertCircle, 
  Lightbulb, 
  Cpu, 
  FileText 
} from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        {/* Header */}
        <div className="sticky top-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex items-center justify-between z-10">
          <div>
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              {project.categoryLabel}
            </span>
            <h2 id="project-modal-title" className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">
              {project.title}
            </h2>
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
          {/* Overview & Problem */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1.5 flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-amber-500" />
                <span>The Problem Statement</span>
              </h3>
              <p className="text-slate-700 dark:text-slate-300 bg-amber-50/60 dark:bg-amber-950/20 p-3.5 rounded-xl border border-amber-200/60 dark:border-amber-900/40 text-xs sm:text-sm leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1.5 flex items-center gap-1.5">
                <Lightbulb className="w-4 h-4 text-blue-500" />
                <span>Approach & Methodology</span>
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                {project.approach}
              </p>
            </div>
          </div>

          {/* Architecture & Pipeline Stages */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2.5 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-indigo-500" />
              <span>Data Pipeline & Architecture Stages</span>
            </h3>
            <div className="space-y-2">
              {project.architecture.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 text-xs"
                >
                  <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-mono font-bold flex items-center justify-center shrink-0 text-[10px]">
                    {idx + 1}
                  </span>
                  <span className="text-slate-700 dark:text-slate-300 pt-0.5">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-purple-500" />
              <span>Technology Stack</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Findings & Business Learnings */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2.5 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Key Outcomes & Deliverables</span>
            </h3>
            <ul className="space-y-2">
              {project.keyOutcomes.map((outcome, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-slate-50 dark:bg-slate-800/90 backdrop-blur-sm border-t border-slate-200 dark:border-slate-800 px-6 py-4 flex items-center justify-between gap-3">
          <div className="text-xs text-slate-500 dark:text-slate-400">
            {project.isBlueprint ? (
              <span className="italic">Showcase Architecture Blueprint</span>
            ) : (
              <span>Verified Project Repository</span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-slate-900 text-white dark:bg-slate-800 dark:hover:bg-slate-700 hover:bg-slate-800 transition-colors shadow-xs"
            >
              <Github className="w-3.5 h-3.5" />
              <span>View on GitHub</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-xs"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
