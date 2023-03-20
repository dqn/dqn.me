import avatar from "../../public/avatar.jpg";

export const ProfileHeader: React.FC = () => {
  return (
    <header className="animate-fade-in-and-drop text-center xs:flex xs:justify-center xs:space-x-6">
      <img
        src={avatar.src}
        width={128}
        height={128}
        alt="Illustration of my avatar"
        decoding="async"
        className="mx-auto rounded-full hover:animate-shake xs:mx-0"
      />
      <div className="mt-4 xs:mt-0 xs:flex xs:flex-col xs:items-center xs:justify-center">
        <h1 className="w-full text-2xl font-bold xs:text-left">dqn</h1>
        <div className="mx-auto w-[17ch]">
          <p className="mt-1 w-0 animate-typing overflow-hidden whitespace-nowrap font-semibold">
            Software Engineer
          </p>
        </div>
      </div>
    </header>
  );
};
