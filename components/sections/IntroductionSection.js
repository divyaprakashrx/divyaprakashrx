import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { SectionContainer } from '../styled/Sections';
import { SmallContentTitle, SmallContentText } from '../ui/EnhancedText';
import { ContentText } from '../styled/TextElements';
import { fadeUp, VP } from '../../utils/motionVariants';

const EnhancedIntroContainer = styled(SectionContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
  
  @media (min-width: 1024px) {
    gap: 2.5rem;
  }
`;

const RoleBadgesContainer = styled.div`
  display: none;
  
  @media (min-width: 1024px) {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 1rem;
  }
`;

const RoleBadge = styled(motion.div)`
  padding: 0.75rem 1.5rem;
  background: rgba(33, 150, 243, 0.1);
  border: 1px solid rgba(33, 150, 243, 0.3);
  border-radius: 25px;
  color: #64B5F6;
  font-size: 0.95rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(33, 150, 243, 0.2);
    border-color: rgba(33, 150, 243, 0.5);
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(33, 150, 243, 0.3);
  }
`;

const DescriptionText = styled(ContentText)`
  max-width: 900px;
  
  @media (min-width: 1024px) {
    font-size: clamp(1.1rem, 1.3vw, 1.25rem);
    line-height: 1.7;
  }
`;

const roles = [
  { label: '🎯 Engineer', color: '#2196F3' },
  { label: '🚀 Founder', color: '#4CAF50' },
  { label: '⚡ Builder', color: '#FF9800' },
  { label: '🎨 Designer', color: '#9C27B0' }
];

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  show: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.1 + 0.3,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

const IntroductionSection = ({ id, sectionRef, inView, content }) => {
  return (
    <EnhancedIntroContainer id={id} ref={sectionRef}>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={VP}
      >
        <SmallContentTitle inView={inView}>
          {content.title}
        </SmallContentTitle>
      </motion.div>

      <RoleBadgesContainer>
        {roles.map((role, i) => (
          <RoleBadge
            key={role.label}
            custom={i}
            variants={badgeVariants}
            initial="hidden"
            whileInView="show"
            viewport={VP}
          >
            {role.label}
          </RoleBadge>
        ))}
      </RoleBadgesContainer>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={VP}
      >
        <DescriptionText inView={inView}>
          {content.description}
        </DescriptionText>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={VP}
      >
        <SmallContentText inView={inView}>
          {content.smallDescription}
        </SmallContentText>
      </motion.div>
    </EnhancedIntroContainer>
  );
};

export default IntroductionSection;
