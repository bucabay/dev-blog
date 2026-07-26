---
title: "How this blog works"
description: "A reference for future me: where content lives, what the frontmatter accepts, and how to publish."
publishDate: "26 Jul 2026"
tags: ["meta", "astro"]
---

Notes to myself, so I never have to re-read the theme source to remember how to add a post.

## Where things live

```
content/
  posts/          # long-form articles  -> /posts/<slug>/
  notes/          # short thoughts      -> /notes/<slug>/
  tags/           # optional tag page intros
src/
  site.config.ts  # title, author, description, nav links
  pages/          # index, about, 404, feeds
public/           # favicon source, static files
```

A post is either `content/posts/my-slug.md` or, when it needs images beside it, `content/posts/my-slug/index.md`. The slug comes from the filename or folder name either way.

## Post frontmatter

```yaml
---
title: "Keep it under 60 characters"   # required, validated by Zod
description: "Shown in listings, meta tags, and the OG image."  # required
publishDate: "26 Jul 2026"             # required
updatedDate: "1 Aug 2026"              # optional
tags: ["astro", "typescript"]          # optional, lowercased + deduped
draft: true                            # optional, hidden from production
pinned: true                            # optional, max 3 shown on the homepage
coverImage:                             # optional
  src: "./cover.png"
  alt: "Describe the image"
---
```

The schema lives in `src/content.config.ts` — a bad `title` length or a missing `description` fails the build rather than shipping broken metadata. That's the behaviour I want.

Notes are simpler: `title`, an optional `description`, and a `publishDate` that must be a full ISO 8601 timestamp with an offset.

```yaml
---
title: "TIL: sharp needs a rebuild after a Node bump"
publishDate: "2026-07-26T09:15:00Z"
---
```

## Commands

```bash
pnpm dev        # local dev server on :4321
pnpm build      # static build into dist/ + Pagefind index
pnpm preview    # serve the built output
pnpm check      # astro check + biome
pnpm lint       # biome, with fixes applied
```

`pnpm build` runs Pagefind as a postbuild step, so **search only works against a built site** — never in `dev`. Worth remembering before filing a bug against yourself.

## Things the theme gives you for free

- **Admonitions** via Markdown directives — `:::note`, `:::tip`, `:::caution`, `:::danger`
- **GitHub repo cards** from a bare repo URL on its own line
- **Reading time**, computed at build from the Markdown AST
- **Auto-linked headings** with anchor links
- **Per-post OG images**, rendered with Satori at `/og-image/<slug>.png`
- **RSS** at `/rss.xml`, plus a separate notes feed at `/notes/rss.xml`
- **Dark and light themes**, following the system preference by default

Two reference posts (`markdown-elements` and `admonitions`) ship as drafts. They render every supported element, which makes them handy to check styling after a dependency bump. Flip `draft: false` locally, look at the page, flip it back.

## Publishing

```bash
git add content/posts/my-new-post.md
git commit -m "post: my new post"
git push
```

That's the entire deploy story for a static site, which is exactly why it's a static site.
