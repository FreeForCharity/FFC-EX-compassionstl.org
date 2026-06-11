import React from 'react'
import type { ResourceItem, ResourceSection } from '@/data/resource-types'

/** Strip a display phone number down to a dialable tel: target. */
function telHref(phone: string): string {
  return `tel:${phone.replace(/[^0-9+]/g, '')}`
}

function ResourceListItem({ item }: { item: ResourceItem }) {
  const hasLabel = item.label.length > 0
  const parts: React.ReactNode[] = []

  if (item.phone) {
    parts.push(
      <a
        key="phone"
        href={telHref(item.phone)}
        className="whitespace-nowrap font-[600] text-[#2A6682]"
      >
        {item.phone}
      </a>
    )
  }
  for (const [i, link] of (item.links ?? []).entries()) {
    parts.push(
      <a
        key={`link-${i}`}
        href={link.href}
        target={link.href.startsWith('/') ? undefined : '_blank'}
        rel={link.href.startsWith('/') ? undefined : 'noopener noreferrer'}
        className="text-[#2A6682] underline underline-offset-2 hover:text-[#F57C20] transition-colors"
      >
        {link.text}
      </a>
    )
  }

  return (
    <li>
      {hasLabel && <strong className="font-[700]">{item.label}</strong>}
      {parts.map((part, i) => (
        <React.Fragment key={i}>
          {i === 0 ? (hasLabel ? ' – ' : '') : ' | '}
          {part}
        </React.Fragment>
      ))}
      {item.text && <> {item.text}</>}
    </li>
  )
}

/**
 * One card of the resource directory: heading, optional intro paragraphs,
 * then one or more bulleted link lists with optional subheadings.
 */
export default function ResourceCard({ section }: { section: ResourceSection }) {
  return (
    <section
      id={section.id}
      className="scroll-mt-[110px] rounded-[12px] border border-gray-200 bg-white p-6 shadow-sm md:p-8"
    >
      <h2 className="mb-4 text-[26px] leading-[120%] md:text-[30px]" id="faustina-font">
        {section.emoji && <span aria-hidden="true">{section.emoji} </span>}
        {section.title}
      </h2>

      {section.intro?.map((paragraph, i) => (
        <p key={i} className="mb-4 text-[17px] leading-[160%]" id="lato-font">
          {paragraph}
        </p>
      ))}

      {section.groups.map((group, gi) => (
        <div key={gi} className={gi > 0 ? 'mt-6' : undefined}>
          {group.heading && (
            <h3 className="mb-3 text-[20px] font-[600] leading-[130%]" id="faustina-font">
              {group.emoji && <span aria-hidden="true">{group.emoji} </span>}
              {group.heading}
            </h3>
          )}
          <ul className="list-disc space-y-2 pl-6 text-[17px] leading-[160%]" id="lato-font">
            {group.items.map((item, ii) => (
              <ResourceListItem key={ii} item={item} />
            ))}
          </ul>
        </div>
      ))}

      {section.outro?.map((paragraph, i) => (
        <p key={i} className="mt-4 text-[17px] leading-[160%] italic" id="lato-font">
          {paragraph}
        </p>
      ))}
    </section>
  )
}
