<script lang="ts">
	import { reveal } from '$lib/actions/motion';
	import { prefs } from '$lib/state/preferences.svelte';

	const education = $derived(prefs.t.education);
</script>

<div class="list">
	{#each education.list as entry, i (entry.id)}
		<article class="panel entry" use:reveal={{ delay: i * 60 }}>
			<p class="dates">{entry.dates}</p>
			<div>
				<h3>{entry.degree}</h3>
				<p class="school">{entry.school}</p>
				<p class="note">{entry.note}</p>
			</div>
		</article>
	{/each}
</div>

<style>
	.list {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	.entry {
		display: grid;
		grid-template-columns: 150px 1fr;
		gap: 20px;
		border-radius: 12px;
		padding: 22px clamp(20px, 3vw, 26px);
	}
	.dates {
		margin: 0;
		padding-top: 3px;
		font-size: 12.5px;
		color: var(--accent);
	}
	h3 {
		margin: 0 0 4px;
		font-family: var(--font-display);
		font-weight: 600;
		font-size: 18px;
		color: var(--text);
	}
	.school {
		margin: 0 0 10px;
		font-size: 13px;
		color: var(--dim);
	}
	.note {
		margin: 0;
		font-size: 12.5px;
		line-height: 1.6;
		color: var(--muted);
	}

	@media (max-width: 640px) {
		.entry {
			grid-template-columns: 1fr;
			gap: 10px;
		}
	}
</style>
