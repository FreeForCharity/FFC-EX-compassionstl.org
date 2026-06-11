import React from 'react'

type EmergencyEntry = {
  name: string
  detail: React.ReactNode
}

const linkClass = 'text-[#7FD0F2] underline underline-offset-2 hover:text-white transition-colors'
const phoneClass = 'whitespace-nowrap font-[700]'

const entries: EmergencyEntry[] = [
  {
    name: 'United Way 211',
    detail: (
      <>
        Dial{' '}
        <a href="tel:211" className={phoneClass}>
          211
        </a>{' '}
        (24/7) |{' '}
        <a
          href="https://www.211.org"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          211.org
        </a>
      </>
    ),
  },
  {
    name: 'Suicide & Crisis Lifeline',
    detail: (
      <>
        Dial{' '}
        <a href="tel:988" className={phoneClass}>
          988
        </a>
      </>
    ),
  },
  {
    name: 'Veterans Crisis Line',
    detail: (
      <>
        Dial{' '}
        <a href="tel:988" className={phoneClass}>
          988
        </a>{' '}
        then press 1
      </>
    ),
  },
  {
    name: 'Catholic Charities of St. Louis',
    detail: (
      <>
        <a href="tel:3143675500" className={phoneClass}>
          314-367-5500
        </a>{' '}
        |{' '}
        <a href="https://ccstl.org" target="_blank" rel="noopener noreferrer" className={linkClass}>
          ccstl.org
        </a>
      </>
    ),
  },
  {
    name: 'St. Vincent de Paul Society',
    detail: (
      <>
        <a href="tel:3148816000" className={phoneClass}>
          314-881-6000
        </a>{' '}
        |{' '}
        <a
          href="https://svdpstlouis.org"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          svdpstlouis.org
        </a>
      </>
    ),
  },
  {
    name: 'Mercy Neighborhood Ministry',
    detail: (
      <a
        href="https://www.mercy.net/practice/mercy-neighborhood-ministry/mercy-neighborhood-ministry-resources/"
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        Resource Lists
      </a>
    ),
  },
  {
    name: 'Find Help (search engine)',
    detail: (
      <a
        href="https://www.findhelp.org/"
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        findhelp.org
      </a>
    ),
  },
]

const EmergencyHelp = () => {
  return (
    <div id="emergency" className="bg-[#2A6682] py-[60px] text-white">
      <div className="w-[90%] mx-auto max-w-[900px]">
        <h1
          className="font-[400] text-[40px] lg:text-[48px] leading-[110%] tracking-[0] text-center mb-[40px]"
          id="faustina-font"
        >
          Emergency &amp; Quick Help
        </h1>
        <ul className="list-disc space-y-3 pl-6 text-[19px] leading-[160%]" id="lato-font">
          {entries.map((entry) => (
            <li key={entry.name}>
              <strong className="font-[700]">{entry.name}</strong> – {entry.detail}
            </li>
          ))}
        </ul>
        <p className="mt-[30px] text-center text-[19px] font-[600]" id="lato-font">
          For emergencies, call 911.
        </p>
      </div>
    </div>
  )
}

export default EmergencyHelp
