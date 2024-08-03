import { ReactNode } from "react";

export type Props = {
  icon: ReactNode;
  title: string;
  items: ReactNode[];
};

export const List: React.FC<Props> = ({ icon, title, items }) => {
  return (
    <section>
      <h2 className="text-xl font-bold leading-none">
        <div className="flex items-center space-x-1">
          <div>{icon}</div>
          <div>{title}</div>
        </div>
      </h2>
      <div className="mt-4">
        <ul className="list-inside list-disc space-y-2 pl-2 text-sm">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
