import React from 'react';
import './Portfolio.css';

import { projectTags, projects } from '../../data';

const projectTagsMap = new Map();
projectTags.forEach(pt => projectTagsMap.set(pt.tag, pt.label));

export default function Portfolio(props) {
	const { isActive } = props;

	const [isSelectOpen, toggleSelect] = React.useState(false);
	const [selectVal, updateSelectVal] = React.useState('');
	const [filteredProjects, updateFilteredProjects] = React.useState(projects);

	const toggleSelectEL = () => toggleSelect(curr => !curr);

	const selectItemEL = function (e) {
		const selectedValue = e.target.dataset.selectItem;

		updateSelectVal(selectedValue);
		toggleSelect(curr => !curr);

		filterProjects(selectedValue, projects);
	};

	const filterProjects = function (selectedValue, projects) {
		const filtered = [];

		projects.forEach(p => {
			const tags = p.category;

			if (selectedValue === 'all') filtered.push(p);
			else if (tags.includes(selectedValue)) filtered.push(p);
		});

		updateFilteredProjects(curr => filtered);
	};

	return (
		<article className={`portfolio ${isActive}`} data-page="portfolio">
			<header>
				<h2 className="h2 article-title">Portfolio</h2>
			</header>

			<section className="projects">
				{/* filter list for larger screen (like navbar) */}

				<ul className="filter-list">
					{projectTags.map(pt => (
						<li className="filter-item" key={pt.tag}>
							<button
								// keep the selected value active in the filter navbar
								className={pt.tag === selectVal ? 'active' : ''}
								data-select-item={pt.tag}
								onClick={selectItemEL}
							>
								{pt.label}
							</button>
						</li>
					))}
				</ul>

				{/* filter select drop-down list container (for smaller screen) */}

				<div className="filter-select-box">
					<button
						className={`filter-select ${isSelectOpen ? 'active' : ''}`}
						data-select
						onClick={toggleSelectEL}
					>
						<div className="select-value" data-select-value>
							{/* if selectVal is null then by default have the menu selected to 'Select category' else choose as per selected */}
							{selectVal ? projectTagsMap.get(selectVal) : 'Select category'}
						</div>

						<div className="select-icon">
							<ion-icon name="chevron-down"></ion-icon>
						</div>
					</button>

					<ul className="select-list">
						{projectTags.map(pt => (
							<li className="select-item" key={pt.tag}>
								<button data-select-item={pt.tag} onClick={selectItemEL}>
									{pt.label}
								</button>
							</li>
						))}
					</ul>
				</div>

				{/* display project list */}

				<ul className="project-list">
					{filteredProjects.map(p => (
						<li
							className="project-item active"
							data-project-item
							data-category={p.category}
							key={p.id}
						>
							<a href={p.href}>
								<figure className="project-img">
									<div className="project-item-icon-box">
										<ion-icon name="eye-outline"></ion-icon>
									</div>

									<img src={p.imgSrc} alt={p.imgAlt} loading="lazy" />
								</figure>

								<h3 className="project-title">{p.title}</h3>

								{p.category.map(c => (
									<p className="project-category" key={c}>
										{projectTagsMap.get(c)}
									</p>
								))}
							</a>
						</li>
					))}
				</ul>
			</section>
		</article>
	);
}
