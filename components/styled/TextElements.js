import styled from "styled-components";
import { titleReveal, pulseLight } from "../../styles/animations";

export const Title = styled.h1`
  position: relative;
  z-index: 1;
  font-size: 3.5em;
  font-weight: bold;
  text-align: center;
  opacity: ${props => props.opacity};
  transition: opacity 0.3s ease-out;
  
  /* Light in the middle gradient effect */
  background: radial-gradient(
    circle at center,
    rgba(255, 255, 255, 0.95) 0%,
    rgba(236, 222, 204, 0.95) 25%,
    rgba(43, 131, 196, 0.95) 75%
  );
  background-size: 200% 200%;
  background-position: center center;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-text-fill-color: transparent;
  animation: ${titleReveal} 0.8s ease-out forwards, ${pulseLight} 3s ease-in-out infinite 0.8s;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
`;

export const ContentTitle = styled.h2`
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  margin-bottom: 1rem;
  text-align: center;
  opacity: ${props => props.inView ? 1 : 0};
  transform: translateY(${props => props.inView ? 0 : '20px'});
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  padding: 0 1rem;
`;

export const ContentText = styled.p`
  font-size: clamp(1rem, 2vw, 1.5rem);
  line-height: 1.5;
  max-width: 80ch;
  text-align: center;
  opacity: ${props => props.inView ? 1 : 0};
  transform: translateY(${props => props.inView ? 0 : '20px'});
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  transition-delay: 0.2s;
  padding: 0 2rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 95%;
  }
`;