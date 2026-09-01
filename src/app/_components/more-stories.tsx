"use client";

import { useState } from "react";
import { Post } from "@/interfaces/post";
import { PostPreview, ReleasePreview } from "./post-preview";

type Props = {
	posts: Post[];
};

const POSTS_PER_PAGE = 4;

export function MoreStories({ posts }: Props) {
	const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);
	const visiblePosts = posts.slice(0, visibleCount);
	const hasMorePosts = visibleCount < posts.length;

	return (
		<section className="gap-y-5">
			<div className="md:w-3/5 mx-auto lg:gap-x-35 py-32">
				{visiblePosts.map((post) => (
					<PostPreview
						key={post.slug}
						title={post.title}
						date={post.date}
						author={post.author}
						slug={post.slug}
						excerpt={post.excerpt}
						content={post.content}
						coverImage={post.coverImage}
					/>
				))}
				{hasMorePosts ? (
					<div className="flex justify-center">
						<button
							type="button"
							onClick={() => setVisibleCount((currentCount) => currentCount + POSTS_PER_PAGE)}
							className="rounded-full border border-black bg-white px-6 py-2 text-sm font-semibold text-black transition-colors hover:bg-black hover:text-white"
						>
							Load more
						</button>
					</div>
				) : null}
			</div>
		</section>
	);
}

export function MoreReleases({ posts }: Props) {
	return (
		<section className="gap-y-5">
			<div className="md:w-3/5 mx-auto lg:gap-x-35 py-32">
				{posts.map((post) => (
					<ReleasePreview
						key={post.slug}
						title={post.title}
						date={post.date}
						author={post.author}
						slug={post.slug}
						excerpt={post.excerpt}
						content={post.content}
						coverImage={post.coverImage}
					/>
				))}
			</div>
		</section>
	);
}
