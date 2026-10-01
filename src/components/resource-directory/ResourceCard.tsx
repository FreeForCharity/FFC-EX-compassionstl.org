import React from 'react'
import Link from 'next/link'
import type { ResourceItem, ResourceSection } from '@/data/resource-types'

/** Strip a display phone number down to a dialable tel: target. */
function telHref(phone: string): string {
  return `tel:${phone.replace(/[^0-9+]/g, '')}`
}

/** Render `**bold**` spans inside a paragraph string as <strong>. */
function renderBold(text: string): React.ReactNode {
  const parts = text.split(/\*\*([^*]+)\*\*/g)
  if (parts.length === 1) return text
  return parts.map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : part))
}

/** The inline content of one resource entry: bold label – phone | links (text). */
function ItemContent({ item }: { item: ResourceItem }) {
  const hasLabel = item.label.length > 0
  const parts: React.ReactNode[] = []

  if (item.phone) {
    parts.push(
      <a key="phone" className="phone" href={telHref(item.phone)}>
        {item.phone}
      </a>
    )
  }
  for (const [i, link] of (item.links ?? []).entries()) {
    // Site-relative hrefs go through next/link so the configured basePath is
    // applied on subpath deployments; external hrefs stay plain anchors.
    parts.push(
      link.href.startsWith('/') ? (
        <Link key={`link-${i}`} href={link.href}>
          {link.text}
        </Link>
      ) : (
        <a key={`link-${i}`} href={link.href} target="_blank" rel="noopener noreferrer">
          {link.text}
        </a>
      )
    )
  }

  return (
    <>
      {hasLabel && <strong>{item.label}</strong>}
      {parts.map((part, i) => (
        <React.Fragment key={i}>
          {i === 0 ? (hasLabel ? ' – ' : '') : ' | '}
          {part}
        </React.Fragment>
      ))}
      {item.text && <> {item.text}</>}
    </>
  )
}

/**
 * One card of the resource directory, matching the source site's
 * <div class="card"> sections: heading, optional intro paragraphs, then one
 * or more bulleted link lists (or paragraph blocks) with optional
 * subheadings.
 */
export default function ResourceCard({ section }: { section: ResourceSection }) {
  return (
    <div className="card" id={section.id}>
      <h2>
        {section.emoji && <span aria-hidden="true">{section.emoji} </span>}
        {section.title}
      </h2>

      {section.intro?.map((paragraph, i) => (
        <p key={i}>{renderBold(paragraph)}</p>
      ))}

      {section.groups.map((group, gi) => (
        <React.Fragment key={gi}>
          {group.heading && (
            <h3>
              {group.emoji && <span aria-hidden="true">{group.emoji} </span>}
              {group.heading}
            </h3>
          )}
          {group.paragraph ? (
            <p>
              {group.items.map((item, ii) => (
                <React.Fragment key={ii}>
                  {ii > 0 && <br />}
                  <ItemContent item={item} />
                </React.Fragment>
              ))}
            </p>
          ) : (
            <ul className="list-bullet">
              {group.items.map((item, ii) => (
                <li key={ii}>
                  <ItemContent item={item} />
                </li>
              ))}
            </ul>
          )}
        </React.Fragment>
      ))}

      {section.outro?.map((paragraph, i) => (
        <p key={i}>{renderBold(paragraph)}</p>
      ))}
    </div>
  )
}
