import React from 'react';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
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
    </ContactGrid>
  );
}
