# Varsha T. — Personal Portfolio

A responsive React + Vite portfolio with an original, red-and-black visual system. Project details and skills are rendered from editable data arrays in `src/App.jsx`; styling is in `src/index.css`.

## Run locally

```bash
cd varsha-portfolio
npm install
npm run dev
```

Open the local URL printed by Vite. Create a production build with `npm run build`, or preview it with `npm run preview`.

## Personalize

- Edit the `profile` object at the top of `src/App.jsx` to set your email, GitHub profile URL, and LinkedIn URL. The current email and profile links are clearly marked placeholders.
- Update the `projects` and `skillGroups` arrays in `src/App.jsx` to edit project descriptions, links, and technology tags.
- Add your resume PDF to `public/resume.pdf` when available, then change the Resume area in the `Contact` component to link to `/resume.pdf`.
- Update the education and community text in the `Education` component as needed.
- Change page title, description, social sharing metadata, and favicon in `index.html` and `public/favicon.svg`.

The contact call to action uses a `mailto:` link, so it opens the visitor's email app. No contact form or backend is configured.

## Free deployment

**Vercel:** Import the repository in Vercel, set the project root to `varsha-portfolio` if the repo contains other files, and use the defaults (`npm run build`, output directory `dist`).

**GitHub Pages:** Set Vite's `base` option to `'/<repository-name>/'` in `vite.config.js` (create the config if needed), then build and publish `dist` with GitHub Actions Pages deployment. For a custom domain or a root user/organization site, use `/` as the base. Vercel needs no base-path change.
