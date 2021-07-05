import Head from 'next/head';
import '../styles/globals.scss'
import Header from '../components/Header';
import Container from 'react-bootstrap/Container';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>OneBitFood-LMB</title>
        <link ref="icon" href="/favicon.ico" />
      </Head>
    
      <main>
      <RecoilRoot>
        <Header />
        <Container className='mt-5'>
          <Component {...pageProps} />
        </Container>
      </RecoilRoot>
      </main>
    </>
  )
}

export default MyApp
