/**
 * Central site configuration for Free For Charity template sites.
 *
 * EDIT THIS FILE to customize a new FFC-supported nonprofit site.
 * Most values that vary between sites flow from here so individual
 * pages, metadata, sitemap, robots, and security headers stay in sync.
 *
 * After editing, run `npm run check:drift` to verify nothing here drifts
 * away from FFC best practices (placeholder URLs left in, etc.).
 */

export type SiteSocialLink = {
  /** Display label, also used for aria-label. */
  label: string
  /** Absolute https URL. Empty string disables the link. */
  href: string
}

export type SiteConfig = {
  /** Display name of the charity (used in titles, OG/Twitter cards). */
  name: string
  /**
   * Other names the org is known by, emitted as schema.org `alternateName`.
   * Helps search engines map common variants to this entity and disambiguate
   * it from similarly-named organizations.
   */
  alternateName: readonly string[]
  /**
   * Primary geographic area served, emitted as schema.org `areaServed`.
   * Disambiguates this org from same-named orgs in other regions.
   */
  areaServed: string
  /** Short tagline used in the default title template. */
  tagline: string
  /** Plain-language description used for the <meta description> tag. */
  description: string
  /**
   * Shorter description tuned for OG/Twitter social card previews.
   * Falls back to `description` if empty. Aim for <= 200 chars and avoid
   * em-dashes — some card renderers break on them.
   */
  shortDescription: string
  /**
   * Canonical production URL with no trailing slash.
   * Used by metadataBase, sitemap, and robots. The drift check verifies that
   * this is updated whenever public/CNAME points to a custom domain, and
   * that public/.well-known/security.txt no longer carries the placeholder.
   */
  url: string
  /**
   * Twitter / X handle including the leading @ — e.g. `@freeforcharity`.
   * Empty string omits the twitter:site meta entirely. Handles without `@`
   * are auto-prefixed so a typo doesn't silently break attribution.
   */
  twitterHandle: string
  /**
   * Primary contact email. Used by your own pages; security.txt carries
   * its own `Contact:` line and is not auto-derived from this value.
   * Keep them in sync manually when you change either.
   */
  contactEmail: string
  /** SEO keywords used in the root layout metadata. */
  keywords: readonly string[]
  /** Default theme color (used by manifest and meta tag). */
  themeColor: string
  /** Where the vulnerability disclosure policy lives on this site. */
  vulnerabilityDisclosurePath: string
  /** Social links displayed in the footer. */
  social: readonly SiteSocialLink[]
}

export const siteConfig: SiteConfig = {
  name: 'CompassionSTL',
  alternateName: ['Compassion STL', 'CompassionSTL.org'],
  areaServed: 'St. Louis, Missouri',
  tagline: 'St. Louis Community Resources',
  description:
    'CompassionSTL is a free, all-in-one directory of community resources in St. Louis and Missouri — verified links and phone numbers for food, housing, medical care, mental health, job training, and more.',
  shortDescription:
    'Connecting you to help, hope, and a brighter future in St. Louis. A free directory of community resources in St. Louis and Missouri.',
  url: 'https://compassionstl.org',
  twitterHandle: '',
  contactEmail: 'security@freeforcharity.org',
  keywords: [
    'St. Louis',
    'Missouri',
    'community resources',
    'food pantry',
    'housing assistance',
    'mental health',
    'job training',
    'social workers',
    'education',
  ],
  themeColor: '#ffffff',
  vulnerabilityDisclosurePath: '/vulnerability-disclosure-policy',
  social: [],
}

/**
 * Compose a fully-qualified URL on this site.
 *
 * The path is required to be a same-origin absolute path (starting with `/`).
 * This rules out protocol-relative inputs like `//evil.com` that could leak
 * into a future redirect or canonical link.
 */
export function siteUrl(path = '/'): string {
  if (typeof path !== 'string' || !path.startsWith('/') || path.startsWith('//')) {
    throw new TypeError(
      `siteUrl: path must be a same-origin absolute path starting with a single "/" (got: ${JSON.stringify(path)})`
    )
  }
  const base = siteConfig.url.replace(/\/$/, '')
  return `${base}${path}`
}

/**
 * Returns the Twitter handle with a guaranteed leading `@`.
 * Returns `undefined` (so the meta tag is omitted) if the handle is empty
 * or is just an `@` with no body — emitting a bare `@` would advertise a
 * malformed handle to Twitter's scraper.
 */
export function twitterSite(): string | undefined {
  const raw = siteConfig.twitterHandle.trim().replace(/^@+/, '')
  if (!raw) return undefined
  return `@${raw}`
}

/** Returns the OG/Twitter card description, falling back to the longer page description. */
export function cardDescription(): string {
  return siteConfig.shortDescription.trim() || siteConfig.description
}
