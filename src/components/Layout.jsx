import { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import CustomCursor from './ui/CustomCursor';
import Navbar from './Navbar';
import Footer from './Footer';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Layout = ({ children }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 240,
    damping: 35,
    restDelta: 0.001,
  });

  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.2,
    });

    // Synchronize Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const updateLenis = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050508] text-[#F8FAFC] overflow-x-hidden selection:bg-blue-600/30 selection:text-white">
      {/* Subtle Noise Overlay */}
      <div className="bg-noise" aria-hidden="true" />

      {/* Top Gradient Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 origin-left z-[90] shadow-[0_0_12px_rgba(99,102,241,0.6)]"
        style={{ scaleX }}
      />

      {/* Custom Precision Cursor */}
      <CustomCursor />

      {/* Modern Floating Capsule Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="relative z-10 flex flex-col items-center w-full">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
