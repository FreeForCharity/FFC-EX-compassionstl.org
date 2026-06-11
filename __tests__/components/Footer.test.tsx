import React from 'react'
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import Footer from '../../src/components/footer'

// Extend Jest matchers
expect.extend(toHaveNoViolations)

// The footer line is chosen per pathname, matching the source site.
const mockUsePathname = jest.fn(() => '/')
jest.mock('next/navigation', () => ({
  usePathname: () => mockUsePathname(),
}))

describe('Footer component', () => {
  beforeEach(() => {
    mockUsePathname.mockReturnValue('/')
  })

  it('should render the footer', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('shows the homepage line with the current year and 911 notice', () => {
    render(<Footer />)
    const currentYear = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`© ${currentYear}`))).toBeInTheDocument()
    expect(screen.getByText(/Connecting neighbors with care/)).toBeInTheDocument()
    expect(screen.getByText(/For emergencies, call 911\./)).toBeInTheDocument()
  })

  it.each([
    ['/resources', /Resources compiled from community agencies/],
    ['/social-workers', /Building a network of care/],
    ['/education-career', /Empowering your future/],
    ['/disclaimer', /Use information wisely/],
  ])('shows the %s page line', (path, expected) => {
    mockUsePathname.mockReturnValue(path)
    render(<Footer />)
    expect(screen.getByText(expected)).toBeInTheDocument()
  })

  it('falls back to the homepage line on other routes', () => {
    mockUsePathname.mockReturnValue('/privacy-policy')
    render(<Footer />)
    expect(screen.getByText(/Connecting neighbors with care/)).toBeInTheDocument()
  })

  it('should not have accessibility violations', async () => {
    const { container } = render(<Footer />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
