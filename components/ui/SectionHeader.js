import React from 'react';
import { SectionTitle, SectionText } from '../styled/ContactElements';

export default function SectionHeader({ title, description, inView }) {
  return (
    <>
      <SectionTitle inView={inView}>
        {title}
      </SectionTitle>
      <SectionText inView={inView}>
        {description}
      </SectionText>
    </>
  );
}
