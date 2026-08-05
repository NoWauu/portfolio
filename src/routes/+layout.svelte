<script lang="ts">
	import '../app.css';
	import { site } from '$lib/data';
	import { prefs } from '$lib/state/preferences.svelte';

	let { children } = $props();

	// Mirrors theme/locale onto <html> and persists them.
	prefs.sync();

	const meta = $derived(prefs.t.meta);
</script>

<svelte:head>
	<title>{meta.title}</title>
	<meta name="description" content={meta.description} />
	<meta name="author" content={site.name} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={meta.title} />
	<meta property="og:description" content={meta.description} />
	<meta property="og:url" content={site.url} />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

{@render children()}
