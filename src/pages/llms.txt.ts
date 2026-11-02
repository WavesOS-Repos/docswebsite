import type { APIRoute } from 'astro';
import { docSummary, docTitle, folderLabel, sourcePath } from '../lib/docs';
import { markdownHref } from '../lib/doc-paths.mjs';
import { indexablePages } from '../lib/indexable-pages';

export const GET: APIRoute = async ({ site }) => {
	const origin = site?.origin ?? '';
	const { docs, guides } = await indexablePages();

	const sections = new Map<string, string[]>();
	for (const doc of docs) {
		const folder = sourcePath(doc).split('/').slice(0, -1).map(folderLabel).join(' / ') || 'General';
		const summary = docSummary(doc);
		const line = `- [${docTitle(doc)}](${origin}${markdownHref(doc.id)})${summary ? `: ${summary}` : ''}`;
		sections.set(folder, [...(sections.get(folder) ?? []), line]);
	}

	const guideLines = guides.map((guide) => `- [${guide.title}](${origin}/guide/${guide.slug}): ${guide.summary}`);
	const docLines = [...sections].flatMap(([folder, lines]) => [`### ${folder}`, ...lines, '']);

	const body = [
		'# WavesOS Docs',
		'',
		'> Documentation for WavesOS and WavesHyprland: installation, keybindings, theming, and every file in the stack. Each documentation page is also available as Markdown at the links below.',
		'',
		'## Guide',
		...guideLines,
		'',
		'## Documentation',
		...docLines,
		'## Optional',
		`- [Full documentation in one file](${origin}/llms-full.txt)`,
		`- [Search index](${origin}/search.json)`,
		`- [Sitemap](${origin}/sitemap.xml)`,
		'',
	].join('\n');

	return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
