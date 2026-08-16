import { motion } from 'framer-motion';
import { springStagger, fadeIn, revealFromBottom, floatAnimation } from '../utils/animations';
import { Award, GraduationCap, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Simplilearn',
    year: '2025',
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
    border: 'border-yellow-400/20',
  },
  {
    title: 'Python Certification',
    issuer: 'Kaggle',
    year: '2023',
    color: 'text-sky-400',
    bg: 'bg-sky-400/10',
    border: 'border-sky-400/20',
  },
];

const EducationCertifications = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

        {/* ── Education ── */}
        <motion.div
          variants={springStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.p
            variants={revealFromBottom}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-accent mb-6"
          >
            Education
          </motion.p>
          <motion.div variants={fadeIn} className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              <GraduationCap className="w-5 h-5 text-accent" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight">Academic Background</h2>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="mouse-glow glass-panel p-6 md:p-8 border-l-4 border-l-accent group hover:border-l-accent transition-all duration-300"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
              e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
            }}
          >
            <div className="text-xs font-mono text-accent/80 mb-3 tracking-wide">2021 — 2025</div>
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
              B.E. Computer Science &amp; Engineering
            </h3>
            <div className="text-sm text-mutedForeground mb-5">
              Dr. Sivanthi Aditanar College of Engineering
            </div>
            <div className="inline-flex items-center px-4 py-1.5 text-sm font-semibold rounded-full bg-accent/10 border border-accent/20 text-accent group-hover:bg-accent/20 transition-colors">
              CGPA: 7.71 / 10
            </div>
          </motion.div>
        </motion.div>

        {/* ── Certifications ── */}
        <motion.div
          variants={springStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.p
            variants={revealFromBottom}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-accent mb-6"
          >
            Certifications
          </motion.p>
          <motion.div variants={fadeIn} className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              <Award className="w-5 h-5 text-accent" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight">Achievements</h2>
          </motion.div>

          <div className="flex flex-col gap-5">
            {certifications.map((cert) => (
              <motion.div
                key={cert.title}
                variants={fadeIn}
                whileHover={{ y: -5 }}
                className={`mouse-glow glass-panel p-5 md:p-6 flex items-start gap-5 border ${cert.border} group transition-all duration-300 hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)]`}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                  e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
                }}
              >
                <div className={`w-10 h-10 rounded-xl ${cert.bg} border ${cert.border} flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform`}>
                  <Award className={`w-5 h-5 ${cert.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className={`text-base font-bold text-foreground mb-1.5 group-hover:${cert.color} transition-colors`}>
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-mutedForeground">
                    <span>{cert.issuer}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-mutedForeground/40" />
                    <span className="font-mono text-xs">{cert.year}</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-mutedForeground/40 group-hover:text-accent group-hover:-translate-y-1 group-hover:translate-x-1 transition-all shrink-0 mt-1" />
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default EducationCertifications;
