import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import MainLayout from '../layout/Main';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Street Chick&apos;n</title>
        <meta
          name='description'
          content="Street Chick'n website"
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
        <meta
          name='viewport'
          content='initial-scale=1, width=device-width'
        />
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </div>
  );
}
