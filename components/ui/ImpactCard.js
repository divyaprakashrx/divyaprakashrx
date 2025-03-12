import styled from "styled-components";
import { siteConfig } from "../../config/site";
import { SmallContentText } from "./EnhancedText";

export const ImpactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto 2rem;
`;

export const ImpactCard = styled.div`
  position: relative;
  background: ${siteConfig.theme.background.card};
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: ${siteConfig.theme.shadow.subtle};
  backdrop-filter: blur(5px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  min-height: 160px;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${siteConfig.theme.shadow.strong};
  }
`;

export const ImpactCardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${siteConfig.theme.background.overlay};
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  transition: opacity 0.3s ease;
  border-radius: 10px;
  transform: translateY(10px);
  pointer-events: none;
  
  ${ImpactCard}:hover & {
    opacity: 1;
    transform: translateY(0);
    pointer-events: all;
  }
`;

export const ImpactTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.8rem;
  color: ${siteConfig.theme.text.primary};
`;

export const OverlayDescription = styled.p`
  color: ${siteConfig.theme.text.primary};
  font-size: 1rem;
  line-height: 1.5;
  text-align: center;
`;

const ImpactCardComponent = ({ title, description }) => {
  return (
    <ImpactCard>
      <ImpactTitle>{title}</ImpactTitle>
      <SmallContentText style={{ margin: '0 0 auto' }}>
        {/* Show a shortened preview of description */}
        {description.substring(0, 70)}
        {description.length > 70 ? '...' : ''}
      </SmallContentText>
      
      {/* Overlay with full description on hover */}
      <ImpactCardOverlay>
        <ImpactTitle>{title}</ImpactTitle>
        <OverlayDescription>{description}</OverlayDescription>
      </ImpactCardOverlay>
    </ImpactCard>
  );
};

export default ImpactCardComponent;
