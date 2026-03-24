

# Add 6 Missing Cities to cityData.ts

## Summary
Out of ~30 cities the user listed, only 6 are actually missing from the codebase. All others were already added in previous updates.

## Change — `src/lib/cityData.ts`

Add these 6 entries:

| City | Hub | State | Languages | Slug | State Slug |
|---|---|---|---|---|---|
| Sepang | Cyberjaya Hub | Selangor | BM, EN | sepang | selangor |
| Batu Kawan | Seberang Perai Hub | Penang | CN, BM, EN | batu-kawan | penang |
| Senawang | Seremban Hub | Negeri Sembilan | BM | senawang | negeri-sembilan |
| Sendayan | Seremban Hub | Negeri Sembilan | BM, EN | sendayan | negeri-sembilan |
| Kuala Nerus | Kuala Terengganu Hub | Terengganu | BM | kuala-nerus | terengganu |
| Labuan | Labuan Hub | W.P. Labuan | BM, EN | labuan | labuan |

### Placement
- **Sepang**: Insert after Putrajaya in the Cyberjaya Hub block
- **Batu Kawan**: Insert after Nibong Tebal in the Seberang Perai Hub block
- **Senawang & Sendayan**: Insert after Mantin in the Seremban Hub block
- **Kuala Nerus**: Insert after Kuala Terengganu in the Kuala Terengganu Hub block
- **Labuan**: Add as new Labuan Hub block at the end

### Labuan Hub note
Labuan is a Federal Territory (W.P. Labuan), so it needs a new state slug `labuan`. This is consistent with how W.P. Kuala Lumpur uses `kuala-lumpur` as its state slug.

## No other files need changes
City pages are dynamically generated from `cityData.ts`, so adding entries here automatically creates routes, sitemap entries, and page content.

