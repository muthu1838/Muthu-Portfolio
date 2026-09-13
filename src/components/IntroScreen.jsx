import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntroScreen = ({ onComplete }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Medium measured pace: 2.2s total before seamless exit transition
    const autoTimer = setTimeout(() => {
      handleEnter();
    }, 2200);

    return () => clearTimeout(autoTimer);
  }, []);

  const handleEnter = () => {
    if (isExiting) return;
    setIsExiting(true);
    setTimeout(() => {
      onComplete?.();
    }, 600);
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04, filter: 'blur(10px)' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          onClick={handleEnter}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#050508] text-white select-none cursor-pointer overflow-hidden px-6"
        >
          {/* Subtle Ambient Center Glow */}
          <div className="pointer-events-none absolute w-[450px] h-[450px] rounded-full bg-blue-600/15 blur-[120px]" />

          {/* Focused Center Text Animation Container */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center">
            
            {/* Split Kinetic Typography: Left & Right Joining */}
            <div className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-5 text-4xl sm:text-6xl md:text-8xl font-black tracking-tight mb-4">
              {/* "MUTHU" slides in from the LEFT */}
              <motion.span
                initial={{ opacity: 0, x: -140, filter: 'blur(8px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                transition={{
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.1,
                }}
                className="text-white"
              >
                MUTHU
              </motion.span>

              {/* "MARIAPPAN" slides in from the RIGHT */}
              <motion.span
                initial={{ opacity: 0, x: 140, filter: 'blur(8px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                transition={{
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.1,
                }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400"
              >
                MARIAPPAN
              </motion.span>
            </div>

            {/* Smooth Subtitle Fade-in Underneath */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.7,
                ease: 'easeOut',
              }}
              className="text-xs sm:text-sm font-mono tracking-widest text-slate-400 uppercase mb-6"
            >
              Full Stack &amp; React Native Developer
            </motion.p>

            {/* Minimal Loading Pulse Bar */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: '140px' }}
              transition={{
                duration: 0.8,
                delay: 0.8,
                ease: 'easeInOut',
              }}
              className="h-[2px] bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.6)]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroScreen;
