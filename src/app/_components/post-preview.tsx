import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import ReadTime from "./read-time";

type Props = {
	title: string;
	date: string;
	excerpt: string;
	author: Author;
	slug: string;
	content: string;
};

export function PostPreview({ title, date, excerpt, author, slug, content }: Props) {
	return (
		<div className="border border-neutral-300 rounded-lg bg-white py-20 px-5 md:px-24 gap-y-5 mb-20">
			<h1 className="text-2xl md:text-3xl mb-3 mx-4 text-center">
				<Link as={`/posts/${slug}`} href="/posts/[slug]" className="hover:underline font-semibold">
					{title}
				</Link>
			</h1>
			<div className="text-base text-gray-700 text-center mb-4">
				<DateFormatter dateString={date} />
			</div>
			<Avatar name={author.name} picture={author.picture} />

			<p className="text-base leading-relaxed my-4 font-light">{excerpt}</p>
			<div className="flex justify-between">
				<p className="leading-snug">
					<Link
						as={`/posts/${slug}`}
						href="/posts/[slug]"
						className="decoration-blue-300 text-blue-500 font-light hover:underline"
					>
						Read more...
					</Link>
				</p>
				<ReadTime text={content} />
			</div>
		</div>
	);
}

export function ReleasePreview({ title, date, excerpt, author, slug, content }: Props) {
	return (
		<div className="border border-neutral-300 rounded-lg bg-white py-20 px-5 md:px-24 gap-y-5 mb-20">
			<h1 className="text-2xl md:text-3xl mb-3 mx-4 text-center">
				<Link
					as={`/releases/${slug}`}
					href="/releases/[slug]"
					className="hover:underline font-semibold"
				>
					{title}
				</Link>
			</h1>
			<div className="text-base text-gray-700 text-center mb-4">
				<DateFormatter dateString={date} />
			</div>
			<Avatar name={author.name} picture={author.picture} />

			<p className="text-base leading-relaxed my-4 font-light">{excerpt}</p>
			<div className="flex justify-between">
				<p className="leading-snug">
					<Link
						as={`/releases/${slug}`}
						href="/releases/[slug]"
						className="decoration-blue-300 text-blue-500 font-light hover:underline"
					>
						Read more...
					</Link>
				</p>
				<ReadTime text={content} />
			</div>
		</div>
	);
}
