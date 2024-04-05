import Container from "@/app/_components/container";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";

export default function Index() {
	const allPosts = getAllPosts();

	return (
		<main>
			<Container>{<MoreStories posts={allPosts} />}</Container>
		</main>
	);
}
