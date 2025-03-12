import React from 'react';
import { SectionContainer } from '../styled/Sections';
import { SectionTitle } from '../ui/EnhancedText';
import { ImpactGrid } from '../ui/ImpactCard';
import ImpactCardComponent from '../ui/ImpactCard';

const ImpactAreasSection = ({ id, sectionRef, inView, content }) => {
  return (
    <SectionContainer id={id} ref={sectionRef}>
      <SectionTitle inView={inView}>
        {content.title}
      </SectionTitle>
      <ImpactGrid>
        {content.areas.map((area, index) => (
          <ImpactCardComponent 
            key={index} 
            title={area.title} 
            description={area.description} 
          />
        ))}
      </ImpactGrid>
    </SectionContainer>
  );
};

export default ImpactAreasSection;
