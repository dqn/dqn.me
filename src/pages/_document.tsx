import assert from "assert";
import Document, { Html, Head, Main, NextScript } from "next/document";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

function getThemeColor() {
  const fullConfig = resolveConfig(tailwindConfig);

  const colors = fullConfig.theme?.colors;
  assert(typeof colors === "object");
  const brandColors = colors["brand"];
  assert(typeof brandColors === "object");
  const themeColor = brandColors["DEFAULT"];
  assert(typeof themeColor === "string");

  return themeColor;
}

class MyDocument extends Document {
  override render() {
    return (
      <Html>
        <Head>
          <meta name="theme-color" content={getThemeColor()} />
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
