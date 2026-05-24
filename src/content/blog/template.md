---
title: 'Your first post title'
summary: 'A one-sentence summary that shows up under the title on the blog index.'
date: 2026-05-23
draft: true
tags: ['frontend', 'notes']
# Optional. Adding either field turns the entry into a hero-image card on the
# blog index. Setting `externalUrl` also makes the card link to the third-party
# article (new tab, with a ↗ arrow indicator) instead of an internal post page.
# heroImage: 'https://example.com/og-image.jpg'
# externalUrl: 'https://medium.com/your-publication/your-article-slug'
---

This file is a starter template for new blog posts. It is hidden from the
live site because of `draft: true` in the frontmatter above. To publish:

1. Duplicate this file as `my-post-slug.md` in the same folder.
2. Update the frontmatter: set `draft: false` and a real `date`.
3. Write your content in Markdown below the frontmatter.

For an **external article** (e.g. one you wrote on Medium): duplicate this
file, set `draft: false`, fill in `externalUrl` and `heroImage`, and leave the
body empty — no internal page is generated for external entries.

## A subheading

Regular Markdown works as you'd expect.

- bullet one
- bullet two

You can also include `inline code`, [links](https://example.com), **bold**,
and *italics*. Code blocks are also styled:

```ts
function hello(name: string) {
  return `hello, ${name}`;
}
```

> Block quotes look like this.
