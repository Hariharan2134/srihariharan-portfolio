import React, { useEffect } from 'react';
import { Project } from '../data/portfolioData';
import { 
  X, 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  Cpu, 
  Layers, 
  Sparkles, 
  ArrowRight,
  FlaskConical 
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onLaunchSimulator?: (projectId: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onLaunchSimulator,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#11131B] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header / Media Banner */}
        <div className="relative h-56 sm:h-72 w-full bg-zinc-900 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#11131B] via-[#11131B]/60 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/70 hover:bg-black text-zinc-300 hover:text-white border border-zinc-700/80 transition-colors z-10"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title lockup on image banner */}
          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 mb-1.5">
              <span>{project.categoryLabel}</span>
              <span className="text-zinc-600">·</span>
              <span className="text-zinc-400 font-mono">{project.timeline}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-display">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 mt-1">
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Content body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Metrics bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-zinc-900/80 border border-zinc-800/80 rounded-xl">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold font-mono text-white tabular-nums">
                  {m.value}
                </span>
                <span className="text-xs text-zinc-400 font-medium">
                  {m.label}
                </span>
              </div>
            ))}
          </div>

          {/* Problem & Solution Architecture */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60">
              <h3 className="text-sm font-semibold text-zinc-200 flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                The Core Challenge
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60">
              <h3 className="text-sm font-semibold text-zinc-200 flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Engineered Solution
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Highlights & Engineering Details */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide uppercase mb-3 text-zinc-300">
              Technical Contributions & Results
            </h3>
            <ul className="space-y-2.5">
              {project.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div>
            <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2.5">
              Tech Stack & Libraries
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono font-medium text-zinc-300 bg-zinc-900 border border-zinc-800 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-6 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-zinc-500 font-mono">
              Role: <span className="text-zinc-300">{project.role}</span>
            </div>

            <div className="flex items-center gap-3">
              {project.hasSimulator && onLaunchSimulator && (
                <button
                  onClick={() => {
                    onClose();
                    onLaunchSimulator(project.id);
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-zinc-200 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-lg transition-colors"
                >
                  <FlaskConical className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Interactive Simulator</span>
                </button>
              )}

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm shadow-blue-500/20 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View GitHub Repository</span>
                <ExternalLink className="w-3.5 h-3.5 ml-0.5 text-blue-200" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
