import React from 'react'
import type { ResourceSection } from '@/data/resource-types'
import ResourceCard from './ResourceCard'

type Props = {
  title: string
  tagline: string
  sections: readonly ResourceSection[]
  children?: React.ReactNode
}

/**
 * Page shell shared by the directory pages (/resources, /social-workers,
 * /education-career): a banner with the page title and tagline, then a
 * stacked list of ResourceCard sections.
 */
export default function ResourceDirectoryPage({ title, tagline, sections, children }: Props) {
  return (
    <div className="bg-[#F5F7F8]">
      <div className="bg-[#2E6F8E] pt-[120px] pb-[40px] text-center text-white">
        <h1 className="mb-2 text-[40px] leading-[120%] md:text-[48px]" id="faustina-font">
          {title}
        </h1>
        <p className="text-[20px] leading-[130%]" id="lato-font">
          {tagline}
        </p>
      </div>

      <div className="ffc-container space-y-8 py-12">
        {sections.map((section) => (
          <ResourceCard key={section.id} section={section} />
        ))}
        {children}
      </div>
    </div>
  )
}
