# Portfolio Monorepo

## Overview
Personal portfolio built with **Next.js 16**, **React 19**, **Tailwind v4**, and **shadcn/ui** (Lyra style, Amber theme).

## Structure
```
apps/web/          → Next.js app (imports from @workspace/ui)
packages/ui/       → Shared shadcn components, utils, styles
packages/typescript-config/
packages/eslint-config/
```

## Commands
```bash
pnpm dev           # Start dev server (Turbo)
pnpm build         # Build all packages
```

## Adding shadcn Components

**Always run from `apps/web/`:**
```bash
cd apps/web
pnpm dlx shadcn@latest add button    # Add single component
pnpm dlx shadcn@latest add card input label   # Add multiple
```

Components install to `packages/ui/src/components/`, utils to `packages/ui/src/lib/`.

## Using Components

```tsx
// Import from @workspace/ui
import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

// Usage
<Button variant="default">Click me</Button>
<Button variant="destructive" size="sm">Delete</Button>
```

## Styling
- **Theme**: Amber with OKLCH colors
- **Style**: `base-lyra` (shadcn December 2025)
- **CSS Variables**: Defined in `apps/web/app/globals.css`
- **Dark mode**: Add `dark` class to html/body

## Key Files
| File | Purpose |
|------|---------|
| `apps/web/components.json` | shadcn config for web app |
| `packages/ui/components.json` | shadcn config for UI package |
| `apps/web/app/globals.css` | Theme variables, Tailwind imports |
| `packages/ui/src/lib/utils.ts` | `cn()` utility for class merging |
