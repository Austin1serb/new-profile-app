// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
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
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
