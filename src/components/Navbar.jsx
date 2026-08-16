import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './ui/Icons';
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility for Tailwind classes
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple active section detection
      const sections = navLinks.map(link => link.href.substring(1));
      let current = '';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed z-50 transition-all duration-300",
        isScrolled 
          ? "top-4 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-[calc(100%-2rem)] md:max-w-5xl rounded-2xl md:rounded-full border border-white/10 bg-background/80 backdrop-blur-xl shadow-2xl py-3" 
          : "top-0 left-0 right-0 w-full rounded-none border-b border-transparent bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 z-50 group">
          <img
            src="/initials-letter-m-creative-logo-design_474888-7409.avif"
            alt="Muthu Logo"
            className="w-9 h-9 rounded-full object-cover ring-2 ring-white/20 group-hover:ring-accent/60 transition-all duration-300"
          />
          <span className="text-xl font-bold tracking-tight">Muthu.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-sm font-medium text-mutedForeground">
            {navLinks.map((link) => (
              <li key={link.name} className="relative">
                <a
                  href={link.href}
                  className={cn(
                    "hover:text-foreground transition-colors",
                    activeSection === link.href.substring(1) && "text-foreground"
                  )}
                >
                  {link.name}
                </a>
                {activeSection === link.href.substring(1) && (
                  <motion.div
                    layoutId="active-nav"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-foreground"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4 border-l border-white/10 pl-6 text-mutedForeground">
            <a href="https://github.com/muthu1838" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              <GithubIcon className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/muthu-mariappan-p-942a4828a/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 text-foreground p-2 -mr-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/5 py-6 px-6 flex flex-col gap-6 shadow-2xl md:hidden"
          >
            <ul className="flex flex-col gap-4 text-lg font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block hover:text-white/70"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-6 pt-4 border-t border-white/10">
              <a href="https://github.com/muthu1838" target="_blank" rel="noopener noreferrer">
                <GithubIcon className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/muthu-mariappan-p-942a4828a/" target="_blank" rel="noopener noreferrer">
                <LinkedinIcon className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
