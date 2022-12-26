import Head from 'next/head'
import Image from 'next/image'
import Loading from '../components/loading'
import styles from '../styles/Home.module.css'
import Name from "../components/name";
import PC from "../components/pc";


export default function Home() {
  return (
    <loading
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        background: "url('/images/R.jpg')",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <PC />
    </loading>
  );
}
