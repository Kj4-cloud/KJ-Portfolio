import { useState, useEffect, useCallback } from 'react';

/**
 * Tracks mouse position with optional lerp smoothing
 * Returns normalized coordinates (0-1) relative to viewport
 */
export function useMousePosition(smooth = true) {
  const [position, setPosition] = useState({ x: 0.5, y: 0.5 });
  const [rawPosition, setRawPosition] = useState({ x: 0.5, y: 0.5 });

  const handleMouseMove = useCallback((e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    setRawPosition({ x, y });

    if (!smooth) {
      setPosition({ x, y });
    }
  }, [smooth]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  // Lerp smoothing via RAF
  useEffect(() => {
    if (!smooth) return;

    let rafId;
    const lerp = (a, b, t) => a + (b - a) * t;

    const animate = () => {
      setPosition((prev) => ({
        x: lerp(prev.x, rawPosition.x, 0.08),
        y: lerp(prev.y, rawPosition.y, 0.08),
      }));
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [smooth, rawPosition]);

  return position;
}
