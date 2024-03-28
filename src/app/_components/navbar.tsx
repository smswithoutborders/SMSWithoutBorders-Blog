import Container from "@/app/_components/container";
import { FACEBOOK_URL, GITHUB_URL, X_URL } from "@/lib/constants";
import { FaFacebook, FaXTwitter, FaGithub } from "react-icons/fa6";

export function Navbar() {
	return (
		<nav className="border-b text-white border-neutral-200 bg-gray-900 justify-between fixed w-full z-10 top-0 pt-5 py-5">
			<Container>
				<div className="flex md:flex-col lg:flex-row justify-between items-center">
					<img src="/assets/blog/logo.png" alt="Your Logo" className="h-10 " />

					<div className="flex md:justify-center">
						<a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
							<FaFacebook
								size="25px"
								className="m-2 mx-3 rounded hover:bg-white hover:blue text-white"
							/>
						</a>
						<a href={X_URL} target="_blank" rel="noopener noreferrer">
							<FaXTwitter
								size="25px"
								className="m-2 mx-3 rounded hover:bg-white hover:blue text-white"
							/>
						</a>
						<a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
							<FaGithub
								size="25px"
								className="m-2 mx-3 rounded hover:bg-white hover:blue text-white"
							/>
						</a>
					</div>
				</div>
			</Container>
		</nav>
	);
}

export default Navbar;
