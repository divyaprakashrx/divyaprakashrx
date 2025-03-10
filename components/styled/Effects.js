import styled from 'styled-components';

export const NeonContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 0 30px 10px rgba(0, 153, 255, 0.2) inset;
    pointer-events: none;
  }
`;

export const NeonCircle = styled.div`
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(
    circle at center,
    rgba(0, 153, 255, 0.2) 0%,
    rgba(0, 153, 255, 0.15) 40%,
    rgba(0, 153, 255, 0.05) 100%
  );
  box-shadow: 
    0 0 20px 5px rgba(0, 153, 255, 0.1),
    0 0 40px 10px rgba(0, 153, 255, 0.05),
    inset 0 0 30px 10px rgba(0, 153, 255, 0.01);
  z-index: 1;
  backdrop-filter: blur(5px);
  mix-blend-mode: screen;
`;
