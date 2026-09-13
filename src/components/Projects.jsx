import { useState, useRef, useEffect } from 'react';
import { projects } from '../data/projects';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowUpRight,
  MapPin,
  Sparkles,
  Smartphone,
  Globe,
  Layers,
  Heart,
  MessageCircle,
  Share2,
  Compass,
  Check,
  RefreshCw,
  Laptop
} from 'lucide-react';
import { GithubIcon } from './ui/Icons';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/* ─────────────────────────────────────────────────────────────────────────────
   TAILORED INTERACTIVE MOCKUPS (VIBRANT MODERN STACK)
───────────────────────────────────────────────────────────────────────────── */

// 01. Workspace Management Interactive Mockup
const WorkspaceMockup = () => {
  const [activeView, setActiveView] = useState('web');
  const [bookedDesk, setBookedDesk] = useState('Desk A-04');

  const desks = [
    { id: 'A-01', status: 'occupied', user: 'Dev Team' },
    { id: 'A-02', status: 'available' },
    { id: 'A-03', status: 'occupied', user: 'Mobile Lead' },
    { id: 'A-04', status: 'selected' },
    { id: 'B-01', status: 'available' },
    { id: 'B-02', status: 'available' },
  ];

  return (
    <div className="w-full max-w-md rounded-2xl bg-[#0D1117] border border-white/10 p-5 shadow-2xl backdrop-blur-md flex flex-col gap-4">
      {/* Platform Switcher */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/5 border border-white/10 text-[11px] font-mono">
          <button
            onClick={() => setActiveView('web')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg transition-colors ${
              activeView === 'web' ? 'bg-blue-600 text-white font-bold shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Laptop className="w-3 h-3" /> Web Admin
          </button>
          <button
            onClick={() => setActiveView('mobile')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg transition-colors ${
              activeView === 'mobile' ? 'bg-blue-600 text-white font-bold shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Smartphone className="w-3 h-3" /> React Native
          </button>
        </div>
        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/25 flex items-center gap-1 font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          API SYNCED
        </span>
      </div>

      {/* Interactive Desk Grid */}
      <div>
        <div className="flex justify-between text-xs text-slate-400 font-mono mb-2">
          <span>FLOORPLAN // BAY 4</span>
          <span className="text-blue-400 font-bold">Selected: {bookedDesk}</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {desks.map((d) => {
            const isSelected = bookedDesk === `Desk ${d.id}`;
            return (
              <button
                key={d.id}
                onClick={() => setBookedDesk(`Desk ${d.id}`)}
                className={`p-2.5 rounded-xl border text-left transition-all text-xs font-mono ${
                  isSelected
                    ? 'bg-blue-600/20 border-blue-500 text-white shadow-sm font-bold'
                    : d.status === 'occupied'
                    ? 'bg-white/5 border-white/5 text-slate-500 cursor-not-allowed opacity-60'
                    : 'bg-white/5 border-white/10 text-slate-300 hover:border-blue-500/40 hover:bg-white/10'
                }`}
              >
                <div className="font-bold text-[11px]">{d.id}</div>
                <div className="text-[9px] truncate text-inherit opacity-80">
                  {isSelected ? '★ Reserved' : d.status === 'occupied' ? d.user : 'Available'}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-400">
        <span>Node.js / Express REST Backend</span>
        <span className="text-blue-400 font-bold">MERN Stack</span>
      </div>
    </div>
  );
};

// 02. Text-to-Image Generator Interactive Mockup
const GenAiMockup = () => {
  const [promptIndex, setPromptIndex] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);

  const prompts = [
    'Clean minimalist architectural glass cube in morning sunlight, 8k resolution, modern design',
    'Futuristic developer interface floating in deep space studio, ultra crisp detail, blue neon accents',
    'Isometric 3D cloud server cluster with clean fiber optics and glowing cyan indicators'
  ];

  const triggerGen = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setPromptIndex((prev) => (prev + 1) % prompts.length);
      setIsGenerating(false);
    }, 600);
  };

  return (
    <div className="w-full max-w-md rounded-2xl bg-[#0D1117] border border-white/10 p-5 shadow-2xl backdrop-blur-md flex flex-col gap-4">
      <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs font-mono">
        <span className="text-white font-bold flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          NEURAL_SYNTHESIS_PIPELINE
        </span>
        <span className="text-indigo-400 text-[10px] font-bold">AI-API CONNECTED</span>
      </div>

      {/* Visual Canvas Frame */}
      <div className="relative w-full aspect-video rounded-xl bg-gradient-to-br from-indigo-950/40 via-[#0D1117] to-blue-950/40 border border-indigo-500/20 overflow-hidden flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0%,transparent_70%)] animate-pulse" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px]" />

        <div className="relative z-10 text-center flex flex-col items-center gap-2">
          {isGenerating ? (
            <div className="flex flex-col items-center gap-2">
              <RefreshCw className="w-6 h-6 text-indigo-400 animate-spin" />
              <span className="text-xs font-mono text-slate-300 font-semibold">Synthesizing Prompt...</span>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 shadow-sm">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-slate-200 max-w-[240px] truncate font-medium">
                &ldquo;{prompts[promptIndex]}&rdquo;
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Prompt Trigger */}
      <div className="flex items-center gap-2">
        <input
          type="text"
          readOnly
          value={prompts[promptIndex]}
          className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-1.5 text-xs text-slate-200 font-mono focus:outline-none truncate"
        />
        <button
          onClick={triggerGen}
          disabled={isGenerating}
          className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-mono font-bold transition-all shrink-0 shadow-sm"
        >
          {isGenerating ? '...' : 'Cycle Prompt'}
        </button>
      </div>
    </div>
  );
};

// 03. Smart Nearby Places Recommender Interactive Mockup
const NearbyPlacesMockup = () => {
  const [activeFilter, setActiveFilter] = useState('tech');

  const places = [
    { name: 'Innovation Hub', dist: '0.8 km', cat: 'tech', lat: '11.0168° N, 76.9558° E' },
    { name: 'Botanical Park', dist: '1.4 km', cat: 'parks', lat: '11.0210° N, 76.9602° E' },
    { name: 'Artisanal Cafe', dist: '2.1 km', cat: 'dining', lat: '11.0125° N, 76.9480° E' },
  ];

  return (
    <div className="w-full max-w-md rounded-2xl bg-[#0D1117] border border-white/10 p-5 shadow-2xl backdrop-blur-md flex flex-col gap-4">
      <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs font-mono">
        <span className="text-white font-bold flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-rose-400" />
          GEOSPATIAL_COORDINATE_RADAR
        </span>
        <span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/25 text-[10px] font-bold">
          RADAR ACTIVE
        </span>
      </div>

      {/* Category Filter Pills */}
      <div className="flex gap-1.5">
        {['tech', 'parks', 'dining'].map((c) => (
          <button
            key={c}
            onClick={() => setActiveFilter(c)}
            className={`px-3 py-1 rounded-lg text-[11px] font-mono capitalize transition-all ${
              activeFilter === c
                ? 'bg-rose-600 text-white font-bold shadow-sm'
                : 'bg-white/5 text-slate-400 border border-white/10 hover:text-white'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Radar Map Graphic & Place List */}
      <div className="space-y-2">
        {places.map((place) => {
          const isCurrent = place.cat === activeFilter;
          return (
            <div
              key={place.name}
              className={`p-3 rounded-xl border flex items-center justify-between text-xs font-mono transition-all ${
                isCurrent
                  ? 'bg-rose-500/10 border-rose-500/40 text-white shadow-sm'
                  : 'bg-white/5 border-white/10 text-slate-400'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div className={`w-2 h-2 rounded-full ${isCurrent ? 'bg-rose-400 animate-ping' : 'bg-slate-600'}`} />
                <div>
                  <div className="font-bold text-white">{place.name}</div>
                  <div className="text-[10px] text-slate-500">{place.lat}</div>
                </div>
              </div>
              <span className="text-[11px] text-rose-400 font-bold">{place.dist}</span>
            </div>
          );
        })}
      </div>

      <div className="text-[10px] font-mono text-slate-400 flex justify-between">
        <span>Client-side Geolocation API</span>
        <span>Zero-lag Filter</span>
      </div>
    </div>
  );
};

// 04. Instagram Clone Interactive Mockup
const InstagramMockup = () => {
  const [likes, setLikes] = useState(148);
  const [hasLiked, setHasLiked] = useState(false);

  const toggleLike = () => {
    if (hasLiked) {
      setLikes(l => l - 1);
      setHasLiked(false);
    } else {
      setLikes(l => l + 1);
      setHasLiked(true);
    }
  };

  return (
    <div className="w-full max-w-sm rounded-2xl bg-[#0D1117] border border-white/10 p-4 shadow-2xl backdrop-blur-md flex flex-col gap-3">
      {/* Story Tray */}
      <div className="flex items-center gap-3 overflow-x-auto pb-2 border-b border-white/10 no-scrollbar">
        {['Muthu', 'React', 'Design', 'Code'].map((name, i) => (
          <div key={name} className="flex flex-col items-center gap-1 shrink-0">
            <div className={`w-10 h-10 rounded-full p-[2px] ${i === 0 ? 'bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600' : 'bg-white/10'}`}>
              <div className="w-full h-full rounded-full bg-[#0D1117] flex items-center justify-center text-[10px] font-mono text-white font-bold">
                {name.slice(0, 2)}
              </div>
            </div>
            <span className="text-[9px] font-mono text-slate-400">{name}</span>
          </div>
        ))}
      </div>

      {/* Feed Post Header */}
      <div className="flex items-center justify-between pt-1">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-[10px] font-mono font-bold text-blue-400">
            M
          </div>
          <span className="text-xs font-bold text-white">muthu.dev</span>
        </div>
        <span className="text-[10px] font-mono text-slate-500">2h ago</span>
      </div>

      {/* Post Photo Canvas */}
      <div className="w-full aspect-[4/3] rounded-xl bg-gradient-to-br from-indigo-900/30 via-slate-900 to-blue-900/30 border border-white/10 flex flex-col items-center justify-center relative overflow-hidden group">
        <div className="text-center p-4">
          <Layers className="w-8 h-8 text-blue-400 mx-auto mb-2" />
          <p className="text-xs font-mono font-bold text-white">Full Stack Social UI Architecture</p>
          <span className="text-[10px] font-mono text-slate-400">Tailwind CSS + React</span>
        </div>
      </div>

      {/* Action Bar */}
      <div className="flex items-center justify-between pt-1">
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLike}
            className="flex items-center gap-1 text-xs font-mono transition-transform active:scale-125"
          >
            <Heart className={`w-4 h-4 ${hasLiked ? 'fill-rose-500 text-rose-500' : 'text-slate-400 hover:text-white'}`} />
            <span className="text-white font-bold">{likes}</span>
          </button>
          <div className="flex items-center gap-1 text-xs font-mono text-slate-400">
            <MessageCircle className="w-4 h-4" /> 24
          </div>
          <Share2 className="w-3.5 h-3.5 text-slate-400 hover:text-white cursor-pointer" />
        </div>
        <span className="text-[10px] font-mono text-blue-400 font-bold">Interactive</span>
      </div>
    </div>
  );
};

// 05. Multilingual Content Sync Interactive Mockup
const MultilingualMockup = () => {
  const [activeLocale, setActiveLocale] = useState('ES');

  const translations = {
    ES: { title: 'Sincronización Multilingüe', status: 'Sincronizado' },
    FR: { title: 'Synchronisation Multilingue', status: 'Synchronisé' },
    DE: { title: 'Mehrsprachige Synchronisation', status: 'Synchronisiert' }
  };

  return (
    <div className="w-full max-w-md rounded-2xl bg-[#0D1117] border border-white/10 p-5 shadow-2xl backdrop-blur-md flex flex-col gap-4">
      <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs font-mono">
        <span className="text-white font-bold flex items-center gap-1.5">
          <Globe className="w-3.5 h-3.5 text-cyan-400" />
          WP_TRANSLATION_SYNC_ENGINE
        </span>
        <span className="text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/25 text-[10px] font-bold">
          PHP 8.x / MySQL
        </span>
      </div>

      {/* Locale Switcher */}
      <div className="flex gap-2">
        {['ES', 'FR', 'DE'].map((lang) => (
          <button
            key={lang}
            onClick={() => setActiveLocale(lang)}
            className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
              activeLocale === lang
                ? 'bg-cyan-600 text-white shadow-sm'
                : 'bg-white/5 text-slate-400 border border-white/10 hover:text-white'
            }`}
          >
            Locale: {lang}
          </button>
        ))}
      </div>

      {/* Diff Preview Panel */}
      <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 font-mono text-xs space-y-2">
        <div className="text-[11px] text-slate-400 flex justify-between font-semibold">
          <span>SOURCE (EN-US):</span>
          <span>Base Post #182</span>
        </div>
        <div className="text-slate-300 pl-2 border-l-2 border-slate-500 font-medium">
          Multilingual Content Sync
        </div>

        <div className="pt-2 text-[11px] text-cyan-400 flex justify-between font-bold">
          <span>TRANSLATED ({activeLocale}):</span>
          <span className="text-emerald-400">✓ {translations[activeLocale].status}</span>
        </div>
        <div className="text-white pl-2 border-l-2 border-cyan-400 font-semibold">
          {translations[activeLocale].title}
        </div>
      </div>

      <div className="text-[10px] font-mono text-slate-400 flex justify-between">
        <span>Custom WordPress Action Hooks</span>
        <span>Automated Mutation Sync</span>
      </div>
    </div>
  );
};

// 06. Tour & Travels Interactive Mockup
const TourTravelsMockup = () => {
  const [selectedRoute, setSelectedRoute] = useState('Nilgiris Expedition');

  return (
    <div className="w-full max-w-md rounded-2xl bg-[#0D1117] border border-white/10 p-5 shadow-2xl backdrop-blur-md flex flex-col gap-4">
      <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs font-mono">
        <span className="text-white font-bold flex items-center gap-1.5">
          <Compass className="w-3.5 h-3.5 text-amber-400" />
          EXPEDITION_PORTAL_UI
        </span>
        <span className="text-amber-400 text-[10px] font-bold">CLIENT-SIDE ROUTING</span>
      </div>

      <div className="space-y-2">
        {[
          { name: 'Nilgiris Expedition', dur: '4 Days / 3 Nights', price: 'Curated' },
          { name: 'Western Ghats Trek', dur: '3 Days / 2 Nights', price: 'Adventure' },
        ].map((item) => (
          <div
            key={item.name}
            onClick={() => setSelectedRoute(item.name)}
            className={`p-3 rounded-xl border flex items-center justify-between text-xs font-mono cursor-pointer transition-all ${
              selectedRoute === item.name
                ? 'bg-amber-500/10 border-amber-500/40 text-white shadow-sm font-bold'
                : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/20'
            }`}
          >
            <div>
              <div className="font-bold text-white">{item.name}</div>
              <div className="text-[10px] text-slate-500">{item.dur}</div>
            </div>
            <span className="text-amber-400 text-[11px] font-bold">{item.price}</span>
          </div>
        ))}
      </div>

      <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between text-[11px] font-mono">
        <span className="text-slate-400">Active Package:</span>
        <span className="text-white font-bold">{selectedRoute}</span>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   MOCKUP REGISTRY
───────────────────────────────────────────────────────────────────────────── */
const MockupRenderer = ({ id }) => {
  switch (id) {
    case '01':
      return <WorkspaceMockup />;
    case '02':
      return <GenAiMockup />;
    case '03':
      return <NearbyPlacesMockup />;
    case '04':
      return <InstagramMockup />;
    case '05':
      return <MultilingualMockup />;
    case '06':
      return <TourTravelsMockup />;
    default:
      return <WorkspaceMockup />;
  }
};

/* ─────────────────────────────────────────────────────────────────────────────
   MAIN FEATURED PROJECTS COMPONENT
───────────────────────────────────────────────────────────────────────────── */
const Projects = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const projectRows = gsap.utils.toArray('.project-case-study');

      projectRows.forEach((row) => {
        const visual = row.querySelector('.project-visual-container');
        const content = row.querySelector('.project-content-container');

        if (visual) {
          gsap.fromTo(
            visual,
            { clipPath: 'inset(8% 0% 8% 0%)', opacity: 0.75, scale: 0.97 },
            {
              clipPath: 'inset(0% 0% 0% 0%)',
              opacity: 1,
              scale: 1,
              duration: 0.9,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: row,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }

        if (content) {
          gsap.fromTo(
            content,
            { y: 24, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.75,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: row,
                start: 'top 75%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="projects"
      className="relative w-full max-w-7xl mx-auto px-6 md:px-12 py-28 md:py-36 border-t border-white/10 bg-[#050508]"
    >
      {/* Editorial Section Index */}
      <div className="flex items-center gap-3 mb-10">
        <span className="text-xs font-mono text-blue-400 font-bold tracking-widest bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
          04 // SELECTED WORK &amp; CASE STUDIES
        </span>
        <div className="h-px flex-1 max-w-[120px] bg-blue-500/20" />
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-base text-slate-300 max-w-xl">
            Real software systems, cross-platform mobile apps, and AI integrations built with modern architecture.
          </p>
        </div>
        <div className="text-xs font-mono text-slate-400 font-semibold">
          6 Production &amp; Lab Repositories
        </div>
      </div>

      {/* Alternating Case Studies */}
      <div className="space-y-24 md:space-y-32">
        {projects.map((project, index) => {
          const isEven = index % 2 === 1;

          return (
            <div key={project.id} className="project-case-study flex flex-col gap-6">
              
              {/* Storytelling Step Connector */}
              <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                <span className="px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 font-bold">
                  {project.step}
                </span>
                <span className="tracking-widest uppercase text-slate-300 font-semibold">
                  {project.stepTitle}
                </span>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              {/* Main Card Grid */}
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center p-6 md:p-10 rounded-2xl bg-[#0D1117]/85 border border-white/10 shadow-xl hover:border-blue-500/40 hover:shadow-[0_12px_40px_-10px_rgba(59,130,246,0.2)] transition-all duration-300 group ${
                  isEven ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* ── Text Content ── */}
                <div
                  className={`project-content-container flex flex-col justify-between h-full ${
                    isEven ? 'lg:col-start-2' : ''
                  }`}
                >
                  <div>
                    {/* Meta Category & Project Number */}
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3 font-semibold">
                      <span className="text-blue-400">{project.category}</span>
                      <span>PROJECT {project.number}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                      {project.title}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2 mb-8">
                      {project.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-200 font-medium">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technology Badges */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-300 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="REPO"
                      className="premium-button premium-button-primary group text-xs sm:text-sm"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>View GitHub Repository</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>

                {/* ── Interactive Live Mockup Preview ── */}
                <div
                  className={`project-visual-container flex items-center justify-center min-h-[320px] p-4 rounded-xl bg-[#050508] border border-white/10 shadow-inner overflow-hidden transition-transform duration-300 group-hover:scale-[1.01] ${
                    isEven ? 'lg:col-start-1' : ''
                  }`}
                >
                  <MockupRenderer id={project.id} />
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
