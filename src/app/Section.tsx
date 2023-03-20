type Props = {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
};

export const Section: React.FC<Props> = ({ icon, label, children }) => {
  return (
    <section>
      <h2 className="text-xl font-bold leading-none">
        <div className="flex items-center space-x-1 ">
          <div>{icon}</div>
          <div>{label}</div>
        </div>
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
};
