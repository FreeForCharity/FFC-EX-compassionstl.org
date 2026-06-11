import type { Metadata } from 'next'
import Link from 'next/link'
import ResourceDirectoryPage from '@/components/resource-directory/ResourceDirectoryPage'
import { resourceSections } from '@/data/resources'

export const metadata: Metadata = {
  title: 'All Resources',
  description:
    'The complete CompassionSTL community resource directory: food, housing, medical care, mental health, utilities, jobs, veterans services, and more in St. Louis and Missouri.',
}

export default function ResourcesPage() {
  return (
    <ResourceDirectoryPage
      title="All Resources"
      tagline="Complete Community Resource Directory"
      sections={resourceSections}
    >
      <p className="text-[17px] leading-[160%]" id="lato-font">
        If you need one-on-one help, contact a{' '}
        <Link
          href="/social-workers"
          className="text-[#2A6682] underline underline-offset-2 hover:text-[#F57C20] transition-colors"
        >
          Social Worker at St. Louis County Library
        </Link>
        .
      </p>
      <p className="text-[17px] leading-[160%] italic" id="lato-font">
        Resources compiled from community agencies. Always call ahead to confirm services. For
        emergencies, call 911.
      </p>
    </ResourceDirectoryPage>
  )
}
