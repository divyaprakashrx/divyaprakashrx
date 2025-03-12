import { useRef, useState, useEffect } from "react";
import { NeonContainer, NeonCircle } from '../styled/Effects';
import { FloatingElement } from "../styled/Layout";
import { siteContent } from "../../config/site-content";
import { siteConfig } from "../../config/site";

// Import styled components from new files
import { Section, ScrollableContent, SectionsContainer, BackgroundLayer } from '../styled/Sections';
import { ActiveSectionTitle, FloatingNav, NavPill, MobileSectionIndicator, SectionDot } from '../styled/Navigation';
import { SectionWithFloatingElements } from '../styled/Layout';
// Import section components
import IntroductionSection from './IntroductionSection';
// VisionSection import removed
import ImpactAreasSection from './ImpactAreasSection';

export default function ContentSection({ inView, parallaxX1, parallaxY1, parallaxX2, parallaxY2 }) {
  const [activeSection, setActiveSection] = useState('introduction');
  const scrollableContentRef = useRef(null);
  const sectionRefs = useRef({});
  
  // Section navigation
  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'vision', title: 'Vision' },
    { id: 'impact-areas', title: 'Areas of Impact' }
  ];
  
  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  // Simple scroll to section function
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    
    if (sectionRefs.current[sectionId]) {
      sectionRefs.current[sectionId].scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Create a ref to store the observer instance
  const observerRef = useRef(null);
  // Store intersection ratios in a ref to avoid recreating the observer
  const intersectionRatiosRef = useRef({});

  // Use Intersection Observer to detect which section is in view
  useEffect(() => {
    if (!isBrowser || !scrollableContentRef.current) return;
    
    // Initialize intersection ratios
    sections.forEach(section => {
      intersectionRatiosRef.current[section.id] = 0;
    });
    
    // Handler for intersection changes
    const handleIntersection = (entries) => {
      let needsUpdate = false;
      
      entries.forEach(entry => {
        const sectionId = entry.target.id;
        // Update ratio
        intersectionRatiosRef.current[sectionId] = entry.intersectionRatio;
        needsUpdate = true;
      });
      
      if (needsUpdate) {
        // Find the section with highest visibility
        let maxRatio = 0;
        let maxSection = null;
        
        Object.keys(intersectionRatiosRef.current).forEach(sectionId => {
          if (intersectionRatiosRef.current[sectionId] > maxRatio) {
            maxRatio = intersectionRatiosRef.current[sectionId];
            maxSection = sectionId;
          }
        });
        
        // Only update if we have meaningful visibility (> 10%) and a section was found
        if (maxRatio > 0.1 && maxSection) {
          setActiveSection(maxSection);
        }
      }
    };
    
    // Create observer with improved options
    const observerOptions = {
      root: scrollableContentRef.current,
      rootMargin: '-10% 0px -10% 0px', // Give a margin to improve accuracy
      threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7]
    };
    
    // Clean up any existing observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
    
    // Create new observer
    observerRef.current = new IntersectionObserver(handleIntersection, observerOptions);
    
    // Observe all sections
    Object.keys(sectionRefs.current).forEach(sectionId => {
      const element = sectionRefs.current[sectionId];
      if (element && observerRef.current) {
        observerRef.current.observe(element);
      }
    });
    
    // Cleanup function
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [isBrowser]); // Only recreate when browser detection changes

  // Update observer when section refs change
  useEffect(() => {
    if (!observerRef.current) return;
    
    // Re-observe all sections if they've been updated
    Object.keys(sectionRefs.current).forEach(sectionId => {
      const element = sectionRefs.current[sectionId];
      if (element && observerRef.current) {
        observerRef.current.observe(element);
      }
    });
  }, [sections]); // Only run when sections array changes

  // Add separate state to track if navigation should be visible
  const [navigationVisible, setNavigationVisible] = useState(false);
  
  // Update visibility when inView changes
  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setNavigationVisible(true);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setNavigationVisible(false);
    }
  }, [inView]);

  return (
    <NeonContainer>
        <BackgroundLayer>
          <FloatingElement 
            top="10%" 
            left="10%" 
            translateX={`${parallaxX1}px`} 
            translateY={`${parallaxY1}px`}
            style={{
              boxShadow: siteConfig.theme.shadow.medium,
              opacity: inView ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out'
            }}
          />

          <FloatingElement 
            top="70%" 
            left="80%" 
            translateX={`${parallaxX2}px`} 
            translateY={`${parallaxY2}px`}
            style={{
              boxShadow: siteConfig.theme.shadow.medium,
              opacity: inView ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out'
            }}
          />
          
          <NeonCircle 
            style={{
              position: 'absolute',
              width: '200px',
              height: '200px',
              right: '10%',
              top: '20%',
              borderRadius: '50%',
              transform: `translate(${parallaxX2}px, ${parallaxY2}px)`,
              opacity: inView ? 0.9 : 0,
              transition: 'opacity 0.8s ease-in-out',
              filter: 'blur(2px)'
            }}
          />
        </BackgroundLayer>
      <Section id="impact-areas" >
        {/* Fixed background layer for decorative elements */}
      
        
        {/* Active section title with gradient underline */}
        {/* <ActiveSectionTitle isVisible={navigationVisible}>
          {sections.find(section => section.id === activeSection)?.title || 'Introduction'}
        </ActiveSectionTitle> */}
        
        {/* Floating pill navigation */}
        {/* <FloatingNav isVisible={navigationVisible}>
          {sections.map(section => (
            <NavPill 
              key={section.id} 
              active={activeSection === section.id}
              onClick={() => scrollToSection(section.id)}
              label={section.title}
              aria-label={section.title}
            />
          ))}
        </FloatingNav>
         */}
        {/* Main content area with vertical scrolling */}
            {/* Introduction Section */}
            <IntroductionSection
              id="introduction"
              sectionRef={el => sectionRefs.current.introduction = el}
              inView={inView}
              content={siteContent.contentSection}
            />
        
        {/* Mobile section indicator dots */}
        {/* <MobileSectionIndicator isVisible={navigationVisible}>
          {sections.map(section => (
            <SectionDot 
              key={section.id} 
              active={activeSection === section.id}
              onClick={() => scrollToSection(section.id)}
            />
          ))}
        </MobileSectionIndicator> */}
      </Section>
    </NeonContainer>
  );
}