import { test, expect } from '@playwright/test'
import { testConfig } from './test.config'

/**
 * Logo Visibility Tests
 *
 * These tests verify that the site branding is present on the homepage:
 * the header carries a text logo that links back to the homepage.
 *
 * Note: Test expectations use values from test.config.ts for easy customization
 */

test.describe('Header Logo', () => {
  test('should display the text logo in the header', async ({ page }) => {
    await page.goto('/')

    const homeLink = page.locator('header').getByRole('link', {
      name: testConfig.logo.homeLinkName,
    })

    await expect(homeLink).toBeVisible()
    await expect(homeLink).toContainText(testConfig.logo.text)
  })

  test('logo should link to the homepage', async ({ page }) => {
    await page.goto('/')

    const homeLink = page.locator('header').getByRole('link', {
      name: testConfig.logo.homeLinkName,
    })

    await expect(homeLink).toHaveAttribute('href', '/')
  })
})
