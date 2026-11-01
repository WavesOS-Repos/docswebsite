import path from 'node:path';
import { DOCS_ROOT, rewriteDocHref } from './doc-paths.mjs';

const CALLOUT_MARKER = /^\s*\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*/i;

function currentRelPath(file) {
	if (!file?.path) return '';
	const rel = path.relative(DOCS_ROOT, file.path);
	if (rel.startsWith('..') || path.isAbsolute(rel)) return '';
	return rel.split(path.sep).join('/');
}

function applyCallout(node) {
	const firstParagraph = node.children.find((child) => child.type === 'element' && child.tagName === 'p');
	const firstText = firstParagraph?.children[0];
	if (!firstText || firstText.type !== 'text') return;

	const match = firstText.value.match(CALLOUT_MARKER);
	if (!match) return;

	const kind = match[1].toLowerCase();
	firstText.value = firstText.value.slice(match[0].length);
	if (firstText.value === '' && firstParagraph.children[1]?.tagName === 'br') {
		firstParagraph.children.splice(0, 2);
	} else if (firstText.value === '') {
		firstParagraph.children.shift();
	}

	node.properties = {
		...node.properties,
		className: ['callout', `callout-${kind}`],
		dataCallout: kind,
	};
}

function walk(node, rel) {
	if (node.type === 'element') {
		if (node.tagName === 'a' && typeof node.properties?.href === 'string') {
			node.properties.href = rewriteDocHref(node.properties.href, rel);
		}
		if (node.tagName === 'blockquote') applyCallout(node);
	}
	for (const child of node.children ?? []) walk(child, rel);
}

export function rehypeDocs() {
	return (tree, file) => {
		walk(tree, currentRelPath(file));
	};
}
