import styled, { keyframes, css } from "styled-components";
import { ContentTitle, ContentText } from "../styled/TextElements";
import { FloatingElement } from "../styled/Layout";
import { NeonContainer, NeonCircle } from '../styled/Effects';
import CardGallery from "../CardGallery";
import { useRef, useState, useEffect } from "react";
import { siteContent } from "../../config/content";
import { siteConfig } from "../../config/site";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

// Modified container to properly handle vertical scrolling
const Section = styled.section`
  height: 100vh;
  background-color: ${siteConfig.theme.background.main};
  color: ${siteConfig.theme.text.primary};
  position: relative;
  overflow: hidden;
  z-index: 2;
  scroll-snap-align:start;
`;

// Simplify ScrollableContent to use basic scrolling behavior
const ScrollableContent = styled.div`;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

// Update SectionsContainer with more padding
const SectionsContainer = styled.div`
  width: 100%;
  display: flex;
  padding-top: 100px;
  padding-bottom: 200px; /* Increase bottom padding significantly */
  flex-direction: column;
  position: absolute;
  
  &:after {
    content: '';
    height: 100px; /* Extra space after the last element */
    width: 100%;
    display: block;
  }
`;

// Content container to hold sections
const ContentContainer = styled.div`
  flex: 1;
  padding: 0 2rem;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Fixed background layer for decorative elements
const BackgroundLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; // Allow clicks to pass through to the content
`;

const StyledCardGallery = styled(CardGallery)`
  @media (max-width: 768px) {
    display: none;
  }
`;

const CarouselContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 20px auto;
  height: auto;
  overflow: hidden;
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
  @media (max-width: 1100px) {
  width: 100%;
  }

  @media (max-width: 768px) {
    display: block;
    margin: 10px auto;
    height: 400px;
  }
`;

const CarouselWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  touch-action: pan-x;
  height: 100%;
  ${props => props.autoScroll && !props.isPaused && css`
    transition: transform ${props.transitionSpeed || 0.5}s ease-in-out;
  `}
`;

const CarouselCard = styled.div`
  padding: 0;
  box-sizing: border-box;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 900px) {
    flex: 0 0 100%;
  }
`;

const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: ${siteConfig.theme.primary.main};
  color: ${siteConfig.theme.text.primary};
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  font-size: 20px;
  box-shadow: ${siteConfig.theme.shadow.medium};
  
  &:first-of-type {
    left: 5px;
  }
  
  &:last-of-type {
    right: 5px;
  }
`;

const textAppear = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SmallContentTitle = styled(ContentTitle)`
  @media (max-width: 768px) {
    font-size: clamp(1.5rem, 2.5vw, 2rem);
    margin-bottom: 1rem;
  }
  animation: ${props => props.inView ? textAppear : 'none'} 0.8s ease-out forwards;
`;

// Make text smaller for narrower screens
const SmallContentText = styled(ContentText)`
  @media (max-width: 768px) {
    font-size: clamp(0.75rem, 1.2vw, 1rem);
    line-height: 1.4;
    padding: 0 1rem;
    margin-bottom: 1rem;
  }
  animation: ${props => props.inView ? textAppear : 'none'} 0.8s ease-out forwards;
  animation-delay: 0.2s;
`;

const SectionTitle = styled(ContentTitle)`
  font-size: clamp(1.8rem, 3vw, 2.2rem);
  margin-bottom: 1.5rem;
  color: ${siteConfig.theme.text.primary};
`;

const SectionText = styled(ContentText)`
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  margin-bottom: 2rem;
  max-width: 800px;
`;

const PrinciplesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const PrincipleItem = styled.li`
  background: ${siteConfig.theme.primary.main};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  color: ${siteConfig.theme.text.primary};
  box-shadow: ${siteConfig.theme.shadow.subtle};
`;

const ImpactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto 2rem;
`;

// Updated ImpactCard with position relative for overlay positioning
const ImpactCard = styled.div`
  position: relative;
  background: ${siteConfig.theme.background.card};
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: ${siteConfig.theme.shadow.subtle};
  backdrop-filter: blur(5px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  min-height: 160px;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${siteConfig.theme.shadow.strong};
  }
`;

// New overlay component that appears on hover
const ImpactCardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${siteConfig.theme.background.overlay};
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  transition: opacity 0.3s ease;
  border-radius: 10px;
  transform: translateY(10px);
  pointer-events: none;
  
  ${ImpactCard}:hover & {
    opacity: 1;
    transform: translateY(0);
    pointer-events: all;
  }
`;

const ImpactTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.8rem;
  color: ${siteConfig.theme.text.primary};
`;

const OverlayDescription = styled.p`
  color: ${siteConfig.theme.text.primary};
  font-size: 1rem;
  line-height: 1.5;
  text-align: center;
`;

const HighlightsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto 2rem;
  max-width: 800px;
  text-align: left;
`;

const HighlightItem = styled.li`
  margin-bottom: 0.8rem;
  padding-left: 1.5rem;
  position: relative;
  
  &:before {
    content: '→';
    position: absolute;
    left: 0;
    color: ${siteConfig.theme.primary.accent};
  }
`;

// Update SectionContainer for vertical layout
const SectionContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-snap-align: start;
  scroll-margin-top: 10px; /* Add margin to improve scroll positioning */
  position: relative;
  justify-content: center;
  padding-top: 80px;
  
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

// Updated ContactSection for vertical layout with better scroll handling
const ContactSection = styled(SectionContainer)`
  background: linear-gradient(to bottom, ${siteConfig.theme.background.main}, rgba(5, 30, 60, 0.95));
  border-radius: 15px;
  margin: 2rem 0;
  padding: 3rem 1rem;
  padding-bottom: 6rem; /* Increase bottom padding for last section */
  position: relative;
  overflow: hidden;
  scroll-snap-stop: always; /* Ensure snap works */
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, rgba(0, 120, 255, 0.05) 0%, transparent 70%);
    z-index: -1;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 900px;
  margin: 2rem auto;
`;

const ContactCard = styled.div`
  background: rgba(20, 30, 50, 0.5);
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  box-shadow: ${siteConfig.theme.shadow.subtle};
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ContactIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: ${siteConfig.theme.primary.accent};
`;

const ContactLink = styled.a`
  color: ${siteConfig.theme.text.primary};
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${siteConfig.theme.primary.accent};
  }
`;

// Add active section title with gradient underline - fix visibility issues
const ActiveSectionTitle = styled.h2`
  position: relative;
  top: 100px;
  left: 20px;
  font-size: 1.4rem;
  color: ${siteConfig.theme.text.primary};
  z-index: 100;
  margin: 0;
  font-weight: 500;
  display: inline-block;
  padding-bottom: 5px;
  opacity: ${props => props.isVisible ? 1 : 0};
  visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  pointer-events: ${props => props.isVisible ? 'auto' : 'none'};
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 100%;
    background: linear-gradient(90deg, 
      ${siteConfig.theme.primary.accent}, 
      rgba(0, 120, 255, 0.5), 
      rgba(80, 160, 255, 0.2)
    );
    border-radius: 3px;
  }
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

// Updated FloatingNav to ensure hiding when not in view
const FloatingNav = styled.nav`
  position: relative;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 15px;
  z-index: 100;
  opacity: ${props => props.isVisible ? 1 : 0};
  visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  pointer-events: ${props => props.isVisible ? 'auto' : 'none'};
  
  @media (max-width: 768px) {
    display: none;
  }
`;

// Update NavPill to only show name on hover
const NavPill = styled.button`
  background: ${props => props.active ? siteConfig.theme.primary.accent : 'rgba(255, 255, 255, 0.1)'};
  border: none;
  width: ${props => props.active ? '14px' : '12px'};
  height: ${props => props.active ? '14px' : '12px'};
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: ${props => props.active ? 'center' : 'flex-start'};
  padding: 0;
  color: white;
  font-size: 0;
  transition: all 0.3s ease;
  position: relative;
  box-shadow: ${props => props.active ? '0 0 15px rgba(0, 120, 255, 0.5)' : '0 0 5px rgba(255, 255, 255, 0.3)'};
  
  &:hover {
    transform: scale(1.2);
    
    &:after {
      opacity: 1;
      transform: translateX(20px);
    }
  }
  
  &:after {
    content: '${props => props.label}';
    position: absolute;
    left: 100%;
    font-size: 0.85rem;
    opacity: 0;
    transform: translateX(10px);
    transition: all 0.3s ease;
    background: rgba(0, 20, 40, 0.7);
    padding: 5px 10px;
    border-radius: 5px;
    white-space: nowrap;
    pointer-events: none;
  }
`;

// Mobile section indicator - ensure hiding when not in view
const MobileSectionIndicator = styled.div`
  display: none;
  position: relative;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 20, 40, 0.8);
  backdrop-filter: blur(5px);
  padding: 8px 15px;
  border-radius: 20px;
  z-index: 10;
  opacity: ${props => props.isVisible ? 1 : 0};
  visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  pointer-events: ${props => props.isVisible ? 'auto' : 'none'};
  
  @media (max-width: 768px) {
    display: flex;
    gap: 10px;
  }
`;

const SectionDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.active ? siteConfig.theme.primary.accent : 'rgba(255, 255, 255, 0.3)'};
  transition: background 0.3s ease;
`;

export default function ContentSection({ inView, parallaxX1, parallaxY1, parallaxX2, parallaxY2 }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeSection, setActiveSection] = useState('introduction');
  const carouselRef = useRef(null);
  const scrollableContentRef = useRef(null);
  const sectionRefs = useRef({});
  
  // Add missing refs and constants
  const touchStartXRef = useRef(0);
  const autoScrollInterval = 5000; // Define the missing constant
  const transitionSpeed = 0.8; // Also define this since it's used
  
  // Section navigation - Remove contact section
  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'vision', title: 'Vision' },
    { id: 'impact-areas', title: 'Areas of Impact' }
  ];
  
  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const nextSlide = () => {
    const cardCount = siteContent.cards.length; // Define cardCount locally
    setCurrentSlide((prevSlide) => (prevSlide + 1) % cardCount);
  };

  const prevSlide = () => {
    const cardCount = siteContent.cards.length; // Define cardCount locally
    setCurrentSlide((prevSlide) => (prevSlide - 1 + cardCount) % cardCount);
  };

  // Auto scroll functionality
  useEffect(() => {
    let interval;
    if (inView && !isPaused) {
      interval = setInterval(() => {
        nextSlide();
      }, autoScrollInterval);
    }
    return () => clearInterval(interval);
  }, [inView, isPaused]);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }, [currentSlide]);

  // Add touch swipe support for mobile
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
    setIsPaused(true); // Pause auto-scroll on touch
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;
    
    // If swiped more than 50px, change slide
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide(); // Swipe left -> next slide
      } else {
        prevSlide(); // Swipe right -> previous slide
      }
    }
    
    // Resume auto-scroll after a short delay
    setTimeout(() => setIsPaused(false), 2000);
  };

  // Pause on hover
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

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
    
    return () => {
      // No need to disconnect here, just re-observe
    };
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
      <Section>
        {/* Fixed background layer for decorative elements */}
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
              top: '20%',
              right: '15%',
              transform: `translate(${parallaxX2}px, ${parallaxY2}px)`,
              opacity: inView ? 0.9 : 0,
              transition: 'opacity 0.8s ease-in-out',
              filter: 'blur(2px)'
            }}
          />
        </BackgroundLayer>
        
        {/* Active section title with gradient underline */}
        <ActiveSectionTitle isVisible={navigationVisible}>
          {sections.find(section => section.id === activeSection)?.title || 'Introduction'}
        </ActiveSectionTitle>
        
        {/* Floating pill navigation */}
        <FloatingNav isVisible={navigationVisible}>
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
        
        {/* Main content area with vertical scrolling */}
        <ScrollableContent ref={scrollableContentRef}>
          <SectionsContainer>
            {/* Introduction Section */}
            <SectionContainer 
              id="introduction"
              ref={el => sectionRefs.current.introduction = el}
            >
              <SmallContentTitle inView={inView}>
                {siteContent.contentSection.title}
              </SmallContentTitle>

              <ContentText inView={inView}>
                {siteContent.contentSection.description}
              </ContentText>

              <SmallContentText inView={inView}>
                {siteContent.contentSection.smallDescription}
              </SmallContentText>
              
              {/* Card Carousel Section */}
              {/* <CarouselContainer>
                {isBrowser && window.innerWidth < 900 &&
                  <CarouselButton onClick={prevSlide}>&#10094;</CarouselButton>
                } 
                <CarouselWrapper 
                  ref={carouselRef}
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  autoScroll={isBrowser && window.innerWidth < 900}
                  isPaused={isPaused || (isBrowser && window.innerWidth < 900)} 
                  transitionSpeed={transitionSpeed}
                >
                  {siteContent.cards.map((card, index) => (
                    <CarouselCard key={card.id}>
                      <CardGallery inView={true} cardIndex={index} />
                    </CarouselCard>
                  ))}
                </CarouselWrapper>
                {
                  isBrowser && window.innerWidth < 900 &&
                  <CarouselButton onClick={nextSlide}>&#10095;</CarouselButton>
                }
              </CarouselContainer> */}
            </SectionContainer>

            {/* Vision Section */}
            <SectionContainer 
              id="vision"
              ref={el => sectionRefs.current.vision = el}
            >
              <SectionTitle inView={inView}>
                {siteContent.vision.title}
              </SectionTitle>
              <SectionText inView={inView}>
                {siteContent.vision.description}
              </SectionText>
              <PrinciplesList>
                {siteContent.vision.principles.map((principle, index) => (
                  <PrincipleItem key={index}>{principle}</PrincipleItem>
                ))}
              </PrinciplesList>
            </SectionContainer>
            
            {/* Impact Areas Section - Fix the syntax error in the ref assignment */}
            <SectionContainer 
              id="impact-areas"
              ref={el => sectionRefs.current['impact-areas'] = el}
            >
              <SectionTitle inView={inView}>
                {siteContent.impactAreas.title}
              </SectionTitle>
              <ImpactGrid>
                {siteContent.impactAreas.areas.map((area, index) => (
                  <ImpactCard key={index}>
                    <ImpactTitle>{area.title}</ImpactTitle>
                    <SmallContentText style={{ margin: '0 0 auto' }}>
                      {/* Show a shortened preview of description */}
                      {area.description.substring(0, 70)}
                      {area.description.length > 70 ? '...' : ''}
                    </SmallContentText>
                    
                    {/* Overlay with full description on hover */}
                    <ImpactCardOverlay>
                      <ImpactTitle>{area.title}</ImpactTitle>
                      <OverlayDescription>{area.description}</OverlayDescription>
                    </ImpactCardOverlay>
                  </ImpactCard>
                ))}
              </ImpactGrid>
            </SectionContainer>
            
            {/* Contact section has been moved to a separate component */}
          </SectionsContainer>
        </ScrollableContent>
        
        {/* Mobile section indicator dots */}
        <MobileSectionIndicator isVisible={navigationVisible}>
          {sections.map(section => (
            <SectionDot 
              key={section.id} 
              active={activeSection === section.id}
              onClick={() => scrollToSection(section.id)}
            />
          ))}
        </MobileSectionIndicator>
      </Section>
    </NeonContainer>
  );
}