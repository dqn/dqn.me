import type { NextPage } from "next";
import { ExternalLink } from "../components/ExternalLink";
import { Footer } from "../components/Footer";
import { WanderingGhost } from "../components/WanderingGhost";
import { HeartIcon } from "../components/HeartIcon";
import { LinkIcon } from "../components/LinkIcon";
import { graphql } from "../gql";
import { createClient } from "@urql/core";
import { RSC } from "../components/RSC";
import { Section } from "./Section";
import { List } from "./List";
import { ProfileHeader } from "./ProfileHeader";
import { HeaderMenu } from "../components/HeaderMenu";

const client = createClient({
  url: "https://api.dqn.me/graphql",
});

const ProfileQueryDocument = graphql(`
  query Profile {
    profile {
      loves
      links {
        id
        name
        url
      }
    }
  }
`);

const Main: RSC = async () => {
  const { data } = await client.query(ProfileQueryDocument, {}).toPromise();

  if (data === undefined) {
    throw new Error("failed to fetch profile");
  }

  const links = data.profile.links
    .filter((link) => link.id !== "homepage")
    .map((link) => (
      <ExternalLink href={link.url} key={link.id}>
        {link.name}
      </ExternalLink>
    ));

  return (
    <main className="mx-auto flex w-full max-w-screen-xs flex-1 flex-col justify-center p-8">
      <ProfileHeader />
      <article className="mt-20 space-y-12 xs:flex xs:justify-between xs:space-y-0">
        <div className="animate-fade-in-and-drop-100 opacity-0">
          <Section icon={<HeartIcon />} label="Loves">
            <List items={data.profile.loves} />
          </Section>
        </div>
        <div className="animate-fade-in-and-drop-200 opacity-0">
          <Section icon={<LinkIcon />} label="Links">
            <List items={links} />
          </Section>
        </div>
      </article>
    </main>
  );
};

const TopPage: NextPage = () => {
  return (
    <div className="relative min-h-[100svh]">
      <div className="absolute inset-0">
        <WanderingGhost />
      </div>
      <div className="absolute inset-0 flex flex-col">
        <HeaderMenu />
        {/* @ts-expect-error Server Component */}
        <Main />
        <Footer />
      </div>
    </div>
  );
};

export default TopPage;
