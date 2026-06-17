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
]

export default function DisclaimerPage() {
  return <ResourceDirectoryPage tagline="Important Information" sections={sections} />
}
