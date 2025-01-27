import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import MouseTrail from "../components/mousetrail";

const fredoka = Fredoka({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jkeroro",
  description: "Welcome to my Cozy Place",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://kit.fontawesome.com/7db96a5cb9.js"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${fredoka.className} antialiased`}>
        <MouseTrail />
        {children}
      </body>
    </html>
  );
}
