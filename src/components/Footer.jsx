import { GithubIcon, LinkedinIcon } from './ui/Icons';
import { Mail } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/5 mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-base font-bold text-foreground tracking-tight">Muthu.</span>
            <span className="text-xs text-mutedForeground">Full Stack &amp; React Native Developer</span>
          </div>

          {/* Nav links */}
          <nav className="flex items-center gap-6 text-sm text-mutedForeground">
            {['#about', '#experience', '#projects', '#contact'].map((href) => (
              <a
                key={href}
                href={href}
                className="capitalize hover:text-foreground transition-colors"
              >
                {href.replace('#', '')}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {[
              { href: 'https://github.com/muthu1838', icon: GithubIcon, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/muthu-mariappan-p-942a4828a/', icon: LinkedinIcon, label: 'LinkedIn' },
              { href: 'mailto:muthumariappan212@gmail.com', icon: Mail, label: 'Email' },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-mutedForeground hover:text-accent hover:border-accent/30 hover:bg-accent/10 transition-all duration-200"
              >
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-mutedForeground/50">
          <span>&copy; {year} Muthu Mariappan P. All rights reserved.</span>
          <span>Built with React &amp; Framer Motion</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
