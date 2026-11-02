export const DOCS_DIR: string;
export const DOCS_ROOT: string;
export function docIdFromPath(relPath: string): string;
export function docHref(id: string): string;
export function markdownHref(id: string): string;
export function rewriteDocHref(href: string, currentRel: string): string;
