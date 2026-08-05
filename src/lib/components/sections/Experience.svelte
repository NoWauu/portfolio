<script lang="ts">
	import { reveal } from '$lib/actions/motion';
	import BulletList from '$lib/components/ui/BulletList.svelte';
	import Tag from '$lib/components/ui/Tag.svelte';
	import { prefs } from '$lib/state/preferences.svelte';

	const experience = $derived(prefs.t.experience);
</script>

<div class="list">
	{#each experience.list as job, i (job.id)}
		<article class="panel job" use:reveal={{ delay: i * 60 }}>
			<header>
				<h3>{job.role}</h3>
				<span class="company">@ {job.company}</span>
			</header>
			<p class="when">
				<span>{job.dates}</span><span aria-hidden="true">·</span><span>{job.location}</span>
			</p>

			<BulletList items={job.desc} />

			<div class="stack">
				{#each job.stack as tech (tech)}
					<Tag>{tech}</Tag>
				{/each}
			</div>
		</article>
	{/each}
</div>

<style>
	.list {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	.job {
		border-radius: 12px;
		padding: clamp(20px, 3vw, 26px) clamp(20px, 3vw, 28px);
	}
	header {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		gap: 10px;
		margin-bottom: 6px;
	}
	h3 {
		margin: 0;
		font-family: var(--font-display);
		font-weight: 600;
		font-size: clamp(18px, 2.4vw, 21px);
		color: var(--text);
	}
	.company {
		color: var(--accent);
		font-size: 14px;
		font-weight: 600;
	}
	.when {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		margin: 0 0 18px;
		font-size: 12.5px;
		color: var(--muted);
	}
	.stack {
		display: flex;
		flex-wrap: wrap;
		gap: 7px;
		margin-top: 18px;
	}
</style>
