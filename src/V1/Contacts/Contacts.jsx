import React from 'react';
import './Contacts.css';
import { socialLinks } from '../../data';

export default function Contacts() {
	return (
		<section className="contact" id="contact">
			<h3>Get in touch</h3>

			{socialLinks.map(s => (
				<a href={s.href} key={s.iconName}>
					<img src={s.imgSrc} alt={s.iconName} />
				</a>
			))}
		</section>
	);
}
