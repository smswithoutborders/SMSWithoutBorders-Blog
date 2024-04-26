import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");
const releasesDirectory = join(process.cwd(), "_releases");

export function getPostSlugs() {
	return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
	const realSlug = slug.replace(/\.md$/, "");
	const fullPath = join(postsDirectory, `${realSlug}.md`);
	const fileContents = fs.readFileSync(fullPath, "utf8");
	const { data, content } = matter(fileContents);

	return { ...data, slug: realSlug, content } as Post;
}

export function getReleaseBySlug(slug: string) {
	const realSlug = slug.replace(/\.md$/, "");
	const fullPath = join(releasesDirectory, `${realSlug}.md`);
	const fileContents = fs.readFileSync(fullPath, "utf8");
	const { data, content } = matter(fileContents);

	return { ...data, slug: realSlug, content } as Post;
}

export function getReleaseSlugs() {
	if (!fs.existsSync(releasesDirectory)) {
		console.error(`Directory ${releasesDirectory} does not exist.`);
		return [];
	}
	return fs.readdirSync(releasesDirectory);
}

export function getAllPosts(): Post[] {
	const slugs = getPostSlugs();
	const posts = slugs
		.map((slug) => getPostBySlug(slug))
		// sort posts by date in descending order
		.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
	return posts;
}

export function getAllReleases(): Post[] {
	const slugs = getReleaseSlugs();
	const releases = slugs
		.map((slug) => getReleaseBySlug(slug))
		.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

	return releases;
}
