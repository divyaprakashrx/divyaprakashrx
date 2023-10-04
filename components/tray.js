import styled from "styled-components";
import { useEffect, useRef, useState } from "react";

const Glass = styled.div`
  position: absolute;
  ${(props) =>
    props.mousePosition.position ? props.mousePosition.position : "top"}: 0;
  width: ${(props) =>
    props.mousePosition.position === "left" ||
    props.mousePosition.position === "right"
      ? "160px"
      : "60vh"};
  border: grey 0.5px;
  background: rgba(0, 0, 0, 0.2);
  height: ${(props) =>
    props.mousePosition.position === "left" ||
    props.mousePosition.position === "right"
      ? "60vh"
      : "160px"};
  justify-self: center;
  align-self: center;
  border-radius: ${(props) => {
    if (props.mousePosition.position === "left") {
      return "0 20px 20px 0px";
    } else if (props.mousePosition.position === "right") {
      return "20px 0 0 20px";
    } else if (props.mousePosition.position === "top") {
      return "0 0 20px 20px";
    } else if (props.mousePosition.position === "bottom") {
      return "20px 20px 0 0";
    }
  }};
  //neon glow
  box-shadow: 0 0 10px 1px
    ${(props) =>
      `rgba(${props.neon.red}, ${props.neon.green}, ${props.neon.blue}, ${props.neon.alpha})`};
  z-index: 2;
  animation: all cubic-bezier(0.81, -0.13, 0.35, 0.63) 2s;
  :hover {
    height: 80vh;
    animation: cubic-bezier(0.81, -0.13, 0.35, 0.63) 2s;
  }
`;

export default function Tray(neon) {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
    position: "left",
  });
  const changePosition = () => {
    //set to left if mouse is near left side of screen after checking screen width
    if (
      mousePosition.x < window.innerWidth / 3 &&
      mousePosition.position !== "left" &&
      mousePosition.y > window.innerHeight / 6 &&
      mousePosition.y < (window.innerHeight / 6) * 5
    ) {
      setMousePosition({
        position: "left",
      });
    }
    //set to right if mouse is near right side of screen after checking screen width
    if (
      mousePosition.x > (window.innerWidth / 3) * 2 &&
      mousePosition.position !== "right" &&
      mousePosition.y > window.innerHeight / 6 &&
      mousePosition.y < (window.innerHeight / 6) * 5
    ) {
      setMousePosition({
        position: "right",
      });
    }
    //set to top if mouse is near top side of screen after checking screen height
    if (
      mousePosition.y < window.innerHeight / 3 &&
      mousePosition.position !== "top" &&
      mousePosition.x < window.innerWidth / 6 &&
      mousePosition.x > (window.innerWidth / 6) * 5
    ) {
      setMousePosition({
        position: "top",
      });
    }
    //set to bottom if mouse is near bottom side of screen after checking screen height
    if (
      mousePosition.y > (window.innerHeight / 6) * 5 &&
      mousePosition.position !== "bottom" &&
      mousePosition.x > window.innerWidth / 6 &&
      mousePosition.x < (window.innerWidth / 6) * 5
    ) {
      setMousePosition({
        position: "bottom",
      });
    }
  };
  return (
    <Glass
      mousePosition={mousePosition}
      neon={neon}
      //set position of glass to top, left, bottom, right of mouse position depending on mouse drag direction
      onDragEnd={(e) => {
        e.preventDefault();
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
        console.log("drag");
        console.log(mousePosition);
        changePosition();
      }}
      draggable="true"
    />
  );
}
