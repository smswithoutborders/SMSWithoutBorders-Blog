import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";

type Props = {
	posts: Post[];
};

export function MoreStories({ posts }: Props) {
	return (
		<section className="gap-y-5">
			<div className="md:w-3/5 mx-auto lg:gap-x-35 py-32">
				{posts.map((post) => (
					<PostPreview
						key={post.slug}
						title={post.title}
						date={post.date}
						author={post.author}
						slug={post.slug}
						excerpt={post.excerpt}
						content={post.content}
					/>
				))}
			</div>
		</section>
	);
}
