import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ContactCard, ContactIcon, ImpactTitle, SmallContentText, ContactLink } from '../styled/ContactElements';

export default function SocialCard({ social, icon, inView }) {
  return (
    <ContactCard>
      <ContactIcon>
        <FontAwesomeIcon icon={icon} />
      </ContactIcon>
      <ImpactTitle>{social.title}</ImpactTitle>
      <SmallContentText style={{ margin: '0 0 1rem' }} inView={inView}>
        {social.description}
      </SmallContentText>
      <ContactLink href={social.url} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={icon} /> {social.username}
      </ContactLink>
    </ContactCard>
  );
}
