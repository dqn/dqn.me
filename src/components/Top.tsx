import { ExternalLink } from "./ExternalLink";
import { Footer } from "./Footer";
import { ProfileHeader } from "./ProfileHeader";
import { PrettyHeading } from "./PrettyHeading";
import { UnorderedList } from "./UnorderedList";

export const Top: React.VFC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 overflow-x-hidden p-8 w-full max-w-md mx-auto">
        <ProfileHeader />

        <div className="mt-8">
          <PrettyHeading>Likes</PrettyHeading>

          <div className="mt-4">
            <UnorderedList
              items={[
                "Web",
                "TypeScript",
                "React / Next.js",
                "Tailwind CSS",
                "Prisma",
              ]}
            />
          </div>
        </div>

        <div className="mt-8">
          <PrettyHeading>Links</PrettyHeading>

          <div className="mt-4">
            <UnorderedList
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
