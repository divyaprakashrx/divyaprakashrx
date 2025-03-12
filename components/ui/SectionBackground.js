import React from 'react';
import { BackgroundLayer, FloatingDot } from '../styled/SectionBackgrounds';

export default function SectionBackground() {
  return (
    <BackgroundLayer>
      <FloatingDot size="120px" top="10%" left="5%" color="rgba(0, 60, 120, 0.03)" opacity="0.3" direction="up" duration="25s" />
      <FloatingDot size="80px" top="80%" left="80%" color="rgba(0, 100, 200, 0.02)" opacity="0.2" direction="down" duration="22s" />
      <FloatingDot size="150px" top="40%" left="85%" color="rgba(20, 80, 150, 0.02)" opacity="0.2" direction="left" duration="28s" />
      <FloatingDot size="100px" top="60%" left="15%" color="rgba(0, 80, 180, 0.03)" opacity="0.3" direction="right" duration="24s" />
    </BackgroundLayer>
  );
}
