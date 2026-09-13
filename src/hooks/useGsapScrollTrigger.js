import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Custom hook to safely execute GSAP animations with proper context cleanup
 * and reduced motion handling.
 */
export const useGsapContext = (animationCallback, dependencies = [], scopeRef = null) => {
  const localRef = useRef(null);
  const targetRef = scopeRef || localRef;

  useLayoutEffect(() => {
    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      animationCallback(gsap, ScrollTrigger);
    }, targetRef);

    return () => {
      ctx.revert();
    };
  }, dependencies);

  return targetRef;
};

export { gsap, ScrollTrigger };
