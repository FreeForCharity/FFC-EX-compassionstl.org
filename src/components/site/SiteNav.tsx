import React from 'react'
import Link from 'next/link'

const links = [
  { label: 'Home', href: '/' },
  { label: 'All Resources', href: '/resources' },
  { label: 'Social Workers', href: '/social-workers' },
  { label: 'Education & Career', href: '/education-career' },
  { label: 'Disclaimer', href: '/disclaimer' },
]

/** Sticky blue navigation bar, matching the source site's <nav>. */
export default function SiteNav() {
  return (
    <nav className="cstl-nav">
      {links.map((link) => (
        <Link key={link.href} href={link.href}>
          {link.label}
        </Link>
      ))}
    </nav>
  )
}
