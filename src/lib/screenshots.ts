import { readdirSync } from 'node:fs';
import path from 'node:path';

const SCREENSHOT_DIR = path.join(process.cwd(), 'public', 'screenshots');

export function screenshotsFor(folders: string[]): string[] {
	return folders.flatMap((folder) =>
		readdirSync(path.join(SCREENSHOT_DIR, folder))
			.filter((file) => !file.startsWith('.'))
			.sort()
			.map((file) => `/screenshots/${folder}/${file}`),
	);
}
