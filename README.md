# AS Renovations

High-conversion marketing site for fast kitchen and bathroom remodels. Built with React, Vite, and Tailwind CSS.

**Live site:** https://astridbonoan.github.io/AS-Renovations.io/

## Development

```bash
npm install
npm run dev
```

## GitHub Pages (Deploy from branch)

This repo uses **GitHub Actions** to build the site and push static files to the **`gh-pages`** branch.

After the first successful workflow run, configure Pages:

1. Open **Settings → Pages**
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**
3. Select branch **`gh-pages`**, folder **`/ (root)`**
4. Save

Future pushes to `main` rebuild and update the live site automatically.

## Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS 4
