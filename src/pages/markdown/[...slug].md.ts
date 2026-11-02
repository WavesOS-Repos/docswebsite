import type { APIRoute, GetStaticPaths } from 'astro';
import { docSourceUrl, type DocEntry } from '../../lib/docs';
import { indexablePages } from '../../lib/indexable-pages';

export const getStaticPaths: GetStaticPaths = async () => {
	const { docs } = await indexablePages();
	return docs.map((doc) => ({ params: { slug: doc.id }, props: { entry: doc } }));
};

export const GET: APIRoute = ({ props }) => {
	const entry = props.entry as DocEntry;
	return new Response(`Source: ${docSourceUrl(entry)}\n\n${(entry.body ?? '').trim()}\n`, {
		headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
	});
};
