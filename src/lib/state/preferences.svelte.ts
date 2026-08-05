import { browser } from '$app/environment';
import { content, locales } from '$lib/data';
import type { Content, Locale, Theme } from '$lib/types';

/** localStorage keys — kept in sync with the inline boot script in `src/app.html`. */
const KEYS = { theme: 'tl:theme', locale: 'tl:locale' } as const;

const THEMES: readonly Theme[] = ['dark', 'light'];

function restore<T extends string>(key: string, allowed: readonly T[], fallback: T): T {
	if (!browser) return fallback;
	try {
		const stored = localStorage.getItem(key) as T | null;
		if (stored && allowed.includes(stored)) return stored;
	} catch {
		/* private mode / storage disabled */
	}
	return fallback;
}

function systemTheme(): Theme {
	if (!browser) return 'dark';
	return matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function systemLocale(): Locale {
	if (!browser) return 'en';
	return navigator.language?.toLowerCase().startsWith('fr') ? 'fr' : 'en';
}

/**
 * Theme + locale, persisted to localStorage and mirrored onto <html>.
 * `prefs.t` is the translated content bundle — use it everywhere instead of
 * importing a language file directly.
 */
class Preferences {
	theme = $state<Theme>(restore(KEYS.theme, THEMES, systemTheme()));
	locale = $state<Locale>(restore(KEYS.locale, locales, systemLocale()));

	get t(): Content {
		return content[this.locale];
	}

	/** The locale the toggle would switch to. */
	get nextLocale(): Locale {
		return locales[(locales.indexOf(this.locale) + 1) % locales.length];
	}

	toggleTheme = () => {
		this.theme = this.theme === 'dark' ? 'light' : 'dark';
	};

	toggleLocale = () => {
		this.locale = this.nextLocale;
	};

	/** Called once from the root layout: syncs <html> attributes and storage. */
	sync() {
		$effect(() => {
			document.documentElement.dataset.theme = this.theme;
			try {
				localStorage.setItem(KEYS.theme, this.theme);
			} catch {
				/* ignore */
			}
		});
		$effect(() => {
			document.documentElement.lang = this.locale;
			try {
				localStorage.setItem(KEYS.locale, this.locale);
			} catch {
				/* ignore */
			}
		});
	}
}

export const prefs = new Preferences();
