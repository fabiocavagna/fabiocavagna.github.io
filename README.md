# fabio-cavagna.github.io

Personal portfolio built with [Astro](https://astro.build) and deployed on GitHub Pages.

## Local development

```powershell
npm install
npm run dev      # http://localhost:4321
npm run build    # production build into dist/
npm run preview  # serve the built site locally
```

## Editing content

All text content lives in plain data files, no need to touch the layout:

- `src/data/site.ts` — name, role, about, experience, education, skills, languages, publications.
- `src/data/projects.ts` — project pages (currently: Analysis and Testing of Space Structures).
- `public/images/` — project images.

## CV (auto-updated from LaTeX)

The CV source is in `cv/cv.tex`. On every push to `main`, GitHub Actions compiles it with
XeLaTeX and publishes the result as `/cv.pdf` on the site, so the download link is always in
sync with the LaTeX source. No need to commit the PDF (it is git-ignored).

For local preview, a copy of `cv.pdf` is kept in `public/` so the download link works offline.

## Deployment

1. Create a GitHub repository named `fabio-cavagna.github.io`.
2. Push this folder to the `main` branch.
3. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Every push to `main` builds and deploys automatically (see `.github/workflows/deploy.yml`).
