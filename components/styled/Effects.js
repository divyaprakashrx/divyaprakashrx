import styled from 'styled-components';
import { siteConfig } from '../../config/site';

export const NeonContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 0 30px 10px rgba(0, 153, 255, 0.2) inset;
    pointer-events: none;
  }
`;

export const NeonCircle = styled.div`
  position: absolute;
  border-radius: ${props => props.radius || '10px'};
  box-shadow:
    0 0 15px rgba(${siteConfig.theme.neon.red}, ${siteConfig.theme.neon.green}, ${siteConfig.theme.neon.blue}, 0.7),
    0 0 30px rgba(${siteConfig.theme.neon.red}, ${siteConfig.theme.neon.green}, ${siteConfig.theme.neon.blue}, 0.5),
    0 0 60px rgba(${siteConfig.theme.neon.red}, ${siteConfig.theme.neon.green}, ${siteConfig.theme.neon.blue}, 0.4),
    0 0 100px rgba(${siteConfig.theme.neon.red}, ${siteConfig.theme.neon.green}, ${siteConfig.theme.neon.blue}, 0.2);
  z-index: 0;
  
  @media (max-width: 768px) {
    box-shadow:
      0 0 10px rgba(${siteConfig.theme.neon.red}, ${siteConfig.theme.neon.green}, ${siteConfig.theme.neon.blue}, 0.7),
      0 0 20px rgba(${siteConfig.theme.neon.red}, ${siteConfig.theme.neon.green}, ${siteConfig.theme.neon.blue}, 0.4),
      0 0 40px rgba(${siteConfig.theme.neon.red}, ${siteConfig.theme.neon.green}, ${siteConfig.theme.neon.blue}, 0.2);
  }
`;
