# Karthik Reddy Vemireddy — Portfolio

Personal portfolio website built with React, Vite, and Tailwind CSS. Deployed on Vercel via the `prod` branch.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build tool | Vite 6 |
| Styling | Tailwind CSS v4 |
| Animations | Motion (Framer Motion) |
| UI primitives | Radix UI |
| Icons | Lucide React |
| Theming | next-themes (dark / light) |
| Deployment | Vercel |
| CI | GitHub Actions |

---

## Getting Started

```bash
npm install
npm run dev        # starts dev server at http://localhost:3000
```

```bash
npm run build      # outputs to ./build
```

---

## Project Structure

```
src/
├── components/
│   ├── hero-section.tsx          # Landing — name, bio, stats, social links
│   ├── about-section.tsx         # Background, skills, timeline
│   ├── projects-section.tsx      # Project grid
│   ├── enhanced-project-card.tsx # Individual project card with image/fallback
│   ├── achievements-section.tsx  # Hackathon wins + research publications
│   ├── skills-visualization.tsx  # Interactive skill chart
│   ├── enhanced-blog-section.tsx # Blog/writing section
│   ├── contact-section.tsx       # Contact form + links
│   ├── footer.tsx                # Links, copyright
│   ├── navigation.tsx            # Top nav bar
│   ├── floating-nav.tsx          # Floating section navigator
│   ├── floating-sidebar.tsx      # Side progress dots
│   ├── mobile-menu.tsx           # Mobile drawer nav
│   ├── theme-toggle.tsx          # Dark/light mode toggle
│   ├── scroll-reveal.tsx         # Scroll-triggered entrance animations
│   ├── scroll-progress.tsx       # Top scroll progress bar
│   ├── cursor-follower.tsx       # Custom cursor (desktop only)
│   └── ui/                       # Radix-based shadcn/ui components
├── assets/                       # Static images (portrait, etc.)
public/
├── leetspace-hero.png
├── procheck-hero.png
├── billbeam-hero.png
├── vidmod-hero.png
└── Karthik_Vemireddy_Resume.pdf
```

---

## Deployment

Deployments are triggered **only from the `prod` branch** (configured in `vercel.json`). The `main` branch does not auto-deploy — it is used for staging and integration.

```
prod  →  Vercel production deployment
main  →  no auto-deploy (merge target for PRs)
```

Every push to `prod` runs a GitHub Actions build check (`.github/workflows/prod-deploy.yml`) that installs dependencies, runs `npm run build`, and verifies the `build/index.html` output exists before Vercel picks it up.

No environment variables are required. All data is static and bundled at build time.

---

## Sections

| Section | ID | Description |
|---|---|---|
| Hero | — | Name, tagline, stats, social links, portrait |
| About | `#about` | Bio, background, and skill breakdown |
| Projects | `#projects` | Featured projects with live/GitHub links |
| Achievements | `#achievements` | Hackathon wins (3×) and research publications (2) |
| Blog | `#blog` | Writing and technical posts |
| Contact | `#contact` | Contact form and direct email/social links |

### Highlighted Achievements

**Hackathon Wins**
- **ProCheck** — 2nd Place, Google Cloud × Elastic Hackathon (2,732 participants, $50K pool)
- **Rift Analyzer** — 2nd Place, AWS × Riot Games Hackathon (2,636 participants, $26K pool)
- **CaseTwin** — Special Technology Winner, Google MedGemma Impact Challenge (850+ teams, $100K pool)

**Research Publications**
- **Hemolix.Extract.V** — Accepted at SIGMOD 2026 (Demo Track), Bengaluru, India
- **Hemolix.TabGen** — Accepted at ACL 2026 (Industrial Track), San Diego, USA

---

## Branch Strategy

```
main          ← merge target; no Vercel deploy
  └── prod    ← production; Vercel deploys on every push
        └── feature branches → PR into main → merge to prod
```

---

## Contact

- **Email:** karthikmasters444@gmail.com
- **GitHub:** [arthik444](https://github.com/arthik444)
- **LinkedIn:** [karthikvemireddy18](https://www.linkedin.com/in/karthikvemireddy18/)
