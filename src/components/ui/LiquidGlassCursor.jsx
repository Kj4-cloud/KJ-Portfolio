import { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useMotionValue, useAnimationFrame } from 'framer-motion';

/**
 * LiquidGlassCursor — Premium velocity-based liquid glass cursor follower
 */
export function LiquidGlassCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse coordinates (ref to avoid trigger re-renders)
  const mouseXRef = useRef(0);
  const mouseYRef = useRef(0);

  // Smooth springs for tracking coordinates
  const springConfig = { stiffness: 150, damping: 22, mass: 0.35 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  // Motion values for stretching and rotation
  const scaleX = useMotionValue(1);
  const scaleY = useMotionValue(1);
  const rotate = useMotionValue(0);

  // Springs for interactive states
  const hoverScale = useSpring(1, { stiffness: 250, damping: 18 });
  const clickScale = useSpring(1, { stiffness: 400, damping: 12 });

  useEffect(() => {
    // Check if the device is a touch screen (coarse pointer)
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const handleMouseMove = (e) => {
      // First move makes it visible
      if (!isVisible) setIsVisible(true);
      mouseXRef.current = e.clientX;
      mouseYRef.current = e.clientY;
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const isInteractive = 
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('[role="button"]') ||
        target.closest('.cursor-pointer');

      setIsHovered(!!isInteractive);
    };

    const handleMouseDown = () => {
      clickScale.set(0.8); // squash scale on click
    };

    const handleMouseUp = () => {
      clickScale.set(1); // restore scale
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isVisible, clickScale]);

  // Track hover state springs
  useEffect(() => {
    hoverScale.set(isHovered ? 1.55 : 1);
  }, [isHovered, hoverScale]);

  // Framer motion animation loop for high-performance physics calculations
  useAnimationFrame(() => {
    if (!isVisible) return;

    // Follower springs current positions
    const curX = cursorX.get();
    const curY = cursorY.get();

    // Set target positions for springs
    cursorX.set(mouseXRef.current);
    cursorY.set(mouseYRef.current);

    // Calculate distance (speed delta) between spring and mouse
    const dx = mouseXRef.current - curX;
    const dy = mouseYRef.current - curY;
    const speed = Math.sqrt(dx * dx + dy * dy);

    // Calculate organic stretch amount (capped at 35%)
    const stretch = Math.min(speed * 0.0035, 0.35);
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);

    // Combine stretch, hover scale and click compression
    const baseScale = hoverScale.get() * clickScale.get();

    scaleX.set((1 + stretch) * baseScale);
    scaleY.set((1 - stretch * 0.4) * baseScale);
    rotate.set(angle);
  });

  if (!isVisible) return null;

  return (
    <motion.div
      className="liquid-glass-cursor"
      style={{
        x: cursorX,
        y: cursorY,
        scaleX,
        scaleY,
        rotate,
        translateX: '-50%',
        translateY: '-50%',
        backgroundColor: isHovered 
          ? 'rgba(255, 255, 255, 0.15)' 
          : 'rgba(255, 255, 255, 0.05)',
        borderColor: isHovered
          ? 'rgba(255, 255, 255, 0.45)'
          : 'rgba(255, 255, 255, 0.25)',
      }}
    />
  );
}
