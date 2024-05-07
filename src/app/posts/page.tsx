import Container from "@/app/_components/container";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";

export default function Index() {
	const allPosts = getAllPosts();

	return (
		<main>
			<Container>
				{allPosts.length === 0 ? (
					<div className="py-60 px-8 mt-10">
						<div className="mx-auto max-w-lg py-10 px-8 bg-white shadow-md rounded-lg">
							<p className="text-xl text-center font-bold text-gray-700">No posts available yet.</p>
						</div>
					</div>
				) : (
					<MoreStories posts={allPosts} />
				)}
			</Container>
		</main>
	);
}
