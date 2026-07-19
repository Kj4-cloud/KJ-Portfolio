import { useState, useEffect } from 'react';

/**
 * Tracks scroll progress and direction for navbar visibility and progress bar
 * @returns {{ progress: number, direction: 'up' | 'down', scrollY: number }}
 */
export function useScrollProgress() {
  const [state, setState] = useState({
    progress: 0,
    direction: 'down',
    scrollY: 0,
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(scrollY / docHeight, 1) : 0;
      const direction = scrollY > lastScrollY ? 'down' : 'up';

      setState({ progress, direction, scrollY });
      lastScrollY = scrollY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return state;
}
