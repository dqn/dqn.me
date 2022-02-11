import Document, { Html, Head, Main, NextScript } from "next/document";
import colors from "../../colors";

const themeColor = colors.brand.DEFAULT;

class MyDocument extends Document {
  override render() {
    return (
      <Html lang="ja">
        <Head>
          <meta name="theme-color" content={themeColor} />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            href="/apple-touch-icon.png"
            type="image/png"
            sizes="180x180"
          />
          <link
            rel="icon"
            href="/android-chrome.png"
            type="image/png"
            sizes="192x192"
          />
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
