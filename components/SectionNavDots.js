import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateX(10px); }
  to   { opacity: 1; transform: translateX(0); }
`;

const Container = styled.nav`
  position: fixed;
  right: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 200;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  align-items: flex-end;
  animation: ${fadeIn} 0.6s 1s ease-out both;

  @media (max-width: 768px) {
    right: 0.7rem;
    gap: 0.4rem;
  }
`;

const DotRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  
  &:hover > span {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Label = styled.span`
  font-size: 0.68rem;
  letter-spacing: 0.06em;
  color: rgba(255,255,255,0.55);
  opacity: 0;
  transform: translateX(6px);
  transition: opacity 0.2s, transform 0.2s;
  white-space: nowrap;
  pointer-events: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Dot = styled.button`
  width: ${p => p.active ? '10px' : '6px'};
  height: ${p => p.active ? '10px' : '6px'};
  border-radius: 50%;
  border: none;
  background: ${p => p.active ? p.color || 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.25)'};
  box-shadow: ${p => p.active ? `0 0 8px ${p.color || 'rgba(255,255,255,0.6)'}` : 'none'};
  cursor: pointer;
  padding: 0;
  transition: width 0.2s, height 0.2s, background 0.2s, box-shadow 0.2s;
  flex-shrink: 0;
  
  &:hover {
    background: ${p => p.color || 'rgba(255,255,255,0.7)'};
    width: 8px;
    height: 8px;
  }
`;

const sections = [
  { id: 'hero',        label: 'Home',        color: 'rgba(255,255,255,0.9)' },
  { id: 'intro',       label: 'Intro',       color: 'rgba(33,150,243,0.9)' },
  { id: 'arsynal',     label: 'Arsynal',     color: 'rgba(139,92,246,0.9)' },
  { id: 'unyx',        label: 'Unyx',        color: 'rgba(6,182,212,0.9)' },
  { id: 'open-source', label: 'Open Source', color: 'rgba(34,197,94,0.9)' },
  { id: 'research',    label: 'Research',    color: 'rgba(251,191,36,0.9)' },
  { id: 'highlights',  label: 'Impact',      color: 'rgba(248,113,113,0.9)' },
  { id: 'about',       label: 'About',       color: 'rgba(99,102,241,0.9)' },
  { id: 'contact',     label: 'Contact',     color: 'rgba(255,255,255,0.7)' },
];

export default function SectionNavDots({ frameRef }) {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const frame = frameRef?.current;
    if (!frame) return;

    const sectionEls = sections.map(s => ({
      ...s,
      el: document.getElementById(s.id),
    })).filter(s => s.el);

    let ticking = false;
    
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = frame.scrollTop;
          const frameH = frame.clientHeight;
          let current = sectionEls[0]?.id || 'hero';

          for (const { id, el } of sectionEls) {
            const top = el.offsetTop;
            if (scrollTop >= top - frameH * 0.4) {
              current = id;
            }
          }
          setActive(current);
          ticking = false;
        });
        ticking = true;
      }
    };

    frame.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => frame.removeEventListener('scroll', onScroll);
  }, [frameRef]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    const frame = frameRef?.current;
    if (!el || !frame) return;
    frame.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
  };

  return (
    <Container>
      {sections.map(s => (
        <DotRow key={s.id} onClick={() => scrollTo(s.id)}>
          <Label>{s.label}</Label>
          <Dot
            active={active === s.id}
            color={s.color}
            aria-label={`Go to ${s.label}`}
          />
        </DotRow>
      ))}
    </Container>
  );
}
