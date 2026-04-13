# writing.alistairrobinson.me

Source for my personal writing. Long-form philosophical essays, literary criticism, and analytical writing.

## How it works

Markdown/MDX content files are built into a static site by a Python script and rsynced to a VPS.

```
content/         →  build.py  →  out/  →  make deploy  →  server
```

## Commands

| Command | What it does |
|---|---|
| `make build` | Build the site into `out/` (drafts excluded) |
| `make dev` | Build into `out/` with drafts included, for local preview |
| `make deploy` | Build and rsync `out/` to the server |

## Content

- `content/` — main articles
- `content-philosophy-archive/` — older philosophy posts

Articles are Markdown files with YAML frontmatter. Supported frontmatter fields:

| Field | Description |
|---|---|
| `title` | Article title |
| `description` | Short description (used in meta tags) |
| `date` | Publication date (`YYYY-MM-DD`) |
| `tags` | Comma-separated or YAML list |
| `image` | `true` if a header image exists on the CDN |
| `imageClass` | One of `mainImage`, `mainImageSmaller`, `mainImageSmall`, `mainImageMedium`, `mainImageSmallest` |
| `imageExtension` | File extension if not `jpg` |
| `imageVersion` | Integer, increment to bust CDN cache |
| `series` | Series key from `series.yaml` |
| `draft` | `true` to hide from production builds |

## Series

Defined in `series.yaml`. Each series has a key (referenced in article frontmatter), a title, and a list of parts with slugs and labels. Example:

```yaml
platoSeries:
  title: "Plato's Republic"
  parts:
    - part: 1
      slug: /the-republic-by-plato-part-1--book-i
      label: Part 1
    - part: 2
      slug: /the-republic-by-plato-part-2--book-i
      label: Part 2
```

## Deployment

The site runs on a VPS at `178.128.32.180`, served by nginx. Server details are in `.env` (not committed).

To add a new article and publish it:

```bash
# write your article in content/
make deploy
```

## Images

Images are served from ImageKit CDN. In article content, use `/bucket/filename.jpg` as the image path — the build script rewrites this to the full CDN URL automatically.
