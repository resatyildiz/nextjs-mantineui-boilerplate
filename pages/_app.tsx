import { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "../store";
import { MainWrapper } from "./_mainWrapper";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Provider store={store}>
        <MainWrapper
          Component={() => <Component {...pageProps} />}
          initialColorScheme={"light"}
        />
      </Provider>
    </>
  );
}
