<script lang="ts">
	import { reveal } from '$lib/actions/motion';
	import { prefs } from '$lib/state/preferences.svelte';

	const about = $derived(prefs.t.about);
</script>

<div class="prose" use:reveal>
	{#each about.paragraphs as paragraph, i (i)}
		<p class:lead={i === 0}>{paragraph}</p>
	{/each}
</div>

<style>
	p {
		margin: 0 0 16px;
		font-size: 15px;
		line-height: 1.85;
		max-width: 65ch;
		color: var(--dim);
	}
	p.lead {
		color: var(--text);
	}
	p:last-child {
		margin-bottom: 0;
	}
</style>
