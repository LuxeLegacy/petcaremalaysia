## Diagnosis

Production is now serving the updated bundle with no `ui-vendor` chunk, so the previous `React.forwardRef` Radix issue is gone.

The remaining production crash is:

```text
ReferenceError: Cannot access 'S' before initialization
at /assets/chart-vendor-DFrgaF6_.js
```

That bundle contains Recharts code calling `S.forwardRef`, meaning the separate `chart-vendor` chunk is still evaluating React-dependent code before its React binding is initialized.

## Fix Plan

1. **Update Vite chunking**
   - Edit `vite.config.ts` only.
   - Move `recharts` and `d3-*` into the existing `react-vendor` group instead of returning `chart-vendor`.
   - Remove the separate `chart-vendor` manual chunk rule so all chart modules that touch React evaluate with React.

2. **Keep scope tight**
   - No homepage layout changes.
   - No content, SEO, schema, prerender, routing, or backend changes.
   - No package upgrades.

3. **Validate after implementation**
   - Confirm production-style chunks no longer include `chart-vendor` as a separate React-dependent preload.
   - Open the site and confirm the console no longer shows `Cannot access 'S' before initialization`.
   - Sample the homepage after the change to verify it renders visibly.

## Deploy Note

This is a frontend build config change. After implementation, click **Update** in the Publish dialog to push the rebuilt bundle to `https://petcaremalaysia.com/`.