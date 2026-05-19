import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./style/ThemeProvider";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["500", "700"],
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
    <html lang="en" suppressHydrationWarning>
      <body className={barlow.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
