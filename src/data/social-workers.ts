import type { ResourceSection } from './resource-types'

/**
 * Content for the /social-workers page — free help from social workers at
 * St. Louis County Library, plus family-support resources. Transcribed from
 * the original CompassionSTL site.
 */
export const socialWorkerSections: readonly ResourceSection[] = [
  {
    id: 'library-social-workers',
    emoji: '📋',
    title: 'Social Worker Services – St. Louis County Library',
    intro: [
      'Social workers are available at six branches to provide **free one-on-one advising** and help you connect with vital resources. Assistance is available on a wide range of topics, including:',
    ],
    groups: [
      {
        items: [
          { label: '', text: 'Childcare' },
          { label: '', text: 'Housing insecurity' },
          { label: '', text: 'Food insecurity' },
          { label: '', text: 'Medical assistance' },
          { label: '', text: 'Domestic violence' },
          { label: '', text: 'Mental health' },
          { label: '', text: 'Parenting resources' },
          { label: '', text: 'Senior resources' },
          { label: '', text: 'Substance abuse' },
        ],
      },
      {
        paragraph: true,
        items: [
          {
            label: 'Request an appointment online:',
            links: [
              {
                text: 'Book a Social Worker',
                href: 'https://www.slcl.org/library-services/social-workers/book-a-social-worker',
              },
            ],
          },
          { label: 'Or call:', phone: '314-994-3300', text: 'ext. 4000' },
        ],
      },
      {
        paragraph: true,
        items: [
          {
            label: '',
            text: 'Inquiries submitted through the form or left on voicemail will receive a response within three business days. Services are available at all Library locations by appointment.',
          },
        ],
      },
      {
        paragraph: true,
        items: [
          {
            label: 'Main Social Worker page:',
            links: [
              {
                text: 'slcl.org/social-workers',
                href: 'https://www.slcl.org/library-services/social-workers',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'branches',
    emoji: '📍',
    title: 'Participating Branches (by appointment, all locations available)',
    groups: [
      {
        items: [
          {
            label: '',
            links: [
              {
                text: 'Florissant Valley Branch',
                href: 'https://www.slcl.org/about/your-library-renewed/florissant-valley-branch',
              },
            ],
            text: '– 195 New Florissant Rd., S., Florissant, MO 63031',
          },
          {
            label: '',
            links: [
              {
                text: 'Lewis & Clark Branch',
                href: 'https://www.slcl.org/hours-and-locations/lewis-clark-branch',
              },
            ],
            text: '– 9909 Lewis-Clark Blvd., St. Louis, MO 63136',
          },
          {
            label: '',
            links: [
              {
                text: 'Mid-County Branch',
                href: 'https://www.slcl.org/hours-and-locations/mid-county-branch',
              },
            ],
            text: '– 7821 Maryland Ave., St. Louis, MO 63105-3875',
          },
          {
            label: '',
            links: [
              {
                text: 'Natural Bridge Branch',
                href: 'https://www.slcl.org/hours-and-locations/natural-bridge-branch',
              },
            ],
            text: '– 7606 Natural Bridge Rd., St. Louis, MO 63121',
          },
          {
            label: '',
            links: [
              {
                text: 'Rock Road Branch',
                href: 'https://www.slcl.org/hours-and-locations/rock-road-branch',
              },
            ],
            text: '– 10267 St. Charles Rock Road, St. Ann, MO 63074',
          },
          {
            label: '',
            links: [
              {
                text: 'Weber Road Branch',
                href: 'https://www.slcl.org/hours-and-locations/weber-road-branch',
              },
            ],
            text: '– 4444 Weber Rd., St. Louis, MO 63123',
          },
        ],
      },
    ],
  },
  {
    id: 'furniture-early-childhood',
    emoji: '🏡',
    title: 'Home Sweet Home (Furniture)',
    groups: [
      {
        items: [
          { label: '', text: 'Free furniture and more for your apartment or home.' },
          {
            label: 'Must connect through a Partner Agency:',
            links: [
              {
                text: 'Partner Agency List',
                href: 'https://homesweethomestl.org/partner-agencies/',
              },
            ],
          },
        ],
      },
      {
        heading: "Missouri's Early Care & Education Connections",
        emoji: '🧸',
        items: [
          {
            label: '',
            links: [{ text: 'earlyconnections.mo.gov', href: 'https://earlyconnections.mo.gov/' }],
            text: '– Resources & info about what young children need.',
          },
        ],
      },
    ],
  },
  {
    id: 'childcare-family',
    emoji: '👶',
    title: 'Child Care & Family Support',
    groups: [
      {
        items: [
          {
            label: 'Child Care Aware of Missouri',
            links: [
              {
                text: 'mochildcareaware.org',
                href: 'https://mochildcareaware.org/cckmw-state-assistance/',
              },
            ],
          },
          {
            label: 'Cap4Kids',
            links: [
              {
                text: 'Parent handouts (housing, utilities)',
                href: 'https://www.cap4kids.org/stlouis/parent-handouts/housing-utilities/',
              },
            ],
          },
          {
            label: 'Dads of StL',
            links: [{ text: 'dadsofstl.com', href: 'https://dadsofstl.com/' }],
            text: '(Encourage, Educate & Empower Fathers)',
          },
          {
            label: 'Fathers & Families Support Center',
            phone: '314-333-4170',
            links: [
              {
                text: 'fatherssupportcenter.org',
                href: 'https://fatherssupportcenter.org/',
              },
            ],
          },
          {
            label: 'MO Parent Education Program',
            links: [
              {
                text: 'dese.mo.gov',
                href: 'https://dese.mo.gov/childhood/home-visiting/parent-education',
              },
            ],
            text: '(voluntary program for families expecting a child or with a child under kindergarten age)',
          },
          {
            label: 'Raising St. Louis Children',
            links: [
              {
                text: 'stlouischildrens.org',
                href: 'https://www.stlouischildrens.org/health-resources/advocacy-outreach/raising-st-louis',
              },
            ],
            text: '(for parents seeking medical care for infants, children, adolescents)',
          },
          {
            label: 'Single Mothers Grants – Missouri',
            links: [
              {
                text: 'singlemothersgrants.org',
                href: 'https://singlemothersgrants.org/single-mothers-assistance-in-missouri/',
              },
            ],
            text: '(scroll to Popular Grants)',
          },
          {
            label: 'Single Mother Guide – Missouri',
            links: [
              {
                text: 'singlemotherguide.com/state/missouri',
                href: 'https://singlemotherguide.com/state/missouri',
              },
            ],
          },
          {
            label: 'Youth & Family Services City of St. Louis',
            links: [
              {
                text: 'stlouis-mo.gov/youth-family',
                href: 'https://www.stlouis-mo.gov/government/departments/human-services/youth-family/index.cfm',
              },
            ],
          },
          {
            label: 'Youth Programs St. Louis County',
            links: [
              {
                text: 'stlouiscountymo.gov/youth-programs',
                href: 'https://stlouiscountymo.gov/st-louis-county-departments/human-services/county-youth-programs/',
              },
            ],
          },
          {
            label: 'Family Assistance Programs',
            links: [
              {
                text: 'mo.gov/home-family/family-services',
                href: 'https://www.mo.gov/home-family/family-services/',
              },
            ],
          },
          {
            label: 'Herman Center for Child & Family Development (Wash U)',
            links: [
              {
                text: 'hermanncenter.wustl.edu',
                href: 'https://hermanncenter.wustl.edu/',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'diapers',
    emoji: '🍼',
    title: 'Free Diapers',
    groups: [
      {
        items: [
          {
            label: '6 St. Louis County Library Branches',
            phone: '314-994-3300',
            links: [
              {
                text: 'slcl.org/diaper-distribution',
                href: 'https://www.slcl.org/library-services/diaper-distribution',
              },
            ],
          },
          {
            label: 'St. Louis City Library Branches (Carpenter, Central, Julia Davis)',
            phone: '314-241-2288',
            links: [
              {
                text: 'slpl.org/free-diaper-distribution',
                href: 'https://www.slpl.org/free-diaper-distribution/',
              },
            ],
          },
          {
            label: 'St. Charles Libraries',
            phone: '636-441-2300',
            links: [
              {
                text: 'Article / info',
                href: 'https://www.midriversnewsmagazine.com/news/st-charles-city-county-library-expands-diaper-bank-hours-locations/article_ce57fb0c-b2bf-445f-837d-df144bc8aade.html',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'reading',
    emoji: '📚',
    title: 'The Importance of Reading',
    groups: [
      {
        items: [
          {
            label: "Why It's Important to Read to Your Children",
            links: [
              {
                text: 'childmind.org',
                href: 'https://childmind.org/article/why-is-it-important-to-read-to-your-child/',
              },
            ],
          },
          {
            label: 'Fathers Reading to Their Child',
            links: [
              {
                text: 'thefatheringproject.org',
                href: 'https://thefatheringproject.org/fathering-channel/the-positive-impact-a-father-has-by-reading-to-their-child/',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'state-community',
    emoji: '📎',
    title: 'Additional Missouri & Community Resources',
    groups: [
      {
        items: [
          {
            label: 'Missouri Resource Guide (PDF)',
            links: [
              {
                text: 'dss.mo.gov/resource-guide',
                href: 'https://dss.mo.gov/fsd/pdf/missouri-resource-guide-3steps.pdf',
              },
            ],
            text: '(Child Care, Food, Health, Housing, Veterans, more)',
          },
          {
            label: 'Public Programs & Services',
            links: [
              {
                text: 'labor.mo.gov/des',
                href: 'https://labor.mo.gov/des/unemployed-workers/public-programs#CSFP',
              },
            ],
          },
          {
            label: 'MO Dept. of Health & Senior Services',
            links: [{ text: 'health.mo.gov', href: 'https://health.mo.gov/' }],
          },
          {
            label: 'MO Dept. of Mental Health',
            links: [{ text: 'dmh.mo.gov', href: 'https://dmh.mo.gov/' }],
          },
          {
            label: 'MO Dept. of Social Services',
            links: [{ text: 'dss.mo.gov', href: 'https://dss.mo.gov/' }],
          },
          {
            label: 'Search 211',
            links: [{ text: 'search.211helps.org', href: 'https://search.211helps.org/' }],
          },
          {
            label: 'Toll-Free Numbers (DSS)',
            links: [{ text: 'dss.mo.gov/toll.htm', href: 'https://dss.mo.gov/toll.htm' }],
          },
          {
            label: 'Community Programs',
            links: [
              {
                text: 'mydss.mo.gov/community-programs',
                href: 'https://mydss.mo.gov/community-programs',
              },
            ],
          },
          {
            label: 'Find Help (general search)',
            links: [{ text: 'findhelp.org', href: 'https://findhelp.org/' }],
          },
        ],
      },
    ],
  },
]
