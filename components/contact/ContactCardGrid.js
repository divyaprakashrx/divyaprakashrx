import React from 'react';
import { faLinkedin, faGithub, faNpm, faAppStore } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ContactGrid } from '../styled/ContactElements';
import SocialCard from './SocialCard';

export default function ContactCardGrid({ socialData, inView }) {
  return (
    <ContactGrid>
      <SocialCard 
        social={socialData.linkedin} 
        icon={faLinkedin} 
        inView={inView} 
      />
      <SocialCard 
        social={socialData.github} 
        icon={faGithub} 
        inView={inView} 
      />
      <SocialCard 
        social={socialData.npm} 
        icon={faNpm} 
        inView={inView} 
      />
      <SocialCard 
        social={socialData.email} 
        icon={faEnvelope} 
        inView={inView} 
      />
    </ContactGrid>
  );
}
