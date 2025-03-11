import styled from "styled-components";
import AnimatedCard from "./AnimatedCard";

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
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-wrap: nowrap;
    width: 100%;
  }
`;

const CardGallery = ({ inView }) => {
  const cardImages = [
    "/images/earth2.jpg", 
    "/images/earth2.jpg", 
    "/images/earth2.jpg"
  ];
  
  return (
    <GalleryContainer>
      <CardWrapper>
        {cardImages.map((image, index) => (
          <AnimatedCard 
            key={index} 
            imageUrl={image} 
            delay={`${0.2 * (index + 1)}s`} 
            alt={`Card ${index + 1}`} 
          />
        ))}
      </CardWrapper>
    </GalleryContainer>
  );
};

export default CardGallery;
