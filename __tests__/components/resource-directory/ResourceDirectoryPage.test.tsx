import React from 'react'
import { render, screen } from '@testing-library/react'
import ResourceDirectoryPage from '../../../src/components/resource-directory/ResourceDirectoryPage'
import type { ResourceSection } from '../../../src/data/resource-types'

const sections: ResourceSection[] = [
  {
    id: 'food',
    emoji: '🍲',
    title: 'Food Assistance',
    groups: [{ items: [{ label: 'Pantry', links: [{ text: 'site', href: 'https://x.org/' }] }] }],
  },
  {
    id: 'housing',
    title: 'Housing & Shelter',
    groups: [{ items: [{ label: 'Shelter' }] }],
  },
]

describe('ResourceDirectoryPage', () => {
  it('renders the page header with the given tagline', () => {
    render(<ResourceDirectoryPage tagline="My Page Tagline" sections={sections} />)
    expect(screen.getByRole('heading', { level: 1, name: 'CompassionSTL' })).toBeInTheDocument()
    expect(screen.getByText('My Page Tagline')).toBeInTheDocument()
  })

  it('renders one card per section with its anchor id', () => {
    const { container } = render(<ResourceDirectoryPage tagline="t" sections={sections} />)
    expect(screen.getByRole('heading', { level: 2, name: /Food Assistance/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /Housing & Shelter/i })
    ).toBeInTheDocument()
    expect(container.querySelector('#food')).not.toBeNull()
    expect(container.querySelector('#housing')).not.toBeNull()
  })

  it('renders children after the section cards', () => {
    render(
      <ResourceDirectoryPage tagline="t" sections={sections}>
        <p>Extra footer note</p>
      </ResourceDirectoryPage>
    )
    expect(screen.getByText('Extra footer note')).toBeInTheDocument()
  })
})
