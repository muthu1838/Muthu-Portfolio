import { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import CustomCursor from './ui/CustomCursor';
import Navbar from './Navbar';
import Footer from './Footer';
import Lenis from 'lenis';

const Layout = ({ children }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
    restDelta: 0.001,
  });

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothTouch: false,
      touchMultiplier: 1.5,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-accent/30 selection:text-white overflow-x-hidden">
      {/* Ambient background glow */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-accent/5 blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent/5 blur-[120px] animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }} />
      </div>

      {/* Thin accent progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent/50 via-accent to-accent/50 origin-left z-[60] shadow-[0_0_15px_rgba(59,130,246,0.5)]"
        style={{ scaleX }}
      />

      {/* Custom Cursor (desktop) */}
      <CustomCursor />

      <Navbar />

      <main className="flex flex-col items-center w-full">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
