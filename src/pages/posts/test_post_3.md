---
# Required frontmatter properties (YAML)
layout: ../../layouts/BlogPost.astro
title: "Test Post 3"
description: "A brief summary of the blog post content."
# author: "Author Name"
pubDate: "YYYY-MM-DD" # e.g., 2025-01-14
# Optional properties
image: "taekwondo-1.jpg" # Optional, for social media cards or headers
# tags: ["astro", "webdev", "blogging"] # Optional, for categorization
---

# Your Blog Post Content Starts Here

Write your content using standard [GitHub Flavored Markdown](https://github.github.com/gfm/) syntax.

## Headings

Use `##` for subheadings.

### Further Subheadings

More detailed sections.

## Formatting Text

*   *Italics* or _italics_ (one star or underscore)
*   **Bold** or __bold__ (two stars or underscores)
*   ~~Strikethrough~~ (two tildes)

## Lists

*   Item A
*   Item B
    *   Nested item

1.  First ordered item
2.  Second ordered item

## Code Blocks

Use backticks for inline code: `const example = true;`.

For code blocks, use three backticks and specify the language:

```javascript
// Example code block
function greet(name) {
  console.log(`Hello, ${name}!`);
}
greet("Astro User");
