import { HeaderMenu } from "@/components/HeaderMenu";
import { List } from "./List";
import { ProfileHeader } from "./ProfileHeader";
import { WanderingGhost } from "@/components/WanderingGhost";
import { Section } from "./Section";
import { HeartIcon } from "@/components/HeartIcon";
import { LinkIcon } from "@/components/LinkIcon";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-[100svh]">
      <div className="absolute inset-0">
        <WanderingGhost />
      </div>
      <div className="absolute inset-0 flex flex-col">
        <HeaderMenu />
        <main className="mx-auto flex w-full max-w-screen-lg flex-1 flex-col justify-center p-8">
          <ProfileHeader />
          <article className="mt-20 space-y-12 xs:flex xs:justify-evenly xs:space-y-0">
            <Section icon={<HeartIcon />} label="Loves">
              <List items={[]} />
            </Section>
            <Section icon={<LinkIcon />} label="Links">
              <List items={[]} />
            </Section>
          </article>
        </main>
        <Footer />
      </div>
    </div>
  );
}
