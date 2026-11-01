import type { CollectionEntry } from 'astro:content';
import { docHref } from './doc-paths.mjs';

export type DocEntry = CollectionEntry<'docs'>;

export interface TreeNode {
	label: string;
	href?: string;
	stub?: boolean;
	children: TreeNode[];
}

export interface Heading {
	depth: number;
	slug: string;
	text: string;
}

const DOCS_PREFIX = 'content/wavesosdocs/';

export function sourcePath(entry: DocEntry): string {
	const filePath = (entry.filePath ?? '').replace(/\\/g, '/');
	return filePath.startsWith(DOCS_PREFIX) ? filePath.slice(DOCS_PREFIX.length) : `${entry.id}.md`;
}

export function isStub(entry: DocEntry): boolean {
	const body = (entry.body ?? '').replace(/^#.*$/gm, '').trim();
	return body.length < 20;
}

export function docTitle(entry: DocEntry): string {
	const fromData = entry.data.title;
	if (typeof fromData === 'string' && fromData.trim()) return fromData.trim();

	const h1 = entry.body?.match(/^#\s+(.+?)\s*$/m)?.[1];
	if (h1) return h1.replace(/[`*_]/g, '').split(/\s+[—–-]\s+|\s+\(/)[0].trim();

	const name = sourcePath(entry).split('/').pop()?.replace(/\.md$/i, '') ?? entry.id;
	return name
		.split(/[-_]/)
		.filter(Boolean)
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
}

export function extractHeadings(body: string): string[] {
	return [...body.matchAll(/^#{2,3}\s+(.+)$/gm)].map((match) => match[1].replace(/[`*_]/g, '').trim());
}

export function buildDocTree(entries: DocEntry[]): TreeNode[] {
	const root: TreeNode = { label: '', children: [] };

	for (const entry of entries) {
		const segments = sourcePath(entry).split('/');
		let node = root;
		for (let i = 0; i < segments.length - 1; i++) {
			const segment = segments[i];
			let folder = node.children.find((child) => !child.href && child.label === folderLabel(segment));
			if (!folder) {
				folder = { label: folderLabel(segment), children: [] };
				node.children.push(folder);
			}
			node = folder;
		}
		node.children.push({
			label: docTitle(entry),
			href: docHref(entry.id),
			stub: isStub(entry),
			children: [],
		});
	}

	sortTree(root.children);
	return root.children;
}

function sortTree(nodes: TreeNode[]) {
	nodes.sort((a, b) => {
		const aFolder = a.href ? 0 : 1;
		const bFolder = b.href ? 0 : 1;
		return aFolder - bFolder || a.label.localeCompare(b.label, 'en', { sensitivity: 'base' });
	});
	for (const node of nodes) sortTree(node.children);
}

export function folderLabel(name: string): string {
	return name
		.split(/[-_]/)
		.filter(Boolean)
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
}
