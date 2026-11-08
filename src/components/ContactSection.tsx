import React, { useState } from 'react';
import { Mail, Copy, Check, Github, Instagram, Linkedin, ExternalLink } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const directEmail = 'Yuzuki.Space@gmail.com';
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(directEmail)}`;
  const mailtoUrl = `mailto:${directEmail}`;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(directEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="w-full flex flex-col gap-3 sm:gap-4">
      {/* Section Heading */}
      <div className="flex items-center gap-2 pb-1.5 border-b border-[rgba(0,220,200,0.25)]">
        <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-[#081423] border border-[rgba(0,220,200,0.35)] text-[#00E89B] shadow-[0_0_10px_rgba(0,232,155,0.25)]">
          <Mail size={16} className="sm:w-4.5 sm:h-4.5" />
        </div>
        <div>
          <h2 className="font-mono text-sm sm:text-base md:text-lg font-bold text-[#FFFFFF] tracking-tight">
            Let&apos;s Connect
          </h2>
          <p className="text-[9px] sm:text-[11px] text-[#A7B4C5] font-mono">
            Direct communication &amp; collaboration channels
          </p>
        </div>
      </div>

      {/* Start a Conversation Card — Compact, Form-Free */}
      <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl glass-panel flex flex-col gap-3 sm:gap-4 border border-[rgba(0,220,200,0.35)] shadow-xl w-full">
        <div className="flex flex-col gap-1">
          <h3 className="font-mono text-sm sm:text-base font-bold text-[#FFFFFF] flex items-center gap-1.5">
            <span className="text-[#00E89B]">&gt;</span>
            <span>Start a Conversation</span>
          </h3>
          <p className="text-[11px] sm:text-xs text-[#A7B4C5] leading-relaxed max-w-2xl">
            Have a project inquiry, collaboration proposal, or discussion about programming language runtimes? Connect directly via Gmail or reach out through social platforms.
          </p>
        </div>

        {/* Action Strip: Direct Gmail Compose Button & Quick Copy Card */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-stretch w-full">
          {/* Primary Action: Direct Gmail Compose Button */}
          <div className="md:col-span-7 p-3.5 sm:p-4 rounded-xl bg-[#020711]/80 border border-[rgba(0,220,200,0.3)] flex flex-col justify-between gap-3">
            <div>
              <span className="text-[9px] font-mono uppercase tracking-wider text-[#00E89B] font-bold">
                Recommended Contact
              </span>
              <h4 className="font-mono text-xs sm:text-sm font-bold text-[#FFFFFF] mt-0.5">
                Compose Directly in Gmail
              </h4>
              <p className="text-[10px] sm:text-[11px] text-[#A7B4C5] mt-0.5 leading-relaxed">
                Opens Gmail in a new tab with recipient prefilled to <span className="text-[#FFFFFF] font-mono font-semibold">{directEmail}</span> so you can write your message and review before sending.
              </p>
            </div>

            <div className="flex items-center gap-2 sm:gap-2.5 pt-1">
              <a
                href={gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-[#00E89B] hover:bg-[#00FFB2] text-[#020711] font-mono text-xs sm:text-sm font-bold shadow-[0_0_15px_rgba(0,232,155,0.4)] hover:shadow-[0_0_20px_rgba(0,255,178,0.55)] transition-all duration-150 transform hover:-translate-y-0.5 cursor-pointer text-center"
              >
                <Mail size={15} />
                <span>Send Me an Email</span>
                <ExternalLink size={13} />
              </a>

              <a
                href={mailtoUrl}
                title="Open default desktop mail client"
                className="px-3 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-[#081423] border border-[rgba(0,220,200,0.3)] hover:border-[#00AFFF] text-[#A7B4C5] hover:text-[#FFFFFF] font-mono text-xs font-semibold transition-colors cursor-pointer"
              >
                mailto
              </a>
            </div>
          </div>

          {/* Email Address & Quick Copy Card */}
          <div className="md:col-span-5 p-3.5 sm:p-4 rounded-xl bg-[#020711]/80 border border-[rgba(0,220,200,0.3)] flex flex-col justify-between gap-3">
            <div>
              <span className="text-[9px] font-mono uppercase tracking-wider text-[#00AFFF] font-bold">
                Direct Address
              </span>
              <h4 className="font-mono text-xs sm:text-sm font-bold text-[#FFFFFF] mt-0.5">
                Email Address
              </h4>
              <p className="text-[10px] sm:text-[11px] text-[#A7B4C5] mt-0.5 leading-relaxed">
                Copy the address directly to your clipboard for your preferred email client.
              </p>
            </div>

            <div className="p-2 sm:p-2.5 rounded-lg bg-[#081423] border border-[rgba(0,220,200,0.25)] flex items-center justify-between font-mono text-xs">
              <span className="text-[#00E89B] font-semibold truncate select-all text-[10px] sm:text-xs">
                {directEmail}
              </span>
              <button
                onClick={handleCopyEmail}
                className="p-1.5 rounded-md bg-[#020711] hover:bg-[#07111F] text-[#A7B4C5] hover:text-[#FFFFFF] border border-[rgba(0,220,200,0.2)] transition-colors cursor-pointer shrink-0 ml-1.5"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <span className="flex items-center gap-1 text-[#00E89B]">
                    <Check size={12} />
                    <span className="text-[9px]">Copied</span>
                  </span>
                ) : (
                  <span className="flex items-center gap-1">
                    <Copy size={12} />
                    <span className="text-[9px]">Copy</span>
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Social Platforms Row */}
        <div className="pt-2 border-t border-[rgba(0,220,200,0.2)] flex flex-col gap-2 font-mono text-xs">
          <span className="text-[9px] uppercase text-[#A7B4C5] font-semibold tracking-wider">
            Other Profiles &amp; Networks
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-2.5 w-full">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-2.5 rounded-xl bg-[#020711]/70 border border-[rgba(0,220,200,0.25)] hover:border-[#00AFFF] hover:bg-[#081423] flex items-center gap-2.5 text-[#A7B4C5] hover:text-[#00AFFF] transition-all cursor-pointer group"
            >
              <div className="p-1.5 rounded-lg bg-[#081423] border border-[rgba(0,220,200,0.2)] text-[#FFFFFF] group-hover:text-[#00AFFF]">
                <Github size={15} />
              </div>
              <div>
                <div className="font-bold text-[#FFFFFF] group-hover:text-[#00AFFF] text-[11px]">GitHub</div>
                <div className="text-[9.5px] text-[#A7B4C5]">Open Source Repositories</div>
              </div>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-2.5 rounded-xl bg-[#020711]/70 border border-[rgba(0,220,200,0.25)] hover:border-[#00AFFF] hover:bg-[#081423] flex items-center gap-2.5 text-[#A7B4C5] hover:text-[#00AFFF] transition-all cursor-pointer group"
            >
              <div className="p-1.5 rounded-lg bg-[#081423] border border-[rgba(0,220,200,0.2)] text-[#FFFFFF] group-hover:text-[#00AFFF]">
                <Linkedin size={15} />
              </div>
              <div>
                <div className="font-bold text-[#FFFFFF] group-hover:text-[#00AFFF] text-[11px]">LinkedIn</div>
                <div className="text-[9.5px] text-[#A7B4C5]">Professional Network</div>
              </div>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-2.5 rounded-xl bg-[#020711]/70 border border-[rgba(0,220,200,0.25)] hover:border-[#00FFB2] hover:bg-[#081423] flex items-center gap-2.5 text-[#A7B4C5] hover:text-[#00FFB2] transition-all cursor-pointer group"
            >
              <div className="p-1.5 rounded-lg bg-[#081423] border border-[rgba(0,220,200,0.2)] text-[#FFFFFF] group-hover:text-[#00FFB2]">
                <Instagram size={15} />
              </div>
              <div>
                <div className="font-bold text-[#FFFFFF] group-hover:text-[#00FFB2] text-[11px]">Instagram</div>
                <div className="text-[9.5px] text-[#A7B4C5]">Creative Journey</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
