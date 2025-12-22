# blog.alistairrobinson.me

The source code for my personal blog at https://blog.alistairrobinson.me.

The site hosts long-form philosophical writing, literary criticism, and analytical essays, with an emphasis on clarity, structure, and durability over short-form publishing.

## Goals

- Publish long-form writing in a stable, readable format
- Keep content authoring separate from presentation concerns
- Support archival material and thematic collections
- Generate a fully static site suitable for long-term hosting

## Context

The blog serves as a home for work that does not fit easily into social media or publication platforms: extended arguments, reading projects, and reflective essays. It is designed to privilege continuity and navigability over frequency or engagement metrics.

## Structure

At a high level, the system is organised as follows:

Markdown / MDX content
→ Next.js static site generation
→ deployable static site


All pages are generated at build time and served as static assets.

## Implementation notes

The site is built using Next.js in static generation mode. Content is authored in Markdown/MDX with frontmatter metadata and rendered through a small set of custom components designed to support long-form reading. 

Custom logic exists primarily to support:

- article listing and navigation
- date and metadata handling
- tag-based organisation
- archival views for larger bodies of work

The emphasis is on minimal, explicit code rather than theme-driven abstraction.

## Deployment

The site is deployed automatically via Vercel. Pushing to the `main` branch triggers a full rebuild and static deployment.

## Status

This repository is actively used and incrementally evolved. Changes are driven by writing needs rather than framework experimentation.
