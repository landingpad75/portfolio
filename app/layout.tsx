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
    images: [
      {
        url: "../test.svg",
        width: 512,
        height: 512,
        alt: "picture",
      },
    ],
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
