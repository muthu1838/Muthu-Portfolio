import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, GitBranch, Star, GitFork, Terminal, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './ui/Icons';
import { socials } from '../data/socials';
import { fadeIn, staggerContainer } from '../utils/animations';

const stats = [
  { icon: Star, label: 'GitHub Stars', value: '12+', color: 'text-amber-400' },
  { icon: GitFork, label: 'Public Repositories', value: '15+', color: 'text-blue-400' },
  { icon: GitBranch, label: 'Code Commits', value: '200+', color: 'text-emerald-400' },
];

const GithubSection = () => {
  const [copied, setCopied] = useState(false);

  const copyCloneCmd = () => {
    navigator.clipboard.writeText('git clone https://github.com/muthu1838/Workspace.git');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 md:px-12 py-28 md:py-36 border-t border-white/10 bg-[#050508]">
      {/* Editorial Section Index */}
      <div className="flex items-center gap-3 mb-10">
        <span className="text-xs font-mono text-blue-400 font-bold tracking-widest bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
          06 // DEVELOPER LAB &amp; OPEN SOURCE
        </span>
        <div className="h-px flex-1 max-w-[120px] bg-blue-500/20" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="premium-card relative overflow-hidden p-8 md:p-14 bg-[#0D1117]/85 border border-white/10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12"
      >
        {/* Left: Narrative & Telemetry */}
        <div className="flex-1 w-full max-w-xl">
          <motion.div variants={fadeIn} className="flex items-center gap-2 mb-3 text-xs font-mono text-blue-400 font-bold">
            <Terminal className="w-4 h-4" />
            <span>OPEN_SOURCE // EXPERIMENTS</span>
          </motion.div>

          <motion.h2
            variants={fadeIn}
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4"
          >
            More experiments, code &amp; ideas.
          </motion.h2>

          <motion.p variants={fadeIn} className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 font-normal">
            Explore my GitHub repositories, utility packages, and experimental UI playgrounds. All codebases adhere to strict modular patterns and clean documentation.
          </motion.p>

          {/* Mini Stats Row */}
          <motion.div variants={fadeIn} className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-white/5 border border-white/10 shadow-sm mb-8">
            {stats.map(({ icon: Icon, label, value, color }) => (
              <div key={label} className="flex flex-col">
                <div className="flex items-center gap-1.5 text-white font-mono font-bold text-lg">
                  <Icon className={`w-4 h-4 ${color}`} />
                  <span>{value}</span>
                </div>
                <span className="text-[11px] font-mono text-slate-400 mt-1 font-medium">{label}</span>
              </div>
            ))}
          </motion.div>

          {/* Quick Clone Terminal Box */}
          <motion.div variants={fadeIn} className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-white/10 shadow-inner font-mono text-xs text-slate-200">
            <div className="flex items-center gap-2 truncate pr-2">
              <span className="text-blue-400 font-bold">$</span>
              <span className="truncate font-medium">git clone https://github.com/muthu1838/Workspace.git</span>
            </div>
            <button
              onClick={copyCloneCmd}
              data-cursor="COPY"
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors shrink-0 border border-white/10"
              title="Copy clone command"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </motion.div>
        </div>

        {/* Right: CTA Buttons */}
        <motion.div variants={fadeIn} className="flex flex-col sm:flex-row lg:flex-col gap-3.5 w-full lg:w-auto shrink-0">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="GIT"
            className="premium-button premium-button-primary group flex items-center justify-center gap-2.5 py-3.5 px-6"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Visit GitHub Profile</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="IN"
            className="premium-button premium-button-secondary group flex items-center justify-center gap-2.5 py-3.5 px-6"
          >
            <LinkedinIcon className="w-4 h-4 text-blue-400" />
            <span>Connect on LinkedIn</span>
            <ArrowUpRight className="w-4 h-4 text-slate-400 transition-transform group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GithubSection;
