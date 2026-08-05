<script lang="ts">
	import Dots from '$lib/components/ui/Dots.svelte';
	import Prompt from '$lib/components/ui/Prompt.svelte';
	import { sections } from '$lib/sections';
	import { prefs } from '$lib/state/preferences.svelte';

	let { active = null, onplay }: { active?: string | null; onplay: () => void } = $props();

	let menuOpen = $state(false);

	const t = $derived(prefs.t);
	const links = $derived(sections.map((s) => ({ id: s.id, label: t.nav[s.id] })));
</script>

<svelte:window
	onkeydown={(e) => {
		if (e.key === 'Escape') menuOpen = false;
	}}
/>

<nav class:open={menuOpen}>
	<a class="brand" href="#top">
		<Dots size={11} />
		<span class="prompt"><Prompt /></span>
	</a>

	<div class="links">
		{#each links as link (link.id)}
			<a href="#{link.id}" class:active={active === link.id}>{link.label}</a>
		{/each}
	</div>

	<div class="controls">
		<button class="ctl lang" onclick={prefs.toggleLocale} aria-label={t.a11y.toggleLang}>
			<span class="on">{prefs.locale.toUpperCase()}</span><span class="slash">/</span><span
				>{prefs.nextLocale.toUpperCase()}</span
			>
		</button>

		<button class="ctl icon" onclick={prefs.toggleTheme} aria-label={t.a11y.toggleTheme}>
			{prefs.theme === 'dark' ? '◑' : '◐'}
		</button>

		<button class="ctl play" onclick={onplay}>
			<span class="tri" aria-hidden="true">▶</span><span class="play-label">{t.game.navLabel}</span>
		</button>

		<button
			class="ctl icon burger"
			onclick={() => (menuOpen = !menuOpen)}
			aria-label={t.a11y.menu}
			aria-expanded={menuOpen}
		>
			{menuOpen ? '✕' : '≡'}
		</button>
	</div>
</nav>

{#if menuOpen}
	<div class="sheet">
		{#each links as link (link.id)}
			<a href="#{link.id}" class:active={active === link.id} onclick={() => (menuOpen = false)}>
				<span class="sigil" aria-hidden="true">$</span>{link.label}
			</a>
		{/each}
	</div>
{/if}

<style>
	nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 50;
		height: var(--nav-h);
		display: flex;
		align-items: center;
		gap: 18px;
		padding: 0 var(--gutter);
		background: var(--nav-bg);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		border-bottom: 1px solid var(--border);
	}

	.brand {
		display: flex;
		align-items: center;
		gap: 8px;
		text-decoration: none;
		flex-shrink: 0;
	}
	.prompt {
		font-size: 12.5px;
		color: var(--dim);
		letter-spacing: 0.2px;
	}

	.links {
		margin-left: auto;
		display: flex;
		align-items: center;
		gap: 4px;
	}
	.links a {
		position: relative;
		padding: 7px 11px;
		font-size: 12.5px;
		color: var(--dim);
		text-decoration: none;
		transition: color 0.2s;
	}
	.links a:hover {
		color: var(--text);
	}
	.links a.active {
		color: var(--accent);
	}

	.controls {
		display: flex;
		align-items: center;
		gap: 8px;
		margin-left: 8px;
	}
	.controls:first-child {
		margin-left: auto;
	}

	.ctl {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 5px;
		height: 30px;
		padding: 0 10px;
		background: transparent;
		border: 1px solid var(--border-bright);
		border-radius: var(--r-sm);
		color: var(--dim);
		font-family: inherit;
		font-size: 11.5px;
		cursor: pointer;
		transition:
			border-color 0.2s,
			color 0.2s;
	}
	.ctl:hover {
		border-color: var(--accent);
		color: var(--accent);
	}
	.ctl.icon {
		width: 30px;
		padding: 0;
		font-size: 13px;
	}
	.lang .on {
		color: var(--accent);
		font-weight: 600;
	}
	.lang .slash {
		opacity: 0.4;
	}
	.play .tri {
		color: var(--accent);
	}

	.burger {
		display: none;
	}

	.sheet {
		position: fixed;
		top: var(--nav-h);
		left: 0;
		right: 0;
		z-index: 49;
		display: none;
		flex-direction: column;
		padding: 8px var(--gutter) 14px;
		background: var(--bg);
		border-bottom: 1px solid var(--border);
		box-shadow: 0 18px 30px -24px rgba(0, 0, 0, 0.8);
	}
	.sheet a {
		padding: 11px 4px;
		font-size: 14px;
		color: var(--dim);
		text-decoration: none;
		border-bottom: 1px solid var(--border);
	}
	.sheet a:last-child {
		border-bottom: 0;
	}
	.sheet a.active {
		color: var(--accent);
	}
	.sheet .sigil {
		color: var(--muted);
		margin-right: 8px;
	}

	@media (max-width: 900px) {
		.links {
			display: none;
		}
		.burger {
			display: flex;
		}
		.controls {
			margin-left: auto;
		}
		.sheet {
			display: flex;
		}
	}

	@media (max-width: 480px) {
		nav {
			gap: 10px;
		}
		.play-label {
			display: none;
		}
		.play {
			width: 30px;
			padding: 0;
		}
	}
</style>
