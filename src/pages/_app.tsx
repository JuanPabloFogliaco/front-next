import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { store } from "../redux/store";
import { GlobalStyles } from "../styles/home";
import { useRouter } from "next/router";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
