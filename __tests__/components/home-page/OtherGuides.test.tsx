import React from 'react'
import { render, screen } from '@testing-library/react'
import OtherGuides from '../../../src/components/home-page/OtherGuides'

describe('OtherGuides', () => {
  it('renders both section headings', () => {
    render(<OtherGuides />)
    expect(
      screen.getByRole('heading', { name: /More St\. Louis Resource Guides/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Looking for a different organization\?/i })
    ).toBeInTheDocument()
  })

  it('mounts under the #more-guides and #not-us section ids', () => {
    const { container } = render(<OtherGuides />)
    expect(container.querySelector('#more-guides')).not.toBeNull()
    expect(container.querySelector('#not-us')).not.toBeNull()
  })

  it('links to the major external St. Louis directories', () => {
    render(<OtherGuides />)
    expect(screen.getByRole('link', { name: /startherestl\.org/i })).toHaveAttribute(
      'href',
      'https://www.startherestl.org/'
    )
    expect(screen.getByRole('link', { name: /211helps\.org/i })).toHaveAttribute(
      'href',
      'https://search.211helps.org/'
    )
    expect(screen.getByRole('link', { name: /findhelp\.org/i })).toHaveAttribute(
      'href',
      'https://www.findhelp.org/'
    )
  })

  it('links to the Book a Social Worker page', () => {
    render(<OtherGuides />)
    expect(screen.getByRole('link', { name: /Book a Social Worker/i })).toHaveAttribute(
      'href',
      '/social-workers'
    )
  })

  it('disambiguates the similarly-named .com and .org organizations', () => {
    render(<OtherGuides />)
    expect(screen.getByRole('link', { name: /compassionstl\.com/i })).toHaveAttribute(
      'href',
      'https://www.compassionstl.com/'
    )
    expect(screen.getByRole('link', { name: /compassionate-stl\.org/i })).toHaveAttribute(
      'href',
      'https://www.compassionate-stl.org/'
    )
  })
})
