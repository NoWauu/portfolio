<script lang="ts">
	import type { Snippet } from 'svelte';

	/**
	 * Small chip. `interactive` lights up on hover (skills),
	 * `muted` is the quieter tech-stack variant.
	 */
	let {
		variant = 'muted',
		children
	}: { variant?: 'muted' | 'interactive' | 'accent'; children: Snippet } = $props();
</script>

<span class="tag {variant}">{@render children()}</span>

<style>
	.tag {
		display: inline-block;
		border-radius: var(--r-sm);
		white-space: nowrap;
	}
	.muted {
		padding: 4px 10px;
		border: 1px solid var(--border);
		background: var(--panel-2);
		font-size: 11.5px;
		color: var(--muted);
	}
	.interactive {
		padding: 5px 11px;
		border: 1px solid var(--border-bright);
		font-size: 12.5px;
		color: var(--dim);
		transition:
			border-color 0.2s,
			color 0.2s,
			background-color 0.2s;
	}
	.interactive:hover {
		border-color: var(--accent);
		color: var(--accent);
		background: var(--accent-soft);
	}
	.accent {
		padding: 2px 8px;
		border: 1px solid var(--accent);
		border-radius: 100px;
		font-size: 11px;
		color: var(--accent);
	}
</style>
