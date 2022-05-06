import '~/styles/globals.css';
import 'normalize.css/normalize.css';

import Head from 'next/head';
import Home from '../components/Home';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Next Portfolio</title>
      </Head>

      <Home />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
