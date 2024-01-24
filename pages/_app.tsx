// pages/_app.js
import { AppProps } from 'next/app';
import Layout from './layout';
import '../styles/globals.css';
import '../styles/index.css'
import '../styles/fish.scss'
 import '../styles/footer.scss'
 import '../styles/index.css'
 import '../styles/project.css'


 
function MyApp({ Component, pageProps }: AppProps) {
  return (
    // If you use a layout component, wrap it around <Component {...pageProps} />
     <Layout>
      <Component {...pageProps} />
    // </Layout>
  );
}

export default MyApp;
