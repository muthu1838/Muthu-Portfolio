import { useRef, useEffect } from 'react';
import { experiences } from '../data/experience';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building2, Calendar, MapPin, CheckCircle } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Experience = () => {
  const containerRef = useRef(null);
  const lineProgressRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Animate vertical timeline progress line
      if (lineProgressRef.current && containerRef.current) {
        gsap.fromTo(
          lineProgressRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top center+=100',
              end: 'bottom center+=100',
              scrub: 0.5,
            },
          }
        );
      }

      // Animate each milestone card reveal
      const items = gsap.utils.toArray('.experience-card');
      items.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="experience"
      className="relative w-full max-w-5xl mx-auto px-6 md:px-12 py-28 md:py-36 border-t border-white/10 bg-[#050508]"
    >
      {/* Editorial Section Index */}
      <div className="flex items-center gap-3 mb-10">
        <span className="text-xs font-mono text-blue-400 font-bold tracking-widest bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
          03 // CAREER &amp; PROFESSIONAL TRAJECTORY
        </span>
        <div className="h-px flex-1 max-w-[120px] bg-blue-500/20" />
      </div>

      {/* Header */}
      <div className="mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Experience &amp; Industry Impact
        </h2>
        <p className="text-base text-slate-300 max-w-2xl font-normal">
          Track record in building full-stack applications, mobile apps with React Native, and enterprise plugin integrations.
        </p>
      </div>

      {/* Vertical Timeline Structure */}
      <div className="relative pl-6 md:pl-10">
        {/* Background Track Line */}
        <div className="absolute left-0 top-3 bottom-3 w-[2px] bg-slate-800 rounded-full" />

        {/* Animated Glowing Progress Line */}
        <div
          ref={lineProgressRef}
          className="absolute left-0 top-3 bottom-3 w-[2px] bg-gradient-to-b from-blue-500 via-indigo-500 to-cyan-400 rounded-full origin-top shadow-[0_0_12px_rgba(59,130,246,0.8)]"
        />

        {/* Experience Milestone Cards */}
        <div className="space-y-12 md:space-y-16">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-card relative">
              {/* Timeline Pin Indicator */}
              <div className="absolute -left-[31px] md:-left-[47px] top-6 w-3.5 h-3.5 rounded-full bg-[#050508] border-2 border-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.9)] flex items-center justify-center z-10">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              </div>

              {/* Card Container */}
              <div className="premium-card p-6 md:p-8 bg-[#0D1117]/85 border border-white/10 hover:border-blue-500/40 transition-all duration-300 shadow-xl">
                
                {/* Meta Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-5 border-b border-white/10">
                  <div>
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold bg-blue-500/10 text-blue-400 border border-blue-500/25">
                        {exp.status}
                      </span>
                      <span className="text-xs font-mono text-slate-400 flex items-center gap-1 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        {exp.period}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="text-left sm:text-right font-mono text-xs text-slate-400">
                    <div className="text-blue-400 font-bold flex items-center sm:justify-end gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-blue-400" />
                      {exp.company}
                    </div>
                    <div className="text-[11px] text-slate-400 flex items-center sm:justify-end gap-1 mt-0.5 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm md:text-base text-slate-300 leading-relaxed mb-6 font-normal">
                  {exp.summary}
                </p>

                {/* Bulleted Achievements */}
                <div className="space-y-2.5 mb-6">
                  {exp.achievements.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 leading-normal">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Technology Tags */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-300 hover:text-white hover:border-blue-500/30 transition-colors font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
