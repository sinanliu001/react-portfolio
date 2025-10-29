import React from "react";
// import { StarIcon } from '@heroicons/react/solid';


export default function About() {
	return (
		<section id="about" className="bg-gray-900 text-white pt-20 pb-20">
			<div className="max-w-4xl mx-auto pt-5">
				<div className="text-center pb-5">
					<h1 className="text-3xl font-bold mb-4">About Me</h1>

					<p className="text-gray-400">I am a passionate developer with expertise in web technologies.</p>
				</div>
				<div className="flex flex-col items-center justify-center space-y-6 md:flex-row md:space-y-0 md:space-x-8 p-6 bg-gray-800 rounded-lg shadow-lg">
					<div className="max-w-md text-center md:text-left">
						<h1 className="text-gray-400">Hi, I'm Simon.I love to build amazing apps.</h1>

						<p className="text-lg text-gray-200 leading-relaxed">
							I’m a Full Stack Engineer with experience designing and delivering scalable, user-centric web applications using JavaScript, React.js, Node.js, and TypeScript.
							<br />
						</p>
						<p className="text-lg text-gray-200 leading-relaxed">
							I specialize in building performant front-end interfaces and robust back-end services with expertise in REST APIs, microservices, CI/CD pipelines (Jenkins, GitHub Actions), and AWS (EC2, Docker, Nginx).
							<br />
						</p>
						<p className="text-lg text-gray-200 leading-relaxed">
							I’m passionate about modernizing legacy systems, optimizing performance, and collaborating in Agile teams to deliver high-quality, test-driven solutions.
							<br />
						</p>
						<div className="flex justify-center md:justify-center mt-4">
							<div className="inline-flex rounded-md shadow-xs" role="group">
								<a href="#contact" aria-current="page" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
									Work With Me
								</a>
								<a href="#projects" aria-current="page" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
									Projects
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
