import React from 'react';
import styled, { keyframes } from 'styled-components';

const gradientShift = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

// Improved pulse animation with reduced blur radius for sharper text
const pulseAnimation = keyframes`
  0% {
    text-shadow: 0 0 4px rgba(255, 255, 255, 0.2), 
                0 0 8px rgba(80, 150, 255, 0.1);
  }
  50% {
    text-shadow: 0 0 6px rgba(255, 255, 255, 0.4), 
                0 0 12px rgba(80, 150, 255, 0.2);
  }
  100% {
    text-shadow: 0 0 4px rgba(255, 255, 255, 0.2), 
                0 0 8px rgba(80, 150, 255, 0.1);
  }
`;

const StyledTitle = styled.h1`
  font-size: 5rem;
  font-weight: 800; /* Increased font weight for sharper appearance */
  text-align: center;
  opacity: ${props => props.opacity};
  transition: opacity 0.5s ease;
  margin: 0;
  padding: 0;
    color: transparent;
  background: linear-gradient(
    90deg, 
    #2196F3 0%,      // Blue
    #64B5F6 15%,     // Light Blue
    #1976D2 30%,     // Dark Blue
    #76FF03 45%,     // Green
    #64DD17 60%,     // Light Green
    #FFEB3B 75%,     // Yellow
    #FFC107 90%,     // Amber
    #2196F3 100%     // Back to Blue
  );
  background-size: 600% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  animation: ${gradientShift} 2s ease infinite, /* Slowed down from 4s to 6s */
             ${pulseAnimation} 4s ease infinite; /* Slowed down from 3s to 4s */
  letter-spacing: 2px;
  z-index: 100;
  position: relative;
  text-transform: uppercase;
    @media (max-width: 768px) {
    font-size: clamp(1.8rem, 3vw, 2rem);
    margin-bottom: 0.7rem;
  }
  
  /* Add these properties to improve text rendering */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  
  /* Add a subtle text outline to improve clarity */
  -webkit-text-stroke: 0.5px rgba(255, 255, 255, 0.4);
  
  /* Add a subtle white text underlay for better contrast */
  &::after {
    content: "${props => props.children}";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    color: rgba(255, 255, 255, 0.5);
     background: linear-gradient(
    90deg, 
    #2196F3 0%,      // Blue
    #64B5F6 15%,     // Light Blue
    #1976D2 30%,     // Dark Blue
    #76FF03 45%,     // Green
    #64DD17 60%,     // Light Green
    #FFEB3B 75%,     // Yellow
    #FFC107 90%,     // Amber
    #2196F3 100%     // Back to Blue
  );
    -webkit-text-stroke: 0;
    background: none;
    animation: none;
  }
`;

export const AnimatedTitle = ({ children, opacity = 1 }) => {
  return <StyledTitle opacity={opacity}>{children}</StyledTitle>;
};

export default AnimatedTitle;
