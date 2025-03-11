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

export const cardFloat = keyframes`
  0% {
    transform: translateY(0px) scale(0.98);
  }
  50% {
    transform: translateY(-15px) scale(1);
  }
  100% {
    transform: translateY(0px) scale(0.98);
  }
`;

export const cardAppear = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px) scale(0.9);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;