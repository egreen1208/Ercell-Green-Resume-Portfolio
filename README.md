# Ercell Green — Developer Portfolio

A responsive portfolio made with plain HTML, CSS, and JavaScript. The green-and-gold design reflects Ercell's Great Smoky Mountains roots. Vite is used only for local preview and production packaging; the site has no React or other browser framework.

## Edit the site

- `index.html`: all page content, projects, skills, experience, contact links, and SVG icons.
- `src/styles.css`: colors, layout, responsive styles, and animations.
- `src/main.js`: mobile menu, active navigation, scroll reveals, and copyright year.
- `public/`: profile portrait, mountain artwork, and favicon.

Project contributions use native HTML `<details>` elements. The page content and project details remain available with JavaScript disabled.

The project section includes SECO Systems, WOMS, IT Equipment Manager, SECO Process Studio, AI Investigation, and conference-room technology. Update their summaries and statuses directly in `index.html` as work progresses.

## Run locally

Use Node.js 22.12 or newer, then run:

```bash
npm ci
npm run dev
```

Open the local address shown in the terminal. To build and preview the finished static site:

```bash
npm run build
npm run preview
```

The finished site is in `dist/`. Any static web host can serve that folder.

## Publish to GitHub Pages

The workflow in `.github/workflows/main.yml` installs dependencies, builds the site, and publishes `dist/` when changes are pushed to `main`. In the repository's **Settings → Pages**, select **GitHub Actions** as the source. You can also run the workflow manually from **Actions**.

## Before publishing

Update the contact links in `index.html` with your public email and GitHub profile. Keep project descriptions suitable for public sharing, and exclude confidential business data, screenshots, source code, and internal URLs.

The site includes semantic sections, keyboard focus styles, a skip link, reduced-motion support, responsive layouts, and social metadata. Add a canonical URL and social preview image after the final published URL is known.
