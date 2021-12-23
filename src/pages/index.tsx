import type { NextPage } from "next";
import { Seo } from "../components/Seo";
import { Top } from "../components/Top";

const TopPage: NextPage = () => {
  return (
    <>
      <Seo subtitle="Top" />
      <Top />
    </>
  );
};

export default TopPage;
