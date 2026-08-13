# JMJ Enterprises Solutions — Website

This is the code for the JMJ Enterprises Solutions website (security &amp; cleaning
services). Built with **HTML5 + CSS3 + Vanilla JS + Font Awesome (icons) + Google
Fonts (Poppins / Inter)** — no build step, no framework. Just open `index.html` in
a browser, or serve the folder with any static file server.

## Project structure

```text
jmj_website/
├── index.html                  ← homepage
├── about.html                  ← company info + values
├── contact.html                ← contact info + form + map placeholder
├── gallery.html                ← 12-tile photo grid (placeholders)
├── security-services/
│   ├── index.html               ← hub page, links to all 11 sub-services below
│   ├── corporate-offices-security-guards.html
│   ├── atms-security-guards.html
│   ├── lady-security-officers.html
│   ├── security-guard-company-delhi.html
│   ├── security-guards-embassies.html
│   ├── industrial-security-guards.html
│   ├── hotel-security-guards.html
│   ├── educational-security-guards.html
│   ├── hospital-security-guards.html
│   ├── residential-security-guards.html
│   └── mnc-security-guards.html
├── cleaning-services/
│   ├── index.html               ← hub page, links to all 14 sub-services below
│   ├── industrial-cleaning.html, hospital-cleaning.html, restaurant-cleaning.html,
│   │   commercial-building-cleaning.html, floor-waxing-cleaning.html,
│   │   professional-floor-cleaning.html, post-construction-cleaning.html,
│   │   office-cleaning.html, tile-grout-cleaning.html, carpet-cleaning.html,
│   │   window-cleaning.html, move-out-cleaning.html, domestic-cleaning.html,
│   │   upholstery-cleaning.html
│
├── assets/
│   ├── css/
│   │   ├── style.css            ← base styles, variables, layout, components
│   │   └── responsive.css       ← tablet / mobile / small-mobile breakpoints
│   │
│   ├── js/
│   │   ├── main.js              ← sticky header, smooth scroll, footer year, contact form
│   │   ├── navbar.js            ← mobile hamburger + dropdown toggling
│   │   ├── slider.js            ← client-logo strip prev/next scroller
│   │   └── animations.js        ← scroll-triggered fade/slide-up reveals
│   │
│   └── images/
│       ├── logo.jpeg            ← real JMJ logo (in place)
│       ├── logo.svg             ← placeholder vector mark (unused, kept as backup)
│       ├── hero/                ← empty — see "Where to add images" below
│       ├── security/            ← empty (one photo per security sub-page)
│       ├── cleaning/             ← empty (one photo per cleaning sub-page)
│       ├── clients/             ← empty
│       ├── about/               ← empty
│       └── gallery/             ← empty
│
└── README.md
```

Every page listed above exists and is wired up — same header/nav/footer as the
homepage, correct relative paths at every folder depth (verified by crawling
every internal `href`/`src` on every page against the filesystem). The 11
security and 14 cleaning sub-pages, plus both hub pages, were generated from a
single Python template (not hand-authored one by one) to guarantee the nav,
footer, and relative-path logic stay identical across all 30 pages — that
script isn't part of the deliverable and wasn't kept in the repo.

**Content is placeholder/generic**, written to be genuinely usable but not
based on real copy for each specific service — replace the intro paragraph and
bullet list on each service page with real copy when available.

## Where to add images

The homepage currently shows **dashed placeholder boxes** (labelled with the
expected file path) anywhere a real photo is missing — those boxes are defined
by the `.img-placeholder` class in `assets/css/style.css`. Drop the real photo
into the folder shown on the placeholder, then swap the placeholder `<div>` for
the commented-out `<img>` tag directly above it in `index.html`. Concretely:

| Section in `index.html`      | Drop the photo here                          | Suggested filename            |
|-------------------------------|-----------------------------------------------|--------------------------------|
| Hero (right side)             | `assets/images/hero/`                        | `security-hero.jpg`           |
| Security Services showcase    | `assets/images/security/`                    | `security-showcase.jpg`       |
| Cleaning Services showcase    | `assets/images/cleaning/`                    | `cleaning-showcase.jpg`       |
| Client logos (Max, DLF, ...)  | `assets/images/clients/`                     | `max-healthcare.png`, etc.    |
| Gallery page (12 tiles)       | `assets/images/gallery/`                     | `gallery-1.jpg` … `gallery-12.jpg` |
| About page team photo         | `assets/images/about/`                       | `about-team.jpg`              |
| Each security sub-page        | `assets/images/security/`                    | `<page-slug>.jpg` (e.g. `hotel-security-guards.jpg`) |
| Each cleaning sub-page        | `assets/images/cleaning/`                    | `<page-slug>.jpg` (e.g. `carpet-cleaning.jpg`) |
| Contact page map              | n/a — replace the placeholder `<div>` with a real Google Maps `<iframe>` embed | — |

For each spot, the HTML already has a comment right above the placeholder
showing the exact `<img>` tag to uncomment/use, e.g.:

```html
<!--
  Replace the placeholder below with a real photo once available:
  <img src="assets/images/hero/security-hero.jpg" alt="JMJ security officer on duty" class="hero-img" />
-->
<div class="hero-img img-placeholder">
  <i class="fa-solid fa-image"></i>
  <small>assets/images/hero/security-hero.jpg</small>
</div>
```

Just paste in the `<img>` tag from the comment and delete the placeholder `<div>`.

The **client logos** section (Max Healthcare, DLF, Radisson, Crowne Plaza,
Amity) is built as styled text + Font Awesome icons rather than images, since
no client logo files exist yet. If you get permission to use the real client
logo marks, swap each `<span class="client-logo">…</span>` for an
`<img src="assets/images/clients/…" alt="…" />` instead.

## Logo

`assets/images/logo.jpeg` is the real JMJ logo, used in the header and footer.
It's a JPEG with a white background outside the circular badge, so it's
displayed inside a circular, slightly zoomed-in frame (`.logo-mark img` in
`style.css`) to crop out the white corners. If you get a version with a
transparent background (PNG/SVG) later, drop it in as
`assets/images/logo.png` and update the two `<img src="assets/images/logo.jpeg">`
references in `index.html` (header + footer) — you'll be able to remove the
crop/zoom CSS at that point too.

## Design system

Per the plan in `ChatGPT_Chat.md`, the whole site is built around three visual
rules — **white space + black + gold** — using CSS variables defined at the top
of `assets/css/style.css`:

```css
--black: #0a0a0a;
--gold: #DFAF24;
--gold-light: #F5C542;
--white: #FFFFFF;
```

## Next steps

- Replace image placeholders with real photography (see table above)
- Replace the generic intro copy/bullet list on each of the 25 service sub-pages
  with real, service-specific content
- Wire up the contact form (`contact.html`) to an actual email or backend
  endpoint — right now `assets/js/main.js` just intercepts the submit and shows
  a client-side "thanks" message, nothing is actually sent anywhere
- Replace the client-logo text marks with real logos once you have permission
  to use them (see "Where to add images" above)
