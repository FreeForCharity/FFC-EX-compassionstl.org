import type { Metadata } from 'next'
import Link from 'next/link'
import ResourceDirectoryPage from '@/components/resource-directory/ResourceDirectoryPage'
import JsonLd, { buildBreadcrumbSchema } from '@/components/seo/JsonLd'
import { resourceSections } from '@/data/resources'

export const metadata: Metadata = {
  title: 'All Resources',
  description:
    'The complete CompassionSTL community resource directory: food, housing, medical care, mental health, utilities, jobs, veterans services, and more in St. Louis and Missouri.',
}

export default function ResourcesPage() {
  return (
    <ResourceDirectoryPage
      tagline="Complete Community Resource Directory"
      sections={resourceSections}
      breadcrumb={
        <JsonLd
          schema={buildBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'All Resources', path: '/resources' },
          ])}
        />
      }
    >
      <p style={{ marginTop: '1.5rem' }}>
        If you need one-on-one help, contact a{' '}
        <Link href="/social-workers">Social Worker at St. Louis County Library</Link>.
      </p>
    </ResourceDirectoryPage>
  )
}
