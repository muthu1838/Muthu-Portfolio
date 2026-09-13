import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { processSteps } from '../data/process';
import {
  Search,
  Layers,
  Cpu,
  Terminal,
  ShieldCheck,
  Rocket,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Zap
} from 'lucide-react';

const icons = [Search, Layers, Cpu, Terminal, ShieldCheck, Rocket];

const stageThemes = [
  {
    gradient: 'from-blue-500 to-indigo-500',
    border: 'border-blue-500/40',
    bg: 'bg-blue-500/10',
    text: 'text-blue-400',
    accent: '#3B82F6',
    glow: 'rgba(59, 130, 246, 0.25)',
  },
  {
    gradient: 'from-indigo-500 to-purple-500',
    border: 'border-indigo-500/40',
    bg: 'bg-indigo-500/10',
    text: 'text-indigo-400',
    accent: '#6366F1',
    glow: 'rgba(99, 102, 241, 0.25)',
  },
  {
    gradient: 'from-cyan-500 to-blue-500',
    border: 'border-cyan-500/40',
    bg: 'bg-cyan-500/10',
    text: 'text-cyan-400',
    accent: '#06B6D4',
    glow: 'rgba(6, 182, 212, 0.25)',
  },
  {
    gradient: 'from-emerald-500 to-teal-500',
    border: 'border-emerald-500/40',
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-400',
    accent: '#10B981',
    glow: 'rgba(16, 185, 129, 0.25)',
  },
  {
    gradient: 'from-amber-500 to-orange-500',
    border: 'border-amber-500/40',
    bg: 'bg-amber-500/10',
    text: 'text-amber-400',
    accent: '#F59E0B',
    glow: 'rgba(245, 158, 11, 0.25)',
  },
  {
    gradient: 'from-rose-500 to-pink-500',
    border: 'border-rose-500/40',
    bg: 'bg-rose-500/10',
    text: 'text-rose-400',
    accent: '#F43F5E',
    glow: 'rgba(244, 63, 94, 0.25)',
  },
];

const ProcessSection = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const currentStep = processSteps[activeStepIndex];
  const currentTheme = stageThemes[activeStepIndex % stageThemes.length];
  const CurrentIcon = icons[activeStepIndex % icons.length];

  const handleNext = () => {
    setActiveStepIndex((prev) => (prev + 1) % processSteps.length);
  };

  const handlePrev = () => {
    setActiveStepIndex((prev) => (prev - 1 + processSteps.length) % processSteps.length);
  };

  return (
    <section
      id="process"
      className="relative w-full max-w-7xl mx-auto px-6 md:px-12 py-28 md:py-36 border-t border-white/10 bg-[#050508] overflow-hidden"
    >
      {/* Editorial Section Index */}
      <div className="flex items-center gap-3 mb-10">
        <span className="text-xs font-mono text-blue-400 font-bold tracking-widest bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
          05 // ENGINEERING METHODOLOGY &amp; WORKFLOW
        </span>
        <div className="h-px flex-1 max-w-[120px] bg-blue-500/20" />
      </div>

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
            How I Build Products
          </h2>
          <p className="text-base text-slate-300 max-w-xl">
            A disciplined, end-to-end engineering workflow designed for code reliability, performance, and scalability.
          </p>
        </div>

        {/* Phase Step Counter */}
        <div className="flex items-center gap-3 bg-[#0D1117] border border-white/10 px-4 py-2 rounded-2xl">
          <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
            <span className="text-white font-bold">{currentStep.step}</span>
            <span>/</span>
            <span>06</span>
          </div>
          <div className="w-24 h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${currentTheme.gradient} transition-all duration-300 rounded-full`}
              style={{ width: `${((activeStepIndex + 1) / processSteps.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* ── Interactive Process Pipeline Stepper Bar ── */}
      <div className="mb-12 overflow-x-auto pb-2 no-scrollbar">
        <div className="flex items-center gap-2 min-w-max p-1.5 rounded-2xl bg-[#0D1117]/90 border border-white/10">
          {processSteps.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            const StepIcon = icons[idx % icons.length];
            const theme = stageThemes[idx % stageThemes.length];

            return (
              <button
                key={step.code}
                onClick={() => setActiveStepIndex(idx)}
                data-cursor="STAGE"
                className={`relative px-4 py-2.5 rounded-xl text-xs font-mono transition-all flex items-center gap-2.5 ${
                  isActive
                    ? 'bg-white/10 text-white font-bold border border-white/20 shadow-lg'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeProcessPill"
                    className={`absolute inset-0 rounded-xl bg-gradient-to-r ${theme.gradient} opacity-20 border ${theme.border}`}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <div className={`w-5 h-5 rounded-md flex items-center justify-center ${isActive ? theme.text : 'text-slate-400'}`}>
                  <StepIcon className="w-3.5 h-3.5" />
                </div>
                <span className="text-[10px] font-bold opacity-75">{step.step}</span>
                <span className="font-semibold tracking-wide">{step.code}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── New Two-Column Modern Workflow Layout ── */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.95fr] gap-8 items-stretch">
        
        {/* Left: Active Stage Interactive Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep.step}
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className={`premium-card p-8 sm:p-10 flex flex-col justify-between bg-[#0D1117]/95 border ${currentTheme.border} relative overflow-hidden rounded-2xl shadow-2xl`}
            style={{
              boxShadow: `0 20px 50px -10px ${currentTheme.glow}`,
            }}
          >
            {/* Ambient Background Accent Glow */}
            <div
              className={`pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-br ${currentTheme.gradient} opacity-15 blur-3xl`}
              aria-hidden="true"
            />

            <div>
              {/* Top Header Strip */}
              <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-2xl ${currentTheme.bg} border ${currentTheme.border} flex items-center justify-center ${currentTheme.text} shadow-inner`}>
                    <CurrentIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 font-semibold uppercase tracking-wider block">
                      STAGE {currentStep.step} // 06
                    </span>
                    <h3 className="text-lg font-mono font-bold text-white tracking-wide">
                      {currentStep.code}
                    </h3>
                  </div>
                </div>

                <span className={`text-xs font-mono font-bold px-3 py-1.5 rounded-xl border ${currentTheme.bg} ${currentTheme.border} ${currentTheme.text}`}>
                  ACTIVE WORKFLOW
                </span>
              </div>

              {/* Title & Architectural Subtitle */}
              <h4 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight">
                {currentStep.title}
              </h4>
              <p className={`text-sm font-mono ${currentTheme.text} mb-6 font-medium`}>
                → {currentStep.subtitle}
              </p>

              {/* Deep-dive Narrative */}
              <p className="text-base text-slate-300 leading-relaxed mb-8">
                {currentStep.description}
              </p>

              {/* Key Deliverables Matrix */}
              <div className="p-5 rounded-xl bg-[#07090E] border border-white/10 mb-8">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-3.5 font-semibold flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  VERIFIED DELIVERABLES &amp; ARTIFACTS
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {currentStep.deliverables.map((item, dIdx) => (
                    <div
                      key={dIdx}
                      className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10 flex items-center gap-2 text-xs font-mono text-slate-200 font-medium"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Navigation & Controls */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  data-cursor="PREV"
                  aria-label="Previous step"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all flex items-center gap-1.5 text-xs font-mono"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Prev Stage</span>
                </button>
                <button
                  onClick={handleNext}
                  data-cursor="NEXT"
                  aria-label="Next step"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all flex items-center gap-1.5 text-xs font-mono"
                >
                  <span className="hidden sm:inline">Next Stage</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                System Reliability Standard
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Right: Quick Stage List Navigator */}
        <div className="flex flex-col gap-3 justify-between">
          {processSteps.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            const StepIcon = icons[idx % icons.length];
            const theme = stageThemes[idx % stageThemes.length];

            return (
              <div
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                data-cursor="VIEW"
                className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer flex items-center justify-between gap-4 ${
                  isActive
                    ? 'bg-[#111620] border-blue-500/50 shadow-md ring-1 ring-blue-500/30'
                    : 'bg-[#0D1117]/70 border-white/10 hover:border-white/20 hover:bg-[#0D1117]'
                }`}
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                    isActive ? `${theme.bg} ${theme.text} border ${theme.border}` : 'bg-white/5 text-slate-400'
                  }`}>
                    <StepIcon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-slate-400 font-bold">
                        {step.step}
                      </span>
                      <span className={`text-xs font-mono font-bold truncate ${isActive ? 'text-white' : 'text-slate-300'}`}>
                        {step.code}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 truncate mt-0.5">
                      {step.title}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                    isActive ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20 font-bold' : 'text-slate-500'
                  }`}>
                    {isActive ? 'ACTIVE' : 'READY'}
                  </span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isActive ? 'text-blue-400 translate-x-1' : 'text-slate-600'}`} />
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
