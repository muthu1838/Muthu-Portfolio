import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { springStagger, fadeIn, slideInLeft, slideInRight, revealFromBottom } from '../utils/animations';
import { Building2, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    role: 'Software Developer',
    company: 'Madhura Technologies Pvt Ltd',
    location: 'Coimbatore',
    date: 'Feb 2026 — Present',
    description: 'Developed full-stack applications using the MERN stack. Built RESTful APIs and backend systems. Designed responsive interfaces using React.js and Tailwind CSS. Developed cross-platform mobile applications using React Native and Expo. Worked with MongoDB and SQL databases. Deployed applications on VPS and optimized application performance.',
    tags: ['React.js', 'React Native', 'Node.js', 'MongoDB', 'Tailwind CSS']
  },
  {
    role: 'Software Developer Intern',
    company: 'Smackcoders Inc',
    location: 'Tirunelveli',
    date: 'Dec 2024 — Jun 2025',
    description: 'Developed WordPress plugins using PHP, MySQL and GA4. Built WooPulse Analytics integrating Google Analytics 4. Worked on frontend, backend, authentication and database integrations.',
    tags: ['PHP', 'WordPress', 'MySQL', 'GA4']
  }
];

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="w-full max-w-5xl mx-auto px-6 md:px-12 py-24 md:py-32 relative z-10" id="experience" ref={containerRef}>
      <motion.p
        variants={revealFromBottom}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="text-xs font-semibold uppercase tracking-[0.25em] text-accent mb-6"
      >
        Career
      </motion.p>
      <motion.div
        variants={springStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16"
      >
        <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Experience
        </motion.h2>
        <motion.p variants={fadeIn} className="text-mutedForeground max-w-2xl">
          My professional journey in software development.
        </motion.p>
      </motion.div>

      <div className="relative">
        {/* Timeline Background Line */}
        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-[2px] bg-white/5 rounded-full" />
        
        {/* Animated Timeline Progress */}
        <motion.div 
          style={{ height: lineHeight }}
          className="absolute left-0 md:left-8 top-0 w-[2px] bg-gradient-to-b from-accent/80 via-accent to-transparent rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)] origin-top"
        />

        <div className="space-y-12 md:space-y-20 relative pt-10">
          {experiences.map((exp, index) => {
            return (
              <motion.div 
                key={index}
                variants={springStagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="relative pl-8 md:pl-24"
              >
                {/* Timeline Dot */}
                <motion.div 
                  variants={fadeIn}
                  className="absolute left-[-5px] md:left-[27px] top-6 w-3 h-3 rounded-full bg-background border-2 border-accent shadow-[0_0_12px_rgba(59,130,246,0.7)] z-10"
                />
                
                <div className="mouse-glow glass-panel p-6 md:p-8 hover:border-accent/30 transition-all duration-300 group"
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-[1fr_2.5fr] gap-6 md:gap-8 relative z-10">
                    {/* Meta */}
                    <motion.div variants={slideInLeft} className="flex flex-col gap-3 mt-1">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium w-fit group-hover:border-accent/30 transition-colors">
                        <Calendar className="w-4 h-4 text-accent" />
                        <span className="text-foreground/90">{exp.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-mutedForeground ml-1 mt-2">
                        <Building2 className="w-4 h-4 shrink-0" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-mutedForeground ml-1">
                        <MapPin className="w-4 h-4 shrink-0" />
                        <span>{exp.location}</span>
                      </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div variants={slideInRight} className="flex flex-col">
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">{exp.role}</h3>
                      <p className="text-mutedForeground leading-relaxed mb-6 text-sm md:text-base">
                        {exp.description}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {exp.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-accent/5 border border-accent/20 text-accent/90 hover:bg-accent/10 transition-colors cursor-default">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
