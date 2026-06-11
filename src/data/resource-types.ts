/**
 * Shared types for the CompassionSTL resource directory pages
 * (/resources, /social-workers, /education-career).
 *
 * Each page renders a list of ResourceSection cards. Keeping the content in
 * typed data files (src/data/*.ts) separates the resource listings from the
 * rendering markup, so volunteers can update links and phone numbers without
 * touching JSX.
 */

export type ResourceLink = {
  /** Visible link text. */
  text: string
  /** Absolute https URL (external) or site-relative path. */
  href: string
}

export type ResourceItem = {
  /** Bold lead-in (organization or program name). Empty string omits it. */
  label: string
  /** Display phone number, rendered as a tel: link (e.g. "314-367-5500" or "211"). */
  phone?: string
  /** Links rendered after the label/phone, separated by " | ". */
  links?: ResourceLink[]
  /** Plain trailing text (addresses, hours, extra detail). Include any leading separator. */
  text?: string
}

export type ResourceGroup = {
  /** Optional subheading rendered as an h3 above the list. */
  heading?: string
  /** Decorative emoji for the subheading; hidden from screen readers. */
  emoji?: string
  /**
   * Render the items as one paragraph (lines separated by <br/>) instead of
   * a bulleted list — matches the source site's <p> blocks.
   */
  paragraph?: boolean
  items: ResourceItem[]
}

export type ResourceSection = {
  /** Anchor id for deep links like /resources#food. */
  id: string
  /** Decorative emoji for the heading; hidden from screen readers. */
  emoji?: string
  title: string
  /**
   * Paragraphs shown between the heading and the first group.
   * Supports `**bold**` spans, matching inline <strong> in the source.
   */
  intro?: string[]
  groups: ResourceGroup[]
  /** Paragraphs shown after the last group. Supports `**bold**` spans. */
  outro?: string[]
}
