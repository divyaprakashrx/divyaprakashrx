import styled, { keyframes } from "styled-components";
import { siteConfig } from "../../config/site";

const glassReveal = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
    backdrop-filter: blur(0px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    backdrop-filter: blur(8px);
  }
`;

export const GlassContainer = styled.div`
  background: rgba(10, 25, 47, 0.25);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem;
  width: ${props => props.width || '90%'};
  max-width: 1000px;
  margin: 0 auto;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  z-index: 10;
  opacity: ${props => props.inView ? 1 : 0};
  transform: translateY(${props => props.inView ? '0' : '30px'});
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  animation: ${props => props.inView ? glassReveal : 'none'} 0.8s ease-out;
  overflow: hidden;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0)
    );
  }
  
  @media (max-width: 768px) {
    width: 95%;
    padding: 1.5rem;
  }
`;

export const GlassContent = styled.div`
  position: relative;
  z-index: 5;
`;

export const GlassHighlight = styled.div`
  position: absolute;
  background: radial-gradient(
    circle at center,
    ${props => props.color || 'rgba(100, 200, 255, 0.15)'},
    transparent 70%
  );
  width: ${props => props.size || '200px'};
  height: ${props => props.size || '200px'};
  top: ${props => props.top || '0'};
  left: ${props => props.left || '0'};
  z-index: 1;
  opacity: ${props => props.inView ? 1 : 0};
  transition: opacity 1s ease-out;
  pointer-events: none;
`;
