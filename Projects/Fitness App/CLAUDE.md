# Fitness App — working notes

## Service worker cache version

The PWA service worker (`sw.js`) caches `app.js`, `style.css`, and other
static assets cache-first. Browsers that already installed the SW will keep
serving the cached versions until the cache name changes.

**Whenever you change `app.js`, `style.css`, `index.html`, `manifest.json`,
or any icon, bump the cache name in `sw.js`** (e.g. `fitness-v2` → `fitness-v3`)
in the same commit. Without the bump, returning users won't see updates.

## Deployment

GitHub Pages serves from the `master` branch. Live URL:
`https://maxzulfer.github.io/Projects/Fitness%20App/`

Standard flow for this app: push to feature branch, then merge to `master`
(no fast-forward) and push.
