# Lordrick A. Kahinga - Personal Website

Modern, responsive personal academic website built with React and Tailwind CSS. Showcasing research on Fast Radio Bursts, publications, talks, and academic journey.

## 🌟 Features

- **Single Page Application** with smooth scroll navigation
- **Responsive Design** optimized for all devices
- **Scroll Animations** using Framer Motion
- **Bold & Colorful** astronomy-inspired theme
- **Automatic Deployment** to GitHub Pages

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/lordrick94/my_website.git
cd my_website

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173/my_website/` to view the site.

## 📝 Development

### Available Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build locally
```

### Project Structure

```
src/
├── components/     # React components (Header, Hero, About, etc.)
├── data/          # Content data (publications, talks, research)
├── assets/        # Images and static files
├── App.jsx        # Main application
└── index.css      # Global styles
```

## 🎨 Customization

### Updating Content

- **Publications**: Edit `src/data/publications.js`
- **Talks**: Edit `src/data/talks.js`
- **Research**: Edit `src/data/research.js`
- **CV**: Replace `public/cv/Lordrick_CV.pdf`

### Changing Colors

Modify the theme in `tailwind.config.js`:

```javascript
colors: {
  'space-blue': '#0A1929',
  'cosmic-purple': '#5E35B1',
  'nebula-pink': '#E91E63',
  // ... more colors
}
```

## 🌐 Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch.

### Manual Deployment

```bash
npm run build
# Deploy the dist/ folder to your hosting provider
```

### GitHub Pages Setup

1. Go to repository Settings → Pages
2. Set Source to "GitHub Actions"
3. Push to `main` branch to trigger deployment

## 📄 License

© 2025 Lordrick A. Kahinga. All rights reserved.

Website template built with React, Tailwind CSS, and Framer Motion.

## 📧 Contact

- Email: lkahinga@ucsc.edu
- ORCID: [0009-0007-5296-4046](https://orcid.org/0009-0007-5296-4046)
- GitHub: [@lordrick94](https://github.com/lordrick94)
- arXiv: [Kahinga, L. A.](https://arxiv.org/search/?query=Kahinga%2C+L.+A.&searchtype=author)
