import React from 'react'
import { siteConfig, siteUrl } from '@/lib/site.config'

/**
 * Builds the schema.org WebSite JSON-LD object. The WebSite `name` /
 * `alternateName` are a primary signal search engines use for the site-name
 * knowledge result and for disambiguating similarly-named sites.
 */
export function buildWebSiteSchema(): Record<string, unknown> {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteUrl('/'),
    description: siteConfig.description,
  }

  if (siteConfig.alternateName.length > 0) {
    schema.alternateName = [...siteConfig.alternateName]
  }

  return schema
}

/** One step in a breadcrumb trail. */
export type Crumb = {
  /** Human-readable label for the step. */
  name: string
  /** Same-origin absolute path (starts with `/`). */
  path: string
}

/**
 * Builds a schema.org BreadcrumbList for a sub-page, reinforcing that the page
 * is a section of this site (helps search engines attribute it to this org).
 */
export function buildBreadcrumbSchema(crumbs: readonly Crumb[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: siteUrl(crumb.path),
    })),
  }
}

/**
 * Emits a single <script type="application/ld+json"> block for an arbitrary
 * schema.org object. Server component — no client runtime cost.
 */
export default function JsonLd({ schema }: { schema: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
