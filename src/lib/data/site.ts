/**
 * Language-independent identity: names, links, files.
 * Translated copy lives in `en.ts` / `fr.ts`.
 */
export const site = {
	name: 'Téo Lemesle',
	/** Shown as the shell prompt user, e.g. `teo@portfolio:~$`. */
	handle: 'teo',
	host: 'portfolio',
	url: 'https://teolemesle.vercel.app',
	email: 'teo.lemesle.pro@gmail.com',
	phone: { display: '+33 6 29 94 70 94', href: 'tel:+33629947094' },
	location: 'Paris, France',
	/**
	 * Résumé link. Drop the PDF in `static/cv/` and set this to
	 * `/cv/Teo_Lemesle.pdf` — the hero button appears on its own.
	 * `null` hides the button.
	 */
	resume: null as string | null,
	socials: {
		github: { handle: '@NoWauu', url: 'https://github.com/NoWauu' },
		linkedin: { handle: 'téo-lemesle', url: 'https://www.linkedin.com/in/téo-lemesle' }
	},
	/** © year in the footer. */
	since: 2026
} as const;
