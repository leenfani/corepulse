import type { Metadata } from "next";
import { Barlow  } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "Core Pulse",
  description: "The digital heartbeat of patient recovery. Seamless care coordination for modern healthcare teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={barlow.className}>
      <body>{children}</body>
    </html>
  );
}
