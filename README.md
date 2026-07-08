
## O N E S I M P L E I D E A . X Y Z 

Portafolio work thing is made with Vite, vanilla JS, CSS and OGL.

```
install : npm i
dev     : yarn dev
build   : yarn build
deploy  : yarn build && npm run sync-docs
```

`build` minifies source into `dist/`. `sync-docs` cleans `docs/` (keeps `CNAME`) and copies `dist/` into `docs/` for GitHub Pages — then commit and push `docs/`.

Other scripts: `yarn preview`, `yarn evolve`, `npm run sync-docs`.

# updates for 2025
improve gpu performance and updated projects
improve js implementation
