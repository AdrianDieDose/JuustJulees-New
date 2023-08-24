import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';

import '../styles/globals.css';

import ThemeProvider from '~/components/ThemeProvider';
import shouldUseTinaEditor from "~/lib/should-use-tina-editor";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
  );
}

function TinaWrapper(props: React.PropsWithChildren<{}>) {
  if (shouldUseTinaEditor()) {
    const Tina = dynamic(
      {
        ssr: false,
      }
    );

    return <Tina>{props.children}</Tina>;
  }

  return <>{props.children}</>;
}

export default MyApp;
