import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Brain, Database, Code2, Wrench, CheckCircle } from 'lucide-react';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Machine Learning & AI Frameworks',
      icon: Brain,
      color: 'text-blue-400',
      skills: PORTFOLIO_DATA.skills.ml_ai,
    },
    {
      title: 'Data Science & Signal Visualization',
      icon: Database,
      color: 'text-cyan-400',
      skills: PORTFOLIO_DATA.skills.data_viz,
    },
    {
      title: 'Programming Languages',
      icon: Code2,
      color: 'text-indigo-400',
      skills: PORTFOLIO_DATA.skills.languages,
    },
    {
      title: 'Backend, Web & Cloud Tools',
      icon: Wrench,
      color: 'text-emerald-400',
      skills: PORTFOLIO_DATA.skills.frameworks_tools,
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-zinc-800/80 bg-[#0A0C14]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-400 uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-display">
            Skills & Framework Competency
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
            Practical, production-tested toolkit spanning statistical ML modeling, multimodal biosignal analysis, NLP transformers, and full-stack API integration.
          </p>
        </div>

        {/* 4-Column / 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="bg-[#11131B] border border-zinc-800 rounded-2xl p-6 sm:p-7 shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 pb-4 border-b border-zinc-800/80 mb-5">
                    <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800">
                      <Icon className={`w-5 h-5 ${cat.color}`} />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white font-display">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Skills items list */}
                  <div className="space-y-4">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="group p-3 rounded-xl bg-zinc-900/50 border border-zinc-800/60 hover:border-zinc-700 transition-colors"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-semibold text-zinc-100 font-mono">
                            {skill.name}
                          </span>
                          <span className="text-xs font-mono text-blue-400 font-medium">
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-xs text-zinc-400 leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subtle card kicker */}
                <div className="pt-4 mt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-500 font-mono">
                  <span>Applied in Academic & Production Code</span>
                  <span>{cat.skills.length} Technologies</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
