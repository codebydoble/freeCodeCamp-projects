# HTML, CSS & Responsive Design Study Guide
**Sources**: freeCodeCamp Responsive Web Design Certification + Google web.dev Learn Responsive Design / Learn CSS / Learn HTML

## Overview & Learning Path
This guide mixes practical project-based learning from freeCodeCamp with modern principles from Google’s web.dev courses.

**Recommended Tour Structure**:
1. HTML Fundamentals & Semantics
2. CSS Basics & Box Model
3. Typography, Colors & Visual Design
4. Flexbox
5. CSS Grid
6. Responsive Design & Media Queries
7. Accessibility
8. Advanced: Variables, Transforms, Animations
9. Projects & Best Practices

**Estimated Time**: 150–300 hours depending on prior knowledge.

---

## 1. HTML Fundamentals (freeCodeCamp + Google)

### Key Topics
- Semantic HTML5 elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`
- Headings hierarchy (`h1`–`h6`) – critical for accessibility and SEO
- Links, images, lists, forms
- Meta tags, `lang` attribute, viewport meta for responsive

### freeCodeCamp Projects
- Learn HTML by Building a Cat Photo App
- Learn HTML Forms by Building a Registration Form
- Certification: Survey Form, Tribute Page

### Google / Modern Best Practices
- Use semantic elements over generic `<div>` whenever possible
- One `h1` per page
- Always include `alt` text on images
- Forms: proper labels, fieldsets, accessibility attributes

**Code Example**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Semantic Example</title>
</head>
<body>
  <header>
    <h1>Site Title</h1>
    <nav><!-- navigation --></nav>
  </header>
  <main>
    <article>
      <h2>Article Title</h2>
      <p>Content...</p>
    </article>
  </main>
  <footer><!-- footer --></footer>
</body>
</html>
```

---

## 2. CSS Basics & Box Model

### Core Concepts
- Selectors (element, class, ID, attribute, pseudo)
- Cascade, specificity, inheritance
- Box Model: content → padding → border → margin
- `box-sizing: border-box;` (modern default recommendation)
- Display values: block, inline, inline-block, none

### freeCodeCamp
- Learn Basic CSS by Building a Cafe Menu
- Learn the CSS Box Model by Building a Rothko Painting
- Colors, Typography modules

### Google web.dev Tips
- Prefer relative units (`rem`, `em`, `%`, `vw/vh`) over fixed `px` for scalability
- Use CSS custom properties (variables) early

**Modern Box Model Reset**:
```css
*, *::before, *::after {
  box-sizing: border-box;
}
```

---

## 3. Flexbox (One-Dimensional Layout)

### Key Properties
- Container: `display: flex;`, `flex-direction`, `justify-content`, `align-items`, `flex-wrap`, `gap`
- Items: `flex-grow`, `flex-shrink`, `flex-basis`, `align-self`, `order`

### freeCodeCamp
- Learn CSS Flexbox by Building a Photo Gallery
- Applied in many projects (navigation, cards, etc.)

### Google Recommendation
- Perfect for navigation bars, card rows, centering content
- Combine with media queries for responsive behavior

**Classic Centering**:
```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
```

---

## 4. CSS Grid (Two-Dimensional Layout)

### Key Concepts
- `display: grid;`
- `grid-template-columns` / `rows` (use `fr`, `minmax()`, `repeat()`, `auto-fit`/`auto-fill`)
- `grid-area`, `grid-template-areas`
- Gap, alignment (`place-items`, `place-content`)

### freeCodeCamp
- Learn CSS Grid by Building a Magazine
- Used in complex layouts and certification projects

### Google / Modern
- Ideal for overall page structure (header, sidebar, main, footer)
- `auto-fit` + `minmax()` for responsive grids without media queries in many cases

**Responsive Auto Grid**:
```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
```

---

## 5. Responsive Design Principles (Core of Both Curricula)

### freeCodeCamp Focus
- Media queries
- Mobile-first approach
- Relative units
- Responsive images (`max-width: 100%`)
- Projects: Piano, Technical Documentation, Product Landing Page, Portfolio

### Google web.dev Learn Responsive Design Modules
1. Introduction & History
2. Media Queries
3. Internationalization
4. Macro Layouts (page-level)
5. Micro Layouts (components)
6. Typography
7. Responsive Images (`srcset`, `sizes`, `<picture>`)
8. Icons (SVG)
9. Theming (prefers-color-scheme)
10. Accessibility
11. Interaction (touch, keyboard, mouse)
12. UI Patterns
13. Media Features
14. Multi-screen / Foldables

### Essential Media Query Pattern (Mobile-First)
```css
/* Mobile styles first */
.container {
  padding: 1rem;
}

/* Tablet and up */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
}
```

### Viewport Meta (Critical)
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

---

## 6. Accessibility (Strongly Emphasized in Both)

- Semantic HTML first
- Color contrast (WCAG)
- Keyboard navigation
- ARIA when necessary (prefer native elements)
- Focus styles
- Alt text, form labels
- freeCodeCamp: Learn Accessibility by Building a Quiz
- Google: Dedicated accessibility module + theming for user preferences

---

## 7. Advanced CSS Topics

- CSS Variables (`--custom-property`)
- Transforms & Transitions
- Animations (`@keyframes`)
- Pseudo-classes & pseudo-elements
- freeCodeCamp: City Skyline (variables), Penguin (transforms), Ferris Wheel (animations)

---

## 8. Certification Projects (freeCodeCamp Required)

1. Survey Form
2. Tribute Page
3. Technical Documentation Page
4. Product Landing Page
5. Personal Portfolio Webpage

Build these after mastering Flexbox + Grid + Media Queries.

---

## 9. Study Tips & Checklist

- [ ] Complete freeCodeCamp projects in order
- [ ] Read corresponding web.dev modules
- [ ] Practice mobile-first every time
- [ ] Test with browser DevTools device mode
- [ ] Check accessibility with Lighthouse / axe
- [ ] Use relative units and fluid typography (`clamp()`)
- [ ] Prefer Flexbox for 1D, Grid for 2D
- [ ] Always include viewport meta

---

## Quick Reference Cheatsheet

| Goal                    | Tool                  |
|-------------------------|-----------------------|
| Horizontal navigation   | Flexbox              |
| Card gallery            | Grid or Flexbox      |
| Full page layout        | CSS Grid             |
| Responsive breakpoints  | Media queries        |
| Fluid images            | `max-width: 100%` + `srcset` |
| Dark mode               | `prefers-color-scheme` |
| Centering               | Flexbox or Grid      |

---

**Next Steps**: Practice by rebuilding freeCodeCamp projects with improvements from Google’s recommendations (better accessibility, modern units, theming).

Add this file to your study repo alongside the JavaScript materials.