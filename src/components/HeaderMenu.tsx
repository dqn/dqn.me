import { PrettyLink } from "./PrettyLink";
import { ExternalLink } from "./ExternalLink";
import { GitHubIcon } from "./GitHubIcon";

export const HeaderMenu: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 animate-fade-in bg-black/30 p-4 opacity-0 backdrop-blur-md">
      <div className="mx-auto flex max-w-screen-xs items-center justify-between">
        <div className="text-xl font-bold">
          <PrettyLink href="/">dqn.me</PrettyLink>
        </div>
        <div>
          <ExternalLink href="https://github.com/dqn/dqn.me">
            <GitHubIcon />
          </ExternalLink>
        </div>
      </div>
    </header>
  );
};
