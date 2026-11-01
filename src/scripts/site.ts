import Lenis from 'lenis';

type ThemePref = 'system' | 'light' | 'dark';

interface SearchItem {
	title: string;
	href: string;
	section: string;
	headings: string[];
}

const THEME_KEY = 'waves-theme';
const SIDEBAR_KEY = 'waves-sidebar';
const THEME_ORDER: ThemePref[] = ['system', 'light', 'dark'];
const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

function storedPref(): ThemePref {
	const value = localStorage.getItem(THEME_KEY);
	return value === 'light' || value === 'system' ? value : 'dark';
}

function applyTheme(pref: ThemePref) {
	const dark = pref === 'dark' || (pref === 'system' && darkQuery.matches);
	const root = document.documentElement;
	root.dataset.theme = dark ? 'dark' : 'light';
	root.dataset.themePref = pref;
	document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]').forEach((button) => {
		button.setAttribute('aria-label', `Theme: ${pref}. Switch theme`);
		button.title = `Theme: ${pref}`;
	});
}

applyTheme(storedPref());
darkQuery.addEventListener('change', () => {
	if (storedPref() === 'system') applyTheme('system');
});

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
	const lenis = new Lenis({
		duration: 1.15,
		easing: (t: number) => 1 + 2.70158 * (t - 1) ** 3 + 1.70158 * (t - 1) ** 2,
	});
	const frame = (time: number) => {
		lenis.raf(time);
		requestAnimationFrame(frame);
	};
	requestAnimationFrame(frame);
}

function toggleSidebarCollapsed() {
	const collapsed = document.documentElement.classList.toggle('sidebar-collapsed');
	localStorage.setItem(SIDEBAR_KEY, collapsed ? 'collapsed' : 'expanded');
}

document.addEventListener('click', (event) => {
	const target = event.target as Element;

	const themeButton = target.closest('[data-theme-toggle]');
	if (themeButton) {
		const next = THEME_ORDER[(THEME_ORDER.indexOf(storedPref()) + 1) % THEME_ORDER.length];
		localStorage.setItem(THEME_KEY, next);
		applyTheme(next);
		return;
	}

	if (target.closest('[data-sidebar-collapse]')) {
		toggleSidebarCollapsed();
		return;
	}

	if (target.closest('[data-sidebar-open]')) {
		document.body.classList.toggle('sidebar-open');
		return;
	}

	if (target.closest('[data-sidebar-backdrop], [data-sidebar] a')) {
		document.body.classList.remove('sidebar-open');
	}
});

document.addEventListener('keydown', (event) => {
	if (event.key === 'Escape') document.body.classList.remove('sidebar-open');
});

if (localStorage.getItem(SIDEBAR_KEY) === 'collapsed') {
	document.documentElement.classList.add('sidebar-collapsed');
}

document.querySelectorAll<HTMLPreElement>('.prose pre').forEach((pre) => {
	const button = document.createElement('button');
	button.type = 'button';
	button.className = 'copy-btn';
	button.textContent = 'Copy';
	button.addEventListener('click', async () => {
		const text = pre.querySelector('code')?.innerText ?? pre.innerText;
		try {
			await navigator.clipboard.writeText(text);
			button.textContent = 'Copied';
		} catch {
			button.textContent = 'Failed';
		}
		setTimeout(() => (button.textContent = 'Copy'), 1600);
	});
	pre.appendChild(button);
});

const SIDEBAR_SCROLL_KEY = 'waves-sidebar-scroll';
const sidebarScroller = document.querySelector<HTMLElement>('[data-sidebar]');
if (sidebarScroller) {
	const savedScroll = Number(sessionStorage.getItem(SIDEBAR_SCROLL_KEY));
	if (savedScroll > 0) sidebarScroller.scrollTop = savedScroll;
	window.addEventListener('pagehide', () => {
		sessionStorage.setItem(SIDEBAR_SCROLL_KEY, String(sidebarScroller.scrollTop));
	});
}

const tocLinks = new Map<string, HTMLAnchorElement>();
document.querySelectorAll<HTMLAnchorElement>('[data-toc-link]').forEach((link) => {
	tocLinks.set(link.dataset.tocLink ?? '', link);
});
const headingEls = [...document.querySelectorAll<HTMLElement>('.prose h2[id], .prose h3[id]')];
if (tocLinks.size > 0 && 'IntersectionObserver' in window) {
	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;
				tocLinks.forEach((link) => link.classList.remove('active'));
				tocLinks.get(entry.target.id)?.classList.add('active');
			}
		},
		{ rootMargin: '0px 0px -70% 0px' },
	);
	headingEls.forEach((heading) => observer.observe(heading));
}

const searchRoot = document.querySelector<HTMLElement>('[data-search]');
const searchInput = document.querySelector<HTMLInputElement>('[data-search-input]');
const resultsList = document.querySelector<HTMLUListElement>('[data-search-results]');

let searchIndex: Promise<SearchItem[]> | null = null;

function loadSearchIndex(): Promise<SearchItem[]> {
	searchIndex ??= fetch('/search.json').then((response) => {
		if (!response.ok) throw new Error(`Search index failed: ${response.status}`);
		return response.json() as Promise<SearchItem[]>;
	});
	return searchIndex;
}

function scoreItem(item: SearchItem, terms: string[]): number {
	const title = item.title.toLowerCase();
	const section = item.section.toLowerCase();
	const headings = item.headings.join(' ').toLowerCase();
	let score = 0;
	for (const term of terms) {
		if (title.includes(term)) score += title.startsWith(term) ? 4 : 3;
		if (section.includes(term)) score += 1;
		if (headings.includes(term)) score += 1;
		if (!title.includes(term) && !section.includes(term) && !headings.includes(term)) return 0;
	}
	return score;
}

function setResultsMessage(message: string) {
	if (!resultsList) return;
	resultsList.replaceChildren();
	const item = document.createElement('li');
	item.className = 'search-empty';
	item.textContent = message;
	resultsList.appendChild(item);
	resultsList.hidden = false;
}

function renderResults(items: SearchItem[]) {
	if (!resultsList) return;
	resultsList.replaceChildren();
	for (const result of items) {
		const li = document.createElement('li');
		const link = document.createElement('a');
		link.href = result.href;
		const title = document.createElement('span');
		title.textContent = result.title;
		const section = document.createElement('small');
		section.textContent = result.section;
		link.append(title, section);
		li.appendChild(link);
		resultsList.appendChild(li);
	}
	resultsList.hidden = false;
}

async function runSearch() {
	if (!searchInput || !resultsList) return;
	const terms = searchInput.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
	if (terms.length === 0) {
		resultsList.hidden = true;
		return;
	}

	let index: SearchItem[];
	try {
		index = await loadSearchIndex();
	} catch {
		setResultsMessage('Search is unavailable right now.');
		return;
	}

	if (searchInput.value.trim().toLowerCase() !== terms.join(' ')) return;

	const matches = index
		.map((item) => ({ item, score: scoreItem(item, terms) }))
		.filter((match) => match.score > 0)
		.sort((a, b) => b.score - a.score)
		.slice(0, 8)
		.map((match) => match.item);

	if (matches.length === 0) setResultsMessage('No pages match that search.');
	else renderResults(matches);
}

if (searchInput && resultsList && searchRoot) {
	searchInput.addEventListener('focus', () => {
		loadSearchIndex().catch(() => undefined);
	});
	searchInput.addEventListener('input', () => {
		void runSearch();
	});
	searchInput.addEventListener('keydown', (event) => {
		if (event.key === 'Escape') {
			searchInput.value = '';
			resultsList.hidden = true;
			searchInput.blur();
		} else if (event.key === 'ArrowDown') {
			resultsList.querySelector<HTMLAnchorElement>('a')?.focus();
			event.preventDefault();
		} else if (event.key === 'Enter') {
			resultsList.querySelector<HTMLAnchorElement>('a')?.click();
		}
	});
	resultsList.addEventListener('keydown', (event) => {
		if (event.key === 'Escape') {
			resultsList.hidden = true;
			searchInput.focus();
		}
	});
	document.addEventListener('click', (event) => {
		if (!searchRoot.contains(event.target as Node)) resultsList.hidden = true;
	});
	document.addEventListener('keydown', (event) => {
		const target = event.target as HTMLElement;
		if (event.key !== '/' || event.metaKey || event.ctrlKey) return;
		if (target.closest('input, textarea, select, [contenteditable="true"]')) return;
		event.preventDefault();
		searchInput.focus();
	});
}
