export interface GuidePage {
	slug: string;
	title: string;
	summary: string;
	source: string | null;
	related?: string[];
	gallery?: string[];
}

export const guidePages: GuidePage[] = [
	{
		slug: 'install',
		title: 'Install',
		summary: 'Install WavesHyprland on an existing Arch Linux system.',
		source: 'getting-started/installation-guide',
	},
	{
		slug: 'first-boot',
		title: 'First boot',
		summary: 'What to expect the first time you log in to your WavesOS desktop.',
		source: 'getting-started/first-boot',
		gallery: ['desktop-previews'],
	},
	{
		slug: 'desktop-tour',
		title: 'Desktop tour',
		summary: 'A walkthrough of the WavesHyprland desktop and how its parts fit together.',
		source: 'hyprland/overview',
		gallery: ['desktop-previews', 'hyprland', 'more'],
	},
	{
		slug: 'keybindings',
		title: 'Keybindings',
		summary: 'The default shortcuts and how to change them.',
		source: 'hyprland/keybindings',
		related: ['hyprland/keybind-editor'],
	},
	{
		slug: 'theming',
		title: 'Theming & wallpapers',
		summary: 'How Matugen and Wallfliper keep colors matched to your wallpaper.',
		source: 'desktop-applications/theming',
	},
	{
		slug: 'widgets',
		title: 'Widgets',
		summary: 'Desktop widgets built with EWW.',
		source: 'desktop-applications/eww',
	},
	{
		slug: 'tools',
		title: 'Tools',
		summary: 'Settings, keybind editor, autostart editor and plugin manager.',
		source: 'hyprland/settings-editor',
		related: ['hyprland/keybind-editor', 'hyprland/autostart-editor', 'hyprland/plugin-manager'],
	},
	{
		slug: 'lock-and-login',
		title: 'Lock & login',
		summary: 'The lockscreen and login screen themes.',
		source: 'lockscreen-and-login/',
		gallery: ['sddm'],
	},
	{
		slug: 'troubleshooting',
		title: 'Troubleshooting',
		summary: 'Diagnose and recover from common problems.',
		source: 'troubleshooting/',
	},
	{
		slug: 'faq',
		title: 'FAQ',
		summary: 'Frequently asked questions.',
		source: null,
	},
];

const PREFERRED_FILE = /(overview|index|readme)$/;

export function resolveGuideSource(source: string | null, ids: string[]): string | null {
	if (!source) return null;
	if (ids.includes(source)) return source;

	const prefix = source.endsWith('/') ? source : `${source}/`;
	const candidates = ids.filter((id) => id.startsWith(prefix)).sort();
	return candidates.find((id) => PREFERRED_FILE.test(id)) ?? candidates[0] ?? null;
}
