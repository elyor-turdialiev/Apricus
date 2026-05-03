# Apricus Online School — Website (v2)

A clean, corporate-style multi-page website for Apricus Online School, built with vanilla HTML/CSS/JS. No build tools, no frameworks, no dependencies. Just open and host.

---

## Adding your photos

The site is designed with **placeholder slots** that show you exactly where each image goes. To make the site fully production-ready, drop your photos into the `images/` folder using the filenames below.

### Required photos

Drop these into `/images/` in your GitHub repo. Once they're there, the placeholders will automatically be replaced.

| Filename | Where it appears | Recommended size | Notes |
|---|---|---|---|
| `hero.jpg` | Homepage hero (right side) | **800×1000px** (4:5) | Photo of you teaching, or a portrait. Bright, clear, ideally with eye contact. |
| `teacher.jpg` | Homepage "Meet your teacher" section | **600×750px** (4:5) | Professional headshot or natural teaching photo. |
| `about.jpg` | About page story section | **600×750px** (4:5) | Can be a different photo of you, classroom, or your workspace. |
| `vlog-1.jpg` | Vlog homepage preview · post 1 | **600×340px** (16:9) | Thumbnail for "One-on-one beats group classes" |
| `vlog-2.jpg` | Vlog homepage preview · post 2 | **600×340px** (16:9) | Thumbnail for "Email phrases" video |
| `vlog-3.jpg` | Vlog homepage preview · post 3 | **600×340px** (16:9) | Thumbnail for any Business English topic |
| `vlog-featured.jpg` | Vlog page featured post | **1200×750px** (16:10) | Hero thumbnail on the dedicated Vlog page |
| `vlog-4.jpg` to `vlog-8.jpg` | Vlog page grid posts | **600×340px** (16:9) | Five additional thumbnails for the vlog grid |

### Photo tips

- **Format:** JPG for photos, PNG only if transparency is needed
- **Compression:** Aim for ~150–250 KB per photo (use [TinyPNG](https://tinypng.com) to compress without quality loss)
- **Aspect ratios matter** — if your photo is the wrong shape, it will look stretched or cropped weirdly. Use a tool like [Photopea](https://www.photopea.com) (free, browser-based) to resize before upload.
- **Color tone:** photos with warm/neutral lighting work best with the navy + amber palette

### What if I don't have all the photos yet?

That's fine — just upload the ones you have. Any missing photos will continue to show the dashed placeholder until you add them. The site is fully functional with placeholders.

---

## File structure

```
apricus-website/
├── index.html          # Homepage
├── about.html          # About / story / values / timeline
├── programs.html       # Detailed curriculum, 8 programs
├── pricing.html        # 4 plans + comparison table
├── vlog.html           # Vlog grid with category filter
├── faq.html            # 20 Q&As across 5 categories
├── contact.html        # Contact form + methods
├── css/
│   └── styles.css      # Full design system (one file)
├── js/
│   └── main.js         # Nav, animations, accordion, slider, counters
├── images/             # All photos go here
└── README.md           # This file
```

---

## Deploying to Netlify (already connected via GitHub)

Your repo at `github.com/elyor-turdialiev/Apricus` is already connected to Netlify, which auto-deploys to `apricusonline.netlify.app`. To replace v1 with v2:

### Easiest path: replace files in GitHub web UI

1. Go to `github.com/elyor-turdialiev/Apricus`
2. **Delete the old v1 files** — open each file, click the trash icon, commit
3. **Upload v2 files** — at the repo root, click "Add file" → "Upload files" → drag the contents of this folder in
4. **Important: keep the folder structure**. The CSS file must be at `css/styles.css`, JS at `js/main.js`. If GitHub flattens them, manually create the file at `css/styles.css` (with the slash in the filename — GitHub interprets the slash as creating a folder).
5. Commit. Netlify auto-rebuilds within ~30 seconds.
6. Visit `apricusonline.netlify.app` to see v2 live.

### Adding photos later

Once you have your photos:

1. Go to the `images/` folder in your repo (create it if it doesn't exist — open any folder, navigate to `https://github.com/elyor-turdialiev/Apricus/upload/main/images`)
2. Drag your photo files in
3. Commit
4. Netlify auto-deploys. Refresh your site — photos appear immediately.

### Pointing apricusonline.com at the new site

When you're ready to swap from Tilda to this site:

1. In Netlify dashboard → Site settings → Domain management → Add custom domain → `apricusonline.com`
2. Netlify shows you the DNS records to add
3. Update your domain's DNS (wherever apricusonline.com is registered) with those records
4. Wait 1–24 hours for DNS propagation
5. Netlify automatically issues an SSL certificate

---

## Design system

### Colors

- **Navy primary** — `#1e3a5f`
- **Amber accent** — `#d97706`
- **White base** — `#ffffff`
- **Neutrals** — slate gray scale (50 → 900)

### Typography

- **Family** — Inter (Google Fonts), weights 400–800
- **Headlines** — bold, tight letter-spacing, navy color
- **Body** — regular weight, slate gray

### Components

All components use CSS variables from `:root` in `css/styles.css`. To rebrand, change the color variables and the entire site updates.

---

## What's on the site

- **Homepage** — Hero with photo, animated stat strip, 8 program cards, "Why Apricus" grid, "Meet your teacher" section, 3-step "How it works", testimonial slider, vlog preview, CTA banner
- **About** — Story section, 6 values, growth timeline (2022→2026)
- **Programs** — Sticky tab nav, detailed curriculum for each of 8 programs
- **Pricing** — 4 plans with feature lists, comparison table, 15% discount banner
- **Vlog** — Category filter pills, featured post, 8-card grid, newsletter signup
- **FAQ** — 20 questions across 5 categories with sticky sidebar nav
- **Contact** — Contact methods, form with program selector, working hours

---

## Editing content

All text lives directly in the HTML files — no CMS, no database. To edit:

- **Phone, email, address** — update in the footer of every HTML page (or use find-and-replace across all files)
- **Pricing** — edit `pricing.html`
- **Program descriptions** — edit `programs.html`
- **FAQ** — edit `faq.html` (questions are inside `.faq-item` blocks)
- **Vlog posts** — edit `vlog.html` (each post is an `<article class="vlog-card">`)
- **Testimonials** — edit `index.html` (look for `<div class="testimonial-slide">`)

---

## Browser support

Works on all modern browsers (Chrome, Firefox, Safari, Edge — last 2 versions). Mobile-responsive down to 360px width.

---

**Through difficulties to the stars.**
