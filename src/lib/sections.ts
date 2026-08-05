import type { Component } from 'svelte';
import About from './components/sections/About.svelte';
import Awards from './components/sections/Awards.svelte';
import Contact from './components/sections/Contact.svelte';
import Education from './components/sections/Education.svelte';
import Experience from './components/sections/Experience.svelte';
import Projects from './components/sections/Projects.svelte';
import Skills from './components/sections/Skills.svelte';
import type { SectionId } from './types';

/** The `$ cat about.md` line above a section title. */
export interface SectionCommand {
	bin: string;
	arg: string;
	/** `true` renders `./contact.sh` with no space after the binary. */
	glue?: boolean;
}

export interface SectionDef {
	id: SectionId;
	command: SectionCommand;
	component: Component;
}

/**
 * Single source of truth for the page order, the nav and the explore map.
 * To add a section: create the component, add its id to `SectionId`, add the
 * nav label + content to every locale file, then append an entry here.
 */
export const sections: SectionDef[] = [
	{ id: 'about', command: { bin: 'cat', arg: 'about.md' }, component: About },
	{ id: 'skills', command: { bin: 'ls', arg: '~/skills' }, component: Skills },
	{ id: 'projects', command: { bin: 'ls', arg: '~/projects' }, component: Projects },
	{ id: 'experience', command: { bin: 'cat', arg: 'experience.log' }, component: Experience },
	{ id: 'education', command: { bin: 'cat', arg: 'education.txt' }, component: Education },
	{ id: 'awards', command: { bin: 'sudo', arg: './show-wins' }, component: Awards },
	{ id: 'contact', command: { bin: './', arg: 'contact.sh', glue: true }, component: Contact }
];

export const sectionIds = sections.map((s) => s.id);
