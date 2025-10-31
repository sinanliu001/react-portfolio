import React from "react";
import Image from "next/image";
import { projects } from "../utils/data";

export default function Projects() {
	return (
		<section id="projects" className="bg-gray-800 text-white py-20">
			<div className="max-w-4xl mx-auto">
				<h1 className="text-3xl font-bold mb-4 text-center">Projects</h1>
				<h1 className="text-xl font-bold mb-8 text-center">Apps I've Built</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<div key={index} className="bg-gray-700 rounded-lg p-6">
							<Image
								src={project.image}
								alt={project.title}
								className="rounded-md mb-4 overflow-auto"
								width={500}
								height={300}
							/>
							<h3 className="text-xl font-bold mb-2">{project.title}</h3>
							<p className="text-gray-400 mb-4">{project.subtitle}</p>
							<p className="text-gray-300">{project.description}</p>
							<div className="mt-4">
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-500 hover:underline"
								>
									View Project
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
