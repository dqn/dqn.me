import type { NextPage } from "next";
import { ExternalLink } from "../components/ExternalLink";
import avatar from "../../public/avatar.jpg";
import { Footer } from "../components/Footer";
import { WanderingGhost } from "../components/WanderingGhost";
import { HeartIcon } from "../components/HeartIcon";
import { LinkIcon } from "../components/LinkIcon";

const ProfileHeader: React.FC = () => {
  return (
    <header className="animate-fade-in-and-drop text-center xs:flex xs:justify-center xs:space-x-6">
      <img
        src={avatar.src}
        width={128}
        height={128}
        alt="Illustration of my avatar"
        decoding="async"
        className="mx-auto rounded-full xs:mx-0"
      />
      <div className="mt-4 xs:mt-0 xs:flex xs:flex-col xs:items-center xs:justify-center">
        <h1 className="w-full text-2xl font-bold xs:text-left">dqn</h1>
        <p className="mt-1 font-semibold">Software Engineer</p>
      </div>
    </header>
  );
};

type ListProps = {
  items: readonly React.ReactNode[];
};
const List: React.FC<ListProps> = ({ items }) => {
  return (
    <ul className="list-inside list-disc space-y-2 pl-2 text-sm">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
};

type SectionProps = {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
};
const Section: React.FC<SectionProps> = ({ icon, label, children }) => {
  return (
    <section>
      <h2 className="text-xl font-bold leading-none">
        <div className="flex items-center space-x-1 ">
          <div>{icon}</div>
          <div>{label}</div>
        </div>
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
};

const Main: React.FC = () => {
  const loves = [
    "Web",
    "TypeScript",
    "React / Next.js",
  ] as const satisfies readonly string[];
  const links = [
    <ExternalLink href="https://github.com/dqn" key="github">
      GitHub (@dqn)
    </ExternalLink>,
    <ExternalLink href="https://twitter.com/dqn270" key="twitter">
      Twitter (@dqn270)
    </ExternalLink>,
    <ExternalLink href="https://zenn.dev/dqn" key="zenn">
      Zenn (@dqn)
    </ExternalLink>,
  ] as const satisfies readonly React.ReactNode[];

  return (
    <main className="mx-auto flex w-full max-w-screen-xs flex-1 flex-col justify-center p-8">
      <ProfileHeader />
      <article className="mt-20 space-y-12 xs:flex xs:justify-between xs:space-y-0">
        <div className="animate-fade-in-and-drop-100 opacity-0">
          <Section icon={<HeartIcon />} label="Loves">
            <List items={loves} />
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
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <WanderingGhost />
      </div>
      <div className="absolute inset-0 flex flex-col">
        <Main />
        <Footer />
      </div>
    </div>
  );
};

export default TopPage;
