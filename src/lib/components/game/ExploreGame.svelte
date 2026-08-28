<script lang="ts">
	import { onMount } from 'svelte';
	import TerminalWindow from '$lib/components/ui/TerminalWindow.svelte';
	import { site } from '$lib/data';
	import { prefs } from '$lib/state/preferences.svelte';
	import type { SectionId } from '$lib/types';
	import { describeRoom } from './rooms';
	import { directionFromKey, Explorer, MAP, ROOMS, type Direction, type Palette } from './engine';

	let { onclose }: { onclose: () => void } = $props();

	const t = $derived(prefs.t);

	const explorer = new Explorer();
	let canvas = $state<HTMLCanvasElement | null>(null);
	let dialog = $state<HTMLElement | null>(null);
	let visited = $state<SectionId[]>([]);
	let active = $state<SectionId | null>(null);

	const lines = $derived(active ? describeRoom(active, t) : []);
	const allVisited = $derived(visited.length === ROOMS.length);

	function palette(): Palette {
		const s = getComputedStyle(document.documentElement);
		const v = (name: string, fallback: string) => s.getPropertyValue(name).trim() || fallback;
		return {
			accent: v('--accent', '#54e08c'),
			accentInk: v('--accent-ink', '#04130a'),
			border: v('--border-bright', '#2c3b2e'),
			text: v('--text', '#d3ddd1'),
			muted: v('--muted', '#5c6a58'),
			panel: v('--panel-2', '#131b15')
		};
	}

	function onKeyDown(event: KeyboardEvent) {
		if (event.key === 'Escape') return onclose();
		const dir = directionFromKey(event.key);
		if (!dir) return;
		if (event.key.startsWith('Arrow')) event.preventDefault();
		explorer.press(dir, true);
	}

	function onKeyUp(event: KeyboardEvent) {
		const dir = directionFromKey(event.key);
		if (dir) explorer.press(dir, false);
	}

	function hold(dir: Direction, down: boolean) {
		return (event: PointerEvent) => {
			event.preventDefault();
			explorer.press(dir, down);
		};
	}

	onMount(() => {
		explorer.reset();
		dialog?.focus();

		let frame = requestAnimationFrame(function loop() {
			const next = explorer.step();
			if (next !== undefined) {
				active = next;
				if (next && !visited.includes(next)) visited = [...visited, next];
			}

			const ctx = canvas?.getContext('2d');
			if (ctx) {
				explorer.draw(ctx, palette(), {
					visited: new Set(visited),
					active,
					label: (key) => t[key].title
				});
			}
			frame = requestAnimationFrame(loop);
		});

		return () => cancelAnimationFrame(frame);
	});

	const dpad: { dir: Direction; glyph: string; cell: string }[] = [
		{ dir: 'up', glyph: '▲', cell: 'up' },
		{ dir: 'left', glyph: '◀', cell: 'left' },
		{ dir: 'down', glyph: '▼', cell: 'down' },
		{ dir: 'right', glyph: '▶', cell: 'right' }
	];
</script>

<svelte:window onkeydown={onKeyDown} onkeyup={onKeyUp} />

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
<div class="backdrop" role="presentation" onclick={onclose}>
	<div
		class="shell"
		role="dialog"
		aria-modal="true"
		aria-label={t.game.title}
		tabindex="-1"
		bind:this={dialog}
		onclick={(e) => e.stopPropagation()}
	>
		<TerminalWindow title="{site.handle}@{site.host}: ~/explore" flush>
			{#snippet actions()}
				<button class="close" onclick={onclose} aria-label={t.game.close}>✕</button>
			{/snippet}

			<div class="layout">
				<div class="stage">
					<canvas bind:this={canvas} width={MAP.width} height={MAP.height}></canvas>

					<div class="overlay">
						<span class="hint">{t.game.hint}</span>
						<div class="dpad">
							{#each dpad as key (key.dir)}
								<button
									class="pad {key.cell}"
									aria-label={key.dir}
									onpointerdown={hold(key.dir, true)}
									onpointerup={hold(key.dir, false)}
									onpointerleave={hold(key.dir, false)}
									onpointercancel={hold(key.dir, false)}
								>
									{key.glyph}
								</button>
							{/each}
						</div>
					</div>
				</div>

				<aside class="panel-side">
					<p class="progress">
						{t.game.progress}
						<span class="count">{visited.length}/{ROOMS.length}</span>
					</p>

					{#if active}
						<div>
							<p class="room">{t[active].title}</p>
							{#each lines as line, i (i)}
								<p class="line" class:accent={line.accent}>{line.text}</p>
							{/each}
						</div>
					{/if}

					{#if allVisited}
						<p class="done">{t.game.done}</p>
					{/if}
				</aside>
			</div>
		</TerminalWindow>
	</div>
</div>

<style>
	.backdrop {
		position: fixed;
		inset: 0;
		z-index: 200;
		display: grid;
		place-items: center;
		padding: clamp(12px, 3vw, 24px);
		background: color-mix(in srgb, var(--bg) 72%, transparent);
		backdrop-filter: blur(6px);
	}
	.shell {
		width: min(900px, 100%);
		height: min(620px, 88svh);
		box-shadow: var(--shadow-lg);
		border-radius: var(--r-lg);
		outline: none;
	}
	.shell :global(.window) {
		height: 100%;
		display: flex;
		flex-direction: column;
		border-radius: var(--r-lg);
	}
	.shell :global(.body) {
		flex: 1;
		min-height: 0;
	}

	.close {
		background: transparent;
		border: 0;
		color: var(--muted);
		font-family: inherit;
		font-size: 13px;
		cursor: pointer;
		padding: 2px 6px;
	}
	.close:hover {
		color: var(--accent);
	}

	.layout {
		display: flex;
		height: 100%;
		min-height: 0;
	}

	.stage {
		position: relative;
		flex: 1;
		min-width: 0;
		display: grid;
		place-items: center;
		background: var(--panel-3);
	}
	/* Letterboxed so the map keeps its aspect ratio - no squashed rooms. */
	canvas {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: contain;
		touch-action: none;
	}

	.overlay {
		position: absolute;
		inset: auto 10px 10px 10px;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		gap: 10px;
		pointer-events: none;
	}
	.hint {
		font-size: 11px;
		color: var(--muted);
		background: var(--nav-bg);
		padding: 3px 8px;
		border-radius: 4px;
	}

	.dpad {
		display: grid;
		grid-template-columns: repeat(3, 32px);
		grid-template-rows: repeat(2, 32px);
		grid-template-areas:
			'. up .'
			'left down right';
		gap: 3px;
		pointer-events: auto;
	}
	.pad {
		background: var(--panel);
		border: 1px solid var(--border-control);
		border-radius: var(--r-sm);
		color: var(--accent);
		font-size: 13px;
		cursor: pointer;
		touch-action: none;
	}
	.pad:active {
		background: var(--accent-soft);
	}
	.up {
		grid-area: up;
	}
	.down {
		grid-area: down;
	}
	.left {
		grid-area: left;
	}
	.right {
		grid-area: right;
	}

	.panel-side {
		width: 240px;
		flex-shrink: 0;
		border-left: 1px solid var(--border);
		padding: 16px;
		display: flex;
		flex-direction: column;
		gap: 12px;
		overflow-y: auto;
	}
	.progress {
		margin: 0;
		font-size: 11.5px;
		color: var(--muted);
		letter-spacing: 0.3px;
	}
	.count {
		color: var(--accent);
		font-weight: 600;
	}
	.room {
		margin: 0 0 8px;
		font-size: 13.5px;
		font-weight: 600;
		color: var(--accent);
	}
	.line {
		margin: 0 0 5px;
		font-size: 12.5px;
		line-height: 1.55;
		color: var(--dim);
	}
	.line.accent {
		color: var(--text);
	}
	.done {
		margin: auto 0 0;
		padding: 10px 12px;
		border: 1px solid var(--accent);
		border-radius: var(--r-md);
		background: var(--accent-soft);
		font-size: 12.5px;
		color: var(--accent);
		font-weight: 600;
	}

	@media (max-width: 720px), (max-height: 560px) {
		.layout {
			flex-direction: column;
		}
		.stage {
			flex: 1 1 55%;
			min-height: 220px;
		}
		.panel-side {
			width: auto;
			border-left: 0;
			border-top: 1px solid var(--border);
			flex: 1 1 45%;
		}
	}
</style>
