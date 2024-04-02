import { FaClock } from "react-icons/fa";

type Props = {
	text: string;
};

const ReadTime = ({ text }: Props) => {
	const calculateReadTime = () => {
		const wordsPerMinute = 200;
		const words = text.split(" ").length;
		return Math.ceil(words / wordsPerMinute);
	};

	const readTime = calculateReadTime();

	return (
		<div className="flex text-sm text-gray-700 items-center space-x-2">
			<FaClock size={20} />
			<span>{readTime} min read</span>
		</div>
	);
};

export default ReadTime;
