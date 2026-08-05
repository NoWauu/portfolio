<script lang="ts">
	import { reveal } from '$lib/actions/motion';
	import { prefs } from '$lib/state/preferences.svelte';
	import ProjectCard from './ProjectCard.svelte';

	const projects = $derived(prefs.t.projects);
	const slug = $derived(prefs.locale === 'fr' ? 'projet' : 'project');
</script>

<div class="list">
	{#each projects.list as project, i (project.id)}
		<div use:reveal={{ delay: i * 60 }}>
			<ProjectCard {project} label="{slug}_{String(i + 1).padStart(2, '0')}" />
		</div>
	{/each}
</div>

<style>
	.list {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
</style>
