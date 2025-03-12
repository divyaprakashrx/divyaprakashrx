import styled from "styled-components";
import AnimatedCard from "./AnimatedCard";
import { siteContent } from "../config/content";

const GalleryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  height: auto;
  margin: 40px auto;
  perspective: 1000px;
  padding: 20px;
  
  @media (max-width: 768px) {
    padding: 0;
    margin: 0 auto;
    height: 100%;
    width: 100%;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  
  @media (max-width: 768px) {
    flex-wrap: nowrap;
    width: 100%;
  }
`;

const CardGallery = ({ inView, cardIndex }) => {
  // If cardIndex is provided, render just that specific card for carousels
  // Otherwise render all cards for gallery view
  const cardsToRender = cardIndex !== undefined
    ? [siteContent.cards[cardIndex]]
    : siteContent.cards;
  
  return (
    <GalleryContainer>
      <CardWrapper>
        {cardsToRender.map((card, index) => (
          <AnimatedCard 
            key={card.id} 
            imageUrl={card.imageUrl} 
            title={card.title}
            description={card.description}
            delay={`${0.2 * (index + 1)}s`} 
            alt={card.title} 
          />
        ))}
      </CardWrapper>
    </GalleryContainer>
  );
};

export default CardGallery;
