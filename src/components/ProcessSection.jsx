import { useRef, useEffect } from 'react';
import { processSteps } from '../data/process';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, Layers, Cpu, ShieldCheck, Terminal, Rocket, Search } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const icons = [Search, Layers, Cpu, Terminal, ShieldCheck, Rocket];
const stepGradients = [
  'from-blue-500/20 to-indigo-500/20 text-blue-400 border-blue-500/30',
  'from-indigo-500/20 to-purple-500/20 text-indigo-400 border-indigo-500/30',
  'from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30',
  'from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30',
  'from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30',
  'from-rose-500/20 to-pink-500/20 text-rose-400 border-rose-500/30',
];

const ProcessSection = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isDesktop = window.matchMedia('(min-width: 1024px)').matches;

    if (prefersReducedMotion || !isDesktop) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track || !containerRef.current) return;

      const totalScroll = track.scrollWidth - track.clientWidth;

      gsap.to(track, {
        x: -totalScroll,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 0.8,
          start: 'top top',
          end: () => `+=${totalScroll + 250}`,
          invalidateOnRefresh: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="process"
      className="relative w-full py-28 md:py-36 border-t border-white/10 overflow-hidden bg-[#050508]"
    >
      {/* Editorial Header (Unclipped & Generous Margin) */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono text-blue-400 font-bold tracking-widest bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            05 // ENGINEERING PROCESS &amp; METHODOLOGY
          </span>
          <div className="h-px flex-1 max-w-[120px] bg-blue-500/20" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
              How I Build Products
            </h2>
            <p className="text-base text-slate-300 max-w-xl">
              A disciplined, end-to-end engineering workflow designed for code reliability, performance, and scalability.
            </p>
          </div>
          <div className="text-xs font-mono text-blue-400 hidden lg:flex items-center gap-1.5 font-medium">
            <span>Scroll vertically to traverse workflow</span>
            <span>→</span>
          </div>
        </div>
      </div>

      {/* Process Container (Horizontal on Desktop, Vertical on Mobile/Tablet) */}
      <div className="w-full px-6 md:px-12 relative z-10">
        <div
          ref={trackRef}
          className="flex flex-col lg:flex-row gap-6 lg:gap-8 w-full lg:w-max lg:pl-12 lg:pr-24"
        >
          {processSteps.map((step, index) => {
            const Icon = icons[index % icons.length];
            const badgeStyle = stepGradients[index % stepGradients.length];

            return (
              <div
                key={step.step}
                className="w-full lg:w-[380px] shrink-0 premium-card p-8 flex flex-col justify-between bg-[#0D1117]/90 border border-white/10 shadow-xl hover:border-blue-500/40 hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)] transition-all duration-300 group"
              >
                <div>
                  {/* Step Code & Icon Header */}
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${badgeStyle} flex items-center justify-center border group-hover:scale-105 transition-transform`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-mono font-bold text-white">
                        {step.code}
                      </span>
                    </div>
                    <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-lg border bg-white/5 ${badgeStyle.split(' ')[2]}`}>
                      STEP {step.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs font-mono text-slate-400 mb-4 font-medium">
                    {step.subtitle}
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables */}
                <div className="pt-4 border-t border-white/10 space-y-2">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-2 font-semibold">
                    Key Deliverables
                  </span>
                  {step.deliverables.map((d, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs font-mono text-slate-200 font-medium">
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
