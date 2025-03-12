import React from 'react';
import { SectionTitle, SectionText } from '../styled/ContactElements';

export default function SectionHeader({ title, description, inView }) {
  return (
    <>
      <SectionTitle inView={inView || true}>
        {title}
      </SectionTitle>
      <SectionText inView={inView || true}>
        {description}
      </SectionText>
    </>
  );
}
