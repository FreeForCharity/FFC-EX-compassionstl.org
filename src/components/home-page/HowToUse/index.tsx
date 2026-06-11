import React from 'react'
import Link from 'next/link'

const linkClass =
  'text-[#2A6682] underline underline-offset-2 hover:text-[#F57C20] transition-colors'

const HowToUse = () => {
  return (
    <div id="how-to-use" className="py-[60px]">
      <div className="w-[90%] mx-auto max-w-[900px]">
        <h1
          className="font-[400] text-[40px] lg:text-[48px] leading-[110%] tracking-[0] text-center mb-[40px]"
          id="faustina-font"
        >
          How to Use This Site
        </h1>
        <ol className="list-decimal space-y-3 pl-6 text-[19px] leading-[160%]" id="lato-font">
          <li>
            <strong>Click a category</strong> above to jump directly to the services you need.
          </li>
          <li>
            Visit the{' '}
            <Link href="/resources" className={linkClass}>
              All Resources
            </Link>{' '}
            page for a complete, categorized list.
          </li>
          <li>
            Contact a{' '}
            <Link href="/social-workers" className={linkClass}>
              Social Worker
            </Link>{' '}
            at St. Louis County Library for free one-on-one help.
          </li>
          <li>
            Planning for college or a new career? Explore the{' '}
            <Link href="/education-career" className={linkClass}>
              Education &amp; Career
            </Link>{' '}
            section.
          </li>
        </ol>
        <p className="mt-[24px] text-[19px] leading-[160%]" id="lato-font">
          <strong>Always verify</strong> hours and eligibility directly with the organization.
        </p>
        <p className="mt-[16px] text-[19px] leading-[160%] italic" id="lato-font">
          We strive to keep this information accurate. For emergencies, call 911.
        </p>
      </div>
    </div>
  )
}

export default HowToUse
