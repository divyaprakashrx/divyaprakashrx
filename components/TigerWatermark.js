import React from 'react';
import styled from 'styled-components';

const WatermarkContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 9999;
  pointer-events: none; // Makes the watermark non-interactive
  opacity: 0.1; // 5% opacity
  width: 200px;
  height: 200px;
max-height: 10%;
max-width: auto;
`;

const TigerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const TigerWatermark = () => {
  return (
    <WatermarkContainer>
      <TigerImage src="/images/tiger-watermark.svg" alt="Tiger Watermark" />
    </WatermarkContainer>
  );
};

export default TigerWatermark;
