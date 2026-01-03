# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Robotiks is a Next.js 16 marketing website for a robotics company. The main application lives in the `robotiks/` subdirectory.

## Development Commands

All commands should be run from the `robotiks/` directory:

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

### Tech Stack
- **Next.js 16** with App Router
- **React 19** with TypeScript
- **Tailwind CSS 4** for styling
- **Framer Motion** for animations
- **React Hook Form + Zod** for form validation
- **Lucide React** for icons

### Directory Structure (robotiks/src/)
- `app/` - Next.js App Router pages (each page.tsx is a route)
- `components/` - React components organized by purpose:
  - `ui/` - Reusable primitives (Button, Card, Section)
  - `layout/` - Header, Footer
  - `sections/` - Homepage section components (Hero, FeaturedProducts, etc.)
  - `animations/` - Animation wrapper components (FadeIn, StaggerContainer)
- `lib/` - Utilities (`cn()` for className merging via clsx)

### Path Aliases
Use `@/*` to import from `src/` (e.g., `import Button from "@/components/ui/Button"`)

### Design System
- Dark theme with consistent color tokens:
  - Background: `#0a0a0f` (near black)
  - Cards/surfaces: `#1f1f2e`
  - Primary accent: `#8b5cf6` (purple)
  - Secondary accent: `#06b6d4` (cyan)
  - Tertiary accent: `#ec4899` (pink)
  - Muted text: `#a1a1aa`
- Global CSS classes: `gradient-bg`, `gradient-text`, `glass-card`
- Components use Framer Motion for hover/tap animations and viewport-triggered fade-ins

### Component Patterns
- Client components require `"use client"` directive
- UI components accept `className` prop for style extension
- Animations use `FadeIn` wrapper or direct Framer Motion with `whileInView`
- Forms use react-hook-form with zodResolver for validation
