import Head from "next/head";
import Image from "next/image";
import Loading from "../components/loading";
import styles from "../styles/Home.module.css";
import Name from "../components/name";
import PC from "../components/pc";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import Tray from "../components/tray";

const Frame = styled.div`
  // width: auto;
  // height: 600px;
  width: 100%;
  height: 100vh;
  background-color: #eff7f7;
  display: grid;
  // position: absolute;
  // top: 0;
  // left: 0;
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

  return (
    <Frame>
      {/* create canvas
      <canvas ref={canvasRef} id="canvas" width="1920" height="1080"></canvas> */}
      <Tray neon={neon} />
    </Frame>
  );
}
