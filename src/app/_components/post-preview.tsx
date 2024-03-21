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
  className: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  className,
}: Props) {
  return (
    <div className={className}>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="font-medium text-3xl mb-3 mx-4 leading-snug">
        <Link as={`/posts/${slug}`}  href="/posts/[slug]" className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="text-base mb-4 mx-3">
        <DateFormatter dateString={date} />
      </div>
      
      <p className="text-base leading-relaxed mb-4 mx-4">{excerpt}</p>
      <p className=" mb-3 mx-3 leading-snug">
        <Link  as={`/posts/${slug}`}  href="/posts/[slug]" className="hover:underline decoration-sky-200" >
          Read more...
        </Link>
      </p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  );
}
