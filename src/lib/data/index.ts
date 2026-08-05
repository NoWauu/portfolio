import type { Content, Locale } from '$lib/types';
import { en } from './en';
import { fr } from './fr';

/** Add a language: create `xx.ts` satisfying `Content`, then register it here. */
export const content: Record<Locale, Content> = { en, fr };

export const locales = Object.keys(content) as Locale[];

export { site } from './site';
