import React from 'react'
import Link from 'next/link'

type CategoryLink = { emoji: string; label: string; href: string }

const categories: CategoryLink[] = [
  { emoji: '🍲', label: 'Food', href: '/resources#food' },
  { emoji: '🏠', label: 'Housing & Shelter', href: '/resources#housing' },
  { emoji: '⚕️', label: 'Medical', href: '/resources#medical' },
  { emoji: '🧠', label: 'Mental Health', href: '/resources#mental-health' },
  { emoji: '💼', label: 'Jobs, Education, & Training', href: '/resources#jobs' },
  { emoji: '💡', label: 'Utilities', href: '/resources#utilities' },
  { emoji: '🎖️', label: 'Veterans', href: '/resources#veterans' },
  { emoji: '🚌', label: 'Transportation', href: '/resources#transportation' },
  { emoji: '👶', label: 'Child Care', href: '/resources#childcare' },
  { emoji: '⚖️', label: 'Legal Aid', href: '/resources#legal' },
  { emoji: '🔓', label: 'Reentry', href: '/resources#reentry' },
  { emoji: '👴', label: 'Seniors', href: '/resources#seniors' },
  { emoji: '🌍', label: 'Immigrants', href: '/resources#immigrants' },
  { emoji: '♿', label: 'Disability', href: '/resources#disability' },
  { emoji: '👪', label: 'Parenting', href: '/resources#parenting' },
  { emoji: '👕', label: 'Clothing/Furniture', href: '/resources#clothing' },
  { emoji: '💰', label: 'Tax Prep', href: '/resources#taxes' },
  { emoji: '❄️', label: 'Cooling/Warming', href: '/resources#weather' },
  { emoji: '💻', label: 'Technology', href: '/resources#technology' },
  { emoji: '📋', label: 'Social Workers', href: '/social-workers' },
  { emoji: '🎓', label: 'Education & Career Planning', href: '/education-career' },
]

/** Category quick-link grid card, matching the source site's second card. */
const ResourceCategories = () => {
  return (
    <div className="card" id="categories">
      <h2>
        <span aria-hidden="true">🔍 </span>Need Help Right Now? Choose a Category
      </h2>
      <div className="quick-links">
        {categories.map((category) => (
          <Link key={category.label} href={category.href} className="quick-link">
            <span aria-hidden="true">{category.emoji}&nbsp;</span>
            {category.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ResourceCategories
