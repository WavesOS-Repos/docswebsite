import type { APIRoute } from 'astro';
import { docHref } from '../lib/doc-paths.mjs';
import { indexablePages } from '../lib/indexable-pages';

export const GET: APIRoute = async ({ site }) => {
	const origin = site?.origin ?? '';
	const { docs, guides } = await indexablePages();
	const paths = new Set([
		'/',
		...guides.map((guide) => `/guide/${guide.slug}`),
		...docs.map((doc) => docHref(doc.id)),
	]);
	const urls = [...paths].map((path) => `  <url><loc>${origin}${path}</loc></url>`).join('\n');
	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
		{ headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
	);
};
