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

export const Seo: React.FC<Props> = ({ title, description, og, twitter }) => {
  return (
    <Head>
      <title key="title">{title}</title>
      <meta name="description" content={description} key="description" />
      {og !== undefined && (
        <>
          <meta property="og:type" content={og.type} key="og:type" />
          <meta property="og:url" content={og.url} key="og:url" />
          <meta property="og:image" content={og.image} key="og:image" />
        </>
      )}
      <meta property="og:title" content={title} key="og:title" />
      <meta property="og:site_name" content={title} key="og:site_name" />
      <meta
        property="og:description"
        content={description}
        key="og:description"
      />
      {twitter !== undefined && (
        <>
          <meta name="twitter:card" content={twitter.card} key="twitter:card" />
          <meta
            name="twitter:site"
            content={twitter.screenName}
            key="twitter:site"
          />
          <meta
            name="twitter:creator"
            content={twitter.screenName}
            key="twitter:creator"
          />
        </>
      )}
    </Head>
  );
};
