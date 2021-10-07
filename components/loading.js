import { useEffect, useState } from "react";
import Name from "./name";
import PC from "./pc";

// const Load = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100vw;
//   height: 100vh;
//   flex-direction: column;
// `;

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
export default Loading;
