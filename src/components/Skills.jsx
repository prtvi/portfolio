import React from 'react';

const skills = [
	{
		name: 'NodeJS | Golang',
		tagline: 'for backend Web Development.',
	},
	{
		name: 'Python',
		tagline: 'for ML & AI and automation projects.',
	},
	{
		name: 'JavaScript | React',
		tagline: 'to build interactive webpages.',
	},
];

export default function Skills() {
	return (
		<section className="skills" id="skills">
			<h3>Skills and Technologies</h3>

			{skills.map(s => (
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
