/**
 * Shape of every piece of editable content.
 *
 * `src/lib/data/en.ts` and `src/lib/data/fr.ts` must both satisfy `Content`,
 * so a field added in one language is a type error until it exists in the other.
 */

export type Locale = 'en' | 'fr';

export type Theme = 'dark' | 'light';

/** id of a page section — drives the nav, the scroll-spy and the explore map. */
export type SectionId =
	'about' | 'skills' | 'projects' | 'experience' | 'education' | 'awards' | 'contact';

/** A `key :: value` row of the neofetch panel in the hero. */
export interface InfoRow {
	k: string;
	v: string;
}

export interface Hero {
	status: string;
	role: string;
	sub: string;
	intro: string;
	ctaWork: string;
	ctaContact: string;
	ctaResume: string;
	info: InfoRow[];
}

export interface About {
	title: string;
	paragraphs: string[];
	/** `label` is the caption, `value` the highlighted line. */
	facts: { label: string; value: string }[];
}

export interface SkillGroup {
	label: string;
	/** Short ASCII glyph shown before the group name, e.g. `{ }`. */
	icon: string;
	items: string[];
}

export interface Skills {
	title: string;
	groups: SkillGroup[];
}

export interface ProjectLink {
	label: string;
	href: string;
}

export interface Project {
	/** Stable key — also used for the screenshot filename and as a Svelte key. */
	id: string;
	name: string;
	/** Free-form category badge, e.g. `Personal` / `Academic`. */
	type: string;
	stack: string[];
	desc: string[];
	/** Path under `static/`, e.g. `/projects/market-ai.png`. Falls back to a placeholder. */
	image?: string;
	links?: ProjectLink[];
}

export interface Projects {
	title: string;
	list: Project[];
}

export interface Job {
	id: string;
	role: string;
	company: string;
	dates: string;
	location: string;
	desc: string[];
	stack: string[];
}

export interface Experience {
	title: string;
	list: Job[];
}

export interface Degree {
	id: string;
	dates: string;
	degree: string;
	school: string;
	note: string;
}

export interface Education {
	title: string;
	list: Degree[];
}

/** Visual weight of an award track badge. */
export type AwardTier = 'gold' | 'silver' | 'ghost';

export interface AwardTrack {
	track: string;
	place: string;
	note: string;
	tier: AwardTier;
}

export interface FeaturedAward {
	event: string;
	location: string;
	rank: string;
	desc: string;
	tracks: AwardTrack[];
}

export interface Awards {
	title: string;
	featured: FeaturedAward;
	others: { name: string; note: string }[];
}

export interface Contact {
	title: string;
	blurb: string;
	/** Captions for the contact grid tiles — the values live in `site.ts`. */
	labels: {
		github: string;
		linkedin: string;
		phone: string;
		location: string;
	};
}

export interface Game {
	navLabel: string;
	title: string;
	hint: string;
	progress: string;
	done: string;
	close: string;
}

export interface Content {
	/** Short nav labels, keyed by section id. */
	nav: Record<SectionId, string>;
	meta: { title: string; description: string };
	a11y: { toggleTheme: string; toggleLang: string; menu: string };
	hero: Hero;
	about: About;
	skills: Skills;
	projects: Projects;
	experience: Experience;
	education: Education;
	awards: Awards;
	contact: Contact;
	game: Game;
	footer: string;
}
