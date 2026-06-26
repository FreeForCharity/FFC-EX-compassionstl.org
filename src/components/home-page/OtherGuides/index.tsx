import React from 'react'

/**
 * "More St. Louis Resource Guides" + a disambiguation note.
 *
 * Positions CompassionSTL as a curated quick-start that complements (rather
 * than competes with) the established St. Louis directories, and points
 * anyone who actually wanted the similarly-named home-care company at
 * compassionstl.com to the right place. See issue #29.
 */
const OtherGuides = () => {
  return (
    <>
      <div className="card" id="more-guides">
        <h2>
          <span aria-hidden="true">🧭 </span>More St. Louis Resource Guides
        </h2>
        <p>
          CompassionSTL is a curated, quick-start directory. For the full, searchable lists — or a
          live person to talk to — these trusted St. Louis guides go even deeper, and we recommend
          them alongside this site:
        </p>
        <ul className="list-bullet">
          <li>
            <strong>United Way 2-1-1</strong> – Dial{' '}
            <a className="phone" href="tel:211">
              2-1-1
            </a>{' '}
            (free, 24/7) or search{' '}
            <a href="https://search.211helps.org/" target="_blank" rel="noopener noreferrer">
              211helps.org
            </a>{' '}
            – a database of 170+ agencies across the St. Louis region.
          </li>
          <li>
            <strong>Start Here STL</strong> –{' '}
            <a href="https://www.startherestl.org/" target="_blank" rel="noopener noreferrer">
              startherestl.org
            </a>{' '}
            – the St. Louis Area Resource Directory, also available as a printable booklet.
          </li>
          <li>
            <strong>St. Louis County Library – Community Resources</strong> –{' '}
            <a
              href="https://slcl.libguides.com/c.php?g=1288891"
              target="_blank"
              rel="noopener noreferrer"
            >
              slcl.libguides.com
            </a>{' '}
            – librarian-curated guides, plus the free{' '}
            <a href="/social-workers">Book a Social Worker</a> service.
          </li>
          <li>
            <strong>City of St. Louis – Help Resources</strong> –{' '}
            <a
              href="https://www.stlouis-mo.gov/live-work/community/help/index.cfm"
              target="_blank"
              rel="noopener noreferrer"
            >
              stlouis-mo.gov
            </a>{' '}
            – official city housing, food, and emergency help pages.
          </li>
          <li>
            <strong>St. Louis County – Human Services</strong> –{' '}
            <a
              href="https://stlouiscountymo.gov/st-louis-county-departments/human-services/"
              target="_blank"
              rel="noopener noreferrer"
            >
              stlouiscountymo.gov
            </a>{' '}
            – county programs and the community resource directory.
          </li>
          <li>
            <strong>FindHelp</strong> –{' '}
            <a href="https://www.findhelp.org/" target="_blank" rel="noopener noreferrer">
              findhelp.org
            </a>{' '}
            – search by ZIP code for free and reduced-cost programs near you.
          </li>
        </ul>
      </div>

      <div className="card" id="not-us">
        <h2>
          <span aria-hidden="true">🏠 </span>Looking for in-home senior care?
        </h2>
        <p>
          You&apos;re on <strong>CompassionSTL</strong> (<strong>compassionstl.org</strong>) — a
          free community resource directory. If you were looking for{' '}
          <strong>Compassionate Nursing Services</strong> at{' '}
          <a href="https://www.compassionstl.com/" target="_blank" rel="noopener noreferrer">
            compassionstl.com
          </a>{' '}
          (note the <strong>.com</strong>), that&apos;s a separate, unaffiliated home-care company
          offering personal, companion, dementia, and respite care for older adults in St. Louis.
        </p>
      </div>
    </>
  )
}

export default OtherGuides
