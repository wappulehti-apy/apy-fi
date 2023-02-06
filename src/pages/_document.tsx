import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="fi">
        <Head>
          <link
            rel="stylesheet"
            href="https://use.typekit.net/oeo1stw.css"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="modal" />
        </body>
      </Html>
    )
  }
}

export default MyDocument
