# Ercell Green — Developer Portfolio

A polished, responsive portfolio built with React and Vite. It presents Ercell Green's broad experience across software development, DevOps, infrastructure, identity, automation, and technology support. Its Great Smoky Mountains-inspired design reflects Ercell's Bryson City, North Carolina roots, uses only portfolio-safe assets, and is configured for free hosting on GitHub Pages.

## Before publishing

Open `src/portfolioData.js` and update:

- `email`, `linkedin`, and `github`
- Each clearly marked project placeholder with public-safe details
- Project technologies if needed

Do not include confidential system names, business data, screenshots, source code, or internal URLs.

## Run locally

1. Install [Node.js](https://nodejs.org/) 20 or newer.
2. Open a terminal in this folder.
3. Run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local address shown in the terminal.

Create a production build with:

```bash
npm run build
```

The finished static site will be in `dist/`.

## Upload using the GitHub website

1. Download and extract `ercell-green-portfolio-source.zip`.
2. On GitHub, create a new empty repository named `ercell-green-portfolio`.
3. Do **not** add a README, `.gitignore`, or license while creating it; those choices can conflict with the prepared files.
4. In the empty repository, choose **uploading an existing file**.
5. Drag all extracted contents into the upload area, including the `.github`, `public`, and `src` folders.
6. Enter a commit message such as `Create portfolio site`, then choose **Commit changes**.
7. Open **Settings → Pages** and set **Source** to **GitHub Actions**.
8. Open **Actions** and wait for **Deploy portfolio to GitHub Pages** to finish.

The published address will normally be:

`https://YOUR-USERNAME.github.io/ercell-green-portfolio/`

## Upload using Git

The included workflow at `.github/workflows/deploy.yml` builds and publishes the site automatically.

1. Create a new empty repository on GitHub, such as `ercell-green-portfolio`.
2. In this project folder, run:

   ```bash
   git init
   git add .
   git commit -m "Create portfolio site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/ercell-green-portfolio.git
   git push -u origin main
   ```

3. On GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. Open the repository's **Actions** tab and wait for “Deploy portfolio to GitHub Pages” to finish.
6. Your URL will be:

   `https://YOUR-USERNAME.github.io/ercell-green-portfolio/`

Future pushes to `main` will redeploy automatically.

## Customize the design

- Main page layout: `src/App.jsx`
- Text, skills, experience, and project data: `src/portfolioData.js`
- Colors and responsive styles: `src/styles.css`
- Hero profile portrait: `public/ercell-green-profile.png`
- Smoky Mountains hero artwork: `public/smoky-mountains-hero.png`
- Search/social metadata: `index.html`
- Browser icon: `public/favicon.svg`

## Accessibility and SEO

The site includes semantic sections, keyboard focus styles, a skip link, reduced-motion support, responsive layouts, descriptive metadata, and social sharing basics. Add a canonical URL and social preview image in `index.html` after the final GitHub Pages URL is known.
