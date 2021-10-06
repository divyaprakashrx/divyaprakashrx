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
    <loading className="h:h-screen flex flex-col h-screen justify-center items-center">
      <PC />
      <div className="flex justify-center items-center">
        <Name progress={data} />
      </div>
    </loading>
  );
};
export default Loading;
