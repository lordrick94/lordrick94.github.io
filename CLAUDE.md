# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal academic website for Lordrick A. Kahinga, PhD Candidate in Astronomy & Astrophysics at UC Santa Cruz. Modern single-page application showcasing FRB research, publications, and academic journey.

## Technology Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animations
- **React Icons** - Icon library
- **GitHub Pages** - Hosting and deployment

## Project Structure

```
my_website/
├── src/
│   ├── components/         # React components
│   │   ├── Header.jsx      # Navigation with smooth scroll
│   │   ├── Hero.jsx        # Landing section
│   │   ├── About.jsx       # Personal journey timeline
│   │   ├── Research.jsx    # FRB research areas
│   │   ├── Publications.jsx # Academic papers
│   │   ├── Talks.jsx       # Presentations timeline
│   │   ├── Observing.jsx   # Observatory experience
│   │   ├── Outreach.jsx    # Service and mentorship
│   │   ├── Interests.jsx   # Personal hobbies
│   │   └── Contact.jsx     # Contact info and footer
│   ├── data/              # Structured content data
│   │   ├── publications.js
│   │   ├── talks.js
│   │   ├── research.js
│   │   └── observatories.js
│   ├── assets/images/     # Photos and figures
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # React entry point
│   └── index.css         # Global styles + Tailwind
├── public/cv/            # CV PDF files
├── .github/workflows/    # GitHub Actions
│   └── deploy.yml       # Auto-deployment workflow
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Custom theme colors
└── package.json         # Dependencies
```

## Development

### Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:5173/my_website/)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

### Key Features

- **Single Page App**: All sections on one page with smooth scroll navigation
- **Responsive Design**: Mobile-first approach, works on all screen sizes
- **Animations**: Scroll-triggered animations using Framer Motion and Intersection Observer
- **Custom Theme**: Astronomy-inspired color palette (space blues, cosmic purples, vibrant accents)

## Color Palette

Located in `tailwind.config.js`:

- `space-blue` (#0A1929) - Background
- `cosmic-purple` (#5E35B1) - Primary accent
- `nebula-pink` (#E91E63) - Secondary accent
- `supernova-orange` (#FF6D00) - Highlights/CTAs
- `teal-burst` (#00BCD4) - Interactive elements
- `surface` (#1E1E2F) - Card backgrounds

## Content Updates

### Adding Publications

Edit `src/data/publications.js`:
- Add to `firstAuthorPublications` or `contributingPublications` array
- Include arXiv ID and URL

### Adding Talks

Edit `src/data/talks.js`:
- Add new talk object with institution, date, location

### Updating Research Areas

Edit `src/data/research.js`:
- Modify `researchAreas` array
- Update `technicalSkills` object

### Changing Images

Place new images in `src/assets/images/` and import in relevant component:
```javascript
import newImage from '../assets/images/new_image.jpg';
```

## Deployment

### GitHub Pages Setup

1. **Repository Settings**:
   - Go to Settings → Pages
   - Source: GitHub Actions
   - The workflow in `.github/workflows/deploy.yml` handles deployment

2. **Base Path**:
   - Update `base` in `vite.config.js` to match your repo name
   - Currently set to `/my_website/`

3. **Automatic Deployment**:
   - Push to `main` branch triggers automatic build and deploy
   - Site will be live at: `https://lordrick94.github.io/my_website/`

### Manual Build

```bash
npm run build
# Output in dist/ directory
```

## Important Notes

- **CV Updates**: Replace PDF in `public/cv/Lordrick_CV.pdf` when CV is updated
- **Images**: Use JPG for photos, PDF for plots/figures
- **Animations**: Components use `react-intersection-observer` for scroll-triggered animations
- **Navigation**: Header component uses smooth scroll to section IDs
- **Old Site**: Archived in `old_site/` directory (not used in production)

## Component Architecture

All components follow this pattern:
1. Use Framer Motion for animations
2. Use `useInView` hook for scroll triggers
3. Responsive grid layouts (mobile-first)
4. Consistent color scheme from Tailwind config
5. Smooth transitions and hover effects

## Troubleshooting

### Build Issues
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf node_modules/.vite`

### Images Not Loading
- Ensure images are imported at top of component
- Check file paths are correct (case-sensitive)
- Verify images exist in `src/assets/images/`

### Deployment Failures
- Check GitHub Actions logs in repository
- Verify base path in `vite.config.js` matches repo name
- Ensure GitHub Pages is enabled in repo settings
