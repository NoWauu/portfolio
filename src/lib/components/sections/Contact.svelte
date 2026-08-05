<script lang="ts">
	import { reveal } from '$lib/actions/motion';
	import { site } from '$lib/data';
	import { prefs } from '$lib/state/preferences.svelte';

	const contact = $derived(prefs.t.contact);

	/** Tiles are data-driven so adding a channel is a one-line change. */
	const tiles = $derived([
		{
			label: contact.labels.github,
			value: site.socials.github.handle,
			href: site.socials.github.url
		},
		{
			label: contact.labels.linkedin,
			value: site.socials.linkedin.handle,
			href: site.socials.linkedin.url
		},
		{ label: contact.labels.phone, value: site.phone.display, href: site.phone.href },
		{ label: contact.labels.location, value: site.location, href: null }
	]);
</script>

<div class="panel card" use:reveal>
	<div class="top">
		<p class="blurb">{contact.blurb}</p>
		<a class="mail" href="mailto:{site.email}">
			<span class="arrow" aria-hidden="true">→</span>{site.email}
		</a>
	</div>

	<div class="tiles">
		{#each tiles as tile (tile.label)}
			{#if tile.href}
				<a
					class="tile"
					href={tile.href}
					target={tile.href.startsWith('http') ? '_blank' : null}
					rel="noopener noreferrer"
				>
					<span class="label">// {tile.label}</span>
					<span class="value">{tile.value}</span>
				</a>
			{:else}
				<div class="tile">
					<span class="label">// {tile.label}</span>
					<span class="value">{tile.value}</span>
				</div>
			{/if}
		{/each}
	</div>
</div>

<style>
	.card {
		border-radius: var(--r-lg);
		overflow: hidden;
	}
	.top {
		padding: clamp(22px, 4vw, 32px) clamp(20px, 4vw, 30px);
		border-bottom: 1px solid var(--border);
	}
	.blurb {
		margin: 0 0 20px;
		max-width: 520px;
		font-size: 15px;
		line-height: 1.7;
		color: var(--dim);
	}
	.mail {
		display: inline-flex;
		align-items: center;
		gap: 11px;
		font-family: var(--font-display);
		font-weight: 600;
		font-size: clamp(17px, 3.4vw, 32px);
		color: var(--text);
		text-decoration: none;
		word-break: break-word;
		transition: color 0.2s;
	}
	.mail:hover {
		color: var(--accent);
	}
	.arrow {
		color: var(--accent);
	}

	.tiles {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
	}
	.tile {
		display: block;
		padding: 18px 20px;
		border-right: 1px solid var(--border);
		border-top: 1px solid transparent;
		text-decoration: none;
		transition: background 0.2s;
	}
	.tile:last-child {
		border-right: 0;
	}
	a.tile:hover {
		background: var(--panel-3);
	}
	.label {
		display: block;
		font-size: 11px;
		color: var(--muted);
		margin-bottom: 5px;
	}
	.value {
		display: block;
		font-size: 13px;
		color: var(--text);
	}

	@media (max-width: 640px) {
		.tile {
			border-right: 0;
			border-top-color: var(--border);
		}
		.tile:first-child {
			border-top-color: transparent;
		}
	}
</style>
