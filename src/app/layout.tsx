import Footer from "@/app/_components/footer";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Updates About ${CMS_NAME}`,
  description: `Everything the World needs to know about  ${CMS_NAME}.`,
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

     
     <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"/>
        <link rel="shortcut icon" href="/assets/favicon.ico" />
        <meta name="msapplication-config"  content="/favicon/browserconfig.xml" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>

      <body className={inter.className}>

        <div className="min-h-screen">{children}</div>

        <Footer />
        
      </body>
    </html>
  );
}
