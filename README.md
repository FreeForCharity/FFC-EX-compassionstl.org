# CompassionSTL

**CompassionSTL** is a free, all-in-one directory of community resources in St. Louis and Missouri — verified links and phone numbers for food, housing, medical care, mental health, job training, and more, so people don't have to search dozens of websites to find help.

**Live site:** [https://compassionstl.org](https://compassionstl.org)
**Source code:** [github.com/FreeForCharity/FFC-EX-compassionstl.org](https://github.com/FreeForCharity/FFC-EX-compassionstl.org)

## Site pages

| Page               | Path                | Content                                                                                  |
| ------------------ | ------------------- | ---------------------------------------------------------------------------------------- |
| Home               | `/`                 | What CompassionSTL is, category quick links, emergency & quick help, how to use the site |
| All Resources      | `/resources`        | The complete categorized community resource directory                                    |
| Social Workers     | `/social-workers`   | Free help from social workers at St. Louis County Library, plus family resources         |
| Education & Career | `/education-career` | College planning, financial aid, apprenticeships, adult education, and job search        |
| Disclaimer         | `/disclaimer`       | Disclaimer and research tools                                                            |

## Editing content

- **Branding / SEO:** `src/lib/site.config.ts`
- **Directory listings:** `src/data/resources.ts`, `src/data/social-workers.ts`, `src/data/education-career.ts` (typed data rendered by `src/components/resource-directory/`)
- **Homepage cards:** `src/components/home-page/`
- **Site design:** the CompassionSTL styles live in `src/app/globals.css` (ported from the charity's original stylesheet)

Always verify hours, phone numbers, and eligibility directly with each organization before publishing changes. For emergencies, call 911.

## Development

```bash
pnpm install        # install dependencies
pnpm run dev        # local dev server
pnpm run format     # prettier
pnpm run lint       # eslint
pnpm run check:drift # FFC best-practice checks (kebab-case routes, secrets, CSP sync)
pnpm test           # unit tests (jest)
pnpm run build      # static export to ./out
pnpm run test:e2e   # Playwright end-to-end tests
```

The site is a static Next.js (App Router) export deployed to GitHub Pages via `.github/workflows/deploy.yml`.

## Hosting

This website is hosted and maintained at no cost to the charity by [Free For Charity](https://freeforcharity.org), a 501(c)(3) nonprofit that provides free websites and domain management for nonprofit organizations. Security reports: see [SECURITY.md](./SECURITY.md) and `/.well-known/security.txt`.

## License

See [LICENSE](./LICENSE).
