import { ExternalLink } from "./ExternalLink";
import { Footer } from "./Footer";

const ProfileHeader: React.FC = () => {
  return (
    <header className="text-center md:flex md:justify-center md:space-x-6">
      <img
        src="/avatar.jpg"
        alt="avatar"
        width={128}
        height={128}
        decoding="async"
        className="mx-auto rounded-full md:mx-0"
      />
      <div className="mt-4 md:mt-0 md:flex md:flex-col md:items-center md:justify-center">
        <h1 className="w-full text-2xl font-bold md:text-left">dqn</h1>
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
  const loves = ["Web", "TypeScript", "React / Next.js"];
  const links = [
    <ExternalLink text="GitHub (@dqn)" href="https://github.com/dqn" />,
    <ExternalLink text="Twitter (@dqn270)" href="https://twitter.com/dqn270" />,
    <ExternalLink text="Zenn (@dqn)" href="https://zenn.dev/dqn" />,
  ];

  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center p-8">
      <ProfileHeader />
      <article className="mt-20 space-y-12 md:flex md:justify-between md:space-y-0">
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
