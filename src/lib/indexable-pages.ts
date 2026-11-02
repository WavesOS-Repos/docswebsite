import { getCollection } from 'astro:content';
import { isStub } from './docs';
import { guidePages, resolveGuideSource } from './guide';

export async function indexablePages() {
	const docs = await getCollection('docs');
	const ids = docs.map((doc) => doc.id);
	const published = docs.filter((doc) => !isStub(doc));
	const guides = guidePages
		.filter((page) => {
			const id = resolveGuideSource(page.source, ids);
			const entry = docs.find((doc) => doc.id === id);
			return entry !== undefined && !isStub(entry);
		})
		.map((page) => ({ title: page.title, slug: page.slug, summary: page.summary }));
	return { docs: published, guides };
}
