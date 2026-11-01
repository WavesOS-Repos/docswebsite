import path from 'node:path';

export const DOCS_DIR = 'content/wavesosdocs';
export const DOCS_ROOT = path.resolve(process.cwd(), DOCS_DIR);

const REPO_URL = 'https://github.com/WavesOS-Repos/wavesosdocs';

export function docHref(id) {
	return id === 'readme' ? '/' : `/docs/${id}`;
}

const slugSegment = (segment) =>
	segment
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');

export function docIdFromPath(relPath) {
	return relPath
		.replace(/\.md$/i, '')
		.split('/')
		.map(slugSegment)
		.filter(Boolean)
		.join('/');
}

const REPO_LINK = /^(?:https:\/\/github\.com)?\/WavesOS-Repos\/wavesosdocs\/(blob|tree)\/main\/(.*)$/;
const SCHEME = /^[a-z][a-z0-9+.-]*:/i;

export function rewriteDocHref(href, currentRel) {
	if (href.startsWith('#') || href.startsWith('//') || SCHEME.test(href)) {
		const repo = href.match(REPO_LINK);
		if (!repo) return href;
		return rewriteRepoLink(repo[1], repo[2]);
	}

	const repo = href.match(REPO_LINK);
	if (repo) return rewriteRepoLink(repo[1], repo[2]);

	const hashAt = href.indexOf('#');
	const pathPart = hashAt >= 0 ? href.slice(0, hashAt) : href;
	const hash = hashAt >= 0 ? href.slice(hashAt) : '';
	if (!pathPart) return href;

	const resolved = pathPart.startsWith('/')
		? path.posix.normalize(pathPart.slice(1))
		: path.posix.normalize(
				path.posix.join(currentRel ? path.posix.dirname(currentRel) : '.', pathPart),
			);
	if (resolved.startsWith('..')) return href;

	if (/\.md$/i.test(resolved)) return `${docHref(docIdFromPath(resolved))}${hash}`;
	return `${REPO_URL}/blob/main/${resolved}${hash}`;
}

function rewriteRepoLink(kind, repoPath) {
	const hashAt = repoPath.indexOf('#');
	const filePart = hashAt >= 0 ? repoPath.slice(0, hashAt) : repoPath;
	const hash = hashAt >= 0 ? repoPath.slice(hashAt) : '';
	if (kind === 'blob' && /\.md$/i.test(filePart)) {
		return `${docHref(docIdFromPath(filePart))}${hash}`;
	}
	return `${REPO_URL}/${kind}/main/${repoPath}`;
}
