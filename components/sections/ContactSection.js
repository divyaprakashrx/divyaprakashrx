import styled, { keyframes } from "styled-components";
import { ContentTitle, ContentText } from "../styled/TextElements";
import { siteContent } from "../../config/content";
import { siteConfig } from "../../config/site";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { NeonContainer } from '../styled/Effects';

// Container styles with enhanced background
const Section = styled.section`
  height: 100vh;
  background: linear-gradient(135deg, ${siteConfig.theme.background.main}, rgba(3, 9, 18, 0.95));
  color: ${siteConfig.theme.text.primary};
  position: relative;
  overflow: hidden;
  z-index: 2;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 70% 30%, rgba(0, 100, 200, 0.03), transparent 60%),
                radial-gradient(circle at 30% 70%, rgba(0, 80, 150, 0.02), transparent 55%);
    z-index: -1;
  }
`;

// Fixed background layer for decorative elements
const BackgroundLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
`;

// Subtle floating element in background
const FloatingDot = styled.div`
  position: absolute;
  width: ${props => props.size || '8px'};
  height: ${props => props.size || '8px'};
  border-radius: 50%;
  background: ${props => props.color || 'rgba(0, 120, 255, 0.2)'};
  top: ${props => props.top || '20%'};
  left: ${props => props.left || '20%'};
  box-shadow: 0 0 15px ${props => props.color || 'rgba(0, 120, 255, 0.2)'};
  opacity: ${props => props.opacity || 0.6};
  filter: blur(3px);
  transition: all 3s ease-in-out;
  animation: float-${props => props.direction || 'up'} ${props => props.duration || '15s'} infinite ease-in-out;
  z-index: -1;
  
  @keyframes float-up {
    0%, 100% { transform: translateY(0) translateX(0); }
    50% { transform: translateY(-20px) translateX(10px); }
  }
  
  @keyframes float-down {
    0%, 100% { transform: translateY(0) translateX(0); }
    50% { transform: translateY(20px) translateX(-10px); }
  }
  
  @keyframes float-left {
    0%, 100% { transform: translateY(0) translateX(0); }
    50% { transform: translateY(10px) translateX(-20px); }
  }
  
  @keyframes float-right {
    0%, 100% { transform: translateY(0) translateX(0); }
    50% { transform: translateY(-10px) translateX(20px); }
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

const SectionTitle = styled(ContentTitle)`
  font-size: clamp(1.8rem, 3vw, 2.2rem);
  margin-bottom: 1.5rem;
  color: #ffffff; /* Explicitly set to white for better visibility */
  animation: ${props => props.inView ? textAppear : 'none'} 0.8s ease-out forwards;
  text-shadow: 0 0 15px rgba(0, 100, 255, 0.3); /* Add text shadow for better contrast */
  font-weight: 600; /* Increase font weight for better visibility */
`;

const SectionText = styled(ContentText)`
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  margin-bottom: 2rem;
  max-width: 800px;
  color: #e6e6ff; /* Light blue-white for paragraphs */
  animation: ${props => props.inView ? textAppear : 'none'} 0.8s ease-out forwards;
  animation-delay: 0.2s;
  line-height: 1.6; /* Improved line height for readability */
`;

const SmallContentText = styled(ContentText)`
  @media (max-width: 768px) {
    font-size: clamp(0.75rem, 1.2vw, 1rem);
    line-height: 1.4;
    padding: 0 1rem;
    margin-bottom: 1rem;
  }
  color: #e6e6ff; /* Light blue-white for consistency */
  animation: ${props => props.inView ? textAppear : 'none'} 0.8s ease-out forwards;
  animation-delay: 0.2s;
`;

// Contact specific styles - Enhanced styling
const ContactContainer = styled.div`
  background: linear-gradient(to bottom, rgba(5, 15, 30, 0.85), rgba(2, 10, 20, 0.9)); /* Darker, more contrasting background */
  border-radius: 15px;
  padding: 3rem 1rem;
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  box-shadow: ${siteConfig.theme.shadow.medium};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, rgba(0, 120, 255, 0.05) 0%, transparent 70%);
    z-index: -1;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 900px;
  margin: 2rem auto;
`;

const ContactCard = styled.div`
  background: rgba(10, 18, 30, 0.8); /* Darker card background for better text contrast */
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  box-shadow: ${siteConfig.theme.shadow.subtle};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${siteConfig.theme.shadow.strong};
    background: rgba(15, 25, 40, 0.9);
  }
`;

const ContactIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: ${siteConfig.theme.primary.accent};
  text-shadow: 0 0 10px rgba(0, 120, 255, 0.5);
`;

const ImpactTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.8rem;
  color: #ffffff; /* Explicit white for heading */
  font-weight: 500;
  text-shadow: 0 0 10px rgba(0, 80, 200, 0.3); /* Shadow for better visibility */
`;

const ContactLink = styled.a`
  color: #e6e6ff; /* Light color for better visibility */
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${siteConfig.theme.primary.accent};
    transform: scale(1.05);
    text-shadow: 0 0 8px rgba(0, 120, 255, 0.5);
  }
`;

export default function ContactSection({ inView }) {
  return (
    <NeonContainer>
      <Section>
        <BackgroundLayer>
          <FloatingDot size="120px" top="10%" left="5%" color="rgba(0, 60, 120, 0.03)" opacity="0.3" direction="up" duration="25s" />
          <FloatingDot size="80px" top="80%" left="80%" color="rgba(0, 100, 200, 0.02)" opacity="0.2" direction="down" duration="22s" />
          <FloatingDot size="150px" top="40%" left="85%" color="rgba(20, 80, 150, 0.02)" opacity="0.2" direction="left" duration="28s" />
          <FloatingDot size="100px" top="60%" left="15%" color="rgba(0, 80, 180, 0.03)" opacity="0.3" direction="right" duration="24s" />
        </BackgroundLayer>
        
        <ContactContainer>
          <SectionTitle inView={inView || true}>
            {siteContent.contact.title}
          </SectionTitle>
          <SectionText inView={inView || true}>
            {siteContent.contact.description}
          </SectionText>
          
          <ContactGrid>
            <ContactCard>
              <ContactIcon>
                <FontAwesomeIcon icon={faLinkedin} />
              </ContactIcon>
              <ImpactTitle>{siteContent.contact.social.linkedin.title}</ImpactTitle>
              <SmallContentText style={{ margin: '0 0 1rem' }} inView={inView}>
                {siteContent.contact.social.linkedin.description}
              </SmallContentText>
              <ContactLink href={siteContent.contact.social.linkedin.url} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} /> {siteContent.contact.social.linkedin.username}
              </ContactLink>
            </ContactCard>
            
            <ContactCard>
              <ContactIcon>
                <FontAwesomeIcon icon={faGithub} />
              </ContactIcon>
              <ImpactTitle>{siteContent.contact.social.github.title}</ImpactTitle>
              <SmallContentText style={{ margin: '0 0 1rem' }} inView={inView}>
                {siteContent.contact.social.github.description}
              </SmallContentText>
              <ContactLink href={siteContent.contact.social.github.url} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} /> {siteContent.contact.social.github.username}
              </ContactLink>
            </ContactCard>
          </ContactGrid>
        </ContactContainer>
      </Section>
    </NeonContainer>
  );
}
