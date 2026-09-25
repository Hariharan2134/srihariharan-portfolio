import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GraduationCap, Award, Calendar, CheckCircle2, BookOpen } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-400 uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>Academic Background & Credentials</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-display">
            Education & Certifications
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
            Formal education in Information Technology alongside verified industry credentials in data science, Python, R, and statistical analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Education Degree & Schooling */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-blue-400" />
              <span>Degree & Schooling</span>
            </h3>

            <div className="space-y-4">
              {PORTFOLIO_DATA.education.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#11131B] border border-zinc-800 rounded-2xl p-6 sm:p-7 hover:border-zinc-700/80 transition-colors shadow-xl"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-zinc-800/80 mb-3">
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-white font-display">
                        {item.degree}
                      </h4>
                      <div className="text-xs sm:text-sm text-zinc-400 font-medium">
                        {item.institution}
                      </div>
                    </div>

                    <div className="flex sm:flex-col sm:items-end justify-between items-center">
                      <span className="text-xs font-mono text-zinc-500 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {item.period}
                      </span>
                      <span className="text-sm font-bold font-mono text-emerald-400 mt-0.5">
                        {item.scoreType}: {item.score}
                      </span>
                    </div>
                  </div>

                  <div className="text-xs text-zinc-400 flex items-center justify-between">
                    <span>Location: {item.location}</span>
                  </div>

                  {item.highlights && item.highlights.length > 0 && (
                    <ul className="mt-3 space-y-1.5 pt-3 border-t border-zinc-800/60">
                      {item.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="text-xs text-zinc-300 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Verified Certifications */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-400" />
              <span>Verified Certifications</span>
            </h3>

            <div className="space-y-3.5">
              {PORTFOLIO_DATA.certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="bg-[#11131B] border border-zinc-800 rounded-xl p-5 hover:border-zinc-700 transition-colors shadow-lg flex items-start gap-3.5"
                >
                  <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 shrink-0 mt-0.5">
                    <BookOpen className="w-4 h-4 text-cyan-400" />
                  </div>

                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-white leading-snug">
                      {cert.title}
                    </h4>
                    <div className="text-xs text-zinc-400 mt-1 flex items-center justify-between">
                      <span className="text-blue-400 font-medium">{cert.issuer}</span>
                      <span className="font-mono text-[11px] text-zinc-500">{cert.category}</span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Research Stint Highlight Box */}
              <div className="p-5 rounded-xl bg-gradient-to-br from-blue-950/30 to-indigo-950/20 border border-blue-900/40 text-xs text-zinc-300 space-y-2 mt-4">
                <div className="font-semibold text-blue-300 flex items-center gap-1.5 text-sm">
                  <Award className="w-4 h-4 text-blue-400" />
                  Research Endorsement
                </div>
                <p className="leading-relaxed text-zinc-400">
                  Completed research in multimodal physiological signal emotion detection at the <strong className="text-zinc-200">National Institute of Technology, Tiruchirappalli</strong>, evaluating models on over 1,000,000 continuous time-series samples.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
