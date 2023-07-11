// import "@/public/assets/font-iconmoon.css";
import "@/public/assets/font-iconmoon.css";
import "@/src/assets/fonts/font-awesome.css";
import "@/src/App.scss";
import "@/src/components/header/header.styles.scss";
import "@/src/scss/components/button.scss";
import "@/src/scss/components/banner.scss";
import "@/src/scss/components/_preloading.scss";
import "@/src/scss/components/_icon-box.scss";
import "@/src/scss/components/section.scss";
import "@/src/scss/components/_progress.scss";
import "@/src/scss/components/form.scss";
import Preloader from "@/src/components/preloader";
import { useEffect, useState } from "react";
import AOS from "aos";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);
  return <>{!loading ? <Preloader /> : <Component {...pageProps} />}</>;
}

export default MyApp;
