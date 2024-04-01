import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";

type Props = {
	posts: Post[];
};

export function MoreStories({ posts }: Props) {
	return (
		<section className="my-5 gap-y-5 pt-20">
			<div className="my-5 md:w-2/4 mx-auto  lg:gap-x-35  mb-52">
				{posts.map((post) => (
					<PostPreview
						className="my-5 gap-y-5 p-5 mb-32"
						key={post.slug}
						title={post.title}
						date={post.date}
						author={post.author}
						slug={post.slug}
						excerpt={post.excerpt}
					/>
				))}
			</div>
		</section>
	);
}
