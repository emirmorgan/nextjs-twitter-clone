import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";

import "../styles/globals.css";
import { store } from "../redux/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>Twitter</title>
        <meta name="og:title" content="Twitter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}
