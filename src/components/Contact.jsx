import { motion } from 'framer-motion';
import { staggerContainer, fadeIn, revealFromBottom } from '../utils/animations';
import { Mail, ArrowUpRight } from 'lucide-react';
import { LinkedinIcon } from './ui/Icons';

const Contact = () => {
  return (
    <section className="w-full max-w-3xl mx-auto px-6 md:px-12 py-24 md:py-32" id="contact">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="text-center flex flex-col items-center"
      >
        <motion.p
          variants={revealFromBottom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-xs font-semibold uppercase tracking-[0.25em] text-accent mb-6"
        >
          Contact
        </motion.p>
        <motion.div 
          variants={fadeIn}
          className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-8"
        >
          <Mail className="w-8 h-8 text-accent" />
        </motion.div>
        
        <motion.h2 
          variants={fadeIn}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-foreground"
        >
          Let's build something
          <span className="text-accent"> useful.</span>
        </motion.h2>
        
        <motion.p 
          variants={fadeIn}
          className="text-lg text-mutedForeground mb-12 max-w-md"
        >
          Have a project, product idea, or opportunity? I'd love to hear from you.
        </motion.p>
        
        <motion.div 
          variants={fadeIn}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a 
            href="mailto:muthumariappan212@gmail.com" 
            className="premium-button premium-button-primary group w-full sm:w-auto text-base"
          >
            Email Me
            <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          
          <a 
            href="https://www.linkedin.com/in/muthu-mariappan-p-942a4828a/" 
            target="_blank"
            rel="noopener noreferrer"
            className="premium-button premium-button-secondary group w-full sm:w-auto text-base"
          >
            <LinkedinIcon className="w-4 h-4 mr-2" />
            LinkedIn
            <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-mutedForeground group-hover:text-foreground" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
