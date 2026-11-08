import React from 'react';
import { Search, Sun, Moon, Github } from 'lucide-react';

interface HeaderProps {
  onOpenSearch: () => void;
  isDark: boolean;
  toggleTheme: () => void;
  onNavigateHome?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenSearch,
  isDark,
  toggleTheme,
  onNavigateHome,
}) => {
  const handleBrandClick = () => {
    if (onNavigateHome) {
      onNavigateHome();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-1.5 z-30 w-full px-2.5 sm:px-5 lg:px-7 transition-colors duration-200">
      <div className="flex items-center justify-between gap-3 sm:gap-5 max-w-[1360px] mx-auto glass-panel rounded-xl sm:rounded-2xl px-3 sm:px-5 py-1.5 sm:py-2 shadow-lg border border-[rgba(0,220,200,0.35)] w-full">
        {/* Left: Brand Lockup (>_ YUZAKI NASA) — returns to top */}
        <button
          onClick={handleBrandClick}
          className="flex items-center gap-1.5 text-left group cursor-pointer focus:outline-none shrink-0"
          title="YUZAKI NASA — Return to top"
        >
          <span className="font-mono text-base sm:text-lg md:text-xl font-extrabold text-[#00E89B] tracking-tight transition-transform group-hover:scale-105">
            &gt;_
          </span>
          <div className="flex items-baseline font-mono tracking-tight select-none">
            <span className="text-xs sm:text-sm font-bold text-[#FFFFFF]">
              YUZAKI
            </span>
            <span className="text-xs sm:text-sm font-extrabold text-[#00E89B] ml-1 drop-shadow-[0_0_8px_rgba(0,232,155,0.4)]">
              NASA
            </span>
          </div>
        </button>

        {/* Center: Search Bar Trigger (Smoothly centered, clean and compact) */}
        <div className="flex-1 max-w-sm sm:max-w-md mx-auto">
          <button
            onClick={onOpenSearch}
            className="w-full flex items-center justify-between px-3 py-1.5 rounded-lg sm:rounded-xl bg-[#020711]/85 border border-[rgba(0,220,200,0.3)] text-[#A7B4C5] hover:border-[#00E89B]/60 hover:text-[#FFFFFF] transition-all text-[10px] sm:text-xs font-mono group cursor-pointer shadow-inner"
          >
            <div className="flex items-center gap-2 truncate">
              <Search size={13} className="text-[#A7B4C5] group-hover:text-[#00E89B] transition-colors shrink-0" />
              <span className="truncate">Search 900+ skills &amp; projects...</span>
            </div>
            <div className="flex items-center gap-0.5 bg-[#07111F] border border-[rgba(0,220,200,0.25)] px-1.5 py-0.5 rounded text-[9px] text-[#A7B4C5] group-hover:text-[#00E89B] group-hover:border-[#00E89B]/40 transition-colors shrink-0">
              <kbd>Ctrl</kbd>
              <span>+</span>
              <kbd>K</kbd>
            </div>
          </button>
        </div>

        {/* Right Controls: GitHub Link, Theme Toggle & Available Indicator */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* GitHub Link */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-1.5 rounded-lg sm:rounded-xl bg-[#020711]/70 border border-[rgba(0,220,200,0.3)] text-[#A7B4C5] hover:text-[#00E89B] hover:border-[#00E89B]/50 transition-colors cursor-pointer"
            title="GitHub"
          >
            <Github size={14} className="sm:w-4 sm:h-4" />
          </a>

          {/* Theme Toggle Button (Sun / Moon) */}
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-lg sm:rounded-xl bg-[#020711]/70 border border-[rgba(0,220,200,0.3)] text-[#A7B4C5] hover:text-[#FFFFFF] hover:border-[#00E89B]/50 transition-colors cursor-pointer"
            title={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={14} className="text-[#FFFFFF] sm:w-4 sm:h-4" /> : <Moon size={14} className="text-[#1F2328] sm:w-4 sm:h-4" />}
          </button>

          {/* Available for Work Status Indicator */}
          <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-[#020711]/80 border border-[rgba(0,220,200,0.3)] text-[10px] sm:text-xs font-mono text-[#FFFFFF] shadow-sm">
            <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E89B] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-[#00E89B] shadow-[0_0_8px_#00E89B]"></span>
            </span>
            <span className="text-[10px] sm:text-[11px] font-medium tracking-tight whitespace-nowrap">
              <span className="hidden sm:inline">Available for Work</span>
              <span className="inline sm:hidden">Available</span>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
