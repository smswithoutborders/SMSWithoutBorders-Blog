import { ReactNode } from "react";

type Props = {
	children?: ReactNode;
};

export function PostTitle({ children }: Props) {
	return (
		<h1 className="font-semibold text-2xl md:text-3xl mb-3 mx-4 leading-snug text-center pt-5">
			{children}
		</h1>
	);
}
