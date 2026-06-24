---
name: portfolio-redesign-plan
description: Plan and decisions for the full redesign of Parth's portfolio site (parth7.me)
metadata:
  type: project
---

User decided (2026-06-21) to do a FULL REDESIGN of the portfolio site (parth7.me), not a refine-in-place. Execute everything in ONE pass once the user provides 3-4 new projects (they will send name, what it does + hardest part, stack, live/github URLs, screenshots, 2 engineering notes, and whether headline vs experimental per project).

**Workflow agreed:** before writing code, present 2-3 concrete design directions (named palette + type pairing + layout wireframe + one signature element) for approval, using the repo's `skills/design-taste-skill-pack/` and `skills/impeccable` skills. Then build redesign + content/SEO fixes + case-study depth + new projects together.

**Key audit findings to act on:**
- Current look (#00ffcc cyan on #000 + mono eyebrows + numbered markers) is a default "AI-generated" aesthetic. The distinctive asset is the terminal/IDE motif (About terminal, Cmd+K, `$` prompts) — candidate signature.
- Project data model lives in `src/components/Projects.jsx` (array of objects). Experimental builds in `ExperimentalBuilds.jsx`.
- Cut/rebuild **Retainr** (stock Unsplash image, `github:'#'`, misleading "deployed screenshot" alt). Verify **GitaSaarthi** repo link.
- Recommended project order: CodeVault(featured) → GitaSaarthi(live) → ASURA → DDoS → Clash → Retainr(if kept) → UGV.
- Bugs/cleanups: section numbering runs 02-09 with no 01 + eyebrow duplicates heading; meta description + JSON-LD say stale "ML/Computer Vision"; og:image is a portrait JPG not a 1200x630 card; `ugv-real.webp` is 350KB (oversized); JS bundle 442KB uncompressed (lazy-load /fun, background shader, modals); skill matrix has filler tags; ambient gooey background + typewriter + floating CTA pill are excess motion to cut.
- design-system/MASTER.md specifies Archivo/Space Grotesk but code uses Geist — spec/impl mismatch.

**3 new projects received (2026-06-21), all headline-tier — reinforce AI + SaaS + Security pillars:**
- **NeuroBrain** — AI visual-attention + CRO auditing; CV feature extraction + OCR + multimodal LLM → actionable layout edits.
- **SoulMen** — UAE tender/vendor document-readiness SaaS; checks docs for missing/expired/mismatched info, outputs a Submission Readiness Score.
- **LastResort** — autonomous web pentest agent in Go; LLM planning (Gemini/OpenRouter) + Playwright browser verification + SessionJournal memory + Nuclei/Nikto/Wapiti wrappers; ConnectRPC/REST + SQLite daemon.

Still NEEDED from user per project: confirmed stack, live URL, GitHub (or "private"), screenshot/GIF, one real metric.

Full forwardable build brief written to repo root: **REDESIGN_BRIEF.md** (self-contained for another AI agent). Recommended design direction = "Operator Console" (terminal/security identity). Recommended order: CodeVault(featured) → LastResort → NeuroBrain → SoulMen → ASURA → GitaSaarthi; DDoS/Clash/UGV to range/experimental; cut Retainr.

Deploy is via Vercel (vercel CLI + gh CLI available globally).
