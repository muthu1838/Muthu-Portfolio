import { useRef } from 'react';
import { motion } from 'framer-motion';
import { revealFromBottom, fadeIn, staggerContainer } from '../utils/animations';
import { Code2, Smartphone, Cloud, Layers, CheckCircle2 } from 'lucide-react';

const pillars = [
  {
    icon: Code2,
    title: 'Full Stack MERN Architecture',
    desc: 'End-to-end web engineering spanning high-performance React frontends and robust Node/Express REST backends with MongoDB.',
    tag: 'MERN STACK',
    color: 'text-blue-400',
    border: 'hover:border-blue-500/40',
    bg: 'bg-blue-500/10'
  },
  {
    icon: Smartphone,
    title: 'Cross-Platform Mobile',
    desc: 'Crafting responsive, native-feel iOS and Android mobile experiences utilizing React Native and Expo.',
    tag: 'REACT NATIVE',
    color: 'text-indigo-400',
    border: 'hover:border-indigo-500/40',
    bg: 'bg-indigo-500/10'
  },
  {
    icon: Cloud,
    title: 'Cloud & System Reliability',
    desc: 'AWS certified foundations, VPS server configuration, RESTful API architecture, and database query optimization.',
    tag: 'AWS CLOUD',
    color: 'text-amber-400',
    border: 'hover:border-amber-500/40',
    bg: 'bg-amber-500/10'
  },
  {
    icon: Layers,
    title: 'Clean Code & AI Systems',
    desc: 'Writing maintainable, modular code with strong architectural boundaries, reusable design systems, and LLM APIs.',
    tag: 'AI WORKFLOWS',
    color: 'text-emerald-400',
    border: 'hover:border-emerald-500/40',
    bg: 'bg-emerald-500/10'
  }
];

const technicalCapabilities = [
  'WEB APPLICATIONS',
  'MOBILE APPLICATIONS',
  'API DEVELOPMENT',
  'DATABASE SYSTEMS',
  'CLOUD & DEVOPS',
  'AI INTEGRATION',
  'WORDPRESS & PHP',
  'ECOMMERCE'
];

const About = () => {
  const containerRef = useRef(null);

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative w-full max-w-7xl mx-auto px-6 md:px-12 py-28 md:py-36 border-t border-white/10 bg-[#050508]"
    >
      {/* Editorial Section Index */}
      <div className="flex items-center gap-3 mb-10">
        <span className="text-xs font-mono text-blue-400 font-bold tracking-widest bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
          01 // ABOUT &amp; PERSPECTIVE
        </span>
        <div className="h-px flex-1 max-w-[120px] bg-blue-500/20" />
      </div>

      {/* Main Statement & Narrative Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-start mb-16">
        
        {/* Left: Large Headline & Bio */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col"
        >
          <motion.h2
            variants={revealFromBottom}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.14] mb-8"
          >
            Building useful products with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">
              clean code
            </span>{' '}
            and modern systems.
          </motion.h2>

          <motion.div variants={fadeIn} className="space-y-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
            <p>
              I am a <strong className="text-white font-semibold">Full Stack Developer</strong> and{' '}
              <strong className="text-blue-400 font-semibold">React Native Specialist</strong> based in Coimbatore, India. Currently engineering production-grade software at Madhura Technologies, I build scalable web apps, cross-platform mobile experiences, and robust backend architectures.
            </p>
            <p className="text-slate-400 text-sm sm:text-base">
              My engineering philosophy centers around architectural clarity: writing modular, maintainable code, designing resilient database systems, integrating AI workflows, and ensuring sub-second response times across every interface.
            </p>
          </motion.div>

          {/* Key Developer Highlights */}
          <motion.div variants={fadeIn} className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-3 text-xs font-mono">
            <div className="flex items-center gap-2 text-white bg-[#0D1117] px-3.5 py-2 rounded-xl border border-white/10 shadow-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
              <span>Full Stack Web &amp; Mobile</span>
            </div>
            <div className="flex items-center gap-2 text-white bg-[#0D1117] px-3.5 py-2 rounded-xl border border-white/10 shadow-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>AWS Certified Associate</span>
            </div>
            <div className="flex items-center gap-2 text-white bg-[#0D1117] px-3.5 py-2 rounded-xl border border-white/10 shadow-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
              <span>B.E. Computer Science</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Architectural Capability Pillars */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                variants={fadeIn}
                className={`premium-card p-6 flex flex-col justify-between group bg-[#0D1117]/80 border border-white/10 ${pillar.border} transition-all duration-300`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl ${pillar.bg} border border-white/10 flex items-center justify-center ${pillar.color} group-hover:scale-105 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>

      {/* Technical Capabilities Matrix */}
      <div className="pt-8 border-t border-white/10">
        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-4 font-semibold">
          CORE DOMAIN CAPABILITIES
        </span>
        <div className="flex flex-wrap gap-2.5">
          {technicalCapabilities.map((cap) => (
            <span
              key={cap}
              className="px-3.5 py-1.5 rounded-lg bg-[#0D1117] border border-white/10 text-xs font-mono text-slate-300 flex items-center gap-2 hover:border-blue-500/40 hover:text-white transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              {cap}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
