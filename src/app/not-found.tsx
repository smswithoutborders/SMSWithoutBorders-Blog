import Link from "next/link";

export default function NotFound() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
			<h1 className="mb-4 text-4xl font-semibold">Page not found</h1>
			<p className="mb-6 text-lg text-gray-600">The page you requested could not be found.</p>
			<Link href="/" className="text-blue-600 underline hover:no-underline">
				Return home
			</Link>
		</main>
	);
}
