'use client';
import { useRef, useState, useEffect } from "react";
import { Frame } from "../components/styled/Layout";
import EarthSection from "../components/sections/EarthSection";
import ContentSection from "../components/sections/ContentSection";
import FluidSection from "../components/sections/FluidSection";
import ContactSection from "../components/sections/ContactSection";
import EnhancedVisionSection from '../components/sections/EnhancedVisionSection';
import useScrollEffects from "../hooks/useScrollEffects";
import { preloadAssets } from '../utils/preloadAssets';
import useElementInView from '../hooks/useElementInView';

export default function Home() {
  const frameRef = useRef(null);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  
  // Use our custom hook instead of InView components
  const [contentRef, contentInViewState] = useElementInView(0.3);
  const [visionRef, visionInView] = useElementInView(0.3);
  const [fluidRef, fluidInView] = useElementInView(0.3);
  const [contactRef, contactInView] = useElementInView(0.3);
  
  const {
    contentInView,
    zoomLevel,
    earthOpacity,
    parallaxX1,
    parallaxY1,
    parallaxX2,
    parallaxY2,
    fluidSectionInView,
    contactSectionInView
  } = useScrollEffects(frameRef);

  // Handle asset loading and page load animation
  useEffect(() => {
    const loadAssets = async () => {
      const loaded = await preloadAssets();
      setAssetsLoaded(loaded);
      
      if (loaded) {
        const loadTimer = setTimeout(() => {
          setPageLoaded(true);
        }, 500);
        return () => clearTimeout(loadTimer);
      }
    };

    loadAssets();
  }, []);

  return (
    <Frame ref={frameRef}>
      <section style={{ 
        height: '100vh', 
        scrollSnapAlign: 'start', 
        scrollSnapStop: 'always' 
      }}>
        <EarthSection 
          inView={true} 
          zoomLevel={zoomLevel}
          opacity={earthOpacity}
          titleOpacity={1 - earthOpacity}
          loaded={pageLoaded && assetsLoaded}
        />
      </section>
      
      <section 
        ref={contentRef} 
        style={{ 
          height: '100vh', 
          scrollSnapAlign: 'start', 
          scrollSnapStop: 'always' 
        }}
      >
        <ContentSection 
          inView={contentInViewState || contentInView}
          parallaxX1={parallaxX1}
          parallaxY1={parallaxY1}
          parallaxX2={parallaxX2}
          parallaxY2={parallaxY2}
        />
      </section>
      
      <section 
        ref={visionRef} 
        style={{ 
          height: '100vh', 
          scrollSnapAlign: 'start', 
          scrollSnapStop: 'always' 
        }}
      >
        <EnhancedVisionSection inView={visionInView} />
      </section>
      
      <section 
        ref={fluidRef} 
        style={{ 
          height: '100vh', 
          scrollSnapAlign: 'start', 
          scrollSnapStop: 'always' 
        }}
      >
        <FluidSection inView={fluidInView || fluidSectionInView} />
      </section>
      
      <section 
        ref={contactRef} 
        style={{ 
          height: '100vh', 
          scrollSnapAlign: 'start', 
          scrollSnapStop: 'always'
        }}
      >
        <ContactSection inView={contactInView || contactSectionInView} />
      </section>
    </Frame>
  );
}
