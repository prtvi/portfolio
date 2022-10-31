import React from 'react';
import './About.css';

const aboutParas = [
	"I'm a Full Stack Developer from Karnataka, India, working at redBus India as a Software Engineer. I enjoy building full-stack applications.",
	"💡 I'm an Electronics and Communication Engineer",
	"🌱 I'm currently learning Golang and React",
	"👨‍🔧 I'm looking to collaborate on Web Development projects",
	"📚 I'm looking forward to learn Arduino and Game Dev",
];

const whatAmIDoing = [
	{
		imgSrc: './assets/icons/icon-dev.svg',
		imgAlt: 'web development icon',
		title: 'Web development',
		desc: 'I like to build full stack applications, with backend technologies like Golang & NodeJS.',
	},
	{
		imgSrc: './assets/icons/icon-auto.svg',
		imgAlt: 'gear icon',
		title: 'Automation projects',
		desc: 'I like working on automation based projects involving Machine learning and IoT.',
	},
];

export default function About(props) {
	const { isActive } = props;

	return (
		<article className={`about ${isActive}`} data-page="about">
			<header>
				<h2 className="h2 article-title">About me</h2>
			</header>

			<section className="about-text">
				{aboutParas.map(p => (
					<p key={p.slice(10)}>{p}</p>
				))}
			</section>

			<section className="service">
				<h3 className="h3 service-title">What I'm doing</h3>

				<ul className="service-list">
					{whatAmIDoing.map(w => (
						<li className="service-item" key={w.imgAlt}>
							<div className="service-icon-box">
								<img
									className="svg-filter"
									src={w.imgSrc}
									alt={w.imgAlt}
									width="40"
								/>
							</div>

							<div className="service-content-box">
								<h4 className="h4 service-item-title">{w.title}</h4>

								<p className="service-item-text">{w.desc}</p>
							</div>
						</li>
					))}
				</ul>
			</section>
		</article>
	);
}
