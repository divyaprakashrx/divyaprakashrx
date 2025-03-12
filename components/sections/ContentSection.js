import { useRef, useState, useEffect } from "react";
import styled from "styled-components";
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

// Enhanced section background with animated gradient - renamed to avoid conflict
const ContentSectionBackground = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  background: linear-gradient(
    135deg,
    rgba(3, 9, 18, 0.97) 0%,
    rgba(5, 15, 30, 0.97) 50%,
    rgba(3, 9, 18, 0.97) 100%
  );
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 30%, rgba(33, 150, 243, 0.05) 0%, transparent 25%),
      radial-gradient(circle at 80% 20%, rgba(76, 175, 80, 0.05) 0%, transparent 20%),
      radial-gradient(circle at 40% 80%, rgba(255, 235, 59, 0.05) 0%, transparent 30%),
      radial-gradient(circle at 70% 60%, rgba(3, 169, 244, 0.05) 0%, transparent 25%);
    z-index: 0;
  }
`;

// Add subtle animated background particles
const BackgroundCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.4;
`;

export default function ContentSection({ inView, parallaxX1, parallaxY1, parallaxX2, parallaxY2 }) {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationRef = useRef(null);
  const sectionRefs = useRef({});

  
  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  

  // Initialize and animate background particles
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    function initParticles() {
      const particles = [];
      const colors = [
        'rgba(33, 150, 243, 0.4)',  // Blue
        'rgba(76, 175, 80, 0.4)',   // Green
        'rgba(255, 235, 59, 0.3)'   // Yellow
      ];
      
      for (let i = 0; i < 40; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 0.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          speedX: (Math.random() - 0.5) * 0.2,
          speedY: (Math.random() - 0.5) * 0.2,
          pulseSpeed: Math.random() * 0.005 + 0.002
        });
      }
      
      particlesRef.current = particles;
    }
    
    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach(particle => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Pulsating effect
        const time = Date.now() / 1000;
        const scale = Math.sin(time * particle.pulseSpeed) * 0.2 + 0.8;
        
        // Draw the particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius * scale, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
      
      animationRef.current = requestAnimationFrame(animateParticles);
    }
    
    animateParticles();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

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
      <ContentSectionBackground id="impact-areas">
        <BackgroundCanvas ref={canvasRef} />
            <IntroductionSection
              id="introduction"
              sectionRef={el => sectionRefs.current.introduction = el}
              inView={inView}
              content={siteContent.contentSection}
            />
      </ContentSectionBackground>
    </NeonContainer>
  );
}