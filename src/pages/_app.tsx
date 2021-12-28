import type { AppProps } from "next/app";
import { Seo } from "../components/Seo";
import { baseUrl, withBaseUrl } from "../helpers/withBaseUrl";
import "../styles/globals.css";

const MyApp: React.VFC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Seo
        title="dqn.me"
        description="👻 A Software Engineer"
        og={{
          type: "website",
          url: baseUrl,
          image: withBaseUrl("ogp.png"),
        }}
        twitter={{
          card: "summary_large_image",
          screenName: "@dqn270",
        }}
      />

      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
