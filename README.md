# Suomikortit

Finnish sentence flashcards as an installable PWA. Tap a card to flip it: the front
shows a Finnish sentence, the back breaks down the conjunction, grammar, and key words
in English. Built on active recall, spaced repetition, and the Feynman technique.

Categories: **conjunctions · daily phrases · idioms · proverbs · quotes/culture**.
Levels A2–B1–B2. Both **kirjakieli** (written) and **puhekieli** (spoken).

## Files
```
index.html            the app (HTML + CSS + JS)
cards.js              the card data — your single source of truth
manifest.webmanifest  PWA manifest
sw.js                 service worker (offline support)
icons/                app icons (192, 512, maskable)
SKILL.md              how to generate new cards correctly
```

## Run locally
It's a static site. Don't open `index.html` with `file://` (the service worker and
relative loads want a server). Instead:
```bash
cd suomikortit
python3 -m http.server 8080
# open http://localhost:8080
```

## Deploy to Vercel
No build step — it's a static site.

**Option A — CLI**
```bash
npm i -g vercel
cd suomikortit
vercel            # follow prompts; framework preset = "Other"
vercel --prod
```

**Option B — Dashboard**
Push the folder to a GitHub repo, "Add New… → Project", import it, framework preset
**Other**, leave build/output empty, Deploy.

Once it's on `https://…`, open it on your phone and use the browser's
**Add to Home Screen** — it installs as a standalone app and works offline.

## Adding cards
Append objects to the `window.CARDS` array in `cards.js` (see `SKILL.md` for the schema
and rules). No rebuild needed — just redeploy. If you'd rather, ask Claude for a new batch
and it will extend `cards.js`.
