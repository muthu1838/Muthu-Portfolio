import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills, skillCategories } from '../data/skills';
import { Cpu, Sparkles, Activity, Layers } from 'lucide-react';

const enlargedNodes = [
  { id: 'ai', label: 'AI & LLMs', sub: 'OpenAI / Gemini', x: 350, y: 70, color: '#818CF8' },
  { id: 'react', label: 'React.js', sub: 'Frontend Tier', x: 130, y: 120, color: '#60A5FA' },
  { id: 'native', label: 'React Native', sub: 'iOS & Android', x: 570, y: 120, color: '#818CF8' },
  { id: 'php', label: 'PHP / CMS', sub: 'WordPress & Custom', x: 90, y: 280, color: '#94A3B8' },
  { id: 'node', label: 'Node.js', sub: 'REST & Auth API', x: 610, y: 280, color: '#34D399' },
  { id: 'aws', label: 'AWS Cloud', sub: 'EC2, S3 & Cloud', x: 170, y: 430, color: '#FBBF24' },
  { id: 'mongo', label: 'MongoDB', sub: 'NoSQL & Aggregations', x: 530, y: 430, color: '#34D399' },
];

const TechStack = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredNode, setHoveredNode] = useState(null);

  const filteredSkills = selectedCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === selectedCategory);

  const activeNodeData = enlargedNodes.find(n => n.id === hoveredNode);

  return (
    <section
      id="tech"
      className="relative w-full max-w-7xl mx-auto px-6 md:px-12 pt-14 md:pt-16 pb-20 md:pb-24 border-t border-white/10 bg-[#050508]"
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
        <div className="flex flex-wrap gap-1.5 p-1.5 rounded-2xl bg-[#0D1117] border border-white/10 w-fit">
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

      {/* Main Grid: Significantly Enlarged SVG Architecture Graph + Skills Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 items-start">
        
        {/* Left: Interactive Connected SVG System Graph (Enlarged & Prominent) */}
        <div className="premium-card p-6 sm:p-8 flex flex-col items-center justify-between relative overflow-hidden bg-[#0D1117]/85 border border-white/10 shadow-2xl rounded-2xl">
          {/* Header Panel */}
          <div className="w-full flex items-center justify-between mb-4 border-b border-white/10 pb-3 text-xs font-mono">
            <span className="text-white font-semibold flex items-center gap-2">
              <Cpu className="w-4 h-4 text-blue-400" />
              SYSTEM_TOPOLOGY_V2
            </span>
            <span className="text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-md text-[11px] font-bold border border-emerald-500/25 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              HIGH_BANDWIDTH
            </span>
          </div>

          {/* SVG Canvas Topology (Enlarged ViewBox & Radius) */}
          <div className="relative w-full aspect-[7/5] min-h-[380px] sm:min-h-[440px] flex items-center justify-center my-2">
            <svg viewBox="0 0 700 500" className="w-full h-full overflow-visible">
              <defs>
                <radialGradient id="centerGlowVibrant" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
                  <stop offset="60%" stopColor="#6366F1" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#050508" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="orbitGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Background Orbital Guide Rings */}
              <circle cx="350" cy="250" r="160" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="6 4" />
              <circle cx="350" cy="250" r="210" fill="none" stroke="rgba(59,130,246,0.06)" strokeWidth="1" />

              {/* Connecting Links from Center */}
              {enlargedNodes.map((node) => {
                const isHovered = hoveredNode === node.id;
                return (
                  <g key={`link-${node.id}`}>
                    {/* Underlying line */}
                    <line
                      x1={350}
                      y1={250}
                      x2={node.x}
                      y2={node.y}
                      stroke={isHovered ? node.color : 'rgba(255,255,255,0.14)'}
                      strokeWidth={isHovered ? 2.5 : 1.2}
                      strokeDasharray={isHovered ? '5 3' : 'none'}
                      className="transition-all duration-300"
                    />
                    {/* Animated signal dot traveling outward */}
                    <circle r={isHovered ? '4' : '3'} fill={isHovered ? node.color : '#60A5FA'}>
                      <animateMotion
                        path={`M 350 250 L ${node.x} ${node.y}`}
                        dur={`${2.0 + (node.x % 4) * 0.3}s`}
                        repeatCount="indefinite"
                      />
                    </circle>
                    {/* Animated return packet */}
                    <circle r="2" fill="rgba(255,255,255,0.6)">
                      <animateMotion
                        path={`M ${node.x} ${node.y} L 350 250`}
                        dur={`${3.0 + (node.y % 3) * 0.4}s`}
                        repeatCount="indefinite"
                      />
                    </circle>
                  </g>
                );
              })}

              {/* Center Core Node: FULL STACK ARCHITECTURE */}
              <circle cx="350" cy="250" r="70" fill="url(#centerGlowVibrant)" />
              <circle cx="350" cy="250" r="54" fill="#0D1117" stroke="#3B82F6" strokeWidth="2.5" className="shadow-lg" />
              <circle cx="350" cy="250" r="48" fill="none" stroke="rgba(99,102,241,0.3)" strokeWidth="1" strokeDasharray="3 3" />
              <text
                x="350"
                y="244"
                textAnchor="middle"
                className="fill-white font-mono font-black text-[13px] tracking-wider"
              >
                FULL STACK
              </text>
              <text
                x="350"
                y="262"
                textAnchor="middle"
                className="fill-blue-400 font-mono text-[10px] font-bold tracking-widest uppercase"
              >
                ARCHITECTURE
              </text>

              {/* Enlarged Orbital Satellite Nodes */}
              {enlargedNodes.map((node) => {
                const isHovered = hoveredNode === node.id;
                return (
                  <g
                    key={node.id}
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                    className="cursor-pointer"
                  >
                    {/* Hover Aura */}
                    {isHovered && (
                      <circle cx={node.x} cy={node.y} r="48" fill={node.color} opacity="0.15" />
                    )}

                    {/* Outer Node Circle */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={isHovered ? 36 : 30}
                      fill={isHovered ? '#1E293B' : '#0F172A'}
                      stroke={isHovered ? node.color : 'rgba(255,255,255,0.2)'}
                      strokeWidth={isHovered ? 2.5 : 1.5}
                      className="transition-all duration-300"
                    />

                    {/* Main Label */}
                    <text
                      x={node.x}
                      y={node.y - (isHovered ? 3 : 1)}
                      textAnchor="middle"
                      className={`font-mono text-[11px] font-bold transition-colors duration-200 ${
                        isHovered ? 'fill-white' : 'fill-slate-200'
                      }`}
                    >
                      {node.label}
                    </text>

                    {/* Subtext Tag */}
                    <text
                      x={node.x}
                      y={node.y + (isHovered ? 13 : 11)}
                      textAnchor="middle"
                      className="font-mono text-[8px] fill-slate-400 font-medium tracking-tight"
                    >
                      {node.sub}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Active Hover Telemetry Bar */}
          <div className="w-full pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2 text-slate-400">
              <Activity className="w-3.5 h-3.5 text-blue-400" />
              <span>
                {activeNodeData ? (
                  <span className="text-white">
                    Inspecting: <strong className="text-blue-400">{activeNodeData.label}</strong> ({activeNodeData.sub})
                  </span>
                ) : (
                  'Hover over any node to inspect system flow'
                )}
              </span>
            </div>
            <span className="text-slate-400 hidden sm:inline-block">
              Core MERN + Cloud Ecosystem
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
