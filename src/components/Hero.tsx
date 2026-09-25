import React, { useState, useRef, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail, 
  Camera, 
  Sparkles, 
  CheckCircle2, 
  FileText,
  FlaskConical,
  ExternalLink,
  RotateCcw
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const defaultPhoto = '/src/assets/images/portrait_srihariharan_1790340442486.jpg';
  const [photoSrc, setPhotoSrc] = useState<string>(defaultPhoto);
  const [isCustomPhoto, setIsCustomPhoto] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const savedPhoto = localStorage.getItem('srihariharan_custom_photo');
    if (savedPhoto) {
      setPhotoSrc(savedPhoto);
      setIsCustomPhoto(true);
    }
  }, []);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setPhotoSrc(result);
        setIsCustomPhoto(true);
        try {
          localStorage.setItem('srihariharan_custom_photo', result);
        } catch {
          // If storage limit exceeded, keeps in session state
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPhoto = () => {
    setPhotoSrc(defaultPhoto);
    setIsCustomPhoto(false);
    localStorage.removeItem('srihariharan_custom_photo');
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 border-b border-zinc-800/80 overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-blue-600/10 via-indigo-600/5 to-transparent blur-3xl opacity-70"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/3 -right-40 w-96 h-96 bg-cyan-500/5 blur-3xl rounded-full"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Typography & Quantitative Rigor */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Editorial kicker */}
            <div className="flex items-center gap-2.5 text-xs font-semibold tracking-wider text-blue-400 uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>{PORTFOLIO_DATA.personal.title}</span>
              <span className="text-zinc-600">·</span>
              <span className="text-zinc-400">NIT Trichy Research Alum</span>
            </div>

            {/* Display Headline with text-wrap: balance */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-white leading-[1.12] mb-6 [text-wrap:balance]">
              Building Production-Grade{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
                Machine Learning & NLP
              </span>{' '}
              Pipelines.
            </h1>

            {/* Career Objective / Pitch */}
            <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed mb-8 max-w-2xl">
              {PORTFOLIO_DATA.personal.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-lg shadow-blue-600/20 active:scale-95 transition-all focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#lab"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 rounded-lg active:scale-95 transition-all focus-visible:ring-2 focus-visible:ring-zinc-400"
              >
                <FlaskConical className="w-4 h-4 text-cyan-400" />
                <span>Interactive Live Lab</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-zinc-300 hover:text-white bg-zinc-900/60 hover:bg-zinc-800/80 border border-zinc-800 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-zinc-400"
              >
                <FileText className="w-4 h-4" />
                <span>Resume</span>
              </button>
            </div>

            {/* Quantitative Proof Grid */}
            <div className="pt-6 border-t border-zinc-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {PORTFOLIO_DATA.personal.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-zinc-300 mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-zinc-500 leading-snug mt-0.5">
                    {stat.context}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: High-Fidelity Profile Frame with Photo Switcher */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Decorative framing element */}
              <div 
                aria-hidden="true" 
                className="absolute -inset-1.5 bg-gradient-to-tr from-blue-600/30 via-indigo-500/20 to-cyan-500/20 rounded-2xl blur-lg opacity-50"
              />

              {/* Main Card Surface */}
              <div className="relative bg-[#11131B] border border-zinc-800 rounded-2xl p-6 shadow-2xl">
                
                {/* Photo container */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-zinc-900 mb-5 group border border-zinc-800">
                  <img
                    src={photoSrc}
                    alt="Srihariharan T — Data Science / AI-ML Engineer"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback if image fails
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />

                  {/* Gradient shadow scrim at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                  {/* Bottom overlay badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                    <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="font-medium text-[11px]">Available for Roles</span>
                    </div>

                    <div className="text-[11px] text-zinc-400 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10 font-mono">
                      Trichy, India
                    </div>
                  </div>

                  {/* Photo Customizer Trigger */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="inline-flex items-center gap-1 text-[11px] font-medium bg-black/70 hover:bg-black/90 text-zinc-200 px-2.5 py-1 rounded-md border border-zinc-700/80 backdrop-blur-md transition-colors"
                      title="Upload your own profile picture"
                    >
                      <Camera className="w-3 h-3 text-blue-400" />
                      <span>{isCustomPhoto ? 'Change Photo' : 'Upload Photo'}</span>
                    </button>

                    {isCustomPhoto && (
                      <button
                        onClick={handleResetPhoto}
                        className="p-1 bg-black/70 hover:bg-black/90 text-zinc-300 rounded-md border border-zinc-700/80 backdrop-blur-md transition-colors"
                        title="Reset to default portrait"
                      >
                        <RotateCcw className="w-3 h-3" />
                      </button>
                    )}
                  </div>

                  {/* Hidden file input */}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />
                </div>

                {/* Profile Details */}
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-white tracking-tight font-display">
                        {PORTFOLIO_DATA.personal.displayName}
                      </h2>
                      <p className="text-xs text-blue-400 font-medium mt-0.5">
                        {PORTFOLIO_DATA.personal.title}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 text-zinc-400">
                      <a
                        href={PORTFOLIO_DATA.personal.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 hover:text-white hover:bg-zinc-800 rounded-md transition-colors"
                        title="GitHub Profile"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a
                        href={PORTFOLIO_DATA.personal.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 hover:text-blue-400 hover:bg-zinc-800 rounded-md transition-colors"
                        title="LinkedIn Profile"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a
                        href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                        className="p-1.5 hover:text-emerald-400 hover:bg-zinc-800 rounded-md transition-colors"
                        title="Send Email"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Education & Focus Info - Unboxed clean text */}
                  <div className="pt-3 border-t border-zinc-800 text-xs text-zinc-400 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-500">Education</span>
                      <span className="text-zinc-300 font-medium">B.Tech IT · Saranathan College</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-500">Academic Merit</span>
                      <span className="text-emerald-400 font-mono font-medium">CGPA 8.44 / 10</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-500">Core Specialty</span>
                      <span className="text-zinc-300">Biometrics, NLP, ML Pipelines</span>
                    </div>
                  </div>

                  {/* Quick contact direct action */}
                  <div className="pt-2">
                    <a
                      href={`mailto:${PORTFOLIO_DATA.personal.email}?subject=Opportunity%20Discussion%20-%20Srihariharan%20T`}
                      className="w-full flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold text-zinc-200 bg-zinc-800/80 hover:bg-zinc-700/80 rounded-lg transition-colors border border-zinc-700/50"
                    >
                      <Mail className="w-3.5 h-3.5 text-blue-400" />
                      <span>srihariharan213@gmail.com</span>
                    </a>
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
