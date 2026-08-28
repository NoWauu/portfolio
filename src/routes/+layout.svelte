<script lang="ts">
	import '../app.css';
	import { site } from '$lib/data';
	import { prefs } from '$lib/state/preferences.svelte';

	let { children } = $props();

	// Mirrors theme/locale onto <html> and persists them.
	prefs.sync();

	const meta = $derived(prefs.t.meta);
	const ogImage = `${site.url}/og.png`;
</script>

<svelte:head>
	<title>{meta.title}</title>
	<meta name="description" content={meta.description} />
	<meta name="author" content={site.name} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={meta.title} />
	<meta property="og:description" content={meta.description} />
	<meta property="og:url" content={site.url} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content={meta.title} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content={ogImage} />
</svelte:head>

{@render children()}
