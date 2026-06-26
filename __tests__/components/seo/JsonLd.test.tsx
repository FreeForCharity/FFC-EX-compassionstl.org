import React from 'react'
import { render } from '@testing-library/react'
import JsonLd, {
  buildWebSiteSchema,
  buildBreadcrumbSchema,
  serializeJsonLd,
} from '../../../src/components/seo/JsonLd'
import { siteConfig } from '../../../src/lib/site.config'

describe('buildWebSiteSchema', () => {
  it('builds a WebSite node with name, url, and alternateName', () => {
    const schema = buildWebSiteSchema()
    expect(schema['@context']).toBe('https://schema.org')
    expect(schema['@type']).toBe('WebSite')
    expect(schema.name).toBe(siteConfig.name)
    expect(schema.url as string).toMatch(/^https:\/\//)
    expect(schema.alternateName).toEqual([...siteConfig.alternateName])
  })
})

describe('buildBreadcrumbSchema', () => {
  it('builds an ordered BreadcrumbList with absolute item URLs', () => {
    const schema = buildBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'All Resources', path: '/resources' },
    ])
    expect(schema['@type']).toBe('BreadcrumbList')
    const items = schema.itemListElement as Array<Record<string, unknown>>
    expect(items).toHaveLength(2)
    expect(items[0]).toMatchObject({ '@type': 'ListItem', position: 1, name: 'Home' })
    expect(items[1].position).toBe(2)
    expect(items[1].item as string).toMatch(/^https:\/\/.*\/resources$/)
  })
})

describe('serializeJsonLd', () => {
  it('escapes "<" so a stray </script> cannot break out, yet stays valid JSON', () => {
    const out = serializeJsonLd({ name: 'evil </script><script>alert(1)' })
    expect(out).not.toContain('</script>')
    expect(out).toContain('\\u003c')
    expect((JSON.parse(out) as { name: string }).name).toBe('evil </script><script>alert(1)')
  })
})

describe('JsonLd', () => {
  it('renders a single ld+json script whose JSON parses', () => {
    const { container } = render(<JsonLd schema={buildWebSiteSchema()} />)
    const scripts = container.querySelectorAll('script[type="application/ld+json"]')
    expect(scripts.length).toBe(1)
    const parsed = JSON.parse(scripts[0].textContent ?? '') as Record<string, unknown>
    expect(parsed['@type']).toBe('WebSite')
  })
})
