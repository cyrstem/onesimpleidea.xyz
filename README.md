# O N E S I M P L E I D E A . X Y Z

Portfolio site built with Vite, vanilla JS, SCSS, and Three.js.

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build and Checks

```bash
npm run build
npm run check
```

## Deploy Flow (GitHub Pages)

The project builds into `dist/`.  
`docs/` is the deploy folder used for GitHub Pages.

```bash
npm run build:docs
```

This runs:
1. `npm run build` to generate `dist/`
2. `npm run sync-docs` to copy `dist/` into `docs/` while preserving `docs/CNAME`

## Notes

- Uses a single lockfile strategy with `package-lock.json` (npm).
- CI runs `npm run check` on push/PR.
