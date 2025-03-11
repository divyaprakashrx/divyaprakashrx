import styled from "styled-components";
import { ContentTitle, ContentText } from "../styled/TextElements";
import { FloatingElement } from "../styled/Layout";
import { NeonContainer, NeonCircle } from '../styled/Effects';
import CardGallery from "../CardGallery";

const Section = styled.section`
  height: 100vh;
  background-color: rgba(3, 9, 18, 0.95); // Updated to match the dark blue-black theme
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

export default function ContentSection({ inView, parallaxX1, parallaxY1, parallaxX2, parallaxY2 }) {
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
        
        <ContentTitle 
          inView={inView}
          style={{
            textShadow: '0 0 10px rgba(0, 153, 255, 0.5)'
          }}
        >
          Welcome to the Next Level
        </ContentTitle>
        <ContentText inView={inView}>
          As you scroll down, the earth image dissolves away, revealing this content section.
          The transition is smooth and gives a sense of moving from one world to another.
          Each element appears with its own subtle animation.
        </ContentText>
        
        {/* Add the card gallery here */}
        <CardGallery inView={inView} />
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