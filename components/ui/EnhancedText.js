import styled, { keyframes } from "styled-components";
import { ContentTitle, ContentText } from "../styled/TextElements";
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

export const SmallContentTitle = styled(ContentTitle)`
  animation: ${props => props.inView ? textAppear : 'none'} 0.8s ease-out forwards;
  
  @media (max-width: 768px) {
    font-size: clamp(1.3rem, 2.2vw, 1.6rem);
    margin-bottom: 0.8rem;
  }
`;

export const SmallContentText = styled(ContentText)`
  animation: ${props => props.inView ? textAppear : 'none'} 0.8s ease-out forwards;
  animation-delay: 0.2s;
  
  @media (max-width: 768px) {
    font-size: clamp(0.75rem, 1.1vw, 0.9rem);
    line-height: 1.3;
    padding: 0 0.75rem;
    margin-bottom: 0.75rem;
  }
`;

export const SectionTitle = styled(ContentTitle)`
  font-size: clamp(1.8rem, 3vw, 2.2rem);
  margin-bottom: 1.5rem;
  color: ${siteConfig.theme.text.primary};
  
  @media (max-width: 768px) {
    font-size: clamp(1.5rem, 2.5vw, 1.8rem);
    margin-bottom: 1rem;
  }
`;

export const SectionText = styled(ContentText)`
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  margin-bottom: 2rem;
  max-width: 800px;
  
  @media (max-width: 768px) {
    font-size: clamp(0.85rem, 1.2vw, 1rem);
    margin-bottom: 1.5rem;
  }
`;
