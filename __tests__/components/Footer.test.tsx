import React from 'react'
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import Footer from '../../src/components/footer'

// Extend Jest matchers
expect.extend(toHaveNoViolations)

describe('Footer component', () => {
  it('should render the footer', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
  })

  it('should display the CompassionSTL about section', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'CompassionSTL' })).toBeInTheDocument()
    expect(screen.getByText(/For emergencies, call 911\./i)).toBeInTheDocument()
  })

  it('should display Quick Links section', () => {
    render(<Footer />)
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'All Resources' })).toHaveAttribute(
      'href',
      '/resources'
    )
  })

  it('should display the Get Help Now section with crisis lines', () => {
    render(<Footer />)
    expect(screen.getByText('Get Help Now')).toBeInTheDocument()
    expect(screen.getByText('United Way 211')).toBeInTheDocument()
    expect(screen.getByText('Suicide & Crisis Lifeline')).toBeInTheDocument()
  })

  it('should display the policy links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Privacy Policy' })).toHaveAttribute(
      'href',
      '/privacy-policy'
    )
    expect(screen.getByRole('link', { name: 'Vulnerability Disclosure Policy' })).toHaveAttribute(
      'href',
      '/vulnerability-disclosure-policy'
    )
  })

  it('should display the current year in copyright', () => {
    render(<Footer />)
    const currentYear = new Date().getFullYear()
    expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument()
  })

  it('should have dialable tel: links for help lines', () => {
    render(<Footer />)
    const links = screen.getAllByRole('link')
    const telLinks = links.filter((link) => link.getAttribute('href')?.startsWith('tel:'))
    expect(telLinks.length).toBeGreaterThanOrEqual(3)
  })

  it('should not have accessibility violations', async () => {
    const { container } = render(<Footer />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
