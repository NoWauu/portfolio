<script lang="ts">
	import { reveal } from '$lib/actions/motion';
	import { prefs } from '$lib/state/preferences.svelte';

	const education = $derived(prefs.t.education);
</script>

<!--
	Rail rather than stacked panels: Projects and Experience already use the
	card-list family, and three consecutive card lists read as one long section.
-->
<ol class="rail">
	{#each education.list as entry, i (entry.id)}
		<li use:reveal={{ delay: i * 60 }}>
			<span class="node" aria-hidden="true"></span>
			<p class="dates">{entry.dates}</p>
			<h3>{entry.degree}</h3>
			<p class="school">{entry.school}</p>
			<p class="note">{entry.note}</p>
		</li>
	{/each}
</ol>

<style>
	.rail {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	li {
		position: relative;
		padding: 0 0 clamp(28px, 4vw, 38px) clamp(24px, 4vw, 34px);
		border-left: 1px solid var(--border);
	}
	/* No trailing stub of rail below the final node. */
	li:last-child {
		padding-bottom: 0;
		border-left-color: transparent;
	}

	.node {
		position: absolute;
		left: -4.5px;
		top: 0;
		width: 9px;
		height: 9px;
		border-radius: 50%;
		background: var(--bg);
		border: 1px solid var(--accent);
	}
	li:first-child .node {
		background: var(--accent);
	}

	.dates {
		margin: 0 0 6px;
		font-size: 12.5px;
		color: var(--accent);
	}
	h3 {
		margin: 0 0 4px;
		font-family: var(--font-display);
		font-weight: 600;
		font-size: clamp(17px, 2.2vw, 20px);
		color: var(--text);
	}
	.school {
		margin: 0 0 8px;
		font-size: 13px;
		color: var(--dim);
	}
	.note {
		margin: 0;
		max-width: 62ch;
		font-size: 12.5px;
		line-height: 1.65;
		color: var(--muted);
	}
</style>
