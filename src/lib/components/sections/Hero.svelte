<script lang="ts">
	import { onMount } from 'svelte';
	import { prefersReducedMotion, typewriter } from '$lib/actions/motion';
	import Caret from '$lib/components/ui/Caret.svelte';
	import Prompt from '$lib/components/ui/Prompt.svelte';
	import TerminalWindow from '$lib/components/ui/TerminalWindow.svelte';
	import { site } from '$lib/data';
	import { prefs } from '$lib/state/preferences.svelte';

	const hero = $derived(prefs.t.hero);

	/**
	 * `idle` is what the server renders (everything visible, no JS required).
	 * On mount we switch to `typing` — which hides the staggered block — and
	 * land on `done` once the name has finished typing.
	 */
	let phase = $state<'idle' | 'typing' | 'done'>('idle');

	onMount(() => {
		phase = prefersReducedMotion() ? 'done' : 'typing';
	});
</script>

<section class="hero" data-hero>
	<p class="status"><span class="pulse" aria-hidden="true"></span>{hero.status}</p>

	<p class="cmdline">
		<Prompt />
		<span use:typewriter={{ text: 'whoami', speed: 55 }}>whoami</span>
	</p>

	<h1 class="name">
		<span
			use:typewriter={{
				text: site.name,
				speed: 70,
				start: 500,
				oncomplete: () => (phase = 'done')
			}}>{site.name}</span
		><Caret />
	</h1>

	<div class="stagger" class:hidden={phase === 'typing'}>
		<p class="role" style="--i: 0">{hero.role}</p>
		<p class="sub" style="--i: 1">{hero.sub}</p>
		<p class="intro" style="--i: 2">{hero.intro}</p>

		<div class="ctas" style="--i: 3">
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

		<div class="neofetch" style="--i: 4">
			<TerminalWindow title="{site.handle}@{site.host}: ~ — neofetch">
				<div class="info">
					<p class="whoami">
						<span class="accent">{site.handle}</span><span class="at">@</span><span class="accent"
							>{site.host}</span
						>
					</p>
					<hr />
					{#each hero.info as row (row.k)}
						<p class="row">
							<span class="key">{row.k}</span><span class="sep">::</span><span class="val"
								>{row.v}</span
							>
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
		</div>
	</div>
</section>

<style>
	.hero {
		min-height: 100svh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: calc(var(--nav-h) + 42px) 0 60px;
	}

	.status {
		display: inline-flex;
		align-self: flex-start;
		align-items: center;
		gap: 7px;
		margin: 0 0 22px;
		padding: 5px 11px;
		border: 1px solid var(--border-bright);
		border-radius: 100px;
		font-size: 11.5px;
		color: var(--dim);
	}
	.pulse {
		width: 7px;
		height: 7px;
		border-radius: 50%;
		background: var(--accent);
		box-shadow: 0 0 9px var(--accent);
		flex-shrink: 0;
	}

	.cmdline {
		margin: 0 0 14px;
		font-size: 13.5px;
		color: var(--dim);
	}

	.name {
		margin: 0 0 8px;
		font-family: var(--font-display);
		font-weight: 600;
		font-size: clamp(40px, 8vw, 92px);
		line-height: 0.96;
		letter-spacing: -0.02em;
		color: var(--text);
		overflow-wrap: anywhere;
	}

	/* Staggered entrance — each child declares its own `--i` index. */
	.stagger > * {
		transition:
			opacity 0.6s ease,
			transform 0.6s ease;
		transition-delay: calc(var(--i) * 110ms);
	}
	.stagger.hidden > * {
		opacity: 0;
		transform: translateY(14px);
		transition-delay: 0ms;
	}

	.role {
		margin: 6px 0 0;
		font-family: var(--font-display);
		font-size: clamp(18px, 2.6vw, 28px);
		font-weight: 500;
		color: var(--accent);
	}
	.sub {
		margin: 6px 0 0;
		font-size: 14px;
		color: var(--dim);
	}
	.intro {
		margin: 22px 0 0;
		max-width: 560px;
		font-size: 14.5px;
		line-height: 1.75;
		color: var(--dim);
	}

	.ctas {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
		margin-top: 28px;
	}
	.btn {
		display: inline-flex;
		align-items: center;
		gap: 9px;
		padding: 12px 20px;
		border: 1px solid var(--border-bright);
		border-radius: 6px;
		background: transparent;
		color: var(--text);
		font-size: 13.5px;
		font-weight: 500;
		text-decoration: none;
		transition:
			border-color 0.2s,
			color 0.2s,
			filter 0.2s;
	}
	.btn:hover {
		border-color: var(--accent);
		color: var(--accent);
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
		opacity: 0.6;
	}

	.neofetch {
		display: block;
		margin-top: 48px;
	}
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
		gap: 10px;
	}
	.key {
		min-width: 88px;
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
