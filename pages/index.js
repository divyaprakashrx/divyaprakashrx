'use client';
import { useRef, useState, useEffect } from "react";
import { Frame } from "../components/styled/Layout";
import EarthSection from "../components/sections/EarthSection";
import ContentSection from "../components/sections/ContentSection";
import useScrollEffects from "../hooks/useScrollEffects";

export default function Home() {
  const frameRef = useRef(null);
  const [pageLoaded, setPageLoaded] = useState(false);
  
  const {
    contentInView,
    zoomLevel,
    earthOpacity,
    parallaxX1,
    parallaxY1,
    parallaxX2,
    parallaxY2
  } = useScrollEffects(frameRef);

  // Handle page load animation
  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setPageLoaded(true);
    }, 500);
    
    return () => clearTimeout(loadTimer);
  }, []);

  useEffect(() => {
    // Load particles
    if (typeof window !== "undefined") {
      try {
        require("../components/particles/render");
      } catch (error) {
        console.error("Error loading particles/render:", error);
      }
    }
  }, []);

  // Calculate title opacity including page load state
  const titleOpacity = pageLoaded ? Math.max(0, earthOpacity * 1.5) : 0;

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
      
      <canvas id="swarm"></canvas>
    </Frame>
  );
}
