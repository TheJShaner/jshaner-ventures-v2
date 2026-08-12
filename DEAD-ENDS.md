# Dead Ends Audit

Date: 2026-08-12
Scope: `/Users/jshaner/HQ/DEV/ACTIVE/jshaner-ventures-v2` only
Method: Git baseline, existing codebase-memory graph (223 nodes/262 edges), tracked-file inspection, literal/config search, tests, ESLint, TypeScript, production build, and redacted gitleaks scan. No live forms, paid APIs, backend writes, production data, excluded folders, or sibling repositories were touched.

## Counts

| Category | Verified | Unverified |
|---|---:|---:|
| Unused files | 5 | 0 |
| Unused page/API routes | 0 | 0 |
| Unused components/functions | 0 | 0 |
| Unreachable UI branches | 1 | 0 |
| Stub/COMING SOON items | 7 | 0 |
| TODO/FIXME/HACK markers | 0 | 0 |
| Unused environment/config keys | 0 | 3 CSP permissions |
| False current documentation claims | 4 | 2 |

## Verified dead ends and stubs

### Five unused create-next-app assets

No references were found in tracked application source, config, package files, README, or STATUS:

- `public/file.svg`
- `public/globe.svg`
- `public/next.svg`
- `public/vercel.svg`
- `public/window.svg`

They are retained; this audit does not delete files.

### Vault: seven inaccessible content stubs

All seven entries in `src/app/vault/page.tsx:6-70` are `COMING SOON` and `locked: true`. The rendered cards expose no link or action (`src/app/vault/page.tsx:114-141`). The alternative `[ACCESS]` branch at lines 134-137 is unreachable under the current constant data, and would still be inert because it renders a `span`, not a link or button.

The page claim at `src/app/vault/page.tsx:91` that the repository contains deployable assets is not supported by any exposed asset on that route.

### Routes and source symbols

- Eight page routes exist: `/`, `/authority`, `/contact`, `/free-audit`, `/legal`, `/roadmap`, `/services`, `/vault`.
- All eight are reachable from the global header/footer and included in `src/app/sitemap.ts`.
- Zero local API routes exist. Therefore zero unreachable APIs were found.
- All three shared components and all 19 graph-indexed functions are framework entry points or have verified callers. Zero unused source components/functions were found.
- Zero auth, payment, local database, scraper, or import implementations exist.
- Zero `TODO`, `FIXME`, `HACK`, `XXX`, or not-implemented markers were found in application source.

## External data-write and analytics surfaces

- Two browser-side Formspree submission endpoints: contact (`src/app/contact/page.tsx:54`) and free audit (`src/app/free-audit/page.tsx:75`). Live endpoint validity and delivery are **UNVERIFIED** because live calls were prohibited.
- Form submission follow-through promises (one business day / 48 hours) are not implemented in this repository. They may be manual or external: **UNVERIFIED**.
- `submitFormspree` has success, non-2xx, and network-failure tests. It has no timeout/abort, so a hung request can leave either form disabled indefinitely. This is a verified risk, not reproduced breakage.
- External scripts/services: Ahrefs Web Analytics, Google Analytics, Vercel Analytics, Vercel Speed Insights, and Google Fonts.

## Config findings

- Zero `process.env` or `NEXT_PUBLIC_*` references; no unused environment keys found.
- Facebook script/connect/frame permissions and Google Tag Manager frame permission exist in `next.config.ts:17-22`, but no matching source integration was found. Dynamic vendor behavior is **UNVERIFIED**; permissions were not removed.
- CSP permits `'unsafe-eval'` globally (`next.config.ts:17`). Security risk noted; no confirmed breakage, so unchanged.
- Sitemap assigns every route the same hard-coded `lastModified` date, 2026-07-08 (`src/app/sitemap.ts:4-14`), despite later source changes. Stale metadata; unchanged because the correct per-route dates require a content policy decision.

## False or stale documentation claims

1. `README.md:19` says the page source is `app/page.tsx`; actual path is `src/app/page.tsx`.
2. `STATUS.md:9` says local main is three commits ahead; audit baseline was four commits ahead (`0 4`).
3. `public/llms-full.txt:52-73` labels seven vault assets `[ACTIVE]` or `[BUILD]`; the UI source marks all seven `COMING SOON` and locked.
4. `public/llms.txt:10` describes `/vault` as a repository of operational assets/scripts/tools/docs, but the route exposes no downloadable or navigable assets.

Additional documentation state:

- `README.md` remains generic create-next-app boilerplate. Its create-next-app provenance is **UNVERIFIED**.
- `STATUS.md:6` says `State: Live`; deployment metadata exists, but production availability was not tested. **UNVERIFIED**.
- `STATUS.md:19` accurately calls `/vault` an intentional seven-card locked surface.

Docs were not rewritten, per audit scope.

## Confirmed fix made during audit

`src/app/legal/page.tsx` claimed only voluntary/server-log collection, no third-party sharing, and no Formspree retention. Those claims contradicted the scripts and form submission flow in source. The policy now identifies the analytics providers, service-provider disclosure, and Formspree processing/storage. Effective date updated to August 2026.

## Secrets and ignore coverage

Requested ignore probes are functionally covered:

- `*.pem`: present
- `*.key`: present
- `credentials.json`: covered by `*credentials*.json` and deny-all `*.json`
- `token*.json`: covered by `*token*.json` and deny-all `*.json`
- `service-account*.json`: covered by `*service*account*.json` and deny-all `*.json`

Initial exact command:

```text
$ gitleaks detect --source . --no-banner --redact
exit 1
1:12PM INF 19 commits scanned.
1:12PM INF scanned ~418226 bytes (418.23 KB) in 263ms
1:12PM WRN leaks found: 1
```

Redacted diagnosis identified the public Ahrefs Web Analytics `data-key` installed in `src/app/layout.tsx:98`, commit `fae17486795047bb5d5b7b43c97a10130d18c950`; no value was printed. Ahrefs requires this identifier in the public browser script tag, so `.gitleaksignore` now contains only that finding's fingerprint. No key was changed or exposed.

Post-fix exact scan and final validation are recorded in the audit commit/final handoff.

## Baseline

```text
$ pwd
exit 0
/Users/jshaner/HQ/DEV/ACTIVE/jshaner-ventures-v2

$ git rev-parse --show-toplevel
exit 0
/Users/jshaner/HQ/DEV/ACTIVE/jshaner-ventures-v2

$ git status --short --branch
exit 0
## main...origin/main [ahead 4]
 M AGENTS.md
?? .agents/
?? .gemini/
?? .grok/
?? docs/

$ git config user.name
exit 0
JShaner

$ git config user.email
exit 0
207599957+TheJShaner@users.noreply.github.com
```

Baseline HEAD: `8401617123ec47224afcecdd0888c41424540c56`
Baseline `origin/main`: `fae17486795047bb5d5b7b43c97a10130d18c950`
No outer aggregate commit target exists; exact Git root equals the scoped repository.
