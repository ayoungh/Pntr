import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pntr — Paint outside the grid",
  description:
    "An open-source Next.js canvas for expressive, beautifully built websites.",
  openGraph: {
    title: "Pntr — Paint outside the grid",
    description:
      "An open-source Next.js canvas for expressive, beautifully built websites.",
    type: "website",
  },
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
