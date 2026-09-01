import { type AuthorLike } from "@/interfaces/author";
import Image from "next/image";

type Props = {
	author: AuthorLike;
};

function formatAuthors(author: AuthorLike) {
	if (Array.isArray(author)) {
		if (author.length === 0) {
			return "";
		}
		if (author.length === 1) {
			return author[0].name;
		}
		if (author.length === 2) {
			return `${author[0].name} and ${author[1].name}`;
		}
		return `${author
			.slice(0, -1)
			.map((item) => item.name)
			.join(", ")} and ${author[author.length - 1].name}`;
	}

	return author.name;
}

const Avatar = ({ author }: Props) => {
	const authors = Array.isArray(author) ? author : [author];
	const displayName = formatAuthors(author);
	const primaryAuthor = authors[0];

	return (
		<div className="flex items-center">
			<div className="mr-4 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-gray-200">
				<Image
					src={primaryAuthor.picture}
					alt={displayName}
					width={20}
					height={20}
					style={{
						opacity: "40%",
						width: "20px",
						height: "20px"
					}}
					className="rounded-full"
				/>
			</div>
			<h6 className="text-sm text-gray-700 font-medium">
				{displayName.split(" and ").map((name, index, parts) => (
					<span key={name}>
						{name}
						{index < parts.length - 1 ? <span className="mx-1 text-gray-400">and</span> : null}
					</span>
				))}
			</h6>
		</div>
	);
};

export default Avatar;
