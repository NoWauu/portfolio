<script lang="ts">
	import { scrollspy } from '$lib/actions/motion';
	import ExploreGame from '$lib/components/game/ExploreGame.svelte';
	import Background from '$lib/components/layout/Background.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import Nav from '$lib/components/layout/Nav.svelte';
	import Hero from '$lib/components/sections/Hero.svelte';
	import Section from '$lib/components/ui/Section.svelte';
	import { sections } from '$lib/sections';
	import { prefs } from '$lib/state/preferences.svelte';

	let active = $state<string | null>(null);
	let gameOpen = $state(false);

	// Freeze the page behind the explore modal.
	$effect(() => {
		document.body.style.overflow = gameOpen ? 'hidden' : '';
		return () => {
			document.body.style.overflow = '';
		};
	});
</script>

<Background />
<Nav {active} onplay={() => (gameOpen = true)} />

<main id="top" use:scrollspy={(id) => (active = id)}>
	<Hero />

	{#each sections as section, i (section.id)}
		{@const SectionBody = section.component}
		<Section
			id={section.id}
			index={String(i + 1).padStart(2, '0')}
			title={prefs.t[section.id].title}
			command={section.command}
		>
			<SectionBody />
		</Section>
	{/each}

	<Footer />
</main>

{#if gameOpen}
	<ExploreGame onclose={() => (gameOpen = false)} />
{/if}

<style>
	main {
		position: relative;
		z-index: 1;
		max-width: var(--content-w);
		margin: 0 auto;
		padding: 0 var(--gutter);
	}
</style>
