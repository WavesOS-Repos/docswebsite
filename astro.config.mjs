// @ts-check
import { defineConfig } from 'astro/config';
import { rehypeDocs } from './src/lib/rehype-docs.mjs';

export default defineConfig({
	output: 'static',
	markdown: {
		shikiConfig: { theme: 'github-dark' },
		rehypePlugins: [rehypeDocs],
	},
	vite: {
		optimizeDeps: {
			include: ['lenis'],
		},
	},
});
