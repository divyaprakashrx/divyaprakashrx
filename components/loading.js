'use client'
import styled from "styled-components";
import SpaceR from "../components/SpaceR";
import { Frame } from "../components/styled/Layout";
import dynamic from "next/dynamic";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(3, 9, 18);
  color: white;
  position: relative;
  overflow: hidden;
`;

const SpaceLoading = () => {
  return (
    <Frame>
      <Container>
        <SpaceR />
      </Container>
    </Frame>
  );
};

export default dynamic(() => Promise.resolve(SpaceLoading), {
  ssr: false
})