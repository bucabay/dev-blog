---
title: "Starting a dev blog, again"
description: "Why I'm keeping a written record of what I build, and what you can expect to find here."
publishDate: "26 Jul 2026"
tags: ["meta", "writing"]
pinned: true
---

I've started and abandoned a blog roughly four times. Each time the reason was the same: I treated it as publishing rather than note-taking, so every draft had to be a definitive guide, and definitive guides are exhausting.

This time the bar is lower and the goal is narrower. I want a searchable record of things I figured out the hard way.

## What goes here

**Posts** are the longer pieces — a debugging session with a real root cause, an architecture decision and the trade-offs behind it, a benchmark with numbers I actually measured.

**Notes** are the short ones. A flag I keep forgetting, a config that finally worked, a one-paragraph TIL. No headings, no intro, no conclusion.

If something is useful to exactly one person six months from now, and that person is me, it still earns a spot.

## The rules I'm giving myself

1. **Write it while it's fresh.** The details that make a post worth reading are the ones you forget within a week.
2. **Show the failure, not just the fix.** The wrong turn is usually the part someone else is currently stuck on.
3. **Real code only.** If I didn't run it, it doesn't go in the post.
4. **Ship at 80%.** An unpublished draft helps nobody.

## The stack

This site is [Astro](https://astro.build) on the Cactus theme — static output, Markdown content, no client-side JavaScript unless a page actually needs it. Full-text search comes from Pagefind at build time, OG images are generated per-post with Satori, and code blocks run through Expressive Code.

The whole thing builds in a couple of seconds and deploys as plain files. That's deliberate: the less infrastructure between me and a published post, the more likely I am to publish one.

First real post soon. Something broke this week, and I have notes.
