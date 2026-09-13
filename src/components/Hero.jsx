import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import {
  ArrowUpRight,
  MapPin,
  FileText,
  Mail,
  Code2,
  Layers,
  Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './ui/Icons';
import { socials } from '../data/socials';
import { useMagnetic } from '../hooks/useMagnetic';

const Hero = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  const primaryBtnRef = useMagnetic(0.2);
  const secondaryBtnRef = useMagnetic(0.2);

  // ── GSAP Entrance Timeline ──
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (!prefersReducedMotion) {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.fromTo('.hero-badge', { opacity: 0, y: -16 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.1 })
          .fromTo('.hero-greeting', { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.3')
          .fromTo('.hero-title-line', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.35')
          .fromTo('.hero-role', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
          .fromTo('.hero-desc', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
          .fromTo('.hero-tags', { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.35')
          .fromTo('.hero-cta', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 }, '-=0.35')
          .fromTo('.hero-stats', { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.3');
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // ── Ambient Background Canvas ──
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize, { passive: true });

    const particleCount = window.innerWidth < 768 ? 16 : 28;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      radius: Math.random() * 1.2 + 0.4,
      alpha: Math.random() * 0.25 + 0.08,
    }));

    let isVisible = true;
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    if (containerRef.current) observer.observe(containerRef.current);

    const render = () => {
      if (!isVisible) {
        animationId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.fillStyle = `rgba(99, 102, 241, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.strokeStyle = `rgba(59, 130, 246, ${(1 - dist / 130) * 0.07})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative w-full min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-32 pb-20 px-6 md:px-12 overflow-hidden bg-[#050508]"
    >
      {/* ── Background Ambient Canvas & Subtle Glow ── */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 z-0 opacity-50"
        aria-hidden="true"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-glow opacity-80" aria-hidden="true" />

      {/* Subtle Grid Overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-tech-grid [mask-image:radial-gradient(ellipse_70%_70%_at_50%_45%,black_30%,transparent_90%)]"
        aria-hidden="true"
      />

      {/* ── Main Hero Content Container (Minimalist MNC Layout) ── */}
      <div className="relative z-10 max-w-4xl w-full mx-auto flex flex-col items-center text-center">
        
        {/* Status Pill Badge */}
        <div className="hero-badge mb-6 flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-mono text-emerald-400 font-semibold shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            AVAILABLE FOR FULL-STACK &amp; MOBILE ROLES
          </span>
          <span className="text-xs font-mono text-slate-400 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10">
            <MapPin className="w-3.5 h-3.5 text-blue-400" />
            Coimbatore, India • Remote
          </span>
        </div>

        {/* Minimal Greeting */}
        <div className="hero-greeting mb-3">
          <span className="text-sm sm:text-base font-mono font-medium text-slate-400 tracking-wide uppercase">
            Hello, World! I&apos;m
          </span>
        </div>

        {/* Main Name — Clean, Modern, Monumental Typography */}
        <h1 className="hero-title-line text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-5 select-none">
          <span className="text-white">MUTHU </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
            MARIAPPAN
          </span>
        </h1>

        {/* Professional Role Title */}
        <div className="hero-role flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-sm sm:text-lg font-mono text-slate-300 font-semibold mb-6">
          <span className="text-blue-400">Full Stack Developer</span>
          <span className="text-slate-600">•</span>
          <span className="text-indigo-400">React Native Specialist</span>
          <span className="text-slate-600">•</span>
          <span className="text-cyan-400">Cloud &amp; Systems</span>
        </div>

        {/* Clean, Punchy Intro Bio */}
        <p className="hero-desc text-base sm:text-xl text-slate-300 leading-relaxed max-w-2xl mb-8 font-normal">
          Building high-performance web applications and mobile apps with clean architecture, thoughtful design, and reliable backend systems.
        </p>

        {/* Minimal Tech Focus Pills */}
        <div className="hero-tags flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10 max-w-xl">
          {['React.js', 'React Native', 'Node.js & Express', 'MongoDB', 'AWS Cloud', 'RESTful APIs'].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300 hover:border-blue-500/40 hover:text-white transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action CTAs & Social Links */}
        <div className="hero-cta flex flex-wrap items-center justify-center gap-3.5 mb-12">
          <div ref={primaryBtnRef}>
            <a
              href="#projects"
              data-cursor="WORK"
              className="premium-button premium-button-primary group"
            >
              <span>View Selected Work</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <div ref={secondaryBtnRef}>
            <a
              href="#contact"
              data-cursor="TALK"
              className="premium-button premium-button-secondary"
            >
              <span>Let&apos;s Connect</span>
            </a>
          </div>

          <a
            href={socials.resume}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="PDF"
            className="premium-button premium-button-secondary group flex items-center gap-2"
          >
            <FileText className="w-4 h-4 text-blue-400" />
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 transition-transform group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Quick Social Icon Row */}
        <div className="flex items-center gap-3 mb-12 text-slate-400">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="GIT"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-full bg-white/[0.03] border border-white/10 hover:border-white/20 hover:text-white hover:bg-white/[0.08] transition-all"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="IN"
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-full bg-white/[0.03] border border-white/10 hover:border-blue-400/40 hover:text-blue-400 hover:bg-white/[0.08] transition-all"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${socials.email}`}
            data-cursor="MAIL"
            aria-label="Send Email"
            className="p-2.5 rounded-full bg-white/[0.03] border border-white/10 hover:border-emerald-400/40 hover:text-emerald-400 hover:bg-white/[0.08] transition-all"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Real Metrics & Minimal Stats Strip */}
        <div className="hero-stats w-full max-w-2xl pt-8 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
          <div>
            <span className="text-xl sm:text-2xl font-bold text-white block font-mono">1+ Years</span>
            <span className="text-xs font-mono text-slate-400">Industry Experience</span>
          </div>
          <div className="border-x border-white/10">
            <span className="text-xl sm:text-2xl font-bold text-blue-400 block font-mono">6+ Projects</span>
            <span className="text-xs font-mono text-slate-400">Production &amp; Lab</span>
          </div>
          <div>
            <span className="text-xl sm:text-2xl font-bold text-indigo-400 block font-mono">MERN + Native</span>
            <span className="text-xs font-mono text-slate-400">Core Architecture</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
