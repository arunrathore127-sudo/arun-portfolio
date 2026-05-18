import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arun Pratap — Builder & Designer",
  description:
    "Product designer and engineer. Six years shipping things people actually use.",
  openGraph: {
    title: "Arun Pratap — Builder & Designer",
    description:
      "Product designer and engineer. Six years shipping things people actually use.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
