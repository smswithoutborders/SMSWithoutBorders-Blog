import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";
import ReadTime from "./read-time";

type Props = {
	title: string;
	coverImage: string;
	date: string;
	content: string;
};

export function PostHeader({ title, date, content }: Props) {
	return (
		<>
			<PostTitle>{title}</PostTitle>
			<div className="text-base text-gray-700 text-center mb-4 mx-3">
				<DateFormatter dateString={date} />
			</div>
			<div className="flex justify-center">
				<ReadTime text={content} />
			</div>
		</>
	);
}
