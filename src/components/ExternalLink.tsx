type Props = {
  text: string;
  href: string;
};

export const ExternalLink: React.FC<Props> = ({ href, text }) => {
  return (
    <a
      target="_blank"
      rel="noreferrer noopener"
      href={href}
      className="rounded hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-light"
    >
      {text}
    </a>
  );
};
