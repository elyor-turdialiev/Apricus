# Apricus Online School — Website

> *"Ad astra per aspera"* — Through difficulties to the stars.

A modern, multi-page website for **Apricus Online School** — an online education platform offering personalized one-on-one lessons in English, Latvian, Russian, Spanish, German, Portuguese, and Mathematics.

## ✨ Features

- **Multi-page architecture** — Home, About, Programs, Pricing, FAQ, and Contact pages
- **Editorial design** with a warm, sun-inspired palette (the name *Apricus* means "warmed by the sun")
- **Distinctive typography** — Fraunces (display) + Inter (body) + JetBrains Mono (accents)
- **Fully responsive** — mobile-first design that works on every screen size
- **No build tools needed** — pure HTML, CSS, and vanilla JavaScript
- **Interactive components** — testimonial slider, FAQ accordion, smooth animations
- **Production-ready SEO** — proper meta tags, semantic HTML, fast load times

## 📁 Structure

```
apricus-website/
├── index.html          # Homepage with hero, programs preview, testimonials
├── about.html          # Story, values, timeline, founder spotlight
├── programs.html       # Detailed curriculum for all 8 programs
├── pricing.html        # Pricing cards + comparison table
├── faq.html            # Categorized Q&A with accordion
├── contact.html        # Contact form + multiple ways to reach
├── css/
│   └── styles.css      # Shared design system (variables, typography, components)
└── js/
    └── main.js         # Shared interactivity (nav, slider, accordion, form)
```

## 🚀 Deploy to GitHub Pages

1. **Create a new repository** on GitHub (e.g. `apricus-website`)
2. **Upload all files** maintaining the folder structure above
3. **Enable GitHub Pages**:
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` / `(root)`
4. Your site will be live at `https://<your-username>.github.io/apricus-website/`

### Custom domain (optional)

To use `apricusonline.com` with GitHub Pages:
1. Settings → Pages → Custom domain → enter your domain
2. Add a `CNAME` file in the root with your domain
3. Configure DNS: add a `CNAME` record pointing to `<your-username>.github.io`

## 🎨 Design System

### Colors
- **Cream** `#faf6ef` — primary background
- **Paper** `#f4ede0` — alternate background
- **Sun** `#e8a838` — primary accent (highlights, hovers)
- **Amber** `#c4791f` — secondary accent
- **Terracotta** `#b8552c` — tertiary accent
- **Ink** `#1a1410` — primary text and dark sections

### Typography
- **Display**: Fraunces (italic variants for emphasis)
- **Body**: Inter (300/400/500/600 weights)
- **Mono**: JetBrains Mono (eyebrows, labels, metadata)

## 📞 Contact Information

- **WhatsApp / Phone**: +371 28491663
- **Email**: apricus.edu.service@gmail.com
- **Instagram**: [@apricus_service](https://www.instagram.com/apricus_service)
- **Facebook**: [apricuservice](https://www.facebook.com/apricuservice/)

## 🔧 Local Development

No build step needed. Just open any HTML file in a browser, or serve locally:

```bash
# Python
python3 -m http.server 8000

# Node.js
npx serve

# PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`.

## 📝 License

© 2026 Apricus Online School. All rights reserved.
