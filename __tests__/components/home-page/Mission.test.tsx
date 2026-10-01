import React from 'react'
import { render, screen } from '@testing-library/react'
import Mission from '../../../src/components/home-page/Mission'

describe('Mission', () => {
  it('renders the section heading', () => {
    render(<Mission />)
    expect(
      screen.getByRole('heading', {
        name: /What is CompassionSTL\?/i,
      })
    ).toBeInTheDocument()
  })

  it('mounts under the #mission section landmark id', () => {
    const { container } = render(<Mission />)
    expect(container.querySelector('#mission')).not.toBeNull()
  })

  it('renders the list of things visitors can do', () => {
    render(<Mission />)
    expect(screen.getByText(/With CompassionSTL you can:/i)).toBeInTheDocument()
    expect(
      screen.getByText(/Find food pantries, free meals, and SNAP application help/i)
    ).toBeInTheDocument()
  })
})
