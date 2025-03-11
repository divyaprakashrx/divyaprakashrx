'use client';
import { useRef, useState, useEffect } from "react";
import { Frame } from "../components/styled/Layout";
import EarthSection from "../components/sections/EarthSection";
import ContentSection from "../components/sections/ContentSection";
import FluidSection from "../components/sections/FluidSection";
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
    fluidSectionInView
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


  // Calculate title opacity including page load and asset load state
  const titleOpacity = (pageLoaded && assetsLoaded) ? Math.max(0, earthOpacity * 1.5) : 0;

  return (
    <Frame ref={frameRef}>
      <EarthSection 
        zoomLevel={zoomLevel} 
        opacity={earthOpacity}
        titleOpacity={titleOpacity}
      />
      
      <ContentSection 
        inView={contentInView}
        parallaxX1={parallaxX1}
        parallaxY1={parallaxY1}
        parallaxX2={parallaxX2}
        parallaxY2={parallaxY2}
      />
      
      <FluidSection 
        inView={fluidSectionInView}
      />
    </Frame>
  );
}
