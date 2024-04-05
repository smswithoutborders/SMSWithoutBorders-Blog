import Image from "next/image";

type Props = {
	name: string;
	picture: string;
};

const Avatar = ({ name, picture }: Props) => {
	return (
		<div className="flex items-center">
			<div className="h-12 w-12 rounded-full mr-4">
				<Image src={picture} alt={name} width={60} height={60} className="rounded-full" />
			</div>
			<div className="text-sm text-gray-700 font-bold">{name}</div>
		</div>
	);
};

export default Avatar;
