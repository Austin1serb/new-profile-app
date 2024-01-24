// pages/_app.js
import { AppProps } from 'next/app';
import Layout from './layout';
import '../styles/globals.css';
import '../styles/index.css'
import '../styles/fish.scss'
import '../styles/footer.scss'
import '../styles/project.css'
import Head from 'next/head';



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>

<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<meta property="og:title" content="Your Website Title" />
<meta property="og:description" content="A brief description of your website" />
<meta property="og:url" content="https://www.yourwebsite.com" />
<meta property="og:type" content="website" />
<meta property="og:image" content="https://www.yourwebsite.com/path/to/your/og-image.jpg" />

<link rel="icon" href="http://localhost:3000/favicon.ico" type="image/x-icon" />

{/* other global head elements */}
</Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
