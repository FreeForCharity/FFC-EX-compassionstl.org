import React from 'react'
import { render, screen } from '@testing-library/react'
import PageHeader from '../../../src/components/site/PageHeader'

describe('PageHeader', () => {
  it('renders the site name as the level-1 heading', () => {
    render(<PageHeader tagline="Some Tagline" />)
    expect(screen.getByRole('heading', { level: 1, name: 'CompassionSTL' })).toBeInTheDocument()
  })

  it('renders the per-page tagline', () => {
    render(<PageHeader tagline="Complete Community Resource Directory" />)
    expect(screen.getByText('Complete Community Resource Directory')).toBeInTheDocument()
  })
})
