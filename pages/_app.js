import Head from 'next/head';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>OneBitFood-LMB</title>
      </Head>
    
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
