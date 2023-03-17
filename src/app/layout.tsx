import type { Metadata } from "next";
import { withBaseUrl } from "../helpers/withBaseUrl";
import "../styles/globals.css";
import tailwindConfig from "../../tailwind.config";

const title = "dqn.me";
const description = "👻 A Software Engineer";

export const metadata: Metadata = {
  title: {
    default: title,
    template: "%s | dqn.me",
  },
  description,
  themeColor: tailwindConfig.theme.colors.brand.DEFAULT,
  openGraph: {
    title,
    description,
    type: "website",
    url: withBaseUrl("/"),
    images: [withBaseUrl("ogp.jpg")],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    follow: true,
    index: true,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    siteId: "1245969416694587393",
    creator: "@dqn270",
    creatorId: "1245969416694587393",
    images: [withBaseUrl("ogp.jpg")],
  },
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
