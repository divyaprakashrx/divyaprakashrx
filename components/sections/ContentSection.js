import styled, { keyframes, css } from "styled-components";
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
  height: auto;
  display: none;
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    display: block;
    margin: 10px auto;
    height: 400px;
  }
`;

const CarouselWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  touch-action: pan-x;
  height: 100%;
  ${props => props.autoScroll && !props.isPaused && css`
    transition: transform ${props.transitionSpeed || 0.5}s ease-in-out;
  `}
`;

const CarouselCard = styled.div`
  flex: 0 0 100%;
  padding: 0;
  box-sizing: border-box;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 153, 255, 0.3);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  font-size: 20px;
  box-shadow: 0 0 10px rgba(0, 153, 255, 0.5);
  
  &:first-of-type {
    left: 5px;
  }
  
  &:last-of-type {
    right: 5px;
  }
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
    font-size: clamp(1.5rem, 2.5vw, 2rem);
    margin-bottom: 1rem;
  }
  animation: ${props => props.inView ? textAppear : 'none'} 0.8s ease-out forwards;
`;

// Make text smaller for narrower screens
const SmallContentText = styled(ContentText)`
  @media (max-width: 768px) {
    font-size: clamp(0.75rem, 1.2vw, 1rem);
    line-height: 1.4;
    padding: 0 1rem;
    margin-bottom: 1rem;
  }
  animation: ${props => props.inView ? textAppear : 'none'} 0.8s ease-out forwards;
  animation-delay: 0.2s;
`;

export default function ContentSection({ inView, parallaxX1, parallaxY1, parallaxX2, parallaxY2 }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);
  const touchStartXRef = useRef(0);
  const cardCount = 3; // Number of cards in the gallery
  const autoScrollInterval = 5000; // Time in ms between auto scrolls
  const transitionSpeed = 0.8; // Transition speed in seconds

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % cardCount);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + cardCount) % cardCount);
  };

  // Auto scroll functionality
  useEffect(() => {
    let interval;
    if (inView && !isPaused) {
      interval = setInterval(() => {
        nextSlide();
      }, autoScrollInterval);
    }
    return () => clearInterval(interval);
  }, [inView, isPaused]);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }, [currentSlide]);

  // Add touch swipe support for mobile
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
    setIsPaused(true); // Pause auto-scroll on touch
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;
    
    // If swiped more than 50px, change slide
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide(); // Swipe left -> next slide
      } else {
        prevSlide(); // Swipe right -> previous slide
      }
    }
    
    // Resume auto-scroll after a short delay
    setTimeout(() => setIsPaused(false), 2000);
  };

  // Pause on hover
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

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
        
        {/* <StyledCardGallery inView={inView} /> */}

        <CarouselContainer>
          <CarouselButton onClick={prevSlide}>&#10094;</CarouselButton>
          <CarouselWrapper 
            ref={carouselRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            autoScroll={true}
            isPaused={isPaused}
            transitionSpeed={transitionSpeed}
          >
            {/* Create clones for infinite scroll effect */}
            {[...Array(cardCount)].map((_, index) => (
              <CarouselCard key={index}>
                <CardGallery inView={true} cardIndex={index} />
              </CarouselCard>
            ))}
          </CarouselWrapper>
          <CarouselButton onClick={nextSlide}>&#10095;</CarouselButton>
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