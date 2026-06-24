# Portfolio Redesign — Implementation Brief

> Self-contained brief for an AI build agent. Everything needed to execute is here; no prior conversation context is required. **Do not start coding until Section 6 (design direction) is approved by the owner and Section 9 (required assets) is satisfied.**

---

## 0. Repo facts

- **Owner:** Parth Salunkhe — Computer Engineering student at DTU (Class of 2027). Positioning: full-stack SaaS builder with cybersecurity depth + AI tooling.
- **Site:** https://parth7.me (custom domain).
- **Stack:** React 18 + Vite 5 + Tailwind 3 + framer-motion + react-router-dom 7 + lucide-react. Deployed on **Vercel** (vercel CLI + gh CLI available globally). `gh-pages` also configured.
- **Key paths:**
  - Page composition: `src/App.jsx` (routes: `/`, `/fun`, `/codevault`)
  - Sections: `src/components/` — `Hero.jsx`, `ProofStrip.jsx`, `CodeVaultHighlight.jsx`, `Projects.jsx`, `SkillsMatrix.jsx`, `ExperimentalBuilds.jsx`, `About.jsx`, `Footer.jsx`, `Navbar.jsx`, `BackToTop.jsx`, `CmdK.jsx`, `Fun.jsx`
  - Project case-study modals: `src/components/*Modal.jsx` (existing: UGV, GitaSaarthi, Retainr, plus Eternity/Whisper/DoomScroll/AeroVortex/Interpreter for /fun)
  - Design tokens: `tailwind.config.js`, `src/index.css`
  - Images: `src/assets/*.webp`; static: `public/`
  - Design references in-repo: `skills/design-taste-skill-pack/` (style folders + `SKILL.md` router), `skills/impeccable/`, `skills/css-animations/`
  - Stated design system (currently NOT matching code): `design-system/mywebsite/MASTER.md`
- **Owner's brand voice:** terse, technical, proof-oriented ("ship real deployed systems, not portfolio demos").

---

## 1. Goal & guiding decisions

1. **Scope:** FULL REDESIGN (owner-approved). Re-derive palette, typography, layout, and the signature element from scratch using the in-repo design skill packs. Keep component logic and real content; rethink the skin and structure.
2. **Workflow:** Present 2–3 concrete design directions (Section 6) → owner approves ONE → then build redesign + content/SEO fixes + case-study depth + 3 new projects in a single pass.
3. **North-star principle:** The current look (bright cyan `#00ffcc` on pure black + monospace eyebrows + numbered markers) is one of the three default "AI-generated" aesthetics. The redesign must NOT land on a default. The owner's authentic, differentiating asset is the **terminal / developer-tool / security-operator identity** (interactive terminal in About, Cmd+K, CodeVault, LastResort). Commit boldness to ONE signature; keep everything else quiet.
4. **Recruiter optimization (research-backed):** 3–5 great projects beat 10 mediocre; first useful work visible within one scroll (~15s screening); outcomes/metrics over skill-tag walls; live demos + real repos + mini case studies; load < 3s; mobile-first (68% of first views mobile); WCAG-compliant.

---

## 2. Current site map (before)

Hero → ProofStrip → CodeVault feature → Projects grid (6) → Skills Matrix (7 groups) → Experimental Builds (5) → About (bio + interactive terminal + Experience + Awards + Education) → Footer/Contact. Plus `/fun` archive and `/codevault` architecture page, a Cmd+K palette, a sticky auto-hiding navbar, a floating mini-CTA pill, and an ambient gooey/shader background.

---

## 3. Audit findings to fix (carry-over)

**Design**
- Cyan-on-black + mono eyebrows + numbered markers = templated default. Redesign per Section 6.
- Typography is Geist (Vercel's default) + Inter — reinforces "templated." `design-system/MASTER.md` specifies Archivo/Space Grotesk but code ignores it (spec/impl mismatch). Pick a characterful display face.
- Section numbers run **02 → 09 with no 01**, and eyebrows often duplicate the heading text (e.g. "03 // Selected Systems" above an h2 also reading "Selected Systems"). Drop numbering OR make it a genuine sequence; never duplicate heading text.
- Too many simultaneous "look at me" effects: ambient gooey/ethereal/pixel-trail/stars background + 4-line typewriter hero + floating mini-CTA pill + Cmd+K + scroll reveals everywhere. Keep micro-interactions; cut the ambient background OR the typewriter; remove the floating pill (navbar + Cmd+K already cover nav).

**Content / positioning**
- `index.html` meta description + JSON-LD say stale "Machine Learning, Computer Vision"; `jobTitle: Software Engineer / worksFor: Self-Employed`. Align to current "full-stack SaaS + security + AI/cloud" positioning; add `alumniOf` DTU.
- Skills Matrix has filler tags ("monitoring basics", "tool discovery", "debugging", "documentation"). Trim each group to 4–5 specific, real skills.
- ProofStrip uses non-stats as stats ("GCP + Vercel"). Replace at least one with a real number/outcome.
- Keep the two-tier split (Selected Systems vs Experimental/Fun + `/fun`) — it signals range without diluting serious work.

**Technical / SEO / performance**
- JS bundle ~442 KB uncompressed (framer-motion everywhere + background shader). Lazy-load the `/fun` route, the background effect, and the project modals.
- `og:image` is a portrait JPG (`parth-photo.jpg`), not a 1200×630 social card → poor LinkedIn/Twitter previews. Build a proper OG card (asset `codevault-card.webp` exists as a starting point).
- `src/assets/ugv-real.webp` is ~350 KB (oversized for a ~700×360 card). Re-export at display size (~40–60 KB). Audit all card images for size.
- Resume is fine: `public/Parth_Resume.pdf` exists (root `.docx` is just the source).
- No `sitemap.xml` (robots.txt exists) — add one.
- Confirm the ambient background (if kept) respects `prefers-reduced-motion` (React sections already do).

**Project listing**
- Several cards use `alt="...deployed project screenshot"` while not being deployed — misleading; fix alt text per real status.
- 3 projects show no GitHub (`github: '#'`): GitaSaarthi, Retainr, UGV. Either add real links or render a "Private repo" label instead of hiding.
- **Retainr.bot**: uses a stock Unsplash image, no repo, reads as a placeholder → CUT (or fully rebuild with a real screenshot + repo).
- Only 3 of 6 serious projects have a case-study modal — standardize depth (Section 7).

---

## 4. New projects to add

> All three are headline-tier. Fields marked **[CONFIRM]** are inferred from the owner's description and must be verified; **[REQUIRED]** must be supplied before build (see Section 9).

### 4.1 NeuroBrain — AI Creative Intelligence Platform
- **Category:** AI visual-attention + CRO auditing platform
- **What it does:** Users upload marketing creatives; NeuroBrain predicts where users will look (visual fixations), maps text via OCR, and returns actionable layout/conversion-rate-optimization recommendations.
- **Hardest engineering part:** Fusing computer-vision feature extraction + optical character mapping + a multimodal LLM into one pipeline that produces *specific, actionable* layout edits (not generic advice).
- **Stack [CONFIRM]:** Computer vision (OpenCV/PyTorch-class), OCR, multimodal LLM (e.g. GPT-4V / Gemini Vision), Python/FastAPI backend, React frontend.
- **Live URL:** [REQUIRED] · **GitHub:** [REQUIRED or "Private"]
- **Screenshot:** [REQUIRED]
- **Engineering notes (draft, confirm):**
  - Combines CV fixation prediction with OCR text mapping so recommendations reference real on-creative elements.
  - Frames model output as concrete layout edits for designers, not raw heatmaps.
- **Tier:** HEADLINE — top of grid, full case-study modal.

### 4.2 SoulMen — Tender/Vendor-Readiness Platform
- **Category:** B2B document-compliance SaaS (UAE contractor tendering)
- **What it does:** Helps UAE subcontractors avoid tender rejections by automatically checking vendor-registration and submission documents for missing, expired, or mismatched information before they submit to client portals (DEWA, Emaar, Aldar, ADNOC, main contractors).
- **Workflow:** Client requirements + company documents (Trade License, VAT, ISO, HSE Manual, Bank Letter, Company Profile) → SoulMen → flags missing/expired docs, name mismatches, and a **Submission Readiness Score** → "Ready / Not Ready".
- **Value prop:** "Don't find out you're missing documents after the client rejects you."
- **Hardest engineering part:** Parsing heterogeneous official documents and validating them against per-client requirement rule sets, including expiry windows and entity-name matching.
- **Stack [CONFIRM]:** Document parsing/OCR, LLM extraction, rules engine, React + backend (Node/FastAPI), Postgres.
- **Live URL:** [REQUIRED] · **GitHub:** [REQUIRED or "Private"]
- **Screenshot:** [REQUIRED]
- **Engineering notes (draft, confirm):**
  - Encodes per-client tender requirement sets and validates documents (presence, expiry, name match) against them.
  - Produces a single readiness score + actionable gap list instead of a raw document dump.
- **Tier:** HEADLINE — strong "solves a real, painful business problem" story recruiters reward. Full case-study modal.

### 4.3 LastResort — Autonomous Penetration-Testing Agent
- **Category:** Hybrid security scanner + autonomous web pentest agent (Go)
- **What it does:** Transitions a traditional vulnerability scanner into a fully autonomous agent that **plans, executes, and verifies** web-app attacks.
- **Architecture (well-specified):**
  - *LLM-driven planning:* integrates LLMs (Gemini / OpenRouter) to form hypotheses, generate exploit payloads, and evaluate real-time feedback — instead of static signatures/payload lists.
  - *Browser-based execution & verification:* runs Playwright; validates findings by executing payloads in a real browser and checking DOM changes / script execution (e.g. confirming an XSS `alert()` actually fires) rather than HTTP string-matching → fewer false positives/negatives.
  - *State & memory:* a `SessionJournal` keeps action history + context (Accessibility Tree / AXTree) to drive complex multi-step attacks.
  - *Scanner orchestration:* wraps Nuclei, Nikto, Wapiti for the discovery phase; the AI then verifies/exploits points of interest.
  - *Runtime:* starts from `main.go` as a local background daemon/API server, exposing ConnectRPC + REST endpoints for an external UI; stores session logs + findings in local SQLite.
- **Hardest engineering part:** Closing the autonomous loop — plan → execute in a live browser → verify by real effect → update memory — reliably enough to chain multi-step attacks.
- **Stack:** Go, LLM (Gemini/OpenRouter), Playwright, ConnectRPC, REST, SQLite, Nuclei, Nikto, Wapiti.
- **Live URL:** N/A (local daemon) — use a demo GIF/screenshot of the UI/findings. **GitHub:** [REQUIRED or "Private"]
- **Screenshot/GIF:** [REQUIRED]
- **Engineering notes (draft, confirm):**
  - Verifies vulnerabilities by real browser effect (DOM/script execution) instead of response string-matching.
  - Maintains an agent SessionJournal (action history + AXTree) to execute multi-step attacks.
- **Tier:** HEADLINE — most technically impressive; anchors the security identity alongside CodeVault + ASURA. Full case-study modal.

---

## 5. Final project inventory, ordering & tiering

**Flagship (keep as dedicated featured section):** CodeVault (live, GCP/Docker/Postgres licensing+binary-protection platform).

**Selected Systems grid (curate hard — strongest + most relevant + most proof first):**
1. **LastResort** (security, autonomous AI agent — flagship-tier impressiveness)
2. **NeuroBrain** (AI/CV + multimodal LLM)
3. **SoulMen** (real-world B2B SaaS)
4. **ASURA** (security scanning framework, real repo)
5. **GitaSaarthi 2.0** (RAG, *live demo*)

**Secondary tier / range (move to Experimental Builds or a condensed "more work" list):** DDoS Globe Visualizer (Three.js, visually strong — could stay in grid if room), Clash Emote Detector (CV), Autonomous Ground Vehicle (robotics breadth, award-winning).

**Cut:** Retainr.bot (stock image, no repo) — unless rebuilt with real screenshot + repo.

> Net: 1 flagship + ~5 curated serious projects + experimental tier. This satisfies "3–5 great > 10 mediocre" while still showing range.

---

## 6. Design directions — present these, get ONE approved before coding

All three commit to a single signature and avoid the cyan/acid-on-black default. **Recommended: Direction A.**

### Direction A — "Operator Console" (RECOMMENDED)
The whole site behaves like a developer/security operator console (extends the existing terminal motif from a widget into the system identity — authentic to CodeVault/LastResort/ASURA).
- **Palette (named):** `Void #08090A` (base), `Panel #0F1417` (surfaces), `Phosphor #7CFFB2` (primary/soft terminal green), `Signal #FFB454` (live/status/warning amber), `Ink #E6EDE8` (text), `Mute #6B7B73`. One accent + one status color = a palette, not a single neon stripe.
- **Type:** Display in a monospace/terminal face used boldly for headings (e.g. JetBrains Mono / Berkeley-Mono-class) OR Space Grotesk display; body in a neutral sans (Inter); mono for data/labels.
- **Layout:** dense, panelled, IDE-like; Cmd+K as a primary nav affordance; projects rendered as "services/processes" with live status indicators.
- **Signature:** projects as monitored processes with status; the interactive terminal becomes a hero element, not a footnote.

### Direction B — "Security Research Dossier"
Authoritative, text-forward, like a security firm's whitepaper.
- **Palette:** restrained dark (or off-white) ink + one signal color (e.g. security red `#FF3B30`).
- **Type:** strong display (grotesk or a tasteful serif like Fraunces) + clean body + mono for data.
- **Layout:** editorial grid, hairline rules, generous whitespace; each project a numbered **case file** (numbering is justified here — case studies are a real sequence).
- **Signature:** every project presented as a dossier (problem → method → finding → outcome).

### Direction C — "Dark-Luxe Product / Bento"
Premium product-company feel (per `dark-luxe` / `premium-bento` skills).
- **Palette:** rich dark base, one refined accent, subtle gradients used sparingly.
- **Type:** modern grotesk display + neutral body.
- **Layout:** bento-grid hero where flagship products (CodeVault, LastResort) get hero tiles with live status; product-style sections below.
- **Signature:** the bento hero — flagship tiles sized by importance.

> Process per design skill: for the chosen direction, write a compact token system (4–6 named hex, 2+ typefaces, layout concept + ASCII wireframe, one signature element), self-critique against "would I produce this for any portfolio?", revise, THEN build.

---

## 7. Data model — how to add/standardize projects

Projects are data-driven via the `projects` array in `src/components/Projects.jsx`. Each entry:

```js
{
  id: 'slug',
  title: 'Project Name',
  category: 'one-line type',
  impact: 'one sentence: outcome / why it matters',
  description: 'short paragraph: what it does + the real engineering challenge',
  tags: ['Stack', 'items'],          // 3–5
  github: 'https://...' | '#',       // '#' currently hides the link — change to render a "Private repo" label instead
  link: 'https://live-demo',         // optional
  image: importedWebp,               // import a webp from src/assets/
  notes: ['engineering note 1', 'engineering note 2'],
}
```

**To give a project a case-study modal:** add its `id` to the `hasModal` list and the `openProjectModal` switch in `Projects.jsx`, and create `src/components/<Name>Modal.jsx` following the existing `GitaSaarthiModal.jsx` pattern. **Standardize every serious project's modal** to: Problem → Approach → Architecture → Outcome/metrics → "What I'd improve next" (recruiters reward this format explicitly). Add **one real metric** per serious project (latency, scans run, users, accuracy, readiness-score throughput, etc.).

Experimental/lighter projects live in `src/components/ExperimentalBuilds.jsx` (simpler card shape).

---

## 8. Phased task list

**Phase 1 — Truth & polish (fast, high ROI)**
- Re-order projects per Section 5; cut/rebuild Retainr.
- Fix misleading `alt` text; render "Private repo" labels instead of hiding `'#'` links.
- Align `index.html` meta description + keywords + JSON-LD to current positioning; add `alumniOf` DTU.
- Build a proper 1200×630 OG/Twitter card; update `og:image`/`twitter:image`.
- Re-export oversized images (start with `ugv-real.webp`); audit all card images.
- Remove broken `01`-less numbering + heading-duplicating eyebrows.
- Trim Skills Matrix filler; make ≥1 ProofStrip item a real metric.
- Add `sitemap.xml`.

**Phase 2 — Identity (the differentiator)**
- Implement the approved design direction (Section 6): tokens in `tailwind.config.js` + `src/index.css`; swap fonts in `index.html` + Tailwind `fontFamily`.
- Establish the single signature; remove/tame competing effects (ambient background, typewriter → one line, floating CTA pill).
- Apply new layout/structure across all sections.

**Phase 3 — Depth + new projects**
- Add NeuroBrain, SoulMen, LastResort to the `projects` array (Section 4 data).
- Standardize case-study modals for all serious projects (Section 7); add one metric each.
- Update About terminal responses (`projects`, `skills`, `stack` commands) + Cmd+K entries to include the 3 new projects.

**Phase 4 — Performance & QA**
- Lazy-load `/fun` route, background effect, and project modals.
- Verify reduced-motion on any kept ambient effect.
- Test responsive at 375 / 768 / 1024 / 1440; keyboard focus visible; no horizontal scroll; load < 3s; run Lighthouse.
- Build + deploy preview via Vercel; owner reviews before promoting to production.

---

## 9. REQUIRED from owner before/at build

For **each** of NeuroBrain, SoulMen, LastResort:
1. Confirm/correct the **stack**.
2. **Live URL** (or confirm none) + **GitHub URL** (or "Private repo").
3. **Screenshot(s)** — for LastResort, a UI/findings screenshot or short demo GIF (it's a local daemon).
4. Confirm/improve the two **engineering notes** + supply **one real metric** if available.

Also confirm:
- OK to **cut Retainr** (vs rebuild)?
- Real **GitHub link for GitaSaarthi** (or mark Private)?
- Any current project to drop besides Retainr?

---

## 10. Quality bar / acceptance criteria

- Does NOT read as a templated dark+acid-accent portfolio; has one clear, memorable signature.
- Strongest work (flagship + top serious project) visible within one scroll.
- Every serious project: real or clearly-labeled repo status, accurate alt text, case-study modal, ≥1 metric.
- Meta/OG/JSON-LD accurate; social card renders correctly.
- Lighthouse: performance/accessibility/SEO strong; load < 3s; bundle reduced from ~442 KB baseline.
- Responsive 375→1440; visible keyboard focus; `prefers-reduced-motion` respected.
- Owner approves the design direction (Section 6) before any code is written.
