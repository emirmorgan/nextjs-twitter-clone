import type { AppProps } from "next/app";
import Head from "next/head";

import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Twitter</title>
        <meta name="og:title" content="Twitter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
