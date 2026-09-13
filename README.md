# Art by Sam — Artist Portfolio & Archive

Official website for **Samridhi (Sam)** — independent artist and illustrator.  
Built with **Astro 4.x (SSG)**, **Tailwind CSS**, and **Sveltia CMS**, designed for fast, zero-cost static hosting on **GitHub Pages**.

---

## 🎨 Features

- **Editorial Paintings Archive:** Spacious, museum-style layout honoring natural canvas aspect ratios without aggressive cropping.
- **Client-Side Reactive Filtering:** Filter by `Available Works`, `Women / The Girls`, `Figurative`, `Travel & Places`, `Nature / Water`, `Still Life`, and `New Work`.
- **Artwork Detail Pages:** High-resolution brushwork zoom, medium, dimensions, year, and dual inquiry buttons:
  - Form-based commission inquiry.
  - Context-aware **1-Click WhatsApp Chat** pre-filled with the artwork title and reference code.
- **Illustration Project Showcase:** Case studies for luxury wedding invitations, packaging illustration, baby announcements, and travel series with scope & deliverables lists.
- **Artist Admin Dashboard (CMS):** Powered by **Sveltia CMS** at `/admin`. Sam can add new paintings, upload photos, change prices, and toggle statuses from "Available" to "Sold" right from her phone or laptop without writing code.
- **Automated CI/CD:** GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and deploys to GitHub Pages in ~60 seconds upon push or CMS publish.

---

## 🚀 Quick Start (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. View in browser
# Website: http://localhost:4321
# Artist CMS: http://localhost:4321/admin
```

---

## 📦 Project Structure

```text
├── .github/workflows/deploy.yml  # Automated GitHub Actions deployment to GitHub Pages
├── public/
│   ├── admin/                    # Sveltia CMS configuration for Sam
│   │   ├── index.html
│   │   └── config.yml
│   └── images/                   # Uploaded artwork and studio imagery
├── src/
│   ├── content/
│   │   ├── config.ts             # Strict Zod schemas for Paintings & Illustrations
│   │   ├── paintings/            # Individual artwork JSON data files
│   │   └── illustrations/        # Illustration project JSON data files
│   ├── components/
│   │   ├── Header.astro          # Responsive editorial header with mobile menu
│   │   ├── Footer.astro          # Studio statement, links, and newsletter hook
│   │   ├── PaintingCard.astro    # Museum matting card with status badge
│   │   └── IllustrationCard.astro # Project card with category pill & deliverables
│   ├── layouts/
│   │   └── Layout.astro          # Primary layout with Cormorant Garamond & Plus Jakarta Sans
│   └── pages/
│       ├── index.astro           # Homepage with 5-second brand flow
│       ├── paintings/
│       │   ├── index.astro       # Filterable archive hub
│       │   └── [slug].astro      # Dedicated artwork detail view
│       ├── illustration/
│       │   ├── index.astro       # Categorized showcase
│       │   └── [slug].astro      # Project case study view
│       ├── about.astro           # Artist narrative, studio photos & process
│       ├── contact.astro         # Smart commission inquiry form & WhatsApp quick chat
│       └── 404.astro             # Custom 404 page
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

---

## 🌐 Deploying to GitHub Pages

1. Initialize git and push to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "feat: Art by Sam initial build"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
2. In your GitHub repository:
   - Go to **Settings** ➔ **Pages**.
   - Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. The included workflow (`.github/workflows/deploy.yml`) will automatically build and publish the site!
