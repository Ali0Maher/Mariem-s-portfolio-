# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a portfolio website for Mariam, a Project Manager specializing in system architecture, process optimization, and cross-functional team leadership. The portfolio showcases case studies of operational systems built for efficiency and impact.

## Requirements

- **Node.js:** 20.19+ or 22.12+ (Vite 7 requirement)
- **Package Manager:** pnpm (v10.4.1+)

## Development Commands

**Development:**
```bash
pnpm dev        # Start dev server on port 3000 (or next available)
```

**Build & Production:**
```bash
pnpm build      # Build client + bundle server with esbuild
pnpm start      # Run production server (requires build first)
```

**Code Quality:**
```bash
pnpm check      # TypeScript type checking (no emit)
pnpm format     # Format all files with Prettier
```

## Architecture

### Stack
- **Frontend:** React 19 + TypeScript + Vite
- **Routing:** Wouter (lightweight client-side routing)
- **UI Components:** Shadcn/ui (Radix UI primitives)
- **Styling:** Tailwind CSS v4 with CSS variables
- **Server:** Express (static file serving + SPA fallback)

### Project Structure
```
client/
  src/
    pages/         # Page components (Home, NotFound)
    components/    # React components
      ui/          # Shadcn/ui components (auto-generated, use sparingly)
    contexts/      # React contexts (ThemeContext)
    hooks/         # Custom React hooks
    lib/           # Utilities
    index.css      # Global styles + Tailwind config
server/
  index.ts         # Express server for production
shared/
  const.ts         # Shared constants between client/server
```

### Key Architectural Decisions

**Path Aliases:**
- `@/*` → `client/src/*`
- `@shared/*` → `shared/*`
- `@assets/*` → `attached_assets/*` (defined in vite.config.ts)

**Theme System:**
- Theme controlled via `ThemeProvider` in `contexts/ThemeContext.tsx`
- Currently set to light mode only (not switchable)
- To enable theme switching: pass `switchable` prop to `ThemeProvider` and use `useTheme()` hook
- Color palette defined in `client/src/index.css` using CSS variables
- Important: When changing default theme, update color palette to maintain consistent foreground/background

**Routing:**
- Uses Wouter for client-side routing (lightweight alternative to React Router)
- Patched version of wouter (see `patches/wouter@3.7.1.patch`)
- Server handles SPA routing by serving `index.html` for all routes

**UI Components:**
- Shadcn/ui components in `client/src/components/ui/` are auto-generated
- Configured via `components.json` (New York style, neutral base color)
- Avoid direct edits to ui components; prefer composition

**Package Management:**
- Uses pnpm (v10.4.1+)
- Wouter has a patch applied (see `pnpm.patchedDependencies`)
- Override for tailwindcss>nanoid to use version 3.3.7

### Content Architecture

The Home page (`client/src/pages/Home.tsx`) contains bilingual content (English/Arabic) with:
- Hero section with title, subtitle, and CTA
- Core expertise section
- Case studies with screenshots (from `/images/case-studies/` or `/images/`)
- Skills & tools categorization
- Contact information

All content is hardcoded in the component as a `content` object with language keys.

## Build Process

1. `vite build` creates optimized client bundle in `dist/public/`
2. `esbuild` bundles `server/index.ts` as ESM to `dist/index.js`
3. Production server serves from `dist/public/` and falls back to `index.html` for SPA routing

## Design Philosophy

From `ideas.md`, this portfolio follows "The Clear Path" approach:
- Editorial Clean / Scandinavian Design
- Color palette: Warm white (#ffffff), soft black (#1a1a1a), navy blue (#0A2647)
- Single-column narrative layout
- Readability first, minimal animations
- Typography: Serif headings (editorial authority) + sans-serif body (friendly reading)
