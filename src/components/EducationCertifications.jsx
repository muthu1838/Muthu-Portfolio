import { motion } from 'framer-motion';
import { education, certifications } from '../data/education';
import { GraduationCap, Award, CheckCircle } from 'lucide-react';
import { fadeIn, staggerContainer } from '../utils/animations';

const EducationCertifications = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 md:px-12 py-28 md:py-36 border-t border-white/10 bg-[#050508]">
      {/* Editorial Section Index */}
      <div className="flex items-center gap-3 mb-10">
        <span className="text-xs font-mono text-blue-400 font-bold tracking-widest bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
          07 // ACADEMIC FOUNDATIONS &amp; CREDENTIALS
        </span>
        <div className="h-px flex-1 max-w-[120px] bg-blue-500/20" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        
        {/* ── Left: Academic Foundation ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shadow-sm">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Academic Background
              </h2>
            </div>

            <div className="premium-card p-6 md:p-8 bg-[#0D1117]/85 border border-white/10 shadow-xl hover:border-blue-500/40 transition-all duration-300">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 text-xs font-mono">
                <span className="text-blue-400 font-bold">{education.period}</span>
                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/25 font-bold">
                  {education.score}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                {education.degree}
              </h3>
              <div className="text-base text-blue-400 font-semibold mb-3">
                {education.field}
              </div>

              <p className="text-sm font-mono text-slate-400 mb-6 font-medium">
                {education.institution} · {education.location}
              </p>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                {education.description}
              </p>

              <div className="space-y-2 pt-4 border-t border-white/10">
                {education.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200 font-medium">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Right: Verified Certifications ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shadow-sm">
              <Award className="w-5 h-5" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Verified Credentials
            </h2>
          </div>

          <div className="space-y-4">
            {certifications.map((cert) => {
              const isAws = cert.id === 'aws-csa';
              const badgeBg = isAws ? 'bg-amber-500/10 text-amber-400 border-amber-500/25' : 'bg-cyan-500/10 text-cyan-400 border-cyan-500/25';

              return (
                <motion.div
                  key={cert.id}
                  variants={fadeIn}
                  className="premium-card p-6 bg-[#0D1117]/85 border border-white/10 shadow-md hover:border-white/20 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs font-mono">
                    <span className={`px-2.5 py-0.5 rounded-full border font-bold flex items-center gap-1.5 ${badgeBg}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current" />
                      {cert.badge}
                    </span>
                    <span className="text-slate-400 font-semibold">{cert.year}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                    {cert.title}
                  </h3>

                  <div className="text-xs font-mono text-slate-400 mb-3">
                    Issuer: <span className="text-slate-200 font-semibold">{cert.issuer}</span> · {cert.category}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {cert.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default EducationCertifications;
