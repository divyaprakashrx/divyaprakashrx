import styled from "styled-components";
import { siteConfig } from "../../config/site";

// Active section title with gradient underline
export const ActiveSectionTitle = styled.h2`
  position: absolute;
  top: 100px;
  left: 20px;
  font-size: 1.4rem;
  color: ${siteConfig.theme.text.primary};
  z-index: 100;
  margin: 0;
  font-weight: 500;
  display: inline-block;
  padding-bottom: 5px;
  opacity: ${props => props.isVisible ? 1 : 0};
  visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  pointer-events: ${props => props.isVisible ? 'auto' : 'none'};
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 100%;
    background: linear-gradient(90deg, 
      ${siteConfig.theme.primary.accent}, 
      rgba(0, 120, 255, 0.5), 
      rgba(80, 160, 255, 0.2)
    );
    border-radius: 3px;
  }
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

// Floating navigation container
export const FloatingNav = styled.nav`
  position: relative;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 15px;
  z-index: 100;
  opacity: ${props => props.isVisible ? 1 : 0};
  visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  pointer-events: ${props => props.isVisible ? 'auto' : 'none'};
  
  @media (max-width: 768px) {
    display: none;
  }
`;

// Navigation pill button
export const NavPill = styled.button`
  background: ${props => props.active ? siteConfig.theme.primary.accent : 'rgba(255, 255, 255, 0.1)'};
  border: none;
  width: ${props => props.active ? '14px' : '12px'};
  height: ${props => props.active ? '14px' : '12px'};
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: ${props => props.active ? 'center' : 'flex-start'};
  padding: 0;
  color: white;
  font-size: 0;
  transition: all 0.3s ease;
  position: relative;
  box-shadow: ${props => props.active ? '0 0 15px rgba(0, 120, 255, 0.5)' : '0 0 5px rgba(255, 255, 255, 0.3)'};
  
  &:hover {
    transform: scale(1.2);
    
    &:after {
      opacity: 1;
      transform: translateX(20px);
    }
  }
  
  &:after {
    content: '${props => props.label}';
    position: absolute;
    left: 100%;
    font-size: 0.85rem;
    opacity: 0;
    transform: translateX(10px);
    transition: all 0.3s ease;
    background: rgba(0, 20, 40, 0.7);
    padding: 5px 10px;
    border-radius: 5px;
    white-space: nowrap;
    pointer-events: none;
  }
`;

// Mobile section indicator
export const MobileSectionIndicator = styled.div`
  display: none;
  position: relative;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 20, 40, 0.8);
  backdrop-filter: blur(5px);
  padding: 8px 15px;
  border-radius: 20px;
  z-index: 10;
  opacity: ${props => props.isVisible ? 1 : 0};
  visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  pointer-events: ${props => props.isVisible ? 'auto' : 'none'};
  
  @media (max-width: 768px) {
    display: flex;
    gap: 10px;
  }
`;

// Indicator dot for mobile section
export const SectionDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.active ? siteConfig.theme.primary.accent : 'rgba(255, 255, 255, 0.3)'};
  transition: background 0.3s ease;
`;
