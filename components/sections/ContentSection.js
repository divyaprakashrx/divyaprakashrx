import styled, { keyframes } from "styled-components";
import { ContentTitle, ContentText } from "../styled/TextElements";
import { FloatingElement } from "../styled/Layout";
import { NeonContainer, NeonCircle } from '../styled/Effects';
import CardGallery from "../CardGallery";
import { useRef, useState, useEffect } from "react";

const Section = styled.section`
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.95); // Blends with the black background
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1rem; // Reset base font size
  padding: 1rem;
  scroll-snap-align: start;
  position: relative;
  overflow: hidden;
  z-index: 2;
  
  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-top: 4rem;
  }
`;

const StyledCardGallery = styled(CardGallery)`
  @media (max-width: 768px) {
    display: none;
  }
`;

const CarouselContainer = styled.div`
  width: 90%;
  max-width: 600px;
  margin: 20px auto;
  display: none;
  overflow: hidden;

  @media (max-width: 768px) {
    display: block;
  }
`;

const CarouselWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

const CarouselCard = styled.div`
  flex: 0 0 100%;
  padding: 10px;
  box-sizing: border-box;
`;

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

const SmallContentTitle = styled(ContentTitle)`
  @media (max-width: 768px) {
    font-size: clamp(1.8rem, 3vw, 2.5rem);
  }
  animation: ${props => props.inView ? textAppear : 'none'} 0.8s ease-out forwards;
`;

const SmallContentText = styled(ContentText)`
  @media (max-width: 768px) {
    font-size: clamp(0.9rem, 1.8vw, 1.3rem);
  }
  animation: ${props => props.inView ? textAppear : 'none'} 0.8s ease-out forwards;
  animation-delay: 0.2s;
`;

export default function ContentSection({ inView, parallaxX1, parallaxY1, parallaxX2, parallaxY2 }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);
  const cardCount = 3; // Number of cards in the gallery

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % cardCount);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + cardCount) % cardCount);
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }, [currentSlide]);

  return (
    <NeonContainer>
      <Section>
        <FloatingElement 
          top="10%" 
          left="10%" 
          translateX={`${parallaxX1}px`} 
          translateY={`${parallaxY1}px`}
          style={{
            boxShadow: '0 0 15px 5px rgba(0, 153, 255, 0.3)',
            opacity: inView ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out'
          }}
        />

<FloatingElement 
          top="70%" 
          left="80%" 
          translateX={`${parallaxX2}px`} 
          translateY={`${parallaxY2}px`}
          style={{
            boxShadow: '0 0 15px 5px rgba(0, 153, 255, 0.3)',
            opacity: inView ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out'
          }}
        />
        
        <SmallContentTitle 
          inView={inView}
          style={{
            textShadow: '0 0 10px rgba(0, 153, 255, 0.5)'
          }}
        >
          Welcome to the Next Level
        </SmallContentTitle>
        <SmallContentText inView={inView}>
          As you scroll down, the earth image dissolves away, revealing this content section.
          The transition is smooth and gives a sense of moving from one world to another.
          Each element appears with its own subtle animation.
        </SmallContentText>
        
        <StyledCardGallery inView={inView} />

        <CarouselContainer>
          <CarouselWrapper ref={carouselRef}>
            <CarouselCard><CardGallery inView={inView} /></CarouselCard>
            <CarouselCard><CardGallery inView={inView} /></CarouselCard>
            <CarouselCard><CardGallery inView={inView} /></CarouselCard>
          </CarouselWrapper>
        </CarouselContainer>
      </Section>
      
      <NeonCircle 
        style={{
          width: '200px',
          height: '200px',
          top: '20%',
          right: '15%',
          transform: `translate(${parallaxX2}px, ${parallaxY2}px)`,
          opacity: inView ? 0.9 : 0,
          transition: 'opacity 0.8s ease-in-out',
          filter: 'blur(2px)'
        }}
      />
    </NeonContainer>
  );
}