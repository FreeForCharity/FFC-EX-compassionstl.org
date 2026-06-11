'use client'

import React from 'react'
import { usePathname } from 'next/navigation'

/**
 * Per-page footer lines, matching the source site: each page carries its own
 * one-line footer. Pages without a specific line (policy pages, 404) fall
 * back to the homepage line.
 */
function footerContent(pathname: string | null, year: number): React.ReactNode {
  switch (pathname) {
    case '/resources':
      return (
        <>
          CompassionSTL – Resources compiled from community agencies. Always call ahead to confirm
          services.
        </>
      )
    case '/social-workers':
      return <>CompassionSTL – Building a network of care for families and individuals.</>
    case '/education-career':
      return <>CompassionSTL – Empowering your future through education and career resources.</>
    case '/disclaimer':
      return <>CompassionSTL – Use information wisely.</>
    default:
      return (
        <>
          CompassionSTL © {year} – Connecting neighbors with care.
          <br />
          For emergencies, call 911.
        </>
      )
  }
}

const Footer: React.FC = () => {
  const pathname = usePathname()
  const currentYear = React.useMemo(() => new Date().getFullYear(), [])
  return (
    <footer className="cstl-footer">
      <p>{footerContent(pathname, currentYear)}</p>
      <p className="cstl-footer-credits">
        Website hosted by{' '}
        <a href="https://freeforcharity.org" target="_blank" rel="noopener noreferrer">
          Free For Charity
        </a>{' '}
        |{' '}
        <a
          href="https://github.com/FreeForCharity/FFC-EX-compassionstl.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source code on GitHub
        </a>
      </p>
    </footer>
  )
}

export default Footer
