import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  const cursorLabelRef = useRef(null);
  const [cursorText, setCursorText] = useState('');
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      setIsDesktop(isFinePointer && !prefersReducedMotion);
    };

    checkDesktop();
    window.addEventListener('resize', checkDesktop);

    if (!isDesktop) return;

    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    if (!dot || !ring) return;

    const setDotX = gsap.quickSetter(dot, 'x', 'px');
    const setDotY = gsap.quickSetter(dot, 'y', 'px');
    const setRingX = gsap.quickTo(ring, 'x', { duration: 0.25, ease: 'power2.out' });
    const setRingY = gsap.quickTo(ring, 'y', { duration: 0.25, ease: 'power2.out' });

    let isVisible = false;

    const onMouseMove = (e) => {
      if (!isVisible) {
        gsap.to([dot, ring], { opacity: 1, duration: 0.3 });
        isVisible = true;
      }
      setDotX(e.clientX);
      setDotY(e.clientY);
      setRingX(e.clientX);
      setRingY(e.clientY);
    };

    const onMouseLeave = () => {
      gsap.to([dot, ring], { opacity: 0, duration: 0.3 });
      isVisible = false;
    };

    const onMouseOver = (e) => {
      const target = e.target;
      const interactiveEl = target.closest('a, button, [data-cursor], input, textarea');
      
      if (interactiveEl) {
        const customLabel = interactiveEl.getAttribute('data-cursor');
        setCursorText(customLabel || '');

        gsap.to(ring, {
          scale: customLabel ? 2.2 : 1.6,
          borderColor: '#60A5FA',
          backgroundColor: 'rgba(59, 130, 246, 0.15)',
          duration: 0.25,
          ease: 'power2.out'
        });
        gsap.to(dot, { scale: 0.4, opacity: 0.8, duration: 0.2 });
      } else {
        setCursorText('');
        gsap.to(ring, {
          scale: 1,
          borderColor: 'rgba(255, 255, 255, 0.25)',
          backgroundColor: 'transparent',
          duration: 0.25,
          ease: 'power2.out'
        });
        gsap.to(dot, { scale: 1, opacity: 1, duration: 0.2 });
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('resize', checkDesktop);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseover', onMouseOver);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
      {/* Center pinpoint dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 -ml-[3px] -mt-[3px] bg-blue-400 rounded-full opacity-0 will-change-transform shadow-[0_0_8px_rgba(96,165,250,0.8)]"
      />

      {/* Smooth trailing ring */}
      <div
        ref={cursorRingRef}
        className="fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 rounded-full border border-white/20 opacity-0 flex items-center justify-center will-change-transform"
      >
        {cursorText && (
          <span
            ref={cursorLabelRef}
            className="text-[8px] font-mono font-bold tracking-widest text-blue-300 uppercase select-none"
          >
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
};

export default CustomCursor;
