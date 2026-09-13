import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowUpRight, Copy, Check, MapPin } from 'lucide-react';
import { LinkedinIcon } from './ui/Icons';
import { socials } from '../data/socials';
import { fadeIn, staggerContainer, revealFromBottom } from '../utils/animations';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="relative w-full max-w-4xl mx-auto px-6 md:px-12 py-28 md:py-36 border-t border-white/10 bg-[#050508]"
    >
      {/* Editorial Section Index */}
      <div className="flex items-center justify-center gap-3 mb-12">
        <span className="text-xs font-mono text-blue-400 font-bold tracking-widest text-center bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20">
          08 // INITIATE DIALOGUE &amp; OPPORTUNITY
        </span>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="text-center flex flex-col items-center"
      >
        {/* Availability Radar */}
        <motion.div variants={fadeIn} className="mb-8">
          <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-mono text-emerald-400 font-bold shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            OPEN FOR FULL-STACK &amp; MOBILE ROLES
          </span>
        </motion.div>

        {/* Large Statement */}
        <motion.h2
          variants={revealFromBottom}
          className="text-4xl sm:text-5xl md:text-6xl font-black tracking-[-0.03em] text-white mb-6 leading-tight max-w-2xl"
        >
          Let&apos;s build something{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">
            useful.
          </span>
        </motion.h2>

        <motion.p
          variants={fadeIn}
          className="text-base sm:text-lg text-slate-300 mb-12 max-w-xl leading-relaxed font-normal"
        >
          Have a product to build, an architectural challenge, or a high-impact engineering role? I am always ready to collaborate and ship clean code.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          variants={fadeIn}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-10"
        >
          <a
            href={`mailto:${socials.email}`}
            data-cursor="EMAIL"
            className="premium-button premium-button-primary group w-full sm:w-auto text-sm px-8 py-3.5 shadow-lg shadow-blue-500/25"
          >
            <Mail className="w-4 h-4" />
            <span>Send Direct Email</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="IN"
            className="premium-button premium-button-secondary group w-full sm:w-auto text-sm px-8 py-3.5"
          >
            <LinkedinIcon className="w-4 h-4 text-blue-400" />
            <span>Connect on LinkedIn</span>
            <ArrowUpRight className="w-4 h-4 text-slate-400 transition-transform group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>

        {/* Copy Email Helper Bar */}
        <motion.div
          variants={fadeIn}
          className="p-3 px-5 rounded-2xl bg-[#0D1117] border border-white/10 flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-slate-300 shadow-sm"
        >
          <span className="text-slate-400 font-semibold">Email:</span>
          <span className="text-white font-bold">{socials.email}</span>
          <button
            onClick={copyEmail}
            data-cursor="COPY"
            className="flex items-center gap-1 text-blue-400 hover:text-blue-300 ml-2 transition-colors font-bold"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </motion.div>

        {/* Location & Status Info */}
        <motion.div variants={fadeIn} className="mt-8 text-xs font-mono text-slate-400 flex items-center gap-2 font-medium">
          <MapPin className="w-3.5 h-3.5 text-blue-400" />
          <span>Coimbatore, Tamil Nadu, India · IST (UTC+5:30)</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
