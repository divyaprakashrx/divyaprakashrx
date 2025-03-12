import styled from "styled-components";
import { siteConfig } from "../../config/site";

// Main section container
export const Section = styled.section`
  min-height: 100vh;
  height:100vh;
  background-color: ${siteConfig.theme.background.grey};
  color: ${siteConfig.theme.text.primary};
  z-index: 2;
`;

// Scrollable content container
export const ScrollableContent = styled.div`
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-snap-type: y mandatory;
  
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

// Container for all sections
export const SectionsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding-top: 100px;
  padding-bottom: 200px;
  flex-direction: column;
  position: relative;
  &:after {
    content: '';
    height: 100px;
    width: 100%;
    display: block;
  }
`;

// Generic content container
export const ContentContainer = styled.div`
  flex: 1;
  padding: 0 2rem;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Background layer for decorative elements
export const BackgroundLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

// Individual section container
export const SectionContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  position: relative;
  justify-content: center;
  padding-top: 80px;
`;
