import Head from "next/head";
import Image from "next/image";
import Loading from "../components/loading";
import styles from "../styles/Home.module.css";
import Name from "../components/name";
import PC from "../components/pc";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";

const Frame = styled.div`
  // width: auto;
  // height: 600px;
  width: 100%;
  height: 100vh;
  background-color: #491d88;
  display: grid;
  // position: absolute;
  // top: 0;
  // left: 0;
`;

const Glass = styled.div`
  position: absolute;
  ${(props) => props.mousePosition.position ? props.mousePosition.position : "top"}: 0;
  width: ${(props) =>
    props.mousePosition.position === "left" ||
    props.mousePosition.position === "right"
      ? "160px"
      : "60vh"};
  border: grey 0.5px;
  background:rgba(0,0,0,0.2);
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
  box-shadow: 0 0 10px 1px ${(props) => `rgba(${props.neon.red}, ${props.neon.green}, ${props.neon.blue}, ${props.neon.alpha})`};
  z-index: 2;
  animation: all cubic-bezier(0.81, -0.13, 0.35, 0.63) 2s;
  :hover {
    height: 80vh;
    animation: cubic-bezier(0.81, -0.13, 0.35, 0.63) 2s;
  }
`;

export default function Home() {
  // const canvasRef = useRef(null);
  // const draw = (ctx, frameCount) => {};

  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   const context = canvas.getContext("2d");
  //   let frameCount = 0;
  //   let animationFrameId;
  //   //draw rectangle
  //   function render() {
  //     frameCount++;
  //     //generate rectangular grid
  //     for (let i = 0; i < 30; i++) {
  //       for (let j = 0; j < 30; j++) {
  //         //join diagonal
  //         context.beginPath();
  //         context.moveTo(j * 100, i * 100);

  //         context.lineTo(j * 100 + 100, i * 100 + 100);
  //         context.strokeStyle = "#000000";
  //         context.strokeRect(i * 100, j * 100, 100, 100);

  //         context.stroke();
  //       }
  //     }

  //     //generate triangular grid and gradient
  //     for (let i = 0; i < 30; i++) {
  //       for (let j = 0; j < 30; j++) {
  //         //join diagonal
  //         context.beginPath();
  //         context.moveTo(j * 100, i * 200);

  //         context.lineTo(j * 100 + 100, i * 100 + 100);
  //         context.strokeStyle = "#000000";
  //         context.strokeRect(i * 100, j * 100, 100, 100);
  //         //fill triangular gradient
  //         context.beginPath();
  //         context.moveTo(j * 100, i * 100);
  //         context.lineTo(j * 100 + 100, i * 100 + 100);
  //         context.lineTo(j * 100, i * 100 + 100);
  //         context.lineTo(j * 100, i * 100);
  //         context.closePath();
  //         let gradient = context.createLinearGradient(
  //           j * 100,
  //           i * 100,
  //           j * 100 + 100,
  //           i * 100 + 100
  //         );
  //         gradient.addColorStop(0, "#2f4f3f");
  //         gradient.addColorStop(1, "#fdfdfd");
  //         context.fillStyle = gradient;
  //         context.fill();

  //         //fill opposite triangle
  //         context.beginPath();
  //         context.moveTo(j * 100, i * 100);
  //         context.lineTo(j * 100 + 100, i * 100 + 100);
  //         context.lineTo(j * 100 + 100, i * 100);
  //         context.lineTo(j * 100, i * 100);
  //         context.closePath();
  //         let gradient2 = context.createLinearGradient(
  //           j * 100,
  //           i * 100,
  //           j * 100 + 100,
  //           i * 100 + 100
  //         );
  //         gradient2.addColorStop(0, "#fdfdfd");
  //         gradient2.addColorStop(1, "#2f4f3f");
  //         context.fillStyle = gradient2;
  //         context.fill();
  //         context.stroke();
  //       }
  //     }

  //     // //generate large rectangle space
  //     // context.beginPath();
  //     // context.moveTo(100, 100);
  //     // context.lineTo(100, 1000);
  //     // context.lineTo(1000, 1000);
  //     // context.lineTo(1000, 100);
  //     // context.lineTo(100, 100);
  //     // context.closePath();
  //     // context.strokeStyle = "#000000";
  //     // context.fillRect(100, 100, 900, 900);
  //     // context.stroke();
  //   }

  //   render();
  //   return () => {
  //     window.cancelAnimationFrame(animationFrameId);
  //   };
  // }, [draw]);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
    position: "left",
  });

  const [neon, setNeon] = useState({ red: 0, green: 0, blue: 0, alpha: 0.5 });

  //useEffect to continuously rgb effect of neon
  useEffect(() => {
    const interval = setInterval(() => {
      setNeon({
        //make tranition smooth by using Math.floor
        red: (neon.red + Math.floor(Math.random() * 255)) % 255,
        green: (neon.green + Math.floor(Math.random() * 255)) % 255,
        blue: (neon.blue + Math.floor(Math.random() * 255)) % 255,
        alpha: 0.5,
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const changePosition = () => {
    //set to left if mouse is near left side of screen after checking screen width
    if (
      mousePosition.x < window.innerWidth / 3 &&
      mousePosition.position !== "left" &&
      mousePosition.y > window.innerHeight / 6
      && mousePosition.y< (window.innerHeight / 6) * 5
    ) {
      setMousePosition({
        position: "left",
      });
    }
    //set to right if mouse is near right side of screen after checking screen width
    if (
      mousePosition.x > (window.innerWidth / 3) * 2 &&
      mousePosition.position !== "right" 
      && mousePosition.y > window.innerHeight / 6
      && mousePosition.y < (window.innerHeight / 6) * 5
    ) {
      setMousePosition({
        position: "right",
      });
    }
    //set to top if mouse is near top side of screen after checking screen height
    if (
      mousePosition.y < window.innerHeight / 3 &&
      mousePosition.position !== "top" &&
      mousePosition.x < window.innerWidth / 6
      && mousePosition.x> (window.innerWidth / 6) * 5
    ) {
      setMousePosition({
        position: "top",
      });
    }
    //set to bottom if mouse is near bottom side of screen after checking screen height
  if (
      mousePosition.y > (window.innerHeight / 6) * 5 &&
    mousePosition.position !== "bottom" &&
    mousePosition.x > window.innerWidth / 6
    && mousePosition.x< (window.innerWidth / 6) * 5
    ) {
      setMousePosition({
        position: "bottom",
      });
    }
  };

  return (
    <Frame>
      {/* create canvas
      <canvas ref={canvasRef} id="canvas" width="1920" height="1080"></canvas> */}
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
    </Frame>
  );
}
