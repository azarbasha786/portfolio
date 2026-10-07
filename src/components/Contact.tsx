import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Copy, 
  Check, 
  Send, 
  MapPin, 
  Calendar, 
  Clock, 
  MessageSquare,
  ExternalLink
} from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';

interface ContactProps {
  data: PortfolioData;
}

export const Contact: React.FC<ContactProps> = ({ data }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    role: 'Data Analyst Role',
    message: ''
  });
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(data.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setStatusMessage('Please fill in all fields before sending.');
      return;
    }

    const subject = encodeURIComponent(`[Opportunity Inquiry] ${formState.role} - ${formState.name}`);
    const body = encodeURIComponent(
      `Hi Azar,\n\nMy name is ${formState.name} (${formState.email}).\n\n${formState.message}\n\nBest regards,\n${formState.name}`
    );

    window.location.href = `mailto:${data.personal.email}?subject=${subject}&body=${body}`;
    setStatusMessage('Opening your email client... You can also copy the direct email address above!');
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-200/60 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200 dark:border-blue-800 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Let's Discuss Opportunities
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            Open to internships, entry-level data roles, and collaborative projects. I respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact & Social Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-5">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Contact Information
              </h3>

              {/* Email Address with Copy Button */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <div className="text-[11px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    Direct Email
                  </div>
                  <a
                    href={`mailto:${data.personal.email}`}
                    className="text-sm font-semibold text-blue-600 dark:text-blue-400 truncate block hover:underline"
                  >
                    {data.personal.email}
                  </a>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:text-blue-600 border border-slate-200 dark:border-slate-700 transition-colors shrink-0"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Status & Work Availability */}
              <div className="space-y-3 text-xs">
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <Clock className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span><strong>Availability:</strong> Immediate / Ready for Interviews</span>
                </div>

                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <MapPin className="w-4 h-4 text-blue-500 shrink-0" />
                  <span><strong>Location:</strong> Open to Remote & Onsite (Worldwide / India)</span>
                </div>

                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <Calendar className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span><strong>Response Time:</strong> Typically under 24 business hours</span>
                </div>
              </div>

              {/* Verified Profiles */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                  Professional Profiles
                </div>

                <a
                  href={data.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 hover:border-blue-400 transition-colors text-xs font-semibold text-slate-700 dark:text-slate-200"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-blue-600" />
                    <span>LinkedIn Profile</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href={data.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 hover:border-slate-400 transition-colors text-xs font-semibold text-slate-700 dark:text-slate-200"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4" />
                    <span>GitHub Profile (azarbasha786)</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Inquiry Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                Send a Message or Opportunity Details
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                Fill out the brief form below to connect directly with Azar.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Name / Recruiter Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white text-xs focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white text-xs focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Role Category
                  </label>
                  <select
                    value={formState.role}
                    onChange={(e) => setFormState({ ...formState, role: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white text-xs focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Data Analyst Role">Data Analyst Opportunity</option>
                    <option value="Machine Learning / AI Role">Machine Learning / AI Role</option>
                    <option value="Data Science Opportunity">Data Science Opportunity</option>
                    <option value="Software / Full-Stack Role">Software / Full-Stack Role</option>
                    <option value="General Technical Inquiry">General Technical Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Message / Opportunity Description
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell me about the role, team, or project requirements..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white text-xs focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {statusMessage && (
                  <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 text-xs text-blue-800 dark:text-blue-300">
                    {statusMessage}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 transition-all hover:translate-y-[-1px]"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message via Email Client</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
