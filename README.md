# JMJ Enterprises Solutions — Website

This is the code for the JMJ Enterprises Solutions website (security, cleaning
&amp; facility management). Built with **HTML5 + CSS3 + Vanilla JS + Font
Awesome (icons) + Google Fonts (Poppins / Inter)** — no build step, no
framework. Just open `index.html` in a browser, or serve the folder with any
static file server.

Site structure and copy follow `guidelines/updated_guidelines.txt`.

## Project structure

```text
jmj_website/
├── index.html                  ← homepage
├── about.html                  ← company info, mission/vision, quality pillars
├── contact.html                ← contact info + form + map placeholder
├── facility-management.html    ← 4 manpower categories
├── sectors-served.html         ← 5 industry sectors served
├── security-services/
│   └── index.html               ← "Security Solutions" — 6 service modules on one page
├── cleaning-services/
│   └── index.html               ← "Cleaning & Hygiene" — 6 service modules on one page
├── gallery.html                 ← still exists but NOT linked from nav/footer
│                                   (dropped from the nav per the guidelines; kept
│                                   in case you still want it reachable some other way)
│
├── assets/
│   ├── css/
│   │   ├── style.css            ← base styles, variables, layout, components
│   │   └── responsive.css       ← tablet / mobile / small-mobile breakpoints
│   │
│   ├── js/
│   │   ├── main.js              ← sticky header, smooth scroll, footer year, contact form
│   │   ├── navbar.js            ← mobile hamburger toggle
│   │   ├── slider.js            ← client-logo strip prev/next scroller
│   │   └── animations.js        ← scroll-triggered fade/slide-up reveals
│   │
│   └── images/
│       ├── logo.jpeg            ← real JMJ logo (in place)
│       ├── logo.svg             ← placeholder vector mark (unused, kept as backup)
│       ├── hero/                ← empty — see "Where to add images" below
│       ├── security/            ← empty
│       ├── cleaning/            ← empty
│       ├── clients/             ← empty
│       ├── about/               ← empty
│       └── gallery/             ← empty
│
└── README.md
```

## What changed in this pass (per the guidelines)

- **Nav simplified**: Security Solutions and Cleaning & Hygiene are now plain
  links (no dropdown) to one comprehensive page each, instead of a mega-menu
  fanning out to 25 individual sub-pages. Those 25 sub-pages were deleted.
- **Nav restructured** to: Home / About Us / Security Solutions / Cleaning &
  Hygiene / Facility Management / Sectors Served / Contact Us. "Gallery" was
  dropped from the nav (not in the guidelines' structure) — the file itself is
  still there, just unlinked.
- **New pages**: `facility-management.html` (manpower/staffing categories) and
  `sectors-served.html` (industries served) didn't exist before.
- **Header CTA** changed from "Contact Us" to "Request a Quote".
- **Full copy rewrite** on the homepage, About, and Contact pages per the
  guidelines' blueprint (hero headline, value proposition, core service
  pillars, "why choose us", mission/vision, etc).
- **Contact form** expanded to match the guidelines' field list: Full Name,
  Corporate Email, Phone, City/Facility Location, a Service Required dropdown,
  and Message.

### Deliberately NOT changed (confirmed with you first)

- **Phone, email, and address are still the real/current ones**
  (`+91 98100 12345`, `jmjsanu@gmail.com`, the Sant Nagar address) — the
  guidelines suggested a professional domain email
  (`info@jmjenterprisessolutions.com`); that wasn't adopted since you don't
  have that domain/inbox set up yet. Swap it in once you do (it appears in the
  footer on every page, plus the Contact page's info box — search for
  `jmjsanu@gmail.com`).
- **No PSARA compliance badge or claim** was added anywhere (trust bar,
  About page, footer) — you said not to, since it isn't confirmed. The "Multi-
  City Operations (Delhi NCR • Bengaluru • Pan-India)" claim from the
  guidelines *was* kept, per your answer, even though the physical address on
  file is Delhi-only.
- The About page's "Core Pillars of Compliance & Quality" section in the
  guidelines led with a "PSARA & Regulatory Compliance" pillar asserting full
  regulatory compliance as fact. Since that's the same claim you asked to
  leave out, I swapped it for a neutral "Ethical & Transparent Operations"
  pillar instead of publishing an unconfirmed compliance claim — flagging this
  substitution explicitly in case you want different wording.

Every page shares the same generated header/nav/footer (correct relative
paths at every folder depth), and every internal link on every page was
crawled against the filesystem to confirm it resolves — see
`assets/images/...` placeholder comments below for the only intentionally
unresolved paths (future photography).

## Where to add images

The site shows **dashed placeholder boxes** (labelled with the expected file
path) anywhere a real photo is missing — those boxes are defined by the
`.img-placeholder` class in `assets/css/style.css`. Drop the real photo into
the folder shown on the placeholder, then swap the placeholder `<div>` for the
commented-out `<img>` tag directly above it. Concretely:

| Section                        | Drop the photo here                          | Suggested filename            |
|----------------------------------|-----------------------------------------------|--------------------------------|
| Hero (homepage, right side)      | `assets/images/hero/`                        | `security-hero.jpg`           |
| Client logos (Max, DLF, ...)     | `assets/images/clients/`                     | `max-healthcare.png`, etc.    |
| About page team photo            | `assets/images/about/`                       | `about-team.jpg`              |
| Gallery page (if you re-link it) | `assets/images/gallery/`                     | anything                      |
| Contact page map                 | n/a — replace the placeholder `<div>` with a real Google Maps `<iframe>` embed | — |

For each spot, the HTML has a comment right above the placeholder showing the
exact `<img>` tag to uncomment/use, e.g.:

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
transparent background (PNG/SVG) later, drop it in as `assets/images/logo.png`
and update the `<img src="assets/images/logo.jpeg">` references (header +
footer, every page) — you'll be able to remove the crop/zoom CSS at that point
too.

## Design system

The whole site is built around three visual rules — **white space + black +
gold** — using CSS variables defined at the top of `assets/css/style.css`:

```css
--black: #0a0a0a;
--gold: #DFAF24;
--gold-light: #F5C542;
--white: #FFFFFF;
```

## Next steps

- Replace image placeholders with real photography (see table above)
- Decide on the PSARA badge, ISO certification icons, and professional domain
  email once those are actually confirmed/available, then add them in
- Wire up the contact form (`contact.html`) to an actual email or backend
  endpoint — right now `assets/js/main.js` just intercepts the submit and shows
  a client-side "thanks" message, nothing is actually sent anywhere
- Replace the client-logo text marks with real logos once you have permission
  to use them (see "Where to add images" above)
- Decide whether to re-link `gallery.html` somewhere, or remove it entirely
