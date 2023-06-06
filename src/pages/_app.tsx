import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { store } from "../redux/store";
import { GlobalStyles } from "../globalStyle";
import axios from "axios";

function MyApp({ Component, pageProps }: AppProps) {

  axios.interceptors.request.use(
    config => {
      console.log('Solicitud enviada:', config);
      // Puedes realizar modificaciones en la configuración de la solicitud aquí si es necesario
      return config;
    },
    error => {
      console.error('Error al enviar la solicitud:', error);
      return Promise.reject(error);
    }
  );

  return (
    <Provider store={store}>
      <GlobalStyles />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
