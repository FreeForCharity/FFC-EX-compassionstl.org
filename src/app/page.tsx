import React from 'react'
import HomePage from '@/app/home-page'
import OrganizationSchema from '@/components/seo/OrganizationSchema'

const page = () => {
  return (
    <div>
      <OrganizationSchema />
      <HomePage />
    </div>
  )
}

export default page
