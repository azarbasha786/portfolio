# Azar Basha P – Professional Portfolio Website

Modern, recruiter-friendly, ATS-optimized portfolio built with **React**, **TypeScript**, and **Tailwind CSS**.

---

## 🌟 Key Features

1. **Recruiter 10-Second Executive Summary**: One-click modal designed for hiring managers and sourcers with candidate snapshot, key competencies, and a one-click "Copy Summary for ATS / Notes" button.
2. **100% Truthful & Grounded**: Avoids fabricated metrics and fake production roles. Respects candidate integrity while highlighting verified foundations in Python, SQL, and Machine Learning.
3. **Interactive Project Showcases & Deep Dives**: Multi-stage data pipeline walkthroughs (Problem, Approach, Architecture, Stack, Key Outcomes).
4. **Interactive In-App Portfolio Settings & Configurator**: Easily add new GitHub projects, update contact details, or customize experience directly from the UI, with immediate live preview and code export.
5. **Resume Center**: Preconfigured for immediate PDF download (`/public/resume.pdf`) and plain text recruiter dossier parsing.
6. **Dark / Light Mode**: Seamless theme toggle with persistent storage.
7. **Production SEO & OpenGraph**: Configured with meta descriptions, OpenGraph share cards, and Schema.org structured data.

---

## 🚀 Quickstart & Local Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## 📁 File Structure

```text
├── index.html                     # HTML Entry point with SEO & Schema.org JSON-LD
├── metadata.json                  # AI Studio metadata
├── package.json                   # Dependencies & build scripts
├── public/
│   └── resume.pdf                 # Drop your PDF resume here
├── src/
│   ├── components/
│   │   ├── About.tsx              # Background, working principles & recruiter facts
│   │   ├── CareerStrategyGuide.tsx# 30-day action plan & specialization guide
│   │   ├── Contact.tsx            # Email copy, LinkedIn, and direct inquiry form
│   │   ├── DataConfiguratorModal.tsx # In-browser live editor & code exporter
│   │   ├── ExperienceEducation.tsx# Academic credentials, coursework & timeline
│   │   ├── Footer.tsx             # Semantic footer & back-to-top navigation
│   │   ├── Hero.tsx               # Primary headline, status pill & CTA buttons
│   │   ├── Navbar.tsx             # Sticky navigation, theme toggle & quick CTAs
│   │   ├── ProjectModal.tsx       # Architecture & pipeline deep dive modal
│   │   ├── Projects.tsx           # Filterable project cards & GitHub transparency
│   │   ├── RecruiterBriefModal.tsx# 10-second candidate snapshot modal
│   │   ├── ResumeModal.tsx        # PDF & TXT resume download center
│   │   └── Skills.tsx             # Competency matrix by category & level
│   ├── data/
│   │   └── portfolioData.ts       # Central source of truth for all portfolio data
│   ├── App.tsx                    # Main layout and modal state management
│   ├── index.css                  # Tailwind styles and custom scrollbar
│   └── main.tsx                   # React root entry point
└── vite.config.ts                 # Vite bundler configuration
```

---

## 🌐 Recommended Deployment

- **Vercel / Netlify**: Connect your GitHub repository (`github.com/azarbasha786/portfolio`) for instant continuous deployment on every git push.
- **GitHub Pages**: Run `npm run build` and deploy the `dist/` folder.
