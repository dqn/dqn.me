import type { Metadata } from "next";
import tailwindConfig from "@/../tailwind.config";
import "./globals.css";
import { withBaseUrl } from "@/helpers/withBaseUrl";

const title = "dqn.me";
const description = "👻 A Software Engineer";

export const metadata: Metadata = {
  title,
  description,
  themeColor: tailwindConfig.theme.colors.brand.DEFAULT,
  // openGraph: {
  //   title,
  //   description,
  //   type: "website",
  //   url: withBaseUrl("/"),
  //   images: [withBaseUrl("ogp.jpg")],
  // },
  // robots: {
  //   follow: true,
  //   index: true,
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title,
  //   description,
  //   siteId: "1245969416694587393",
  //   creator: "@dqn270",
  //   creatorId: "1245969416694587393",
  //   images: [withBaseUrl("ogp.jpg")],
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
