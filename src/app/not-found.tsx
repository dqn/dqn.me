import { Footer } from "../components/Footer";
import { PrettyLink } from "../components/PrettyLink";

const NotFound: React.FC = () => {
  return (
    <div className="flex h-svh flex-col">
      <main className="flex flex-1 flex-col items-center justify-center">
        <h1 className="mt-8 text-3xl font-bold">404 - Not Found</h1>
        <div className="mt-2">
          <PrettyLink href="/">Go to top page</PrettyLink>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
