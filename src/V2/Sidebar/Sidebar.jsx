import React from 'react';
import './Sidebar.css';

import { avatarSrc, contactCards, socialLinks } from '../../data';

// remove gmail
const sl = socialLinks.slice(1);

const getRelevantContactCard = function (card) {
	if (card.name === 'Email' || card.name === 'Phone')
		return (
			<a href={card.href} className="contact-link">
				{card.value}
			</a>
		);
	else if (card.name === 'Birthday')
		return <time value={card.value}>{card.href}</time>;
	else if (card.name === 'Location') return <address>{card.value}</address>;
};

export default function Sidebar() {
	const [isSidebarOpen, toggleSidebarOpen] = React.useState(false);

	const toggleSidebar = () => toggleSidebarOpen(curr => !curr);

	return (
		<aside className={`sidebar ${isSidebarOpen ? 'active' : ''}`} data-sidebar>
			<div className="sidebar-info">
				<figure className="avatar-box">
					<img src={avatarSrc} alt="Prithviraj Vernekar" width="80" />
				</figure>

				<div className="info-content">
					<h1 className="name" title="Prithviraj Vernekar">
						Prithviraj Vernekar
					</h1>

					<p className="title">Full Stack Developer</p>
				</div>

				<button
					className="info_more-btn"
					onClick={toggleSidebar}
					data-sidebar-btn
				>
					<span>Show contacts</span>
					<ion-icon name="chevron-down"></ion-icon>
				</button>
			</div>

			<div className="sidebar-info_more">
				<div className="separator"></div>

				<ul className="contacts-list">
					{contactCards.map(c => (
						<li className="contact-item" key={c.name}>
							<div className="icon-box">
								<ion-icon name={c.iconName}></ion-icon>
							</div>

							<div className="contact-info">
								<p className="contact-title">{c.name}</p>
								{getRelevantContactCard(c)}
							</div>
						</li>
					))}
				</ul>

				<div className="separator"></div>

				<ul className="social-list">
					{sl.map(s => (
						<li className="social-item" key={s.iconName}>
							<a href={s.href} className="social-link">
								<ion-icon name={s.iconName}></ion-icon>
							</a>
						</li>
					))}
				</ul>
			</div>
		</aside>
	);
}
