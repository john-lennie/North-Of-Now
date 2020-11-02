import Document, { Html, Head, Main, NextScript } from 'next/document'
import PrismicScript from '../components/PrismicScript'
import { reset, globals } from 'styles'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet" />
          <link rel="icon" href="/favicon-b.png" type="image/png" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <PrismicScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
