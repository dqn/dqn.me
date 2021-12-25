export const ProfileHeader: React.VFC = () => {
  return (
    <header className="text-center pt-12 pb-8">
      <img
        src="/avatar.jpg"
        alt="avatar"
        width={128}
        height={128}
        className="rounded-full mx-auto w-32 h-32"
      />
      <h1 className="text-2xl font-bold mt-4">dqn</h1>
      <p className="font-semibold mt-1">Web engineer</p>
    </header>
  );
};
