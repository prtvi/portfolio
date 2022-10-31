import React from 'react';

import { socialLinks, onlineAvatarLink } from '../data';

export default function Home() {
	const age = Math.abs(
		new Date(Date.now() - new Date(1999, 6, 25)).getUTCFullYear() - 1970
	);

	const githubLink = socialLinks.find(s => s.href.includes('github')).href;

	return (
		<section className="home" id="home">
			<div className="intro">
				<div>
					<h1>Prithviraj Vernekar</h1>

					<p className="subheading">
						{age} | Developer, Tech enthusiast and a Learner
					</p>

					<p className="description">
						Building and working on projects related to Automation and Web
						Development.
					</p>

					<p className="visit">
						<a href={githubLink} className="link">
							Visit my Github profile &rarr;
						</a>
					</p>
				</div>
			</div>

			<div className="avatar">
				<img src={onlineAvatarLink} alt="logo icon" />
			</div>
		</section>
	);
}
