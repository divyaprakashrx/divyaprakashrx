import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { Title } from "../styled/TextElements";

const Section = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  background-color: rgb(3, 9, 18);
  align-items: center;
  overflow: hidden;
  scroll-snap-align: start;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(3, 9, 18);
    z-index: 0;
    transform-origin: center;
    transform: ${props => `scale(${props.zoomLevel})`};
    opacity: ${props => props.opacity};
    will-change: transform, opacity;
    transition: transform 0.05s linear, opacity 0.3s ease-out;
  }
`;

const CosmicBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  transform-origin: center;
  transform: ${props => `scale(${props.zoomLevel})`};
  opacity: ${props => props.opacity};
  will-change: transform, opacity;
  transition: transform 0.05s linear, opacity 0.3s ease-out;
`;

export default function EarthSection({ zoomLevel, opacity, titleOpacity }) {
  const svgRef = useRef(null);
  const starsRef = useRef([]);
  const nebulaeRef = useRef([]);
  const animationRef = useRef(null);
  
  useEffect(() => {
    if (!svgRef.current) return;
    
    const svg = svgRef.current;
    const svgWidth = window.innerWidth;
    const svgHeight = window.innerHeight;
    
    // Set the SVG dimensions
    svg.setAttribute("width", svgWidth);
    svg.setAttribute("height", svgHeight);
    svg.setAttribute("viewBox", `0 0 ${svgWidth} ${svgHeight}`);
    
    // Create stars
    const createStars = () => {
      const starsGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
      starsGroup.setAttribute("class", "stars");
      
      const starCount = Math.min(200, Math.floor((svgWidth * svgHeight) / 5000)); // Adjust star count based on screen size
      
      for (let i = 0; i < starCount; i++) {
        const star = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        const x = Math.random() * svgWidth;
        const y = Math.random() * svgHeight;
        const radius = Math.random() * 1.5 + 0.3;
        const opacity = Math.random() * 0.7 + 0.3;
        
        star.setAttribute("cx", x);
        star.setAttribute("cy", y);
        star.setAttribute("r", radius);
        star.setAttribute("fill", "white");
        star.setAttribute("opacity", opacity);
        
        starsGroup.appendChild(star);
        starsRef.current.push({
          element: star,
          baseOpacity: opacity,
          pulseSpeed: Math.random() * 0.01 + 0.005,
          x, y,
          isGlowing: Math.random() > 0.7 // Some stars will have a stronger glow effect
        });
      }
      
      svg.appendChild(starsGroup);
    };
    
    // Create nebulae
    const createNebulae = () => {
      const nebulaeGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
      nebulaeGroup.setAttribute("class", "nebulae");
      
      // Create several large nebula clouds for dramatic effect
      const nebulaeCount = 5;
      for (let i = 0; i < nebulaeCount; i++) {
        const nebula = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
        const xPos = Math.random() * 100;
        const yPos = Math.random() * 100;
        const rx = 25 + Math.random() * 35;
        const ry = 20 + Math.random() * 30;
        
        nebula.setAttribute("cx", `${xPos}%`);
        nebula.setAttribute("cy", `${yPos}%`);
        nebula.setAttribute("rx", `${rx}%`);
        nebula.setAttribute("ry", `${ry}%`);
        
        // Create a variety of nebula colors with blue theme
        const blueVariations = [
          "rgba(30, 100, 180, 0.3)",
          "rgba(40, 80, 170, 0.25)",
          "rgba(20, 120, 200, 0.2)",
          "rgba(60, 50, 180, 0.2)",
          "rgba(10, 50, 150, 0.3)"
        ];
        
        nebula.setAttribute("fill", `url(#nebulaGradient${i % 3})`);
        
        nebulaeGroup.appendChild(nebula);
        
        nebulaeRef.current.push({
          element: nebula,
          position: { x: xPos, y: yPos },
          size: { rx, ry },
          drift: {
            x: (Math.random() - 0.5) * 0.05, // Very subtle drift for background
            y: (Math.random() - 0.5) * 0.02
          },
          pulse: Math.random() * 0.005 + 0.002, // Even slower pulse for background
          opacity: 0.2 + Math.random() * 0.1
        });
      }
      
      svg.insertBefore(nebulaeGroup, svg.firstChild);
    };
    
    // Animation function
    const animateCosmicBackground = () => {
      const time = Date.now() / 1000;
      
      // Animate nebulae with very subtle movement
      nebulaeRef.current.forEach(nebula => {
        // Only apply drift if section is fully visible
        if (opacity > 0.5) {
          nebula.position.x += nebula.drift.x * opacity;
          nebula.position.y += nebula.drift.y * opacity;
          
          // Ensure nebulae stay in view
          if (nebula.position.x < -20) nebula.position.x = 120;
          if (nebula.position.x > 120) nebula.position.x = -20;
          if (nebula.position.y < -20) nebula.position.y = 120;
          if (nebula.position.y > 120) nebula.position.y = -20;
        }
        
        // Very subtle size pulsing
        const sizePulse = Math.sin(time * nebula.pulse) * 0.03 + 1;
        
        nebula.element.setAttribute("cx", `${nebula.position.x}%`);
        nebula.element.setAttribute("cy", `${nebula.position.y}%`);
        nebula.element.setAttribute("rx", `${nebula.size.rx * sizePulse}%`);
        nebula.element.setAttribute("ry", `${nebula.size.ry * sizePulse}%`);
        
        // Subtle opacity changes
        const opacityPulse = Math.sin(time * nebula.pulse * 0.5) * 0.1 + 0.9;
        nebula.element.setAttribute("opacity", nebula.opacity * opacityPulse * opacity);
      });
      
      // Animate stars with subtle twinkling
      starsRef.current.forEach(star => {
        // Twinkling effect
        const pulseFactor = Math.sin(time * star.pulseSpeed * Math.PI) * 0.3 + 0.7;
        star.element.setAttribute("opacity", star.baseOpacity * pulseFactor * opacity);
        
        // Add glow effect to some stars
        if (star.isGlowing) {
          const glowIntensity = Math.sin(time * star.pulseSpeed * 0.5) * 0.5 + 0.5;
          star.element.setAttribute("filter", `url(#starGlow${glowIntensity > 0.7 ? 'Bright' : ''})`);
        }
      });
      
      animationRef.current = requestAnimationFrame(animateCosmicBackground);
    };
    
    // Initialize and start animation
    createNebulae();
    createStars();
    animateCosmicBackground();
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, []);
  
  return (
    <Section zoomLevel={zoomLevel} opacity={opacity}>
      <CosmicBackground zoomLevel={zoomLevel} opacity={opacity}>
        <svg 
          ref={svgRef} 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="starGlow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="2" result="blurOut" />
              <feBlend in="SourceGraphic" in2="blurOut" mode="screen" />
            </filter>
            
            <filter id="starGlowBright" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="4" result="blurOut" />
              <feBlend in="SourceGraphic" in2="blurOut" mode="screen" />
            </filter>
            
            {/* Primary blue nebula */}
            <radialGradient id="nebulaGradient0" cx="50%" cy="50%" r="70%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="rgba(40, 120, 200, 0.4)" />
              <stop offset="70%" stopColor="rgba(20, 60, 150, 0.2)" />
              <stop offset="100%" stopColor="rgba(5, 20, 80, 0)" />
            </radialGradient>
            
            {/* Purple-blue nebula */}
            <radialGradient id="nebulaGradient1" cx="50%" cy="50%" r="70%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="rgba(60, 50, 180, 0.3)" />
              <stop offset="70%" stopColor="rgba(30, 20, 120, 0.15)" />
              <stop offset="100%" stopColor="rgba(10, 5, 60, 0)" />
            </radialGradient>
            
            {/* Teal-blue nebula */}
            <radialGradient id="nebulaGradient2" cx="50%" cy="50%" r="70%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="rgba(20, 140, 180, 0.3)" />
              <stop offset="70%" stopColor="rgba(10, 70, 100, 0.15)" />
              <stop offset="100%" stopColor="rgba(5, 30, 60, 0)" />
            </radialGradient>
          </defs>
        </svg>
      </CosmicBackground>
      <Title opacity={titleOpacity}>divya prakash</Title>
    </Section>
  );
}