import Image, { StaticImageData } from "next/image";
import { Footer } from "./Footer";
import { ExternalLink } from "./ExternalLink";
import { PrettyLink } from "./PrettyLink";
import image00 from "../../public/illustrations/2021112800.png";
import image01 from "../../public/illustrations/2021112801.png";
import image02 from "../../public/illustrations/2022070200.png";
import image03 from "../../public/illustrations/2023022400.png";
import image04 from "../../public/illustrations/2023022700.png";
import image05 from "../../public/illustrations/2023030200.png";

const Main: React.FC = () => {
  type Illustration = {
    image: StaticImageData;
    illustrator: string;
  };

  const illustrations = [
    {
      image: image00,
      illustrator: "sgkertomu",
    },
    {
      image: image01,
      illustrator: "sgkertomu",
    },
    {
      image: image02,
      illustrator: "pkochazukegamma",
    },
    {
      image: image03,
      illustrator: "shirofox",
    },
    {
      image: image04,
      illustrator: "dksg4",
    },
    {
      image: image05,
      illustrator: "B6_kino",
    },
  ] as const satisfies readonly Illustration[];

  return (
    <main className="mx-auto flex w-full max-w-screen-xs flex-1 flex-col justify-center">
      <h1 className="mt-4 px-2 text-4xl font-bold xs:px-0">Illustrations</h1>
      <ul className="mt-8 space-y-8">
        {illustrations.map(({ image, illustrator }) => (
          <li key={image.src}>
            <Image
              src={image.src}
              width={image.width}
              height={image.height}
              alt="Illustration of my avatar"
              decoding="async"
              loading="lazy"
            />
            <div className="px-1 text-right">
              <small>
                By{" "}
                <ExternalLink href={`https://twitter.com/${illustrator}`}>
                  @{illustrator}
                </ExternalLink>
              </small>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-8 text-center">
        <PrettyLink href="/">Go to top page</PrettyLink>
      </div>
    </main>
  );
};

export const Illustrations: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Main />
      <Footer />
    </div>
  );
};
