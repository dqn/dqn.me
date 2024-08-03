import type { Metadata, Viewport } from "next";
import tailwindConfig from "@/../tailwind.config";
import "./globals.css";

const title = "dqn.me";
const description = "dqn's website";

export const metadata: Metadata = {
  title,
  description,
};

export const viewport: Viewport = {
  themeColor: tailwindConfig.theme.colors.brand.DEFAULT,
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
