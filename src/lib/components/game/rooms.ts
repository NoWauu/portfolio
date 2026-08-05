import { site } from '$lib/data';
import type { Content, SectionId } from '$lib/types';

export interface RoomLine {
	text: string;
	accent?: boolean;
}

/** The side-panel blurb shown when the player walks into a room. */
export function describeRoom(id: SectionId, t: Content): RoomLine[] {
	switch (id) {
		case 'about':
			return [{ text: t.about.paragraphs[0], accent: true }];
		case 'skills':
			return t.skills.groups.map((g) => ({ text: `${g.label}: ${g.items.join(', ')}` }));
		case 'projects':
			return t.projects.list.map((p) => ({ text: `▹ ${p.name} — ${p.desc[0]}` }));
		case 'experience':
			return t.experience.list.map((x) => ({ text: `${x.role} @ ${x.company} (${x.dates})` }));
		case 'education':
			return t.education.list.map((e) => ({ text: `${e.degree} — ${e.school}` }));
		case 'awards':
			return [
				{ text: `${t.awards.featured.event} — ${t.awards.featured.rank}`, accent: true },
				...t.awards.featured.tracks.map((track) => ({ text: `${track.track}: ${track.place}` }))
			];
		case 'contact':
			return [{ text: `${site.email} · github.com/${site.socials.github.handle.slice(1)}` }];
	}
}
