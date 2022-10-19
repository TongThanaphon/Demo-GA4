/* eslint-disable @next/next/next-script-for-ga */
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'
class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          {/* <!-- Google tag (gtag.js) --> */}
          <script
            async
            src='https://www.googletagmanager.com/gtag/js?id=G-NN0TT0ZDRB'
          ></script>
          <script>
            {` window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NN0TT0ZDRB');`}
          </script>
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* <!-- Google Tag Manager (noscript) --> */}
          {/* <noscript>
            <iframe
              src='https://www.googletagmanager.com/ns.html?id=GTM-5F5GWC6'
              height='0'
              width='0'
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript> */}
          {/* <!-- End Google Tag Manager (noscript) --> */}
        </body>
      </Html>
    )
  }
}

export default MyDocument
