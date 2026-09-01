import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/_components/container";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
import Avatar from "@/app/_components/avatar";

export default async function Post({ params }: Params) {
	const { slug } = await params;
	const post = getPostBySlug(slug);

	if (!post) {
		return notFound();
	}

	const content = await markdownToHtml(post.content || "");

	return (
		<main className="bg-white">
			<Container>
				<div className="md:w-3/5 mx-auto py-20 px-2 md:px-20 md:py-32">
					<article>
						<PostHeader
							title={post.title}
							coverImage={post.coverImage}
							date={post.date}
							content={post.content}
						/>
						<PostBody content={content} />
					</article>
					<div className="mt-10">
						<Avatar author={post.author} />
					</div>
				</div>
			</Container>
		</main>
	);
}

type Params = {
	params: Promise<{
		slug: string;
	}>;
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
	const { slug } = await params;
	const post = getPostBySlug(slug);

	if (!post) {
		return notFound();
	}

	const title = `SMSWithoutBorders >> Blog >> ${post.title}`;

	return {
		title,
		description: post.excerpt,
		openGraph: {
			title,
			description: post.excerpt,
			type: "article",
			publishedTime: post.date,
			authors: Array.isArray(post.author)
				? post.author.map((author) => author.name)
				: [post.author.name],
			images: [post.ogImage.url]
		}
	};
}

export async function generateStaticParams() {
	const posts = getAllPosts();

	return posts.map((post) => ({
		slug: post.slug
	}));
}
