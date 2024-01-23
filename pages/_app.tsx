// pages/_app.js
import '../styles/globals.css';
 import Layout from './Layout';

function MyApp({ Component, pageProps }) {
  return (
    // If you use a layout component, wrap it around <Component {...pageProps} />
     <Layout>
      <Component {...pageProps} />
    // </Layout>
  );
}

export default MyApp;
