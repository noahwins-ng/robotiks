# Architectural Patterns

This document describes recurring patterns used throughout the Robotiks codebase.

## Client Component Pattern

All interactive components use the `"use client"` directive at the top of the file.

**Examples:**
- `src/components/ui/Button.tsx:1`
- `src/components/layout/Header.tsx:1`
- `src/app/contact/page.tsx:1`

## Compound Component Pattern

Components export sub-components for composition flexibility.

**Example:** Card component with CardHeader, CardTitle, CardDescription, CardContent, CardFooter
- Definition: `src/components/ui/Card.tsx:39-82`
- Usage: `src/components/sections/ServicesOverview.tsx:48-80`

## Props Interface Pattern

All components define explicit TypeScript interfaces for props with optional `className` extension.

**Examples:**
- `src/components/ui/Button.tsx:7-19` - ButtonProps with variant, size, href
- `src/components/ui/Card.tsx:5-11` - CardProps with hover, glow options
- `src/components/ui/Section.tsx:3-8` - SectionProps with background options

## Animation Patterns

### FadeIn Wrapper

Viewport-triggered fade animations with directional support.

- Definition: `src/components/animations/FadeIn.tsx:23-46`
- Usage: `src/components/sections/FeaturedProducts.tsx:125-141`

### StaggerContainer + StaggerItem

Staggered child animations for wave effects.

- Definition: `src/components/animations/FadeIn.tsx:54-96`
- Usage: `src/components/sections/FeaturedProducts.tsx:67-121`
- Usage: `src/components/sections/ServicesOverview.tsx:45-82`

### Hover/Tap Animations

Interactive micro-animations using Framer Motion.

- Button: `src/components/ui/Button.tsx:59-80` - scale on hover/tap
- Card: `src/components/ui/Card.tsx:19-35` - lift and scale on hover

## Form Handling Pattern

React Hook Form + Zod schema validation.

- Schema definition: `src/app/contact/page.tsx:25-50`
- Form hook setup: `src/app/contact/page.tsx:76-82`
- Field with error handling: `src/app/contact/page.tsx:177-198`

## State Management Patterns

### Local State (useState)

- Menu toggle: `src/components/layout/Header.tsx:20`
- Form submission: `src/app/contact/page.tsx:74`
- Filter/search: `src/app/products/page.tsx:157-158`

### Viewport Detection (useRef + useInView)

- Animated counter: `src/components/sections/Stats.tsx:14-46`

## Data Structure Pattern

Collections use arrays of objects with consistent shape.

- Products: `src/components/sections/FeaturedProducts.tsx:10-47`
- Services: `src/components/sections/ServicesOverview.tsx:9-34`
- Navigation: `src/components/layout/Header.tsx:8-17`

## Page Composition Pattern

All pages follow: Hero section → Content sections → CTA section.

- Home: `src/app/page.tsx`
- Contact: `src/app/contact/page.tsx:94-412`
- Products: `src/app/products/page.tsx:169-356`
- Services: `src/app/services/page.tsx:148-288`

## Navigation Pattern

Dynamic navigation links from data array with Link component.

- Links array: `src/components/layout/Header.tsx:8-17`
- Desktop nav: `src/components/layout/Header.tsx:43-50`
- Mobile menu with AnimatePresence: `src/components/layout/Header.tsx:74-117`

## Styling Patterns

### Global CSS Classes

Defined in `src/app/globals.css`:
- `gradient-text` (line 38-43) - Multi-color gradient text
- `gradient-bg` (line 46-48) - Purple-to-cyan gradient background
- `glass-card` (line 55-59) - Glassmorphism effect

### CSS Custom Properties

Color tokens in `src/app/globals.css:3-29` integrated with Tailwind via `@theme inline`.

### className Merging

All components use `cn()` utility for className composition.
- Utility: `src/lib/utils.ts:1-5`
- Usage: `src/components/ui/Button.tsx:44`

## Icon Pattern

Lucide React icons imported and used as components.

- Imports: `src/components/sections/ServicesOverview.tsx:3-6`
- Dynamic rendering: `src/components/sections/ServicesOverview.tsx:51-53`

## Search/Filter Pattern

Client-side filtering with useState.

- Implementation: `src/app/products/page.tsx:156-166`
