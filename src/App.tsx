/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { InteractiveLab } from './components/InteractiveLab';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { Project } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);
  const [labTab, setLabTab] = useState<string>('idiom');

  const handleLaunchSimulator = (projectId: string) => {
    if (projectId === 'emotion-prediction') {
      setLabTab('biometrics');
    } else if (projectId === 'idiom-translation') {
      setLabTab('idiom');
    } else if (projectId === 'market-basket') {
      setLabTab('basket');
    }

    const labSection = document.getElementById('lab');
    if (labSection) {
      labSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090A0F] text-zinc-100 flex flex-col selection:bg-blue-600/30 selection:text-blue-200">
      {/* Navigation */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenResume={() => setResumeModalOpen(true)} />
        <Projects 
          onSelectProject={(project) => setSelectedProject(project)}
          onLaunchSimulator={handleLaunchSimulator}
        />
        <InteractiveLab initialTab={labTab} key={labTab} />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onLaunchSimulator={handleLaunchSimulator}
      />

      {/* Digital & Printable Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
