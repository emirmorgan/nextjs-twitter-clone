import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";

import "../styles/globals.css";
import { store } from "../redux/store";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (router.pathname === "/") {
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

  return (
    <Provider store={store}>
      <Head>
        <title>Twitter</title>
        <meta name="og:title" content="Twitter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
