import type { Metadata } from 'next'
import ResourceDirectoryPage from '@/components/resource-directory/ResourceDirectoryPage'
import JsonLd, { buildBreadcrumbSchema } from '@/components/seo/JsonLd'
import { educationCareerSections } from '@/data/education-career'

export const metadata: Metadata = {
  title: 'Education & Career',
  description:
    'Plan your future: college planning, financial aid, apprenticeships, skilled trades, adult education, GED programs, and job search resources for St. Louis and Missouri.',
}

export default function EducationCareerPage() {
  return (
    <ResourceDirectoryPage
      tagline="Plan Your Future – Education, Training & Careers"
      sections={educationCareerSections}
      breadcrumb={
        <JsonLd
          schema={buildBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Education & Career', path: '/education-career' },
          ])}
        />
      }
    />
  )
}
