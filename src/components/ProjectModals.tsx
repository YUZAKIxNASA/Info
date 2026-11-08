import React, { useState } from 'react';
import { X, ExternalLink, Github, Star, CheckCircle, Terminal } from 'lucide-react';
import { Project, PROJECTS_DATA } from '../data/projectsData';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'simulator'>('overview');
  const [cliInput, setCliInput] = useState('');
  const [cliOutput, setCliOutput] = useState<string[]>([
    'System ready.',
    'Type "run", "help", "status", or "info" to simulate environment.'
  ]);

  if (!project) return null;

  const handleRunCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cliInput.trim()) return;
    const cmd = cliInput.trim().toLowerCase();
    const newOutput = [...cliOutput, `> ${cliInput}`];

    if (cmd === 'help') {
      newOutput.push('Available commands: run, status, stack, stats, clear');
    } else if (cmd === 'run') {
      newOutput.push(`Initializing ${project.name} daemon...`, 'Mounted virtual memory at 0x7FFE.', 'Status: Running smoothly on port 3000 (Simulated).');
    } else if (cmd === 'status') {
      newOutput.push(`Project: ${project.name}`, `Status: ${project.status}`, `GitHub Stars: ${project.stars}`);
    } else if (cmd === 'stack') {
      newOutput.push(`Technologies: ${project.technologies.join(', ')}`);
    } else if (cmd === 'clear') {
      setCliOutput(['Terminal cleared.']);
      setCliInput('');
      return;
    } else {
      newOutput.push(`Command not recognized: "${cliInput}". Type "help" for options.`);
    }

    setCliOutput(newOutput);
    setCliInput('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#020711] border border-[rgba(0,220,200,0.35)] rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden">
        {/* Top Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[rgba(0,220,200,0.25)] bg-[#081423]/90">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-lg"
              style={{
                backgroundColor: project.badgeBg,
                color: project.accentColor,
                border: `1px solid ${project.accentColor}40`,
                boxShadow: `0 0 15px ${project.glowColor}`
              }}
            >
              &gt;_
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-mono text-lg font-bold text-[#FFFFFF]">
                  {project.name}
                </h2>
                <span className="px-2 py-0.5 rounded-full bg-[#00E89B]/15 border border-[#00E89B]/40 text-[#00E89B] font-mono text-xs">
                  {project.status}
                </span>
              </div>
              <p className="text-xs text-[#A7B4C5] font-mono">{project.tagline}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#081423] border border-[rgba(0,220,200,0.3)] text-[#A7B4C5] hover:text-[#FFFFFF] transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Tab switchers */}
        <div className="flex items-center gap-2 px-6 pt-3 border-b border-[rgba(0,220,200,0.2)] bg-[#081423]/40 text-xs font-mono">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-2.5 px-3 border-b-2 font-semibold transition-colors cursor-pointer ${
              activeTab === 'overview'
                ? 'border-[#00E89B] text-[#00E89B]'
                : 'border-transparent text-[#A7B4C5] hover:text-[#FFFFFF]'
            }`}
          >
            Overview &amp; Architecture
          </button>
          <button
            onClick={() => setActiveTab('simulator')}
            className={`pb-2.5 px-3 border-b-2 font-semibold transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'simulator'
                ? 'border-[#00AFFF] text-[#00AFFF]'
                : 'border-transparent text-[#A7B4C5] hover:text-[#FFFFFF]'
            }`}
          >
            <Terminal size={13} />
            Interactive Terminal Simulation
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 flex flex-col gap-5">
          {activeTab === 'overview' ? (
            <>
              {/* Description */}
              <div className="flex flex-col gap-2">
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#00E89B] font-semibold">
                  About Project
                </h4>
                <p className="text-sm text-[#FFFFFF] leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              {/* Highlights */}
              <div className="flex flex-col gap-2.5">
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#00AFFF] font-semibold">
                  Key Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-[#081423] border border-[rgba(0,220,200,0.25)] flex items-center gap-2.5 text-xs text-[#FFFFFF]"
                    >
                      <CheckCircle size={15} className="text-[#00E89B] shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-col gap-2">
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#A7B4C5] font-semibold">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg bg-[#081423] border border-[rgba(0,220,200,0.3)] font-mono text-xs text-[#FFFFFF]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col gap-3 font-mono text-xs">
              <div className="p-4 rounded-xl bg-black border border-[rgba(0,220,200,0.3)] h-64 overflow-y-auto flex flex-col gap-1 text-[#00E89B]">
                {cliOutput.map((line, idx) => (
                  <div key={idx} className="leading-relaxed">
                    {line}
                  </div>
                ))}
              </div>
              <form onSubmit={handleRunCommand} className="flex gap-2">
                <div className="relative flex-1">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#00E89B] font-bold">
                    &gt;
                  </span>
                  <input
                    type="text"
                    value={cliInput}
                    onChange={(e) => setCliInput(e.target.value)}
                    placeholder="Type 'run', 'status', 'stack', or 'help'..."
                    className="w-full pl-7 pr-3 py-2 rounded-xl bg-[#081423] border border-[rgba(0,220,200,0.3)] text-xs font-mono text-[#FFFFFF] focus:outline-none focus:border-[#00E89B]"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-[#00E89B] text-[#020711] font-bold font-mono text-xs hover:bg-[#00FFB2]"
                >
                  Exec
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Action Footer */}
        <div className="px-5 py-4 border-t border-[rgba(0,220,200,0.25)] bg-[#081423]/90 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-mono text-[#A7B4C5]">
            <Star size={14} className="text-[#d29922] fill-[#d29922]" />
            <span>{project.stars} GitHub stars</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#020711] border border-[rgba(0,220,200,0.3)] hover:border-[#00AFFF] text-[#FFFFFF] font-mono text-xs font-semibold transition-colors"
            >
              <Github size={15} />
              <span>Source Code</span>
            </a>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#00E89B] hover:bg-[#00FFB2] text-[#020711] font-mono text-xs font-bold transition-all shadow-[0_0_15px_rgba(0,232,155,0.4)]"
            >
              <span>Live Demo</span>
              <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

interface AllProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
}

export const AllProjectsModal: React.FC<AllProjectsModalProps> = ({
  isOpen,
  onClose,
  onSelectProject,
}) => {
  const [filterType, setFilterType] = useState('All');
  if (!isOpen) return null;

  const filtered =
    filterType === 'All'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.type.toLowerCase().includes(filterType.toLowerCase()));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl max-h-[92vh] bg-[#020711] border border-[rgba(0,220,200,0.35)] rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[rgba(0,220,200,0.25)] bg-[#081423]/90">
          <div>
            <h2 className="font-mono text-lg font-bold text-[#FFFFFF]">
              All Projects &amp; Software
            </h2>
            <p className="text-xs text-[#A7B4C5] font-mono">
              Complete engineering portfolio by YUZAKI NASA
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#081423] border border-[rgba(0,220,200,0.3)] text-[#A7B4C5] hover:text-[#FFFFFF]"
          >
            <X size={18} />
          </button>
        </div>

        {/* Filter bar */}
        <div className="px-6 py-3 border-b border-[rgba(0,220,200,0.2)] bg-[#081423]/40 flex items-center gap-2 overflow-x-auto text-xs font-mono">
          {['All', 'Web Application', 'Developer Tool', 'Creative Design Utility', 'CLI Tool'].map((t) => (
            <button
              key={t}
              onClick={() => setFilterType(t)}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                filterType === t
                  ? 'bg-[#00E89B] text-[#020711] font-bold'
                  : 'bg-[#020711] text-[#A7B4C5] hover:text-[#FFFFFF] border border-[rgba(0,220,200,0.25)]'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((project) => (
            <div
              key={project.id}
              onClick={() => {
                onClose();
                onSelectProject(project);
              }}
              className="p-4 rounded-xl bg-[#081423]/80 border border-[rgba(0,220,200,0.25)] hover:border-[#00AFFF] hover:shadow-[0_0_20px_rgba(0,175,255,0.2)] flex flex-col justify-between transition-all duration-200 cursor-pointer group"
            >
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#00AFFF] uppercase tracking-wider font-semibold">
                    {project.type}
                  </span>
                  <span className="text-[11px] font-mono text-[#00E89B] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00E89B]" />
                    {project.status}
                  </span>
                </div>
                <h3 className="font-mono text-base font-bold text-[#FFFFFF] group-hover:text-[#00AFFF] transition-colors">
                  {project.name}
                </h3>
                <p className="text-xs text-[#A7B4C5] line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#020711] text-[#A7B4C5]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 mt-3 border-t border-[rgba(0,220,200,0.2)] text-xs font-mono">
                <span className="text-[#d29922] flex items-center gap-1">
                  <Star size={13} className="fill-[#d29922]" /> {project.stars}
                </span>
                <span className="text-[#00AFFF] group-hover:underline">View Details &rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
