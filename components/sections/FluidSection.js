import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ContentTitle, ContentText } from "../styled/TextElements";

const Section = styled.section`
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  scroll-snap-align: start;
  color: white;
  z-index: 1;
  background: rgba(3, 9, 18, 0.95); // Updated to match other sections exactly
`;

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 0 2rem;
  max-width: 800px;
`;

export default function FluidSection({ inView }) {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const animationRef = useRef(null);
  const blobsRef = useRef([]);
  const timeRef = useRef(0);
  const starsRef = useRef([]); // Moved to component top level
  
  // Initialize space-inspired fluid animation on component mount
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
    
    // Stars with persistent positions for slower movement
    const initStars = () => {
      const starCount = 120; // More stars for better space effect
      const stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.8 + 0.2, // Varied sizes
          brightness: Math.random() * 0.4 + 0.6, // Varied brightness
          speed: Math.random() * 0.05 + 0.01, // Very slow movement
        });
      }
      starsRef.current = stars; // Assign to the .current property
    };
    
    // Initialize blob objects with Earth & space-inspired color palette
    const initBlobs = () => {
      const blobCount = 10; // More blobs for a cosmic effect
      const blobs = [];
      
      // Create space/Earth-inspired blue color palette
      const colorPalette = [
        'hsla(220, 85%, 30%, 0.35)',  // Deep ocean blue
        'hsla(200, 95%, 40%, 0.35)',  // Earth blue
        'hsla(210, 80%, 50%, 0.35)',  // Sky blue
        'hsla(195, 90%, 35%, 0.35)',  // Deep aqua blue
        'hsla(215, 70%, 25%, 0.35)',  // Dark navy blue
        'hsla(205, 85%, 45%, 0.35)',  // Medium blue
        'hsla(195, 90%, 75%, 0.35)',  // Atmosphere blue (lighter)
      ];
      
      for (let i = 0; i < blobCount; i++) {
        blobs.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 70 + 40, // Varied sizes for cosmic bodies
          color: colorPalette[i % colorPalette.length], // Use the defined palette
          speedX: Math.random() * 0.3 - 0.15, // Slower, more celestial movement
          speedY: Math.random() * 0.3 - 0.15,
          noiseOffsetX: Math.random() * 1000,
          noiseOffsetY: Math.random() * 1000,
          points: [], // Will hold points for the blob shape
          pulseRate: Math.random() * 0.02 + 0.01, // For pulsating effect
          pulseAmount: Math.random() * 0.4 + 0.6, // Intensity of pulsation
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
        const baseColor = blob.color;
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
      context.globalCompositeOperation = 'screen'; // Creates glowing effect
      for (let i = 0; i < blobsRef.current.length; i++) {
        const blob1 = blobsRef.current[i];
        
        for (let j = i + 1; j < blobsRef.current.length; j++) {
          const blob2 = blobsRef.current[j];
          const dx = blob1.x - blob2.x;
          const dy = blob1.y - blob2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // If blobs are close enough, draw enhanced connection
          if (distance < (blob1.radius + blob2.radius) * 1.8) { // Increased range
            // Calculate connection strength based on distance
            const strength = 1 - (distance / ((blob1.radius + blob2.radius) * 1.8));
            
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
            
            // Space-inspired gradient for connections
            const gradient = context.createLinearGradient(
              point1.x, point1.y, point2.x, point2.y
            );
            
            const color1 = blob1.color.replace('0.35', strength * 0.3);
            const color2 = blob2.color.replace('0.35', strength * 0.3);
            
            gradient.addColorStop(0, color1);
            gradient.addColorStop(0.5, `hsla(220, 85%, 50%, ${strength * 0.2})`); // Cosmic blue middle
            gradient.addColorStop(1, color2);
            
            // Draw connection with curve for more organic look
            const midX = (point1.x + point2.x) / 2;
            const midY = (point1.y + point2.y) / 2;
            const curveOffset = 10 * strength;
            
            context.beginPath();
            context.moveTo(point1.x, point1.y);
            context.quadraticCurveTo(
              midX + Math.sin(angle) * curveOffset, 
              midY - Math.cos(angle) * curveOffset, 
              point2.x, point2.y
            );
            
            context.lineWidth = Math.min(blob1.radius, blob2.radius) * 0.18 * strength;
            context.strokeStyle = gradient;
            context.lineCap = 'round';
            context.stroke();
            
            // Add subtle glow to connections
            context.globalAlpha = strength * 0.3;
            context.lineWidth = Math.min(blob1.radius, blob2.radius) * 0.3 * strength;
            context.stroke();
            context.globalAlpha = 1.0;
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
  
  return (
    <Section>
      <Canvas ref={canvasRef} />
      <Content>
        <ContentTitle 
          inView={inView}
          style={{
            textShadow: '0 0 15px rgba(30, 100, 180, 0.8)'
          }}
        >
          Cosmic Flow
        </ContentTitle>
        <ContentText inView={inView}>
          This simulation depicts the fluid dynamics of cosmic bodies in space.
          The elements interact and flow around each other, representing the
          celestial dance of nebulae and stellar gases. Touch and interact
          with the cosmic elements to influence their movement.
        </ContentText>
      </Content>
    </Section>
  );
}
