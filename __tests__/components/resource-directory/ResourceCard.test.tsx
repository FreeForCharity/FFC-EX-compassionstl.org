import React from 'react'
import { render, screen } from '@testing-library/react'
import ResourceCard from '../../../src/components/resource-directory/ResourceCard'
import type { ResourceSection } from '../../../src/data/resource-types'

const section: ResourceSection = {
  id: 'sample',
  emoji: '🍲',
  title: 'Sample Section',
  intro: ['Intro with a **bold** word.'],
  groups: [
    {
      heading: 'Group A',
      items: [
        {
          label: 'External Org',
          phone: '314-367-5500',
          links: [{ text: 'example.org', href: 'https://example.org/' }],
          text: '– a trailing description',
        },
        {
          label: 'Internal Link Org',
          links: [{ text: 'our guide', href: '/social-workers' }],
        },
      ],
    },
  ],
}

describe('ResourceCard', () => {
  it('renders the section heading and anchor id', () => {
    const { container } = render(<ResourceCard section={section} />)
    expect(screen.getByRole('heading', { level: 2, name: /Sample Section/i })).toBeInTheDocument()
    expect(container.querySelector('#sample')).not.toBeNull()
  })

  it('renders the group subheading and intro bold span', () => {
    render(<ResourceCard section={section} />)
    expect(screen.getByRole('heading', { level: 3, name: /Group A/i })).toBeInTheDocument()
    expect(screen.getByText('bold').tagName).toBe('STRONG')
  })

  it('renders a phone as a tel: link', () => {
    render(<ResourceCard section={section} />)
    expect(screen.getByRole('link', { name: '314-367-5500' })).toHaveAttribute(
      'href',
      'tel:3143675500'
    )
  })

  it('opens external links in a new tab with rel protection', () => {
    render(<ResourceCard section={section} />)
    const ext = screen.getByRole('link', { name: 'example.org' })
    expect(ext).toHaveAttribute('href', 'https://example.org/')
    expect(ext).toHaveAttribute('target', '_blank')
    expect(ext).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders site-relative links without target=_blank (basePath-safe)', () => {
    render(<ResourceCard section={section} />)
    const internal = screen.getByRole('link', { name: 'our guide' })
    expect(internal).toHaveAttribute('href', '/social-workers')
    expect(internal).not.toHaveAttribute('target')
  })
})
