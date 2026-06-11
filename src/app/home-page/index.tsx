import React from 'react'
import Hero from '@/components/home-page/Hero'
import Mission from '@/components/home-page/Mission'
import ResourceCategories from '@/components/home-page/ResourceCategories'
import EmergencyHelp from '@/components/home-page/EmergencyHelp'
import HowToUse from '@/components/home-page/HowToUse'
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
      </div>
    </div>
  )
}

export default index
