import React from 'react';
import { FolderGit2, Star, ExternalLink, ArrowRight, Code2, Palette } from 'lucide-react';
import { Project, PROJECTS_DATA } from '../data/projectsData';

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
  onViewAllProjects: () => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  onSelectProject,
  onViewAllProjects,
}) => {
  // Exactly 3 equal-width cards on desktop as specified in Section 7 of instructions
  const threeFeaturedProjects = PROJECTS_DATA.filter((p) =>
    ['play-code', 'init-habits', 'color-palette'].includes(p.id)
  );

  const renderProjectArtwork = (id: string) => {
    switch (id) {
      case 'play-code':
        return (
          <div className="w-full h-32 sm:h-36 rounded-xl bg-gradient-to-r from-[#031535] via-[#082457] to-[#120e3a] border border-[rgba(0,175,255,0.35)] flex items-center justify-center relative overflow-hidden group-hover:border-[#00AFFF] transition-all duration-300">
            {/* Swirling Neon Blue Wave effect */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,175,255,0.35)_0%,transparent_75%)]" />
            <div className="absolute -bottom-6 w-full h-16 bg-gradient-to-t from-[#00AFFF]/20 to-transparent blur-md" />
            <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
              <Code2 size={44} className="text-[#00AFFF] drop-shadow-[0_0_20px_rgba(0,175,255,0.7)]" />
            </div>
          </div>
        );
      case 'init-habits':
        return (
          <div className="w-full h-32 sm:h-36 rounded-xl bg-gradient-to-r from-[#021f14] via-[#053120] to-[#041c2b] border border-[rgba(0,232,155,0.35)] flex items-center justify-center relative overflow-hidden group-hover:border-[#00E89B] transition-all duration-300">
            {/* Swirling Neon Green Wave effect */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,232,155,0.35)_0%,transparent_75%)]" />
            <div className="absolute -bottom-6 w-full h-16 bg-gradient-to-t from-[#00E89B]/20 to-transparent blur-md" />
            <div className="relative z-10 w-13 h-11 rounded-xl border-2 border-[#00E89B] bg-[#020711]/60 flex items-center justify-center text-[#00E89B] font-mono font-bold text-lg shadow-[0_0_20px_rgba(0,232,155,0.5)] transform group-hover:scale-110 transition-transform duration-300">
              &gt;✓
            </div>
          </div>
        );
      case 'color-palette':
      default:
        return (
          <div className="w-full h-32 sm:h-36 rounded-xl bg-gradient-to-r from-[#0d092d] via-[#1b154a] to-[#081836] border border-[rgba(167,139,250,0.35)] flex items-center justify-center relative overflow-hidden group-hover:border-[#A78BFA] transition-all duration-300">
            {/* Swirling Blue and Purple artwork */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(167,139,250,0.35)_0%,transparent_75%)]" />
            <div className="absolute -bottom-6 w-full h-16 bg-gradient-to-t from-[#A78BFA]/20 to-transparent blur-md" />
            <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
              <Palette size={44} className="text-[#A78BFA] drop-shadow-[0_0_20px_rgba(167,139,250,0.7)]" />
            </div>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-4">
      <div className="max-w-7xl mx-auto flex flex-col gap-4">
        {/* Section Header: Matches Reference Screenshot */}
        <div className="flex items-center justify-between pb-2 border-b border-[rgba(0,220,200,0.2)]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#081423] border border-[rgba(0,220,200,0.3)] text-[#00E89B] shadow-[0_0_12px_rgba(0,232,155,0.2)]">
              <FolderGit2 size={18} />
            </div>
            <h2 className="font-mono text-base sm:text-lg font-bold text-[#FFFFFF]">
              Featured Projects
            </h2>
          </div>

          {/* View All Projects Button */}
          <button
            onClick={onViewAllProjects}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-[rgba(0,220,200,0.4)] text-[#00E89B] hover:bg-[#00E89B] hover:text-[#020711] font-mono text-xs font-semibold transition-all duration-200 cursor-pointer shadow-sm group"
          >
            <span>View All</span>
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Exactly 3 equal-width project cards on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {threeFeaturedProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="p-4 rounded-2xl glass-panel hover:border-[#00E89B]/60 hover:shadow-[0_0_25px_rgba(0,232,155,0.2)] flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
            >
              <div className="flex flex-col gap-3.5">
                {/* Visual Artwork Thumbnail */}
                {renderProjectArtwork(project.id)}

                {/* Project Details */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-mono text-sm sm:text-base font-bold text-[#FFFFFF] group-hover:text-[#00E89B] transition-colors">
                      {project.name}
                    </h3>
                    <ExternalLink size={15} className="text-[#A7B4C5] group-hover:text-[#00AFFF] transition-colors" />
                  </div>
                  <p className="text-xs text-[#A7B4C5] line-clamp-2 leading-relaxed">
                    {project.tagline}
                  </p>
                </div>
              </div>

              {/* Status and Stars Footer */}
              <div className="flex items-center justify-between pt-3 mt-4 border-t border-[rgba(0,220,200,0.2)] text-xs font-mono">
                <div className="flex items-center gap-1.5 text-[#00E89B] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#00E89B] animate-pulse shadow-[0_0_8px_#00E89B]" />
                  <span>{project.status}</span>
                </div>
                <div className="flex items-center gap-1 text-[#A7B4C5]">
                  <Star size={13} className="text-[#d29922] fill-[#d29922]" />
                  <span>{project.stars}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
