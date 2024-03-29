import i404 from "../../public/404.png";
import { Footer } from "./Footer";
import { PrettyLink } from "./PrettyLink";

// Waiting custom 404 page
const NotFound: React.FC = () => {
  return (
    <div className="flex h-[100svh] flex-col">
      <main className="flex flex-1 flex-col items-center justify-center">
        <img
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
