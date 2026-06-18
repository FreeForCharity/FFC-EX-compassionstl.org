import React from 'react'

/**
 * "Emergency & Quick Help" card, matching the source site's third card.
 * Entries are kept in alphabetical order per the site owner's request.
 */
const EmergencyHelp = () => {
  return (
    <div className="card" id="emergency">
      <h2>
        <span aria-hidden="true">📞 </span>Emergency &amp; Quick Help
      </h2>
      <ul className="list-bullet">
        <li>
          <strong>Catholic Charities of St. Louis</strong> –{' '}
          <a className="phone" href="tel:3143675500">
            314-367-5500
          </a>{' '}
          |{' '}
          <a href="https://ccstl.org" target="_blank" rel="noopener noreferrer">
            ccstl.org
          </a>
        </li>
        <li>
          <strong>Find Help (search engine)</strong> –{' '}
          <a href="https://www.findhelp.org/" target="_blank" rel="noopener noreferrer">
            findhelp.org
          </a>
        </li>
        <li>
          <strong>Mental Health Centers &amp; Crisis Hotlines</strong> –{' '}
          <a
            href="https://stlouiscountymo.gov/st-louis-county-departments/public-health/substance-use-resources/general-resources/mental-health-centers-and-crisis-lifelines/"
            target="_blank"
            rel="noopener noreferrer"
          >
            StL Region
          </a>
        </li>
        <li>
          <strong>Mental Health (Mercy)</strong> –{' '}
          <a
            href="https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/mental-health-resources-in-st-louis.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mercy PDF
          </a>
        </li>
        <li>
          <strong>Mercy Neighborhood Ministry</strong> –{' '}
          <a
            href="https://www.mercy.net/practice/mercy-neighborhood-ministry/mercy-neighborhood-ministry-resources/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resource Lists
          </a>
        </li>
        <li>
          <strong>St. Vincent de Paul Society</strong> –{' '}
          <a className="phone" href="tel:3148816000">
            314-881-6000
          </a>{' '}
          |{' '}
          <a href="https://svdpstlouis.org" target="_blank" rel="noopener noreferrer">
            svdpstlouis.org
          </a>{' '}
          |{' '}
          <a href="https://svdpstlouis.org/need-help/" target="_blank" rel="noopener noreferrer">
            Need Help?
          </a>
        </li>
        <li>
          <strong>Suicide &amp; Crisis Lifeline</strong> – Dial{' '}
          <a className="phone" href="tel:988">
            988
          </a>
        </li>
        <li>
          <strong>United Way</strong> – Dial{' '}
          <a className="phone" href="tel:211">
            2-1-1
          </a>{' '}
          (24/7) |{' '}
          <a href="https://search.211helps.org/" target="_blank" rel="noopener noreferrer">
            How can we help?
          </a>
        </li>
        <li>
          <strong>Veterans Crisis Line</strong> – Dial{' '}
          <a className="phone" href="tel:988">
            988
          </a>{' '}
          then press 1
        </li>
      </ul>
    </div>
  )
}

export default EmergencyHelp
