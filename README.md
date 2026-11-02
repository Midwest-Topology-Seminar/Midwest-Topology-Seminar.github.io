# Midwest Topology Seminar

A responsive, accessible redesign of the seminar home page and meeting archive. Plain HTML, CSS and a small JavaScript filter; no build step, external fonts, analytics or package installation.

## Publish as an organization home page

1. Create a repository owned by the organization named exactly `ORGANIZATION.github.io`, replacing `ORGANIZATION` with the organization's GitHub username.
2. Put the **contents of this folder** in the repository root, including `.nojekyll`, and commit them to `main`.
3. In **Settings → Pages**, select **Deploy from a branch**, then `main` and `/(root)`, and save.
4. GitHub will publish the site at `https://ORGANIZATION.github.io/`. The meeting archive will be at `/archive/`.

See GitHub's instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

The relative internal paths also support a project Pages site at `/repository-name/`. No domain or organization name has been hard-coded. No GitHub repository has been created or published as part of this delivery.

## Preview locally

From this folder:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000/ and http://localhost:8000/archive/.

## Contents and maintenance

- `index.html`: upcoming meetings, committee, resources, institutions and contact.
- `archive/index.html`: 90 unique historical meeting records, rendered in HTML so the archive works without JavaScript.
- `archive.js`: progressive search, year filtering, result counts and reset.
- `styles.css`: system sans serif typography, responsive layouts, keyboard focus, reduced-motion and print styles. Uses Inter if already installed, otherwise the system UI font.
- `favicon.svg`: local vector mark.
- `data/meetings.json`: a structured reference copy of the source records. The page does not fetch this file; update the HTML table when maintaining the archive, and keep this reference copy in sync.
- `link-report.html` and `link-checks.csv`: dated audit of 125 original URLs and 6 additional URLs. The report preserves original URLs, response codes and redirects.
- `.nojekyll`: serves these files directly through GitHub Pages.

Edit the announcements directly in `index.html`. To add a meeting, insert a table row into `archive/index.html`, give it `data-year="YYYY"`, add the year to the selector if needed, update the initial count and homepage archive count, and update the reference JSON. All filtering operates on the HTML table.

## Source and link audit

Original pages, accessed November 2, 2026:

- http://www.rrb.wayne.edu/MTS/
- http://www.rrb.wayne.edu/MTS/archive/

Preserves the source's committee and meeting records, with these corrections:

- Removed two duplicate 2017 meeting entries (92 rows become 90 unique meetings).
- Fixed the double `@` in the contact email.
- Corrected the May 17–18, 2025 institution and location to Indiana University Indianapolis, Indianapolis, using https://riveramanuel.com/midwest2025/.
- Replaced the missing 2017 Wayne program with its archived announcement: https://rezk.web.illinois.edu/algtop-l/archives2007-2023/2017q3/002875.html.
- Updated Cleveland State and University of Michigan department destinations.
- Followed successful redirects. Preserved working HTTP-only legacy program URLs, since their HTTPS equivalents may fail.
- Missing programs remain in the table as “Program unavailable.” Unverified resources appear as plain text. Links blocked during automated checks are labeled and may work in an ordinary browser.

Original check: 113 successful responses, 6 HTTP 404s, 2 HTTP 403s, and 4 connection failures/timeouts (including a malformed redirect). Additional candidate checks are recorded separately in the same report. A successful HTTP response establishes reachability, not that a host has preserved all historical content. Email syntax was corrected; mail delivery was not tested.

Historical programs and posters are linked on their original hosts; this package does not migrate their content or dependencies. The missing December 1997 host was left as “Not recorded.” Other unverified source details were preserved.

## Verification

Checked internal files and fragment targets. Browser-tested archive text search (12 Northwestern meetings), combined search/year filter (one in 2018), reset (90 meetings), and no-results messaging. Reviewed mobile and desktop layout. All archive records remain visible without JavaScript. External checks used GET requests, redirects and a 22-second timeout.
