import { motion } from 'framer-motion';
import { staggerContainer, springStagger, fadeIn, revealFromBottom, floatAnimation } from '../utils/animations';

const technologies = [
  { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', invertDark: true },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'WordPress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg', invertDark: true },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', invertDark: true }
];

const TechStack = () => {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden border-y border-white/5 bg-white/[0.01]" id="tech">
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 mb-12 z-10">
        <motion.p
          variants={revealFromBottom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-xs font-semibold uppercase tracking-[0.25em] text-accent mb-6 text-center"
        >
          Tech Stack
        </motion.p>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center text-center"
        >
          <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Technologies & Tools
          </motion.h2>
          <motion.p variants={fadeIn} className="text-mutedForeground max-w-2xl">
            A comprehensive list of technologies I use to build robust and scalable applications.
          </motion.p>
        </motion.div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 z-10">
        <motion.div 
          variants={springStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center gap-4 md:gap-6"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={fadeIn}
              whileHover={{ scale: 1.05, y: -5 }}
              custom={index}
              animate={floatAnimation.animate}
              style={{ animationDelay: `${index * 0.1}s` }}
              className="mouse-glow glass-panel p-4 md:p-5 flex items-center gap-4 group cursor-default"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
              }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 relative flex items-center justify-center bg-white/5 rounded-xl p-2 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300 z-10">
                <img 
                  src={tech.icon} 
                  alt={tech.name} 
                  className={`w-full h-full object-contain ${tech.invertDark ? 'filter invert brightness-0 opacity-80 group-hover:opacity-100' : ''}`}
                />
              </div>
              <span className="font-medium text-sm md:text-base text-foreground/80 group-hover:text-foreground transition-colors z-10">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Subtle Marquee */}
      <div className="absolute inset-0 flex flex-col justify-center overflow-x-hidden opacity-[0.03] pointer-events-none select-none z-0">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8 mb-4">
          {[...technologies, ...technologies, ...technologies, ...technologies].map((tech, i) => (
            <span key={`fwd-${i}`} className="text-6xl md:text-8xl font-black text-transparent bg-clip-text uppercase tracking-wider" style={{ WebkitTextStroke: '2px rgba(255,255,255,1)' }}>
              {tech.name}
            </span>
          ))}
        </div>
        <div className="animate-marquee-reverse whitespace-nowrap flex items-center gap-8">
          {[...technologies, ...technologies, ...technologies, ...technologies].reverse().map((tech, i) => (
            <span key={`rev-${i}`} className="text-6xl md:text-8xl font-black text-transparent bg-clip-text uppercase tracking-wider" style={{ WebkitTextStroke: '2px rgba(255,255,255,1)' }}>
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
