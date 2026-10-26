# Beyond Paycheck — event website demo

A mobile-friendly redesign of the original Beyond Paycheck Wix event page. Built with Vite, HTML, CSS, and JavaScript. No backend, database, or credentials required.

## Run

Requires Node.js 20.19+ or 22.12+ (validated with Node 24).

```sh
npm ci --cache /workspace/.npm
npm run dev -- --port 5173
```

## Build

```sh
npm run build
npm run preview -- --port 4173
```

Deploy `dist/` to a static host to publish the website. Publishing the development environment does not deploy the website.

## Content and assets

The owner-supplied “Home _ Beyond Paycheck wix page.pdf” is the source for the event purpose, three exploration topics, participant expectations, speaker biographies, partners, event highlights, and footer credit. Copy was lightly edited for readability. Speaker portraits and event photography were extracted from that PDF, as were the Glocapro, MurphyBen, Genius, and B & O Consult logos. RealVest Global and Pertinence Group use text representations. Bundled assets do not require third-party image hosting.

Attendance figures are described as expected; bonus availability is subject to organiser confirmation. The PDF provides no date, time, timezone, venue/joining information, or registration destination. These are marked as to be announced, without invented specifics. The original placeholder email and unprovided legal-policy links are omitted.

## Demo registration

The RSVP form uses native required-field, email, and phone validation and shows a clearly labelled simulated confirmation. Use sample details. Nothing is stored, transmitted, or booked. Before a live launch, supply the event details, a real registration endpoint/link, appropriate privacy/legal pages, and confirmation of advertised bonuses and partner participation.

## Accessibility and layout

Includes a skip link, labelled inputs, keyboard navigation, visible focus states, reduced-motion support, mobile navigation, and expandable speaker biographies. Google Fonts is optional and has system fallbacks.

## GitHub Pages hosting

The static production build is published to the `gh-pages` branch. In GitHub, open **Settings → Pages**, select **Deploy from a branch**, then choose **gh-pages** and **/ (root)** and save. The expected site address is `https://drxlim.github.io/Beyond-Paycheck/` once GitHub reports a successful deployment.

To update the hosted version after code changes, rebuild with `npm ci && npm run build` and publish the contents of `dist/` (not the source checkout) to `gh-pages`. Do not commit credentials or node_modules. The source code lives on `main`; GitHub Pages serves only the static build.
