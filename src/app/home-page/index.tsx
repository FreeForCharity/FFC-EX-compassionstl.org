import React from 'react'
import Hero from '@/components/home-page/Hero'
import Mission from '@/components/home-page/Mission'
import ResourceCategories from '@/components/home-page/ResourceCategories'
import EmergencyHelp from '@/components/home-page/EmergencyHelp'
import HowToUse from '@/components/home-page/HowToUse'
import OtherGuides from '@/components/home-page/OtherGuides'
import SiteNav from '@/components/site/SiteNav'

const index = () => {
  return (
    <div className="cstl">
      <Hero />
      <SiteNav />
      <div className="container" id="start">
        <Mission />
        <ResourceCategories />
        <EmergencyHelp />
        <HowToUse />
        <OtherGuides />
      </div>
    </div>
  )
}

export default index
