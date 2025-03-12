import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const SVGContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  filter: drop-shadow(0 0 10px rgba(0, 153, 255, 0.3));
`;

const LoadingText = styled.div`
  position: absolute;
  bottom: 15%;
  left: 50%;
  transform: translateX(-50%);
  color: #1F8BE6;
  font-size: 1.5rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  opacity: 0.8;
  font-weight: 300;
  text-shadow: 0 0 10px rgba(0, 153, 255, 0.6);

  &::after {
    content: '';
    display: inline-block;
    width: 0;
    animation: loadingDots 1.5s infinite;
  }

  @keyframes loadingDots {
    0% { content: ''; }
    25% { content: '.'; }
    50% { content: '..'; }
    75% { content: '...'; }
    100% { content: ''; }
  }
`;

const SpaceR = ({ width = '100%', height = '100%' }) => {
  const svgRef = useRef(null);
  const starsRef = useRef([]);
  const orbitalsRef = useRef([]);
  const nebulaeRef = useRef([]);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = svgRef.current;
    const svgWidth = svg.clientWidth || window.innerWidth;
    const svgHeight = svg.clientHeight || window.innerHeight;

    // Create stars - COMMENTED OUT FOR CLEANER APPROACH
    const createStars = () => {
      /*
      const starsGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
      starsGroup.setAttribute("class", "stars");
      
      // Create many stars for a rich space background
      for (let i = 0; i < 120; i++) {
        const star = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        const x = Math.random() * svgWidth;
        const y = Math.random() * svgHeight;
        const radius = Math.random() * 1.2 + 0.3;
        const opacity = Math.random() * 0.5 + 0.5;
        
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
          x, y, // Store initial position
          driftSpeed: {
            x: (Math.random() - 0.5) * 0.1, // Small random drift
            y: (Math.random() - 0.5) * 0.1
          },
          isShootingStar: Math.random() > 0.95 // Some stars can become shooting stars
        });
      }
      
      svg.appendChild(starsGroup);
      */
    };

    // Create nebulae
    const createNebulae = () => {
      const nebulaeGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
      nebulaeGroup.setAttribute("class", "nebulae");
      
      // Create multiple nebula clouds
      for (let i = 0; i < 4; i++) {
        const nebula = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
        const xPos = 20 + Math.random() * 60; // Position randomly within view
        const yPos = 20 + Math.random() * 60;
        const rx = 30 + Math.random() * 40;
        const ry = 20 + Math.random() * 35;
        
        nebula.setAttribute("cx", `${xPos}%`);
        nebula.setAttribute("cy", `${yPos}%`);
        nebula.setAttribute("rx", `${rx}%`);
        nebula.setAttribute("ry", `${ry}%`);
        
        // Alternate between the two nebula gradients
        const gradientId = i % 2 === 0 ? "nebulaGradient1" : "nebulaGradient2";
        nebula.setAttribute("fill", `url(#${gradientId})`);
        
        nebulaeGroup.appendChild(nebula);
        
        // Store nebula data for animation
        nebulaeRef.current.push({
          element: nebula,
          position: { x: xPos, y: yPos },
          size: { rx, ry },
          drift: {
            x: (Math.random() - 0.5) * 0.1, // Very slow drift
            y: (Math.random() - 0.5) * 0.05
          },
          pulse: Math.random() * 0.01 + 0.005, // Slow pulse rate
          opacity: 0.3 + Math.random() * 0.2
        });
      }
      
      // Add group before stars so nebulae appear behind
      svg.insertBefore(nebulaeGroup, svg.firstChild);
    };

    // Create orbiting elements
    const createOrbitals = () => {
      const orbitalsGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
      orbitalsGroup.setAttribute("class", "orbitals");
      
      // Center point
      const centerX = svgWidth / 2;
      const centerY = svgHeight / 2;
      
      // Create main circle
      const mainCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      mainCircle.setAttribute("cx", centerX);
      mainCircle.setAttribute("cy", centerY);
      mainCircle.setAttribute("r", 10);
      mainCircle.setAttribute("fill", "url(#pulsatingGradient)");
      mainCircle.setAttribute("filter", "url(#glow)");
      orbitalsGroup.appendChild(mainCircle);
      
      // Create orbital paths
      const orbitalCount = 3;
      for (let i = 0; i < orbitalCount; i++) {
        // Create orbit path
        const orbital = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        const radius = 40 + i * 30;
        orbital.setAttribute("cx", centerX);
        orbital.setAttribute("cy", centerY);
        orbital.setAttribute("r", radius);
        orbital.setAttribute("fill", "none");
        orbital.setAttribute("stroke", `rgba(255, 255, 255, ${0.2 - i * 0.05})`);
        orbital.setAttribute("stroke-width", "1");
        orbital.setAttribute("stroke-dasharray", "3,3");
        orbitalsGroup.appendChild(orbital);
        
        // Create orbiting planet
        const planet = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        planet.setAttribute("r", 5 - i);
        planet.setAttribute("fill", `rgba(${30 + i * 20}, ${100 + i * 50}, ${180 + i * 20}, 0.9)`);
        planet.setAttribute("filter", "url(#starGlow)");
        orbitalsGroup.appendChild(planet);
        
        orbitalsRef.current.push({
          element: planet,
          centerX,
          centerY,
          radius,
          speed: 0.001 + i * 0.0005,
          angle: Math.random() * Math.PI * 2,
          size: 5 - i,
          pulseRange: 0.5
        });
      }
      
      svg.appendChild(orbitalsGroup);
    };

    // Animation function for all elements
    const animateElements = () => {
      const time = Date.now() / 1000;
      
      // Animate nebulae
      nebulaeRef.current.forEach(nebula => {
        // Update position with very slow drift
        nebula.position.x += nebula.drift.x;
        nebula.position.y += nebula.drift.y;
        
        // Wrap around when going off-screen
        if (nebula.position.x < -20) nebula.position.x = 120;
        if (nebula.position.x > 120) nebula.position.x = -20;
        if (nebula.position.y < -20) nebula.position.y = 120;
        if (nebula.position.y > 120) nebula.position.y = -20;
        
        // Size pulse effect
        const sizePulse = Math.sin(time * nebula.pulse) * 0.05 + 1;
        
        // Update nebula attributes
        nebula.element.setAttribute("cx", `${nebula.position.x}%`);
        nebula.element.setAttribute("cy", `${nebula.position.y}%`);
        nebula.element.setAttribute("rx", `${nebula.size.rx * sizePulse}%`);
        nebula.element.setAttribute("ry", `${nebula.size.ry * sizePulse}%`);
        
        // Subtle opacity pulse
        const opacityPulse = Math.sin(time * nebula.pulse * 0.7) * 0.1 + 0.9;
        nebula.element.setAttribute("opacity", nebula.opacity * opacityPulse);
      });
      
      // Animate stars with enhanced effects
      /*
      starsRef.current.forEach(star => {
        // Basic pulsing
        const pulseFactor = Math.sin(time * star.pulseSpeed * Math.PI) * 0.2 + 0.8;
        star.element.setAttribute("opacity", star.baseOpacity * pulseFactor);
        
        // Drift movement
        star.x += star.driftSpeed.x;
        star.y += star.driftSpeed.y;
        
        // Wrap around when going off-screen
        if (star.x < 0) star.x = svgWidth;
        if (star.x > svgWidth) star.x = 0;
        if (star.y < 0) star.y = svgHeight;
        if (star.y > svgHeight) star.y = 0;
        
        star.element.setAttribute("cx", star.x);
        star.element.setAttribute("cy", star.y);
        
        // Occasional shooting star effect
        if (star.isShootingStar && Math.random() > 0.998) {
          // Create temporary shooting star trail
          const trail = document.createElementNS("http://www.w3.org/2000/svg", "line");
          const angle = Math.random() * Math.PI * 2;
          const length = 20 + Math.random() * 30;
          
          const endX = star.x + Math.cos(angle) * length;
          const endY = star.y + Math.sin(angle) * length;
          
          trail.setAttribute("x1", star.x);
          trail.setAttribute("y1", star.y);
          trail.setAttribute("x2", endX);
          trail.setAttribute("y2", endY);
          trail.setAttribute("stroke", "white");
          trail.setAttribute("stroke-width", "1");
          trail.setAttribute("opacity", "0.7");
          
          svg.appendChild(trail);
          
          // Fade and remove trail
          let opacity = 0.7;
          const fadeTrail = () => {
            opacity -= 0.05;
            trail.setAttribute("opacity", opacity);
            
            if (opacity > 0) {
              requestAnimationFrame(fadeTrail);
            } else {
              svg.removeChild(trail);
            }
          };
          
          requestAnimationFrame(fadeTrail);
        }
      });
      */
      
      // Animate orbital elements
      orbitalsRef.current.forEach(orbital => {
        // Update angle
        orbital.angle += orbital.speed;
        
        // Calculate new position
        const x = orbital.centerX + Math.cos(orbital.angle) * orbital.radius;
        const y = orbital.centerY + Math.sin(orbital.angle) * orbital.radius;
        
        // Update planet position
        orbital.element.setAttribute("cx", x);
        orbital.element.setAttribute("cy", y);
        
        // Pulse size
        const pulseFactor = Math.sin(time * 0.7) * orbital.pulseRange + 1;
        orbital.element.setAttribute("r", orbital.size * pulseFactor);
      });
      
      animationRef.current = requestAnimationFrame(animateElements);
    };

    // Initialize
    createNebulae();
    createStars();
    createOrbitals();
    animateElements();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <SVGContainer>
      <svg 
        ref={svgRef}
        width={width} 
        height={height} 
        viewBox={`0 0 ${window.innerWidth} ${window.innerHeight}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Cosmic glow effect */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          
          {/* Star glow */}
          <filter id="starGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="3" result="blurOut" />
            <feBlend in="SourceGraphic" in2="blurOut" mode="screen" />
          </filter>
          
          {/* Pulsating gradient */}
          <radialGradient id="pulsatingGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#1F8BE6" />
            <stop offset="70%" stopColor="#0F4C81" />
            <stop offset="100%" stopColor="#0A1A40" />
          </radialGradient>
          
          {/* Nebula effect - enhanced with animated attributes */}
          <radialGradient id="nebulaGradient1" cx="50%" cy="50%" r="70%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="rgba(30, 100, 180, 0.5)" />
            <stop offset="70%" stopColor="rgba(10, 50, 120, 0.25)" />
            <stop offset="100%" stopColor="rgba(0, 20, 60, 0)" />
          </radialGradient>
          
          <radialGradient id="nebulaGradient2" cx="50%" cy="50%" r="60%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="rgba(60, 50, 180, 0.4)" />
            <stop offset="70%" stopColor="rgba(30, 20, 100, 0.2)" />
            <stop offset="100%" stopColor="rgba(10, 5, 50, 0)" />
          </radialGradient>
        </defs>
        
        {/* Nebulae, stars and orbitals will be added dynamically */}
      </svg>
      <LoadingText>Loading</LoadingText>
    </SVGContainer>
  );
};

export default SpaceR;
