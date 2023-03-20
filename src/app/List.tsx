type Props = {
  items: readonly React.ReactNode[];
};

export const List: React.FC<Props> = ({ items }) => {
  return (
    <ul className="list-inside list-disc space-y-2 pl-2 text-sm">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
};
