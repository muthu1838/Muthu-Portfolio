import { motion } from 'framer-motion';
import { staggerContainer, fadeIn, revealFromBottom } from '../utils/animations';
import { ArrowUpRight, MapPin, Image as ImageIcon, Layout, Smartphone, Globe, Code2 } from 'lucide-react';
import { GithubIcon } from './ui/Icons';

const projects = [
  {
    id: '01',
    title: 'Workspace Management App',
    description: 'Full-stack workspace management platform for web and mobile applications.',
    technologies: ['React.js', 'React Native', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/muthu1838/Workspace',
  },
  {
    id: '02',
    title: 'Text-to-Image Generator',
    description: 'AI-powered web application for dynamic image generation using external APIs.',
    technologies: ['MERN', 'React.js', 'Node.js', 'External AI APIs'],
    github: 'https://github.com/muthu1838/Gen-AI',
  },
  {
    id: '03',
    title: 'Smart Nearby Places Recommender',
    description: 'Location-based recommendation application that helps users discover nearby places based on preferences.',
    technologies: ['React.js'],
    github: 'https://github.com/muthu1838/Smart-Nearby-Places-Recommender',
  },
  {
    id: '04',
    title: 'Instagram Clone',
    description: 'A social media application inspired by Instagram, demonstrating modern frontend and application development concepts.',
    technologies: ['React.js', 'Node.js', 'Tailwind CSS'],
    github: 'https://github.com/muthu1838/Instagram-Clone-Project',
  },
  {
    id: '05',
    title: 'Multilingual Content Sync',
    description: 'WordPress plugin for multilingual content synchronization and translation workflows.',
    technologies: ['WordPress', 'PHP', 'MySQL'],
    github: 'https://github.com/muthu1838/Language-Translator-Plugin-',
  },
  {
    id: '06',
    title: 'Tour & Travels',
    description: 'Travel-focused web application project.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/muthu1838/Tour-and-travels',
  }
];

const MockUI = ({ id }) => {
  if (id === '03') {
    return (
      <div className="relative w-full max-w-md aspect-video rounded-xl bg-background border border-white/10 shadow-2xl backdrop-blur-md overflow-hidden flex transform group-hover:scale-[1.02] group-hover:rotate-1 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none">
        <div className="w-1/4 bg-card border-r border-white/5 p-3 flex flex-col gap-2">
          <div className="w-full h-6 rounded-md bg-white/[0.03] mb-2 animate-pulse" />
          <div className="w-full h-12 rounded-md bg-white/[0.05]" />
          <div className="w-full h-12 rounded-md bg-white/[0.02]" />
        </div>
        <div className="flex-1 relative p-4">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center">
            <div className="absolute inset-0 bg-red-500/20 rounded-full animate-ping" />
            <MapPin className="w-6 h-6 text-red-500 relative z-10" />
          </div>
          <MapPin className="w-4 h-4 text-white/40 absolute top-1/4 left-1/4" />
          <MapPin className="w-4 h-4 text-white/40 absolute bottom-1/3 right-1/4" />
        </div>
      </div>
    );
  }

  if (id === '02') {
    return (
      <div className="relative w-full max-w-md aspect-video rounded-xl bg-background border border-white/10 shadow-2xl backdrop-blur-md overflow-hidden flex flex-col transform group-hover:scale-[1.02] group-hover:-rotate-1 transition-all duration-700 pointer-events-none p-4 gap-4">
        <div className="flex gap-2 items-center mb-2">
          <ImageIcon className="w-5 h-5 text-accent" />
          <div className="h-4 w-32 bg-white/10 rounded" />
        </div>
        <div className="flex-1 rounded-lg border border-white/10 bg-gradient-to-br from-white/5 to-transparent relative overflow-hidden flex items-center justify-center">
           <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center animate-pulse">
             <ImageIcon className="w-8 h-8 text-accent/50" />
           </div>
        </div>
        <div className="h-10 rounded-md bg-white/5 border border-white/10 flex items-center px-4">
           <div className="h-2 w-1/2 bg-white/10 rounded" />
        </div>
      </div>
    );
  }

  if (id === '04') {
    return (
      <div className="relative w-full max-w-sm aspect-[4/3] rounded-xl bg-background border border-white/10 shadow-2xl backdrop-blur-md overflow-hidden flex transform group-hover:scale-[1.02] group-hover:rotate-1 transition-all duration-700 pointer-events-none">
        <div className="w-full flex flex-col">
          <div className="h-12 border-b border-white/10 flex items-center px-4 gap-3">
             <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-yellow-400 to-pink-600 p-[2px]">
                <div className="w-full h-full bg-background rounded-full" />
             </div>
             <div className="h-2 w-24 bg-white/10 rounded" />
          </div>
          <div className="flex-1 bg-white/5 flex items-center justify-center">
             <Smartphone className="w-12 h-12 text-white/20" />
          </div>
          <div className="h-12 flex items-center px-4 gap-3">
             <div className="w-5 h-5 rounded bg-white/10" />
             <div className="w-5 h-5 rounded bg-white/10" />
          </div>
        </div>
      </div>
    );
  }

  // Generic layout for the rest
  return (
    <div className="relative w-full max-w-md aspect-video rounded-xl bg-background border border-white/10 shadow-2xl backdrop-blur-md overflow-hidden flex transform group-hover:scale-[1.02] transition-all duration-700 pointer-events-none">
      <div className="w-1/3 bg-card border-r border-white/5 p-4 flex flex-col gap-3">
        <div className="w-full h-8 rounded-md bg-white/[0.05]" />
        <div className="w-full h-16 rounded-md bg-white/[0.02]" />
        <div className="w-full h-16 rounded-md bg-white/[0.02]" />
      </div>
      <div className="flex-1 relative p-4 flex flex-col gap-4">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
        <div className="w-full h-32 rounded-lg bg-card border border-white/5 relative z-10 flex items-center justify-center">
           <Layout className="w-8 h-8 text-white/20" />
        </div>
        <div className="flex gap-4 relative z-10">
          <div className="w-1/2 h-24 rounded-lg bg-card border border-white/5" />
          <div className="w-1/2 h-24 rounded-lg bg-card border border-white/5" />
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32" id="projects">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16"
      >
        <motion.p
          variants={revealFromBottom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-xs font-semibold uppercase tracking-[0.25em] text-accent mb-6"
        >
          Work
        </motion.p>
        <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Featured Projects
        </motion.h2>
        <motion.p variants={fadeIn} className="text-mutedForeground max-w-2xl">
          Selected projects that showcase my experience in building scalable products.
        </motion.p>
      </motion.div>

      <div className="flex flex-col gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <div className="premium-card group overflow-hidden flex flex-col lg:flex-row relative">
              {/* Content */}
              <div className="flex-1 p-8 md:p-12 flex flex-col justify-between relative z-10 bg-card/80 backdrop-blur-sm lg:bg-transparent">
                <div>
                  <div className="text-xs font-mono text-mutedForeground mb-4">Project {project.id} {index === 0 && '— Featured'}</div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-mutedForeground leading-relaxed mb-8 max-w-lg">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-12">
                    {project.technologies.map(tech => (
                      <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-mutedForeground/80">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="premium-button premium-button-primary z-20"
                  >
                    View Repository <ArrowUpRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
                
                {/* Make whole card clickable except for the button which has higher z-index */}
                <a 
                  href={project.github}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10"
                  aria-label={`View ${project.title} repository`}
                ></a>
              </div>
              
              {/* Abstract UI Mockup */}
              <div className="flex-1 min-h-[300px] lg:min-h-[400px] bg-gradient-to-br from-white/[0.02] to-transparent border-t lg:border-t-0 lg:border-l border-white/5 relative overflow-hidden flex items-center justify-center p-8">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
                
                <MockUI id={project.id} />
                
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
