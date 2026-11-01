# WavesOS Docs

The documentation site for WavesOS and WavesHyprland. It is a static Astro site that reads every page from the public
`wavesosdocs` repository, so there is no database and no external API to run.

## First-time setup

Clone the documentation repository into `content/`:

```bash
git clone https://github.com/WavesOS-Repos/wavesosdocs.git content/wavesosdocs
# or, if you use submodules:
git submodule update --init
```

Optional: clone the product repository too. It is the source for install commands and flags:

```bash
git clone https://github.com/WavesOS-Repos/WavesHyprland.git
```

Then install dependencies and build:

```bash
npm install
npm run build
npm run start
```

`npm run start` serves the production build on `http://0.0.0.0:3000`. Set `PORT` to use another port:

```bash
PORT=8080 npm run start
```

If `content/wavesosdocs` is missing, `npm run dev` and `npm run build` clone it automatically. If that fails, they print the clone command to run by hand.

## Development

```bash
npm run dev
```

## Refreshing the docs

The documentation files are part of this project in `content/wavesosdocs`. To refresh them from the source repository, replace that folder with a fresh clone and rebuild:

```bash
rm -rf content/wavesosdocs
git clone --depth 1 https://github.com/WavesOS-Repos/wavesosdocs.git content/wavesosdocs
npm run build
```

## How the site is organized

- **User guide** (`/guide/...`): friendly pages for install, first boot, keybindings, theming, bars, tools and troubleshooting. Each page
  is mapped to the best matching file in the docs repository. The mapping lives in `src/lib/guide.ts`.
- **Deep documentation** (`/docs/...`): one page for every markdown file in the docs repository, with the folder layout preserved.
  A file with no real content shows a "Not written yet" state.
- Links between docs pages, GitHub-style alert blocks (`> [!WARNING]`) and code copy buttons are handled automatically at build time.
- `/` is the WavesOS overview, generated from the documentation repository's `README.md`. There is no separate home page.
- Every other documentation file is served under `/docs/` with its folder layout preserved.
- Brand images live in `public/brand/` (logo and wallpaper). Screenshots live in `public/screenshots/`, grouped by folder, and
  appear on the matching guide pages.
- Brand images and screenshots were copied from `WavesOS-Repos/Website`. Replace the files in those folders to update them.
- Search runs in the browser over page titles and section headings.

## Project layout

- `src/content.config.ts`: loads every markdown file from `content/wavesosdocs`.
- `src/lib/`: content helpers, the user guide mapping and the markdown link and callout plugin.
- `src/pages/`: the overview at `/`, deep docs under `/docs/`, guide, search index and 404.
- `src/components/` and `src/layouts/`: header, sidebar, table of contents and page shells.
- `scripts/`: the docs-repository check run before build and dev, and the production server.

## Links

- Documentation source: https://github.com/WavesOS-Repos/wavesosdocs
- Product and installer: https://github.com/WavesOS-Repos/WavesHyprland
- Project site: https://wavesos.org
