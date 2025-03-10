import { keyframes } from "styled-components";

export const titleReveal = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const pulseLight = keyframes`
  0%, 100% {
    background-size: 200% 200%;
  }
  50% {
    background-size: 220% 220%;
  }
`;