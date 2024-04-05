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
							href="mailto:support@smswithoutborders.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaEnvelope size={20} className="rounded" />
						</a>
						<a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
							<FaFacebook size={20} className="rounded" />
						</a>
						<a href={X_URL} target="_blank" rel="noopener noreferrer">
							<FaXTwitter size={20} className="rounded" />
						</a>
						<a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
							<FaGithub size={20} className="rounded" />
						</a>
						<a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
							<FaLinkedin size={20} className="rounded" />
						</a>
					</div>
				</div>
			</Container>
			<div className={`md:hidden ${isMenuOpen ? "flex" : "hidden"} justify-center gap-6 mt-5`}>
				<a href="mailto:support@smswithoutborders.com" target="_blank" rel="noopener noreferrer">
					<FaEnvelope size={20} className="rounded" />
				</a>
				<a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
					<FaFacebook size={20} className="rounded" />
				</a>
				<a href={X_URL} target="_blank" rel="noopener noreferrer">
					<FaXTwitter size={20} className="rounded" />
				</a>
				<a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
					<FaGithub size={20} className="rounded" />
				</a>
				<a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
					<FaLinkedin size={20} className="rounded" />
				</a>
			</div>
		</div>
	);
}

export default Navbar;
