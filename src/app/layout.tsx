import Footer from "@/app/_components/footer";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Next.js Blog Example with ${CMS_NAME}`,
  description: `A statically generated blog example using Next.js and ${CMS_NAME}.`,
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
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <link rel="shortcut icon" href="/assets/favicon.ico" />

      </head>
      <body className={inter.className}>

        <div className="min-h-screen">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
