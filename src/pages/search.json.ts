import { getCollection } from 'astro:content';
import { docTitle, extractHeadings, isStub, sourcePath } from '../lib/docs';
import { docHref } from '../lib/doc-paths.mjs';
import { guidePages } from '../lib/guide';

export async function GET() {
	const docs = await getCollection('docs');

	const guide = guidePages.map((page) => ({
		title: page.title,
		href: `/guide/${page.slug}`,
		section: 'User guide',
		headings: [] as string[],
	}));

	const deep = docs
		.filter((doc) => !isStub(doc))
		.map((doc) => {
			const folders = sourcePath(doc).split('/').slice(0, -1);
			return {
				title: docTitle(doc),
				href: docHref(doc.id),
				section: folders.join(' / ') || 'Top level',
				headings: extractHeadings(doc.body ?? ''),
			};
		});

	return new Response(JSON.stringify([...guide, ...deep]), {
		headers: { 'Content-Type': 'application/json; charset=utf-8' },
	});
}
