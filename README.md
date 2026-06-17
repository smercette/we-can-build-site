# We Can Build — site

Sarah J Mercer's site for the *We Can Build* series. Built with [Eleventy](https://www.11ty.dev/), deployed to Netlify.

## Run it locally

```bash
npm install
npm start
```

Visit http://localhost:8080. Edit anything in `src/` and it reloads.

To produce the production build:

```bash
npm run build
```

The output lands in `_site/`.

## Adding a new blog post

Each post is a single Markdown file in `src/posts/`. Name it with the date in front so they sort nicely:

```
src/posts/2026-07-01-my-second-post.md
```

The top of the file is the "frontmatter" — a little block of settings between `---` lines:

```markdown
---
title: "My headline goes here"
date: 2026-07-01
eyebrow: "Lesson 01"
label: "Lesson 01"           # shown on the tutorials grid
status: "New"                # the violet pill on the grid card
readTime: "6 min"
summary: "One-line teaser shown on the tutorials grid and homepage."

# Optional video — paste just the 11-character YouTube ID (the bit after v=)
youtubeId: "dQw4w9WgXcQ"
videoPosition: "top"          # "top" (default) or "bottom"
---

Write the post body here in Markdown. Paragraphs are just empty-line separated.

A pull quote is a blockquote:

> This bit gets the violet left bar.

You can use **bold**, *italic*, [links](https://example.com), and lists:

- one
- two
- three
```

Once saved, run `npm start` to preview, then `git add`, `git commit`, `git push`. Netlify rebuilds and deploys automatically.

## Drafts

Anything inside `src/drafts/` is ignored by Eleventy — it's a quiet place to keep in-progress posts without them appearing on the site. When a draft is ready to publish, move the `.md` file from `src/drafts/` to `src/posts/`, commit, and push. Netlify rebuilds and the post is live.

## Adding videos

Videos live on YouTube. To embed one in a post, copy the 11-character ID from the URL (e.g. for `https://www.youtube.com/watch?v=dQw4w9WgXcQ`, the ID is `dQw4w9WgXcQ`) and paste it as `youtubeId:` in the frontmatter. The card on the tutorials grid will also show the embedded player.

## File tour

```
site/
  src/
    _data/site.js          site-wide variables (title, author, year)
    _data/upcoming.js      "coming soon" stubs shown on tutorials grid
    _includes/layouts/     base.njk (HTML shell), post.njk (article layout)
    _includes/partials/    header.njk, footer.njk
    assets/css/style.css   all styling, brand-locked
    posts/                 markdown blog posts
    index.njk              homepage
    tutorials.njk          tutorials grid (auto-built from posts/)
    about.njk              about page
  .eleventy.js             Eleventy config
  netlify.toml             Netlify build settings
  package.json             dependencies + scripts
```

## Brand

Colours, fonts, and tone follow `WeCanBuild/Brand/Brand-Guidelines.md`. Violet is the only accent. White space does the work.

## Deploying to Netlify

1. Push this repo to GitHub.
2. In Netlify, "Add new site" -> "Import an existing project" -> pick the repo.
3. Netlify reads `netlify.toml` and uses `npm run build` -> `_site` automatically.
4. Done. Every `git push` to main triggers a new deploy.

The newsletter forms use Netlify Forms — submissions show up in the Netlify dashboard. Free tier covers 100 submissions/month.
