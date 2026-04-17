import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { SectionContainer } from '../styled/Sections';
import { SmallContentTitle, SmallContentText } from '../ui/EnhancedText';
import { ContentText } from '../styled/TextElements';
import { fadeUp, VP } from '../../utils/motionVariants';
import { ArrowRight } from 'lucide-react';

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

const NavLinksContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1rem;
`;

const NavLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 25px;
  color: #a5b4fc;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  cursor: pointer;
  
  svg {
    width: 16px;
    height: 16px;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    background: rgba(99, 102, 241, 0.2);
    border-color: rgba(99, 102, 241, 0.5);
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
    
    svg {
      transform: translateX(3px);
    }
  }
`;

const roles = [
  { label: '🎯 Engineer', color: '#2196F3' },
  { label: '🚀 Founder', color: '#4CAF50' },
  { label: '⚡ Builder', color: '#FF9800' },
  { label: '🎨 Designer', color: '#9C27B0' }
];

const navLinks = [
  { label: 'Arsynal', href: '/#arsynal' },
  { label: 'Unyx', href: '/#unyx' },
  { label: 'Open Source', href: '/#open-source' },
  { label: 'Research', href: '/#research' }
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

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={VP}
      >
        <NavLinksContainer>
          {navLinks.map((link) => {
            const sectionId = link.href.startsWith('/#') ? link.href.slice(2) : null;
            return (
              <NavLink
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  if (sectionId) {
                    e.preventDefault();
                    const frame = document.getElementById('page-frame');
                    const target = document.getElementById(sectionId);
                    if (frame && target) {
                      frame.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
                    }
                  }
                }}
              >
                {link.label}
                <ArrowRight />
              </NavLink>
            );
          })}
        </NavLinksContainer>
      </motion.div>
    </EnhancedIntroContainer>
  );
};

export default IntroductionSection;
