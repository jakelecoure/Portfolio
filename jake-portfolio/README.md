# Jake LeCoure — Portfolio

A sleek, production-ready personal portfolio built with **React + Vite + Tailwind CSS**.

##  Features

-  Dark/light mode toggle with localStorage persistence
-  Custom reactor-blue color scheme (dark mode first)
-  Syne (display) + DM Sans (body) typography pairing
-  Scroll-triggered reveal animations via IntersectionObserver
-  Fully responsive (mobile-first)
-  SEO meta tags + Open Graph
-  Reusable component architecture
-  Sticky blur navbar with active section tracking
-  Contact form (ready to wire to Formspree / EmailJS)

---

##  Getting Started

### Prerequisites
- Node.js **18+**
- npm or pnpm

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
```

The site will be live at **http://localhost:5173**

### Build for Production

```bash
npm run build
# Preview the production build:
npm run preview
```

---

##  Project Structure

```
jake-portfolio/
├── index.html                  # Entry HTML + SEO meta + Google Fonts
├── package.json
├── vite.config.js
├── tailwind.config.js          # Custom colors (reactor blue), fonts, animations
├── postcss.config.js
└── src/
    ├── main.jsx                # ReactDOM root
    ├── App.jsx                 # Root — ThemeProvider + layout
    ├── index.css               # Globals, CSS vars, custom classes
    ├── context/
    │   └── ThemeContext.jsx    # Dark/light mode context + localStorage
    ├── hooks/
    │   └── useScrollReveal.js  # IntersectionObserver reveal hook
    └── components/
        ├── Navbar.jsx          # Sticky nav, mobile menu, theme toggle
        ├── Hero.jsx            # Full-viewport landing, animated bg
        ├── About.jsx           # Bio, skills, certs, interests
        ├── Projects.jsx        # Project grid with hover effects
        ├── Experience.jsx      # Timeline: work, education, awards
        ├── Contact.jsx         # Contact form + social links
        └── Footer.jsx          # Footer with back-to-top
```

---

##  Customisation

### Update content
All copy lives directly in each component as JS arrays — easy to find and update:

| Section    | File                          | Key data                        |
|------------|-------------------------------|---------------------------------|
| Hero       | `src/components/Hero.jsx`     | Name, tagline, bio              |
| About      | `src/components/About.jsx`    | `SKILLS`, `CERTS`, `INTERESTS`  |
| Projects   | `src/components/Projects.jsx` | `PROJECTS` array                |
| Experience | `src/components/Experience.jsx` | `EXPERIENCE`, `AWARDS`, `EXTRA` |
| Contact    | `src/components/Contact.jsx`  | `SOCIALS`, info cards           |

### Wire up the contact form
The form uses a simulated 1.4s delay. To make it real:

**Option A — Formspree (no backend)**
```js
// In Contact.jsx handleSubmit:
const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})
```

**Option B — EmailJS (client-side)**
```bash
npm install @emailjs/browser
```
```js
import emailjs from '@emailjs/browser'
await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY')
```

### Change theme colours
Edit `tailwind.config.js` → `theme.extend.colors.reactor`:
```js
reactor: {
  DEFAULT: '#00c8ff',   // Main accent
  dim:     '#0096cc',   // Dimmed
  glow:    '#00e5ff',   // Hover / glow
}
```

---

##  Deployment

### Vercel (recommended — free)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop the `dist/` folder to netlify.com/drop
```

### GitHub Pages
```bash
# Add to vite.config.js: base: '/your-repo-name/'
npm run build
# Push dist/ to gh-pages branch
```

---

##  Contact

Jake LeCoure — [jplecoure@mun.ca](mailto:jplecoure@mun.ca) — [LinkedIn](https://www.linkedin.com/in/jake-lecoure)
