import Container from "@/app/_components/container";
// import { HeroPost } from "@/app/_components/hero-post";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}
