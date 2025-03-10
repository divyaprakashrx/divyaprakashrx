'use client';
import dynamic from 'next/dynamic'
import { document } from 'postcss';

const PC = () => {
  if(typeof document !== 'undefined'){
    const { Player, Controls } = require("@lottiefiles/react-lottie-player");

    return (
      <Player
        autoplay
        loop
        src="https://assets6.lottiefiles.com/packages/lf20_w51pcehl.json"
        style={{
          height: "30vh",
          width: "30vh",
        }}
      >
      </Player>
    );
  }
  return null;
};

export default dynamic(() => Promise.resolve(PC), {
  ssr: false
})