# Personal Blog (Next.js / Vercel)

This repository contains the source code for [my personal blog](https://blog.alistairrobinson.me), built with **Next.js** and deployed via **Vercel**. The site hosts long-form philosophical writing, literary reviews, and other analytical essays.

Although based on a simple file-system structure, the codebase includes several custom components and content features to support extended essays, archival material, and topic-based navigation.

---

## 🚀 Features

- Static site generation using Next.js
- Markdown/MDX-style content with frontmatter metadata
- Automatic deployment to Vercel on each push
- Custom layouts designed for long-form reading

---

## 🧩 Customizations

- **Custom layout system** (`components/layout.js`) for consistent structure across articles  
- **Custom article list component** (`components/articleListItem.js`)  
- **Custom date utilities** (`components/date.js`)  
- **Dynamic routing** for posts via `pages/[slug].js`  
- **Tag-based navigation** (`pages/tags/`)  
- **Dedicated philosophy archive** (`pages/philosophy-archive/`)  
- **Custom 404 page** (`pages/404.js`)  
- **Metadata and post-loading logic** (`lib/posts.js`)  
- **Non-default Next.js configuration** (`next.config.js`)

These elements provide a flexible foundation for long-form and structured content.

---

## 🛠 Tech Stack

- **Next.js** (React-based SSG)
- **JavaScript / JSX**
- **Vercel** (CI/CD and hosting)

---

## 📦 Deployment

Pushing to the `main` branch triggers an automatic production deployment via Vercel.

