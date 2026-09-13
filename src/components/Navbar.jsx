import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, FileText, Sun, Moon } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './ui/Icons';
import { socials } from '../data/socials';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Stack', href: '#tech' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Process', href: '#process' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const { theme, toggleTheme, isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      const sections = ['about', 'tech', 'experience', 'projects', 'process', 'contact'];
      let current = '';

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 150) {
            current = section;
          }
        }
      }
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-3.5 pointer-events-none transition-all duration-300">
      <div
        className={`pointer-events-auto flex items-center justify-between w-full max-w-6xl transition-all duration-300 ${
          isScrolled
            ? 'px-4 sm:px-5 py-2.5 rounded-full bg-[#0D1117]/85 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.8)]'
            : 'px-2 py-3 bg-transparent border-b border-transparent'
        }`}
      >
        {/* Brand Logo & Live Status */}
        <a
          href="#"
          data-cursor="TOP"
          className="flex items-center gap-3 group focus:outline-none"
          aria-label="Muthu Mariappan Home"
        >
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden bg-white/5 p-1 ring-1 ring-blue-500/30 group-hover:ring-blue-400 group-hover:shadow-[0_0_16px_rgba(59,130,246,0.35)] transition-all">
            <img
              src="/logoo.png"
              alt="Muthu Mariappan Logo"
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xs sm:text-sm font-bold tracking-tight text-white flex items-center gap-1.5">
              MUTHU
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            </span>
            <span className="text-[10px] font-mono text-slate-400 hidden sm:block">
              FULL STACK DEV
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#161B22]/90 border border-white/10 rounded-full px-2.5 py-1">
          {navLinks.map((link) => {
            const sectionKey = link.href.substring(1);
            const isActive = activeSection === sectionKey;

            return (
              <a
                key={link.name}
                href={link.href}
                data-cursor="GO"
                className={`relative px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                  isActive ? 'text-white font-semibold' : 'text-slate-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/30 to-indigo-600/30 border border-blue-500/40 shadow-[0_0_12px_rgba(59,130,246,0.3)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Action CTAs & Theme Toggle */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            data-cursor="THEME"
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-blue-400/40 text-slate-300 hover:text-white hover:bg-white/10 transition-all flex items-center justify-center group"
            title={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-300 transition-transform group-hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-500 transition-transform group-hover:-rotate-12" />
            )}
          </button>

          <a
            href={socials.resume}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="PDF"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-blue-600/20 to-indigo-600/20 hover:from-blue-600 hover:to-indigo-600 border border-blue-500/30 hover:border-transparent transition-all shadow-sm"
          >
            <FileText className="w-3.5 h-3.5 text-blue-400 group-hover:text-white" />
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3 text-slate-400" />
          </a>

          <div className="flex items-center gap-1 pl-1 border-l border-white/10">
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="GIT"
              aria-label="GitHub Profile"
              className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="IN"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-full text-slate-400 hover:text-blue-400 hover:bg-white/5 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Mobile Action Cluster */}
        <div className="md:hidden flex items-center gap-2">
          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-indigo-500" />}
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-xl text-white bg-white/5 border border-white/10 hover:bg-white/10 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto absolute top-16 left-4 right-4 p-6 rounded-2xl bg-[#0D1117]/95 backdrop-blur-2xl border border-white/10 shadow-2xl flex flex-col gap-5 md:hidden z-50"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono uppercase text-white font-semibold tracking-wider">
                  MUTHU MARIAPPAN P
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-400">NAVIGATION</span>
            </div>

            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-base font-medium text-slate-200 hover:text-blue-400 transition-colors"
                  >
                    <span>{link.name}</span>
                    <span className="text-xs font-mono text-slate-500">→</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
              <a
                href={socials.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold shadow-md"
              >
                <FileText className="w-4 h-4" />
                <span>View Full Resume (PDF)</span>
              </a>

              <div className="flex items-center justify-around pt-2">
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-slate-400 hover:text-white"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-slate-400 hover:text-blue-400"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
