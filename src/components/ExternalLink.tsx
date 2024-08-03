type Props = {
  href: string;
  children: React.ReactNode;
};

export const ExternalLink: React.FC<Props> = ({ href, children }) => {
  return (
    <a
      target="_blank"
      rel="noreferrer noopener"
      href={href}
      className="rounded hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-light"
    >
      {children}
    </a>
  );
};
