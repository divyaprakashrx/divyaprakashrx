import React from 'react';
import { siteContent } from "../../config/content";
import { NeonContainer } from '../styled/Effects';
import { Section } from '../styled/SectionBackgrounds';
import { ContactContainer } from '../styled/ContactElements';
import SectionBackground from '../ui/SectionBackground';
import SectionHeader from '../ui/SectionHeader';
import ContactCardGrid from '../contact/ContactCardGrid';

export default function ContactSection({ inView }) {
  return (
    <NeonContainer>
      <Section id="contact">
        <SectionBackground />
        
        <ContactContainer>
          <SectionHeader 
            title={siteContent.contact.title}
            description={siteContent.contact.description}
            inView={inView}
          />
          
          <ContactCardGrid 
            socialData={siteContent.contact.social}
            inView={inView}
          />
        </ContactContainer>
      </Section>
    </NeonContainer>
  );
}
