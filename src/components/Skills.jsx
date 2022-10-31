import React from 'react';

import { skillsV1 } from '../data';

export default function Skills() {
	return (
		<section className="skills" id="skills">
			<h3>Skills and Technologies</h3>

			{skillsV1.map(s => (
				<div className="skill" key={s.name}>
					<p>
						&rarr; <strong>{s.name}</strong> {s.tagline}
					</p>
					<hr />
				</div>
			))}

			<div className="skill">
				<p className="other-skills">
					...more skills include <strong>C++</strong>
				</p>
			</div>
		</section>
	);
}
