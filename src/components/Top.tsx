import Image from "next/image";
import { ExternalLink } from "./ExternalLink";
import { Footer } from "./Footer";
import avatar from "../../public/avatar.jpg";

const ProfileHeader: React.FC = () => {
  return (
    <header className="text-center xs:flex xs:justify-center xs:space-x-6">
      <Image
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
  label: string;
  children: React.ReactNode;
};
const Section: React.FC<SectionProps> = ({ label, children }) => {
  return (
    <section>
      <h2 className="text-xl font-bold leading-none">
        <span aria-hidden>👻 </span>
        {label}
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
    <ExternalLink
      text="GitHub (@dqn)"
      href="https://github.com/dqn"
      key="github"
    />,
    <ExternalLink
      text="Twitter (@dqn270)"
      href="https://twitter.com/dqn270"
      key="twitter"
    />,
    <ExternalLink text="Zenn (@dqn)" href="https://zenn.dev/dqn" key="zenn" />,
  ] as const satisfies readonly React.ReactNode[];

  return (
    <main className="mx-auto flex w-full max-w-screen-xs flex-1 flex-col justify-center p-8">
      <ProfileHeader />
      <article className="mt-20 space-y-12 xs:flex xs:justify-between xs:space-y-0">
        <Section label="Loves">
          <List items={loves} />
        </Section>
        <Section label="Links">
          <List items={links} />
        </Section>
      </article>
    </main>
  );
};

export const Top: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Main />
      <Footer />
    </div>
  );
};
