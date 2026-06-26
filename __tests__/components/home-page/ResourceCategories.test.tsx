import React from 'react'
import { render, screen } from '@testing-library/react'
import ResourceCategories from '../../../src/components/home-page/ResourceCategories'

describe('ResourceCategories', () => {
  it('renders the section heading and anchor id', () => {
    const { container } = render(<ResourceCategories />)
    expect(
      screen.getByRole('heading', { name: /Need Help Right Now\? Choose a Category/i })
    ).toBeInTheDocument()
    expect(container.querySelector('#categories')).not.toBeNull()
  })

  it('links category tiles to their resource anchors and dedicated pages', () => {
    render(<ResourceCategories />)
    expect(screen.getByRole('link', { name: /Food/i })).toHaveAttribute('href', '/resources#food')
    expect(screen.getByRole('link', { name: /Mental Health/i })).toHaveAttribute(
      'href',
      '/resources#mental-health'
    )
    expect(screen.getByRole('link', { name: /Social Workers/i })).toHaveAttribute(
      'href',
      '/social-workers'
    )
    expect(screen.getByRole('link', { name: /Education & Career Planning/i })).toHaveAttribute(
      'href',
      '/education-career'
    )
  })

  it('renders a tile for every category', () => {
    const { container } = render(<ResourceCategories />)
    expect(container.querySelectorAll('.quick-link').length).toBe(21)
  })
})
