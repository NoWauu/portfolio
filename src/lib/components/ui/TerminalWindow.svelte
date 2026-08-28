<script lang="ts">
	import type { Snippet } from 'svelte';
	import Dots from './Dots.svelte';

	/** Bordered panel with a title bar - the neofetch card, the explore modal, … */
	let {
		title,
		actions,
		children,
		flush = false
	}: {
		title?: string;
		/** Optional controls pinned to the right of the title bar. */
		actions?: Snippet;
		children: Snippet;
		/** Removes the body padding when the content brings its own. */
		flush?: boolean;
	} = $props();
</script>

<div class="window panel">
	<header class="bar">
		<Dots />
		{#if title}<span class="title">{title}</span>{/if}
		{#if actions}<span class="actions">{@render actions()}</span>{/if}
	</header>
	<div class="body" class:flush>
		{@render children()}
	</div>
</div>

<style>
	.window {
		overflow: hidden;
	}
	.bar {
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 10px 14px;
		border-bottom: 1px solid var(--border);
		background: var(--panel-3);
	}
	.title {
		font-size: 11.5px;
		color: var(--muted);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.actions {
		margin-left: auto;
		display: flex;
		align-items: center;
		gap: 6px;
	}
	.body {
		padding: clamp(18px, 4vw, 26px) clamp(16px, 4vw, 24px);
	}
	.body.flush {
		padding: 0;
	}
</style>
