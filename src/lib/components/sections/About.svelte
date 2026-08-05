<script lang="ts">
	import { reveal } from '$lib/actions/motion';
	import { prefs } from '$lib/state/preferences.svelte';

	const about = $derived(prefs.t.about);
</script>

<div class="grid" use:reveal>
	<div class="prose">
		{#each about.paragraphs as paragraph, i (i)}
			<p class:lead={i === 0}>{paragraph}</p>
		{/each}
	</div>

	<aside class="panel facts">
		<p class="mono-label">// quick_facts</p>
		<ul>
			{#each about.facts as fact (fact.label)}
				<li>
					<span class="marker" aria-hidden="true">▹</span>
					<span>
						<span class="value">{fact.value}</span>
						<span class="label">{fact.label}</span>
					</span>
				</li>
			{/each}
		</ul>
	</aside>
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: 1.5fr 1fr;
		gap: clamp(20px, 3vw, 34px);
		align-items: start;
	}

	p {
		margin: 0 0 16px;
		font-size: 15px;
		line-height: 1.85;
		color: var(--dim);
	}
	p.lead {
		color: var(--text);
	}
	p:last-child {
		margin-bottom: 0;
	}

	.facts {
		padding: 20px;
	}
	.facts ul {
		margin: 14px 0 0;
		padding: 0;
		list-style: none;
	}
	.facts li {
		display: flex;
		align-items: flex-start;
		gap: 10px;
		padding: 8px 0;
		border-bottom: 1px solid var(--border);
	}
	.facts li:last-child {
		border-bottom: 0;
		padding-bottom: 0;
	}
	.marker {
		color: var(--accent);
		font-size: 13px;
		margin-top: 1px;
	}
	.value {
		display: block;
		font-size: 13.5px;
		color: var(--text);
	}
	.label {
		display: block;
		font-size: 11.5px;
		color: var(--muted);
	}

	@media (max-width: 860px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}
</style>
