'use client';
import { useEffect, useState } from "react";
import Name from "./name";
import PC from "./pc";
import dynamic from 'next/dynamic'



const Loading = ({ data }) => {
  return (
    <loading
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        background:"url('/images/R.jpg')",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <PC />
        <Name progress={data} />
    </loading>
  );
};

export default dynamic(() => Promise.resolve(Loading), {
  ssr: false
})