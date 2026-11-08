import React from 'react';
import { User, Terminal, Cpu, Globe2, Zap } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="w-full flex flex-col gap-3 sm:gap-4">
      {/* Section Heading */}
      <div className="flex items-center gap-2 pb-1.5 border-b border-[rgba(0,220,200,0.2)]">
        <div className="p-1.5 rounded-lg bg-[#081423] border border-[rgba(0,220,200,0.3)] text-[#00E89B] shadow-[0_0_10px_rgba(0,232,155,0.2)]">
          <User size={15} />
        </div>
        <h2 className="font-mono text-sm sm:text-base font-bold text-[#FFFFFF]">
          About YUZAKI NASA
        </h2>
      </div>

      {/* Content Split: Terminal Info Sheet & Engineering Journey */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-start w-full">
        {/* Left: Terminal-Inspired Specification Card */}
        <div className="md:col-span-5 p-3.5 sm:p-4 rounded-xl glass-panel font-mono text-[10px] sm:text-xs flex flex-col gap-2.5 shadow-lg border border-[rgba(0,220,200,0.35)] w-full">
          <div className="flex items-center justify-between pb-2 border-b border-[rgba(0,220,200,0.2)] text-[#A7B4C5]">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#f85149]" />
              <span className="w-2 h-2 rounded-full bg-[#d29922]" />
              <span className="w-2 h-2 rounded-full bg-[#00E89B]" />
            </div>
            <span className="text-[10px]">developer_spec.json</span>
          </div>

          <div className="text-[#00E89B] font-bold flex items-center gap-1.5">
            <Terminal size={13} />
            <span>$ cat /etc/developer_spec.json</span>
          </div>

          <div className="flex flex-col gap-1.5 pt-0.5 text-[#FFFFFF] text-[10px] sm:text-[11px]">
            <div className="flex justify-between">
              <span className="text-[#A7B4C5]">Developer Identity:</span>
              <span className="font-bold text-[#00E89B]">YUZAKI NASA</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#A7B4C5]">Technical Interests:</span>
              <span className="text-[#00AFFF]">Compilers, Web Runtimes, ASTs</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#A7B4C5]">Philosophy:</span>
              <span>Code. Learn. Build.</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#A7B4C5]">Experience:</span>
              <span>Full-Stack Web &amp; CLI Tools</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#A7B4C5]">Tools &amp; Tech:</span>
              <span>TypeScript, React, Rust, Go, Node.js</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#A7B4C5]">Current Focus:</span>
              <span className="text-[#00E89B]">900+ Language Syntax Engines</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#A7B4C5]">Availability:</span>
              <span className="text-[#00E89B] font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E89B] animate-pulse" />
                Available for Work
              </span>
            </div>
          </div>

          <div className="pt-2 border-t border-[rgba(0,220,200,0.2)] flex items-center justify-between text-[9px] sm:text-[10px] text-[#A7B4C5]">
            <span>SYSTEM: ONLINE</span>
            <span className="text-[#00E89B]">VERIFIED SPEC</span>
          </div>
        </div>

        {/* Right: The Engineering Journey */}
        <div className="md:col-span-7 flex flex-col gap-3 sm:gap-3.5 w-full">
          <div className="p-4 sm:p-5 rounded-xl glass-panel flex flex-col gap-2.5 border border-[rgba(0,220,200,0.35)] shadow-lg w-full">
            <h3 className="font-mono text-sm sm:text-base font-bold text-[#FFFFFF] flex items-center gap-2">
              <Terminal size={16} className="text-[#00E89B]" />
              <span>The Engineering Journey</span>
            </h3>
            <p className="text-[11px] sm:text-xs text-[#A7B4C5] leading-relaxed">
              &quot;I am a software engineer driven by the art of clean code, developer tools, and immersive web applications.&quot;
            </p>
            <p className="text-[11px] sm:text-xs text-[#A7B4C5] leading-relaxed">
              Throughout my development path, I have created systems such as <strong className="text-[#00AFFF]">PLAY-CODE</strong> (online multi-language editor &amp; learning platform), <strong className="text-[#00E89B]">init.Habits</strong> (terminal-styled habit engineering engine), and <strong className="text-[#A78BFA]">ColorPalette</strong> (color synthesis utility), alongside cataloging 900+ computing languages.
            </p>
          </div>

          {/* Three Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-2.5 w-full">
            {/* 1. Performance */}
            <div className="p-2.5 sm:p-3 rounded-xl glass-panel flex flex-col gap-1 border border-[rgba(0,220,200,0.3)] hover:border-[#00E89B] transition-colors">
              <div className="p-1.5 w-fit rounded-lg bg-[#020711] text-[#00E89B] shadow-[0_0_8px_rgba(0,232,155,0.2)]">
                <Zap size={14} />
              </div>
              <h4 className="font-mono text-[11px] font-bold text-[#FFFFFF]">1. Performance</h4>
              <p className="text-[10px] text-[#A7B4C5] leading-relaxed">
                Zero-bloat engineering, rapid load times, and responsive state handling.
              </p>
            </div>

            {/* 2. Deep Curiosity */}
            <div className="p-2.5 sm:p-3 rounded-xl glass-panel flex flex-col gap-1 border border-[rgba(0,220,200,0.3)] hover:border-[#00AFFF] transition-colors">
              <div className="p-1.5 w-fit rounded-lg bg-[#020711] text-[#00AFFF] shadow-[0_0_8px_rgba(0,175,255,0.2)]">
                <Cpu size={14} />
              </div>
              <h4 className="font-mono text-[11px] font-bold text-[#FFFFFF]">2. Deep Curiosity</h4>
              <p className="text-[10px] text-[#A7B4C5] leading-relaxed">
                Understanding language syntax, parsers, and runtime design.
              </p>
            </div>

            {/* 3. Modern Web */}
            <div className="p-2.5 sm:p-3 rounded-xl glass-panel flex flex-col gap-1 border border-[rgba(0,220,200,0.3)] hover:border-[#00E89B] transition-colors">
              <div className="p-1.5 w-fit rounded-lg bg-[#020711] text-[#00E89B] shadow-[0_0_8px_rgba(0,232,155,0.2)]">
                <Globe2 size={14} />
              </div>
              <h4 className="font-mono text-[11px] font-bold text-[#FFFFFF]">3. Modern Web</h4>
              <p className="text-[10px] text-[#A7B4C5] leading-relaxed">
                Crafting clean interfaces with strict design discipline and dark aesthetics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
