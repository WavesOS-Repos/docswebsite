import { createReadStream, existsSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, normalize, resolve, sep } from 'node:path';
import { createBrotliCompress, createGzip } from 'node:zlib';

const distDir = resolve('dist');
const port = Number(process.env.PORT) || 8443;
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
	'.md': 'text/markdown; charset=utf-8',
	'.xml': 'application/xml; charset=utf-8',
};

const COMPRESSIBLE = /^(text\/|application\/(javascript|json|xml)|image\/svg)/;

const securityHeaders = {
	'X-Content-Type-Options': 'nosniff',
	'Referrer-Policy': 'strict-origin-when-cross-origin',
	'X-Frame-Options': 'SAMEORIGIN',
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

function encodingFor(req, type) {
	if (!COMPRESSIBLE.test(type)) return null;
	const accepted = req.headers['accept-encoding'] ?? '';
	if (accepted.includes('br')) return 'br';
	if (accepted.includes('gzip')) return 'gzip';
	return null;
}

function send(req, res, filePath, status) {
	const type = mimeTypes[extname(filePath)] ?? 'application/octet-stream';
	const isAsset = filePath.includes(`${sep}_astro${sep}`);
	const encoding = encodingFor(req, type);
	res.writeHead(status, {
		...securityHeaders,
		'Content-Type': type,
		'Cache-Control': isAsset ? 'public, max-age=31536000, immutable' : 'no-cache',
		Vary: 'Accept-Encoding',
		...(encoding ? { 'Content-Encoding': encoding } : {}),
	});
	if (req.method === 'HEAD') return res.end();

	const stream = createReadStream(filePath);
	if (encoding === 'br') stream.pipe(createBrotliCompress()).pipe(res);
	else if (encoding === 'gzip') stream.pipe(createGzip()).pipe(res);
	else stream.pipe(res);
}

const server = createServer((req, res) => {
	if (req.method !== 'GET' && req.method !== 'HEAD') {
		res.writeHead(405, { Allow: 'GET, HEAD' }).end();
		return;
	}
	const { pathname } = new URL(req.url ?? '/', 'http://localhost');
	const file = resolveFile(pathname);
	if (file) return send(req, res, file, 200);

	const notFound = join(distDir, '404.html');
	if (existsSync(notFound)) return send(req, res, notFound, 404);
	res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }).end('Not found');
});

server.listen(port, host, () => {
	console.log(`WavesOS docs running at http://localhost:${port} (listening on ${host}:${port})`);
});
