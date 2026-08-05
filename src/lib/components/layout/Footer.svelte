<script lang="ts">
	import Caret from '$lib/components/ui/Caret.svelte';
	import { site } from '$lib/data';
	import { prefs } from '$lib/state/preferences.svelte';
</script>

<footer>
	<span><span class="sigil" aria-hidden="true">$</span> {prefs.t.footer}</span>
	<span>© {site.since} · <span class="name">{site.name}</span><Caret height="0.9em" /></span>
</footer>

<style>
	footer {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 10px;
		padding: 26px 0 48px;
		border-top: 1px solid var(--border);
		font-size: 12px;
		color: var(--muted);
	}
	.sigil {
		color: var(--accent);
	}
	.name {
		color: var(--dim);
	}
</style>
