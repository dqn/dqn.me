import Image from "next/image";
import { Footer } from "../components/Footer";
import i404 from "../../public/404.png";
import { PrettyLink } from "../components/PrettyLink";

const NotFound: React.FC = () => {
  return (
    <div className="flex h-screen flex-col">
      <main className="flex flex-1 flex-col items-center justify-center">
        <Image
          src={i404.src}
          width={i404.width}
          height={i404.height}
          alt="Illustration of my avatar being cry"
          decoding="async"
          className="mx-auto"
        />

        <h1 className="mt-8 text-3xl font-bold">404 Not Found…</h1>

        <div className="mt-2">
          <PrettyLink href="/">Go to top page</PrettyLink>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
