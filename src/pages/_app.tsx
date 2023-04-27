import {ReactElement, ReactNode, useEffect} from "react";
import type {NextPage} from "next";
import type {AppProps} from "next/app";
import {Open_Sans} from "next/font/google";
import "../styles/main.sass";
import AOS from "aos";
import "aos/dist/aos.css";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const openSansFont = Open_Sans({
  subsets: ["latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--open-sans",
});

const combineFonts = `${openSansFont.variable}`;

export default function MyApp({Component, pageProps}: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: "ease-in-out",
    });
  });

  return (
    <div className={`${combineFonts}`}>
      {getLayout(<Component {...pageProps} />)}
    </div>
  );
}
