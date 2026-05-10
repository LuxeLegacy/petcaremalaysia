## Confidence
High — about 85%.

We now have a specific live production crash instead of a vague blank-page symptom:

```text
TypeError: Cannot read properties of undefined (reading 'createContext')
at /assets/query-vendor-B4lW4nDh.js
```

That strongly suggests the same class of issue as the previous crashes: React-dependent libraries are still being split into a separate manual chunk and evaluating before the React chunk is fully initialized.

## What’s happening
- The earlier `forwardRef` crash was one chunk-order problem.
- The later `chart-vendor` crash was another chunk-order problem.
- The current live crash is now in `query-vendor`, which contains `@tanstack/react-query` and `react-helmet-async`.
- Both rely on React context APIs during module evaluation, so keeping them outside the React vendor chunk can still break production even if local preview works.

## Plan
1. Update `vite.config.ts` so `@tanstack/react-query` and `react-helmet-async` are bundled into `react-vendor` instead of `query-vendor`.
2. Remove the separate `query-vendor` manual chunk rule entirely to avoid another React initialization race.
3. Re-verify the live site loads without the `createContext` error and check that the homepage visibly renders.
4. If another chunk still fails, continue collapsing only React-eval-sensitive libraries into `react-vendor` until production stabilizes.

## Technical details
This is a production bundling problem, not a homepage-content problem, routing problem, or backend problem.

The likely safe rule is:
- keep libraries that touch React at module-eval time in `react-vendor`
- only split libraries that do not require React initialization ordering

## Expected outcome
If this diagnosis is correct, the blank page should clear once the frontend is rebuilt and the published site is updated.