import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		// Vercel adapter. The whole site is prerendered (see src/routes/+layout.ts),
		// so it deploys as static output — no serverless functions, no cold starts.
		// `runtime` is pinned so the build works on any local Node version.
		adapter: adapter({ runtime: 'nodejs22.x' })
	}
};

export default config;
