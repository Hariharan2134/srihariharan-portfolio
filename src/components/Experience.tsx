import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, TrendingUp, Award } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-400 uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>Professional Career History</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-display">
            Work & Research Experience
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
            Track record across 3 engineering internships and an academic research tenure at the National Institute of Technology (NIT Trichy).
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 md:before:left-5 before:w-0.5 before:bg-zinc-800 before:pointer-events-none">
          {PORTFOLIO_DATA.experience.map((exp, index) => (
            <div
              key={exp.id}
              className="relative pl-10 md:pl-14 group"
            >
              {/* Timeline marker node */}
              <div className="absolute left-1.5 md:left-3.5 top-1.5 w-3.5 h-3.5 rounded-full bg-zinc-900 border-2 border-blue-500 group-hover:scale-125 group-hover:bg-blue-500 transition-all duration-200" />

              {/* Main Card */}
              <div className="bg-[#11131B] border border-zinc-800/90 rounded-2xl p-6 sm:p-8 hover:border-zinc-700/80 transition-all duration-200 shadow-xl">
                
                {/* Header row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-4 border-b border-zinc-800/80 mb-5">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                        {exp.role}
                      </h3>
                      <span className="text-zinc-500">·</span>
                      <span className="text-sm sm:text-base font-semibold text-blue-400">
                        {exp.organization}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400">
                      <span className="flex items-center gap-1 font-mono text-zinc-400">
                        <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                        {exp.period}
                      </span>
                      <span className="text-zinc-600">·</span>
                      <span className="flex items-center gap-1 text-zinc-500">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Quantified impact badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-950/40 border border-blue-800/50 rounded-lg text-xs font-semibold text-blue-300 self-start md:self-auto font-mono">
                    <TrendingUp className="w-3.5 h-3.5 text-blue-400" />
                    <span>{exp.keyMetric}</span>
                  </div>
                </div>

                {/* Accomplishments */}
                <ul className="space-y-3 mb-6">
                  {exp.description.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack used */}
                <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-zinc-500 mr-1">Technologies:</span>
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono text-zinc-400 bg-zinc-900 border border-zinc-800 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
