import type { Metadata } from "next";
import { Barlow, Kalam } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./style/ThemeProvider";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["500", "700"],
});

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--kalam",
});

export const metadata: Metadata = {
  title: "Core Pulse",
  description: "The digital heartbeat of patient recovery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={kalam.variable} suppressHydrationWarning>
      <body className={barlow.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}