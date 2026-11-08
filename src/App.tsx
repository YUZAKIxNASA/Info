import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MySkills } from './components/MySkills';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SkillsExplorerModal } from './components/SkillsExplorerModal';
import { ProjectDetailModal, AllProjectsModal } from './components/ProjectModals';
import { SearchCommandModal } from './components/SearchCommandModal';
import { Project } from './data/projectsData';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDark, setIsDark] = useState(true);

  // Modals state
  const [isSkillsExplorerOpen, setIsSkillsExplorerOpen] = useState(false);
  const [skillsExplorerQuery, setSkillsExplorerQuery] = useState('');
  const [isSearchCommandOpen, setIsSearchCommandOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isAllProjectsOpen, setIsAllProjectsOpen] = useState(false);

  // Initialize theme class
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [isDark]);

  // Global Ctrl+K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchCommandOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const handleOpenSkillsExplorer = (query = '') => {
    setSkillsExplorerQuery(query);
    setIsSkillsExplorerOpen(true);
  };

  const handleSelectSkill = (skillName: string) => {
    handleOpenSkillsExplorer(skillName);
  };

  const handleNavigateSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen w-full overflow-x-hidden ${isDark ? 'bg-[#020711] text-[#FFFFFF]' : 'bg-[#F6F8FA] text-[#1F2328]'} transition-colors duration-200 antialiased flex flex-col`}>
      {/* Top Floating Header: Brand Logo, Centered Search Bar, Theme Toggle & Available Indicator */}
      <Header
        onOpenSearch={() => setIsSearchCommandOpen(true)}
        isDark={isDark}
        toggleTheme={toggleTheme}
        onNavigateHome={() => handleNavigateSection('home')}
      />

      {/* Main Content Area: Compact proportions, balanced margins, and zero right-side blank space */}
      <main className="flex-1 px-2 sm:px-4 md:px-6 py-2 sm:py-3.5 md:py-4 flex flex-col gap-3 sm:gap-4 md:gap-5 max-w-[1360px] w-full mx-auto">
        {/* 1. Hero Section */}
        <Hero
          onExploreProjects={() => setIsAllProjectsOpen(true)}
          onViewSkills={() => handleNavigateSection('skills')}
        />

        {/* 2. My Skills — 5-column grid, 50 skills per page, 900 inventory, live search, numbered pagination */}
        <MySkills />

        {/* 3. About Section */}
        <AboutSection />

        {/* 4. Contact Section — Direct Gmail compose, mailto, copy button */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Dialogs */}
      {/* Complete 900+ Skills Explorer Modal (Triggerable via Search Command Palette) */}
      <SkillsExplorerModal
        isOpen={isSkillsExplorerOpen}
        onClose={() => {
          setIsSkillsExplorerOpen(false);
          setSkillsExplorerQuery('');
        }}
        initialQuery={skillsExplorerQuery}
      />

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* All Projects Modal */}
      <AllProjectsModal
        isOpen={isAllProjectsOpen}
        onClose={() => setIsAllProjectsOpen(false)}
        onSelectProject={(project) => setSelectedProject(project)}
      />

      {/* Search & Command Palette (Ctrl+K) */}
      <SearchCommandModal
        isOpen={isSearchCommandOpen}
        onClose={() => setIsSearchCommandOpen(false)}
        onNavigateSection={handleNavigateSection}
        onSelectProject={(p) => setSelectedProject(p)}
        onSelectSkill={(name) => handleSelectSkill(name)}
        toggleTheme={toggleTheme}
        isDark={isDark}
      />
    </div>
  );
}
