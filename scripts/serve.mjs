import { createReadStream, existsSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, normalize, resolve, sep } from 'node:path';

const distDir = resolve('dist');
const port = Number(process.env.PORT) || 3000;
const host = '0.0.0.0';

if (!existsSync(join(distDir, 'index.html'))) {
	console.error('ERROR: dist/ is missing. Run "npm run build" first.');
	process.exit(1);
}

const mimeTypes = {
	'.html': 'text/html; charset=utf-8',
	'.css': 'text/css; charset=utf-8',
	'.js': 'text/javascript; charset=utf-8',
	'.json': 'application/json; charset=utf-8',
	'.svg': 'image/svg+xml',
	'.png': 'image/png',
	'.jpg': 'image/jpeg',
	'.webp': 'image/webp',
	'.ico': 'image/x-icon',
	'.woff2': 'font/woff2',
	'.txt': 'text/plain; charset=utf-8',
	'.xml': 'application/xml',
};

function resolveFile(pathname) {
	let decoded;
	try {
		decoded = decodeURIComponent(pathname);
	} catch {
		return null;
	}
	const target = resolve(distDir, '.' + normalize(decoded));
	if (target !== distDir && !target.startsWith(distDir + sep)) return null;

	if (existsSync(target) && statSync(target).isDirectory()) {
		const index = join(target, 'index.html');
		return existsSync(index) ? index : null;
	}
	return existsSync(target) ? target : null;
}

function send(res, filePath, status, method) {
	const isAsset = filePath.includes(`${sep}_astro${sep}`);
	res.writeHead(status, {
		'Content-Type': mimeTypes[extname(filePath)] ?? 'application/octet-stream',
		'Cache-Control': isAsset ? 'public, max-age=31536000, immutable' : 'no-cache',
	});
	if (method === 'HEAD') return res.end();
	createReadStream(filePath).pipe(res);
}

const server = createServer((req, res) => {
	if (req.method !== 'GET' && req.method !== 'HEAD') {
		res.writeHead(405, { Allow: 'GET, HEAD' }).end();
		return;
	}
	const { pathname } = new URL(req.url ?? '/', 'http://localhost');
	const file = resolveFile(pathname);
	if (file) return send(res, file, 200, req.method);

	const notFound = join(distDir, '404.html');
	if (existsSync(notFound)) return send(res, notFound, 404, req.method);
	res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }).end('Not found');
});

server.listen(port, host, () => {
	console.log(`WavesOS docs running at http://localhost:${port} (listening on ${host}:${port})`);
});
