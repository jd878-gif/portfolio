# Jeet Dave — Portfolio

A premium, recruiter-friendly portfolio built with Next.js 15, TypeScript, Tailwind CSS,
Framer Motion, GSAP (ScrollTrigger-driven timeline), Three.js, and a Cmd+K command palette.

## What's real vs. what you need to fill in

Every skill, project, metric, and credential on this site is pulled directly from your
resume and verified project history — nothing was invented. One thing still needs your input:

- **Domain** — `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts` use
  `https://jeetdave.dev` as a placeholder. Replace with your real domain once you have one
  (a free `vercel.app` URL works fine too — just update these three spots to match).

LinkedIn (`linkedin.com/in/jeetdave11`) and location (Jersey City, NJ) are already set correctly.

No professional photo is used by design (per your call) — the hero leans on the animated
pipeline visual and typography instead.

## Run locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000. Press **Cmd+K** (or **Ctrl+K**) anywhere to open the command palette.

## Deploy to Vercel (free, ~3 minutes)

1. Push this folder to a new GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git remote add origin https://github.com/jd878-gif/YOUR-REPO-NAME.git
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new), import the repo, and click **Deploy**.
   No environment variables or config needed — it just works.
3. Once live, update the domain placeholders mentioned above and redeploy
   (`git push` triggers an automatic redeploy).

## Project structure

```
app/                  Routes, layout, SEO (sitemap, robots, metadata, JSON-LD)
app/opengraph-image.tsx  Auto-generated social preview card (no image file needed)
components/sections/  One file per page section (Hero, About, Skills, Projects, ...)
components/layout/    Navbar, Footer
components/ui/        Reusable pieces (command palette, theme toggle, pipeline canvas)
components/providers/ next-themes wrapper
lib/data.ts           ALL content lives here — edit this file to update anything on the site
public/resume.pdf      Your resume, served for download/preview
```

## Updating content

Everything text-based — projects, skills, experience, certifications — lives in a single
file: `lib/data.ts`. You don't need to touch any component to update copy.

To add a new project, add an entry to the `projects` array with the same shape as the
existing ones — it'll automatically appear in the grid and respect the category filter.

## Notes on sections that were adjusted from the original brief

- **Skills**: only includes tools verified in your resume/project history (no Java,
  TensorFlow, PyTorch, Kubernetes, Terraform, MongoDB, Redshift, or Postgres — none of
  those appear in your actual background, per your decision).
- **Open Source**: swapped from a fictional "AutoClean" library to a live GitHub feed
  (`components/sections/github-activity.tsx`) — it fetches your real public repos and a
  real contribution graph at page load, no fabricated stats.
- **Blog**: swapped to "Deep Dives" — two real technical write-up links pointing at your
  actual repo documentation (causal inference + FraudSentinel architecture), rather than
  invented blog posts.
- **Achievements**: swapped from Kaggle/Hackerrank/publications (none of which currently
  exist) to "Milestones" — your real PySpark depth, SQL curriculum, LeetCode level, and
  AWS breadth.
- **Testimonials**: omitted — there's no real equivalent yet. Easy to add a section later
  once you have actual recommendations (e.g. from your NexGits manager).
- **Live demo links**: omitted on project cards since none of your projects currently have
  a hosted live demo — only GitHub links, which are real.

## Performance

Production build: **342 kB first-load JS** on the homepage, fully static-rendered, zero
server cost on Vercel's free tier. Verified locally: clean `next build` (zero TypeScript
errors, zero ESLint errors, all 5 page routes pre-rendered as static content). Lighthouse scores
will depend on your final domain/host, but the architecture (static generation, code-split
sections, `next/font`, lazy-loaded GitHub images) is built to clear 95+ on Performance, SEO,
and Best Practices out of the box.
