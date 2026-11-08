import React, { useState, useEffect } from 'react';
import { Rocket, Code2, ArrowRight } from 'lucide-react';

interface HeroProps {
  onExploreProjects: () => void;
  onViewSkills: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects, onViewSkills }) => {
  // Terminal typing animation for roles
  const titles = ['Developer', 'Creator', 'Learner', 'System Architect'];
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    const updateText = () => {
      if (!isDeleting) {
        setDisplayText(current.substring(0, displayText.length + 1));
        if (displayText.length === current.length) {
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        setDisplayText(current.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    };

    const speed = isDeleting ? 45 : 85;
    const timer = setTimeout(updateText, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section id="home" className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden py-4 sm:py-6 md:py-7 px-3 sm:px-5 md:px-7 border border-[rgba(0,220,200,0.3)] shadow-2xl min-h-[260px] sm:min-h-[320px] md:min-h-[360px] flex items-center">
      {/* Space Background Image Layer with Earth Horizon */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/assets/space_background.jpg"
          alt="Cosmic Space Horizon with Planet Earth"
          className="w-full h-full object-cover object-right"
        />
        {/* Dark gradient scrim on left for high contrast text readability while retaining planet horizon on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020711] via-[#020711]/85 to-transparent/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,175,255,0.15)_0%,transparent_60%)]" />
      </div>

      <div className="relative z-10 w-full grid grid-cols-12 gap-2.5 sm:gap-5 md:gap-6 items-center">
        {/* Left Column: Hero Text & Actions */}
        <div className="col-span-7 sm:col-span-8 flex flex-col gap-2 sm:gap-3">
          {/* Tag: < Welcome to my Portfolio /> */}
          <div className="inline-flex items-center gap-1.5 self-start px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#020711]/85 border border-[rgba(0,220,200,0.4)] text-[#00E89B] font-mono text-[8.5px] sm:text-[11px] font-semibold shadow-[0_0_12px_rgba(0,232,155,0.2)] backdrop-blur-md">
            <span>&lt;</span>
            <span className="text-[#FFFFFF]">Welcome to my Portfolio</span>
            <span>/&gt;</span>
          </div>

          {/* Main Heading: YUZAKI NASA with cursor immediately next to NASA */}
          <div className="flex flex-col gap-0.5">
            <h1 className="font-mono text-lg xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#FFFFFF] leading-tight select-none flex items-baseline flex-wrap">
              <span>YUZAKI&nbsp;</span>
              <span className="text-[#00E89B] drop-shadow-[0_0_18px_rgba(0,232,155,0.45)] inline-flex items-baseline">
                NASA
                <span
                  className="inline-block w-[2.5px] sm:w-[3px] lg:w-[4px] h-[0.82em] bg-[#00E89B] animate-pulse ml-1 align-baseline translate-y-[1px] sm:translate-y-[2px] shadow-[0_0_10px_#00E89B]"
                  aria-hidden="true"
                />
              </span>
            </h1>

            {/* Subheading: Developer • Creator • Learner */}
            <div className="flex items-center gap-1 sm:gap-1.5 font-mono text-[10px] sm:text-sm md:text-base font-medium pt-0.5">
              <span className="text-[#00AFFF] font-semibold">{displayText || 'Developer'}</span>
              <span className="text-[#00E89B]">•</span>
              <span className="text-[#A7B4C5]">Creator</span>
              <span className="text-[#00E89B]">•</span>
              <span className="text-[#A7B4C5]">Learner</span>
            </div>
          </div>

          {/* Introduction */}
          <p className="text-[10px] sm:text-xs md:text-sm text-[#A7B4C5] max-w-lg leading-relaxed">
            I'm a passionate developer, building <span className="text-[#00E89B] font-semibold">modern web</span> experiences and exploring new technologies.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-2 sm:gap-3 pt-1 flex-wrap">
            <button
              onClick={onExploreProjects}
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-[#00E89B] hover:bg-[#00FFB2] text-[#020711] font-mono text-[9.5px] sm:text-xs font-bold shadow-[0_0_15px_rgba(0,232,155,0.4)] hover:shadow-[0_0_20px_rgba(0,255,178,0.55)] transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Rocket size={13} className="sm:w-3.5 sm:h-3.5" />
              <span>Explore My Projects</span>
              <ArrowRight size={12} className="sm:w-3.5 sm:h-3.5" />
            </button>

            <button
              onClick={onViewSkills}
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-[#081423]/80 border border-[rgba(0,220,200,0.35)] hover:border-[#00E89B]/60 hover:bg-[#07111F] text-[#FFFFFF] font-mono text-[9.5px] sm:text-xs font-semibold backdrop-blur-md transition-all duration-200 cursor-pointer shadow-sm"
            >
              <Code2 size={13} className="text-[#00E89B] sm:w-3.5 sm:h-3.5" />
              <span>View Skills</span>
            </button>
          </div>
        </div>

        {/* Right Column: Resized and Repositioned Compact Terminal Quote Card */}
        <div className="col-span-5 sm:col-span-4 flex justify-end items-center sm:items-start pt-0 sm:pt-0.5">
          <div className="relative w-full max-w-[260px] p-2 sm:p-3 md:p-3.5 rounded-xl glass-panel-glow shadow-[0_0_20px_rgba(0,175,255,0.18)] animate-float border border-[rgba(0,220,200,0.35)]">
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between pb-1.5 sm:pb-2 border-b border-[rgba(0,220,200,0.2)] mb-1.5 sm:mb-2">
              <div className="flex items-center gap-1 sm:gap-1.5">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#f85149]" />
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#d29922]" />
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#00E89B]" />
              </div>
              <span className="text-[7.5px] sm:text-[9.5px] font-mono text-[#A7B4C5]">quote.sh</span>
            </div>

            {/* Glowing Quote Text */}
            <div className="font-mono text-[9px] sm:text-[11px] text-[#FFFFFF] leading-relaxed">
              <p className="text-[#00AFFF] font-medium">&quot;Code. Learn. Build.</p>
              <p className="text-[#FFFFFF] pl-1.5 sm:pl-2 font-medium">A Better Tomorrow.&quot;</p>
              <div className="mt-2 sm:mt-3 text-right text-[8px] sm:text-[10px] text-[#A7B4C5] font-semibold">
                — <span className="text-[#00E89B]">YUZAKI NASA</span>
              </div>
            </div>

            {/* Decorative Corner Brackets */}
            <div className="absolute -top-1 -right-1 w-2 sm:w-2.5 h-2 sm:h-2.5 border-t-2 border-r-2 border-[#00AFFF] rounded-tr" />
            <div className="absolute -bottom-1 -left-1 w-2 sm:w-2.5 h-2 sm:h-2.5 border-b-2 border-l-2 border-[#00E89B] rounded-bl" />
          </div>
        </div>
      </div>
    </section>
  );
};
