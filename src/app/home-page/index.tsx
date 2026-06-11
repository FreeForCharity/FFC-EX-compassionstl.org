import React from 'react'
import Hero from '@/components/home-page/Hero'
import Mission from '@/components/home-page/Mission'
import ResourceCategories from '@/components/home-page/ResourceCategories'
import EmergencyHelp from '@/components/home-page/EmergencyHelp'
import HowToUse from '@/components/home-page/HowToUse'

const index = () => {
  return (
    <div>
      <Hero />
      <Mission />
      <ResourceCategories />
      <EmergencyHelp />
      <HowToUse />
    </div>
  )
}

export default index
