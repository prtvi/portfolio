import React from 'react';
import './Resume.css';

import { education, experience, skills } from '../../data';

export default function Resume(props) {
	const { isActive } = props;

	return (
		<article className={`resume ${isActive}`} data-page="resume">
			<header>
				<h2 className="h2 article-title">Resume</h2>
			</header>

			{/* <!-- 
        education
    --> */}
			<section className="timeline">
				<div className="title-wrapper">
					<div className="icon-box">
						<ion-icon name="book-outline"></ion-icon>
					</div>

					<h3 className="h3">Education</h3>
				</div>

				<ol className="timeline-list">
					{education.map(e => (
						<li className="timeline-item" key={e.year}>
							<h4 className="h4 timeline-item-title">{e.title}</h4>

							<span>{e.year}</span>

							<p className="timeline-text">{e.desc}</p>
						</li>
					))}
				</ol>
			</section>

			{/* <!-- 
        experience
    --> */}
			<section className="timeline">
				<div className="title-wrapper">
					<div className="icon-box">
						<ion-icon name="book-outline"></ion-icon>
					</div>

					<h3 className="h3">Experience</h3>
				</div>

				<ol className="timeline-list">
					{experience.map(e => (
						<li className="timeline-item" key={e.duration}>
							<h4 className="h4 timeline-item-title">{e.title}</h4>

							<span>{e.duration}</span>

							<p className="timeline-text">{e.desc}</p>
						</li>
					))}
				</ol>
			</section>

			{/* <!-- 
        skills
    --> */}
			<section className="skills">
				<h3 className="h3 skills-title">My skills</h3>

				<ul className="skills-list content-card">
					{skills.map(s => (
						<li className="skills-item" key={s.title}>
							<div className="title-wrapper">
								<h5 className="h5">{s.title}</h5>
								<data value={s.progress}>{`${s.progress}%`}</data>
							</div>

							<div className="skill-progress-bg">
								<div
									className="skill-progress-fill"
									style={{ width: `${s.progress}%` }}
								></div>
							</div>
						</li>
					))}
				</ul>
			</section>
		</article>
	);
}
