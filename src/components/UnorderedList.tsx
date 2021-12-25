type Props = {
  items: readonly React.ReactNode[];
};

export const UnorderedList: React.VFC<Props> = ({ items }) => {
  return (
    <ul className="text-sm list-disc list-inside space-y-1">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
};
