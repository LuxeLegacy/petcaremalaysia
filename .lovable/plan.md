## Problem

Every page on https://petcaremalaysia.com/ renders blank. The console shows:

```
TypeError: Cannot read properties of undefined (reading 'forwardRef')
  at ui-vendor-C62rvaqJ.js
```

The HTML, CSS, JS bundles, and SEO/prerender output are all fine — the SPA crashes on hydration before React can mount, so the prerendered placeholder is all that remains visible.

## Root cause

`vite.config.ts` (added in Phase 2 #15 code-splitting) splits dependencies into separate chunks:

- `react-vendor` → `react`, `react-dom`, `scheduler`, `react-router`
- `ui-vendor` → `@radix-ui/*`, `lucide-react`, `cmdk`, `sonner`, `vaul`, `class-variance-authority`, `tailwind-merge`, `clsx`

Radix UI packages call `React.forwardRef` at module-evaluation time. With the current split, `ui-vendor` evaluates before `react-vendor` finishes initializing React's CJS-interop default export, so `React` is `undefined`. This is a well-known footgun when manually chunking React separately from libraries that consume it via the default import.

## Fix

Edit `vite.config.ts` so that any chunk that depends on React is bundled together with React itself. Two equivalent options:

1. **Merge** — put React + Radix + all small UI libs into a single `vendor` chunk. Simple, eliminates the ordering risk entirely.
2. **Keep splits, but co-locate React** — return `"react-vendor"` for both `react*` and `@radix-ui/*` / lucide / cmdk / sonner / vaul / cva / tailwind-merge / clsx.

Recommend option 2 (keeps the existing chunk names, no other code or HTML references break, smallest diff).

Concretely, the new `manualChunks` becomes:

```ts
manualChunks(id) {
  if (!id.includes("node_modules")) return;

  // Everything that touches React must live in the same chunk as React itself
  if (
    id.match(/node_modules\/(react|react-dom|scheduler|react-is)\//) ||
    id.includes("react-router") ||
    id.includes("@radix-ui") ||
    id.includes("lucide-react") ||
    id.includes("cmdk") ||
    id.includes("sonner") ||
    id.includes("vaul") ||
    id.includes("class-variance-authority") ||
    id.includes("tailwind-merge") ||
    id.includes("clsx")
  ) return "react-vendor";

  if (id.includes("@tanstack/react-query") || id.includes("react-helmet-async")) return "query-vendor";
  if (id.includes("react-hook-form") || id.includes("@hookform") || id.includes("zod")) return "form-vendor";
  if (id.includes("recharts") || id.includes("d3-")) return "chart-vendor";
  if (id.includes("@supabase")) return "supabase-vendor";
  if (id.includes("date-fns") || id.includes("react-day-picker")) return "date-vendor";
  if (id.includes("embla-carousel")) return "carousel-vendor";
},
```

Also explicitly add `react-is` to the React group — Radix imports it at evaluation time and the same ordering problem can recur otherwise.

## Validation

1. Build runs and emits a single `react-vendor-*.js` containing React + Radix + small UI helpers; `ui-vendor-*.js` no longer exists.
2. Open the deployed preview/published URL — homepage and a sampled city / PAA / dental / urinary route render normally with no `forwardRef` console error.
3. Network panel shows `react-vendor` loaded once, no other chunks fail.

## Out of scope

- No SEO, prerender, content, or component-tree changes.
- No package upgrades.
- The Phase 2 route-level `React.lazy` code-splitting in `App.tsx` stays as-is (it isn't the cause).

## Deploy note

Frontend-only change. After the edit lands, the user must click **Update** in the publish dialog to push the fix to https://petcaremalaysia.com/.
