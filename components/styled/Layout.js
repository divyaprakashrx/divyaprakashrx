import styled from "styled-components";

export const Frame = styled.div`
  width: 100%;
  height: 100vh;
  min-width: 100%;
  min-height: 100vh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  position: relative;
  scroll-behavior: smooth;
`;

export const FloatingElement = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  background: rgba(0, 153, 255, 0.1);
  border-radius: 50%;
  top: ${props => props.top};
  left: ${props => props.left};
  transform: translate(${props => props.translateX || '0'}, ${props => props.translateY || '0'});
  transition: transform 1s ease-out;
`;