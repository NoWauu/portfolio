import type { Content } from '$lib/types';

export const en: Content = {
	nav: {
		about: 'about',
		skills: 'skills',
		projects: 'projects',
		experience: 'work',
		education: 'edu',
		awards: 'wins',
		contact: 'contact'
	},

	meta: {
		title: 'Téo Lemesle - Fullstack Developer',
		description:
			'Fullstack developer and software engineering student in Brest. Web & mobile apps, clean architecture, distributed systems.'
	},

	a11y: {
		toggleTheme: 'Toggle theme',
		toggleLang: 'Switch language',
		menu: 'Toggle menu'
	},

	hero: {
		role: 'Fullstack Developer',
		intro:
			'I build full-stack web and mobile apps. Clean architecture, distributed systems, modern web tech.',
		ctaWork: 'view work',
		ctaContact: 'get in touch',
		ctaResume: 'résumé',
		info: [
			{ k: 'role', v: 'Fullstack Developer' },
			{ k: 'location', v: 'Brest, France' },
			{ k: 'company', v: 'VALARS (work-study)' },
			{ k: 'school', v: 'Sorbonne Paris Nord' },
			{ k: 'degree', v: 'BUT3 Informatique' },
			{ k: 'languages', v: 'FR native · EN C1 (TOEIC 960)' },
			{ k: 'available', v: 'September 2026' },
			{ k: 'off-clock', v: 'Hackathons · Volleyball' }
		]
	},

	about: {
		title: 'About',
		paragraphs: [
			'Third-year Computer Science student (BUT3) at Sorbonne Paris Nord, currently in a work-study program at VALARS where I develop .NET web & mobile applications. I’m passionate about full-stack development and software engineering.',
			'I’m now studying at an engineering school to deepen my skills in distributed architectures and modern web technologies. Outside of code: hackathons, volleyball, and a healthy obsession with well-designed systems.'
		]
	},

	skills: {
		title: 'Skills',
		groups: [
			{
				label: 'Languages',
				icon: '{ }',
				items: [
					'Java',
					'Python',
					'JavaScript (ES6+)',
					'TypeScript',
					'C#',
					'SQL',
					'HTML/CSS',
					'Rust'
				]
			},
			{
				label: 'Frameworks',
				icon: '</>',
				items: [
					'React.js',
					'Next.js',
					'Svelte',
					'Node.js',
					'Express',
					'Nest.js',
					'Spring Boot',
					'.NET',
					'Flutter',
					'React Native',
					'Leptos'
				]
			},
			{
				label: 'Tools & DevOps',
				icon: '#!',
				items: [
					'Git',
					'Docker',
					'Linux (Bash)',
					'REST APIs',
					'Agile (Scrum)',
					'Jenkins',
					'GitHub Actions'
				]
			}
		]
	},

	projects: {
		title: 'Projects',
		list: [
			{
				id: 'skyblock-tracker',
				name: 'SkyblockTracker',
				type: 'Personal',
				stack: ['Rust', 'Leptos', 'WASM', 'TimescaleDB', 'Conv1D', 'DAG'],
				desc: [
					'Predictive market analysis for the Hypixel Skyblock in-game economy',
					'End-to-end in Rust: ingestion service plus a Leptos/WASM web front-end',
					'Prices stored as time series in TigerData (ex-TimescaleDB) for historical querying',
					'Conv1D model forecasting short-term price movement, item by item',
					'DAG of inter-item dependencies so a predicted move propagates to linked items'
				]
			},
			{
				id: 'homescraper',
				name: 'HomeScraper',
				type: 'Personal',
				stack: ['TypeScript', 'Node.js', 'Playwright', 'SQLite', 'React', 'Docker'],
				desc: [
					'French real-estate watcher with commute-aware alerts',
					'Five site scrapers (SeLoger, Leboncoin, Bien’ici, Lokaviz, Wymmo) driven headlessly',
					'Geocoding + transit routing rank listings by real travel time, not by distance',
					'Cron-scheduled runs, SQLite storage, React config UI and a Discord notifier bot'
				],
				links: [{ label: 'source', href: 'https://github.com/NoWauu/HomeScraper' }]
			},
			{
				id: 'recipes-rag',
				name: 'Turkish Recipes RAG Chatbot',
				type: 'Personal',
				stack: ['Python', 'FastAPI', 'LangChain', 'ChromaDB', 'React 19', 'Docker'],
				desc: [
					'Retrieval-augmented chatbot answering cooking questions from a PDF recipe corpus',
					'FastAPI backend: LangChain pipeline, Chroma vector store, sentence-transformers embeddings',
					'React 19 + TanStack Router front-end with Clerk authentication',
					'Audio transcription endpoint, Alembic migrations, Docker and GitHub Actions CI/CD'
				],
				links: [{ label: 'source', href: 'https://github.com/NoWauu/chatbot-turkish-recipes' }]
			},
			{
				id: '4sure',
				name: '4Sure',
				type: 'Academic',
				stack: ['TensorFlow / Keras', 'TensorFlow Lite', 'React Native', 'Expo', 'NativeWind'],
				desc: [
					'Mobile app predicting age, gender and ethnicity from the live camera or a gallery photo',
					'Models trained in TensorFlow/Keras, exported to TFLite for on-device inference',
					'React Native + Expo app with accounts and a per-user scan history',
					'5th-semester BUT project: models, benchmarks and full report shipped in the repo'
				],
				links: [{ label: 'source', href: 'https://github.com/NoWauu/4Sure' }]
			},
			{
				id: 'velib',
				name: 'Vélib Visualisation & Booking',
				type: 'Academic',
				stack: ['Next.js', 'Django REST', 'Flutter', 'PostgreSQL', 'Docker'],
				desc: [
					'Web app (Next.js), REST API (Django) and mobile app (Flutter)',
					'PostgreSQL database auto-refreshed every minute',
					'Automated deployment via Docker'
				],
				links: [{ label: 'source', href: 'https://github.com/NoWauu/V-lib' }]
			},
			{
				id: '24h-info',
				name: '24h INFO 2026 contest repo',
				type: 'Contest',
				stack: ['Svelte', 'Rust', 'Python'],
				desc: [
					'Everything my team built during the 24-hour national contest in Montpellier',
					'Three 8-hour sprints: algorithms, web and cybersecurity',
					'Shipped under time pressure. 1st place nationally on the web track'
				],
				links: [{ label: 'source', href: 'https://github.com/NoWauu/24h-info-2026' }]
			},
			{
				id: 'curve-viz',
				name: 'Curve Visualisation',
				type: 'Personal',
				stack: ['Rust', 'nannou'],
				desc: [
					'Interactive playground for Bézier, Hermite and B-Spline curves',
					'Real-time rendering with nannou',
					'Built to get an intuition for spline maths'
				],
				links: [{ label: 'source', href: 'https://github.com/NoWauu/curve-visualization' }]
			}
		]
	},

	experience: {
		title: 'Experience',
		list: [
			{
				id: 'consulting',
				role: 'Independent Software Consultant',
				company: 'Micro-entreprise',
				dates: 'Since Jun 2026',
				location: 'France · Remote',
				desc: [
					'Registered micro-entreprise providing software development services',
					'Custom web & backend development, from scoping and quoting to delivery',
					'Direct client relationship: requirements, estimates, follow-up and support'
				],
				stack: ['Full-stack', 'Web', 'Backend', 'Consulting']
			},
			{
				id: 'valars',
				role: 'Fullstack Developer (Work-study)',
				company: 'VALARS',
				dates: 'Oct 2024 - Sep 2026',
				location: 'Paris, France',
				desc: [
					'Web & mobile application in .NET Blazor and MAUI Hybrid',
					'PostgreSQL and MSSQL databases',
					'Clean Architecture, SOLID principles and Vertical Slice Architecture',
					'Trained a YOLO-based digit-recognition model',
					'Solving complex problems end-to-end'
				],
				stack: ['.NET', 'Blazor', 'MAUI Hybrid', 'PostgreSQL', 'MSSQL', 'YOLO']
			},
			{
				id: 'fiverr',
				role: 'Freelance Developer (Minecraft plugins)',
				company: 'Fiverr',
				dates: '2022 - 2025',
				location: 'Remote',
				desc: [
					'Three years of freelancing: custom Minecraft server plugins built to client specs',
					'Gameplay systems, economy and moderation tooling with database-backed persistence',
					'Scoping, delivery and post-release support handled directly with each client'
				],
				stack: ['Java', 'Spigot / Paper', 'Bukkit API', 'Maven', 'SQL']
			}
		]
	},

	education: {
		title: 'Education',
		list: [
			{
				id: 'isen',
				dates: 'Since Sep 2026',
				degree: 'Engineering degree in Marine Technologies',
				school: 'ISEN Ouest · Brest',
				note: 'Engineering cycle following on from the BUT Informatique.'
			},
			{
				id: 'but',
				dates: 'Sep 2023 - Sep 2026',
				degree: 'BUT Informatique (Work-study)',
				school: 'IUT de Villetaneuse · Sorbonne Paris Nord',
				note: 'Key modules: Algorithms & Complexity, Operating Systems, Networks, Databases, Web Development.'
			},
			{
				id: 'bac',
				dates: '2020 - 2023',
				degree: 'Baccalauréat Général (mention assez bien)',
				school: 'Lycée Henri Moissan, Meaux',
				note: 'Specialities: NSI & Physics-Chemistry · Advanced Maths option.'
			}
		]
	},

	awards: {
		title: 'Awards',
		featured: {
			event: '24h INFO 2026',
			location: 'Montpellier, France',
			rank: 'National Champions',
			desc: 'A 24-hour national contest split into three 8-hour sprints: algorithms, web and cybersecurity. My team took 1st place nationally.',
			tracks: [
				{ track: 'Web', place: '1st', note: '1st place nationally', tier: 'gold' },
				{ track: 'Cybersecurity', place: '2nd', note: '2nd place nationally', tier: 'silver' },
				{
					track: 'Algorithms',
					place: 'n/a',
					note: 'Sprint left unfinished',
					tier: 'ghost'
				}
			]
		},
		others: [{ name: 'Nuit de l’Info', note: 'Annual overnight dev challenge' }]
	},

	contact: {
		title: 'Contact',
		blurb:
			'Open to work-study, internships and new opportunities. Got a project or a role in mind? Let’s talk.',
		labels: {
			github: 'github',
			linkedin: 'linkedin',
			phone: 'phone',
			location: 'location'
		}
	},

	game: {
		navLabel: 'play',
		title: 'explore mode (bonus)',
		hint: 'WASD / arrows to move',
		progress: 'discovered',
		done: 'All rooms explored. You know me well.',
		close: 'Close explore mode'
	},

	footer: 'designed & built by Téo Lemesle'
};
