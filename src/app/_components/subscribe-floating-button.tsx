"use client";

import { useState } from "react";
import { FaEnvelope, FaXmark } from "react-icons/fa6";

export default function SubscribeFloatingButton() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="fixed bottom-6 right-4 z-50 md:bottom-8 md:right-8">
			<div
				className={`overflow-hidden rounded-[28px] border border-black/10 bg-[#f9fafb] shadow-[0_18px_50px_rgba(13,12,17,0.18)] transition-all duration-300 ${
					isOpen ? "w-[min(26rem,calc(100vw-2rem))]" : "w-auto"
				}`}
			>
				{isOpen ? (
					<div className="p-4 md:p-5">
						<div className="mb-4 flex items-start justify-between gap-3">
							<div>
								{/* <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
									SMSWithoutBorders Newsletter
								</p> */}
								<h2 className="mt-1 text-xl text-gray-900">Follow what we are building.</h2>
							</div>
							<button
								type="button"
								onClick={() => setIsOpen(false)}
								className="rounded-full border border-gray-300 p-2 text-gray-600 transition-colors hover:border-gray-900 hover:text-gray-900"
								aria-label="Close subscribe form"
							>
								<FaXmark size={16} />
							</button>
						</div>
						<form
							action="https://newsletter.afkanerd.com/forms/nfrm_BzLMaLXv"
							method="post"
							className="flex flex-col gap-4"
							style={{ backgroundColor: "#f9fafb", color: "#111827" }}
						>
							<p className="text-sm text-gray-600">
								Sign up for our emails to get product and technology updates.
							</p>
							<div className="flex flex-col gap-2">
								<label
									htmlFor="floating_contact_email"
									className="text-sm font-medium text-gray-800"
								>
									Email
								</label>
								<input
									id="floating_contact_email"
									name="contact[email]"
									type="email"
									required
									placeholder="you@example.com"
									className="rounded-2xl border border-gray-500 bg-white px-4 py-3 text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-black"
									style={{ backgroundColor: "#ffffff", borderColor: "#6b7280", color: "#111827" }}
								/>
							</div>
							<input
								aria-hidden="true"
								autoComplete="off"
								name="h[url]"
								tabIndex={-1}
								className="hidden"
							/>
							<div className="flex justify-start">
								<button
									type="submit"
									className="rounded-full bg-[#0d0c11] px-5 py-3 text-sm font-semibold text-[#f9fafb] transition-transform hover:scale-[1.02]"
									style={{ backgroundColor: "#0d0c11", color: "#f9fafb" }}
								>
									Submit
								</button>
							</div>
						</form>
					</div>
				) : (
					<button
						type="button"
						onClick={() => setIsOpen(true)}
						className="flex items-center gap-3 rounded-full bg-[#0d0c11] px-5 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#f9fafb] transition-transform hover:scale-[1.02]"
						aria-expanded="false"
					>
						<FaEnvelope size={16} />
						<span>Subscribe</span>
					</button>
				)}
			</div>
		</div>
	);
}
