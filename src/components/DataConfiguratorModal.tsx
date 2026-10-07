import React, { useState } from 'react';
import { 
  X, 
  Settings, 
  Plus, 
  Copy, 
  Check, 
  RotateCcw, 
  Save, 
  FolderPlus, 
  User, 
  GraduationCap, 
  FileCode,
  Download
} from 'lucide-react';
import { PortfolioData, ProjectItem } from '../data/portfolioData';

interface DataConfiguratorModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioData;
  onSave: (newData: PortfolioData) => void;
  onReset: () => void;
}

export const DataConfiguratorModal: React.FC<DataConfiguratorModalProps> = ({
  isOpen,
  onClose,
  data,
  onSave,
  onReset
}) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'add-project' | 'export'>('profile');
  const [copiedCode, setCopiedCode] = useState(false);

  // Profile Edit State
  const [profileName, setProfileName] = useState(data.personal.name);
  const [profileHeadline, setProfileHeadline] = useState(data.personal.headline);
  const [profileTagline, setProfileTagline] = useState(data.personal.tagline);
  const [profileEmail, setProfileEmail] = useState(data.personal.email);
  const [profileLocation, setProfileLocation] = useState(data.personal.location);
  const [profileGithub, setProfileGithub] = useState(data.personal.github);
  const [profileLinkedin, setProfileLinkedin] = useState(data.personal.linkedin);

  // New Project State
  const [newProject, setNewProject] = useState<Partial<ProjectItem>>({
    title: '',
    category: 'data-analytics',
    categoryLabel: 'Data Analytics',
    shortDescription: '',
    problem: '',
    approach: '',
    technologies: ['Python', 'SQL'],
    githubUrl: 'https://github.com/azarbasha786/',
    keyOutcomes: [''],
    architecture: ['']
  });
  const [techInput, setTechInput] = useState('Python, SQL, Pandas');
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedData: PortfolioData = {
      ...data,
      personal: {
        ...data.personal,
        name: profileName,
        headline: profileHeadline,
        tagline: profileTagline,
        email: profileEmail,
        location: profileLocation,
        github: profileGithub,
        linkedin: profileLinkedin
      }
    };
    onSave(updatedData);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProject.title || !newProject.shortDescription) return;

    const techs = techInput.split(',').map(s => s.trim()).filter(Boolean);
    const categoryLabel = newProject.category === 'data-analytics'
      ? 'Data Analytics'
      : newProject.category === 'machine-learning'
      ? 'Machine Learning'
      : 'Full-Stack / Web';

    const projectToAdd: ProjectItem = {
      id: `proj-${Date.now()}`,
      title: newProject.title || 'Untitled Project',
      category: newProject.category as any || 'data-analytics',
      categoryLabel,
      shortDescription: newProject.shortDescription || '',
      problem: newProject.problem || 'Business challenge requiring data-driven automation.',
      approach: newProject.approach || 'Cleaned dataset, engineered features, and modeled outputs.',
      architecture: [
        'Data Ingestion & Cleaning Pipeline',
        'Model Training / Analysis Query Execution',
        'Visual Reporting & Export'
      ],
      technologies: techs.length > 0 ? techs : ['Python', 'SQL'],
      keyOutcomes: [
        'Delivered reproducible analysis script',
        'Generated executive metric summary'
      ],
      githubUrl: newProject.githubUrl || 'https://github.com/azarbasha786',
      liveDemoUrl: newProject.liveDemoUrl || '',
      featured: true
    };

    const updatedData: PortfolioData = {
      ...data,
      projects: [projectToAdd, ...data.projects]
    };

    onSave(updatedData);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
    // Reset form
    setNewProject({
      title: '',
      category: 'data-analytics',
      categoryLabel: 'Data Analytics',
      shortDescription: '',
      problem: '',
      approach: '',
      githubUrl: 'https://github.com/azarbasha786/'
    });
  };

  const exportedCode = `export const initialPortfolioData = ${JSON.stringify(data, null, 2)};`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(exportedCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
        role="dialog"
        aria-modal="true"
        aria-labelledby="configurator-modal-title"
      >
        {/* Header */}
        <div className="sticky top-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h2 id="configurator-modal-title" className="text-base font-bold text-slate-900 dark:text-white">
                Portfolio Settings & Live Configurator
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Easily update projects, contact links, and personal information
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="px-6 pt-4 flex gap-2 border-b border-slate-200 dark:border-slate-800">
          <button
            onClick={() => setActiveTab('profile')}
            className={`pb-2.5 px-3 text-xs font-semibold border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'profile'
                ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>Profile Details</span>
          </button>

          <button
            onClick={() => setActiveTab('add-project')}
            className={`pb-2.5 px-3 text-xs font-semibold border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'add-project'
                ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <FolderPlus className="w-3.5 h-3.5" />
            <span>Add New Project</span>
          </button>

          <button
            onClick={() => setActiveTab('export')}
            className={`pb-2.5 px-3 text-xs font-semibold border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'export'
                ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <FileCode className="w-3.5 h-3.5" />
            <span>Export Code</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {savedSuccess && (
            <div className="mb-4 p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>Saved successfully! Changes are live on the portfolio right now.</span>
            </div>
          )}

          {activeTab === 'profile' && (
            <form onSubmit={handleSaveProfile} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={profileName}
                    onChange={(e) => setProfileName(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={profileEmail}
                    onChange={(e) => setProfileEmail(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Professional Headline
                </label>
                <input
                  type="text"
                  value={profileHeadline}
                  onChange={(e) => setProfileHeadline(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Hero Tagline / Value Proposition
                </label>
                <textarea
                  rows={2}
                  value={profileTagline}
                  onChange={(e) => setProfileTagline(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    LinkedIn URL
                  </label>
                  <input
                    type="text"
                    value={profileLinkedin}
                    onChange={(e) => setProfileLinkedin(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    GitHub URL
                  </label>
                  <input
                    type="text"
                    value={profileGithub}
                    onChange={(e) => setProfileGithub(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-xs"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Save Profile Updates</span>
                </button>
              </div>
            </form>
          )}

          {activeTab === 'add-project' && (
            <form onSubmit={handleAddProject} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Project Title
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Real-Time Fraud Detection Pipeline"
                    value={newProject.title}
                    onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Category
                  </label>
                  <select
                    value={newProject.category}
                    onChange={(e) => setNewProject({ ...newProject, category: e.target.value as any })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                  >
                    <option value="data-analytics">Data Analytics & SQL</option>
                    <option value="machine-learning">Machine Learning & Modeling</option>
                    <option value="full-stack">Web Analytics & Tools</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Short Summary (1-2 sentences for card)
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Statistical analysis of 50k transactions identifying fraud patterns."
                  value={newProject.shortDescription}
                  onChange={(e) => setNewProject({ ...newProject, shortDescription: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Business Problem Solved
                </label>
                <textarea
                  rows={2}
                  placeholder="What business pain point does this solve?"
                  value={newProject.problem}
                  onChange={(e) => setNewProject({ ...newProject, problem: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Tech Stack (Comma-separated)
                </label>
                <input
                  type="text"
                  placeholder="Python, Pandas, Scikit-Learn, SQL"
                  value={techInput}
                  onChange={(e) => setTechInput(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    GitHub Repository Link
                  </label>
                  <input
                    type="text"
                    placeholder="https://github.com/azarbasha786/my-project"
                    value={newProject.githubUrl}
                    onChange={(e) => setNewProject({ ...newProject, githubUrl: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Live Demo Link (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="https://my-app.streamlit.app"
                    value={newProject.liveDemoUrl || ''}
                    onChange={(e) => setNewProject({ ...newProject, liveDemoUrl: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-xs"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Project to Portfolio</span>
                </button>
              </div>
            </form>
          )}

          {activeTab === 'export' && (
            <div className="space-y-4 text-xs">
              <p className="text-slate-600 dark:text-slate-400">
                You can copy this data object and replace the contents of <code className="font-mono bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">src/data/portfolioData.ts</code> in your project repository whenever you want permanent updates.
              </p>

              <div className="relative">
                <pre className="p-4 rounded-xl bg-slate-900 text-slate-200 font-mono text-[11px] max-h-60 overflow-y-auto">
                  {exportedCode}
                </pre>
                <button
                  onClick={handleCopyCode}
                  className="absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold text-[11px] shadow-xs"
                >
                  {copiedCode ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedCode ? 'Copied!' : 'Copy Code'}</span>
                </button>
              </div>

              <div className="pt-3 flex justify-between items-center border-t border-slate-200 dark:border-slate-800">
                <button
                  onClick={() => {
                    if (confirm('Reset portfolio data back to initial defaults?')) {
                      onReset();
                      onClose();
                    }
                  }}
                  className="inline-flex items-center gap-1.5 text-xs text-rose-600 hover:underline"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset to Factory Defaults</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
