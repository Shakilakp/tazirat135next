import "../styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Script from "next/script";

// import "./public/js/feather.min.js";
// import "./public/js/font-awesome.min.js";
// import "./public/js/bootstrap.bundle.min.js";
// import "./public/js/scripts.min.js";
// import "./public/js/jquery.min.js";
// import "./public/js/lordicon.js";
// import "./public/js/external.js";
// import "https://bot.palizportal.com/assets/modules/channel-web/inject.js";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Script src="./js/feather.min.js" strategy="beforeInteractive" />
    <Script src="./js/font-awesome.min.js" strategy="beforeInteractive" />
    <Script src="./js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
    <Script src="./js/scripts.min.js" strategy="beforeInteractive" />
    <Script src="./js/jquery.min.js" strategy="beforeInteractive" />
    <Script src="./js/lordicon.js" strategy="beforeInteractive" />
    <Script src="./js/external.js" strategy="beforeInteractive" />
    <Script src="https://bot.palizportal.com/assets/modules/channel-web/inject.js" strategy="beforeInteractive" />
   <Component {...pageProps} />;
   </>
  );
}
