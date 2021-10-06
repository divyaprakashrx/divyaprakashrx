import "../styles/globals.css";
import Router from "next/router";
import { useEffect, useState } from "react";
import Loading from "../components/loading";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const onChangeLoading = ({ loading, progress }) => {
    setLoading(loading);
    setProgress(progress);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(progress + 1);
    }, 20);

    return () => clearInterval(interval);
    // if (action.type === "LOADING_START") {
    //   setProgress(0);
    // } else if (action.type === "LOADING_PROGRESS") {
    //   setProgress(action.progress);
    // } else if (action.type === "LOADING_END") {
    //   setProgress(100);
    // }
  }, [progress]);

  Router.events.on("routeChangeStart", () => onChangeLoading(true, 0));
  Router.events.on("routeChangeComplete", () => onChangeLoading(false, 1));
  Router.events.on("routeChangeError", () => onChangeLoading(false, 1));


  return <Loading data={progress} />;

  if (loading) return <Loading data={progress} />;

  if (!loading) {
    if (progress >= 100) {
      return <Component {...pageProps} />;
    } else {
      return <Loading data={progress} />;
    }
  }
}

export default MyApp;
