import Document, { Html, Head, Main, NextScript } from "next/document";
import tailwindCssConfig from "../../tailwind.config.js";

const title = "dqn.me";
const twitterScreenName = "@dqn270";

const brandColor = tailwindCssConfig.theme.colors.brand.DEFAULT;

class MyDocument extends Document {
  override render() {
    return (
      <Html lang="ja">
        <Head>
          <meta name="theme-color" content={brandColor} />
          <title>{title}</title>
          <link rel="icon" href="favicon.ico" />
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
          <meta property="og:title" content={title} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.dqn.me" />
          <meta property="og:image" content="https://www.dqn.me/ogp.jpg" />
          <meta property="og:site_name" content={title} />
          <meta property="og:description" content="👻" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content={twitterScreenName} />
          <meta name="twitter:player" content={twitterScreenName} />
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
