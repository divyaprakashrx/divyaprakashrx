import React from 'react';
import styled from 'styled-components';
import { SectionContainer } from '../styled/Sections';
import { SectionTitle, SectionText } from '../ui/EnhancedText';
import { siteConfig } from '../../config/site';

const PrinciplesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const PrincipleItem = styled.li`
  background: ${siteConfig.theme.primary.main};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  color: ${siteConfig.theme.text.primary};
  box-shadow: ${siteConfig.theme.shadow.subtle};
`;

const VisionSection = ({ id, sectionRef, inView, content }) => {
  return (
    <SectionContainer id={id} ref={sectionRef}>
      <SectionTitle inView={inView}>
        {content.title}
      </SectionTitle>
      <SectionText inView={inView}>
        {content.description}
      </SectionText>
      <PrinciplesList>
        {content.principles.map((principle, index) => (
          <PrincipleItem key={index}>{principle}</PrincipleItem>
        ))}
      </PrinciplesList>
    </SectionContainer>
  );
};

export default VisionSection;
