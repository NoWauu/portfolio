<script lang="ts">
	import type { Snippet } from 'svelte';
	import { reveal, scramble } from '$lib/actions/motion';
	import type { SectionCommand } from '$lib/sections';

	/** Anchored page section with the `$ cat file` command line above its title. */
	let {
		id,
		title,
		command,
		children
	}: {
		id: string;
		title: string;
		command: SectionCommand;
		children: Snippet;
	} = $props();
</script>

<section {id}>
	<div class="head" use:reveal>
		<p class="cmd">
			<span class="sigil">$</span>
			<span class="bin">{command.bin}</span>{#if !command.glue}{' '}{/if}<span
				class="arg"
				use:scramble>{command.arg}</span
			>
		</p>
		<h2 class="heading title">{title}</h2>
	</div>

	{@render children()}
</section>

<style>
	section {
		padding: var(--section-y) 0;
	}
	.head {
		margin-bottom: clamp(24px, 4vw, 34px);
	}
	.cmd {
		margin: 0 0 12px;
		font-size: 13px;
		color: var(--dim);
	}
	.sigil {
		color: var(--muted);
	}
	.bin {
		color: var(--accent);
	}
	.arg {
		color: var(--dim);
	}
	.title {
		font-size: clamp(28px, 4.4vw, 46px);
		color: var(--text);
	}
</style>
