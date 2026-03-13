# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal academic website for Lordrick A. Kahinga, PhD Candidate in Astronomy & Astrophysics at UC Santa Cruz. React 18 + Vite + Tailwind CSS single-page application with Framer Motion animations, deployed to GitHub Pages.

## Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (http://localhost:5173/)
npm run build        # Build for production (output: dist/)
npm run preview      # Preview production build
```

## Deployment

Push to `main` branch triggers automatic deployment via `.github/workflows/deploy.yml`. Site is hosted at the user's GitHub Pages URL. The `base` path in `vite.config.js` is set to `/` for username.github.io hosting.

## Architecture

### Component Pattern

All section components (`src/components/*.jsx`) follow this structure:
- Use `useInView` hook from `react-intersection-observer` for scroll-triggered animations
- Wrap content in Framer Motion `<motion.div>` with `initial`, `animate`, `transition` props
- Use custom theme colors from `tailwind.config.js` (space-blue, cosmic-purple, nebula-pink, supernova-orange, teal-burst, surface)
- Section IDs match navigation links in Header.jsx for smooth scroll

### Data-Driven Content

Content is separated from presentation in `src/data/` files:

**publications.js** - Arrays `firstAuthorPublications` and `contributingPublications`:
```javascript
{ id, title, authors, year, journal, arxivId, arxivUrl, description?, featured? }
```

**talks.js** - Talk/presentation entries:
```javascript
{ id, title, event, location, date, type }
```

**research.js** - Research areas and technical skills

**observatories.js** - Observatory experience entries

### Static Assets

- **Images**: Import from `src/assets/images/` in components (Vite handles bundling)
- **CV PDF**: Place in `public/cv/` (served directly without processing)

## Key Files

- `tailwind.config.js` - Custom color palette and fonts
- `vite.config.js` - Build config with base path setting
- `src/App.jsx` - Main component composing all sections
- `src/index.css` - Global styles including custom gradient-text class
