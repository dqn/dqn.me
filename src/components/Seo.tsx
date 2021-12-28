import Head from "next/head";

type Og = {
  type: "website" | "article";
  url: string;
  image: string;
};

type Twitter = {
  card: "summary_large_image";
  screenName: string;
};

type Props = {
  title: string;
  description: string;
  og: Og;
  twitter: Twitter;
};

export const Seo: React.VFC<Props> = ({ title, description, og, twitter }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {og !== undefined && (
        <>
          <meta property="og:type" content={og.type} />
          <meta property="og:url" content={og.url} />
          <meta property="og:image" content={og.image} />
        </>
      )}
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      {twitter !== undefined && (
        <>
          <meta name="twitter:card" content={twitter.card} />
          <meta name="twitter:site" content={twitter.screenName} />
          <meta name="twitter:creator" content={twitter.screenName} />
        </>
      )}
    </Head>
  );
};
