import { useState, useEffect, useRef, useMemo } from 'react';

export default function useScrollEffects(frameRef) {
  // State values
  const [scrollPosition, setScrollPosition] = useState(0);
  const [section, setSection] = useState(0);
  const [contentInView, setContentInView] = useState(false);
  const [fluidSectionInView, setFluidSectionInView] = useState(false);
  const [sectionProgress, setSectionProgress] = useState(0);
  
  // Refs for performance
  const ticking = useRef(false);
  const lastScrollPosition = useRef(0);
  const isScrolling = useRef(false);
  const scrollTimeout = useRef(null);
  const previousScrollPosition = useRef(0);
  const scrollingDirection = useRef(0); // 1 for down, -1 for up
  
  const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 0;
  
  // High sensitivity multiplier for responsive section changes
  const scrollMultiplier = 10.0;;
  
  // Snap-to-section functionality
  const snapToSection = (sectionIndex) => {
    if (!frameRef.current) return;
    
    const targetPosition = sectionIndex * (viewportHeight / scrollMultiplier);
    frameRef.current.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    if (!frameRef.current) return;
    
    frameRef.current.style.scrollBehavior = 'smooth';
    
    const handleScroll = () => {
      const currentPosition = frameRef.current.scrollTop;
      
      // Determine scroll direction
      scrollingDirection.current = currentPosition > previousScrollPosition.current ? 1 : -1;
      previousScrollPosition.current = currentPosition;
      lastScrollPosition.current = currentPosition;
      
      // Reset scroll timeout for debouncing end of scroll
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      
      isScrolling.current = true;
      
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          // Apply multiplier for increased sensitivity
          const adjustedPosition = currentPosition * scrollMultiplier;
          setScrollPosition(adjustedPosition);
          
          // Calculate section and progress
          const exactSection = adjustedPosition / viewportHeight;
          const currentWholeSection = Math.floor(exactSection);
          const progress = exactSection - currentWholeSection;
          
          setSectionProgress(progress);
          
          // Use small threshold (5%) for section changes
          const threshold = 0.05;
          const newSection = progress > threshold ? currentWholeSection + 1 : currentWholeSection;
          
          setSection(newSection);
          
          // Always set content sections as visible regardless of scroll position
          // This ensures text in all sections is visible
          setContentInView(true);
          setFluidSectionInView(true);
          
          ticking.current = false;
          
          // Set a timeout to detect when scrolling stops
          scrollTimeout.current = setTimeout(() => {
            isScrolling.current = false;
            
            // Snap to nearest section when scrolling stops
            if (progress > 0.15 && progress < 0.85) {
              const targetSection = progress > 0.5 ? currentWholeSection + 1 : currentWholeSection;
              snapToSection(targetSection);
            }
          }, 150);
        });
        ticking.current = true;
      }
    };
    
    const frameElement = frameRef.current;
    frameElement.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial call
    handleScroll();
    
    return () => {
      frameElement.removeEventListener('scroll', handleScroll);
      frameElement.style.scrollBehavior = '';
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [frameRef, viewportHeight, scrollMultiplier]);
  
  // Calculate effects based on section with improved easing
  const effects = useMemo(() => {
    // Better easing functions
    const easeOutQuad = t => t * (2 - t);
    const easeOutCubic = t => 1 - Math.pow(1 - t, 3);
    const easeInOutCubic = t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    
    // Calculate zoom effect (first section only)
    const maxZoom = 1.4;
    const zoomProgress = section === 0 ? Math.min(1, sectionProgress * 2) : 1;
    const zoomLevel = 1 + easeOutCubic(zoomProgress) * (maxZoom - 1);
    
    // Calculate opacity transition (first section only)
    // Only apply opacity to the earth element, not to text content
    const earthOpacity = section === 0 
      ? Math.max(0, 1 - easeOutCubic(sectionProgress * 1.5))
      : 0;
    
    // Only apply parallax effects to decorative elements, not content
    // Progressive parallax effects - strongest in first section
    // then decreasing with each section
    let sectionFactor;
    if (section === 0) {
      sectionFactor = 1.0; // Full effect in first section
    } else if (section === 1) {
      sectionFactor = 0.5; // Half effect in second section
    } else {
      sectionFactor = 0.25; // Quarter effect in other sections
    }
    
    // Use much lower parallax values to prevent text displacement
    const baseParallaxStrength = 0.004; // Reduced from 0.008
    const velocityDampening = isScrolling.current ? 0.7 : 1.0;
    
    const parallaxX1 = -scrollPosition * baseParallaxStrength * sectionFactor * velocityDampening;
    const parallaxY1 = -scrollPosition * (baseParallaxStrength / 2) * sectionFactor * velocityDampening;
    const parallaxX2 = scrollPosition * (baseParallaxStrength * 1.5) * sectionFactor * velocityDampening;
    const parallaxY2 = -scrollPosition * (baseParallaxStrength * 0.8) * sectionFactor * velocityDampening;
    
    // Fluid section effects only active in section 2
    const fluidSectionStart = viewportHeight * 2 * scrollMultiplier;
    const fluidEffect = section === 2 ? easeInOutCubic(sectionProgress) : 0;
    const fluidParallaxX = ((scrollPosition - fluidSectionStart) * 0.003) * fluidEffect; // Reduced from 0.005
    const fluidParallaxY = ((scrollPosition - fluidSectionStart) * 0.0015) * fluidEffect; // Reduced from 0.0025
    
    return {
      zoomLevel,
      earthOpacity,
      parallaxX1,
      parallaxY1,
      parallaxX2,
      parallaxY2,
      fluidParallaxX,
      fluidParallaxY
    };
  }, [scrollPosition, section, sectionProgress, viewportHeight, scrollMultiplier, isScrolling.current]);

  return {
    scrollPosition,
    section,
    contentInView,
    fluidSectionInView,
    sectionProgress,
    ...effects,
    snapToSection // Export this so components can trigger section changes
  };
}