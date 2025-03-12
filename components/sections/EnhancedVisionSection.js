import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { SectionTitle, SectionText } from '../ui/EnhancedText';
import { siteConfig } from '../../config/site';
import { siteContent } from '../../config/site-content';

// Styled components for the vision section
const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgb(3, 9, 18);
  align-items: center;
  overflow: hidden;
  position: relative;
  scroll-snap-align: start;
`;

const PrinciplesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  z-index: 2;
  position: relative;
`;

const PrincipleItem = styled.li`
  background: ${props => props.theme.primary ? props.theme.primary.main : 'rgba(40, 80, 170, 0.2)'};
  padding: 0.6rem 1.6rem;
  border-radius: 24px;
  font-size: 0.95rem;
  color: ${props => props.theme.text ? props.theme.text.primary : '#ffffff'};
  box-shadow: 0 2px 10px rgba(20, 60, 120, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  backdrop-filter: blur(4px);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(60, 100, 200, 0.25);
  }
`;

// New glass card container
const GlassCard = styled.div`
  position: relative;
  z-index: 2;
  max-width: 900px;
  width: 85%;
  padding: 2.5rem;
  text-align: center;
  background: rgba(50, 59, 86, 0.3);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 16px;
  border: 1px solid rgba(100, 130, 200, 0.1);
  box-shadow: 0 8px 32px rgba(10, 20, 40, 0.12);
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: transform 0.3s ease, box-shadow 0.4s ease;
  
  @media (max-width: 768px) {
    width: 90%;
    padding: 1.8rem;
  }
  
  &:hover {
    box-shadow: 0 12px 42px rgba(20, 40, 80, 0.18);
  }
`;

const StarsCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export default function EnhancedVisionSection({ inView }) {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const cosmicCloudsRef = useRef([]); // Changed from nebulaeRef
  const animationRef = useRef(null);
  const timeRef = useRef(0);

  // Initialize cosmic-themed background
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    
    // Set canvas to full screen
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Reset stars and cosmic clouds
      // initStars();
      initCosmicClouds(); // Changed from initNebulae
    };
    
    window.addEventListener('resize', resize);
    resize();
    
    // Initialize stars - reduced count further to 70%
    function initStars() {
      const starCount = 98; // Reduced to 70% of original 140
      const stars = [];
      
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.2 + 0.2, // Smaller stars
          brightness: Math.random() * 0.4 + 0.5, 
          pulseSpeed: Math.random() * 0.008 + 0.002, // Slower pulse
          pulseAmount: Math.random() * 0.4 + 0.3, // Less dramatic pulse
          isGlowing: Math.random() > 0.8 // Fewer glowing stars
        });
      }
      
      starsRef.current = stars;
    }
    
    // Initialize cosmic clouds - replacing nebulae
    function initCosmicClouds() {
      const cloudCount = 4; // Slightly increased from nebulae
      const clouds = [];
      
      for (let i = 0; i < cloudCount; i++) {
        clouds.push({
          x: 20 + (Math.random() * 60),
          y: 20 + (Math.random() * 60),
          radiusX: 15 + Math.random() * 25, // Slightly smaller than nebulae
          radiusY: 15 + Math.random() * 25,
          color: i % 2 === 0 
            ? `hsla(${180 + Math.random() * 40}, 65%, 45%, 0.07)` // Teal/blue hues
            : `hsla(${120 + Math.random() * 30}, 60%, 50%, 0.06)`, // Green hues
          drift: {
            x: (Math.random() - 0.5) * 0.04, // Slightly faster than nebulae
            y: (Math.random() - 0.5) * 0.03
          },
          pulseSpeed: Math.random() * 0.004 + 0.001,
          rotation: Math.random() * Math.PI,
          complexity: Math.random() * 3 + 2 // New property for cloud complexity
        });
      }
      
      cosmicCloudsRef.current = clouds;
    }
    
    // Animation loop
    function animate() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update time - slower for more subtle animation
      timeRef.current += 0.003;
      const time = timeRef.current;
      
      // Draw cleaner background gradient
      const gradient = context.createRadialGradient(
        canvas.width / 2, 
        canvas.height / 2, 
        0,
        canvas.width / 2, 
        canvas.height / 2, 
        canvas.width * 0.8
      );
      
      // More refined color stops
      gradient.addColorStop(0, 'rgba(6, 14, 28, 1)');
      gradient.addColorStop(0.4, 'rgba(4, 10, 20, 1)');
      gradient.addColorStop(1, 'rgba(2, 5, 12, 1)');
      
      context.fillStyle = gradient;
      context.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw cosmic clouds instead of nebulae
      context.globalCompositeOperation = 'screen';
      cosmicCloudsRef.current.forEach(cloud => {
        // Update position with slow drift
        cloud.x += cloud.drift.x;
        cloud.y += cloud.drift.y;
        
        // Wrap around edges
        if (cloud.x < -cloud.radiusX) cloud.x = 100 + cloud.radiusX;
        if (cloud.x > 100 + cloud.radiusX) cloud.x = -cloud.radiusX;
        if (cloud.y < -cloud.radiusY) cloud.y = 100 + cloud.radiusY;
        if (cloud.y > 100 + cloud.radiusY) cloud.y = -cloud.radiusY;
        
        // Calculate pulse factor - subtle
        const pulseFactor = 1 + Math.sin(time * cloud.pulseSpeed * Math.PI) * 0.1;
        
        // Convert percentage to canvas coordinates
        const x = (cloud.x / 100) * canvas.width;
        const y = (cloud.y / 100) * canvas.height;
        const radiusX = (cloud.radiusX / 100) * canvas.width * pulseFactor;
        const radiusY = (cloud.radiusY / 100) * canvas.height * pulseFactor;
        
        // Draw cosmic cloud with more complex shape
        context.save();
        context.translate(x, y);
        context.rotate(cloud.rotation + time * 0.015);
        
        const cloudGradient = context.createRadialGradient(
          0, 0, 0,
          0, 0, Math.max(radiusX, radiusY)
        );
        
        const baseColor = cloud.color;
        const coreColor = baseColor.replace(/[\d.]+\)$/, '0.16)'); // Slightly brighter core
        const midColor = baseColor.replace(/[\d.]+\)$/, '0.09)'); 
        const edgeColor = baseColor.replace(/[\d.]+\)$/, '0)');
        
        cloudGradient.addColorStop(0, coreColor);
        cloudGradient.addColorStop(0.4, midColor);
        cloudGradient.addColorStop(1, edgeColor);
        
        context.fillStyle = cloudGradient;
        
        // Draw a more complex shape for cosmic clouds
        context.beginPath();
        
        // Create a cloud-like shape using multiple overlapping ellipses
        context.ellipse(0, 0, radiusX, radiusY, 0, 0, Math.PI * 2);
        
        // Add smaller ellipses to create a more complex cloud shape
        for (let i = 0; i < cloud.complexity; i++) {
          const angle = (Math.PI * 2 * i) / cloud.complexity;
          const distance = radiusX * 0.6;
          const offsetX = Math.cos(angle + time * 0.05) * distance;
          const offsetY = Math.sin(angle + time * 0.05) * distance;
          const sizeX = radiusX * (0.3 + Math.sin(time * 0.02) * 0.1);
          const sizeY = radiusY * (0.3 + Math.cos(time * 0.02) * 0.1);
          
          context.ellipse(
            offsetX, 
            offsetY, 
            sizeX, 
            sizeY, 
            angle, 
            0, 
            Math.PI * 2
          );
        }
        
        context.fill();
        context.restore();
      });
      
      // Draw stars with more subtle glow effect
      starsRef.current.forEach(star => {
        // Calculate pulse for twinkling effect
        const pulse = Math.sin(time * star.pulseSpeed * Math.PI) * star.pulseAmount + 1;
        const radius = star.radius * pulse;
        const brightness = star.brightness * pulse;
        
        // Draw star with glow
        if (star.isGlowing) {
          const starGlow = context.createRadialGradient(
            star.x, star.y, 0,
            star.x, star.y, radius * 4
          );
          
          starGlow.addColorStop(0, `rgba(255, 255, 255, ${brightness * 0.8})`);
          starGlow.addColorStop(0.5, `rgba(180, 220, 255, ${brightness * 0.3})`);
          starGlow.addColorStop(1, 'rgba(100, 150, 255, 0)');
          
          context.fillStyle = starGlow;
          context.beginPath();
          context.arc(star.x, star.y, radius * 4, 0, Math.PI * 2);
          context.fill();
        }
        
        // Draw star core
        context.fillStyle = `rgba(255, 255, 255, ${brightness})`;
        context.beginPath();
        context.arc(star.x, star.y, radius, 0, Math.PI * 2);
        context.fill();
      });
      
      // Reset composite operation
      context.globalCompositeOperation = 'source-over';
      
      // Continue animation if section is in view
      if (inView) {
        animationRef.current = requestAnimationFrame(animate);
      }
    }
    
    // Start animation
    if (inView) {
      animate();
    }
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [inView]);

  // Restart animation when inView changes
  useEffect(() => {
    if (inView && canvasRef.current) {
      animationRef.current = requestAnimationFrame(() => {
        const canvas = canvasRef.current;
        if (canvas) {
          const context = canvas.getContext('2d');
          context.clearRect(0, 0, canvas.width, canvas.height);
          timeRef.current = 0;
        }
      });
    } else {
      cancelAnimationFrame(animationRef.current);
    }
  }, [inView]);

  return (
    <Section id="vision">
      <StarsCanvas ref={canvasRef} />
      <GlassCard>
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
      </GlassCard>
    </Section>
  );
}
