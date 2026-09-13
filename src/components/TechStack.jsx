import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills, skillCategories, ecosystemNodes } from '../data/skills';
import { Cpu } from 'lucide-react';

const TechStack = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredNode, setHoveredNode] = useState(null);

  const filteredSkills = selectedCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section
      id="tech"
      className="relative w-full max-w-7xl mx-auto px-6 md:px-12 py-28 md:py-36 border-t border-white/10 bg-[#050508]"
    >
      {/* Editorial Section Index */}
      <div className="flex items-center gap-3 mb-10">
        <span className="text-xs font-mono text-blue-400 font-bold tracking-widest bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
          02 // TECHNOLOGIES &amp; SYSTEM ECOSYSTEM
        </span>
        <div className="h-px flex-1 max-w-[120px] bg-blue-500/20" />
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Technologies &amp; Tools
          </h2>
          <p className="text-base text-slate-300 max-w-xl">
            A comprehensive list of modern frameworks, databases, and cloud tools I use to build performant, reliable applications.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-1.5 p-1 rounded-2xl bg-[#0D1117] border border-white/10 w-fit">
          {skillCategories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                data-cursor="FILTER"
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Grid: Connected SVG Architecture Graph + Skills Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-10 items-start">
        
        {/* Left: Interactive Connected SVG System Graph */}
        <div className="premium-card p-6 flex flex-col items-center justify-center relative overflow-hidden bg-[#0D1117]/80 border border-white/10 shadow-lg">
          <div className="w-full flex items-center justify-between mb-4 border-b border-white/10 pb-3 text-xs font-mono">
            <span className="text-white font-semibold flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-blue-400" />
              SYSTEM_TOPOLOGY
            </span>
            <span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded text-[10px] font-bold border border-emerald-500/25">
              CONNECTED
            </span>
          </div>

          {/* SVG Canvas Topology */}
          <div className="relative w-full aspect-square max-w-[320px] flex items-center justify-center">
            <svg viewBox="0 0 500 400" className="w-full h-full overflow-visible">
              <defs>
                <radialGradient id="centerGlowVibrant" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Connecting Lines from Center */}
              {ecosystemNodes.filter(n => n.type !== 'center').map((node) => {
                const isHovered = hoveredNode === node.id;
                return (
                  <g key={`link-${node.id}`}>
                    <line
                      x1={250}
                      y1={200}
                      x2={node.x}
                      y2={node.y}
                      stroke={isHovered ? '#60A5FA' : 'rgba(255,255,255,0.12)'}
                      strokeWidth={isHovered ? 2 : 1}
                      strokeDasharray={isHovered ? '4 2' : 'none'}
                      className="transition-all duration-300"
                    />
                    {/* Animated signal dot */}
                    <circle r="2.5" fill={isHovered ? '#60A5FA' : '#818CF8'}>
                      <animateMotion
                        path={`M 250 200 L ${node.x} ${node.y}`}
                        dur={`${2.2 + (node.x % 3)}s`}
                        repeatCount="indefinite"
                      />
                    </circle>
                  </g>
                );
              })}

              {/* Center Node: FULL STACK */}
              <circle cx="250" cy="200" r="46" fill="url(#centerGlowVibrant)" />
              <circle cx="250" cy="200" r="38" fill="#0D1117" stroke="#3B82F6" strokeWidth="2" />
              <text
                x="250"
                y="196"
                textAnchor="middle"
                className="fill-white font-mono font-bold text-[11px] tracking-wider"
              >
                FULL STACK
              </text>
              <text
                x="250"
                y="212"
                textAnchor="middle"
                className="fill-blue-400 font-mono text-[9px] font-semibold"
              >
                ARCHITECTURE
              </text>

              {/* Orbital Nodes */}
              {ecosystemNodes.filter(n => n.type !== 'center').map((node) => {
                const isHovered = hoveredNode === node.id;
                return (
                  <g
                    key={node.id}
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                    className="cursor-pointer"
                  >
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={isHovered ? 26 : 22}
                      fill={isHovered ? '#1E293B' : '#0F172A'}
                      stroke={isHovered ? '#38BDF8' : 'rgba(255,255,255,0.15)'}
                      strokeWidth={isHovered ? 2 : 1}
                      className="transition-all duration-300"
                    />
                    <text
                      x={node.x}
                      y={node.y + 4}
                      textAnchor="middle"
                      className={`font-mono text-[9px] font-bold transition-colors duration-200 ${
                        isHovered ? 'fill-blue-300' : 'fill-slate-300'
                      }`}
                    >
                      {node.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="w-full pt-4 border-t border-white/10 text-center">
            <span className="text-[11px] font-mono text-slate-400">
              Interactive node topology · Hover nodes to inspect routing
            </span>
          </div>
        </div>

        {/* Right: Filterable Technology Items Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 gap-3.5"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((tech) => (
              <motion.div
                key={tech.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="premium-card p-4 flex items-center gap-3.5 group bg-[#0D1117]/80 border border-white/10 hover:border-blue-500/40 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-2 shrink-0 group-hover:scale-105 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    loading="lazy"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-white truncate group-hover:text-blue-300 transition-colors">
                      {tech.name}
                    </h3>
                    {tech.highlight && (
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0 shadow-[0_0_6px_rgba(96,165,250,0.8)]" />
                    )}
                  </div>
                  <p className="text-xs text-slate-400 truncate mt-0.5">
                    {tech.subtext}
                  </p>
                </div>

                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wide shrink-0 hidden sm:block font-medium">
                  {tech.category}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default TechStack;
