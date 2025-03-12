import styled, { keyframes } from "styled-components";
import { siteConfig } from "../../config/site";

// Container styles with enhanced background
export const Section = styled.section`
  height: 100vh;
  background: linear-gradient(135deg, ${siteConfig.theme.background.main}, rgba(3, 9, 18, 0.95));
  color: ${siteConfig.theme.text.primary};
  position: relative;
  overflow: hidden;
  z-index: 2;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 70% 30%, rgba(0, 100, 200, 0.03), transparent 60%),
                radial-gradient(circle at 30% 70%, rgba(0, 80, 150, 0.02), transparent 55%);
    z-index: -1;
  }
`;

// Fixed background layer for decorative elements
export const BackgroundLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
`;

// Subtle floating element in background
export const FloatingDot = styled.div`
  position: absolute;
  width: ${props => props.size || '8px'};
  height: ${props => props.size || '8px'};
  border-radius: 50%;
  background: ${props => props.color || 'rgba(0, 120, 255, 0.2)'};
  top: ${props => props.top || '20%'};
  left: ${props => props.left || '20%'};
  box-shadow: 0 0 15px ${props => props.color || 'rgba(0, 120, 255, 0.2)'};
  opacity: ${props => props.opacity || 0.6};
  filter: blur(3px);
  transition: all 3s ease-in-out;
  animation: float-${props => props.direction || 'up'} ${props => props.duration || '15s'} infinite ease-in-out;
  z-index: -1;
  
  @keyframes float-up {
    0%, 100% { transform: translateY(0) translateX(0); }
    50% { transform: translateY(-20px) translateX(10px); }
  }
  
  @keyframes float-down {
    0%, 100% { transform: translateY(0) translateX(0); }
    50% { transform: translateY(20px) translateX(-10px); }
  }
  
  @keyframes float-left {
    0%, 100% { transform: translateY(0) translateX(0); }
    50% { transform: translateY(10px) translateX(-20px); }
  }
  
  @keyframes float-right {
    0%, 100% { transform: translateY(0) translateX(0); }
    50% { transform: translateY(-10px) translateX(20px); }
  }
`;
