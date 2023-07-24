import "@/public/assets/font-iconmoon.css";
import "@/src/assets/fonts/font-awesome.css";
import "@/src/App.scss";
import "@/src/scss/components/button.scss";
import "@/src/scss/components/banner.scss";
import "@/src/scss/components/_preloading.scss";
import "@/src/scss/components/_icon-box.scss";
import "@/src/scss/components/section.scss";
import "@/src/scss/components/_progress.scss";
import "@/src/scss/components/form.scss";
import Preloader from "@/src/components/preloader";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AOS from "aos";
import AnimateCursor from "@/src/components/cursor";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [background, setBackground] = useState("#ff4581");

  useEffect(() => {
    switch (router.pathname) {
      case "/home-nft":
      case "/home-music":
      case "/dashboard-tokensales":
      case "/dashboard-features":
      case "/dashboard-roadmap":
      case "/dashboard-creations":
      case "/dashboard-team":
      case "/dashboard-faq":
        return setBackground("#C004DE");
      case "/home-nft2":
        return setBackground("#1FD1F9");
      case "/home-defi-01":
        return setBackground("#2e72d2");
      case "/home-defi-02":
      case "/home-defi-04":
        return setBackground("#48d6d2");
      case "/home-defi-03":
        return setBackground("#b4e116");
      default:
        return setBackground("#FF4581");
    }
  }, [router.pathname]);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    setTimeout(() => {
      setLoading(true);
    }, 800);
  }, []);

  return (
    <>
      {!loading ? (
        <Preloader />
      ) : (
        <>
          <AnimateCursor backgroundColor={background} />
          <Component {...pageProps} />
        </>
      )}
    </>
  );
}

export default MyApp;
