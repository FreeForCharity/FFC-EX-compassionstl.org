import type { Metadata } from 'next'
import ResourceDirectoryPage from '@/components/resource-directory/ResourceDirectoryPage'
import { socialWorkerSections } from '@/data/social-workers'

export const metadata: Metadata = {
  title: 'Social Worker Services',
  description:
    'Free one-on-one help from social workers at St. Louis County Library, plus child care, family support, free diapers, and other family resources in the St. Louis area.',
}

export default function SocialWorkersPage() {
  return (
    <ResourceDirectoryPage
      tagline="Free Help from Social Workers & Family Resources"
      sections={socialWorkerSections}
    />
  )
}
