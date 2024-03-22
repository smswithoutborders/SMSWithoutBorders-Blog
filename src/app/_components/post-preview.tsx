import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
  className: string;
};

export function PostPreview({
  title,
  date,
  excerpt,
  author,
  slug,
  className,
}: Props) {
  return (
    <div className={`${className} shadow-2xl rounded-lg p-5`}> 
      <h3 className="font-medium text-3xl mb-3 mx-4 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]" className="hover:underline text-bold">
          {title}
        </Link>
      </h3>
      <div className="text-base mb-4 mx-3">
        <DateFormatter dateString={date} />
      </div>
      
      <p className="text-base leading-relaxed mb-4 mx-4">{excerpt}</p>
      <p className="mb-3 mx-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]" className="decoration-blue-300 text-blue-500" >
          Read more...
        </Link>
      </p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  );
}
