import React from 'react'
import Link from 'next/link'

/** "How to Use This Site" card, matching the source site's fourth card. */
const HowToUse = () => {
  return (
    <div className="card" id="how-to-use">
      <h2>
        <span aria-hidden="true">🗺️ </span>How to Use This Site
      </h2>
      <p>
        1. <strong>Click a category</strong> above to jump directly to the services you need.
        <br />
        2. Visit the <Link href="/resources">All Resources</Link> page for a complete, categorized
        list.
        <br />
        3. Contact a <Link href="/social-workers">Social Worker</Link> at St. Louis County Library
        for free one-on-one help.
        <br />
        4. Planning for college or a new career? Explore the{' '}
        <Link href="/education-career">Education &amp; Career Planning</Link> section.
        <br />
        <strong>Always verify</strong> hours and eligibility directly with the organization.
      </p>
      <p style={{ marginTop: '1rem' }}>
        <em>We strive to keep this information accurate. For emergencies, call 911.</em>
      </p>
    </div>
  )
}

export default HowToUse
