'use client';
import { useRef, useState, useEffect } from "react";
import { MotionConfig } from "framer-motion";
import { Frame } from "../components/styled/Layout";
import EarthSection from "../components/sections/EarthSection";
import ContentSection from "../components/sections/ContentSection";
import EnhancedVisionSection from '../components/sections/EnhancedVisionSection';
import ArsynalSection from '../components/sections/ArsynalSection';
import UnyxSection from '../components/sections/UnyxSection';
import OpenSourceSection from '../components/sections/OpenSourceSection';
import ResearchSection from '../components/sections/ResearchSection';
import FluidSection from "../components/sections/FluidSection";
import ContactSection from "../components/sections/ContactSection";
import SectionNavDots from '../components/SectionNavDots';
import useScrollEffects from "../hooks/useScrollEffects";
import { preloadAssets } from '../utils/preloadAssets';
import useElementInView from '../hooks/useElementInView';
import TigerWatermark from '../components/TigerWatermark';

export default function Home() {
  const frameRef = useRef(null);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  
  const [contentRef, contentInViewState] = useElementInView(0.15);
  const [fluidRef, fluidInView] = useElementInView(0.15);
  const [contactRef, contactInView] = useElementInView(0.15);
  
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

  useEffect(() => {
    const loadAssets = async () => {
      const loaded = await preloadAssets();
      setAssetsLoaded(loaded);
      if (loaded) {
        const loadTimer = setTimeout(() => setPageLoaded(true), 500);
        return () => clearTimeout(loadTimer);
      }
    };
    loadAssets();
  }, []);

  const snap = {};

  return (
    <>
      <Frame ref={frameRef}>
        {/* Hero */}
        <section id="hero" style={{ height: '100vh', ...snap }}>
          <EarthSection 
            inView={true} 
            zoomLevel={zoomLevel}
            opacity={earthOpacity}
            titleOpacity={1 - earthOpacity}
            loaded={pageLoaded && assetsLoaded}
          />
        </section>
        
        {/* Intro */}
        <section id="intro" ref={contentRef} style={{ height: '100vh', ...snap }}>
          <ContentSection 
            inView={contentInViewState || contentInView}
            parallaxX1={parallaxX1}
            parallaxY1={parallaxY1}
            parallaxX2={parallaxX2}
            parallaxY2={parallaxY2}
          />
        </section>

        {/* About & Skills */}
        <EnhancedVisionSection id="about" />

        {/* Arsynal */}
        <ArsynalSection id="arsynal" />

        {/* Unyx */}
        <UnyxSection id="unyx" />

        {/* Open Source */}
        <OpenSourceSection id="open-source" />

        {/* Research */}
        <ResearchSection id="research" />

        {/* Impact Highlights */}
        <section id="highlights" ref={fluidRef} style={{ height: '100vh', ...snap }}>
          <FluidSection inView={fluidInView || fluidSectionInView} />
        </section>
        
        {/* Contact */}
        <section id="contact" ref={contactRef} style={{ height: '100vh', ...snap }}>
          <ContactSection inView={contactInView || contactSectionInView} />
        </section>
      </Frame>

      <SectionNavDots frameRef={frameRef} />
      <TigerWatermark />
    </>
  );
}
