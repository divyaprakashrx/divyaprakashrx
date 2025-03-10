import { useState, useEffect } from "react";

export default function useScrollEffects(frameRef) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [section, setSection] = useState(0);
  const [contentInView, setContentInView] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const newPosition = frameRef.current.scrollTop;
      setScrollPosition(newPosition);
      
      // Calculate viewport height for transitions
      const viewportHeight = window.innerHeight;
      
      // Update current section based on scroll position
      if (newPosition < viewportHeight / 2) {
        setSection(0);
        setContentInView(false);
      } else {
        setSection(1);
        setContentInView(true);
      }
    };

    const frameElement = frameRef.current;
    if (frameElement) {
      frameElement.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (frameElement) {
        frameElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, [frameRef]);

  // Calculate properties based on scroll position
  const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 0;
  const transitionStartPoint = viewportHeight * 0.5; 
  
  // Calculate zoom effect
  const maxZoom = 1.5;
  const zoomLevel = Math.min(
    maxZoom, 
    1 + (Math.min(scrollPosition, transitionStartPoint) / transitionStartPoint) * (maxZoom - 1)
  );
  
  // Calculate opacity
  const earthOpacity = Math.max(
    0,
    1 - (Math.max(0, scrollPosition - transitionStartPoint) / (viewportHeight - transitionStartPoint))
  );
  
  // Parallax effects
  const parallaxX1 = -scrollPosition * 0.05;
  const parallaxY1 = -scrollPosition * 0.02;
  const parallaxX2 = scrollPosition * 0.07;
  const parallaxY2 = -scrollPosition * 0.03;

  return {
    scrollPosition,
    section,
    contentInView,
    zoomLevel,
    earthOpacity,
    parallaxX1,
    parallaxY1,
    parallaxX2,
    parallaxY2
  };
}