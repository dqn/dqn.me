import Head from "next/head";

const title = "dqn.me";

type Props = {
  subtitle: string;
};

export const Seo: React.VFC<Props> = ({ subtitle }) => {
  return (
    <Head>
      <title>{subtitle !== undefined ? `${subtitle} | ${title}` : title}</title>
    </Head>
  );
};
