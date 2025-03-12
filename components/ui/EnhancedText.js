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
  @media (max-width: 768px) {
    font-size: clamp(1.5rem, 2.5vw, 2rem);
    margin-bottom: 1rem;
  }
  animation: ${props => props.inView ? textAppear : 'none'} 0.8s ease-out forwards;
`;

export const SmallContentText = styled(ContentText)`
  @media (max-width: 768px) {
    font-size: clamp(0.75rem, 1.2vw, 1rem);
    line-height: 1.4;
    padding: 0 1rem;
    margin-bottom: 1rem;
  }
  animation: ${props => props.inView ? textAppear : 'none'} 0.8s ease-out forwards;
  animation-delay: 0.2s;
`;

export const SectionTitle = styled(ContentTitle)`
  font-size: clamp(1.8rem, 3vw, 2.2rem);
  margin-bottom: 1.5rem;
  color: ${siteConfig.theme.text.primary};
`;

export const SectionText = styled(ContentText)`
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  margin-bottom: 2rem;
  max-width: 800px;
`;
