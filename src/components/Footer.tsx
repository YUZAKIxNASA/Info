import React from 'react';
import { Github, Instagram, Linkedin, Mail, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const directEmail = 'Yuzuki.Space@gmail.com';
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(directEmail)}`;

  return (
    <footer className="mt-8 border-t border-[rgba(0,220,200,0.25)] bg-[#020711]/90 backdrop-blur-md py-4 sm:py-5 px-4 sm:px-6 lg:px-8 text-xs font-mono text-[#A7B4C5] w-full">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
        {/* Left: Copyright */}
        <div>
          &copy; 2026 <span className="text-[#FFFFFF] font-semibold">YUZAKI NASA</span>. All rights reserved.
        </div>

        {/* Center: Built with */}
        <div className="flex items-center gap-1.5">
          <span>Built with</span>
          <Heart size={14} className="text-[#f85149] fill-[#f85149]" />
          <span>using HTML, CSS &amp; JavaScript</span>
        </div>

        {/* Right: Let's Connect */}
        <div className="flex items-center gap-3">
          <span className="text-[#FFFFFF] font-medium">Let&apos;s Connect:</span>
          <div className="flex items-center gap-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-1.5 rounded-lg bg-[#081423] border border-[rgba(0,220,200,0.25)] hover:text-[#00AFFF] hover:border-[#00AFFF] transition-colors"
            >
              <Github size={14} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="p-1.5 rounded-lg bg-[#081423] border border-[rgba(0,220,200,0.25)] hover:text-[#00FFB2] hover:border-[#00FFB2] transition-colors"
            >
              <Instagram size={14} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-1.5 rounded-lg bg-[#081423] border border-[rgba(0,220,200,0.25)] hover:text-[#00AFFF] hover:border-[#00AFFF] transition-colors"
            >
              <Linkedin size={14} />
            </a>
            <a
              href={gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Compose Email in Gmail"
              title={`Compose email to ${directEmail}`}
              className="p-1.5 rounded-lg bg-[#081423] border border-[rgba(0,220,200,0.25)] hover:text-[#00E89B] hover:border-[#00E89B] transition-colors"
            >
              <Mail size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
