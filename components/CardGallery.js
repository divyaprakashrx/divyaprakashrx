import styled from "styled-components";
import AnimatedCard from "./AnimatedCard";

const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  margin: 40px auto;
  perspective: 1000px;
  padding: 20px;
`;

const CardGallery = ({ inView }) => {
  // Only render cards when in view to optimize performance
  if (!inView) return null;
  
  // Using earth2.jpg for all cards as requested
  const cardImages = [
    "/images/earth2.jpg", 
    "/images/earth2.jpg", 
    "/images/earth2.jpg"
  ];
  
  return (
    <GalleryContainer>
      {cardImages.map((image, index) => (
        <AnimatedCard 
          key={index} 
          imageUrl={image} 
          delay={`${0.2 * (index + 1)}s`} 
          alt={`Card ${index + 1}`} 
        />
      ))}
    </GalleryContainer>
  );
};

export default CardGallery;
