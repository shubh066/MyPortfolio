# Portfolio knowledge transfer

Owner: Shubhankar Mukharjee  
Scope: the portfolio delivered in this conversation, including photos and the midnight-blue theme.

## 1. What has been built

This is a responsive, single-page static website. “Static” means the host delivers ready-made files; the browser runs the interactions. It does not mean the page is visually static.

It contains an introduction, professional metrics, an about section, experience timeline, selected work, technical skills and education, an API challenge, a personal section with photos, and contact links. Anchor navigation moves between sections on the same page.

There is no React, Angular, Vue, WordPress, database, API server, authentication, CMS, payment system, analytics, or AI model running in this site. The API challenge is an educational quiz; it does not call a real API. The car assistant is described as a separate prototype, not embedded as an operational assistant.

The website is ready for static hosting. A public deployment or custom domain has not been created as part of this work.

## 2. Technology stack and responsibility

| Technology | Use in this project |
|---|---|
| HTML5 | Text, page sections, navigation, images, links, buttons, metadata, native dialogs |
| Bootstrap 5.3.8 CSS | Responsive columns, containers, spacing utilities, navbar foundations |
| Bootstrap 5.3.8 JavaScript bundle | Mobile navigation expand/collapse behavior |
| Custom CSS | Actual visual identity, typography, gradients, cards, photo layouts, responsive adjustments, animation |
| Vanilla JavaScript | Project data and dialogs, filtering, game logic, copy email, notifications, scroll observations |
| Inline SVG | Animated connection paths and illustrative project graphics |
| SVG file | Browser favicon |
| WebP | Optimized photographic assets |
| PDF | Downloadable original résumé |

Bootstrap is bundled locally in `assets/vendor`, including its MIT license. The browser does not need to fetch it from a CDN. Fonts use system font families: Segoe UI/Arial for body text, Georgia for italic display text, and Consolas/Courier New for technical labels. No font service is involved.

### Tools used during construction, not required by visitors

- Python and pypdf extracted résumé text.
- PowerShell handled file operations and downloaded the Bootstrap distribution and license.
- Node.js and Sharp prepared photos for web delivery.
- Node.js and Playwright automated checks in installed Microsoft Edge.
- Python's HTTP server provided the local preview.
- Python's ZIP library packaged the final files.

These tools do not become website dependencies. Visitors only need a modern browser. There is no npm install or build step for deployment.

## 3. Files and folders

```text
portfolio/
├── index.html
├── styles.css
├── script.js
├── README.md
├── KNOWLEDGE-TRANSFER.md
├── .nojekyll
└── assets/
    ├── favicon.svg
    ├── Shubhankar_Mukharjee_Resume.pdf
    ├── photos/
    │   ├── shubhankar-portrait.webp
    │   ├── travel-colours.webp
    │   ├── travel-riverside.webp
    │   ├── travel-memories.webp
    │   └── travel-horizons.webp
    └── vendor/
        ├── bootstrap.min.css
        ├── bootstrap.bundle.min.js
        └── LICENSE-bootstrap.txt
```

`index.html` is the entry page. `README.md` is a short operating guide. This document is the detailed handover. `.nojekyll` is an empty marker useful when serving these files through GitHub Pages without Jekyll processing.

The adjacent `shubhankar-portfolio.zip` contains the deployable folder contents. `portfolio-preview.png` is a screenshot, not an asset the website uses. The separate workspace `work` directory contains development scripts and screenshots; it is not needed for deployment.

## 4. How a visitor's browser builds the page

1. The browser requests `index.html` from the host.
2. HTML tells it to load Bootstrap CSS, then `styles.css`.
3. It fetches the favicon and portrait. Travel photos use lazy loading, so they can wait until near the viewport.
4. Bootstrap JavaScript and `script.js` load with `defer`: they execute after HTML parsing, in document order.
5. Custom JavaScript attaches click handlers and scroll observers.
6. Interactions update the existing page; there is no server-side processing or page reload for the game, filters, or dialogs.

Links such as `assets/photos/travel-colours.webp` are relative. Keeping the folder structure intact lets the site work on a domain root or a hosted subdirectory. `#work` is a fragment identifier: it targets the element with `id="work"`.

## 5. Construction process

### A. Content discovery

I extracted the résumé's text and organized the information around what a recruiter would scan: current role, relevant strengths, actual scale of work, progression, project context, and contact details. The 3+ years, 200+ invoice XML validations per month, and 15+ monthly incident investigations came from the résumé. They are written content, not live calculations or external data feeds.

I retained the original downloadable PDF and marked the car recommendation assistant as a prototype in development. The technical project illustrations were created with HTML/CSS/SVG; they are not screenshots of client systems.

### B. Information structure

I wrote semantic sections for `home`, `about`, `experience`, `work`, `skills`, `playground`, `hobbies`, and `contact`. The navigation points to selected sections. The résumé and contact actions appear in accessible places so visitors do not need to play the game or inspect every project.

### C. Layout and first design

I used Bootstrap's grid as the layout foundation and wrote custom CSS for the visual identity. The initial version used ivory, orange, and muted green. An engineering connection illustration was built in the hero instead of relying on a stock photograph.

### D. Interactive behavior

I added project category filters, detailed project dialogs, mobile-menu behavior, scroll reveals, active navigation states, copy-email feedback, and the API challenge. These features use browser APIs and plain JavaScript.

### E. Personal content

After your requests, I added cars, driving, travel, former competitive gaming, riding, Bengali as your mother tongue, and Odia-medium schooling. These details came from you rather than being inferred from photos.

### F. Photos

I added the professional portrait beside the introduction and four photos to the personal gallery. Sharp applied orientation handling and web-size resizing, then encoded WebP at quality 82. The target widths were 480 pixels for the portrait, 1,400 for three portrait-format travel photos, and 1,800 for the landscape photo. Upscaling was disabled. The supplied originals in Downloads were not overwritten.

The gallery uses CSS `object-fit: cover` to fill its tiles. This is a display crop; each linked WebP retains the full photo composition. Selecting a tile opens that optimized image in a new tab. “Full photo” here means the complete composition, not the original maximum-resolution file. Sharp output was not configured to retain original EXIF metadata.

### G. Color refresh

At your request, I replaced the visible ivory/orange/green treatment with midnight blue, electric blue, and lilac gradients. This affects buttons, headlines, illustrations, backgrounds, project cards, skills, contact, and the favicon.

### H. Verification and packaging

I checked JavaScript syntax, used browser automation for interactions and layout, visually inspected screenshots, fixed discovered layout issues, and regenerated the website ZIP after changes.

## 6. CSS design and responsive behavior

The active theme appears toward the end of `styles.css`, under the comment `Midnight / electric blue / lilac visual theme`.

| Variable | Current value | Meaning |
|---|---|---|
| `--paper` | `#f7f9ff` | Main pale background |
| `--ink` | `#172440` | Main dark text |
| `--muted` | `#586781` | Supporting text |
| `--accent` | `#3454db` | Highlight color |
| `--line` | `#d8e0f1` | Borders and separators |
| `--tint` | `#eef2fc` | Secondary surfaces |
| `--dark` | `#111d38` | Dark backgrounds |

The later theme overrides the earlier base rules through the CSS cascade. This was a quick, reversible way to apply your design revision. Editing only the first `:root` block may have no visible effect because the final block wins. Some gradients and component colors are explicit values rather than variables. The class `button-orange` is a legacy name: its current appearance is blue-to-purple.

For future cleanup, the base styles and final theme could be consolidated and the button renamed to `button-primary`; that refactor has not been done. No Sass or CSS compiler is used.

Modern CSS features include custom properties, Grid, Flexbox, `clamp()` for fluid sizes, `aspect-ratio`, gradient backgrounds, `backdrop-filter`, `object-fit`, and dynamic viewport height for dialogs. The hero illustration combines dotted backgrounds, SVG paths, and positioned nodes.

Bootstrap handles broad responsive columns, while custom media queries adjust typography, spacing, galleries, and component dimensions. Custom breakpoints include 575, 991, 1199, and 1500 pixels. For example, the gallery shows four columns on large screens and two on smaller screens. The desktop navigation collapses below Bootstrap's large breakpoint.

## 7. Animation implementation

| Effect | Implementation |
|---|---|
| Rotating orbit | CSS `orbit` keyframe rotates a dashed circle over 65 seconds |
| Moving connection signal | CSS `flow` changes SVG stroke dash offset over 9 seconds |
| Blinking console cursor | CSS `blink` keyframe |
| Scroll reveal | `IntersectionObserver` adds `visible` to eligible elements |
| Card and button hover | CSS transforms and shadow transitions |
| Photo hover | A small CSS scale inside an overflow-hidden tile |
| Anchor movement | CSS smooth scrolling |

The page respects `prefers-reduced-motion`. Animations and transitions are disabled and content remains visible for visitors who request reduced motion. There is no animation library, video background, WebGL scene, or game engine.

## 8. JavaScript features, explained

### Project filters

Buttons have `data-filter="all"`, `enterprise`, or `personal`. Project cards have matching `data-category` values. Clicking a filter changes each card's `hidden` property. The selected button gets an active class and an updated `aria-pressed` value. A live notification announces how many projects are shown.

### Project details

`projectDetails` contains four records keyed by `invoice`, `car`, `reliability`, and `network`. Each includes title, metadata, context, contribution list, takeaway, and tags. The visible card's `data-project` value selects the matching record.

The handler generates the detail content inside `#projectContent`, then opens the native `<dialog>` using `showModal()`. The close button, Escape key, or clicking outside the dialog closes it. A body class prevents background scrolling. The discussion link closes the dialog and navigates to contact.

Project text and game markup use `innerHTML` with author-controlled constants. If you later accept visitor-entered text or remote data, do not feed it directly into these templates; use safe text insertion or proper sanitization. Current code has no user-input ingestion path.

### Navigation

Bootstrap provides mobile collapse behavior. Custom code closes the menu after selecting a link. It also handles a click while the opening animation is still running by waiting for the `shown.bs.collapse` event before hiding it.

A second `IntersectionObserver` watches sections and updates navigation highlighting and `aria-current`. This is custom logic, not Bootstrap Scrollspy.

### Copy email and feedback

The copy button calls `navigator.clipboard.writeText`. If copying fails, the notification displays the email for manual copying. Clipboard support depends on the browser context and permissions; HTTPS or localhost is the intended environment.

`announce()` writes to `#feedback`, briefly shows it, and hides it after 3.5 seconds. The same notification element supports filter messages. The copyright year is read from the visitor's system date.

### Game logic

`scenarios` stores the title, diagnostic text, question, options, correct answer index, and explanation for each question. Indices are zero-based: `0` is the first answer, `1` the second, and `2` the third.

State consists of `questionIndex`, `score`, and `answered`. Starting resets the state. `renderQuestion()` displays the current scenario. Selecting an answer locks all choices, marks the correct choice, updates the score once, explains the answer, and reveals the next button. After the third question, `renderScore()` displays the result. Replay starts again.

There is no timer, saved score, leaderboard, network request, cookie, or local storage. Refreshing the page discards the game state. Answers are visible in the source, as expected for an educational demonstration rather than an assessment system.

## 9. Accessibility, search metadata, and performance

Implemented accessibility measures include semantic sections, one main hero heading, a skip link, focus outlines, image descriptions, named controls, native dialogs, filter pressed states, live feedback, focus movement within the quiz, reduced motion, and no game timer.

These measures and automated interaction checks are not a formal WCAG certification or full screen-reader audit. Browser-specific behavior and assistive technology testing can be expanded before a major launch.

The HTML includes a title, description, viewport tag, theme color, Open Graph text, and Schema.org Person JSON-LD. The structured data describes your name, role, employer, LinkedIn URL, and selected areas of knowledge. It does not guarantee search ranking.

A domain-specific canonical URL, `og:url`, social preview image, sitemap, and Search Console submission have not been configured. There is no hosting-specific cache or security-header configuration yet.

Performance choices include local dependencies, system fonts, deferred scripts, compressed WebP photos, lazy travel images, image dimensions, and observer-based scroll handling. Bootstrap is the full compiled distribution rather than a custom reduced build. No formal Lighthouse score or load-performance benchmark is claimed.

## 10. Validation completed

The full browser interaction run checked:

- Enterprise and personal project filters and returning to all four projects.
- Opening all four project details and closing dialogs.
- Three correct game answers, one incorrect-answer path, final score, and replay.
- Background scroll lock cleanup after closing a dialog.
- Mobile menu closure after tapping navigation.
- Successful résumé response and expected non-empty file size.
- Reduced-motion behavior.
- Horizontal overflow at 360, 390, 768, 1024, and 1440-pixel widths.
- JavaScript browser errors and failed HTTP responses during that run.

The photo and color revisions were subsequently checked at 360, 390, 1024, and 1440-pixel widths, verifying photo loading and page overflow, plus screenshot review. The full interaction suite was not rerun after every cosmetic revision.

Fixes made during development included narrow-screen Bootstrap gutter overflow, hero headline overflow, a mobile menu transition timing issue, explicit hiding for elements with the `hidden` attribute, and gradient sizing in the illustration.

Testing used headless Microsoft Edge through Playwright. Safari, Firefox, actual iOS/Android devices, a complete screen-reader audit, and public-host testing have not been performed. The checks are a defined validation scope, not a guarantee of every possible browser configuration.

## 11. Running the site locally

You can open `index.html` directly for a basic preview. A local HTTP server is better for matching normal website behavior.

If Python is installed and available on your command line, open a terminal in the portfolio folder and run:

```powershell
python -m http.server 8765 --bind 127.0.0.1
```

Then open `http://127.0.0.1:8765/`. If the command is unavailable, use your Python installation's executable path. The bundled Python path used in this workspace is environment-specific and is not required on another computer.

`127.0.0.1` means this computer. `8765` is the selected local port. The server must remain running; Ctrl+C stops a foreground server. A reboot or process termination also stops it. A different device's `127.0.0.1` refers to that other device, not your computer.

The earlier failed preview was diagnosed by checking the port: the server was no longer accepting connections. I restarted it as a hidden background process and verified an HTTP 200 response. Opening a browser tab alone does not restart the server.

Do not use Python's development server as your public production host. A static hosting service serves the same files without depending on your laptop being on.

## 12. Publishing and updating

1. Extract the supplied ZIP.
2. Locate the folder whose immediate contents include `index.html`, `styles.css`, `script.js`, and `assets`.
3. Upload that folder's contents as a static site. No build command is needed.
4. Keep every asset path and filename intact. The Bootstrap CSS/JS and photos must be uploaded too.
5. Use the public HTTPS address supplied by your host. Verify public visibility and test without signing in.
6. Check photos, navigation, project dialogs, game, PDF download, LinkedIn, and email on the published URL.
7. If using a custom domain, configure it through the hosting provider and follow its DNS instructions. Domain purchase and DNS setup are separate from this website's code.

Netlify Drop was the suggested manual-upload route in this conversation. Provider instructions previously consulted: https://docs.netlify.com/start/quickstarts/netlify-drop-quickstart/

For updates, change the local source files, preview, verify, and upload the complete updated folder to the existing hosting project. Regenerating a ZIP does not automatically update a public website. Keep a copy of the previous working release for rollback. A Git repository would make history and automated deployments easier, but none was set up as part of this work.

Files in the upload folder can be publicly accessible if their paths are known, including the résumé and these guides. The page only links the relevant visitor assets. Do not put private notes or credentials into the publishing folder.

## 13. Maintenance recipes

| Change | Where to edit | Follow-up |
|---|---|---|
| Introduction, role, location | `index.html` | Check line wrapping on mobile |
| Experience, dates, metrics | `index.html` | Update corresponding project details if relevant |
| Detailed project narrative | `projectDetails` in `script.js` | Check dialog rendering |
| Main palette | Final theme block in `styles.css` | Check explicit gradients and text contrast too |
| Résumé | PDF in `assets` | Preserve filename or update both HTML links |
| Email | HTML mail link/display and copy constant in `script.js` | Verify both sending and copying |
| LinkedIn | Contact anchor and Person JSON-LD in HTML | Verify destination |
| Portrait or gallery | `assets/photos` and relevant HTML | Update dimensions/alt text if needed |
| Personal information | `#hobbies` in `index.html` | Keep wording accurate |
| Game questions | `scenarios` in `script.js` | Check answer indices and result behavior |
| Page title/search description | HTML `<head>` | Keep visible content consistent |

### Add a project

Duplicate a `.project` article and give it the correct `data-category`. Set a unique `data-project` key on its detail button. Add the same key to `projectDetails` with all expected fields. Update the visible “All work 04” label and any documentation counts. Confirm filters and its dialog work.

### Replace a photo

Export an appropriately sized WebP and replace the matching asset. If you rename it, update both the image `src` and gallery link `href`. Review `alt`, width/height attributes, and CSS `object-position`. Those CSS values control the tile crop, not the source file. Keep original photos separately for future exports.

### Add a game question

Add a scenario object with the six fields used by existing entries. The progress display and final denominator use `scenarios.length`, but the visible “3 scenarios” label in HTML must also be updated. Give every option a clear purpose and test the correct and incorrect paths.

### Change a section ID

If you rename an ID such as `hobbies`, update navigation `href="#hobbies"` and any CSS/JavaScript selectors that reference it. IDs connect navigation, styling, and behavior.

## 14. Troubleshooting

| Symptom | Likely cause and next check |
|---|---|
| Local connection refused | Start the preview server and check the port |
| Hosted page not found | Verify the publishing root contains `index.html` |
| Page has no styling | Verify `styles.css` and the vendor CSS path were uploaded |
| Buttons or game do nothing | Check that both scripts load; inspect browser Console for errors |
| Photos missing after upload | Compare exact paths and capitalization; hosting may be case-sensitive |
| Old theme still visible | Reload without cache; confirm the newest CSS was deployed |
| Menu cannot expand | Check Bootstrap bundle loading and `mainNav` target matching |
| Copy email unavailable | Use HTTPS/localhost or manually copy the displayed address |
| Email link does not compose | The device needs a configured mail handler; it is not a form service |
| Only the picture opens | Gallery links intentionally open the complete optimized image |
| Resume not updated | Replace the PDF, redeploy, and check caching |

## 15. Boundaries and future extensions

Everything necessary to render the current site is in the folder. It collects no visitor information through an application form and has no application-owned analytics, accounts, or persisted game data. A hosting provider may maintain its own operational request logs.

A contact form would require a form endpoint or service and a clear success/failure flow. A CMS would require a content source and a safer rendering pipeline. Live project demos, repositories, and certificate verification URLs should only be added when you have actual destinations. Dark/light switching, additional games, analytics, and automated deployment are possible extensions, but are not part of the present implementation.

For handover, remember the division: HTML holds most content, CSS controls appearance, JavaScript controls behavior, assets hold media and vendor files, and the host delivers those files to the browser.
