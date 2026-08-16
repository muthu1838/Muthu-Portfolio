import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, ChevronDown, Code2, Database, LayoutTemplate, Smartphone, MapPin, Zap } from 'lucide-react';

/* ─── animation helpers ─────────────────────────────────────────────── */
const heroContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};

const word = {
  hidden: { opacity: 0, y: 56, skewY: 4 },
  visible: {
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const skillCard = {
  hidden: { opacity: 0, x: 40 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.5 + i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ─── skills data ────────────────────────────────────────────────────── */
const skills = [
  {
    icon: LayoutTemplate,
    label: 'React.js',
    sub: 'Frontend Architecture',
    color: 'text-accent',
    bg: 'bg-accent/10',
    border: 'border-accent/20',
  },
  {
    icon: Smartphone,
    label: 'React Native',
    sub: 'Cross-platform Mobile',
    color: 'text-sky-400',
    bg: 'bg-sky-400/10',
    border: 'border-sky-400/20',
  },
  {
    icon: Database,
    label: 'Node.js & MongoDB',
    sub: 'Backend Systems',
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    border: 'border-emerald-400/20',
  },
];

/* ─── component ──────────────────────────────────────────────────────── */
const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Parallax for left text: moves up gently as you scroll
  const leftY   = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* ── Background glow orbs (GPU only, no layout cost) ── */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{ willChange: 'transform' }}
      >
        {/* Blue glow top-right */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-accent/10 blur-[120px]" />
        {/* Emerald glow bottom-left */}
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-emerald-500/8 blur-[120px]" />
      </div>

      {/* ── Subtle grid overlay ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px]"
      />

      {/* ── Main grid ── */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 pt-28 pb-16 grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 items-center">

        {/* ───── LEFT COLUMN ───── */}
        <motion.div
          style={{ y: leftY, opacity }}
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col"
        >
          {/* Status badge */}
          <motion.div variants={fadeUp} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Available for work
            </span>
          </motion.div>

          {/* Name — each word animates independently */}
          <h1 className="overflow-hidden mb-3" aria-label="Muthu Mariappan P">
            <div className="overflow-hidden mb-1">
              <motion.span
                variants={word}
                className="block text-[clamp(2.2rem,5.5vw,4rem)] font-black tracking-[-0.03em] leading-[0.92] text-foreground"
              >
                MUTHU
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span
                variants={word}
                className="block text-[clamp(2.2rem,5.5vw,4rem)] font-black tracking-[-0.03em] leading-[0.92] text-foreground/40"
              >
                MARIAPPAN P
              </motion.span>
            </div>
          </h1>

          {/* Divider line */}
          <motion.div
            variants={fadeUp}
            className="h-px w-24 bg-gradient-to-r from-accent to-transparent my-8"
          />

          {/* Role + location row */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 mb-7">
            <p className="text-xl md:text-2xl font-semibold text-accent">
              Full Stack Developer
            </p>
            <span className="hidden sm:block w-px h-5 bg-white/15" />
            <p className="text-base text-mutedForeground flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              Coimbatore, India
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg text-mutedForeground leading-relaxed max-w-[500px] mb-10"
          >
            Building scalable web apps, cross-platform mobile experiences,
            and robust backend systems with the modern JavaScript ecosystem.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 mb-12">
            <a
              href="#projects"
              className="premium-button premium-button-primary group"
            >
              View Projects
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a href="#contact" className="premium-button premium-button-secondary">
              Let's Connect
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div variants={fadeUp} className="flex items-center gap-8">
            {[
              { value: '1+', label: 'Year Experience' },
              { value: '6+', label: 'Projects Built' },
              { value: 'MERN', label: 'Stack' },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col">
                <span className="text-xl font-bold text-foreground">{value}</span>
                <span className="text-xs text-mutedForeground mt-0.5">{label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ───── RIGHT COLUMN — Developer card ───── */}
        <div className="hidden lg:flex flex-col gap-4">
          {/* Card header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="premium-card p-5 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-accent/15 border border-accent/25 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-accent" />
              </div>
              <div>
                <p className="text-xs font-mono text-mutedForeground/70">&lt;developer_profile /&gt;</p>
                <p className="text-[11px] text-mutedForeground/40 mt-0.5">muthu1838</p>
              </div>
            </div>
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            </div>
          </motion.div>

          {/* Skill rows */}
          {skills.map((skill, i) => (
            <motion.div
              key={skill.label}
              custom={i}
              variants={skillCard}
              initial="hidden"
              animate="visible"
              whileHover={{ x: 4, transition: { duration: 0.2 } }}
              className={`premium-card p-5 flex items-center gap-4 border ${skill.border} cursor-default`}
            >
              <div className={`w-11 h-11 rounded-xl ${skill.bg} border ${skill.border} flex items-center justify-center shrink-0`}>
                <skill.icon className={`w-5 h-5 ${skill.color}`} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-foreground">{skill.label}</p>
                <p className="text-xs text-mutedForeground mt-0.5">{skill.sub}</p>
              </div>
              <Zap className={`w-4 h-4 ${skill.color} opacity-50`} />
            </motion.div>
          ))}

          {/* React Native tag */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex items-center justify-center gap-3 py-3 rounded-2xl border border-white/5 bg-white/[0.02]"
          >
            <span className="text-xs text-mutedForeground/60 font-mono">also crafts with</span>
            <span className="text-xs font-semibold text-sky-400">React Native</span>
          </motion.div>
        </div>

      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-mutedForeground/40 font-medium">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-white/10 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-accent/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
