import { List, type Props as ListProps } from "./List";
import { ProfileHeader } from "./ProfileHeader";
import { WanderingGhost } from "@/app/WanderingGhost";
import { HeartIcon } from "@/components/HeartIcon";
import { LinkIcon } from "@/components/LinkIcon";
import { Footer } from "@/components/Footer";
import { ExternalLink } from "@/components/ExternalLink";

const Home: React.FC = () => {
  const lists: ListProps[] = [
    {
      icon: <HeartIcon />,
      title: "Loves",
      items: ["Web", "TypeScript", "React / Next.js"],
    },
    {
      icon: <LinkIcon />,
      title: "Links",
      items: [
        <ExternalLink key="github" href="https://github.com/dqn">
          GitHub
        </ExternalLink>,
        <ExternalLink key="x" href="https://x.com/dqn270">
          X
        </ExternalLink>,
        <ExternalLink key="x" href="https://zenn.dev/dqn">
          Zenn
        </ExternalLink>,
      ],
    },
  ];

  return (
    <div className="relative min-h-svh">
      <div className="absolute inset-0">
        <WanderingGhost />
      </div>
      <div className="absolute inset-0 flex flex-col">
        <main className="mx-auto flex w-full max-w-screen-lg flex-1 flex-col justify-center p-8">
          <ProfileHeader />
          <article className="mt-20 space-y-12 xs:flex xs:justify-evenly xs:space-y-0">
            {lists.map((list, i) => (
              <List key={i} {...list} />
            ))}
          </article>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
