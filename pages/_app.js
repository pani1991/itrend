import "../styles/globals.css";
<style data-styled="active" data-styled-version="5.3.5"></style>;
import "bootstrap/dist/css/bootstrap.min.css";
import { Cookies, CookiesProvider } from "react-cookie";
function MyApp({ Component, pageProps, cookies }) {
  const isBrowser = typeof window !== "undefined";
  return (
    <CookiesProvider cookies={isBrowser ? undefined : new Cookies(cookies)}>
      <Component {...pageProps} />
    </CookiesProvider>
  );
}

export default MyApp;
