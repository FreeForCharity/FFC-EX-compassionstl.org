import React from 'react'
import { render, screen } from '@testing-library/react'
import EmergencyHelp from '../../../src/components/home-page/EmergencyHelp'

describe('EmergencyHelp', () => {
  it('renders the section heading and anchor id', () => {
    const { container } = render(<EmergencyHelp />)
    expect(screen.getByRole('heading', { name: /Emergency & Quick Help/i })).toBeInTheDocument()
    expect(container.querySelector('#emergency')).not.toBeNull()
  })

  it('exposes the key crisis numbers as tel: links', () => {
    render(<EmergencyHelp />)
    // 988 appears for both the Suicide & Crisis Lifeline and Veterans Crisis Line.
    for (const link of screen.getAllByRole('link', { name: '988' })) {
      expect(link).toHaveAttribute('href', 'tel:988')
    }
    expect(screen.getByRole('link', { name: '2-1-1' })).toHaveAttribute('href', 'tel:211')
    expect(screen.getByRole('link', { name: '314-367-5500' })).toHaveAttribute(
      'href',
      'tel:3143675500'
    )
  })
})
