type Props = {
  href: string;
};

export const ExternalLink: React.FC<Props> = ({ href, children }) => {
  return (
    <a
      target="_blank"
      rel="noreferrer noopener"
      href={href}
      className="hover:underline"
    >
      {children}
    </a>
  );
};
