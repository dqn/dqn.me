import Link from "next/link";
import { Footer } from "../components/Footer";

const NotFound: React.VFC = () => {
  return (
    <div className="flex flex-col h-screen">
      <main className="flex-1 flex flex-col items-center justify-center">
        <img
          src="/404.png"
          alt="404"
          width={256}
          height={256}
          className="mx-auto"
        />

        <h1 className="text-3xl font-bold mt-8">404 Not Found…</h1>

        <div className="mt-2">
          <Link href="/">
            <a className="hover:underline">Top page</a>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
