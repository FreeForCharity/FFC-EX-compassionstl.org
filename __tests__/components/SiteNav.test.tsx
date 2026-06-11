import React from 'react'
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import SiteNav from '../../src/components/site/SiteNav'

expect.extend(toHaveNoViolations)

describe('SiteNav component', () => {
  it('renders the navigation landmark', () => {
    render(<SiteNav />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('links to all five pages of the site', () => {
    render(<SiteNav />)
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/')
    expect(screen.getByRole('link', { name: 'All Resources' })).toHaveAttribute(
      'href',
      '/resources'
    )
    expect(screen.getByRole('link', { name: 'Social Workers' })).toHaveAttribute(
      'href',
      '/social-workers'
    )
    expect(screen.getByRole('link', { name: 'Education & Career' })).toHaveAttribute(
      'href',
      '/education-career'
    )
    expect(screen.getByRole('link', { name: 'Disclaimer' })).toHaveAttribute('href', '/disclaimer')
  })

  it('should not have accessibility violations', async () => {
    const { container } = render(<SiteNav />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
