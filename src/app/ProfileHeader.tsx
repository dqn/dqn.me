import avatar from "../../public/avatar.jpg";

export const ProfileHeader: React.FC = () => {
  return (
    <header className="text-center xs:flex xs:justify-center xs:space-x-6">
      <img
        src={avatar.src}
        width={avatar.width}
        height={avatar.height}
        alt="avatar"
        decoding="async"
        className="mx-auto w-48 rounded-full hover:animate-shake xs:mx-0"
      />
      <div className="mt-4 xs:mt-0 xs:flex xs:flex-col xs:items-center xs:justify-center">
        <h1 className="w-full text-2xl font-bold xs:text-left">dqn</h1>
        <div className="mx-auto mt-2 w-[17ch] font-semibold">
          Software Engineer
        </div>
      </div>
    </header>
  );
};
