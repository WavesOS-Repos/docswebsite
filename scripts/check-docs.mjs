import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

const REPO_URL = 'https://github.com/WavesOS-Repos/wavesosdocs.git';
const docsRoot = join(process.cwd(), 'content', 'wavesosdocs');
const readme = join(docsRoot, 'README.md');

const missingMessage = `
ERROR: WavesOS documentation not found at content/wavesosdocs.

Clone the documentation repository before building:

  git clone ${REPO_URL} content/wavesosdocs

or, if this project uses submodules:

  git submodule update --init

Then run the command again.
`;

if (!existsSync(readme)) {
	console.log('WavesOS documentation not found. Cloning it into content/wavesosdocs ...');
	try {
		execFileSync('git', ['clone', '--depth', '1', REPO_URL, docsRoot], { stdio: 'inherit' });
	} catch {
		console.error(missingMessage);
		process.exit(1);
	}
}

if (!existsSync(readme)) {
	console.error(missingMessage);
	process.exit(1);
}
