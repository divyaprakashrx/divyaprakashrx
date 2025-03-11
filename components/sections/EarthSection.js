import styled from "styled-components";
import { Title } from "../styled/TextElements";

const Section = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  background-color: rgb(3, 9, 18); // Updated to match the dark blue-black theme
  align-items: center;
  overflow: hidden;
  scroll-snap-align: start;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(3, 9, 18); // Updated to match the dark blue-black theme
    background-image: url('/images/earth.jpg');
    background-size: cover;
    background-position: center;
    z-index: 0;
    transform-origin: center;
    transform: ${props => `scale(${props.zoomLevel})`};
    opacity: ${props => props.opacity};
    will-change: transform, opacity;
    transition: transform 0.05s linear, opacity 0.3s ease-out;
  }
`;

export default function EarthSection({ zoomLevel, opacity, titleOpacity }) {
  return (
    <Section zoomLevel={zoomLevel} opacity={opacity}>
      <Title opacity={titleOpacity}>divya prakash</Title>
    </Section>
  );
}