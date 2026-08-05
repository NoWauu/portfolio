<script lang="ts">
	/** The three macOS-style window dots used on every terminal chrome. */
	let { size = 9 }: { size?: number } = $props();
</script>

<span class="dots" style="--dot: {size}px" aria-hidden="true">
	<i class="red"></i><i class="yellow"></i><i class="green"></i>
</span>

<style>
	.dots {
		display: inline-flex;
		gap: 6px;
		flex-shrink: 0;
	}
	i {
		width: var(--dot);
		height: var(--dot);
		border-radius: 50%;
	}
	.red {
		background: var(--red);
	}
	.yellow {
		background: var(--yellow);
	}
	.green {
		background: var(--accent);
	}
</style>
