'use client'

import React from 'react'
import Link from 'next/link'
import { Phone, Link2 } from 'lucide-react'

import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import type { IconType } from 'react-icons'
import type { LucideIcon } from 'lucide-react'

import { siteConfig } from '@/lib/site.config'

// Maps a social link's label (as defined in siteConfig.social) to an icon.
// Unknown labels fall back to a generic link icon (Link2 from lucide-react)
// so a charity that adds a new social network — Bluesky, Mastodon, YouTube,
// etc. — gets a sensible placeholder instead of a misleading GitHub mark.
const socialIconByLabel: Record<string, IconType | LucideIcon> = {
  Facebook: FaFacebookF,
  'X (Twitter)': FaXTwitter,
  Twitter: FaXTwitter,
  X: FaXTwitter,
  LinkedIn: FaLinkedinIn,
  GitHub: FaGithub,
}

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'All Resources', href: '/resources' },
  { name: 'Social Workers', href: '/social-workers' },
  { name: 'Education & Career', href: '/education-career' },
  { name: 'Disclaimer', href: '/disclaimer' },
]

const policyLinks = [
  { name: 'Donation Policy', href: '/donation-policy' },
  { name: 'Free For Charity Donation Policy', href: '/free-for-charity-donation-policy' },
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Cookie Policy', href: '/cookie-policy' },
  { name: 'Terms of Service', href: '/terms-of-service' },
  { name: 'Vulnerability Disclosure Policy', href: '/vulnerability-disclosure-policy' },
  { name: 'Security Acknowledgements', href: '/security-acknowledgements' },
]

const helpLines = [
  { name: 'United Way 211', phone: '211', detail: 'Dial 211 (24/7)' },
  { name: 'Suicide & Crisis Lifeline', phone: '988', detail: 'Dial 988' },
  { name: 'Veterans Crisis Line', phone: '988', detail: 'Dial 988, press 1' },
  {
    name: 'Social Workers (StL County Library)',
    phone: '314-994-3300',
    detail: '314-994-3300 ext. 4000',
  },
]

const Footer: React.FC = () => {
  const currentYear = React.useMemo(() => new Date().getFullYear(), [])
  const socialLinks = siteConfig.social.filter((s) => s.href)
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-12 px-4 md:px-6 lg:px-8">
        {/* Column 1: About */}
        <div className="space-y-6 px-4 sm:px-0">
          <h3 className="text-[28px] text-white">{siteConfig.name}</h3>

          <p className="text-[16px] font-[500] leading-[160%]" id="lato-font">
            {siteConfig.description}
          </p>
          <p className="text-[16px] font-[500] leading-[160%]" id="lato-font">
            We do not endorse any organization and cannot guarantee accuracy or availability. Always
            confirm details directly with the service provider.
          </p>
          <p className="text-[18px] font-[700]" id="lato-font">
            For emergencies, call 911.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-6 px-4 sm:px-0">
          <h3 className="text-[28px] text-white">Quick Links</h3>

          <ul className="space-y-2 text-sm" id="lato-font">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-[#F58C23] hover:tracking-widest transition-all text-[16px] font-[500]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="space-y-3">
            <h4 className="text-[28px] text-white">Site Policies</h4>
            <ul className="space-y-1 text-sm" id="lato-font">
              {policyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-[#F58C23] hover:tracking-widest transition-all text-[16px] font-[500]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Column 3: Get Help Now */}
        <div className="space-y-6 px-4 sm:px-0">
          <h3 className="text-[28px] text-white">Get Help Now</h3>

          <div className="space-y-4 text-sm">
            {helpLines.map((line) => (
              <div key={line.name} className="flex items-start gap-3">
                <Phone className="w-10 h-10 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-[500] text-[22px]">{line.name}</p>
                  <a
                    href={`tel:${line.phone.replace(/[^0-9+]/g, '')}`}
                    className="font-[500] text-[16px] hover:text-cyan-400 transition-colors"
                    id="aria-font"
                  >
                    {line.detail}
                  </a>
                </div>
              </div>
            ))}

            {socialLinks.length > 0 && (
              <div className="flex gap-3 pt-4">
                {socialLinks.map(({ href, label }) => {
                  const Icon = socialIconByLabel[label] ?? Link2
                  return (
                    <a
                      key={`${label}-${href}`}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition-colors"
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </a>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="mt-12 py-6 px-4 border-t border-gray-800 text-center text-[18px] font-[500] w-full"
        id="aria-font"
      >
        <p>
          © {currentYear} {siteConfig.name} – Connecting neighbors with care. | A project of{' '}
          <Link
            href="https://freeforcharity.org"
            className="underline text-[#2EA3F2] hover:text-[#2EA3F2] transition-colors"
          >
            https://freeforcharity.org
          </Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer
