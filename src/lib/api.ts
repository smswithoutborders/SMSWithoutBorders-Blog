import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");
const releasesDirectory = join(process.cwd(), "_releases");

export function getSlugs(directory: fs.PathLike) {
	return fs.readdirSync(directory);
}

export function getPostBySlug(slug: string) {
	const realSlug = slug.replace(/\.md$/, "");
	const fullPath = join(postsDirectory, `${realSlug}.md`);
	const fileContents = fs.readFileSync(fullPath, "utf8");
	const { data, content } = matter(fileContents);

	if (data.draft === true) {
		return null;
	}

	return { ...data, slug: realSlug, content } as Post;
}

export function getReleaseBySlug(slug: string) {
	const realSlug = slug.replace(/\.md$/, "");
	const fullPath = join(releasesDirectory, `${realSlug}.md`);
	const fileContents = fs.readFileSync(fullPath, "utf8");
	const { data, content } = matter(fileContents);

	if (data.draft === true) {
		return null;
	}

	return { ...data, slug: realSlug, content } as Post;
}

export function getAllPosts(): Post[] {
	const slugs = getSlugs(postsDirectory);
	const posts = slugs
		.map((slug) => getPostBySlug(slug))
		.filter((post): post is Post => post !== null)
		.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
	return posts;
}

export function getAllReleases(): Post[] {
	const slugs = getSlugs(releasesDirectory);
	const releases = slugs
		.map((slug) => getReleaseBySlug(slug))
		.filter((release): release is Post => release !== null)
		.sort((release1, release2) => (release1.date > release2.date ? -1 : 1));

	return releases;
}
