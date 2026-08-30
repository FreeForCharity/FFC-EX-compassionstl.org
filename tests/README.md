# E2E Test Configuration Guide

## Overview

This directory contains the end-to-end (E2E) tests that validate the CompassionSTL website using Playwright. Content-specific expectations live in a single configuration file, `tests/test.config.ts`, so content edits only require updating that file — not the test logic.

## Quick Start

### Running Tests

```bash
# Build the site first
pnpm run build

# Run tests
pnpm run test:e2e

# Run tests with UI (interactive)
pnpm run test:e2e:ui

# Run tests in headed mode (see browser)
pnpm run test:e2e:headed
```

## Test Configuration

Edit `tests/test.config.ts` when site content changes. Each section controls one spec:

#### Branding & Navigation (logo.spec.ts)

- `branding.siteName`: Site name shown in the homepage hero h1 and interior page headers
- `branding.heroSubtitle`: Hero tagline below the title
- `branding.navLinks`: Nav link labels in display order

#### Copyright Notice (copyright.spec.ts)

- `copyright.text`: Site name expected in the footer copyright line
- `copyright.searchText`: Text used to locate the copyright element (e.g., 'Connecting neighbors with care')

#### Google Tag Manager (google-tag-manager.spec.ts)

- `googleTagManager.id`: The GTM container ID (e.g., 'GTM-XXXXXX')

#### Cookie Consent (cookie-consent.spec.ts)

- `cookieConsent.bannerHeading`: Cookie banner heading
- `cookieConsent.modalHeading`: Preferences modal heading
- `cookieConsent.buttons.*`: Button text for all cookie consent buttons

## Test Files

### Content-Specific Tests (Use Configuration)

These tests use values from `test.config.ts`:

- **`logo.spec.ts`** - Hero branding and nav links on the homepage and interior pages
- **`copyright.spec.ts`** - Footer copyright notice with the current year
- **`google-tag-manager.spec.ts`** - GTM integration (waits for the `lazyOnload` script before asserting)
- **`cookie-consent.spec.ts`** - Cookie consent banner and preferences

### Guardrail Tests

- **`axe.spec.ts`** - Runs `@axe-core/playwright` against the homepage and fails on NEW serious/critical WCAG 2.x A/AA violations. Pre-existing baseline violations are explicitly allowlisted at the top of the spec; the allowlist is intended to shrink over time as accessibility issues are fixed in dedicated PRs. The spec exists to catch regressions, not to score a11y comprehensively.
- **`head-meta.spec.ts`** - Pins the head metadata contract (CSP, OG, manifest link, robots, sitemap, security.txt).
- **`skip-to-content.spec.ts`** - WCAG 2.4.1: the skip link is the first focusable element and targets `#main-content`.

## Troubleshooting

### Tests Fail After a Content Change

1. **Check Configuration**: Verify all values in `test.config.ts` match the page content exactly
2. **Special Characters**: Make sure special characters in strings are properly escaped
3. **Case Sensitivity**: Text matching is case-sensitive
4. **Whitespace**: Extra spaces can cause failures

### Getting Help

If tests continue to fail after updating the configuration:

1. Run tests with UI to see what's happening: `pnpm run test:e2e:ui`
2. Check the Playwright HTML report: `pnpm exec playwright show-report`
3. Review the test file to understand what it's checking
4. Verify your page content matches the test expectations

## Adding New Tests

1. Create a new test file: `tests/your-feature.spec.ts`
2. Import the test config: `import { testConfig } from './test.config'`
3. Add configuration for your feature to `test.config.ts`
4. Write tests using the configuration values

## Best Practices

1. **Always update test.config.ts first** before modifying test files
2. **Run tests after content changes** to ensure everything works
3. **Keep configuration values exact** - they must match page content exactly
4. **Test locally before pushing** to catch issues early

## Further Reading

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Writing Tests](https://playwright.dev/docs/writing-tests)
- [Test Configuration](https://playwright.dev/docs/test-configuration)
- [Best Practices](https://playwright.dev/docs/best-practices)
