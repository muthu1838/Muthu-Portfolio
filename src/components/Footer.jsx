import { useState, useEffect } from 'react';
import { GithubIcon, LinkedinIcon } from './ui/Icons';
import { Mail, ArrowUp } from 'lucide-react';
import { socials } from '../data/socials';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState('');
  const year = new Date().getFullYear();

  useEffect(() => {
    const updateIST = () => {
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      const istString = new Intl.DateTimeFormat('en-US', options).format(new Date());
      setCurrentTime(`${istString} IST`);
    };

    updateIST();
    const timer = setInterval(updateIST, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-white/10 bg-[#07090E] mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/10">
          
          {/* Brand & Local Time Telemetry */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <span className="text-base font-bold text-white tracking-tight">MUTHU MARIAPPAN P.</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            </div>
            <span className="text-xs text-slate-400 font-mono">
              Full Stack &amp; React Native Developer · Coimbatore, IN
            </span>
            {currentTime && (
              <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Local Time: {currentTime}
              </span>
            )}
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400 font-medium">
            {[
              { href: '#about', label: 'About' },
              { href: '#tech', label: 'Stack' },
              { href: '#experience', label: 'Experience' },
              { href: '#projects', label: 'Work' },
              { href: '#process', label: 'Process' },
              { href: '#contact', label: 'Contact' },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="hover:text-blue-400 transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="GIT"
              aria-label="GitHub Profile"
              className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 shadow-xs flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/40 hover:bg-blue-500/10 transition-all"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="IN"
              aria-label="LinkedIn Profile"
              className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 shadow-xs flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/10 transition-all"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${socials.email}`}
              data-cursor="MAIL"
              aria-label="Email Muthu"
              className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 shadow-xs flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/40 hover:bg-blue-500/10 transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              data-cursor="TOP"
              aria-label="Back to top"
              className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 shadow-xs flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 transition-all ml-2 cursor-pointer"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Integrity */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <span>&copy; {year} Muthu Mariappan P. All rights reserved.</span>
          <span>
            Crafted with React, GSAP &amp; Modern Systems Architecture
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
