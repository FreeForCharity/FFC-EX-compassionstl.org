import type { Metadata } from 'next'
import ResourceDirectoryPage from '@/components/resource-directory/ResourceDirectoryPage'
import type { ResourceSection } from '@/data/resource-types'

export const metadata: Metadata = {
  title: 'Disclaimer',
  description:
    'CompassionSTL is a free directory. Always confirm details directly with each service provider. In an emergency, call 911.',
}

const sections: readonly ResourceSection[] = [
  {
    id: 'disclaimer',
    emoji: '📝',
    title: 'Disclaimer',
    intro: [
      'CompassionSTL is a free directory. We do not endorse any organization and cannot guarantee accuracy or availability. **Always confirm details directly with the service provider.** In an emergency, call 911.',
    ],
    groups: [],
  },
  {
    id: 'research',
    emoji: '🔎',
    title: 'Research & Decision-Making',
    intro: ['Use these resources to explore your options after high school:'],
    groups: [
      {
        items: [
          {
            label: 'Missouri Dept. of Higher Education',
            phone: '800-473-6757',
            links: [{ text: 'dhewd.mo.gov', href: 'https://dhewd.mo.gov/' }],
          },
          {
            label: 'Plan & Pay for College',
            links: [{ text: 'dhewd.mo.gov/ppc', href: 'https://dhewd.mo.gov/ppc' }],
          },
          {
            label: 'Missouri Works Initiative',
            links: [{ text: 'moworksinitiative.org', href: 'https://moworksinitiative.org/' }],
          },
          {
            label: 'StL Works',
            links: [{ text: 'stl.works', href: 'https://stl.works/' }],
          },
          {
            label: 'St. Louis Community College',
            links: [{ text: 'stlcc.edu', href: 'https://stlcc.edu/' }],
          },
          {
            label: 'Journey to College',
            links: [
              {
                text: 'journeytocollege.mo.gov',
                href: 'https://journeytocollege.mo.gov/plan/',
              },
            ],
          },
          {
            label: 'ACT / SAT',
            links: [
              {
                text: 'ACT',
                href: 'https://www.act.org/content/act/en/products-and-services/the-act.html',
              },
              { text: 'SAT', href: 'https://satsuite.collegeboard.org/sat' },
            ],
          },
          {
            label: 'FAFSA',
            links: [{ text: 'Apply', href: 'https://studentaid.gov/h/apply-for-aid/fafsa' }],
          },
        ],
      },
    ],
  },
]

export default function DisclaimerPage() {
  return (
    <ResourceDirectoryPage tagline="Important Information & Research Tools" sections={sections} />
  )
}
