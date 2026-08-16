import { motion } from 'framer-motion';
import { revealFromBottom, staggerContainer, fadeIn } from '../utils/animations';

const stats = [
  { value: '1+',     label: 'Year Experience' },
  { value: 'MERN',   label: 'Stack Expert' },
  { value: 'React',  label: 'Native Mobile' },
  { value: '6+',     label: 'Projects Built' },
];

const About = () => {
  return (
    <section
      className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-36"
      id="about"
    >
      {/* Section label */}
      <motion.p
        variants={revealFromBottom}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="text-xs font-semibold uppercase tracking-[0.25em] text-accent mb-6"
      >
        About Me
      </motion.p>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24"
      >
        {/* Left */}
        <motion.div variants={fadeIn} className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 leading-tight">
            Building useful products
            <br />
            <span className="text-mutedForeground font-normal">with clean code.</span>
          </h2>
          <p className="text-mutedForeground leading-relaxed">
            I'm a Full Stack Developer and React Native Developer based in
            Coimbatore, India. I specialize in building scalable web applications,
            cross-platform mobile experiences, and robust backend systems using
            the modern MERN stack.
          </p>
        </motion.div>

        {/* Right — stat grid */}
        <motion.div variants={fadeIn} className="grid grid-cols-2 gap-3">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="premium-card p-6 flex flex-col justify-center group hover:border-accent/30 transition-colors"
            >
              <div className="text-2xl font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
                {value}
              </div>
              <div className="text-sm font-medium text-mutedForeground">{label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
