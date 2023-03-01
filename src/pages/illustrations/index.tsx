import type { NextPage } from "next";
import { Illustrations } from "../../components/Illustrations";
import { Seo } from "../../components/Seo";

const IllustrationsPage: NextPage = () => {
  return (
    <>
      <Seo
        title="Illustrations | dqn.me"
        description="Illustrations of my avatar"
      />
      <Illustrations />
    </>
  );
};

export default IllustrationsPage;
