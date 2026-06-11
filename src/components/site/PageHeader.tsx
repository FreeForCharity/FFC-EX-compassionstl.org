import React from 'react'

/**
 * Plain page header used on interior pages, matching the source site's
 * <header> block: the site name and a per-page tagline.
 */
export default function PageHeader({ tagline }: { tagline: string }) {
  return (
    <header className="cstl-page-header">
      <h1>CompassionSTL</h1>
      <p className="tagline">{tagline}</p>
    </header>
  )
}
