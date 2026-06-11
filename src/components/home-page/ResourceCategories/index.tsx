import React from 'react'
import Link from 'next/link'

type CategoryLink = { emoji: string; label: string; href: string }

const categories: CategoryLink[] = [
  { emoji: '🍲', label: 'Food', href: '/resources#food' },
  { emoji: '🏠', label: 'Housing', href: '/resources#housing' },
  { emoji: '⚕️', label: 'Medical', href: '/resources#medical' },
  { emoji: '🧠', label: 'Mental Health', href: '/resources#mental-health' },
  { emoji: '💼', label: 'Jobs & Training', href: '/resources#jobs' },
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
  { emoji: '🎓', label: 'Education & College', href: '/education-career' },
]

const ResourceCategories = () => {
  return (
    <div id="categories" className="py-[52px]">
      <div className="w-[90%] mx-auto max-w-[1280px]">
        <h1
          className="font-[400] text-[40px] lg:text-[48px] leading-[110%] tracking-[0] text-center mb-[40px]"
          id="faustina-font"
        >
          Need Help Right Now? Choose a Category
        </h1>
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[12px] list-none">
          {categories.map((category) => (
            <li key={category.label}>
              <Link
                href={category.href}
                className="flex h-full items-center justify-center gap-2 rounded-[12px] border border-[#2A6682] bg-white px-4 py-4 text-center text-[17px] font-[600] text-[#113563] shadow-sm transition-colors hover:bg-[#2A6682] hover:text-white"
                id="lato-font"
              >
                <span aria-hidden="true">{category.emoji}</span>
                {category.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-[95%] mt-[60px] mx-auto border border-[#2B627B]"></div>
    </div>
  )
}

export default ResourceCategories
