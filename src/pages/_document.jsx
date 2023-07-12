import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/assets/favicon.png" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper@8/swiper-bundle.min.css"
        />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
        {/* font */}
        {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Zen+Dots&display=swap" /> */}
      </Head>
      <title>ICOLand | ICO landing page & ICO Crypto Next Js Template</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
