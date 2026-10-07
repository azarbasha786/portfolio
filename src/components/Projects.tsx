import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Layers, 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2, 
  FileCode2,
  Info,
  Plus
} from 'lucide-react';
import { PortfolioData, ProjectItem } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  data: PortfolioData;
  onOpenConfigurator: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ data, onOpenConfigurator }) => {
  const [filter, setFilter] = useState<'all' | 'data-analytics' | 'machine-learning' | 'full-stack'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = filter === 'all'
    ? data.projects
    : data.projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 border-t border-slate-200/60 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200 dark:border-blue-800 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Technical Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Curated Projects & Solutions
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            End-to-end data pipelines, exploratory analysis, and machine learning models designed with production standards and business focus.
          </p>
        </div>

        {/* Recruiter Transparency Banner */}
        <div className="mb-8 p-4 rounded-xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-start gap-2.5">
            <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
            <div className="text-slate-700 dark:text-slate-300">
              <span className="font-bold text-slate-900 dark:text-white">Recruiter Transparency Note: </span>
              Azar's public GitHub account (<code className="font-mono bg-blue-100/70 dark:bg-blue-900/60 px-1 py-0.5 rounded text-[11px]">@azarbasha786</code>) is newly created for career launch. These cards showcase the curated project architectures and analytical pipelines ready for immediate GitHub push.
            </div>
          </div>
          <button
            onClick={onOpenConfigurator}
            className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-xs transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add / Edit Project</span>
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'data-analytics', label: 'Data Analytics & SQL' },
            { id: 'machine-learning', label: 'Machine Learning' },
            { id: 'full-stack', label: 'Web Analytics & Tools' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                filter === tab.id
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-200 shadow-xs hover:shadow-md flex flex-col justify-between overflow-hidden"
            >
              {/* Card Top */}
              <div className="p-6">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    {project.categoryLabel}
                  </span>
                  {project.isBlueprint && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                      <Sparkles className="w-2.5 h-2.5" />
                      <span>Ready to Clone</span>
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug mb-2">
                  {project.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {project.shortDescription}
                </p>

                {/* Problem Statement Box */}
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 text-xs mb-4">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-0.5">
                    Problem Solved
                  </div>
                  <div className="text-slate-700 dark:text-slate-300 line-clamp-2">
                    {project.problem}
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 py-4 bg-slate-50/70 dark:bg-slate-850/50 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <span>Deep Dive Specs</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>

                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/60 transition-colors"
                      title="View Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
