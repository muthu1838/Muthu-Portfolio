import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import {
  ArrowUpRight,
  Code2,
  Database,
  Server,
  Sparkles,
  MapPin,
  Terminal,
  Activity,
  Layers,
  FileText
} from 'lucide-react';
import { socials } from '../data/socials';
import { useMagnetic } from '../hooks/useMagnetic';

const Hero = () => {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const canvasRef = useRef(null);
  const [activeTab, setActiveTab] = useState('architecture');
  const [copiedStatus, setCopiedStatus] = useState(false);

  const primaryBtnRef = useMagnetic(0.2);
  const secondaryBtnRef = useMagnetic(0.2);

  // ── GSAP Entrance Timeline & Mouse 3D Parallax ──
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isDesktop = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    const ctx = gsap.context(() => {
      if (!prefersReducedMotion) {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.fromTo('.hero-badge', { opacity: 0, y: -16 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.1 })
          .fromTo('.hero-title-line-1', { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.3')
          .fromTo('.hero-title-line-2', { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.55')
          .fromTo('.hero-headline', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
          .fromTo('.hero-desc', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
          .fromTo('.hero-cta', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 }, '-=0.4')
          .fromTo('.hero-stats', { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.3')
          .fromTo('.hero-system-visual', { opacity: 0, x: 30, scale: 0.96 }, { opacity: 1, x: 0, scale: 1, duration: 0.85 }, '-=0.7');
      }

      // 3D Parallax Mouse Tilt on Developer Visual
      if (isDesktop && !prefersReducedMotion && cardRef.current) {
        const card = cardRef.current;
        const setCardRotateX = gsap.quickTo(card, 'rotationX', { duration: 0.6, ease: 'power2.out' });
        const setCardRotateY = gsap.quickTo(card, 'rotationY', { duration: 0.6, ease: 'power2.out' });
        const setCardY = gsap.quickTo(card, 'y', { duration: 0.6, ease: 'power2.out' });

        const handleMouseMove = (e) => {
          const rect = containerRef.current?.getBoundingClientRect();
          if (!rect) return;
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;

          setCardRotateX(-y * 10);
          setCardRotateY(x * 10);
          setCardY(y * 8);
        };

        const handleMouseLeave = () => {
          setCardRotateX(0);
          setCardRotateY(0);
          setCardY(0);
        };

        const heroEl = containerRef.current;
        heroEl?.addEventListener('mousemove', handleMouseMove, { passive: true });
        heroEl?.addEventListener('mouseleave', handleMouseLeave);

        return () => {
          heroEl?.removeEventListener('mousemove', handleMouseMove);
          heroEl?.removeEventListener('mouseleave', handleMouseLeave);
        };
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

    const particleCount = window.innerWidth < 768 ? 18 : 32;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      radius: Math.random() * 1.2 + 0.5,
      alpha: Math.random() * 0.25 + 0.1,
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

          if (dist < 120) {
            ctx.strokeStyle = `rgba(59, 130, 246, ${(1 - dist / 120) * 0.08})`;
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
      className="relative w-full min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 px-6 md:px-12 overflow-hidden bg-[#050508]"
    >
      {/* ── Background Ambient Canvas & Glow ── */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 z-0 opacity-60"
        aria-hidden="true"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-glow" aria-hidden="true" />

      {/* Subtle Grid Overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-tech-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_45%,black_40%,transparent_90%)]"
        aria-hidden="true"
      />

      {/* ── Main Hero Content Grid ── */}
      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-14 items-center">
        
        {/* ───── LEFT: Editorial Kinetic Typography & Actions ───── */}
        <div className="flex flex-col">
          {/* Status Badge */}
          <div className="hero-badge mb-6 flex items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-mono text-emerald-400 font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              OPEN FOR FULL-STACK &amp; MOBILE ROLES
            </span>
            <span className="text-[11px] font-mono text-slate-400 hidden sm:inline-flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              Coimbatore, India
            </span>
          </div>

          {/* Name — Bold Kinetic Typography */}
          <h1 className="mb-4 tracking-[-0.04em] font-black text-white select-none">
            <div className="overflow-hidden">
              <span className="hero-title-line-1 block text-[clamp(2.5rem,6.5vw,4.8rem)] leading-[0.92] text-white">
                MUTHU
              </span>
            </div>
            <div className="overflow-hidden mt-1">
              <span className="hero-title-line-2 block text-[clamp(2.5rem,6.5vw,4.8rem)] leading-[0.92] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">
                MARIAPPAN P.
              </span>
            </div>
          </h1>

          {/* Role Badges */}
          <div className="hero-headline flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono text-slate-200 font-semibold mb-6">
            <span className="text-blue-400">FULL STACK DEVELOPER</span>
            <span className="text-slate-600">•</span>
            <span className="text-indigo-400">REACT NATIVE</span>
            <span className="text-slate-600">•</span>
            <span className="text-cyan-400">SYSTEMS ARCHITECTURE</span>
          </div>

          {/* Narrative Statement */}
          <p className="hero-desc text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mb-9 font-normal">
            Building modern web and mobile applications with clean architecture, thoughtful interfaces, and reliable backend systems.
          </p>

          {/* Action CTAs */}
          <div className="hero-cta flex flex-wrap items-center gap-3.5 mb-10">
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

          {/* Real Metrics & Stack Badges */}
          <div className="hero-stats pt-6 border-t border-white/10 flex flex-wrap items-center gap-8 text-xs font-mono">
            <div>
              <span className="text-lg font-bold text-white block">1+ Years</span>
              <span className="text-slate-400">Industry Exp</span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div>
              <span className="text-lg font-bold text-blue-400 block">6+ Projects</span>
              <span className="text-slate-400">Production &amp; Lab</span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div>
              <span className="text-lg font-bold text-indigo-400 block">MERN + Native</span>
              <span className="text-slate-400">Core Architecture</span>
            </div>
          </div>
        </div>

        {/* ───── RIGHT: 3D Developer Architecture System Visual ───── */}
        <div className="hero-system-visual perspective-[1200px] w-full">
          <div
            ref={cardRef}
            className="w-full rounded-2xl bg-[#0D1117]/90 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-blue-500/40"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Window Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#161B22] border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 text-xs font-mono text-slate-300 font-medium">
                  system_pipeline.config
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  SYS_ONLINE
                </span>
              </div>
            </div>

            {/* Interactive System Tabs */}
            <div className="flex border-b border-white/10 bg-[#0A0D12] px-3 pt-2 gap-1 overflow-x-auto no-scrollbar">
              {[
                { id: 'architecture', label: 'Architecture', icon: Layers },
                { id: 'telemetry', label: 'Telemetry', icon: Activity },
                { id: 'terminal', label: 'Terminal', icon: Terminal },
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  data-cursor="TAB"
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-t-lg text-xs font-mono transition-all ${
                    activeTab === id
                      ? 'bg-[#0D1117] text-white border-t border-x border-white/10 font-bold text-blue-400'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${activeTab === id ? 'text-blue-400' : 'text-slate-400'}`} />
                  <span>{label}</span>
                </button>
              ))}
            </div>

            {/* Tab Contents */}
            <div className="p-5 min-h-[290px] flex flex-col justify-between bg-[#0D1117]">
              {activeTab === 'architecture' && (
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <span className="text-slate-400 font-semibold">// FULL STACK SERVICE PIPELINE</span>
                    <span className="text-blue-400 font-bold">MERN · AWS</span>
                  </div>

                  {/* Architecture Flow */}
                  <div className="space-y-2 pt-1">
                    <div className="p-2.5 rounded-xl bg-blue-500/5 border border-blue-500/20 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Code2 className="w-3.5 h-3.5 text-blue-400" />
                        <span className="text-white font-medium">React / React Native</span>
                      </div>
                      <span className="text-[10px] text-blue-300">Client Tier &amp; State</span>
                    </div>

                    <div className="flex justify-center my-0.5">
                      <span className="text-[10px] text-indigo-400 font-bold">↓ REST APIs &amp; JWT Auth</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-emerald-500/5 border border-emerald-500/20 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Server className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-white font-medium">Node.js &amp; Express</span>
                      </div>
                      <span className="text-[10px] text-emerald-300">Service &amp; Auth Gateway</span>
                    </div>

                    <div className="flex justify-center my-0.5">
                      <span className="text-[10px] text-indigo-400 font-bold">↓ MongoDB &amp; AWS Infrastructure</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-cyan-500/5 border border-cyan-500/20 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Database className="w-3.5 h-3.5 text-cyan-400" />
                        <span className="text-white font-medium">Data &amp; Cloud Layer</span>
                      </div>
                      <span className="text-[10px] text-cyan-300">MongoDB · AWS Cloud</span>
                    </div>
                  </div>

                  <div className="mt-2 p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-between text-[11px]">
                    <span className="text-slate-300">AI Integration:</span>
                    <span className="text-indigo-300 font-medium flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-indigo-400" />
                      OpenAI &amp; Gemini APIs
                    </span>
                  </div>
                </div>
              )}

              {activeTab === 'telemetry' && (
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <span className="text-slate-400 font-semibold">// PRODUCTION TELEMETRY</span>
                    <span className="text-emerald-400 font-bold">ALL_PASSING</span>
                  </div>

                  <div className="space-y-2.5">
                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span className="text-slate-300">API Gateway Latency</span>
                        <span className="text-emerald-400 font-semibold">38.4 ms (Optimal)</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div className="w-[88%] h-full bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span className="text-slate-300">UI Frame Budget</span>
                        <span className="text-blue-400 font-semibold">60 FPS (Hardware Accel)</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div className="w-[96%] h-full bg-gradient-to-r from-indigo-500 to-blue-400 rounded-full" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span className="text-slate-300">Database Index Efficiency</span>
                        <span className="text-cyan-400 font-semibold">Indexed &amp; Optimized</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div className="w-[92%] h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full" />
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 text-[10px] text-slate-400 flex justify-between items-center">
                    <span>Host: Linux / Node.js 20+</span>
                    <span className="font-semibold text-emerald-400">Uptime: 99.98%</span>
                  </div>
                </div>
              )}

              {activeTab === 'terminal' && (
                <div className="font-mono text-xs space-y-1.5 text-slate-200 bg-[#0A0D12] p-3 rounded-xl border border-white/10">
                  <p className="text-slate-500">$ muthu --status</p>
                  <p className="text-white font-semibold">→ Engineer: Muthu Mariappan P.</p>
                  <p className="text-slate-300">→ Role: Software Developer @ Madhura Tech</p>
                  <p className="text-slate-300">→ Stack: Full Stack (MERN), React Native, AWS</p>
                  <p className="text-emerald-400 font-semibold">✓ Ready for enterprise deployments.</p>
                  <div className="flex items-center gap-1.5 pt-1">
                    <span className="text-blue-400">$</span>
                    <span className="w-2 h-4 bg-blue-400 animate-pulse" />
                  </div>
                </div>
              )}

              {/* Panel Footer */}
              <div className="pt-4 mt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>muthu1838/portfolio</span>
                </div>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText('npx muthu-dev');
                    setCopiedStatus(true);
                    setTimeout(() => setCopiedStatus(false), 2000);
                  }}
                  data-cursor="COPY"
                  className="hover:text-blue-400 transition-colors flex items-center gap-1 font-medium"
                >
                  <span>{copiedStatus ? 'Copied CLI Command!' : 'Copy CLI: npx muthu-dev'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
