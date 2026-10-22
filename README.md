# Adonai Tourism Promotion — website

Premium single-page site for the agency, built from the client's own copy.
Plain HTML, CSS and JavaScript: no build step, no dependencies, no CDN.
The site lives at the repository root, so any static host (GitHub Pages, Netlify,
Vercel, Cloudflare Pages, cPanel, S3) can serve it as-is.

```
├── index.html
└── assets/
    ├── css/style.css
    ├── js/main.js
    ├── fonts/            Cormorant Garamond + Inter, self-hosted (woff2)
    └── img/             hero + destinations, logo.jpg / logo-round.png (from the supplied crest)
```

## Run locally

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

### Publishing on GitHub Pages

Settings → Pages → **Source: Deploy from a branch** → Branch `main`, folder `/ (root)`
→ Save. The site appears at `https://ayomideomofa-create.github.io/adonai/` within a
minute. All asset paths are relative, so the subpath works unmodified.

## Page structure

| # | Section | Content |
|---|---------|---------|
| — | Hero | Partnership line + un-paf.org, Doha phone, "ADONAI" monument, "See more. Experience more. Travel better.", two CTAs |
| — | Service strip | Flight assistance · Airport pickup · Guided experiences · Visa support |
| — | Marquee | Worldwide travel assistance · Visit-visa guidance · Tailored itineraries |
| 01 | How we help | The nine services, each card pre-fills the matching service in the enquiry form |
| 02 | Destinations | Draggable rail: Doha, Tanzania, Nigeria, Worldwide, USA & Canada, Mexico & Beyond — each pre-fills the destination field |
| — | Band | "More than a booking. A better travel experience." |
| 03 | About Adonai | Doha-based positioning, four points, UN PAF partnership panel |
| 04 | Process | Tell us → Review options → Confirm details (photograph swaps per step) |
| 05 | Enquiry | Full enquiry form → prepared WhatsApp message, with the client's "Important" disclaimer |
| — | Closing CTA | "Your next journey deserves a thoughtful start." |
| 06 | Get in touch | Phone, both emails, Doha, partnership |
| — | Footer | Crest, links, "Travel responsibly" disclaimer, monument wordmark |

Interactions: preloader, scroll progress, sticky nav, hero parallax, reveal-on-scroll,
drag/wheel/snap destination rail, sticky process frames, mobile overlay menu,
floating WhatsApp button, service & destination pre-fill, and a validated enquiry
form that opens WhatsApp with the message prepared.

Accessibility/robustness: `prefers-reduced-motion` support, a `<noscript>` fallback,
icon sprite with `aria-hidden` icons, skip link, labelled fields, focus states,
and `scroll-margin` so anchors clear the fixed header.

## The enquiry form

It does not post to a server. On submit it:

1. validates full name, service and destination (phone/email optional, matching the brief);
2. builds a plain-text message (name, phone, email, service, destination, date in
   readable form, travellers, details);
3. opens `https://wa.me/97431040295?text=…` in a new tab, and leaves an
   "Open WhatsApp" fallback button under the form for pop-up blockers.

If you later want submissions by email as well, point the `<form>` at Formspree /
Netlify Forms and post the same fields — the validation and message builder are
already in `assets/js/main.js`.

## Before you go live

1. **Photography** — the destination images are AI-generated placeholders sized for
   the layout (hero 2000px wide 16:9, destination cards 3:4, process frames 4:5).
   Replace with your own licensed photographs at the same aspect ratios. Keep the
   supplied `logo.jpg` and `logo-round.png` if the crest is unchanged.
2. **Social preview** — add a 1200×630 image and point `og:image` at it.
3. **Domain** — `https://www.adonai-travel.com` is used in the structured-data block;
   adjust if the live domain differs.
4. **Claims to verify** — the footer/visa disclaimers and the partnership line are
   reproduced from the client's brief. Confirm the partnership wording with UN PAF
   before publishing, and keep the "Travel responsibly" text as supplied.

## Notes on the build

Art direction: "name as a monument" — the wordmark is the composition, gold on a
navy night, Cormorant Garamond against Inter, the crest repeated at small scale in
the nav, band and footer so the page reads as one house. No stock icon cards,
no gradient blobs, no centred three-line hero.

Checked in a real browser at 1440, 900 and 390 px: no horizontal overflow, fonts
loading, no console errors; service/destination pre-fill, validation, date
formatting, WhatsApp message generation and the mobile menu all exercised.
