import React from 'react'
import type { ResourceSection } from '@/data/resource-types'
import PageHeader from '@/components/site/PageHeader'
import SiteNav from '@/components/site/SiteNav'
import ResourceCard from './ResourceCard'

type Props = {
  tagline: string
  sections: readonly ResourceSection[]
  /** Optional JSON-LD (e.g. a BreadcrumbList) rendered at the top of the page. */
  breadcrumb?: React.ReactNode
  children?: React.ReactNode
}

/**
 * Page shell shared by the interior pages, matching the source site's
 * structure: header (site name + tagline), sticky nav, then a container of
 * cards.
 */
export default function ResourceDirectoryPage({ tagline, sections, breadcrumb, children }: Props) {
  return (
    <div className="cstl">
      {breadcrumb}
      <PageHeader tagline={tagline} />
      <SiteNav />
      <div className="container">
        {sections.map((section) => (
          <ResourceCard key={section.id} section={section} />
        ))}
        {children}
      </div>
    </div>
  )
}
