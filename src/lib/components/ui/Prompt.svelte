<script lang="ts">
	import { site } from '$lib/data';

	/** `teo@portfolio:~$` - the shell prompt used in the nav and the hero. */
	let { path = '~', showUser = true }: { path?: string; showUser?: boolean } = $props();
</script>

<span class="prompt">
	{#if showUser}<span class="user">{site.handle}@{site.host}</span>{/if}<span class="p">:</span
	><span class="path">{path}</span><span class="p">$</span>
</span>

<style>
	.prompt {
		white-space: nowrap;
	}
	.user {
		color: var(--muted);
	}
	.p {
		color: var(--muted);
	}
	.path {
		color: var(--accent);
	}
</style>
