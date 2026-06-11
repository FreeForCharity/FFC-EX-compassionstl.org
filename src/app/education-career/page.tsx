import type { Metadata } from 'next'
import ResourceDirectoryPage from '@/components/resource-directory/ResourceDirectoryPage'
import { educationCareerSections } from '@/data/education-career'

export const metadata: Metadata = {
  title: 'Education & Career',
  description:
    'Plan your future: college planning, financial aid, apprenticeships, skilled trades, adult education, GED programs, and job search resources for St. Louis and Missouri.',
}

export default function EducationCareerPage() {
  return (
    <ResourceDirectoryPage
      title="Education & Career"
      tagline="Plan Your Future – Education, Training & Careers"
      sections={educationCareerSections}
    >
      <p className="text-[17px] leading-[160%] italic" id="lato-font">
        CompassionSTL – Empowering your future through education and career resources.
      </p>
    </ResourceDirectoryPage>
  )
}
