import { motion } from 'framer-motion';
import { ArrowUpRight, GitBranch, Star, GitFork } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './ui/Icons';
import { staggerContainer, fadeIn, revealFromBottom } from '../utils/animations';

const stats = [
  { icon: Star,      label: 'Stars',    value: '12+' },
  { icon: GitFork,   label: 'Repos',    value: '15+' },
  { icon: GitBranch, label: 'Commits',  value: '200+' },
];

const GithubSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 border-t border-white/5">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="premium-card relative overflow-hidden p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10"
      >
        {/* Accent glow behind card */}
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-accent/8 blur-[80px] pointer-events-none" />

        {/* Left */}
        <div className="flex-1 md:max-w-lg">
          <motion.p
            variants={revealFromBottom}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-accent mb-4"
          >
            Open Source
          </motion.p>
          <motion.h2
            variants={fadeIn}
            className="text-2xl md:text-3xl font-bold tracking-tight mb-3"
          >
            More experiments, code &amp; ideas.
          </motion.h2>
          <motion.p variants={fadeIn} className="text-mutedForeground mb-8">
            Explore my GitHub repositories and development experiments.
          </motion.p>

          {/* Mini stats */}
          <motion.div variants={fadeIn} className="flex items-center gap-6">
            {stats.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-1.5 text-foreground">
                  <Icon className="w-3.5 h-3.5 text-accent" />
                  <span className="text-base font-bold">{value}</span>
                </div>
                <span className="text-[11px] text-mutedForeground">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — buttons */}
        <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
          <a
            href="https://github.com/muthu1838"
            target="_blank"
            rel="noopener noreferrer"
            className="premium-button premium-button-primary group"
          >
            <GithubIcon className="w-4 h-4" />
            GitHub Profile
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a
            href="https://www.linkedin.com/in/muthu-mariappan-p-942a4828a/"
            target="_blank"
            rel="noopener noreferrer"
            className="premium-button premium-button-secondary group"
          >
            <LinkedinIcon className="w-4 h-4" />
            LinkedIn
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 opacity-50 group-hover:opacity-100" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GithubSection;
