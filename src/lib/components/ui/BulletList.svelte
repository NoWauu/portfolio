<script lang="ts">
	/** Marker-prefixed list of lines, used by projects and experience. */
	let {
		items,
		marker = '▹',
		gap = 8
	}: { items: string[]; marker?: string; gap?: number } = $props();
</script>

<ul class="list" style="--gap: {gap}px">
	{#each items as item (item)}
		<li><span class="marker" aria-hidden="true">{marker}</span><span>{item}</span></li>
	{/each}
</ul>

<style>
	.list {
		display: flex;
		flex-direction: column;
		gap: var(--gap);
		margin: 0;
		padding: 0;
		list-style: none;
	}
	li {
		display: flex;
		gap: 9px;
		font-size: 13.5px;
		line-height: 1.55;
		color: var(--dim);
	}
	.marker {
		color: var(--accent);
		margin-top: 1px;
		flex-shrink: 0;
	}
</style>
