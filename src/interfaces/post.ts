import { type AuthorLike } from "./author";

export type Post = {
	slug: string;
	title: string;
	date: string;
	coverImage?: string;
	author: AuthorLike;
	excerpt: string;
	ogImage: {
		url: string;
	};
	content: string;
	preview?: boolean;
};

export type Releases = {
	slug: string;
	title: string;
	date: string;
	coverImage?: string;
	author: AuthorLike;
	excerpt: string;
	ogImage: {
		url: string;
	};
	content: string;
	preview?: boolean;
};
