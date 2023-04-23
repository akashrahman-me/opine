import type {ReactElement, ReactNode} from "react";
import type {NextPage} from "next";
import type {AppProps} from "next/app";
import {Open_Sans} from "next/font/google";
import "../styles/main.sass";

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

  return <div className={`${combineFonts}`}>{getLayout(<Component {...pageProps} />)}</div>;
}
