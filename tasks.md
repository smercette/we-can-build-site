# Outstanding to-dos

Things that still need a human (mostly assets and external signups).

## Images to make and save

All images go in `src/assets/images/`. Reference them from templates or post frontmatter using an absolute path starting with `/assets/images/...`.

### Hero photo of Sarah
- [x] Saved at `src/assets/images/sarah-hero.jpg` and wired into home + about hero. Cropped to centre on the right side of the photo (Sarah). If you swap the file later for a solo shot, the templates will pick it up automatically; tell me and I'll re-tune the crop if needed.

### Cover image for each blog post
- **What:** A cover image per post, following the We Can Build brand guidelines (white background, violet eyebrow, ink headline, generous white space, no logo). Sarah is making these by hand.
- **Shape:** 16:9 ideal (e.g., 1200x675px). Square also works.
- **Save as:** `src/assets/images/post-<slug>.jpg` (or whatever you like).
- **Wire-up:** Add a `cover:` line to the post's frontmatter, pointing at the image path:

  ```yaml
  ---
  title: "..."
  date: 2026-06-15
  cover: /assets/images/post-software.jpg
  ---
  ```

  Templates already check for `cover:` and render the image automatically. If a post has no `cover:` it falls back to a "[ cover image ]" placeholder.

### Outstanding post covers
- [ ] First post — `2026-06-15-software-was-for-other-people.md`

### OG image (optional, for social link previews)
- **Shape:** 1200x630px.
- **Save as:** `src/assets/images/og-image.jpg`
- **Wire-up:** Add a `<meta>` tag to `base.njk`. Tell me when it's ready.

## Mailing list

- [x] Decide between Buttondown (free up to 100 subs) and Beehiiv (free up to 2,500 subs). Chose Buttondown.
- [x] Sign up to Buttondown.
- [x] Wire the Buttondown embed form into the three signup blocks (home band, about band, post page).
- [ ] (Optional, later) Set up a custom sending domain in Buttondown once the list grows.

## Deploy

- [ ] Create empty GitHub repo (no README, no .gitignore, no licence — we have them already).
- [ ] Send the repo URL over. I'll add the remote and push the existing commits.
- [ ] Connect Netlify to the repo (Add new site -> Import existing project -> pick repo). Netlify reads `netlify.toml` automatically.
- [ ] Optional: point a custom domain at Netlify.
