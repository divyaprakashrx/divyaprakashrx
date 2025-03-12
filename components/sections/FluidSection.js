import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Section } from '../styled/SectionBackgrounds';
import { ContentTitle } from '../styled/TextElements';
import { siteConfig } from '../../config/site';
import { GlassContainer, GlassContent, GlassHighlight } from '../styled/GlassContainer';

// Keep existing Canvas styled component
const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

// Update Content styled component to use absolute positioning for better overlay
const Content = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  height: 100%;
`;

// Replace StackedContainer with a container that has no scrollbar
const StackedContainer = styled.div`
  width: 100%;
  margin-top: 2rem;
  height: 350px; /* Fixed height for consistent scrolling */
  overflow: hidden;
  position: relative;
`;

// Add new ScrollingWrapper for animation
const ScrollingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  animation: scrolling 30s linear infinite;
  
  &:hover {
    animation-play-state: paused; /* Pause on hover */
  }
  
  @keyframes scrolling {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-50%);
    }
  }
`;

// Card for each highlight (now inside its own glass container)
const HighlightCard = styled.div`
  padding: 1.5rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  opacity: ${props => props.inView ? 1 : 0};
  transform: translateY(${props => props.inView ? '0' : '20px'});
  transition-delay: ${props => props.delay || '0ms'};
  transition-property: opacity, transform;
  transition-duration: 0.7s;
`;

const HighlightTitle = styled.h3`
  font-size: 1.2rem;
  color: ${siteConfig.theme.text.accent};
  margin-bottom: 0.8rem;
`;

const HighlightText = styled.p`
  font-size: 0.95rem;
  line-height: 1.4;
  color: ${siteConfig.theme.text.secondary};
`;

export default function FluidSection({ inView }) {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const animationRef = useRef(null);
  const blobsRef = useRef([]);
  const timeRef = useRef(0);
  const starsRef = useRef([]);

  // Keep your existing useEffect for the fluid animation
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    contextRef.current = context;
    
    // Helper function for noise (simplified version)
    const noise = (x, y, z) => {
      // Simple noise function - you could use a more sophisticated one
      return Math.sin(x * 0.1) * Math.cos(y * 0.1) * Math.sin(z * 0.1);
    };
    
    // Initialize stars - commented out for cleaner approach
    const initStars = () => {
      /*
      const starCount = Math.floor(canvas.width * canvas.height / 15000);
      const stars = [];
      
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.2, // Slightly reduced size variation
          brightness: Math.random() * 0.3 + 0.6, // Adjusted brightness
          speed: Math.random() * 0.05 + 0.01,
        });
      }
      starsRef.current = stars;
      */
      
      // Empty star array for cleaner look
      starsRef.current = [];
    };
    
    // Initialize blob objects with Earth & space-inspired color palette
    const initBlobs = () => {
      const blobCount = 6; // Reduced from 10 for cleaner appearance
      const blobs = [];
      
      // Create space-inspired color palette with blue, green, yellow
      const colorPalette = [
        {
          main: 'rgba(33, 150, 243, 0.15)', // Blue
          glow: 'rgba(33, 150, 243, 0.05)'
        },
        {
          main: 'rgba(76, 175, 80, 0.15)', // Green
          glow: 'rgba(76, 175, 80, 0.05)'
        },
        {
          main: 'rgba(255, 235, 59, 0.12)', // Yellow
          glow: 'rgba(255, 235, 59, 0.04)'
        },
        {
          main: 'rgba(3, 169, 244, 0.15)', // Light Blue
          glow: 'rgba(3, 169, 244, 0.05)'
        },
        {
          main: 'rgba(139, 195, 74, 0.15)', // Light Green
          glow: 'rgba(139, 195, 74, 0.05)'
        },
        {
          main: 'rgba(255, 193, 7, 0.12)', // Amber
          glow: 'rgba(255, 193, 7, 0.04)'
        }
      ];
      
      for (let i = 0; i < blobCount; i++) {
        blobs.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 60 + 40, // Slightly smaller size range
          color: colorPalette[i % colorPalette.length],
          speedX: Math.random() * 0.3 - 0.15,
          speedY: Math.random() * 0.3 - 0.15,
          noiseOffsetX: Math.random() * 1000,
          noiseOffsetY: Math.random() * 1000,
          points: [],
          pulseRate: Math.random() * 0.02 + 0.01,
          pulseAmount: Math.random() * 0.3 + 0.6, // Reduced pulse amount for subtlety
        });
      }
      
      blobsRef.current = blobs;
    };
    
    // Set canvas to fullscreen
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Reset blobs and stars when resizing
      initBlobs();
      initStars();
    };
    
    window.addEventListener('resize', resize);
    resize();
    
    // Add mouse interaction
    let mousePosition = { x: null, y: null };
    let isMouseDown = false;
    
    const handleMouseMove = (e) => {
      mousePosition = {
        x: e.clientX,
        y: e.clientY
      };
    };
    
    const handleMouseDown = () => {
      isMouseDown = true;
    };
    
    const handleMouseUp = () => {
      isMouseDown = false;
    };
    
    const handleMouseOut = () => {
      mousePosition = { x: null, y: null };
    };
    
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mouseout', handleMouseOut);
    
    // Touch event handlers for mobile
    const handleTouchStart = (e) => {
      if (e.touches.length > 0) {
        mousePosition = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY
        };
        isMouseDown = true;
      }
    };
    
    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        mousePosition = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY
        };
      }
    };
    
    const handleTouchEnd = () => {
      isMouseDown = false;
    };
    
    canvas.addEventListener('touchstart', handleTouchStart);
    canvas.addEventListener('touchmove', handleTouchMove);
    canvas.addEventListener('touchend', handleTouchEnd);
    
    // Animation function without scroll parallax
    const animate = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw darker space-like background (closer to black)
      const bgGradient = context.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width * 0.8
      );
      bgGradient.addColorStop(0, 'rgba(2, 7, 15, 0.98)'); // Much darker center
      bgGradient.addColorStop(0.5, 'rgba(1, 3, 8, 0.99)'); // Nearly black
      bgGradient.addColorStop(1, 'rgba(0, 1, 3, 1)'); // Almost pure black at edges
      
      context.fillStyle = bgGradient;
      context.fillRect(0, 0, canvas.width, canvas.height);
      
      // Add very subtle cosmic glow effect
      const backgroundGlow = context.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.height
      );
      backgroundGlow.addColorStop(0, 'rgba(20, 30, 70, 0.08)'); // Very subtle blue glow
      backgroundGlow.addColorStop(0.5, 'rgba(10, 15, 40, 0.04)');
      backgroundGlow.addColorStop(1, 'rgba(0, 0, 0, 0)'); // Fade to transparent
      
      context.fillStyle = backgroundGlow;
      context.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update time for animations
      timeRef.current += 0.006; // Slowed down time progression for cosmic feel
      const time = timeRef.current;
      
      context.save();
      
      // Draw stars with glow effect
      /*
      starsRef.current.forEach(star => {
        // Update star position for slow drift effect
        star.x += star.speed;
        if (star.x > canvas.width) star.x = 0;
        
        // Draw star with glow
        const starGlow = context.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.radius * 3
        );
        
        starGlow.addColorStop(0, `rgba(255, 255, 255, ${star.brightness})`); // Bright center
        starGlow.addColorStop(0.5, `rgba(180, 220, 255, ${star.brightness * 0.5})`); // Bluish glow
        starGlow.addColorStop(1, 'rgba(100, 150, 255, 0)'); // Fade out
        
        context.fillStyle = starGlow;
        context.beginPath();
        context.arc(star.x, star.y, star.radius * 2, 0, Math.PI * 2);
        context.fill();
        
        // Add a small bright center to larger stars
        if (star.radius > 1) {
          context.fillStyle = 'rgba(255, 255, 255, 1)';
          context.beginPath();
          context.arc(star.x, star.y, star.radius * 0.5, 0, Math.PI * 2);
          context.fill();
        }
      });
      */
      
      context.restore();
      
      // Update and draw blobs
      for (let i = 0; i < blobsRef.current.length; i++) {
        const blob = blobsRef.current[i];
        
        // Apply fluid dynamics with neighboring particles
        blob.force = { x: 0, y: 0 };
        
        // Apply mouse force
        if (mousePosition.x && mousePosition.y) {
          const dx = blob.x - mousePosition.x;
          const dy = blob.y - mousePosition.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            const force = isMouseDown ? -3 : 3; // Gentler force
            blob.force.x += force * dx / distance;
            blob.force.y += force * dy / distance;
          }
        }
        
        // Apply fluid interaction between blobs
        for (let j = 0; j < blobsRef.current.length; j++) {
          if (i !== j) {
            const blob2 = blobsRef.current[j];
            const dx = blob.x - blob2.x;
            const dy = blob.y - blob2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 80) {
              const force = 0.03 * (1 - distance / 80);
              blob.force.x += force * dx / distance;
              blob.force.y += force * dy / distance;
            }
          }
        }
        
        // Apply noise-based movement
        const noiseValueX = noise(blob.noiseOffsetX + time * 0.2, 0, time * 0.1) * 0.6;
        const noiseValueY = noise(0, blob.noiseOffsetY + time * 0.2, time * 0.1) * 0.6;
        
        // Update position with velocity and forces
        blob.speedX += blob.force.x;
        blob.speedY += blob.force.y;
        
        // Damping
        blob.speedX *= 0.98;
        blob.speedY *= 0.98;
        
        blob.x += blob.speedX + noiseValueX;
        blob.y += blob.speedY + noiseValueY;
        
        // Boundary wrapping with padding based on radius
        const padding = blob.radius * 1.5;
        if (blob.x < -padding) blob.x = canvas.width + padding/2;
        if (blob.x > canvas.width + padding) blob.x = -padding/2;
        if (blob.y < -padding) blob.y = canvas.height + padding/2;
        if (blob.y > canvas.height + padding) blob.y = -padding/2;
        
        // Apply pulsating effect for cosmic feel
        const pulseFactor = Math.sin(time * blob.pulseRate * Math.PI) * blob.pulseAmount + 1;
        
        // Calculate blob points with pulsation
        const pointCount = 24; // More points for smoother shape
        const points = [];
        
        for (let j = 0; j < pointCount; j++) {
          const angle = (j / pointCount) * Math.PI * 2;
          // Use noise to create organic, changing shape
          const radiusNoise = noise(
            blob.noiseOffsetX + Math.cos(angle) * 0.4 + time * 0.7, 
            blob.noiseOffsetY + Math.sin(angle) * 0.4 + time * 0.7, 
            time * 0.5
          );
          const radiusOffset = (radiusNoise + 1) * 0.5 * blob.radius * 0.35 * pulseFactor;
          const radius = blob.radius + radiusOffset;
          
          points.push({
            x: blob.x + Math.cos(angle) * radius,
            y: blob.y + Math.sin(angle) * radius
          });
        }
        
        blob.points = points;
      }
      
      // Draw blobs with space-inspired gradients
      for (let i = 0; i < blobsRef.current.length; i++) {
        const blob = blobsRef.current[i];
        const { points } = blob;
        
        // Create improved radial gradient
        const gradient = context.createRadialGradient(
          blob.x, blob.y, 0,
          blob.x, blob.y, blob.radius * 1.5
        );
        
        // Extract base color for manipulating
        const baseColor = blob.color.main;
        const coreColor = baseColor.replace('0.35', '0.7'); // Brighter core
        const midColor = baseColor.replace('0.35', '0.5');
        const edgeColor = baseColor.replace('0.35', '0.1'); // Faded edge
        
        // Enhanced gradient for cosmic effect
        gradient.addColorStop(0, coreColor);
        gradient.addColorStop(0.3, midColor);
        gradient.addColorStop(0.7, baseColor);
        gradient.addColorStop(1, edgeColor);
        
        // Draw the organic shape
        context.beginPath();
        context.moveTo(points[0].x, points[0].y);
        
        for (let j = 0; j < points.length; j++) {
          const currentPoint = points[j];
          const nextPoint = points[(j + 1) % points.length];
          
          // Use quadratic curves for smoother shapes
          const cpX = (currentPoint.x + nextPoint.x) / 2;
          const cpY = (currentPoint.y + nextPoint.y) / 2;
          
          context.quadraticCurveTo(currentPoint.x, currentPoint.y, cpX, cpY);
        }
        
        context.fillStyle = gradient;
        context.globalCompositeOperation = 'screen'; // Creates glowing effect when overlapping
        context.fill();
      }
      
      // Draw connections between nearby blobs for cosmic gas/dust effect
      context.globalCompositeOperation = 'screen';
      for (let i = 0; i < blobsRef.current.length; i++) {
        const blob1 = blobsRef.current[i];
        
        for (let j = i + 1; j < blobsRef.current.length; j++) {
          const blob2 = blobsRef.current[j];
          const dx = blob1.x - blob2.x;
          const dy = blob1.y - blob2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Reduced connection threshold for cleaner appearance
          if (distance < (blob1.radius + blob2.radius) * 1.5) {
            const strength = 1 - (distance / ((blob1.radius + blob2.radius) * 1.5));
            
            // Find connection points
            const angle = Math.atan2(dy, dx);
            const point1 = {
              x: blob1.x - Math.cos(angle) * blob1.radius * 0.7,
              y: blob1.y - Math.sin(angle) * blob1.radius * 0.7
            };
            
            const point2 = {
              x: blob2.x + Math.cos(angle) * blob2.radius * 0.7,
              y: blob2.y + Math.sin(angle) * blob2.radius * 0.7
            };
            
            // Simplified gradient for connections
            const gradient = context.createLinearGradient(
              point1.x, point1.y, point2.x, point2.y
            );
            
            const color1 = blob1.color.glow.replace('0.3', strength * 0.25);
            const color2 = blob2.color.glow.replace('0.3', strength * 0.25);
            
            gradient.addColorStop(0, color1);
            gradient.addColorStop(1, color2);
            
            // Simplified connection with straight line
            context.beginPath();
            context.moveTo(point1.x, point1.y);
            context.lineTo(point2.x, point2.y);
            
            context.lineWidth = Math.min(blob1.radius, blob2.radius) * 0.15 * strength;
            context.strokeStyle = gradient;
            context.stroke();
          }
        }
      }
      
      // Reset composite operation
      context.globalCompositeOperation = 'source-over';
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('mouseout', handleMouseOut);
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleTouchEnd);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);
  
  // Sample highlights data (replace with your actual data)
  const highlights = [
    {
      title: "Interactive Visualization",
      text: "Creating dynamic data visualizations that respond to user interactions and help tell complex stories through visual narratives."
    },
    {
      title: "Fluid User Interfaces",
      text: "Designing interfaces that flow naturally and provide seamless transitions between states for an intuitive user experience."
    },
    {
      title: "Real-time Data Processing",
      text: "Building systems that can process and visualize data streams in real-time, enabling immediate insights and actions."
    },
    {
      title: "Immersive Experiences",
      text: "Developing applications that create immersive digital environments through thoughtful animations and visual cues."
    }
  ];

  return (
    <Section id="highlights">
      <Canvas ref={canvasRef} />
      <Content>
        <GlassContainer inView={inView} width="90%" style={{ maxWidth: '800px' }}>
          <GlassHighlight 
            inView={inView} 
            color="rgba(100, 200, 255, 0.1)" 
            size="400px" 
            top="-100px" 
            left="10%" 
          />
          
          <GlassContent>
            <ContentTitle inView={inView}>
              Impact Highlights
            </ContentTitle>
            
            <StackedContainer>
              <ScrollingWrapper>
                {/* First set of highlights */}
                {highlights.map((highlight, index) => (
                  <HighlightCard key={`first-${index}`} inView={inView} delay={`${index * 150 + 100}ms`}>
                    <HighlightTitle>{highlight.title}</HighlightTitle>
                    <HighlightText>{highlight.text}</HighlightText>
                  </HighlightCard>
                ))}
                
                {/* Duplicate highlights for seamless loop */}
                {highlights.map((highlight, index) => (
                  <HighlightCard key={`second-${index}`} inView={inView} delay={`${index * 150 + 100}ms`}>
                    <HighlightTitle>{highlight.title}</HighlightTitle>
                    <HighlightText>{highlight.text}</HighlightText>
                  </HighlightCard>
                ))}
              </ScrollingWrapper>
            </StackedContainer>
          </GlassContent>
        </GlassContainer>
      </Content>
    </Section>
  );
}
