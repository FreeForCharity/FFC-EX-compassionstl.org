import { test, expect } from '@playwright/test'
import { testConfig } from './test.config'

/**
 * Branding & Navigation Tests
 *
 * These tests verify that the site branding is present on the homepage:
 * the hero carries the site name and tagline, and the sticky nav links
 * to every page of the site.
 *
 * Note: Test expectations use values from test.config.ts for easy customization
 */

test.describe('Branding and navigation', () => {
  test('hero shows the site name and tagline', async ({ page }) => {
    await page.goto('/')

    const heading = page.getByRole('heading', { level: 1, name: testConfig.branding.siteName })
    await expect(heading).toBeVisible()
    await expect(page.getByText(testConfig.branding.heroSubtitle)).toBeVisible()
  })

  test('nav contains links to every page', async ({ page }) => {
    await page.goto('/')

    const nav = page.getByRole('navigation')
    for (const label of testConfig.branding.navLinks) {
      await expect(nav.getByRole('link', { name: label })).toBeVisible()
    }
  })

  test('interior pages show the site name header', async ({ page }) => {
    await page.goto('/resources')

    await expect(
      page.getByRole('heading', { level: 1, name: testConfig.branding.siteName })
    ).toBeVisible()
  })
})
