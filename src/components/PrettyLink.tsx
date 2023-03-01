import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
};

export const PrettyLink: React.FC<Props> = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="rounded hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-light"
    >
      {children}
    </Link>
  );
};
