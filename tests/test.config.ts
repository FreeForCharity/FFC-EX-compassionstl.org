/**
 * Test Configuration for Template Customization
 *
 * This file contains all content-specific values used in E2E tests.
 * When customizing this template for a new organization, update these
 * values to match your content instead of modifying individual test files.
 *
 * This makes it easy to:
 * 1. Identify what needs to change when using the template
 * 2. Keep tests working with customized content
 * 3. Maintain a single source of truth for test expectations
 */

export const testConfig = {
  /**
   * Copyright Configuration
   * Used in: tests/copyright.spec.ts
   */
  copyright: {
    text: 'CompassionSTL',
    searchText: 'Connecting neighbors with care',
  },

  /**
   * Google Tag Manager Configuration
   * Used in: tests/google-tag-manager.spec.ts
   */
  googleTagManager: {
    id: 'GTM-TQ5H8HPR',
  },

  /**
   * Branding Configuration
   * Used in: tests/logo.spec.ts
   */
  branding: {
    /** Site name shown in the homepage hero h1. */
    siteName: 'CompassionSTL',
    /** Hero tagline below the title. */
    heroSubtitle: 'Connecting you to help, hope, and a brighter future in St. Louis',
    /** Nav links in display order. */
    navLinks: ['Home', 'All Resources', 'Social Workers', 'Education & Career', 'Disclaimer'],
  },

  /**
   * Cookie Consent Configuration
   * Used in: tests/cookie-consent.spec.ts
   */
  cookieConsent: {
    bannerHeading: 'We Value Your Privacy',
    modalHeading: 'Cookie Preferences',
    buttons: {
      acceptAll: 'Accept All',
      declineAll: 'Decline All',
      customize: 'Customize',
      savePreferences: 'Save Preferences',
      cancel: 'Cancel',
    },
  },
}
