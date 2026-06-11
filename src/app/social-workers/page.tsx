import type { Metadata } from 'next'
import ResourceDirectoryPage from '@/components/resource-directory/ResourceDirectoryPage'
import { socialWorkerSections } from '@/data/social-workers'

export const metadata: Metadata = {
  title: 'Social Workers',
  description:
    'Free one-on-one help from social workers at St. Louis County Library, plus child care, family support, free diapers, and other family resources in the St. Louis area.',
}

export default function SocialWorkersPage() {
  return (
    <ResourceDirectoryPage
      title="Social Workers"
      tagline="Free Help from Social Workers & Family Resources"
      sections={socialWorkerSections}
    >
      <p className="text-[17px] leading-[160%] italic" id="lato-font">
        CompassionSTL – Building a network of care for families and individuals.
      </p>
    </ResourceDirectoryPage>
  )
}
