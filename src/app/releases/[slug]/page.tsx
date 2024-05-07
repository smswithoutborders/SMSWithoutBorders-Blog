import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllReleases, getReleaseBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/_components/container";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
import Avatar from "@/app/_components/avatar";

export default async function Post({ params }: Params) {
	const releases = getReleaseBySlug(params.slug);

	if (!releases) {
		return notFound();
	}

	const content = await markdownToHtml(releases.content || "");

	return (
		<main className="bg-white">
			<Container>
				<div className="md:w-3/5 mx-auto py-20 px-2 md:px-20 md:py-32">
					<article>
						<PostHeader
							title={releases.title}
							coverImage={releases.coverImage}
							date={releases.date}
							content={releases.content}
						/>
						<PostBody content={content} />
					</article>
					<div className="mt-10">
						<Avatar name={releases.author.name} picture={releases.author.picture} />
					</div>
				</div>
			</Container>
		</main>
	);
}

type Params = {
	params: {
		slug: string;
	};
};

export function generateMetadata({ params }: Params): Metadata {
	const releases = getReleaseBySlug(params.slug);

	if (!releases) {
		return notFound();
	}

	const title = `SMSWithoutBorders >> Blog >> ${releases.title}`;

	return {
		title,
		description: releases.excerpt,
		openGraph: {
			title,
			description: releases.excerpt,
			type: "article",
			publishedTime: releases.date,
			authors: [releases.author.name],
			images: [releases.ogImage.url]
		}
	};
}

export async function generateStaticParams() {
	const releases = getAllReleases();

	return releases.map((releases) => ({
		slug: releases.slug
	}));
}
