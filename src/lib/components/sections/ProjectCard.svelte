<script lang="ts">
	import Tag from '$lib/components/ui/Tag.svelte';
	import BulletList from '$lib/components/ui/BulletList.svelte';
	import type { Project } from '$lib/types';

	let { project }: { project: Project } = $props();
</script>

<!--
	Two layouts, not one layout with a hole in it. A project without a
	screenshot renders text-forward instead of reserving a 290px column for a
	placeholder glyph, which is what an empty media panel actually looks like.
	Drop a file in `static/projects/` and set `image` to promote a card.
-->
<article class="card panel" class:with-media={!!project.image}>
	{#if project.image}
		<div class="media">
			<img src={project.image} alt="{project.name} screenshot" loading="lazy" decoding="async" />
		</div>
	{/if}

	<div class="body">
		<div class="meta">
			<Tag variant="accent">{project.type}</Tag>
			{#each project.links ?? [] as link (link.href)}
				<a class="link" href={link.href} target="_blank" rel="noopener noreferrer">
					{link.label} <span aria-hidden="true">↗</span>
				</a>
			{/each}
		</div>

		<h3>{project.name}</h3>

		<BulletList items={project.desc} marker="→" gap={7} />

		<div class="stack">
			{#each project.stack as tech (tech)}
				<Tag>{tech}</Tag>
			{/each}
		</div>
	</div>
</article>

<style>
	.card {
		display: block;
		border-radius: var(--r-md);
		overflow: hidden;
		transition:
			border-color 0.3s,
			transform 0.3s;
	}
	.card:hover {
		border-color: var(--border-bright);
		transform: translateY(-3px);
	}
	.card.with-media {
		display: grid;
		grid-template-columns: minmax(200px, 290px) 1fr;
	}

	.media {
		border-right: 1px solid var(--border);
		background: var(--panel-3);
		min-height: 220px;
	}
	.media img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.body {
		padding: clamp(18px, 3vw, 24px) clamp(18px, 3vw, 26px);
	}
	.meta {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 10px;
		margin-bottom: 10px;
	}
	.link {
		font-size: 11.5px;
		color: var(--dim);
		text-decoration: none;
		border-bottom: 1px dashed var(--border-control);
		transition: color 0.2s;
	}
	.link:hover {
		color: var(--accent);
		border-color: var(--accent);
	}

	h3 {
		margin: 0 0 14px;
		font-family: var(--font-display);
		font-weight: 600;
		font-size: clamp(18px, 2.4vw, 22px);
		color: var(--text);
	}

	.stack {
		display: flex;
		flex-wrap: wrap;
		gap: 7px;
		margin-top: 18px;
	}

	@media (max-width: 760px) {
		.card.with-media {
			grid-template-columns: 1fr;
		}
		.media {
			border-right: 0;
			border-bottom: 1px solid var(--border);
			min-height: 170px;
		}
	}
</style>
