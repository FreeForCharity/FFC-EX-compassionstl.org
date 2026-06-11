import React from 'react'

/** "Emergency & Quick Help" card, matching the source site's third card. */
const EmergencyHelp = () => {
  return (
    <div className="card" id="emergency">
      <h2>
        <span aria-hidden="true">📞 </span>Emergency &amp; Quick Help
      </h2>
      <ul className="list-bullet">
        <li>
          <strong>United Way 211</strong> – Dial{' '}
          <a className="phone" href="tel:211">
            211
          </a>{' '}
          (24/7) |{' '}
          <a href="https://www.211.org" target="_blank" rel="noopener noreferrer">
            211.org
          </a>
        </li>
        <li>
          <strong>Suicide &amp; Crisis Lifeline</strong> – Dial{' '}
          <a className="phone" href="tel:988">
            988
          </a>
        </li>
        <li>
          <strong>Veterans Crisis Line</strong> – Dial{' '}
          <a className="phone" href="tel:988">
            988
          </a>{' '}
          then press 1
        </li>
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
          <strong>St. Vincent de Paul Society</strong> –{' '}
          <a className="phone" href="tel:3148816000">
            314-881-6000
          </a>{' '}
          |{' '}
          <a href="https://svdpstlouis.org" target="_blank" rel="noopener noreferrer">
            svdpstlouis.org
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
          <strong>Find Help (search engine)</strong> –{' '}
          <a href="https://www.findhelp.org/" target="_blank" rel="noopener noreferrer">
            findhelp.org
          </a>
        </li>
      </ul>
    </div>
  )
}

export default EmergencyHelp
