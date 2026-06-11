import React from 'react'
import { render, screen } from '@testing-library/react'
import Hero from '../../../src/components/home-page/Hero'

describe('Hero', () => {
  it('renders the CompassionSTL headline', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1, name: /CompassionSTL/i })).toBeInTheDocument()
  })

  it('renders the tagline', () => {
    render(<Hero />)
    expect(
      screen.getByText(/Connecting you to help, hope, and a brighter future in St\. Louis/i)
    ).toBeInTheDocument()
  })

  it('links to the three main sections of the site', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /Find Resources/i })).toHaveAttribute(
      'href',
      '/resources'
    )
    expect(screen.getByRole('link', { name: /Social Workers/i })).toHaveAttribute(
      'href',
      '/social-workers'
    )
    expect(screen.getByRole('link', { name: /Education & Career/i })).toHaveAttribute(
      'href',
      '/education-career'
    )
  })

  it('mounts under the #hero section landmark id', () => {
    const { container } = render(<Hero />)
    expect(container.querySelector('#hero')).not.toBeNull()
  })
})
