import React from 'react'
import HomePage from '@/app/home-page'
import OrganizationSchema from '@/components/seo/OrganizationSchema'
import JsonLd, { buildWebSiteSchema } from '@/components/seo/JsonLd'

const page = () => {
  return (
    <div>
      <OrganizationSchema />
      <JsonLd schema={buildWebSiteSchema()} />
      <HomePage />
    </div>
  )
}

export default page
