// pages/_document.js

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Add your meta tags here */}
        <meta name="viewport" content="width=1024" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
