# Modus Data Website

This repository is a static bilingual website for Modus Data, a Swiss AI and data science company based in Therwil.

## What this project contains

- `src/pages/index.astro` — English landing page
- `src/pages/de/index.astro` — German landing page
- `src/data/content.ts` — bilingual page content based on the provided CV and business plan
- `src/layouts/BaseLayout.astro` — shared layout and navigation
- `src/styles/global.css` — global styling
- `img/MD_logo.png` — company logo used on the site

## Company information

- Company name: Modus Data
- Location: Benkenstrasse 3, 4106 Therwil, Switzerland
- Languages: English and German
- Source text sources: `data/CV Arthur Jochems AI eng.docx` and `data/Motivation und Businessplan.docx`

## Notes for future agents

- Use the CV and business plan documents in `data/` to update or refine website copy.
- Maintain both English and German versions in `src/pages/index.astro` and `src/pages/de/index.astro`.
- Keep the company branding and address consistent with the information above.
- The site should remain a static Astro site without server-side rendering.

## Recommended template

This website is based on a free Astro approach inspired by the official `Astro Starter Kit: Basics`. That starter is a good fit because it is lightweight, responsive, and easy to adapt for a bilingual business landing page.

## Local development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

## Free deployment options

- **GitHub Pages**: Build the site locally and deploy the generated `dist/` folder to a repository branch.
- **Cloudflare Pages**: Connect the repository and configure the build command `npm run build` with output directory `dist`.
- **Netlify**: Similarly, connect the repo and use `npm run build`.

### GitHub Pages deployment

If GitHub Pages only shows `main` as a selectable branch, use the `main` branch with the `/docs` folder instead.

1. Push the repository to GitHub.
2. In the repository settings under Pages, select `main` as the branch and `/docs` as the folder.
3. Save the settings.
4. Your site will be available at:
   `https://atcjochems.github.io/modusdata_website/`

This repo includes a static site copy in `docs/` so publishing from `main` is supported even when `gh-pages` has not been created.
