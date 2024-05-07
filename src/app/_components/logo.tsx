import Image from "next/image";
import Link from "next/link";

interface LogoProps {
	src: string;
	alt: string;
	name: string;
	url: string;
}

const Logo = ({ src, alt, name, url }: LogoProps) => {
	return (
		<Link href={url}>
			<div className="flex items-center">
				<div className="h-10 w-10 mr-2">
					<Image src={src} alt={alt} width={40} height={40} />
				</div>
				<span className="text-md md:text-lg font-bold">{name}</span>
			</div>
		</Link>
	);
};

export default Logo;
