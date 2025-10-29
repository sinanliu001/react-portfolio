'use client'
import React, {
	useState
} from "react";
import {
	userEmail, userName
} from "../utils/data";

export default function Contact() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		const subject = encodeURIComponent("work with me");
		const body = encodeURIComponent(`Hello ${userName}, ${message} \nbest regards, \n${name} \n${email}`);
		window.open(`mailto:${userEmail}?subject=${subject}&body=${body}`);
	};

	return (
		<section id="contact" className="bg-gray-900 text-white py-20 px-4">
			<div className="max-w-4xl mx-auto">

				<form onSubmit={handleSubmit} className="space-y-4">
					<h2 className="text-3xl font-bold mb-8">Hire Me</h2>
					<div className="flex justify-center mt-12">
						<h1 className="text-lg text-gray-400">
							Interested in working together?
						</h1>
					</div>
					<p className="text-gray-400 text-center">
						Contact me to discuss your project or job opportunity!
					</p>
					<div>
						<label htmlFor="name" className="block text-lg font-medium">Name</label>
						<input
							type="text"
							id="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							className="w-full bg-gray-700 text-white rounded-lg px-4 py-2"
							required
						/>
					</div>
					<div>
						<label htmlFor="email" className="block text-lg font-medium">Email</label>
						<input
							type="email"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="w-full bg-gray-700 text-white rounded-lg px-4 py-2"
							required
						/>
					</div>
					<div>
						<label htmlFor="message" className="block text-lg font-medium">Message</label>
						<textarea
							id="message"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							className="w-full bg-gray-700 text-white rounded-lg px-4 py-2"
							rows="4"
							required
						></textarea>
					</div>
					<button
						type="submit"
						className="cursor-pointer px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
					>
						Submit
					</button>
				</form>

			</div>
		</section>
	);
}