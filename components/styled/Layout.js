import styled from "styled-components";

export const Frame = styled.div`
  width: 100%;
  height: 100vh;
  height: 100dvh; /* Safari mobile fallback */
  overflow-y: auto; /* Changed from scroll to auto for Safari */
  overflow-x: hidden;
  position: relative;
  scroll-snap-type: none; /* Disable scroll-snap - it's causing the throttle issue */
  scroll-behavior: smooth;
  pointer-events: auto;
  touch-action: pan-y;
  -webkit-overflow-scrolling: touch; /* Safari smooth scrolling */
  overscroll-behavior-y: contain; /* Prevent Safari bounce */
  
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
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