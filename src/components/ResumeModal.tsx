import React, { useEffect, useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  Download, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin 
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
${PORTFOLIO_DATA.personal.name}
${PORTFOLIO_DATA.personal.title}
Phone: ${PORTFOLIO_DATA.personal.phone} | Email: ${PORTFOLIO_DATA.personal.email}
GitHub: ${PORTFOLIO_DATA.personal.github} | LinkedIn: ${PORTFOLIO_DATA.personal.linkedin}

CAREER OBJECTIVE
${PORTFOLIO_DATA.personal.bio}

EDUCATION
B.Tech, Information Technology — Saranathan College of Engineering, Trichy (2021 – 2025) | CGPA: 8.44
12th – Chelammal Vidhyaashram Senior Secondary (2020 – 2021) | Percentage: 85%
10th – Chelammal Vidhyaashram Senior Secondary (2018 – 2019) | Percentage: 80.8%

TECHNICAL SKILLS
ML / AI Frameworks: Scikit-learn, TensorFlow, Keras, PyTorch, Hugging Face, NLTK
Data & Visualization: Pandas, NumPy, Matplotlib, Seaborn, BeautifulSoup, Selenium
Languages: Python, Java, JavaScript, HTML5, CSS3, ReactJS, NodeJS
Tools & Platforms: Spring Boot, Angular, REST APIs, Tableau, MySQL, MongoDB, Git, Postman, Firebase

WORK EXPERIENCE
${PORTFOLIO_DATA.experience.map(e => `
${e.role} | ${e.organization} (${e.period})
${e.description.map(d => `• ${d}`).join('\n')}
`).join('\n')}

PROJECTS
${PORTFOLIO_DATA.projects.map(p => `
${p.title}
Tech: ${p.technologies.join(', ')}
Repo: ${p.githubUrl}
${p.highlights.map(h => `• ${h}`).join('\n')}
`).join('\n')}

CERTIFICATIONS
${PORTFOLIO_DATA.certifications.map(c => `• ${c.title} — ${c.issuer}`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#11131B] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-[#0D0F18]">
          <div className="flex items-center gap-2 text-sm font-bold text-white font-display">
            <span>Resume Document — {PORTFOLIO_DATA.personal.displayName}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-zinc-300 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Text' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors ml-2"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-7 text-zinc-300 font-sans leading-relaxed text-xs sm:text-sm bg-[#0E1017]">
          
          {/* Header */}
          <div className="border-b border-zinc-800 pb-6 text-center space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
              {PORTFOLIO_DATA.personal.name}
            </h1>
            <div className="text-blue-400 font-semibold text-sm">
              {PORTFOLIO_DATA.personal.title}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-zinc-400 pt-1 font-mono">
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-zinc-500" />
                {PORTFOLIO_DATA.personal.phone}
              </span>
              <span>|</span>
              <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="flex items-center gap-1 text-zinc-300 hover:text-white">
                <Mail className="w-3 h-3 text-zinc-500" />
                {PORTFOLIO_DATA.personal.email}
              </a>
              <span>|</span>
              <a href={PORTFOLIO_DATA.personal.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-zinc-300 hover:text-white">
                <Linkedin className="w-3 h-3 text-zinc-500" />
                Linkedin
              </a>
              <span>|</span>
              <a href={PORTFOLIO_DATA.personal.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-zinc-300 hover:text-white">
                <Github className="w-3 h-3 text-zinc-500" />
                Github
              </a>
            </div>
          </div>

          {/* Career Objective */}
          <div>
            <h2 className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">
              CAREER OBJECTIVE
            </h2>
            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
              {PORTFOLIO_DATA.personal.bio}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">
              EDUCATION
            </h2>
            <div className="space-y-2 text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <strong className="text-white">B.Tech, Information Technology</strong> — Saranathan College of Engineering, Trichy
                </div>
                <div className="font-mono text-zinc-400">2021 – 2025 | CGPA: 8.44</div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <strong className="text-white">12th</strong> – Chelammal Vidhyaashram Senior Secondary
                </div>
                <div className="font-mono text-zinc-400">2020 – 2021 | Percentage: 85%</div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <strong className="text-white">10th</strong> – Chelammal Vidhyaashram Senior Secondary
                </div>
                <div className="font-mono text-zinc-400">2018 – 2019 | Percentage: 80.8%</div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">
              TECHNICAL SKILLS
            </h2>
            <div className="space-y-1.5 text-xs">
              <div>
                <strong className="text-white font-mono">ML / AI Frameworks:</strong> Scikit-learn, TensorFlow, Keras, PyTorch, Hugging Face, NLTK
              </div>
              <div>
                <strong className="text-white font-mono">Data & Visualization:</strong> Pandas, NumPy, Matplotlib, Seaborn, BeautifulSoup, Selenium
              </div>
              <div>
                <strong className="text-white font-mono">Languages:</strong> Python, Java, JavaScript, HTML5, CSS3, ReactJS, NodeJS
              </div>
              <div>
                <strong className="text-white font-mono">Tools & Platforms:</strong> Spring Boot, Angular, REST APIs, Tableau, MySQL, MongoDB, Git, Postman, Firebase
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-3">
              WORK EXPERIENCE
            </h2>
            <div className="space-y-4">
              {PORTFOLIO_DATA.experience.map((exp) => (
                <div key={exp.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                    <div>
                      <strong className="text-white">{exp.role}</strong> | <span className="text-blue-300">{exp.organization}</span>
                    </div>
                    <div className="font-mono text-zinc-400 text-xs">{exp.period}</div>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-zinc-300 pl-1">
                    {exp.description.map((b, idx) => (
                      <li key={idx} className="leading-relaxed">{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-3">
              PROJECTS
            </h2>
            <div className="space-y-4">
              {PORTFOLIO_DATA.projects.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                    <strong className="text-white">{proj.title}</strong>
                    <span className="font-mono text-[11px] text-zinc-400">{proj.technologies.slice(0, 4).join(', ')}</span>
                  </div>
                  <div className="text-[11px] font-mono text-blue-400">
                    <a href={proj.githubUrl} target="_blank" rel="noreferrer" className="hover:underline">
                      {proj.githubUrl.replace('https://', '')}
                    </a>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-zinc-300 pl-1">
                    {proj.highlights.map((h, idx) => (
                      <li key={idx} className="leading-relaxed">{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">
              CERTIFICATIONS
            </h2>
            <ul className="list-disc list-inside space-y-1 text-xs text-zinc-300 pl-1">
              {PORTFOLIO_DATA.certifications.map((c, idx) => (
                <li key={idx}>
                  <strong className="text-white">{c.title}</strong> – {c.issuer}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};
