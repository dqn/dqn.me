import { StaticImageData } from "next/image";
import { HeaderMenu } from "../../components/HeaderMenu";
import i2021_11_28_sgkertomu from "./2021-11-28-sgkertomu.jpg";
import i2022_07_02_pkochazukegamma from "./2022-07-02-pkochazukegamma.jpg";
import i2023_02_24_shirofox from "./2023-02-24-shirofox.jpg";
import i2023_02_27_dksg4 from "./2023-02-27-dksg4.jpg";
import i2023_03_02_B6_kino from "./2023-03-02-B6_kino.jpg";
import i2023_03_22_kasa_7 from "./2023-03-22-kasa_7.jpg";
import i2023_03_24_saltchiyiro105 from "./2023-03-24-saltchiyiro105.jpg";
import i2023_04_07_pkochazukegamma from "./2023-04-07-pkochazukegamma.jpg";
import i2023_04_13_inomarudayo from "./2023-04-13-inomarudayo.jpg";
import { Footer } from "../../components/Footer";
import { PrettyLink } from "../../components/PrettyLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Illustrations",
};

type Illustration = {
  url: string;
  image: StaticImageData;
  illustrator: string;
  date: `${number}-${number}-${number}`;
};

const illustrations: Illustration[] = [
  {
    url: "https://twitter.com/sgkertomu/status/1464663035537080328",
    image: i2021_11_28_sgkertomu,
    illustrator: "sgkertomu",
    date: "2021-11-28",
  },
  {
    url: "https://twitter.com/pkochazukegamma/status/1543216284544155649",
    image: i2022_07_02_pkochazukegamma,
    illustrator: "pkochazukegamma",
    date: "2022-07-02",
  },
  {
    url: "https://skeb.jp/@shirofox/works/86",
    image: i2023_02_24_shirofox,
    illustrator: "shirofox",
    date: "2023-02-24",
  },
  {
    url: "https://twitter.com/dksg4/status/1630078708127240192",
    image: i2023_02_27_dksg4,
    illustrator: "dksg4",
    date: "2023-02-27",
  },
  {
    url: "https://twitter.com/B6_kino/status/1631083732785573888?",
    image: i2023_03_02_B6_kino,
    illustrator: "B6_kino",
    date: "2023-03-02",
  },
  {
    url: "https://twitter.com/kasa_7/status/1638401227229892608",
    image: i2023_03_22_kasa_7,
    illustrator: "kasa_7",
    date: "2023-03-22",
  },
  {
    url: "https://twitter.com/saltchiyiro105/status/1639130149710082049",
    image: i2023_03_24_saltchiyiro105,
    illustrator: "saltchiyiro105",
    date: "2023-03-24",
  },
  {
    url: "https://twitter.com/pkochazukegamma/status/1644334051480965120",
    image: i2023_04_07_pkochazukegamma,
    illustrator: "pkochazukegamma",
    date: "2023-04-07",
  },
  {
    url: "https://skeb.jp/@inomarudayo/works/10",
    image: i2023_04_13_inomarudayo,
    illustrator: "inomarudayo",
    date: "2023-04-13",
  },
];

const IllustrationsPage: React.FC = () => {
  return (
    <>
      <HeaderMenu />
      <main className="mx-auto max-w-screen-xs p-8">
        <h1 className="text-lg font-bold">Illustrations</h1>
        <div className="mt-8">
          <ul className="space-y-8">
            {illustrations.map(({ url, image, illustrator, date }) => (
              <li key={url}>
                <a
                  href={url}
                  className="relative block rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-light"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={image.src}
                    width={image.width}
                    height={image.height}
                    alt={`Illustration by @${illustrator}`}
                    className="rounded-lg"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex justify-between rounded-b-lg bg-black/80 p-4">
                    <time dateTime={date}>{date}</time>
                    <span>@{illustrator}</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-8 text-center">
          <PrettyLink href="/">Back to top</PrettyLink>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default IllustrationsPage;
