import React from 'react';

import { projects } from '../data';

const filterNNewest = (projects, n) =>
	projects.sort((a, b) => b.id - a.id).slice(0, n);

export default function Projects() {
	const latestProjects = filterNNewest(projects, 2);

	return (
		<section className="projects" id="projects">
			<h3>Featured Projects</h3>

			<div className="project-list">
				{latestProjects.map(p => (
					<div className="project" key={p.id}>
						<div>
							<a href={p.href}>
								<h5>{p.title}</h5>
								<p>{p.desc}</p>
							</a>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
