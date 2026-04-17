import { useEffect, useRef } from 'react';

/**
 * Runs a canvas animation loop only when the canvas element is visible.
 * Automatically pauses via IntersectionObserver when off-screen.
 */
export default function useCanvasAnimation(canvasRef, drawFn, deps = []) {
  const animRef = useRef(null);
  const isVisible = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const loop = () => {
      if (!isVisible.current) return;
      drawFn(canvas);
      animRef.current = requestAnimationFrame(loop);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          // Restart loop when visible
          cancelAnimationFrame(animRef.current);
          animRef.current = requestAnimationFrame(loop);
        } else {
          // Stop loop when off-screen
          cancelAnimationFrame(animRef.current);
        }
      },
      { threshold: 0.01 }
    );

    observer.observe(canvas);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
