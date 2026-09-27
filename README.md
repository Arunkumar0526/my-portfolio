# Arun Kumar — Portfolio (React + Vite)

Same design, content, and features as your original single-file portfolio —
rebuilt as a proper React project. Every page is its own `.jsx` component,
routed with `react-router-dom`, sharing one stylesheet and a couple of
reusable components (header, footer, project-details modal).

## Project structure

```
arun-portfolio-react/
├── index.html                Vite HTML entry (fonts + Font Awesome CDN links)
├── package.json
├── vite.config.js
├── vercel.json                SPA rewrite rule so client-side routes work on Vercel
├── public/
│   ├── images/
│   │   ├── My pic 2.jpeg      ← add your photo here
│   │   ├── projects/          ← personal project screenshots
│   │   ├── freelaunce/        ← freelance project screenshots
│   │   └── experience/        ← workspace photo
│   └── resume/
│       └── ARUN-FULL-STACK1.pdf   ← add your resume PDF here
└── src/
    ├── main.jsx                React entry point (mounts <App /> in BrowserRouter)
    ├── App.jsx                 Routes + layout (Header, <main>, Footer)
    ├── index.css                All shared styles (same design as before)
    ├── components/
    │   ├── Header.jsx           Nav bar, mobile burger menu, Hire Me CTA
    │   ├── Footer.jsx           Footer nav, socials, CTA
    │   └── ProjectModal.jsx     Shared "View Details" popup
    ├── data/
    │   └── projectData.js       Personal + freelance project content
    └── pages/
        ├── Home.jsx
        ├── About.jsx
        ├── Projects.jsx
        ├── Freelance.jsx
        ├── Services.jsx
        ├── Skills.jsx
        ├── Experience.jsx
        └── Contact.jsx
```

## What to add before it's fully "yours"

The original file referenced these by name but they weren't part of what you
uploaded — drop files with the exact names below into `public/` and every
page will pick them up automatically (no code changes needed):

- `public/images/My pic 2.jpeg` — your profile photo (Home + About)
- `public/images/projects/cafeaura.png`, `book my movie.png`, `fraud.png`
- `public/images/freelaunce/catering.png`, `facade.png`, `enquro.png`
- `public/images/experience/my ex.png`
- `public/resume/ARUN-FULL-STACK1.pdf`

Two cards (Automation House Plan, Small Construction Website) still point at
placeholder Pinterest images — update the `image` field for those entries in
`src/data/projectData.js` once you have real screenshots.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

Build a production bundle any time with:

```bash
npm run build
npm run preview   # preview the production build locally
```

## Push to GitHub

From inside this folder:

```bash
git init
git add .
git commit -m "Initial commit: React portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

(`node_modules` and `dist` are already excluded via `.gitignore`.)

## Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New → Project**, then import the repo you just pushed.
3. Vercel auto-detects Vite — leave the defaults:
   - Build command: `npm run build` (or `vite build`)
   - Output directory: `dist`
4. Click **Deploy**.

The included `vercel.json` makes sure that visiting a URL directly — like
`yoursite.vercel.app/projects` — serves the app instead of a 404, since this
is a single-page app with client-side routing.

## Notes on what changed vs. the plain-HTML version

- Page navigation is handled by `react-router-dom` (`<Link>` / `<NavLink>`)
  instead of hard page reloads or the old JS-only page switcher — it's a
  true single-page app now, with real URLs (`/about`, `/projects`, etc.)
  that work with the browser back/forward buttons and can be bookmarked.
- The active nav-link underline is applied automatically by `NavLink`'s
  `isActive` state — no manual class toggling needed.
- The "View Details" popup and the contact form's "message sent"
  confirmation are still front-end only (no backend), matching the
  original.
