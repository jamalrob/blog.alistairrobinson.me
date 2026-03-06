#!/usr/bin/env python3
"""Static site builder for blog.alistairrobinson.me"""

import html
import os
import re
import shutil
from datetime import datetime, date
from pathlib import Path

import yaml
from jinja2 import Environment, FileSystemLoader
from markdown_it import MarkdownIt

# --- Settings ---

CONTENT_DIR      = Path('content')
PHIL_ARCHIVE_DIR = Path('content-philosophy-archive')
OUT_DIR          = Path('out')
STATIC_DIR       = Path('static')
TEMPLATES_DIR    = Path('templates')
PUBLIC_DIR       = Path('public')

IMAGE_CDN    = 'https://ik.imagekit.io/alistairrobinson/blog'
BODY_IMAGE   = {'width': 800, 'quality': 82}
HEADER_IMAGE = {'width': 800, 'quality': 84}
THUMB_IMAGE  = {'width': 200, 'quality': 60}

SITE_TITLE = 'Articles by Alistair Robinson'
AUTHOR     = 'J. Alistair Robinson'

SHOW_DRAFTS = os.environ.get('SHOW_DRAFTS', 'false').lower() != 'false'

SERIES = yaml.safe_load(Path('series.yaml').read_text(encoding='utf-8')) or {}

# --- Markdown renderer ---

_md = MarkdownIt('commonmark', {'html': True, 'typographer': True})
_md.enable(['table', 'strikethrough', 'replacements', 'smartquotes'])

# --- Helpers ---

def format_date(d):
    if isinstance(d, (datetime, date)):
        return d.strftime('%-d %B %Y')
    try:
        return datetime.strptime(str(d), '%Y-%m-%d').strftime('%-d %B %Y')
    except (ValueError, TypeError):
        return str(d)


def parse_tags(value):
    if isinstance(value, list):
        return [str(t) for t in value]
    if value:
        return re.split(r'[ ,]+', str(value))
    return []


def is_draft(data):
    d = data.get('draft', False)
    if isinstance(d, bool):
        return d
    return str(d).lower() == 'true'


def parse_frontmatter(text):
    """Split YAML frontmatter from markdown content."""
    if not text.startswith('---'):
        return {}, text
    end = text.find('\n---', 3)
    if end == -1:
        return {}, text
    raw_yaml = text[3:end].strip()
    content  = text[end + 4:].lstrip('\n')
    data = yaml.safe_load(raw_yaml) or {}
    return data, content


def render_markdown(content):
    content = content.replace(
        '/bucket/',
        f"{IMAGE_CDN}/tr:w-{BODY_IMAGE['width']},q-{BODY_IMAGE['quality']}/",
    )
    return _md.render(content)


def make_excerpt(rendered_html, slug, data):
    plain = html.unescape(re.sub(r'<[^>]+>', '', rendered_html))
    plain = re.sub(r'\s+', ' ', plain).strip()
    excerpt = ' '.join(plain.split()[:38])
    if data.get('image'):
        ext = data.get('imageExtension', 'jpg')
        img = f"{IMAGE_CDN}/tr:w-{THUMB_IMAGE['width']},q-{THUMB_IMAGE['quality']}/{slug}.{ext}"
        excerpt = f'<img src="{img}" />{excerpt}'
    return excerpt


def load_post(filepath):
    text = Path(filepath).read_text(encoding='utf-8')
    data, content = parse_frontmatter(text)
    data['tags'] = parse_tags(data.get('tags'))
    return data, content


def get_all_posts(directory):
    posts = []
    for filepath in directory.glob('*.mdx'):
        slug = filepath.stem
        data, _ = load_post(filepath)
        show = not (is_draft(data) and not SHOW_DRAFTS)
        posts.append({'slug': slug, 'frontmatter': data, 'show': show})
    posts.sort(key=lambda p: str(p['frontmatter'].get('date', '')), reverse=True)
    return posts


def get_adjacent(posts, current_slug, direction):
    shown   = [p for p in posts if p['show']]
    idx     = next((i for i, p in enumerate(shown) if p['slug'] == current_slug), None)
    if idx is None:
        return None
    adj_idx = idx - 1 if direction == 'next' else idx + 1
    if adj_idx < 0 or adj_idx >= len(shown):
        return None
    adj          = shown[adj_idx]
    data, content = load_post(CONTENT_DIR / f"{adj['slug']}.mdx")
    rendered     = render_markdown(content)
    return {
        'slug':    adj['slug'],
        'title':   adj['frontmatter'].get('title', ''),
        'excerpt': make_excerpt(rendered, adj['slug'], data),
    }


def write_page(rel_path, content):
    p = OUT_DIR / rel_path
    p.parent.mkdir(parents=True, exist_ok=True)
    p.write_text(content, encoding='utf-8')
    print(f'  {rel_path}')


# --- Build ---

def build():
    if OUT_DIR.exists():
        shutil.rmtree(OUT_DIR)
    OUT_DIR.mkdir()

    env = Environment(loader=FileSystemLoader(str(TEMPLATES_DIR)), autoescape=False)
    env.filters['date'] = format_date

    # Copy assets
    if STATIC_DIR.exists():
        shutil.copytree(STATIC_DIR, OUT_DIR / 'static')
    if PUBLIC_DIR.exists():
        for item in PUBLIC_DIR.iterdir():
            dst = OUT_DIR / item.name
            (shutil.copytree if item.is_dir() else shutil.copy2)(item, dst)

    all_posts  = get_all_posts(CONTENT_DIR)
    phil_posts = get_all_posts(PHIL_ARCHIVE_DIR)
    ctx        = {'site_title': SITE_TITLE, 'image_cdn': IMAGE_CDN, 'author': AUTHOR}

    # Index
    print('index')
    write_page('index.html', env.get_template('index.html').render(**ctx, posts=all_posts))

    # Posts
    print('posts')
    for p in [p for p in all_posts if p['show']]:
        slug          = p['slug']
        data, content = load_post(CONTENT_DIR / f'{slug}.mdx')
        rendered      = render_markdown(content)
        series_key    = data.get('series')
        write_page(f'{slug}/index.html', env.get_template('post.html').render(
            **ctx,
            slug         = slug,
            frontmatter  = data,
            post_html    = rendered,
            next_post    = get_adjacent(all_posts, slug, 'next'),
            prev_post    = get_adjacent(all_posts, slug, 'previous'),
            series       = SERIES.get(series_key) if series_key else None,
            header_image = HEADER_IMAGE,
        ))

    # Philosophy archive index
    print('philosophy archive')
    write_page('philosophy-archive/index.html',
               env.get_template('phil_archive_index.html').render(**ctx, posts=phil_posts))

    # Philosophy archive posts
    for p in [p for p in phil_posts if p['show']]:
        slug          = p['slug']
        data, content = load_post(PHIL_ARCHIVE_DIR / f'{slug}.mdx')
        rendered      = render_markdown(content)
        write_page(f'philosophy-archive/{slug}/index.html',
                   env.get_template('phil_archive_post.html').render(
                       **ctx,
                       slug         = slug,
                       frontmatter  = data,
                       post_html    = rendered,
                       header_image = HEADER_IMAGE,
                   ))

    # Tags
    print('tags')
    all_tags = sorted({
        tag
        for p in all_posts if p['show']
        for tag in p['frontmatter'].get('tags', [])
    })
    write_page('tags/index.html',
               env.get_template('tags_index.html').render(**ctx, tags=all_tags))
    for tag in all_tags:
        tag_posts = [p for p in all_posts if tag in p['frontmatter'].get('tags', [])]
        write_page(f'tags/{tag}/index.html',
                   env.get_template('tag.html').render(**ctx, tag=tag, posts=tag_posts))

    # Static pages
    print('static pages')
    write_page('about/index.html', env.get_template('about.html').render(**ctx))
    write_page('404.html',         env.get_template('404.html').render(**ctx))

    print(f'\nDone: {len(all_posts)} posts, {len(phil_posts)} archive posts, {len(all_tags)} tags.')


if __name__ == '__main__':
    build()
