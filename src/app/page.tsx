import ProfileQuery from "./Profile.graphql";
import { ExternalLink } from "../components/ExternalLink";
import { Footer } from "../components/Footer";
import { WanderingGhost } from "../components/WanderingGhost";
import { HeartIcon } from "../components/HeartIcon";
import { LinkIcon } from "../components/LinkIcon";
import { cacheExchange, createClient, fetchExchange } from "@urql/core";
import { RSC } from "../components/RSC";
import { Section } from "./Section";
import { List } from "./List";
import { ProfileHeader } from "./ProfileHeader";
import { HeaderMenu } from "../components/HeaderMenu";
import { PrettyLink } from "../components/PrettyLink";

const client = createClient({
  url: "https://api.dqn.me/graphql",
  exchanges: [cacheExchange, fetchExchange],
});

const Main: RSC = async () => {
  const { data, error } = await client.query(ProfileQuery, {}).toPromise();

  if (data === undefined) {
    console.error(error);
    throw new Error("failed to fetch profile");
  }

  const { profile } = data;

  const links: React.ReactNode[] = [
    ...profile.links
      .filter((link) => link.id !== "homepage")
      .map((link) => (
        <ExternalLink href={link.url} key={link.id}>
          {link.name}
        </ExternalLink>
      )),
    <PrettyLink href="/illustrations" key="illustrations">
      Illustrations
    </PrettyLink>,
  ];

  return (
    <main className="mx-auto flex w-full max-w-screen-lg flex-1 flex-col justify-center p-8">
      <ProfileHeader name={profile.name} bio={profile.bio} />
      <article className="mt-20 space-y-12 xs:flex xs:justify-evenly xs:space-y-0">
        <Section icon={<HeartIcon />} label="Loves">
          <List items={profile.loves} />
        </Section>
        <Section icon={<LinkIcon />} label="Links">
          <List items={links} />
        </Section>
      </article>
    </main>
  );
};

const TopPage: React.FC = () => {
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
