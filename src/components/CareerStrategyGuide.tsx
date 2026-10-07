import React, { useState } from 'react';
import { 
  Compass, 
  CheckCircle2, 
  AlertTriangle, 
  FolderPlus, 
  TrendingUp, 
  Database, 
  Award, 
  FileCode,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const CareerStrategyGuide: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'strengths' | 'gaps' | 'github-plan' | 'analyst-vs-ml'>('strengths');

  return (
    <section id="strategy" className="py-20 border-t border-slate-200/60 dark:border-slate-800/60 bg-white/40 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Personal Branding & Technical Strategy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Azar's Strategic Career Positioning Blueprint
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            A transparent evaluation of profile strengths, gap analysis, and the concrete 30-day action plan to land Data Analyst and ML roles.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {[
            { id: 'strengths', label: '1. Strongest Selling Points', icon: CheckCircle2 },
            { id: 'gaps', label: '2. Profile Gaps & Missing Info', icon: AlertTriangle },
            { id: 'github-plan', label: '3. Next 3 GitHub Projects to Build', icon: FolderPlus },
            { id: 'analyst-vs-ml', label: '4. Data Analyst vs ML Playbook', icon: TrendingUp },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Panes */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs">
          {activeTab === 'strengths' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                  What Sets You Apart to Hiring Managers
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Targeted positioning derived from your technical focus in Python, SQL, and analytical modeling.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
                    <Database className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                    Python + SQL Synergy
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Many entry-level applicants only know Excel or basic Python scripts. Demonstrating proficiency in both relational SQL queries (CTEs, joins) and Python data processing (Pandas, Scikit-Learn) places you in the top quartile of junior applicants.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                    Grounded & Credible Branding
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    By avoiding generic student clichés ("I am a master of all AI") and focusing on reproducible data workflows, you immediately earn trust from experienced engineering and analytics leads.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-3">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                    Dual Market Readiness
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Your skills span core Data Analytics (dashboards, metrics, reporting) and predictive Machine Learning (classification, regression), allowing you to apply for both Analyst and ML Intern job openings.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'gaps' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                  Profile Gaps & What Needs to be Added
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Critical missing links discovered during profile inspection and how to address them immediately.
                </p>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div className="text-xs space-y-1">
                    <h4 className="font-bold text-amber-900 dark:text-amber-200">
                      Gap 1: GitHub Has 0 Public Repositories
                    </h4>
                    <p className="text-amber-800 dark:text-amber-300 leading-relaxed">
                      Your GitHub (<code className="font-mono">azarbasha786</code>) currently has 0 public repositories. Recruiters look for code evidence within 10 seconds. You must push at least 2 clean, well-documented repositories with meaningful README files right away.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div className="text-xs space-y-1">
                    <h4 className="font-bold text-amber-900 dark:text-amber-200">
                      Gap 2: LinkedIn Experience & Education Details Needed
                    </h4>
                    <p className="text-amber-800 dark:text-amber-300 leading-relaxed">
                      Because LinkedIn prevents automated third-party scrapers, your exact university name, graduation batch year, and previous internship titles should be added to the portfolio data using the interactive configurator.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div className="text-xs space-y-1">
                    <h4 className="font-bold text-amber-900 dark:text-amber-200">
                      Gap 3: Live PDF Resume
                    </h4>
                    <p className="text-amber-800 dark:text-amber-300 leading-relaxed">
                      Recruiters require a 1-page ATS-formatted PDF resume. Drop your resume file into <code className="font-mono">public/resume.pdf</code> so the "Download Resume" button links directly to your document.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'github-plan' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                  The 3 Essential Projects to Push to GitHub Next
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Build and commit these exact three repositories to immediately validate your core skills.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850/50">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold">
                      Project 1 &bull; Data Analyst Anchor
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300">
                      SQL + Python EDA
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                    E-Commerce Transaction & Customer Cohort Analysis
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-2 leading-relaxed">
                    Write clean SQL scripts (PostgreSQL or SQLite) calculating retention rates, repeat purchase frequency, and Average Order Value (AOV). Supplement with a Jupyter notebook showing distributions and trend charts.
                  </p>
                  <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    Key files: <code className="text-blue-600 dark:text-blue-400">queries.sql</code>, <code className="text-blue-600 dark:text-blue-400">cohort_analysis.ipynb</code>, <code className="text-blue-600 dark:text-blue-400">README.md</code> with screenshots.
                  </div>
                </div>

                <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850/50">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-bold">
                      Project 2 &bull; Machine Learning Anchor
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300">
                      Scikit-Learn Pipeline
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                    Customer Churn / Risk Classification with Explainability
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-2 leading-relaxed">
                    Train a classifier (Random Forest or XGBoost) to predict churn. Emphasize proper cross-validation, class balancing (imbalanced metrics like PR-AUC and F1), and feature importance plots.
                  </p>
                  <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    Key files: <code className="text-indigo-600 dark:text-indigo-400">pipeline.py</code>, <code className="text-indigo-600 dark:text-indigo-400">evaluate.py</code>, <code className="text-indigo-600 dark:text-indigo-400">requirements.txt</code>.
                  </div>
                </div>

                <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850/50">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold">
                      Project 3 &bull; Presentation & Tooling
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300">
                      Interactive Dashboard / Streamlit
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                    Live Streamlit or React Interactive KPI Explorer
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-2 leading-relaxed">
                    Deploy a live interactive web app on Streamlit Cloud or Vercel where a recruiter can upload a CSV, select filters, and explore real-time charts without running code locally.
                  </p>
                  <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    Deploy on: <code className="text-emerald-600 dark:text-emerald-400">Streamlit Community Cloud</code> or <code className="text-emerald-600 dark:text-emerald-400">Vercel</code>.
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'analyst-vs-ml' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                  How to Tailor Your Applications by Role
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Strategic adjustments when applying for Data Analyst vs Machine Learning positions.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/80 dark:border-blue-900/40">
                  <div className="flex items-center gap-2 mb-3">
                    <Database className="w-4 h-4 text-blue-600" />
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      For Data Analyst Roles
                    </h4>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                    <li>&bull; <strong>Highlight SQL First:</strong> Recruiters test SQL live (window functions, subqueries, group by, joins).</li>
                    <li>&bull; <strong>Emphasize Business Metrics:</strong> Talk about revenue, customer acquisition cost, conversion rate, churn.</li>
                    <li>&bull; <strong>Show Dashboarding:</strong> Showcase Power BI, Tableau, or clean Matplotlib/Seaborn visualizations.</li>
                    <li>&bull; <strong>Explain the 'So What?':</strong> Always state the decision a stakeholder should make based on the chart.</li>
                  </ul>
                </div>

                <div className="p-5 rounded-xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-200/80 dark:border-purple-900/40">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="w-4 h-4 text-purple-600" />
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      For Data Science / ML Roles
                    </h4>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                    <li>&bull; <strong>Emphasize Pipeline Rigor:</strong> Show proper training/validation/test splits without target leakage.</li>
                    <li>&bull; <strong>Feature Engineering:</strong> Explain how you created interaction terms, encoded categories, and handled nulls.</li>
                    <li>&bull; <strong>Model Justification:</strong> Explain why you picked Random Forest over Logistic Regression for that dataset.</li>
                    <li>&bull; <strong>Evaluation Depth:</strong> Show Confusion Matrices, Precision-Recall trade-offs, and ROC curves.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
