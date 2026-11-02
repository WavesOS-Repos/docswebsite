// @ts-check
import { defineConfig } from 'astro/config';
import { rehypeDocs } from './src/lib/rehype-docs.mjs';

export default defineConfig({
	site: process.env.SITE_URL || 'http://localhost:8443',
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
