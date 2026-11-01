import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { DOCS_DIR, docIdFromPath } from './lib/doc-paths.mjs';

const docs = defineCollection({
	loader: glob({
		pattern: '**/*.md',
		base: `./${DOCS_DIR}`,
		generateId: ({ entry }) => docIdFromPath(entry),
	}),
	schema: z.object({ title: z.string().optional() }).passthrough(),
});

export const collections = { docs };
