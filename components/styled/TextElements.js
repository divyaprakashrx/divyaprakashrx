import styled from "styled-components";
import { titleReveal, pulseLight, gradientAnimation } from "../../styles/animations";

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
  
  @media (max-width: 768px) {
    font-size: 2.5em;
  }
`;

export const ContentTitle = styled.h2`
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  margin-bottom: 1rem;
  text-align: center;
  opacity: ${props => props.inView ? 1 : 0};
  transform: translateY(${props => props.inView ? 0 : '20px'});
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  padding: 0 1rem;
  
  /* Gradient text effect */
  background: linear-gradient(
    90deg, 
    #2196F3 0%,     /* Blue */
    #64B5F6 15%,    /* Light Blue */
    #1976D2 30%,    /* Dark Blue */
    #76FF03 45%,    /* Green */
    #64DD17 60%,    /* Light Green */
    #FFEB3B 75%,    /* Yellow */
    #FFC107 90%,    /* Amber */
    #2196F3 100%    /* Back to Blue */
  );
  background-size: 300% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0.5);
  text-fill-color: rgba(255, 255, 255, 0.5);
        color: rgba(255, 255, 255, 0.5);
  animation: ${gradientAnimation} 8s linear infinite;
  
  @media (max-width: 768px) {
    font-size: clamp(1.1rem, 2vw, 1.5rem);
    margin-bottom: 0.75rem;
  }
`;

export const ContentText = styled.p`
  font-size: clamp(1rem, 2vw, 1.5rem);
  line-height: 1.5;
  color: ${props => props.theme.text ? props.theme.text.primary : '#ffffff'};
  max-width: 80ch;
  text-align: center;
  opacity: ${props => props.inView ? 1 : 0};
  transform: translateY(${props => props.inView ? 0 : '20px'});
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  transition-delay: 0.2s;
  padding: 0 2rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: clamp(0.8rem, 1.2vw, 0.95rem);
    max-width: 95%;
    padding: 0 1rem;
    line-height: 1.4;
  }
`;