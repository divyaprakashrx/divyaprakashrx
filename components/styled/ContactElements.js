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
`;

export const SectionText = styled(ContentText)`
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  margin-bottom: 2rem;
  max-width: 800px;
  color: #e6e6ff; /* Light blue-white for paragraphs */
  animation: ${props => props.inView ? textAppear : 'none'} 0.8s ease-out forwards;
  animation-delay: 0.2s;
  line-height: 1.6; /* Improved line height for readability */
`;

export const SmallContentText = styled(ContentText)`
  @media (max-width: 768px) {
    font-size: clamp(0.75rem, 1.2vw, 1rem);
    line-height: 1.4;
    padding: 0 1rem;
    margin-bottom: 1rem;
  }
  color: #e6e6ff; /* Light blue-white for consistency */
  animation: ${props => props.inView ? textAppear : 'none'} 0.8s ease-out forwards;
  animation-delay: 0.2s;
`;

// Contact specific styles - Enhanced styling
export const ContactContainer = styled.div`
  background: linear-gradient(to bottom, rgba(5, 15, 30, 0.85), rgba(2, 10, 20, 0.9)); /* Darker, more contrasting background */
  border-radius: 15px;
  padding: 3rem 1rem;
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  box-shadow: ${siteConfig.theme.shadow.medium};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, rgba(0, 120, 255, 0.05) 0%, transparent 70%);
    z-index: -1;
  }
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 900px;
  margin: 2rem auto;
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
`;

export const ImpactTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.8rem;
  color: #ffffff; /* Explicit white for heading */
  font-weight: 500;
  text-shadow: 0 0 10px rgba(0, 80, 200, 0.3); /* Shadow for better visibility */
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
`;
