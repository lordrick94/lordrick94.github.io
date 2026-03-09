# Website Editing Guide

This guide explains how to update content on your personal website. All edits are done by modifying files in the `src/` directory, then committing and pushing to GitHub.

## Table of Contents
- [Adding Publications](#adding-publications)
- [Adding Talks/Presentations](#adding-talkspresentations)
- [Updating Research Areas](#updating-research-areas)
- [Updating Observing Experience](#updating-observing-experience)
- [Updating Personal Information](#updating-personal-information)
- [Changing Images](#changing-images)
- [Updating CV](#updating-cv)
- [Deploying Changes](#deploying-changes)

---

## Adding Publications

**File to edit:** `src/data/publications.js`

### First-Author Publications

Add a new entry to the `firstAuthorPublications` array:

```javascript
export const firstAuthorPublications = [
  // ... existing publications
  {
    id: 2,  // increment this number
    title: "Your New Paper Title Here",
    authors: "Kahinga, L. A., Prochaska, J. X., Smith, A., et al.",
    year: 2027,
    journal: "ApJ",  // or "arXiv:XXXX.XXXXX"
    arxivId: "2701.12345",
    arxivUrl: "https://arxiv.org/abs/2701.12345",
    description: "Brief description of the paper's main findings and contributions.",
    featured: false  // set to true to highlight it prominently
  }
];
```

### Contributing Author Publications

Add to the `contributingPublications` array:

```javascript
export const contributingPublications = [
  // ... existing publications
  {
    id: 6,  // increment this number
    title: "Paper Title",
    authors: "Lead Author, A., Co-Author, B., ... Kahinga, L., et al.",
    year: 2027,
    journal: "arXiv:2701.54321",
    arxivId: "2701.54321",
    arxivUrl: "https://arxiv.org/abs/2701.54321"
  }
];
```

**Important Notes:**
- Always increment the `id` number
- For journal publications, use the journal name (e.g., "ApJ", "MNRAS")
- For preprints, use the arXiv format: "arXiv:XXXX.XXXXX"
- Only set `featured: true` for one publication at a time (your most important work)

---

## Adding Talks/Presentations

**File to edit:** `src/data/talks.js`

Add a new entry to the `talks` array:

```javascript
export const talks = [
  // ... existing talks
  {
    id: 7,  // increment this number
    title: "Your Talk Title",
    institution: "University/Conference Name",
    type: "Invited Talk",  // or "Contributed Talk"
    date: "March 2027",
    location: "City, State/Country"
  }
];
```

**Talk Types:**
- `"Invited Talk"` - for invited seminars/colloquia
- `"Contributed Talk"` - for conference presentations

**After adding a talk**, update the statistics in `src/components/Talks.jsx`:

Find these lines (around line 29-42) and update the numbers:

```javascript
<div className="text-4xl font-bold text-cosmic-purple mb-2">7</div>  // total talks
<div className="text-text-dark/80">Total Talks</div>

<div className="text-4xl font-bold text-nebula-pink mb-2">5</div>  // invited talks
<div className="text-text-dark/80">Invited Talks</div>

<div className="text-4xl font-bold text-teal-burst mb-2">6</div>  // unique institutions
<div className="text-text-dark/80">Institutions</div>
```

---

## Updating Research Areas

**File to edit:** `src/data/research.js`

### Adding a New Research Area

Add to the `researchAreas` array:

```javascript
export const researchAreas = [
  // ... existing areas
  {
    id: 5,  // increment this number
    title: "Your Research Area",
    icon: "galaxy",  // options: "radio", "galaxy", "atom", "spectrum"
    description: "Detailed description of this research area and your work in it.",
    highlights: [
      "First key highlight or achievement",
      "Second highlight",
      "Third highlight"
    ],
    color: "supernova-orange"  // options: "cosmic-purple", "nebula-pink", "teal-burst", "supernova-orange"
  }
];
```

### Updating Technical Skills

Edit the `technicalSkills` object:

```javascript
export const technicalSkills = {
  languages: [
    { name: "Python", level: "advanced", tools: ["astropy", "numpy", ...] },
    { name: "New Language", level: "proficient" },  // add new language
  ],
  methods: [
    "Bayesian inference",
    "Your New Method",  // add new method
  ],
  tools: [
    "Docker",
    "New Tool",  // add new tool
  ],
  archives: [
    "Pan-STARRS PS1",
    "New Archive",  // add new archive
  ]
};
```

### Updating the Featured M31 Research Section

**File to edit:** `src/components/Research.jsx`

Find the "Featured Research Section" (around line 88-114) and update:

```javascript
<h4 className="text-2xl font-bold text-text-dark mb-4">
  Your Featured Research Title
</h4>
<p className="text-text-dark/90 mb-4">
  Update the description here...
</p>
<ul className="space-y-1 text-text-dark/80">
  <li>• Update key finding 1</li>
  <li>• Update key finding 2</li>
  <li>• Update key finding 3</li>
</ul>
```

---

## Updating Observing Experience

**File to edit:** `src/data/observatories.js`

### Adding Observatory Time

Add to the `observatories` array:

```javascript
export const observatories = [
  // ... existing entries
  {
    id: 6,  // increment this number
    name: "Observatory Name",
    telescope: "Telescope Name",
    instrument: "Instrument Name",
    nights: "X",  // e.g., "15", "5-10", etc.
    role: "Principal Investigator",  // or "Contributing Observer"
    programs: ["2027A_PROG1", "2027B_PROG2"],  // optional
    location: "City, State/Country",
    icon: "telescope",
    color: "cosmic-purple",  // rotate between colors
    description: "Brief description of observations and science goals"
  }
];
```

### Adding Collaboration Memberships

Add to the `collaborations` array:

```javascript
export const collaborations = [
  // ... existing collaborations
  {
    name: "New Collaboration Name",
    role: "Member",  // or "Co-Investigator", "Working Group Lead", etc.
    description: "Brief description of the collaboration and its goals"
  }
];
```

### Updating Total Nights Count

**File to edit:** `src/components/Observing.jsx`

Find the highlight stats section (around line 26) and update:

```javascript
<div className="text-5xl md:text-6xl font-bold gradient-text mb-4">150+ Nights</div>
```

---

## Updating Personal Information

### Contact Information

**File to edit:** `src/components/Contact.jsx`

Update the `contactInfo` array (around line 12):

```javascript
const contactInfo = [
  {
    icon: HiMail,
    label: 'Email',
    value: 'newemail@ucsc.edu',  // update email
    link: 'mailto:newemail@ucsc.edu',
    color: 'cosmic-purple'
  },
  {
    icon: HiLocationMarker,
    label: 'Address',
    value: 'New Department, New Institution',  // update affiliation
    value2: 'New Address',  // update address
    color: 'nebula-pink'
  }
];
```

Update social links (around line 36):

```javascript
const socialLinks = [
  {
    icon: SiOrcid,
    label: 'ORCID',
    value: 'YOUR-ORCID-ID',
    link: 'https://orcid.org/YOUR-ORCID-ID',
    color: 'cosmic-purple'
  },
  // ... etc
];
```

### About Section / Personal Journey

**File to edit:** `src/components/About.jsx`

Update your story text (around line 64-92):

```javascript
<p className="text-text-dark/90 text-lg leading-relaxed">
  Update your story here...
</p>
```

Update the timeline (around line 95):

```javascript
const timeline = [
  {
    year: '2018 - 2022',
    title: 'Position Title',
    institution: 'Institution Name',
    description: 'Description of what you did and accomplished.',
    icon: HiAcademicCap,
    color: 'cosmic-purple'
  },
  // Add new timeline entries
];
```

### Interests/Hobbies

**File to edit:** `src/components/Interests.jsx`

Update the `interests` array (around line 11):

```javascript
const interests = [
  {
    icon: HiFire,  // import icons from 'react-icons/hi'
    title: 'Interest Name',
    description: 'Brief description of this interest.',
    color: 'cosmic-purple'
  },
  // ... add or modify interests
];
```

**Available icons:** `HiFire`, `HiMap`, `HiMusicNote`, `HiCamera`, `HiColorSwatch`, etc.
Browse all at: https://react-icons.github.io/react-icons/icons/hi/

### Outreach Activities

**File to edit:** `src/components/Outreach.jsx`

Update the `activities` array (around line 12):

```javascript
const activities = [
  {
    icon: HiAcademicCap,
    title: 'Activity Name',
    organization: 'Organization Name',
    year: '2027',
    role: 'Your Role',
    description: 'What you did and its impact.',
    color: 'cosmic-purple'
  },
  // ... add new activities
];
```

---

## Changing Images

### Adding New Images

1. **Place image file** in `src/assets/images/`
   - Use lowercase filenames with underscores: `new_photo.jpg`
   - Recommended formats: JPG (photos), PNG (graphics), PDF (plots)

2. **Import in the component** where you want to use it:

```javascript
// At the top of the component file
import newImage from '../assets/images/new_photo.jpg';

// Later in the component
<img src={newImage} alt="Description" />
```

### Common Image Locations

- **Profile photo**: `About.jsx` - imports `profile_photo.jpg`
- **Hero banner**: `Hero.jsx` - imports `m31_banner_image.jpg`
- **Observatory photos**: `Observing.jsx` - imports `me_at_Lick.jpg`, `mauna_kea_observatory.jpg`
- **Conference photos**: `Talks.jsx` - imports `NBNSP_conference_group_pic.jpg`
- **Group photos**: `Outreach.jsx` - imports `UCSC_astro_grads.jpg`
- **Research plots**: `Research.jsx` - imports `mass_fraction_plot.pdf`

### Replacing Images

1. Add new image to `src/assets/images/`
2. Update the import statement in the component
3. Keep the same variable name, or update all references

Example in `About.jsx`:

```javascript
// Change this:
import profilePhoto from '../assets/images/profile_photo.jpg';

// To this:
import profilePhoto from '../assets/images/new_profile_2027.jpg';
```

---

## Updating CV

### Replacing the CV PDF

1. **Place new CV** in `public/cv/` directory
2. **Name it:** `Lordrick_CV.pdf` (replace existing file)
3. The download button will automatically use the new file

**Or** if you want to keep both versions:

1. Add new PDF: `public/cv/Lordrick_CV_2027.pdf`
2. Update the link in `Header.jsx` and `Contact.jsx`:

```javascript
// Find this line:
href="/cv/Lordrick_CV.pdf"

// Change to:
href="/cv/Lordrick_CV_2027.pdf"
```

---

## Deploying Changes

After making any edits, deploy them to your live site:

### Step 1: Build and Test Locally (Optional but Recommended)

```bash
# In the project directory
npm run dev
```

Visit `http://localhost:5173/` to preview changes.

### Step 2: Commit and Push

```bash
# Stage your changes
git add .

# Create a commit with a descriptive message
git commit -m "Add new publication on galaxy clusters"

# Push to GitHub
git push origin main
```

### Step 3: Wait for Deployment

- GitHub Actions will automatically build and deploy
- Takes about 2-3 minutes
- Monitor at: https://github.com/lordrick94/lordrick94.github.io/actions
- Once complete (green checkmark), hard refresh your browser:
  - **Windows/Linux**: `Ctrl + Shift + R`
  - **Mac**: `Cmd + Shift + R`

---

## Quick Reference: File Locations

| Content | File to Edit |
|---------|-------------|
| Publications | `src/data/publications.js` |
| Talks | `src/data/talks.js` |
| Research areas | `src/data/research.js` |
| Observatories | `src/data/observatories.js` |
| Contact info | `src/components/Contact.jsx` |
| About/Story | `src/components/About.jsx` |
| Interests | `src/components/Interests.jsx` |
| Outreach | `src/components/Outreach.jsx` |
| Featured research | `src/components/Research.jsx` |
| Colors/Theme | `tailwind.config.js` |
| Images | `src/assets/images/` |
| CV PDF | `public/cv/Lordrick_CV.pdf` |

---

## Troubleshooting

### Site shows old content after pushing

**Solution:** Hard refresh your browser to clear cache
- Windows/Linux: `Ctrl + Shift + R`
- Mac: `Cmd + Shift + R`

### Deployment failed in GitHub Actions

**Solution:** Check the error in the Actions tab
- Common issue: Syntax error in JavaScript/JSON
- Fix the error and push again

### Images not showing

**Solutions:**
1. Verify image is in `src/assets/images/`
2. Check import path is correct
3. Ensure filename has correct capitalization (case-sensitive)
4. Use `.jpg` not `.JPG` (lowercase extension)

### Build errors

**Solution:** Test locally first
```bash
npm run build
```
Fix any errors shown, then commit and push

---

## Need Help?

- **Build errors**: Run `npm run dev` locally to see detailed errors
- **React/JavaScript questions**: Check component files in `src/components/`
- **Styling changes**: See `tailwind.config.js` for color definitions
- **Layout changes**: Components are in `src/components/` - be careful editing JSX structure

Remember: Always test locally with `npm run dev` before pushing major changes!
