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
    url: "https://puffy.ink",
    images: [
      {
        url: "https://puffy.ink/test.svg",
        width: 256,
        height: 256,
        alt: "Sky Icon",
      },
    ],
  },
  twitter: {
    card: "summary", // this is what u need
    title: "Sky - Developer",
    description: "Know more about my world of hopes and dreams",
    images: ["https://puffy.ink/test.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
