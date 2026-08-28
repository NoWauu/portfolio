<script lang="ts">
	import { typewriter } from '$lib/actions/motion';
	import Caret from '$lib/components/ui/Caret.svelte';
	import Neofetch from '$lib/components/ui/Neofetch.svelte';
	import Prompt from '$lib/components/ui/Prompt.svelte';
	import { site } from '$lib/data';
	import { prefs } from '$lib/state/preferences.svelte';

	const hero = $derived(prefs.t.hero);
</script>

<section class="hero" data-hero>
	<div class="copy">
		<p class="cmdline">
			<Prompt />
			<span use:typewriter={{ text: 'whoami', speed: 55 }}>whoami</span>
		</p>

		<h1 class="name">{site.name}<Caret height="0.72em" /></h1>

		<p class="role">{hero.role}</p>
		<p class="intro">{hero.intro}</p>

		<div class="ctas">
			<a class="btn primary" href="#projects">
				<span class="sigil" aria-hidden="true">$</span>
				{hero.ctaWork}
				<span aria-hidden="true">→</span>
			</a>
			<a class="btn" href="#contact">{hero.ctaContact}</a>
			{#if site.resume}
				<a class="btn" href={site.resume} target="_blank" rel="noopener">
					{hero.ctaResume} <span aria-hidden="true">↓</span>
				</a>
			{/if}
		</div>
	</div>

	<div class="card">
		<Neofetch />
	</div>
</section>

<style>
	/*
	 * Asymmetric split. Four text elements on the left (prompt line, name,
	 * role + intro, CTAs) and the identity card on the right, so the whole
	 * hero clears the fold at 1440x900 instead of stacking past it.
	 */
	.hero {
		min-height: 100svh;
		display: grid;
		grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
		align-items: center;
		gap: clamp(28px, 5vw, 64px);
		padding: calc(var(--nav-h) + 42px) 0 60px;
	}

	.cmdline {
		margin: 0 0 14px;
		font-size: 13.5px;
		color: var(--dim);
	}

	/*
	 * Rendered as plain text, never blanked by JS: this is the LCP element and
	 * a typewriter on it would push the largest paint past a second.
	 *
	 * The caret is sized to cap height (0.72em) at the call site: at the
	 * default 1.02em it is taller than this line box and silently adds a
	 * second one, which reads as a stray gap under the name.
	 */
	.name {
		margin: 0 0 8px;
		font-family: var(--font-display);
		font-weight: 600;
		/* Scaled for the split column, not the full viewport: at 8vw the name
		 * filled the column edge to edge and pushed the caret onto its own line. */
		font-size: clamp(38px, 5.6vw, 76px);
		line-height: 0.96;
		letter-spacing: -0.02em;
		color: var(--text);
		overflow-wrap: anywhere;
	}

	.role {
		margin: 6px 0 0;
		font-family: var(--font-display);
		font-size: clamp(18px, 2.6vw, 28px);
		font-weight: 500;
		color: var(--accent);
	}
	.intro {
		margin: 22px 0 0;
		max-width: 48ch;
		font-size: 14.5px;
		line-height: 1.75;
		color: var(--dim);
	}

	.ctas {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
		margin-top: 32px;
	}
	.btn {
		display: inline-flex;
		align-items: center;
		gap: 9px;
		padding: 12px 20px;
		border: 1px solid var(--border-control);
		border-radius: var(--r-sm);
		background: transparent;
		color: var(--text);
		font-size: 13.5px;
		font-weight: 500;
		white-space: nowrap;
		text-decoration: none;
		transition:
			border-color 0.2s,
			color 0.2s,
			filter 0.2s,
			transform 0.12s;
	}
	.btn:hover {
		border-color: var(--accent);
		color: var(--accent);
	}
	.btn:active {
		transform: translateY(1px);
	}
	.btn.primary {
		background: var(--accent);
		border-color: var(--accent);
		color: var(--accent-ink);
		font-weight: 600;
	}
	.btn.primary:hover {
		filter: brightness(1.08);
		color: var(--accent-ink);
	}
	.sigil {
		opacity: 0.7;
	}

	@media (max-width: 900px) {
		.hero {
			grid-template-columns: 1fr;
			align-content: center;
			gap: 40px;
		}
	}
</style>
