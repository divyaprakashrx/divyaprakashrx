import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { Title } from "../styled/TextElements";
import AnimatedTitle from "../styled/AnimatedTitle";
import { siteContent } from '../../config/content';

const Section = styled.section`
  width: 100%;
  height: 100vh;
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
    transition: transform 0.02s linear, opacity 0.15s ease-out;
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
    
    /* 
    // Create stars - COMMENTED OUT FOR CLEANER LOOK
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
          pulseSpeed: Math.random() * 0.01 + 0.05,
          x, y,
          isGlowing: Math.random() > 0.7 // Some stars will have a stronger glow effect
        });
      }
      
      svg.appendChild(starsGroup);
    };
    */
    
    // Create nebulae for background atmosphere
    const createNebulae = () => {
      // Create gradient definitions
      const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
      
      for (let i = 0; i < 5; i++) {
        const gradient = document.createElementNS("http://www.w3.org/2000/svg", "radialGradient");
        gradient.setAttribute("id", `nebulaGradient${i}`);
        gradient.setAttribute("cx", "50%");
        gradient.setAttribute("cy", "50%");
        gradient.setAttribute("r", "50%");
        
        // Create vibrant colorful gradients - focusing on green and yellow
        let colors;
        switch (i % 5) {
          case 0: // Vibrant blue
            colors = [
              { offset: "0%", color: "rgba(80, 150, 250, 0.4)" },
              { offset: "50%", color: "rgba(40, 100, 200, 0.2)" },
              { offset: "100%", color: "rgba(10, 50, 150, 0)" }
            ];
            break;
          case 1: // Emerald green (replacing purple/pink)
            colors = [
              { offset: "0%", color: "rgba(80, 220, 120, 0.35)" },
              { offset: "50%", color: "rgba(40, 180, 100, 0.2)" },
              { offset: "100%", color: "rgba(20, 100, 60, 0)" }
            ];
            break;
          case 2: // Teal/cyan
            colors = [
              { offset: "0%", color: "rgba(60, 220, 220, 0.3)" },
              { offset: "50%", color: "rgba(30, 160, 180, 0.15)" },
              { offset: "100%", color: "rgba(10, 80, 100, 0)" }
            ];
            break;
          case 3: // Gold/yellow
            colors = [
              { offset: "0%", color: "rgba(255, 215, 80, 0.25)" },
              { offset: "50%", color: "rgba(200, 170, 40, 0.12)" },
              { offset: "100%", color: "rgba(120, 100, 10, 0)" }
            ];
            break;
          default: // Lime green
            colors = [
              { offset: "0%", color: "rgba(150, 220, 80, 0.35)" },
              { offset: "50%", color: "rgba(100, 180, 40, 0.18)" },
              { offset: "100%", color: "rgba(50, 120, 20, 0)" }
            ];
        }
        
        colors.forEach(color => {
          const stop = document.createElementNS("http://www.w3.org/2000/svg", "stop");
          stop.setAttribute("offset", color.offset);
          stop.setAttribute("stop-color", color.color);
          gradient.appendChild(stop);
        });
        
        defs.appendChild(gradient);
      }
      
      svg.appendChild(defs);
      
      // Create nebula elements
      const nebulaeGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
      nebulaeGroup.setAttribute("class", "nebulae");
      
      for (let i = 0; i < 5; i++) {
        const nebula = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
        
        const xPos = Math.random() * 100;
        const yPos = Math.random() * 100;
        const rx = 30 + Math.random() * 40;
        const ry = 25 + Math.random() * 35;
        
        nebula.setAttribute("cx", `${xPos}%`);
        nebula.setAttribute("cy", `${yPos}%`);
        nebula.setAttribute("rx", `${rx}%`);
        nebula.setAttribute("ry", `${ry}%`);
        
        nebula.setAttribute("fill", `url(#nebulaGradient${i})`);
        
        nebulaeGroup.appendChild(nebula);
        
        nebulaeRef.current.push({
          element: nebula,
          position: { x: xPos, y: yPos },
          size: { rx, ry },
          drift: {
            x: (Math.random() - 0.5) * 0.1, // Matching SpaceR drift values (0.1)
            y: (Math.random() - 0.5) * 0.05 // Matching SpaceR drift values (0.05)
          },
          pulse: Math.random() * 0.01 + 0.005,
        });
      }
      
      svg.appendChild(nebulaeGroup);
    };
    
    // createStars(); // COMMENTED OUT - No stars for cleaner look
    createNebulae();
    
    // Animate the cosmic background
    const animate = () => {
      // Use time-based animation like SpaceR does instead of incremental
      const time = Date.now() / 10000;
      
      /* 
      // Star animation - COMMENTED OUT
      starsRef.current.forEach(star => {
        // Gentle twinkling effect
        const opacityChange = Math.sin(time * star.pulseSpeed) * 0.3;
        const newOpacity = Math.max(0.1, Math.min(1, star.baseOpacity + opacityChange));
        star.element.setAttribute("opacity", newOpacity);
        
        // Add glow to some stars
        if (star.isGlowing) {
          const glowIntensity = Math.sin(time * star.pulseSpeed) * 0.5 + 0.5;
          star.element.setAttribute("filter", `brightness(${1 + glowIntensity})`);
        }
      });
      */
      
      // Nebulae animation - updated to match SpaceR speed
      nebulaeRef.current.forEach(nebula => {
        // Direct drift without multiplier - matches SpaceR approach
        nebula.position.x += nebula.drift.x;
        nebula.position.y += nebula.drift.y;
        
        // Loop around edges if needed
        if (nebula.position.x < -20) nebula.position.x = 120;
        if (nebula.position.x > 120) nebula.position.x = -20;
        if (nebula.position.y < -20) nebula.position.y = 120;
        if (nebula.position.y > 120) nebula.position.y = -20;
        
        // Size pulsing matched to SpaceR
        const sizePulse = Math.sin(time * nebula.pulse) * 0.05 + 1;
        
        nebula.element.setAttribute("cx", `${nebula.position.x}%`);
        nebula.element.setAttribute("cy", `${nebula.position.y}%`);
        nebula.element.setAttribute("rx", `${nebula.size.rx * sizePulse}%`);
        nebula.element.setAttribute("ry", `${nebula.size.ry * sizePulse}%`);
        
        // Opacity pulse matched to SpaceR
        const opacityPulse = Math.sin(time * nebula.pulse * 0.7) * 0.1 + 0.9;
        nebula.element.setAttribute("opacity", opacityPulse);
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);
  
  return (
    <Section zoomLevel={zoomLevel} opacity={opacity}>
      <CosmicBackground zoomLevel={zoomLevel} opacity={opacity}>
        <svg ref={svgRef} width="100%" height="100%">
          <defs>
            <radialGradient id="backgroundGradient" cx="50%" cy="50%" r="100%">
              <stop offset="0%" stopColor="rgba(10, 50, 100, 0.2)" />
              <stop offset="50%" stopColor="rgba(5, 30, 60, 0.1)" />
              <stop offset="100%" stopColor="rgba(5, 30, 60, 0)" />
            </radialGradient>
          </defs>
        </svg>
      </CosmicBackground>
      {/* Reverse the opacity behavior: 1 - titleOpacity makes it visible on load and fade out on scroll */}
      <AnimatedTitle opacity={1 - titleOpacity}>{siteContent.mainTitle}</AnimatedTitle>
    </Section>
  );
}