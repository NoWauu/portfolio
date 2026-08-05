<script lang="ts">
	import { reveal } from '$lib/actions/motion';
	import { prefs } from '$lib/state/preferences.svelte';

	const awards = $derived(prefs.t.awards);
</script>

<article class="featured panel" use:reveal>
	<span class="watermark" aria-hidden="true">01</span>

	<div class="head">
		<span class="rank"><span aria-hidden="true">★</span> {awards.featured.rank}</span>
		<span class="place">{awards.featured.location}</span>
	</div>

	<h3>{awards.featured.event}</h3>
	<p class="desc">{awards.featured.desc}</p>

	<div class="tracks">
		{#each awards.featured.tracks as track (track.track)}
			<div class="track">
				<div class="track-head">
					<span class="track-name">{track.track}</span>
					<span class="badge {track.tier}">{track.place}</span>
				</div>
				<p class="note">{track.note}</p>
			</div>
		{/each}
	</div>
</article>

<div class="others" use:reveal={{ delay: 80 }}>
	{#each awards.others as other (other.name)}
		<div class="other panel">
			<span class="marker" aria-hidden="true">▹</span>
			<div>
				<p class="name">{other.name}</p>
				<p class="note">{other.note}</p>
			</div>
		</div>
	{/each}
</div>

<style>
	.featured {
		position: relative;
		border-color: var(--accent);
		border-radius: var(--r-lg);
		padding: clamp(22px, 4vw, 30px);
		overflow: hidden;
	}
	.watermark {
		position: absolute;
		top: 0;
		right: 0;
		font-family: var(--font-display);
		font-weight: 700;
		font-size: 160px;
		line-height: 1;
		color: var(--accent);
		opacity: 0.06;
		pointer-events: none;
		transform: translate(18%, -18%);
	}

	.head {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 12px;
		margin-bottom: 8px;
	}
	.rank {
		display: inline-flex;
		align-items: center;
		gap: 7px;
		padding: 5px 12px;
		border-radius: 100px;
		background: var(--accent);
		color: var(--accent-ink);
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 0.3px;
	}
	.place {
		font-size: 12.5px;
		color: var(--muted);
	}

	h3 {
		margin: 6px 0 4px;
		font-family: var(--font-display);
		font-weight: 700;
		font-size: clamp(26px, 4.5vw, 42px);
		letter-spacing: -0.02em;
		color: var(--text);
	}
	.desc {
		margin: 0 0 22px;
		max-width: 640px;
		font-size: 14px;
		line-height: 1.7;
		color: var(--dim);
	}

	.tracks {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
		gap: 12px;
	}
	.track {
		border: 1px solid var(--border-bright);
		border-radius: var(--r-md);
		background: var(--panel-2);
		padding: 18px 18px 16px;
	}
	.track-head {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 10px;
		margin-bottom: 12px;
	}
	.track-name {
		font-size: 12.5px;
		color: var(--dim);
		text-transform: uppercase;
		letter-spacing: 0.6px;
	}
	.badge {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-width: 34px;
		height: 34px;
		padding: 0 8px;
		border-radius: 8px;
		border: 1px solid transparent;
		font-family: var(--font-display);
		font-weight: 700;
		font-size: 15px;
	}
	.badge.gold {
		background: var(--accent);
		color: var(--accent-ink);
		border-color: var(--accent);
	}
	.badge.silver {
		background: var(--panel-3);
		color: var(--text);
		border-color: var(--border-bright);
	}
	.badge.ghost {
		background: transparent;
		color: var(--accent);
		border-color: var(--accent);
	}

	.note {
		margin: 0;
		font-size: 12.5px;
		line-height: 1.5;
		color: var(--muted);
	}

	.others {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
		gap: 16px;
		margin-top: 16px;
	}
	.other {
		display: flex;
		align-items: center;
		gap: 14px;
		padding: 18px 20px;
		transition: border-color 0.3s;
	}
	.other:hover {
		border-color: var(--border-bright);
	}
	.marker {
		font-family: var(--font-display);
		font-weight: 700;
		color: var(--accent);
		font-size: 18px;
	}
	.name {
		margin: 0;
		font-size: 14.5px;
		font-weight: 600;
		color: var(--text);
	}
	.other .note {
		font-size: 12px;
	}
</style>
