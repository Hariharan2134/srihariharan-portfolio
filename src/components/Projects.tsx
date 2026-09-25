import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { 
  Github, 
  ExternalLink, 
  ArrowUpRight, 
  FlaskConical, 
  Layers, 
  Info,
  CheckCircle2
} from 'lucide-react';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
  onLaunchSimulator: (projectId: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({
  onSelectProject,
  onLaunchSimulator,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai-ml', label: 'AI & Biometrics' },
    { id: 'nlp', label: 'NLP & LLMs' },
    { id: 'analytics', label: 'Data Mining' },
    { id: 'fullstack', label: 'Full-Stack Systems' },
  ];

  const filteredProjects = PORTFOLIO_DATA.projects.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-400 uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>Production & Research Engineering</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-display">
              Featured Projects & Systems
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
              Machine learning models, natural language architectures, and data mining tools backed by verifiable source code and benchmarks.
            </p>
          </div>

          {/* Interactive Filter Tabs - Functional buttons */}
          <div className="flex items-center gap-1 p-1 bg-zinc-900/90 border border-zinc-800 rounded-xl overflow-x-auto max-w-full">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-all ${
                  activeFilter === tab.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => {
            const isWide = index === 0 && activeFilter === 'all';

            return (
              <div
                key={project.id}
                className={`group relative bg-[#11131B] border border-zinc-800/90 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between ${
                  isWide ? 'md:col-span-2' : ''
                }`}
              >
                <div>
                  {/* Media banner */}
                  <div className={`relative w-full overflow-hidden bg-zinc-900 ${isWide ? 'h-64 sm:h-80' : 'h-52 sm:h-60'}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#11131B] via-[#11131B]/40 to-transparent" />

                    {/* Top right quick actions */}
                    <div className="absolute top-4 right-4 flex items-center gap-2">
                      {project.hasSimulator && (
                        <button
                          onClick={() => onLaunchSimulator(project.id)}
                          className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-cyan-300 bg-black/75 hover:bg-cyan-950/80 border border-cyan-500/30 rounded-lg backdrop-blur-md transition-colors"
                          title="Open live interactive simulator"
                        >
                          <FlaskConical className="w-3.5 h-3.5" />
                          <span>Try Live</span>
                        </button>
                      )}

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-black/75 hover:bg-black text-zinc-300 hover:text-white border border-zinc-700/80 rounded-lg backdrop-blur-md transition-colors"
                        title="View GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>

                    {/* Bottom banner kicker & category */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 text-zinc-400 font-medium">
                        <span className="text-blue-400 font-semibold">{project.categoryLabel}</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono text-zinc-500">{project.timeline}</span>
                      </div>

                      {project.metrics[0] && (
                        <div className="font-mono text-xs text-white bg-black/60 px-2 py-0.5 rounded border border-white/10">
                          {project.metrics[0].label}: <span className="text-emerald-400 font-bold">{project.metrics[0].value}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight font-display mb-1.5 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed mb-4">
                      {project.summary}
                    </p>

                    {/* Key Technical Highlights */}
                    <ul className="space-y-1.5 mb-5">
                      {project.highlights.slice(0, isWide ? 3 : 2).map((hl, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{hl}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack List - Unboxed text items with subtle border */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-800/80">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[11px] font-mono text-zinc-400 bg-zinc-900 border border-zinc-800 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="px-1.5 py-0.5 text-[11px] font-mono text-zinc-500">
                          +{project.technologies.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons Footer */}
                <div className="p-6 pt-0 mt-2 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-300 hover:text-white transition-colors"
                  >
                    <span>Architecture Deep Dive</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-blue-400" />
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-zinc-800 hover:bg-zinc-700 px-3 py-1.5 rounded-lg border border-zinc-700 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source Code</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
