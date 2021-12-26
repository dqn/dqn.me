import Document, { Html, Head, Main, NextScript } from "next/document";
import tailwindCssConfig from "../../tailwind.config.js";

const brandColor = tailwindCssConfig.theme.colors.brand;

class MyDocument extends Document {
  override render() {
    return (
      <Html lang="ja">
        <Head>
          <meta name="theme-color" content={brandColor} />
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
