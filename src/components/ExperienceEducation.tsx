import React from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  Award, 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  BookOpen, 
  ExternalLink,
  PlusCircle
} from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';

interface ExperienceEducationProps {
  data: PortfolioData;
  onOpenConfigurator: () => void;
}

export const ExperienceEducation: React.FC<ExperienceEducationProps> = ({ 
  data, 
  onOpenConfigurator 
}) => {
  return (
    <section id="experience" className="py-20 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200 dark:border-blue-800 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic & Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Education, Experience & Certifications
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            A transparent overview of academic preparation, practical experience, and continuous learning credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Education & Certifications */}
          <div className="lg:col-span-6 space-y-10">
            {/* Education Block */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-blue-600" />
                <span>Formal Education</span>
              </h3>

              <div className="space-y-4">
                {data.education.map((edu) => (
                  <div
                    key={edu.id}
                    className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">
                        {edu.degree}
                      </h4>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-mono">
                        <Calendar className="w-3 h-3" />
                        {edu.period}
                      </span>
                    </div>

                    <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
                      {edu.institution}
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-4">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{edu.location}</span>
                      {edu.grade && (
                        <>
                          <span>&bull;</span>
                          <span className="font-semibold text-slate-700 dark:text-slate-300">{edu.grade}</span>
                        </>
                      )}
                    </div>

                    <div className="space-y-3">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1.5">
                          Key Highlights
                        </div>
                        <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 list-disc list-inside">
                          {edu.highlights.map((h, i) => (
                            <li key={i}>{h}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1.5">
                          Relevant Coursework
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {edu.relevantCoursework.map((c) => (
                            <span
                              key={c}
                              className="px-2 py-0.5 rounded-md text-[11px] bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                            >
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Block */}
            {data.certifications && data.certifications.length > 0 ? (
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span>Certifications & Continuous Learning</span>
                </h3>

                <div className="space-y-3">
                  {data.certifications.map((cert) => (
                    <div
                      key={cert.id}
                      className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex items-start justify-between gap-3"
                    >
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                          {cert.title}
                        </h4>
                        <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          {cert.issuer} &bull; <span className="font-mono">{cert.date}</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {cert.skills.map((s) => (
                            <span
                              key={s}
                              className="text-[10px] px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-900/40 font-medium"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>

                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          title="View Certificate Credential"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          {/* Right Column: Experience / Practical Projects */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-emerald-600" />
                <span>Experience & Technical Practice</span>
              </h3>

              <button
                onClick={onOpenConfigurator}
                className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
              >
                <PlusCircle className="w-3.5 h-3.5" />
                <span>Update Experience</span>
              </button>
            </div>

            <div className="space-y-4">
              {data.experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs relative"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h4>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                      {exp.type}
                    </span>
                  </div>

                  <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {exp.organization}
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-4 font-mono">
                    <Calendar className="w-3 h-3" />
                    <span>{exp.period}</span>
                    <span>&bull;</span>
                    <MapPin className="w-3 h-3" />
                    <span>{exp.location}</span>
                  </div>

                  <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300 mb-4">
                    {exp.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800">
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Recruiter Evaluation Guidance Box */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 text-xs text-slate-600 dark:text-slate-300 space-y-2">
              <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                <span>Resume & Experience Integration</span>
              </div>
              <p className="leading-relaxed">
                Hiring managers appreciate candidate integrity. This profile highlights verified foundational skills while maintaining modular slots for immediate insertion of official graduation year, university transcripts, or previous internship certificates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
