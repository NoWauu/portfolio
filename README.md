# Portfolio — Téo Lemesle

Terminal-flavoured personal site. SvelteKit 5 + TypeScript, fully prerendered, deployed on Vercel.
Bilingual (EN/FR), dark/light themes, and a small canvas "explore mode".

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # static output in .vercel/output
npm run preview
npm run check     # svelte-check (types + a11y)
npm run format    # prettier
```

## Editing the content

Everything you'd normally want to change lives in `src/lib/data/` — no component edits needed.

| File       | What's in it                                                         |
| ---------- | -------------------------------------------------------------------- |
| `site.ts`  | Name, email, phone, GitHub/LinkedIn, résumé path — language-agnostic |
| `en.ts`    | All English copy                                                     |
| `fr.ts`    | All French copy                                                      |
| `index.ts` | Locale registry                                                      |

`src/lib/types.ts` describes the shape both language files must satisfy, so a field added to
one language is a type error until it exists in the other. Run `npm run check` to catch that.

**Common edits**

- _New project_ → add an entry to `projects.list` in **both** `en.ts` and `fr.ts` (same `id`).
- _Project screenshot_ → drop the image in `static/projects/`, set `image: '/projects/foo.png'`.
  Without an image the card shows a hatched placeholder.
- _Résumé button_ → put the PDF in `static/cv/` and set `resume` in `site.ts` to its path
  (`null` hides the button).
- _New language_ → create `src/lib/data/xx.ts` satisfying `Content`, add it to `content` in
  `index.ts`, and add `'xx'` to the `Locale` union in `types.ts`. The nav toggle cycles through
  every registered locale.

## Adding a section

1. Create `src/lib/components/sections/MySection.svelte` (content only — the heading, the
   `$ cat file` line and the reveal animation come from the `Section` wrapper).
2. Add its id to `SectionId` in `src/lib/types.ts`.
3. Add its content + nav label to every locale file.
4. Register it in `src/lib/sections.ts`.

That single registry drives the page order, the nav links, the scroll-spy and the numbering.
Optionally add a room for it in `src/lib/components/game/engine.ts` (`ROOMS`) and a blurb in
`game/rooms.ts`.

## Layout

```
src/
├─ app.css                    design tokens (colours, fonts, spacing) — theme lives here
├─ app.html                   pre-paint theme/locale boot script
├─ lib/
│  ├─ types.ts                content contract
│  ├─ sections.ts             section registry (order, nav, commands)
│  ├─ data/                   ← everything editable
│  ├─ state/preferences…      theme + locale, persisted to localStorage
│  ├─ actions/motion.ts       reveal / scramble / typewriter / scrollspy
│  └─ components/
│     ├─ ui/                  Section, TerminalWindow, Tag, Prompt, Caret, Dots, BulletList
│     ├─ layout/              Nav, Footer, Background
│     ├─ sections/            Hero, About, Skills, Projects, Experience, Education, Awards, Contact
│     └─ game/                explore mode (headless engine + Svelte shell)
└─ routes/                    +layout, +page — thin, just composition
```

Styling is plain scoped CSS driven by the variables in `app.css`; there is no CSS framework to
learn. Changing the accent colour is a one-line edit in both theme blocks.

## Deploying

`@sveltejs/adapter-vercel` with `prerender = true` (see `src/routes/+layout.ts`), so the build is
pure static output — no serverless functions. Import the repo on Vercel and accept the detected
SvelteKit defaults.

## Accessibility & responsiveness

- Layouts use fluid `clamp()` sizing and `auto-fit` grids; breakpoints at 900px (nav → burger
  menu), 860px, 760px and 640px.
- All animation is disabled under `prefers-reduced-motion`, and the reveal animations only hide
  content once JS runs, so the page is fully readable without it.
