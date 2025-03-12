import styled from "styled-components";
import { siteConfig } from "../../config/site";

export const NeonContainer = styled.div`
  position: relative;
  width: 100%;
  &::after {
    content: '';
    position: absolute;
      height:100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 0 30px rgba(${siteConfig.theme.neon.red}, ${siteConfig.theme.neon.green}, ${siteConfig.theme.neon.blue}, ${siteConfig.theme.neon.alpha}) inset;
    pointer-events: none;
    opacity: 0.5;
  }
`;

export const NeonCircle = styled.div`
  position: absolute;
  border-radius: 50%;
  background: rgba(${siteConfig.theme.neon.red}, ${siteConfig.theme.neon.green}, ${siteConfig.theme.neon.blue}, 0.15);
  box-shadow: 
    0 0 60px rgba(${siteConfig.theme.neon.red}, ${siteConfig.theme.neon.green}, ${siteConfig.theme.neon.blue}, 0.6),
    0 0 100px rgba(${siteConfig.theme.neon.red}, ${siteConfig.theme.neon.green}, ${siteConfig.theme.neon.blue}, 0.4),
    0 0 150px rgba(${siteConfig.theme.neon.red}, ${siteConfig.theme.neon.green}, ${siteConfig.theme.neon.blue}, 0.2);
  z-index: 0;
`;
