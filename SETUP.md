# Dev Stack — Setup

This is a Vite + React + Tailwind CSS (v4) + DaisyUI + react-toastify project,
matching the Dev Stack Figma design and README requirements.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Project notes

- Technology data lives in `public/technologies.json` and is loaded with
  `fetch()` (not hardcoded), with a loading state while it's fetched.
- The shared brand gradient (orange → pink → violet) is defined once in
  `src/index.css` as `--brand-gradient` and reused via the `.brand-gradient-bg`
  / `.brand-gradient-text` helper classes — change it in one place to re-theme
  the whole UI.
- `react-toastify` shows toasts for add / duplicate add / remove / remove all.
- The navbar is sticky and switches to a hamburger + centered logo layout on
  mobile, per the README spec.
