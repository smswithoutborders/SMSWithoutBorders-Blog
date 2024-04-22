import Container from "@/app/_components/container";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllReleases } from "@/lib/api";

export default function Index() {
	const allPosts = getAllReleases();

	return (
		<main>
			<Container>{<MoreStories posts={allPosts} />}</Container>
		</main>
	);
}
