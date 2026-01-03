# CLAUDE.md

## Project Overview

Robotiks is a Next.js 16 marketing website for a robotics company.

## Tech Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4
- Framer Motion
- React Hook Form + Zod
- Lucide React icons

## Directory Structure

```
src/
├── app/           # Pages (each page.tsx is a route)
├── components/
│   ├── ui/        # Primitives: Button, Card, Section
│   ├── layout/    # Header, Footer
│   ├── sections/  # Homepage sections (Hero, FeaturedProducts, etc.)
│   └── animations/# FadeIn, StaggerContainer wrappers
└── lib/           # Utilities (cn() for className merging)
```

## Commands

```bash
npm run dev      # Development server (localhost:3000)
npm run build    # Production build
npm run start    # Production server
npm run lint     # ESLint
```

## Path Aliases

Use `@/*` to import from `src/` (e.g., `import Button from "@/components/ui/Button"`)

## Design System

Color tokens defined in `src/app/globals.css:3-29`:
- Background: `#0a0a0f`
- Surfaces: `#1f1f2e`
- Primary: `#8b5cf6` (purple)
- Secondary: `#06b6d4` (cyan)
- Accent: `#ec4899` (pink)
- Muted: `#a1a1aa`

Global utility classes: `gradient-bg`, `gradient-text`, `glass-card`

## Additional Documentation

Check these files for detailed patterns when relevant:

| Topic | File |
|-------|------|
| Architectural patterns | `.claude/architectural_patterns.md` |
