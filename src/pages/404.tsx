import Image from "next/image";
import Link from "next/link";
import { Footer } from "../components/Footer";

const NotFound: React.FC = () => {
  return (
    <div className="flex h-screen flex-col">
      <main className="flex flex-1 flex-col items-center justify-center">
        <Image
          src="/404.png"
          alt="404"
          width={256}
          height={256}
          decoding="async"
          className="mx-auto"
        />

        <h1 className="mt-8 text-3xl font-bold">404 Not Found…</h1>

        <div className="mt-2">
          <Link
            href="/"
            className="rounded hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-light"
          >
            Top page
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
