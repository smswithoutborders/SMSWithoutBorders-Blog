"use client";
import { useState } from "react";
import Container from "@/app/_components/container";
import Logo from "./logo";
import { FACEBOOK_URL, GITHUB_URL, X_URL, LINKEDIN_URL } from "@/lib/constants";
import { FaFacebook, FaXTwitter, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div className="border-b text-black border-neutral-300 bg-white w-full z-10 py-4 fixed top-0">
			<Container>
				<div className="flex justify-between items-center">
					<Logo src="/icon.png" alt="SMSWithoutBorders Logo" name="SMSWithoutBorders" url="/" />
					<div className="md:hidden">
						{isMenuOpen ? (
							<AiOutlineClose onClick={toggleMenu} size={20} className="cursor-pointer" />
						) : (
							<AiOutlineMenu onClick={toggleMenu} size={20} className="cursor-pointer" />
						)}
					</div>

					<div className="hidden md:flex justify-end gap-6">
						<a
							href="/posts"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-700 hover:text-blue-500 transition duration-300"
						>
							Articles
						</a>
						<a
							href="/releases"
							className="text-gray-700 hover:text-blue-500 transition duration-300"
							target="_blank"
							rel="noopener noreferrer"
						>
							Releases
						</a>
						<a
							href="mailto:support@smswithoutborders.com"
							className="text-gray-700 hover:text-blue-500 transition duration-300"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaEnvelope size={30} className="rounded bg-white p-1" />
						</a>
						<a
							href={FACEBOOK_URL}
							className="text-gray-700 hover:text-blue-500 transition duration-300"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaFacebook size={30} className="rounded-full bg-white p-1" />
						</a>
						<a
							href={X_URL}
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-700 hover:text-blue-500 transition duration-300"
						>
							<FaXTwitter size={30} className="rounded-full bg-white p-1" />
						</a>
						<a
							href={GITHUB_URL}
							className="text-gray-700 hover:text-blue-500 transition duration-300"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaGithub size={30} className="rounded-full bg-white p-1" />
						</a>
						<a
							href={LINKEDIN_URL}
							className="text-gray-700 hover:text-blue-500 transition duration-300"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaLinkedin size={30} className="rounded-full bg-white p-1" />
						</a>
					</div>
				</div>
			</Container>
			<div
				className={`md:hidden ${isMenuOpen ? "block" : "hidden"} mt-5 px-4 py-2 rounded-lg shadow-md`}
			>
				<div className="flex flex-col justify-center gap-4 items-center">
					<a
						href="/posts"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-700 hover:text-blue-500 transition duration-300"
					>
						Articles
					</a>
					<a
						href="/releases"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-700 hover:text-blue-500 transition duration-300"
					>
						Releases
					</a>
				</div>

				<div className="flex justify-center mt-4 gap-6">
					<a
						href="mailto:support@smswithoutborders.com"
						className="text-gray-700 hover:text-blue-500 transition duration-300"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaEnvelope size={30} className="rounded p-1" />
					</a>
					<a
						href={FACEBOOK_URL}
						className="text-gray-700 hover:text-blue-500 transition duration-300"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaFacebook size={30} className="rounded-full p-1" />
					</a>
					<a
						href={X_URL}
						className="text-gray-700 hover:text-blue-500 transition duration-300"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaXTwitter size={30} className="rounded-full p-1" />
					</a>
					<a
						href={GITHUB_URL}
						className="text-gray-700 hover:text-blue-500 transition duration-300"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaGithub size={30} className="rounded-full p-1" />
					</a>
					<a
						href={LINKEDIN_URL}
						className="text-gray-700 hover:text-blue-500 transition duration-300"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaLinkedin size={30} className="rounded-full p-1" />
					</a>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
