import Footer from "@/app/_components/footer";
import { HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter, Unbounded } from "next/font/google";
import Navbar from "@/app/_components/navbar";
import Providers from "./_components/ProgressBarProvider";
import SubscribeFloatingButton from "./_components/subscribe-floating-button";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const unbounded = Unbounded({
	subsets: ["latin"],
	variable: "--font-unbounded"
});

const baseURL = process.env.BASE_URL || "http://localhost:3000";

export const metadata: Metadata = {
	metadataBase: new URL(baseURL),
	title: "SMSWithoutBorders >> Blog",
	description:
		"SMS Without Borders (SWoB) is a platform that enables users without access to an active internet connection to continue communicating with online services using SMS messages",
	openGraph: {
		url: baseURL,
		siteName: "SMSWithoutBorders >> Blog",
		title: "SMSWithoutBorders >> Blog",
		description:
			"SMS Without Borders (SWoB) is a platform that enables users without access to an active internet connection to continue communicating with online services using SMS messages",
		type: "website",
		images: [HOME_OG_IMAGE_URL]
	}
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="shortcut icon" href="/favicon/favicon.ico" />
				<meta name="msapplication-TileColor" content="#000000" />
				<meta name="msapplication-config" content="/favicon/browserconfig.xml" />
				<meta name="theme-color" content="#000" />
				<link rel="alternate" type="application/rss+xml" href="/feed.xml" />
			</head>
			<body className={`${inter.className} ${unbounded.variable}`}>
				<Providers>
					<Navbar />
					<div className="min-h-screen bg-neutral-100">{children}</div>
					<SubscribeFloatingButton />
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
