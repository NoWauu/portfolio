<script lang="ts">
	/** Blinking block cursor. */
	let { height = '1.02em' }: { height?: string } = $props();
</script>

<span class="caret" style="--h: {height}" aria-hidden="true"></span>

<style>
	.caret {
		display: inline-block;
		width: 0.58ch;
		height: var(--h);
		background: var(--accent);
		margin-left: 0.12ch;
		vertical-align: -0.12em;
		border-radius: 1px;
		animation: blink 1.05s steps(1, end) infinite;
	}

	@media (prefers-reduced-motion: reduce) {
		.caret {
			animation: none;
		}
	}
</style>
