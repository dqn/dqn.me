import { ExternalLink } from "./ExternalLink";
import { Footer } from "./Footer";

const ProfileHeader: React.VFC = () => {
  return (
    <header className="text-center pt-12 pb-8">
      <img
        src="/avatar.jpg"
        alt="avatar"
        width={128}
        height={128}
        className="rounded-full mx-auto"
      />
      <h1 className="text-2xl font-bold mt-4">dqn</h1>
      <p className="font-semibold mt-1">Software Engineer</p>
    </header>
  );
};

const Heading: React.FC = ({ children }) => {
  return <h2 className="font-bold text-xl leading-none">👻 {children}</h2>;
};

const List: React.VFC<{ items: readonly React.ReactNode[] }> = ({ items }) => {
  return (
    <ul className="text-sm list-disc list-inside space-y-2 pl-2">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
};

export const Top: React.VFC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 overflow-x-hidden p-8 w-full max-w-md mx-auto">
        <ProfileHeader />

        <div className="mt-12">
          <Heading>Likes</Heading>

          <div className="mt-4">
            <List items={["Web", "TypeScript", "React / Next.js"]} />
          </div>
        </div>

        <div className="mt-12">
          <Heading>Links</Heading>

          <div className="mt-4">
            <List
              items={[
                <ExternalLink href="https://github.com/dqn">
                  GitHub (@dqn)
                </ExternalLink>,
                <ExternalLink href="https://twitter.com/dqn270">
                  Twitter (@dqn270)
                </ExternalLink>,
              ]}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
