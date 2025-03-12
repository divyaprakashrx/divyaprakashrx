import React from 'react';
import { SectionContainer } from '../styled/Sections';
import { SmallContentTitle, SmallContentText } from '../ui/EnhancedText';
import { ContentText } from '../styled/TextElements';

const IntroductionSection = ({ id, sectionRef, inView, content }) => {
  return (
    <SectionContainer id={id} ref={sectionRef}>
      <SmallContentTitle inView={inView}>
        {content.title}
      </SmallContentTitle>

      <ContentText inView={inView}>
        {content.description}
      </ContentText>

      <SmallContentText inView={inView}>
        {content.smallDescription}
      </SmallContentText>
    </SectionContainer>
  );
};

export default IntroductionSection;
