# AGENTS.md

## Project Overview

Personal portfolio website for Nithiwut Wilainuch.

Focus areas:

- Backend Engineering
- Cloud Architecture
- Platform Engineering
- AWS & Kubernetes

Tech stack:

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion

Deployment:

- Cloudflare Pages

Domain:

- nithiwut.com

---

## Design Direction

Use:

- modern minimal aesthetic
- premium dark mode
- large typography
- subtle smooth animations
- responsive layout
- clean spacing
- engineering-focused branding

Inspired by:

- Vercel
- Linear
- Stripe

Avoid:

- overcomplicated animations
- cluttered UI
- excessive colors
- unnecessary dependencies
- flashy effects

---

## Architecture Rules

- Use Next.js App Router
- Use TypeScript strict mode
- Use reusable components
- Use Tailwind utility classes
- Use semantic HTML
- Prefer server components when possible
- Keep components modular and scalable

---

## Folder Structure

```bash
/public

/src
  /app
  /components
  /sections
  /hooks
  /lib
  /styles
  /types
  /utils
```

---

## Sections To Implement

- Hero
- About
- Experience
- Skills
- Projects
- Resume
- Contact

---

## Important Features

- Resume download
- LinkedIn integration
- GitHub integration
- Responsive design
- SEO optimization
- Smooth scrolling
- Dark mode UI

---

## Resume

Resume PDF generation:

```bash
src/data/resume.ts
src/lib/generateResumePdf.ts
```

The site generates the resume client-side from structured data. Do not store or serve a static resume PDF file.

---

## Commands

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build production:

```bash
npm run build
```

Lint:

```bash
npm run lint
```

---

## Code Style

- Keep components small and reusable
- Use meaningful naming
- Prefer composition over duplication
- Avoid hardcoded values when possible
- Use responsive-first design
- Maintain accessibility standards

---

## UI Guidelines

- Large readable typography
- Minimal color palette
- Smooth hover interactions
- Soft transitions
- Clean section spacing
- Premium SaaS-style layout

---

## Performance Goals

- Lighthouse score 90+
- Fast loading
- Optimized assets
- SEO friendly
- Mobile optimized

---

## Future Features

Potential future enhancements:

- Blog
- AI chatbot assistant
- Visitor analytics
- Command palette
- Interactive terminal UI
- Multi-language support

---

## AI Agent Responsibilities

The AI agent should help:

- generate reusable components
- implement responsive layouts
- improve accessibility
- optimize performance
- maintain architecture consistency
- improve developer experience

Generated code should:

- follow TypeScript best practices
- be production-ready
- avoid unnecessary complexity
- remain maintainable and scalable
