import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html >
      <Head />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="stylesheet" href="/css/fonts.css" />
      <link rel="stylesheet" href="/css/boxicons.min.css" />
      <link rel="stylesheet" href="/css/style.min.css" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <script src="/js/feather.min.js" defer></script>
      <script src="/js/font-awesome.min.js" defer></script>
      <script src="/js/bootstrap.bundle.min.js" defer></script>
      <script src="/js/scripts.min.js" defer></script>
      <script src="/js/jquery.min.js" defer></script>
      <script src="/js/lordicon.js" defer></script>
      <script src="/js/external.js" defer></script>
      <script src="https://bot.palizportal.com/assets/modules/channel-web/inject.js" defer></script>
      <body className="nav-fixed" style={{backgroundColor: '#DCDCF6'}} id="backgroundSite">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
