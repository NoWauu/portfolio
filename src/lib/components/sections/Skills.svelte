<script lang="ts">
	import { reveal } from '$lib/actions/motion';
	import Tag from '$lib/components/ui/Tag.svelte';
	import { prefs } from '$lib/state/preferences.svelte';

	const skills = $derived(prefs.t.skills);
	const pad = (n: number) => String(n).padStart(2, '0');
</script>

<div class="grid">
	{#each skills.groups as group, i (group.label)}
		<article class="panel group" use:reveal={{ delay: i * 60 }}>
			<header>
				<span class="icon" aria-hidden="true">{group.icon}</span>
				<h3>{group.label}</h3>
				<span class="count">{pad(group.items.length)}</span>
			</header>
			<div class="items">
				{#each group.items as item (item)}
					<Tag variant="interactive">{item}</Tag>
				{/each}
			</div>
		</article>
	{/each}
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 18px;
	}

	.group {
		padding: 20px 20px 22px;
		transition: border-color 0.3s;
	}
	.group:hover {
		border-color: var(--border-bright);
	}

	header {
		display: flex;
		align-items: center;
		gap: 9px;
		margin-bottom: 15px;
	}
	.icon {
		color: var(--accent);
	}
	h3 {
		margin: 0;
		font-size: 13.5px;
		font-weight: 600;
		color: var(--text);
	}
	.count {
		margin-left: auto;
		font-size: 11px;
		color: var(--muted);
	}

	.items {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}
</style>
