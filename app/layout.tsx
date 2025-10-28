import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

// import "./globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sky - Developer",
  description: "Know more about my world of hopes and dreams",
  icons: "../test.svg",
  openGraph: {
    title: "Sky - Developer",
    description: "Know more about my world of hopes and dreams",
    images: "https://puffy.ink/test.svg",
  }, 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="thumbnail" content="test.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
