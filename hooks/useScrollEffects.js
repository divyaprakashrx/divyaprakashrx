import { useState, useEffect, useRef, useMemo } from 'react';

export default function useScrollEffects(frameRef) {
  // State values
  const [scrollPosition, setScrollPosition] = useState(0);
  const [section, setSection] = useState(0);
  const [contentInView, setContentInView] = useState(false);
  const [fluidSectionInView, setFluidSectionInView] = useState(false);
  const [contactSectionInView, setContactSectionInView] = useState(false);
  const [sectionProgress, setSectionProgress] = useState(0);
  
  // Refs for performance
  const ticking = useRef(false);
  const isScrolling = useRef(false);
  const scrollTimeout = useRef(null);
  const previousScrollPosition = useRef(0);
  const scrollingDirection = useRef(0); // 1 for down, -1 for up
  
  const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 0;
  
  // Reduced scroll multiplier for smoother behavior
  const scrollMultiplier = 1.0;
  
  // Improved snap-to-section functionality
  const snapToSection = (sectionIndex) => {
    if (!frameRef.current) return;
    
    const targetPosition = sectionIndex * viewportHeight;
    frameRef.current.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    if (!frameRef.current) return;
    
    const handleScroll = () => {
      const currentPosition = frameRef.current.scrollTop;
      
      // Determine scroll direction
      scrollingDirection.current = currentPosition > previousScrollPosition.current ? 1 : -1;
      previousScrollPosition.current = currentPosition;
      
      // Reset scroll timeout for debouncing end of scroll
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      
      isScrolling.current = true;
      
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setScrollPosition(currentPosition);
          
          // Calculate section and progress
          const exactSection = currentPosition / viewportHeight;
          const currentWholeSection = Math.floor(exactSection);
          const progress = exactSection - currentWholeSection;
          
          setSectionProgress(progress);
          setSection(currentWholeSection);
          
          // Set visibility based on sections with improved thresholds
          const threshold = 0.2; // Section visibility threshold
          
          // Content section (section 1)
          setContentInView(
            (currentWholeSection === 0 && progress > 0.8) || 
            (currentWholeSection === 1 && progress < 0.8)
          );
          
          // Fluid section (section 2)
          setFluidSectionInView(
            (currentWholeSection === 1 && progress > 0.8) ||
            (currentWholeSection === 2 && progress < 0.8)
          );
          
          // Contact section (section 3)
          setContactSectionInView(
            (currentWholeSection === 2 && progress > 0.8) ||
            currentWholeSection === 3
          );
          
          ticking.current = false;
          
          // Set a timeout to detect when scrolling stops
          scrollTimeout.current = setTimeout(() => {
            isScrolling.current = false;
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
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [frameRef, viewportHeight]);
  
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
    const earthOpacity = section === 0 
      ? Math.max(0, 1 - easeOutCubic(sectionProgress * 1.5))
      : 0;
    
    // Parallax effect factors
    let sectionFactor;
    if (section === 0) {
      sectionFactor = 1.0; // Full effect in first section
    } else if (section === 1) {
      sectionFactor = 0.5; // Half effect in second section
    } else {
      sectionFactor = 0.25; // Quarter effect in other sections
    }
    
    // Reduced parallax strength to prevent content displacement
    const baseParallaxStrength = 0.003;
    const velocityDampening = isScrolling.current ? 0.7 : 1.0;
    
    const parallaxX1 = -scrollPosition * baseParallaxStrength * sectionFactor * velocityDampening;
    const parallaxY1 = -scrollPosition * (baseParallaxStrength / 2) * sectionFactor * velocityDampening;
    const parallaxX2 = scrollPosition * (baseParallaxStrength * 1.5) * sectionFactor * velocityDampening;
    const parallaxY2 = -scrollPosition * (baseParallaxStrength * 0.8) * sectionFactor * velocityDampening;
    
    // Fluid section effects only active in section 2
    const fluidSectionStart = viewportHeight * 2;
    const fluidEffect = section === 2 ? easeInOutCubic(sectionProgress) : 0;
    const fluidParallaxX = ((scrollPosition - fluidSectionStart) * 0.002) * fluidEffect;
    const fluidParallaxY = ((scrollPosition - fluidSectionStart) * 0.001) * fluidEffect;
    
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
  }, [scrollPosition, section, sectionProgress, viewportHeight, isScrolling.current]);

  return {
    scrollPosition,
    section,
    contentInView,
    fluidSectionInView,
    contactSectionInView,
    sectionProgress,
    ...effects,
    snapToSection
  };
}