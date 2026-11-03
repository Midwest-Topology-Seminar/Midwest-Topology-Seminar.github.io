# Midwest Topology Seminar

Plain HTML versions of the original home and archive pages, with a system sans serif font, readable spacing and responsive layout. No build step, external assets, scripts, illustrations or promotional copy.

## Install on GitHub Pages

Copy the contents of this folder into the root of your existing organization GitHub Pages repository, replacing the previous files. Keep `.nojekyll`. Your existing Pages configuration can remain as it is.

Pages:
- `index.html`
- `archive/index.html`

Shared stylesheet: `styles.css`.

The prior version's `archive.js`, `favicon.svg` and `data/meetings.json` are no longer used and can be deleted from the repository.

## Content

Original wording, headings, section order, lists and all 92 original archive rows are retained, including duplicate 2017 entries. Only markup, navigation, table column labels and typography have changed. Original dates, institutions and locations are retained, including the source's May 2025 location.

The malformed double-@ email address is corrected. Previously verified link replacements and redirects are retained. Links that failed the earlier check are shown as their original text without an active hyperlink; original URLs remain in `link-checks.csv` and `link-report.html`. Links blocked during automated checking are retained. The 2017 Wayne State date links to a verified archived announcement because the original destination was missing.

Link-check results are from November 2, 2026. The report is a maintenance document, not an added section on the two pages.

Original sources:
- http://www.rrb.wayne.edu/MTS/
- http://www.rrb.wayne.edu/MTS/archive/

## Preview

Run `python3 -m http.server 8000` in this folder and open http://localhost:8000/.
