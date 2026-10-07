import React, { useState } from 'react';
import { 
  Code2, 
  Database, 
  TrendingUp, 
  BarChart3, 
  Wrench, 
  Layers, 
  Check, 
  HelpCircle,
  Sparkles
} from 'lucide-react';
import { PortfolioData, SkillItem } from '../data/portfolioData';

interface SkillsProps {
  data: PortfolioData;
}

export const Skills: React.FC<SkillsProps> = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeSkill, setActiveSkill] = useState<SkillItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Technologies', icon: Layers },
    { id: 'programming', label: 'Programming', icon: Code2 },
    { id: 'analytics', label: 'Data & Analytics', icon: Database },
    { id: 'ml', label: 'Machine Learning', icon: TrendingUp },
    { id: 'visualization', label: 'Visualization', icon: BarChart3 },
    { id: 'tools', label: 'Developer Tools', icon: Wrench },
  ];

  const filteredSkills = selectedCategory === 'all'
    ? data.skills
    : data.skills.filter(s => s.category === selectedCategory);

  const getLevelBadge = (level: SkillItem['level']) => {
    switch (level) {
      case 'Core':
        return (
          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
            Core Strength
          </span>
        );
      case 'Proficient':
        return (
          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
            Working Proficiency
          </span>
        );
      case 'Familiar':
        return (
          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
            Foundational
          </span>
        );
    }
  };

  return (
    <section id="skills" className="py-20 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200 dark:border-blue-800 mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Verified Skills & Tooling
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            Categorized by practical application. No arbitrary percentage bars—just honest competencies and working depth.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
                {cat.id !== 'all' && (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected ? 'bg-blue-700 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-500'
                  }`}>
                    {data.skills.filter(s => s.category === cat.id).length}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              onClick={() => setActiveSkill(activeSkill?.name === skill.name ? null : skill)}
              className="group p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-200 shadow-xs cursor-pointer relative"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    {skill.categoryLabel}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {skill.name}
                  </h3>
                </div>
                {getLevelBadge(skill.level)}
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {skill.description}
              </p>

              {/* Interactive Practical Use Callout */}
              <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500">
                <span className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-medium">
                  <Check className="w-3 h-3" />
                  <span>Production Ready</span>
                </span>
                <span className="font-mono text-[10px]">Click for context</span>
              </div>
            </div>
          ))}
        </div>

        {/* Recruiter Evaluation Standards Box */}
        <div className="mt-10 p-5 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-500" />
              <span>Skill Level Definitions</span>
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              <strong>Core Strength:</strong> Used daily for data manipulation, scripts, and queries. &bull; 
              <strong>Working Proficiency:</strong> Confident with standard libraries, metrics, and models. &bull; 
              <strong>Foundational:</strong> Working knowledge of syntax and integration patterns.
            </p>
          </div>
          <a
            href="#projects"
            className="shrink-0 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
          >
            See skills applied in projects &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};
