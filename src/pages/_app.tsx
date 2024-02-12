import { ThemeProvider } from "next-themes";
import { Analytics } from '@vercel/analytics/react';

import { AppProps } from "next/app";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider themes={['light', 'dark']}>
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
  );
}

export default MyApp;
