import React from 'react'
import { render, screen } from '@testing-library/react'
import HowToUse from '../../../src/components/home-page/HowToUse'

describe('HowToUse', () => {
  it('renders the section heading and anchor id', () => {
    const { container } = render(<HowToUse />)
    expect(screen.getByRole('heading', { name: /How to Use This Site/i })).toBeInTheDocument()
    expect(container.querySelector('#how-to-use')).not.toBeNull()
  })

  it('links to the main directory pages', () => {
    render(<HowToUse />)
    expect(screen.getByRole('link', { name: /All Resources/i })).toHaveAttribute(
      'href',
      '/resources'
    )
    expect(screen.getByRole('link', { name: /Social Worker/i })).toHaveAttribute(
      'href',
      '/social-workers'
    )
    expect(screen.getByRole('link', { name: /Education & Career Planning/i })).toHaveAttribute(
      'href',
      '/education-career'
    )
  })
})
