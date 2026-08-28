<script lang="ts">
	import TerminalWindow from './TerminalWindow.svelte';
	import { site } from '$lib/data';
	import { prefs } from '$lib/state/preferences.svelte';

	/** `key :: value` identity card sitting on the right of the split hero. */
	const info = $derived(prefs.t.hero.info);
</script>

<TerminalWindow title="{site.handle}@{site.host}: ~/neofetch">
	<div class="info">
		<p class="whoami">
			<span class="accent">{site.handle}</span><span class="at">@</span><span class="accent"
				>{site.host}</span
			>
		</p>
		<hr />
		{#each info as row (row.k)}
			<p class="row">
				<span class="key">{row.k}</span><span class="sep">::</span><span class="val">{row.v}</span>
			</p>
		{/each}
		<span class="swatches" aria-hidden="true">
			<i style="background: var(--red)"></i>
			<i style="background: var(--yellow)"></i>
			<i style="background: var(--accent)"></i>
			<i style="background: var(--border-bright)"></i>
			<i style="background: var(--dim)"></i>
		</span>
	</div>
</TerminalWindow>

<style>
	.info {
		display: flex;
		flex-direction: column;
		gap: 9px;
		font-size: 13px;
	}
	.info p {
		margin: 0;
	}
	.whoami .accent {
		color: var(--accent);
		font-weight: 600;
	}
	.at {
		color: var(--muted);
	}
	hr {
		height: 1px;
		width: 100%;
		border: 0;
		background: var(--border);
		margin: 1px 0;
	}
	.row {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}
	.key {
		min-width: 78px;
		color: var(--accent);
		font-weight: 600;
	}
	.sep {
		color: var(--muted);
	}
	.val {
		color: var(--text);
	}
	.swatches {
		display: flex;
		gap: 6px;
		margin-top: 6px;
	}
	.swatches i {
		width: 13px;
		height: 13px;
		border-radius: 50%;
	}
</style>
