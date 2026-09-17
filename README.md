# Modern Developer Portfolio & Technical Architecture Showcase

A complete, modern, responsive, and technically deep Personal Developer Portfolio website built for a **Software Developer / Full-stack Developer**. Engineered to authentically demonstrate programming rigor, software architecture patterns, and relational database expertise across multiple enterprise stacks (C#, Java, TypeScript, PHP, SQL Server, MySQL, TiDB Cloud, Supabase, and Firebase).

---

## 🌟 Key Highlights & Philosophy

- **Zero Superficial Claims**: Web stacks are used for the web frontend, while desktop and enterprise systems (C# WinForms, ADO.NET, Java, C++, PHP, SQL Server, TiDB Cloud) are authentically showcased through **deep technical case studies, layered system architecture diagrams, and syntax-highlighted code editors**.
- **Modern Minimalist Aesthetics**: Inspired by Linear, Vercel, Raycast, and Stripe developer pages. Dark mode by default with light mode switcher, subtle electric blue / cyan / purple glows, delicate borders, and clean typography (Inter + JetBrains Mono).
- **Production-Grade Backend & DB**: Integrated with **Supabase (PostgreSQL)** for projects data, contact messages, and privacy-friendly visitor analytics. Features complete PostgreSQL migration scripts with Row Level Security (RLS) policies and automatic offline local fallback.
- **Blistering Performance**: Built with Vite + TypeScript with under 50kB total gzipped bundle size, zero heavy third-party bloat, and full adherence to `prefers-reduced-motion` and accessibility guidelines.

---

## 🚀 Technical Stack Breakdown

| Layer | Technologies Represented | How It Is Demonstrated |
|---|---|---|
| **Portfolio Frontend** | HTML5 Semantic, CSS3 Custom Tokens, TypeScript, Bootstrap 5 Grid | Modern responsive single-page portfolio interface |
| **Desktop / .NET** | C#, WinForms, ADO.NET, SQL Server | Enterprise Inventory Management Case Study & Architecture Flow |
| **Web API / Backend** | PHP (PDO Prepared), MySQL 8.0, TypeScript | Modular E-Commerce REST API & Data Model Case Study |
| **Cloud Database** | Supabase (PostgreSQL), TypeScript, RLS | Live Portfolio DB + Cloud Data Hub Case Study & Live Subscriptions |
| **Distributed SQL** | TiDB Cloud, SQL, TypeScript | Distributed SQL Analytics Case Study & Partitioning Benchmarks |
| **Realtime / NoSQL** | Firebase Firestore, JavaScript, Security Rules | Real-time Collaborative Workspace Case Study |
| **Systems / Batch** | Java, C++, JDBC Batching, Concurrency | High-Throughput Batch Processing Case Study & Code Showcase |

---

## 📂 Project Architecture

```
f:/CV/
├── index.html                    # SEO optimized, OpenGraph, JSON-LD Structured Data
├── package.json                  # Dependencies: @supabase/supabase-js, bootstrap, vite, typescript
├── tsconfig.json                 # Strict TypeScript compiler options
├── vite.config.ts                # Vite build and server configuration
├── .env.example                  # Blueprint for Supabase credentials
├── README.md                     # Comprehensive documentation
├── supabase/
│   └── migrations/
│       ├── 001_initial_schema.sql# PostgreSQL tables, indexes, RLS policies
│       └── 002_seed_data.sql     # Complete seed data for technologies & projects
├── public/
│   ├── favicon.svg               # Vector SVG developer mark
│   ├── robots.txt                # Crawler directives
│   ├── sitemap.xml               # Search index
│   └── cv.pdf                    # Resume PDF placeholder
└── src/
    ├── main.ts                   # Application lifecycle & section assembly
    ├── types/
    │   └── index.ts              # TypeScript interfaces (Project, Technology, ContactMessage, etc.)
    ├── data/
    │   ├── portfolio.config.ts   # Central single-source-of-truth configuration
    │   ├── projects.data.ts      # 6 comprehensive real-world case studies & diagrams
    │   ├── skills.data.ts        # Categorized skills (Languages, Web, .NET, DB, Cloud)
    │   ├── codeSnippets.data.ts  # Authentic code samples (C#, Java, TS, PHP, SQL)
    │   ├── databases.data.ts     # Deep database capability cards
    │   └── timeline.data.ts      # Experience & education journey
    ├── services/
    │   ├── supabaseClient.ts     # Supabase client singleton with offline fallback
    │   ├── projectService.ts     # Hybrid fetcher (Supabase -> Local data) with multi-filters
    │   ├── contactService.ts     # Validated submission to Supabase contact_messages table
    │   └── analyticsService.ts   # Non-blocking telemetry tracking
    ├── utils/
    │   ├── dom.ts                # Safe DOM manipulation & HTML escaping
    │   ├── theme.ts              # Dark/Light mode engine with localStorage persistence
    │   └── highlighter.ts        # Fast, zero-dependency token syntax highlighter
    ├── styles/
    │   ├── variables.css         # Dark/Light design tokens & color palettes
    │   ├── base.css              # Typography hierarchy, resets, ambient canvas
    │   ├── components.css        # Buttons, cards, modals, terminal, badges, forms
    │   ├── animations.css        # Smooth transitions, glows, prefers-reduced-motion
    │   ├── responsive.css        # Responsive breakpoints (1920px -> 390px mobile)
    │   └── main.css              # Master CSS entrypoint
    └── components/
        ├── Navbar.ts             # Sticky navbar, scrollspy, mobile menu, theme toggle
        ├── Hero.ts               # 55/45 split, dynamic title rotator, CTAs, floating IDE
        ├── Terminal.ts           # Interactive floating bash terminal (whoami, skills)
        ├── StatsBar.ts           # Metrics banner driven by portfolio.config.ts
        ├── About.ts              # Narrative, profile badge, 3 engineering pillars
        ├── Skills.ts             # Categorized skill badges with click-to-filter interaction
        ├── TechArchitecture.ts   # Layered system architecture visualization
        ├── Projects.ts           # Search, category pills, tech filter, reactive grid
        ├── ProjectCard.ts        # Card with hover zoom, tags, links, case study trigger
        ├── CaseStudyModal.ts     # Deep case study modal with architecture diagrams
        ├── CodeShowcase.ts       # "Behind the Code" tabbed editor with real code
        ├── DatabaseExpertise.ts  # "Working With Data" cards for SQL Server, MySQL, etc.
        ├── Timeline.ts           # Vertical education and experience milestones
        ├── Workflow.ts           # "How I Build Software" 6-step engineering methodology
        ├── Contact.ts            # Validated contact form, rate limiting, Supabase save
        ├── Footer.ts             # Semantic footer with dynamic copyright year
        └── Toast.ts              # Action feedback toast notifications
```

---

## 🛠️ Installation & Setup

### Prerequisites
- [Node.js](https://nodejs.org/) version 18+ (tested on v24.12.0)
- npm version 9+

### 1. Clone & Install Dependencies
```bash
git clone <repository-url>
cd <repository-directory>
npm install
```

### 2. Environment Configuration (Supabase)
Copy the environment example file:
```bash
cp .env.example .env
```
Fill in your Supabase project credentials (obtainable from your [Supabase Dashboard](https://supabase.com/dashboard)):
```env
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-public-anon-key
```

> **Note**: If you run without configuring Supabase credentials, the website **automatically fails over to local mock data and demo mode**. The portfolio remains 100% interactive!

### 3. Apply Supabase Database Migrations
In your Supabase SQL Editor, run the SQL scripts located in:
1. `supabase/migrations/001_initial_schema.sql` (Creates tables, indexes, and Row Level Security policies)
2. `supabase/migrations/002_seed_data.sql` (Inserts initial technologies and projects)

---

## 💻 Development & Build

### Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your browser.

### Type Check & Production Build
```bash
npm run build
```
Generates production-ready, minified assets in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

---

## ⚙️ Customization Guide

### Editing Developer Information
All personal details are centralized in a single configuration file:
👉 **`src/data/portfolio.config.ts`**

Simply edit:
- `name`: Your full name (replaces `[YOUR NAME]`)
- `titles`: Array of rotating roles in the Hero section
- `headline` & `subheadline`: Main personal statements
- `bio` & `extendedBio`: About Me narrative paragraphs
- `email`, `github`, `linkedin`, `location`
- `resumeUrl`: Path to your CV file (`/cv.pdf`)
- `metrics`: Stat numbers (e.g., `6+`, `15+`, `5`)
- `pillars` & `workflow`: Custom engineering principles

### Replacing the Resume (CV)
Replace the placeholder file located at:
👉 **`public/cv.pdf`**

---

## 🚢 Deployment to Vercel or Netlify

### Deploying on Vercel
1. Push your repository to GitHub.
2. Import the project into [Vercel](https://vercel.com).
3. Framework Preset: **Vite**.
4. Build Command: `npm run build`.
5. Output Directory: `dist`.
6. Add Environment Variables:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
7. Click **Deploy**.

### Deploying on Netlify
1. Import repository into [Netlify](https://netlify.com).
2. Build command: `npm run build`.
3. Publish directory: `dist`.
4. Configure environment variables in Site settings.

---

## 🔒 Security & Privacy

- **No Secrets on Frontend**: Only the public anonymous key (`anon_key`) is used.
- **Row Level Security (RLS)**: Public visitors can only read published projects and insert new contact messages. They cannot view other visitors' contact inquiries.
- **Anti-Spam & Input Validation**: Contact submissions are client-validated and rate-limited.
