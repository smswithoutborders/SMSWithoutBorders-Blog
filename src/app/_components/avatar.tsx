import Image from "next/image";

type Props = {
	name: string;
	picture: string;
};

const Avatar = ({ name, picture }: Props) => {
	return (
		<div className="flex items-center">
			<div className="h-12 w-12 rounded-full mr-4 bg-gray-200 align-center">
				<Image
					src={picture}
					alt={name}
					width={20}
					height={20}
					style={{
						margin: "auto",
						marginTop: 12,
						opacity: "40%"
					}}
					className="rounded-full"
				/>
			</div>
			<h6 className="text-sm text-gray-700 font-bold">{name}</h6>
		</div>
	);
};

export default Avatar;
