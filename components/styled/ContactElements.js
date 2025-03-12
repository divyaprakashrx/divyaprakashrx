import styled, { keyframes } from "styled-components";
import { ContentTitle, ContentText } from "./TextElements";
import { siteConfig } from "../../config/site";

const textAppear = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const SectionTitle = styled(ContentTitle)`
  font-size: clamp(1.8rem, 3vw, 2.2rem);
  margin-bottom: 1.5rem;
  color: #ffffff; /* Explicitly set to white for better visibility */
  animation: ${props => props.inView ? textAppear : 'none'} 0.8s ease-out forwards;
  text-shadow: 0 0 15px rgba(0, 100, 255, 0.3); /* Add text shadow for better contrast */
  font-weight: 600; /* Increase font weight for better visibility */
  
  @media (max-width: 768px) {
    font-size: clamp(1.5rem, 2.5vw, 1.8rem);
    margin-bottom: 1rem;
  }
`;

export const SectionText = styled(ContentText)`
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  margin-bottom: 2rem;
  max-width: 800px;
  color: #e6e6ff; /* Light blue-white for paragraphs */
  animation: ${props => props.inView ? textAppear : 'none'} 0.8s ease-out forwards;
  animation-delay: 0.2s;
  line-height: 1.6; /* Improved line height for readability */
  
  @media (max-width: 768px) {
    font-size: clamp(0.85rem, 1.2vw, 1rem);
    margin-bottom: 1.5rem;
    line-height: 1.4;
  }
`;

export const SmallContentText = styled(ContentText)`
  color: #e6e6ff; /* Light blue-white for consistency */
  animation: ${props => props.inView ? textAppear : 'none'} 0.8s ease-out forwards;
  animation-delay: 0.2s;
  
  @media (max-width: 768px) {
    font-size: clamp(0.75rem, 1.1vw, 0.9rem);
    line-height: 1.3;
    padding: 0 1rem;
    margin-bottom: 0.75rem;
  }
`;

// Contact specific styles - Enhanced styling
export const ContactContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  position: relative;
  z-index: 10;
  
  @media (max-width: 768px) {
    padding: 1.5rem 0.75rem;
  }
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 900px;
  margin: 2rem auto;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.5rem;
    margin: 1.5rem auto;
  }
`;

export const ContactCard = styled.div`
  background: rgba(10, 18, 30, 0.8); /* Darker card background for better text contrast */
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  box-shadow: ${siteConfig.theme.shadow.subtle};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${siteConfig.theme.shadow.strong};
    background: rgba(15, 25, 40, 0.9);
  }
`;

export const ContactIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: ${siteConfig.theme.primary.accent};
  text-shadow: 0 0 10px rgba(0, 120, 255, 0.5);
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 0.75rem;
  }
`;

export const ImpactTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.8rem;
  color: #ffffff; /* Explicit white for heading */
  font-weight: 500;
  text-shadow: 0 0 10px rgba(0, 80, 200, 0.3); /* Shadow for better visibility */
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 0.6rem;
  }
`;

export const ContactLink = styled.a`
  color: #e6e6ff; /* Light color for better visibility */
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${siteConfig.theme.primary.accent};
    transform: scale(1.05);
    text-shadow: 0 0 8px rgba(0, 120, 255, 0.5);
  }
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-top: 0.75rem;
  }
`;

export const ContactCardTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: ${siteConfig.theme.text.primary};
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 0.3rem;
  }
`;
