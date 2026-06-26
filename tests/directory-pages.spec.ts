import { test, expect } from '@playwright/test'
import { testConfig } from './test.config'

/**
 * Interior directory pages coverage.
 *
 * logo.spec.ts already checks the homepage and /resources. These tests close
 * the gap for the two pages that previously had zero E2E coverage:
 * /social-workers and /education-career. Each must render the site-name
 * header, its per-page tagline, and the shared sticky nav.
 */

const pages = [
  {
    path: '/social-workers',
    tagline: /Free Help from Social Workers/i,
  },
  {
    path: '/education-career',
    tagline: /Plan Your Future/i,
  },
]

for (const { path, tagline } of pages) {
  test.describe(`directory page ${path}`, () => {
    test('shows the site-name header and per-page tagline', async ({ page }) => {
      await page.goto(path)

      await expect(
        page.getByRole('heading', { level: 1, name: testConfig.branding.siteName })
      ).toBeVisible()
      await expect(page.getByText(tagline)).toBeVisible()
    })

    test('shows the shared nav with links to every page', async ({ page }) => {
      await page.goto(path)

      const nav = page.getByRole('navigation')
      for (const label of testConfig.branding.navLinks) {
        await expect(nav.getByRole('link', { name: label })).toBeVisible()
      }
    })
  })
}
