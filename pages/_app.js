import "../styles/globals.css";
import Router from "next/router";
import { useEffect, useState } from "react";
import Loading from "../components/loading";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        // Increment progress but cap at 95% during loading
        // The final 5% will be completed when route change is complete
        if (prevProgress < 95) {
          return prevProgress + 1;
        }
        return prevProgress;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  // Handle route changes
  useEffect(() => {
    const handleRouteChangeStart = () => {
      setLoading(true);
      setProgress(0);
    };

    const handleRouteChangeComplete = () => {
      setLoading(false);
      setProgress(100);
    };

    const handleRouteChangeError = () => {
      setLoading(false);
      setProgress(100);
    };

    Router.events.on("routeChangeStart", handleRouteChangeStart);
    Router.events.on("routeChangeComplete", handleRouteChangeComplete);
    Router.events.on("routeChangeError", handleRouteChangeError);

    // Initial load complete
    setTimeout(() => {
      if (progress >= 95) {
        setLoading(false);
        setProgress(100);
      }
    }, 1000);

    return () => {
      Router.events.off("routeChangeStart", handleRouteChangeStart);
      Router.events.off("routeChangeComplete", handleRouteChangeComplete);
      Router.events.off("routeChangeError", handleRouteChangeError);
    };
  }, [progress]);

  if (loading || progress < 100) {
    return <Loading data={progress} />;
  }

  return <Component {...pageProps} />;
}

export default MyApp;
