import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (

    <div className="max-w-l rounded shadow-lg">
      <div className="mb-5 rounded">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <div className="px-6 py-4">
        <h3 className="text-xl text-bold mb-2 leading-snug">
          <Link as={`/posts/${slug}`}  href="/posts/[slug]"  className="hover:underline">
            {title}
          </Link>
        </h3>

        <div className="text-sm text-gray-600 mb-2">
          <DateFormatter dateString={date} />
        </div>
        <p className="text-base text-gray-700 mb-4">{excerpt}</p>
        <Avatar name={author.name} picture={author.picture} />
      </div>
    </div>
  );
}
