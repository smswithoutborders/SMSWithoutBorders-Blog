import Footer from "@/app/_components/footer";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Smswithoutborders`,
  description: `SMS Without Borders Official Blog Feed.`,
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
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
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        {/* <meta name="msapplication-TileColor" content="#000000" /> */}
        <meta  name="msapplication-config" content="/favicon/browserconfig.xml"  />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />

      </head>
      <body className={inter.className}>
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
