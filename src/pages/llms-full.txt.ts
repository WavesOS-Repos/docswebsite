import type { APIRoute } from 'astro';
import { docSourceUrl, docTitle } from '../lib/docs';
import { indexablePages } from '../lib/indexable-pages';

export const GET: APIRoute = async () => {
	const { docs } = await indexablePages();
	const pages = docs.map(
		(doc) => `## ${docTitle(doc)}\n\nSource: ${docSourceUrl(doc)}\n\n${(doc.body ?? '').trim()}\n`,
	);
	const body = ['# WavesOS Docs', '', 'Full text of every published documentation page.', '', ...pages].join('\n---\n\n');
	return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
