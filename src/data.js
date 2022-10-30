export const contactCards = [
	{
		name: 'Email',
		value: 'prithvippv25@gmail.com',
		href: 'mailto:prithvippv25@gmail.com',
	},
	// {
	// 	name: 'Phone',
	// 	value: '+918104994949',
	// 	href: 'tel:+918104994949',
	// },
	{
		name: 'Birthday',
		value: '1999-07-25',
		href: 'July 25, 1999',
	},
	{
		name: 'Location',
		value: 'Bangalore, Karnataka, India',
		href: '',
	},
];

export const socialLinks = [
	{
		href: 'mailto:prithvippv25@gmail.com',
		imgSrc: 'assets/gmail.png',
		iconName: 'logo-gmail',
	},
	{
		href: 'https://github.com/prtvi',
		imgSrc: 'assets/github.png',
		iconName: 'logo-github',
	},
	{
		href: 'https://www.linkedin.com/in/prithviraj-vernekar-5830161b2/',
		imgSrc: 'assets/linkedin.png',
		iconName: 'logo-linkedin',
	},
	{
		href: 'https://twitter.com/prtviv',
		imgSrc: 'assets/twitter.png',
		iconName: 'logo-twitter',
	},
	{
		href: 'https://www.instagram.com/prtviv',
		imgSrc: 'assets/instagram.png',
		iconName: 'logo-instagram',
	},
];

export const education = [
	{
		title: '10th Grade from KLS Public School, Belgaum',
		year: '2016',
		desc: 'Completed my schooling at KLS Public School from the CBSE board',
	},
	{
		title: '12th Pre-university from Narayana PU College, Bangalore',
		year: '2018',
		desc: 'Pursued Computer Science from Narayana PU College, Bangalore',
	},
	{
		title: 'BE from Sri Jayachamarajendra College of Engineering, Mysuru',
		year: '2022',
		desc: 'Completed my Bachelor of Engineering in Electronics and Communication from Sri Jayachamarajendra College of Engineering, Mysuru',
	},
];

export const experience = [
	{
		title: 'Software Engineering Intern @redBus India',
		duration: 'March - May, 2022',
		desc: 'Worked at redBus India as Software Engineering intern for 3 months. Learnt various technologies such as Golang, ArangoDB and MongoDB.',
	},
	{
		title: 'Software Engineer @redBus India',
		duration: 'August 2022 - Present',
		desc: 'Currently working as a Software Engineer at redBus India. Learning more about full stack development.',
	},
];

export const skills = [
	{
		title: 'Web development',
		progress: '70',
	},
	{
		title: 'Python',
		progress: '70',
	},
	{
		title: 'NodeJS',
		progress: '60',
	},
	{
		title: 'Golang',
		progress: '65',
	},
];

export const projectTags = [
	{ tag: 'all', label: 'All' },
	{ tag: 'webdev', label: 'Web Development' },
	{ tag: 'ml', label: 'Machine Learning' },
	{ tag: 'iot', label: 'IoT' },
	{ tag: 'other', label: 'Other' },
];

export const projects = [
	{
		id: 10,
		title: 'A* Shortest Path Visualization',
		desc: 'See the A* shortest path search algorithm in action!',
		href: 'https://github.com/prtvi/astar-vis',
		imgSrc: './assets/projects/astar.png',
		imgAlt: 'A-star shortest path visualizer',
		category: ['webdev'],
	},
	{
		id: 8,
		title: 'Typing Test',
		desc: 'A simple typing test program built using javascript',
		href: 'https://github.com/prtvi/javascript-projects/tree/master/typing-test',
		imgSrc: './assets/projects/typing-test.png',
		imgAlt: 'typing test',
		category: ['webdev'],
	},
	{
		id: 9,
		title: 'Rat in a Maze Visualization',
		desc: 'Watch a rat look for cheese in a maze!',
		href: 'https://github.com/prtvi/rat-in-a-maze',
		imgSrc: './assets/projects/rat-in-a-maze.png',
		imgAlt: 'rat in a maze visualizer',
		category: ['webdev'],
	},
	{
		id: 7,
		title: 'Automation using hand gestures',
		desc: 'Your very own home automation system using hand gestures',
		href: 'https://github.com/prtvi/automation-using-hand-gestures',
		imgSrc: './assets/projects/auh.png',
		imgAlt: 'automation using hand gestures',
		category: ['iot', 'ml'],
	},
	{
		id: 6,
		title: 'Smart Agricare',
		desc: 'A smart agricultural system for automating irrigation and a portal where you can analyse your crops',
		href: 'https://github.com/gokulBalaG/Smart-Agricare',
		imgSrc: './assets/projects/smart-agricare.png',
		imgAlt: 'smart agricare',
		category: ['iot', 'ml', 'webdev'],
	},
	{
		id: 5,
		title: 'Joke API',
		desc: 'A simple Joke API (REST-API) built in Golang that returns random jokes!',
		href: 'https://github.com/prtvi/joke-api',
		imgSrc: './assets/projects/joke-api.png',
		imgAlt: 'joke API',
		category: ['webdev'],
	},
	{
		id: 4,
		title: 'Sorting visualizer',
		desc: 'A very simple Sorting visualizer for bubble, insertion & selection sort, built using Vanilla JavaScript',
		href: 'https://github.com/prtvi/sorting-visualizer',
		imgSrc: './assets/projects/sorting-visualizer.png',
		imgAlt: 'sorting visualizer',
		category: ['webdev'],
	},
	{
		id: 2,
		title: 'Steganography',
		desc: 'A simple implementation of Image Steganography using the LSB technique',
		href: 'https://github.com/prtvi/steganography',
		imgSrc: './assets/projects/steganography.png',
		imgAlt: 'steganography',
		category: ['other'],
	},
	{
		id: 1,
		title: 'Green screening implementation',
		desc: 'A simple implementation of the green screening process for images',
		href: 'https://github.com/prtvi/green-screening-implementation',
		imgSrc: './assets/projects/green-screen.png',
		imgAlt: 'green screening implementation',
		category: ['other'],
	},
	{
		id: 0,
		title: 'Password Manager',
		desc: 'Your very own password manager that uses the SQLite database to manage passwords, built using C++',
		href: 'https://github.com/prtvi/passwordManager',
		imgSrc: './assets/projects/password-manager.png',
		imgAlt: 'password manager',
		category: ['other'],
	},
	{
		id: 3,
		title: 'Mapping system for organizations',
		desc: 'Find your required destination in an oraganization using the A* shortest path algorithm',
		href: 'https://github.com/prtvi/mso',
		imgSrc: './assets/projects/mso.png',
		imgAlt: 'mapping system for organizations',
		category: ['other'],
	},
];
