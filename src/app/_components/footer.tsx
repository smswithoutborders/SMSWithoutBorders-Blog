import Container from "@/app/_components/container";
import Logo from "./logo";
import { GITHUB_URL, X_URL, LINKEDIN_URL } from "@/lib/constants";
import { FaXTwitter, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";

export function Footer() {
	return (
		<footer className="border-t text-white border-neutral-200 bg-black justify-between items-center py-5">
			<Container>
				<div className="flex flex-col md:flex-row justify-between items-center md:px-4">
					<Logo
						src="/icon-dark.png"
						alt="SMSWithoutBorders Logo"
						name="SMSWithoutBorders"
						url="/"
					/>
					<div className="grid grid-flow-col gap-6 mt-5 md:mt-0">
						<a
							href="mailto:support@smswithoutborders.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaEnvelope size={20} className="rounded hover:blue text-white mr-2" />
						</a>
						{/* <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
							<FaFacebook size={20} className="rounded hover:blue text-white" />
						</a> */}
						<a href={X_URL} target="_blank" rel="noopener noreferrer">
							<FaXTwitter size={20} className="rounded hover:blue text-white" />
						</a>
						<a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
							<FaGithub size={20} className="rounded hover:blue text-white" />
						</a>
						<a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
							<FaLinkedin size={20} className="rounded hover:blue text-white" />
						</a>
					</div>
				</div>
				<div className="text-center mt-5">
					<hr className="border-t-2 border-gray-800" />
					<p className="text-sm text-gray-400 mt-3">
						<span>&copy; 2026 SMSWithoutBorders.</span>
					</p>
				</div>
			</Container>
		</footer>
	);
}

export default Footer;
