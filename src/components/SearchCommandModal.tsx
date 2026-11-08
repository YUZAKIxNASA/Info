import React, { useState, useEffect, useMemo } from 'react';
import { Search, X, FolderGit2, Code2, User, Moon, Sun, ArrowRight } from 'lucide-react';
import { SKILLS_DATA } from '../data/skillsData';
import { PROJECTS_DATA, Project } from '../data/projectsData';

interface SearchCommandModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateSection: (sectionId: string) => void;
  onSelectProject: (project: Project) => void;
  onSelectSkill: (skillName: string) => void;
  toggleTheme: () => void;
  isDark: boolean;
}

export const SearchCommandModal: React.FC<SearchCommandModalProps> = ({
  isOpen,
  onClose,
  onNavigateSection,
  onSelectProject,
  onSelectSkill,
  toggleTheme,
  isDark,
}) => {
  const [query, setQuery] = useState('');

  // Handle Ctrl+K / Cmd+K and Esc
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const matchedProjects = useMemo(() => {
    if (!query.trim()) return PROJECTS_DATA.slice(0, 3);
    const q = query.toLowerCase();
    return PROJECTS_DATA.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.technologies.some((t) => t.toLowerCase().includes(q))
    );
  }, [query]);

  const matchedSkills = useMemo(() => {
    if (!query.trim()) return SKILLS_DATA.slice(0, 6);
    const q = query.toLowerCase();
    return SKILLS_DATA.filter(
      (s) =>
        s.cleanName.toLowerCase().includes(q) ||
        s.name.toLowerCase().includes(q) ||
        s.id.toString() === q
    ).slice(0, 8);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-3 bg-black/80 backdrop-blur-md animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-[#020711] border border-[rgba(0,220,200,0.35)] rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.85)] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[rgba(0,220,200,0.25)] bg-[#081423]/90">
          <Search size={18} className="text-[#00E89B] shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, 900+ skills, sections, or commands..."
            autoFocus
            className="w-full bg-transparent border-none text-sm font-mono text-[#FFFFFF] placeholder-[#A7B4C5]/60 focus:outline-none"
          />
          <span className="hidden sm:inline text-[10px] font-mono px-2 py-0.5 rounded bg-[#020711] border border-[rgba(0,220,200,0.3)] text-[#A7B4C5]">
            ESC
          </span>
          <button
            onClick={onClose}
            className="p-1 rounded text-[#A7B4C5] hover:text-[#FFFFFF]"
          >
            <X size={16} />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 flex flex-col gap-4 font-mono text-xs">
          {/* Quick Actions */}
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] uppercase text-[#A7B4C5] font-semibold tracking-wider px-2">
              Navigation &amp; Actions
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
              <button
                onClick={() => {
                  onNavigateSection('projects');
                  onClose();
                }}
                className="flex items-center gap-2 p-2 rounded-xl bg-[#081423] border border-[rgba(0,220,200,0.25)] text-[#FFFFFF] hover:border-[#00AFFF] hover:text-[#00AFFF] transition-colors cursor-pointer"
              >
                <FolderGit2 size={14} />
                <span>Projects</span>
              </button>
              <button
                onClick={() => {
                  onNavigateSection('skills');
                  onClose();
                }}
                className="flex items-center gap-2 p-2 rounded-xl bg-[#081423] border border-[rgba(0,220,200,0.25)] text-[#FFFFFF] hover:border-[#00E89B] hover:text-[#00E89B] transition-colors cursor-pointer"
              >
                <Code2 size={14} />
                <span>Skills (900+)</span>
              </button>
              <button
                onClick={() => {
                  onNavigateSection('about');
                  onClose();
                }}
                className="flex items-center gap-2 p-2 rounded-xl bg-[#081423] border border-[rgba(0,220,200,0.25)] text-[#FFFFFF] hover:border-[#A78BFA] hover:text-[#A78BFA] transition-colors cursor-pointer"
              >
                <User size={14} />
                <span>About</span>
              </button>
              <button
                onClick={() => {
                  toggleTheme();
                  onClose();
                }}
                className="flex items-center gap-2 p-2 rounded-xl bg-[#081423] border border-[rgba(0,220,200,0.25)] text-[#FFFFFF] hover:border-[#d29922] hover:text-[#d29922] transition-colors cursor-pointer"
              >
                {isDark ? <Sun size={14} /> : <Moon size={14} />}
                <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
            </div>
          </div>

          {/* Matched Projects */}
          {matchedProjects.length > 0 && (
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] uppercase text-[#A7B4C5] font-semibold tracking-wider px-2">
                Projects ({matchedProjects.length})
              </span>
              <div className="flex flex-col gap-1">
                {matchedProjects.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      onClose();
                      onSelectProject(p);
                    }}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-[#081423] border border-[rgba(0,220,200,0.25)] hover:border-[#00AFFF] text-left transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <FolderGit2 size={15} className="text-[#00AFFF]" />
                      <span className="font-bold text-[#FFFFFF]">{p.name}</span>
                      <span className="text-[#A7B4C5] truncate hidden sm:inline">
                        — {p.tagline}
                      </span>
                    </div>
                    <ArrowRight size={14} className="text-[#A7B4C5]" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Matched Skills */}
          {matchedSkills.length > 0 && (
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] uppercase text-[#A7B4C5] font-semibold tracking-wider px-2">
                Skills &amp; Languages ({matchedSkills.length})
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {matchedSkills.map((s) => (
                  <button
                    key={`${s.id}-${s.name}`}
                    onClick={() => {
                      onClose();
                      onSelectSkill(s.cleanName);
                    }}
                    className="flex items-center justify-between p-2 rounded-xl bg-[#081423] border border-[rgba(0,220,200,0.25)] hover:border-[#00E89B] text-left transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-2 truncate">
                      <span className="text-[#00E89B] font-bold">#{s.id}</span>
                      <span className="text-[#FFFFFF] truncate font-medium">
                        {s.cleanName}
                      </span>
                    </div>
                    <span className="text-[10px] text-[#A7B4C5] truncate ml-2">
                      {s.category}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-4 py-2.5 bg-[#081423]/90 border-t border-[rgba(0,220,200,0.2)] flex items-center justify-between font-mono text-[11px] text-[#A7B4C5]">
          <span>Type anything to search</span>
          <div className="flex items-center gap-2">
            <span>YUZAKI NASA Portfolio</span>
            <span>•</span>
            <span className="text-[#00E89B]">Terminal v2.6</span>
          </div>
        </div>
      </div>
    </div>
  );
};
