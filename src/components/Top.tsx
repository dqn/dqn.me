import { ExternalLink } from "./ExternalLink";
import { Footer } from "./Footer";

const ProfileHeader: React.VFC = () => {
  return (
    <header className="text-center">
      <img
        src="/avatar.jpg"
        alt="avatar"
        width={128}
        height={128}
        className="mx-auto rounded-full"
      />
      <h1 className="mt-4 text-2xl font-bold">dqn</h1>
      <p className="mt-1 font-semibold">Software Engineer</p>
    </header>
  );
};

type ListProps = {
  items: readonly React.ReactNode[];
};
const List: React.VFC<ListProps> = ({ items }) => {
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

const Main: React.VFC = () => {
  const loves = ["Web", "TypeScript", "React / Next.js"];
  const links = [
    <ExternalLink text="GitHub (@dqn)" href="https://github.com/dqn" />,
    <ExternalLink text="Twitter (@dqn270)" href="https://twitter.com/dqn270" />,
    <ExternalLink text="Zenn (@dqn)" href="https://zenn.dev/dqn" />,
  ];

  return (
    <main className="mx-auto w-full max-w-md flex-1 px-8 pt-12">
      <ProfileHeader />
      <article className="mt-12 space-y-12">
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

export const Top: React.VFC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Main />
      <Footer />
    </div>
  );
};
