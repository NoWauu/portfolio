import type { Content } from '$lib/types';

export const fr: Content = {
	nav: {
		about: 'à propos',
		skills: 'skills',
		projects: 'projets',
		experience: 'exp',
		education: 'études',
		awards: 'prix',
		contact: 'contact'
	},

	meta: {
		title: 'Téo Lemesle — Développeur Fullstack',
		description:
			'Développeur fullstack et étudiant en ingénierie logicielle à Paris. Applications web & mobiles, clean architecture, systèmes distribués.'
	},

	a11y: {
		toggleTheme: 'Changer de thème',
		toggleLang: 'Changer de langue',
		menu: 'Ouvrir le menu'
	},

	hero: {
		status: 'Disponible · étudiant en école d’ingénieur',
		role: 'Développeur Fullstack',
		sub: 'Étudiant en ingénierie logicielle — BUT3 Informatique',
		intro:
			'Je conçois des applications web & mobiles full-stack, avec un faible pour la clean architecture, les systèmes distribués et les technologies web modernes. Actuellement en alternance chez VALARS.',
		ctaWork: 'voir mes projets',
		ctaContact: 'me contacter',
		ctaResume: 'CV',
		info: [
			{ k: 'poste', v: 'Développeur Fullstack' },
			{ k: 'ville', v: 'Paris, France' },
			{ k: 'entreprise', v: 'VALARS — alternance' },
			{ k: 'école', v: 'Sorbonne Paris Nord' },
			{ k: 'diplôme', v: 'BUT3 Informatique' },
			{ k: 'anglais', v: 'C1 · TOEIC 960' },
			{ k: 'statut', v: 'école d’ingénieur · depuis 09/2026' }
		]
	},

	about: {
		title: 'À propos',
		paragraphs: [
			'Étudiant en 3ᵉ année de BUT Informatique (BUT3) à la Sorbonne Paris Nord, actuellement en alternance chez VALARS où je développe des applications web & mobiles en .NET. Passionné par le développement full-stack et l’ingénierie logicielle.',
			'Je suis maintenant en école d’ingénieur pour approfondir mes compétences en architectures distribuées et en technologies web modernes. En dehors du code : hackathons, volleyball, et une obsession saine pour les systèmes bien conçus.'
		],
		facts: [
			{ label: 'localisation', value: 'Paris, France' },
			{ label: 'langues', value: 'FR maternel · EN C1 (TOEIC 960)' },
			{ label: 'disponibilité', value: 'Disponible septembre 2026' },
			{ label: 'à côté', value: 'Hackathons · Volleyball' }
		]
	},

	skills: {
		title: 'Compétences',
		groups: [
			{
				label: 'Langages',
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
				label: 'Outils & DevOps',
				icon: '#!',
				items: [
					'Git',
					'Docker',
					'Linux (Bash)',
					'API REST',
					'Agile (Scrum)',
					'Jenkins',
					'GitHub Actions'
				]
			},
			{
				label: 'Langues',
				icon: '@',
				items: ['Anglais — C1 · TOEIC 960', 'Français — Maternel']
			}
		]
	},

	projects: {
		title: 'Projets',
		list: [
			{
				id: 'skyblock-tracker',
				name: 'SkyblockTracker — Analyse de marché & IA prédictive',
				type: 'Personnel',
				stack: ['Rust', 'Leptos', 'WASM', 'TimescaleDB', 'Conv1D', 'DAG'],
				desc: [
					'Tout en Rust : service d’ingestion + front web Leptos/WASM',
					'Récupération et analyse en continu du marché interne d’Hypixel Skyblock',
					'Prix stockés en séries temporelles dans TigerData (ex-TimescaleDB) pour l’historique',
					'Modèle Conv1D prédisant le mouvement de prix à court terme, item par item',
					'DAG des dépendances inter-items pour propager une prédiction aux items liés'
				]
			},
			{
				id: 'homescraper',
				name: 'HomeScraper',
				type: 'Personnel',
				stack: ['TypeScript', 'Node.js', 'Playwright', 'SQLite', 'React', 'Docker'],
				desc: [
					'Veille immobilière avec alertes tenant compte du temps de trajet',
					'Cinq scrapers (SeLoger, Leboncoin, Bien’ici, Lokaviz, Wymmo) pilotés en headless',
					'Géocodage + calcul d’itinéraires : annonces classées par temps de trajet réel, pas par distance',
					'Exécutions planifiées en cron, stockage SQLite, interface React et bot Discord de notification'
				],
				links: [{ label: 'sources', href: 'https://github.com/NoWauu/HomeScraper' }]
			},
			{
				id: 'recipes-rag',
				name: 'Chatbot RAG — recettes turques',
				type: 'Personnel',
				stack: ['Python', 'FastAPI', 'LangChain', 'ChromaDB', 'React 19', 'Docker'],
				desc: [
					'Chatbot RAG répondant aux questions de cuisine à partir d’un corpus de recettes en PDF',
					'Backend FastAPI : pipeline LangChain, base vectorielle Chroma, embeddings sentence-transformers',
					'Front React 19 + TanStack Router avec authentification Clerk',
					'Endpoint de transcription audio, migrations Alembic, Docker et CI/CD GitHub Actions'
				],
				links: [{ label: 'sources', href: 'https://github.com/NoWauu/chatbot-turkish-recipes' }]
			},
			{
				id: '4sure',
				name: '4Sure — IA de vision embarquée',
				type: 'Académique',
				stack: ['TensorFlow / Keras', 'TensorFlow Lite', 'React Native', 'Expo', 'NativeWind'],
				desc: [
					'Application mobile prédisant âge, genre et ethnicité depuis la caméra ou une photo',
					'Modèles entraînés en TensorFlow/Keras, exportés en TFLite pour l’inférence sur l’appareil',
					'Application React Native + Expo avec comptes et historique des scans par utilisateur',
					'Projet de 5ᵉ semestre de BUT — modèles, benchmarks et rapport complet dans le dépôt'
				],
				links: [{ label: 'sources', href: 'https://github.com/NoWauu/4Sure' }]
			},
			{
				id: 'velib',
				name: 'Visualisation & réservation de Vélib',
				type: 'Académique',
				stack: ['Next.js', 'Django REST', 'Flutter', 'PostgreSQL', 'Docker'],
				desc: [
					'Application web (Next.js), API REST (Django) et application mobile (Flutter)',
					'Base de données PostgreSQL mise à jour automatiquement chaque minute',
					'Déploiement automatisé via Docker'
				],
				links: [{ label: 'sources', href: 'https://github.com/NoWauu/V-lib' }]
			},
			{
				id: '24h-info',
				name: '24h INFO 2026 — dépôt du concours',
				type: 'Concours',
				stack: ['Svelte', 'Rust', 'Python'],
				desc: [
					'Tout ce que mon équipe a construit pendant les 24h du concours national à Montpellier',
					'Trois sprints de 8h : algorithmique, web et cybersécurité',
					'Livré sous pression — 1ʳᵉ place nationale sur l’épreuve web'
				],
				links: [{ label: 'sources', href: 'https://github.com/NoWauu/24h-info-2026' }]
			},
			{
				id: 'curve-viz',
				name: 'Visualisation de courbes',
				type: 'Personnel',
				stack: ['Rust', 'nannou'],
				desc: [
					'Terrain de jeu interactif pour les courbes de Bézier, Hermite et B-Spline',
					'Rendu temps réel avec nannou',
					'Écrit pour se faire une intuition des maths des splines'
				],
				links: [{ label: 'sources', href: 'https://github.com/NoWauu/curve-visualization' }]
			}
		]
	},

	experience: {
		title: 'Expérience',
		list: [
			{
				id: 'consulting',
				role: 'Consultant indépendant — Développement logiciel',
				company: 'Micro-entreprise',
				dates: 'Depuis juin 2026',
				location: 'France · Télétravail',
				desc: [
					'Micro-entreprise déclarée, en prestation de services de développement logiciel',
					'Développement web & backend sur mesure, du cadrage au devis jusqu’à la livraison',
					'Relation client directe : besoins, estimations, suivi et support'
				],
				stack: ['Full-stack', 'Web', 'Backend', 'Conseil']
			},
			{
				id: 'valars',
				role: 'Développeur Fullstack — Alternance',
				company: 'VALARS',
				dates: 'Oct 2024 – Sep 2026',
				location: 'Paris, France',
				desc: [
					'Application web & mobile en .NET Blazor et MAUI Hybrid',
					'Bases de données PostgreSQL et MSSQL',
					'Clean Architecture, principes SOLID et Vertical Slice Architecture',
					'Entraînement d’un modèle de reconnaissance de chiffres basé sur YOLO',
					'Résolution de problèmes complexes de bout en bout'
				],
				stack: ['.NET', 'Blazor', 'MAUI Hybrid', 'PostgreSQL', 'MSSQL', 'YOLO']
			},
			{
				id: 'fiverr',
				role: 'Développeur freelance — Plugins Minecraft',
				company: 'Fiverr',
				dates: '2022 – 2025',
				location: 'Télétravail',
				desc: [
					'Trois ans de freelance : plugins de serveur Minecraft sur mesure, selon le cahier des charges client',
					'Systèmes de gameplay, économie et outils de modération, avec persistance en base de données',
					'Cadrage, livraison et support après mise en production gérés en direct avec chaque client'
				],
				stack: ['Java', 'Spigot / Paper', 'Bukkit API', 'Maven', 'SQL']
			}
		]
	},

	education: {
		title: 'Formation',
		list: [
			{
				id: 'isen',
				dates: 'Depuis sept. 2026',
				degree: 'Diplôme d’ingénieur — Technologies Marines',
				school: 'ISEN Ouest · Brest',
				note: 'Filière Technologies Marines — cycle ingénieur dans la continuité du BUT Informatique.'
			},
			{
				id: 'but',
				dates: 'Sep 2023 – Sep 2026',
				degree: 'BUT Informatique (Alternance)',
				school: 'IUT de Villetaneuse · Sorbonne Paris Nord',
				note: 'Modules clés : Algorithmique & Complexité, Systèmes d’Exploitation, Réseaux, Bases de Données, Développement web.'
			},
			{
				id: 'bac',
				dates: '2020 – 2023',
				degree: 'Baccalauréat Général — Mention assez bien',
				school: 'Lycée Henri Moissan, Meaux',
				note: 'Spécialités : NSI & Physique-Chimie · Option Mathématiques complémentaires.'
			}
		]
	},

	awards: {
		title: 'Distinctions',
		featured: {
			event: '24h INFO 2026',
			location: 'Montpellier, France',
			rank: 'Champions nationaux',
			desc: 'Un concours national de 24 heures découpé en trois sprints de 8h — algorithmique, web et cybersécurité. Mon équipe a décroché la 1ʳᵉ place nationale.',
			tracks: [
				{ track: 'Web', place: '1ʳᵉ', note: '1ʳᵉ place nationale', tier: 'gold' },
				{ track: 'Cybersécurité', place: '2ᵉ', note: '2ᵉ place nationale', tier: 'silver' },
				{
					track: 'Algorithmique',
					place: '½',
					note: 'Non classés — nous n’avons fait que la moitié, tout en surpassant toutes les autres équipes sur la partie traitée.',
					tier: 'ghost'
				}
			]
		},
		others: [
			{ name: 'Nuit de l’Info', note: 'Défi de développement nocturne annuel' },
			{ name: 'Hackathons', note: 'Participation régulière' }
		]
	},

	contact: {
		title: 'Contact',
		blurb:
			'Ouvert aux alternances, stages et nouvelles opportunités. Un projet ou un poste en tête ? Discutons-en.',
		labels: {
			github: 'github',
			linkedin: 'linkedin',
			phone: 'téléphone',
			location: 'localisation'
		}
	},

	game: {
		navLabel: 'jouer',
		title: 'mode exploration (bonus)',
		hint: 'ZQSD / flèches pour se déplacer',
		progress: 'découvert',
		done: 'Toutes les salles explorées — vous me connaissez bien.',
		close: 'Fermer le mode exploration'
	},

	footer: 'conçu & développé par Téo Lemesle'
};
