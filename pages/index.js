'use client';
import { useRef, useState, useEffect } from "react";
import { Frame } from "../components/styled/Layout";
import EarthSection from "../components/sections/EarthSection";
import ContentSection from "../components/sections/ContentSection";
import FluidSection from "../components/sections/FluidSection";
import ContactSection from "../components/sections/ContactSection";
import useScrollEffects from "../hooks/useScrollEffects";
import { preloadAssets } from '../utils/preloadAssets';

export default function Home() {
  const frameRef = useRef(null);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  
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
      
      // Only start the page load timer after assets are loaded
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
      <EarthSection 
        inView={true} 
        zoomLevel={zoomLevel}
        opacity={earthOpacity}
        loaded={pageLoaded && assetsLoaded}
      />
      <ContentSection 
        inView={contentInView}
        parallaxX1={parallaxX1}
        parallaxY1={parallaxY1}
        parallaxX2={parallaxX2}
        parallaxY2={parallaxY2}
      />
      <FluidSection inView={fluidSectionInView} />
      <ContactSection inView={contactSectionInView} />
    </Frame>
  );
}
