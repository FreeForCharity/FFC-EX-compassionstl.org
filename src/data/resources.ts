import type { ResourceItem, ResourceSection } from './resource-types'

/**
 * Content for the /resources page — the complete CompassionSTL community
 * resource directory. Transcribed from the original CompassionSTL site.
 * Always verify hours and eligibility directly with each organization.
 */

// Mercy Neighborhood Ministry publishes its resource lists as PDFs; this
// tuple list keeps the long catalog readable.
const mercyPdfList: readonly (readonly [string, string])[] = [
  [
    'Table of Contents',
    'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/resource-lists-table-of-contents.pdf',
  ],
  [
    'Activities Cover Page – Free Family-Oriented',
    'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/mercy-neighborhood-ministry-resource-lists.pdf',
  ],
  [
    'Free Family Activities',
    'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/activities-free-and-family-oriented-st-louis-and-surrounding-counties.pdf',
  ],
  [
    'Bereavement Support Groups',
    'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/bereavement-support-groups-in-st-louis-area.pdf',
  ],
  [
    'Cancer Resources',
    'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/cancer-resources-stlouis-and-surrounding-areas.pdf',
  ],
  [
    'Child Care / Crisis Care Resources',
    'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/child-and-crisis-care-resources-st-louis-and-surrounding-areas.pdf',
  ],
  [
    'Clothing Resources – St. Louis City & County',
    'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/Clothing-Resources-stl-and-counties.pdf',
  ],
  [
    'Dental Resources – St. Louis Area',
    'https://www.mercy.net/content/dam/mercy/en/pdf/Dental-Resources-St-Louis.pdf',
  ],
  [
    'Dental Resources – Surrounding Counties',
    'https://www.mercy.net/content/dam/mercy/en/pdf/dental-resources-franklin-jefferson-lincoln-st-charles-st-francois-and-washington-counties.pdf',
  ],
  [
    'Department of Health Programs (City of St. Louis/Low Income)',
    'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/departments_of_health_17.pdf',
  ],
  [
    'Diabetes Resources',
    'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/diabetes-resources.pdf',
  ],
  [
    'Disability Resources',
    'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/disability-resources.pdf',
  ],
  [
    'Domestic Violence Resources',
    'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/domestic-violence-resources.pdf',
  ],
  [
    'Donation Sites',
    'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/donation-site-resources.pdf',
  ],
  [
    'Employment & Training Resources',
    'https://www.mercy.net/content/dam/mercy/en/pdf/Employment-and-Training-Resources.pdf',
  ],
  [
    'Ex-Offender Resources',
    'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/ex-offender-resources.pdf',
  ],
  [
    'Extended Stay Hotel Resources',
    'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/extended-stay-hotel-resources.pdf',
  ],
  [
    'Eye Care – Vision Resources',
    'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/eye-care-vision-resources.pdf',
  ],
  [
    'Family & Youth Resources',
    'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/family-and-youth-resources.pdf',
  ],
  [
    "Farmers' Markets",
    'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/farmers-markets.pdf',
  ],
  [
    'Fitness / Recreation Resources',
    'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/fitness-recreation-center-resources.pdf',
  ],
  [
    'Food Pantries – St. Louis City',
    'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/food-pantries-st-louis-city.pdf',
  ],
  [
    'Food Pantries – St. Louis County',
    'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/food-pantry-resources-st-louis-county.pdf',
  ],
  [
    'Food Pantries – Crawford, Franklin, Gasconade, Washington',
    'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/food-pantry-resources-crawford-franklin-gasconade-and-washington-counties.pdf',
  ],
  [
    'Food Pantries – Jefferson County',
    'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/food-pantry-resources-jefferson-county.pdf',
  ],
  [
    'Food Pantries – St. Charles, Lincoln, Warren',
    'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/food-pantry-resources-lincoln-st-charles-warren-counties.pdf',
  ],
  [
    'Funeral & Burial Resources',
    'https://www.mercy.net/content/dam/mercy/en/pdf/funeral-and-burial-resources-st-louis-and-st-charles-counties.pdf',
  ],
  [
    'Government-Related Resources',
    'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/government-related-resources.pdf',
  ],
  [
    'Health Center / Clinic Resources – St. Louis',
    'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/health-center-clinic-resources-st-louis-city-and-county.pdf',
  ],
  [
    'Health Center / Clinic Resources – Outside St. Louis',
    'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/health-center-clinic-resources-outside-of-st-louis.pdf',
  ],
  [
    'Health Centers Map',
    'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/integrated_health_network_map.pdf',
  ],
  [
    'HIV-AIDS Resources',
    'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/hiv-aids-resources.pdf',
  ],
  [
    'Homeless Shelter Resources',
    'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/homeless-and-shelter-resources.pdf',
  ],
  [
    'Housing & Foreclosure Resources',
    'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/housing-foreclosure-resources.pdf',
  ],
  [
    'Immigrant & Refugee Resources',
    'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/immigrant-and-refugee-resources-st-louis-area.pdf',
  ],
  [
    'Laundry Resources',
    'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/laundry-resources.pdf',
  ],
  [
    'Legal Assistance Resources',
    'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/legal-assistance-resources-st-louis-area.pdf',
  ],
  [
    'Meal Programs – St. Louis City & County',
    'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/meal-program-st-louis-city-and-county.pdf',
  ],
  [
    'Meal Programs – Franklin, Gasconade, Washington',
    'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/meal-program-resources-franklin-gasconade-and-washington-counties.pdf',
  ],
  [
    'Meal Programs – St. Charles, Lincoln, Warren',
    'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/meal-program-resources-lincoln-stcharles-warren-counties.pdf',
  ],
  [
    'Medical Equipment',
    'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/medical-equipment-resources.pdf',
  ],
  [
    'Mental Health Resources',
    'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/mental-health-resources-in-st-louis.pdf',
  ],
  [
    'Organizational Payees',
    'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/organizational-payee.pdf',
  ],
  [
    'Pet Resources',
    'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/pet-care-resources.pdf',
  ],
  [
    'Prescription Assistance',
    'https://www.mercy.net/content/dam/mercy/en/pdf/prescription-assistance-resources.pdf',
  ],
  [
    'Prescription & OTC Drop Off Locations',
    'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/prescription-and-otc-medication-drop-off-sites.pdf',
  ],
  [
    'Senior Citizen Resources',
    'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/senior-services-stl.pdf',
  ],
  [
    'Sewer Assistance Resources',
    'https://www.mercy.net/content/dam/mercy/en/pdf/sewer-assistance-resource.pdf',
  ],
  [
    'Substance Use Resources',
    'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/substance-use-resources.pdf',
  ],
  [
    'Technology Assistance Resources',
    'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/technology-assistance-resources.pdf',
  ],
  [
    'Transportation – St. Louis City & County',
    'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/transportation-resources-st-louis-city-and-st-louis-county.pdf',
  ],
  [
    'Transportation – St. Louis South',
    'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/transportation-resources-st-louis-south.pdf',
  ],
  [
    'Transportation – Franklin County',
    'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/transportation-franklin.pdf',
  ],
  [
    'Transportation – Jefferson County',
    'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/transportation-jefferson.pdf',
  ],
  [
    'Transportation – Lincoln, St. Charles, Warren',
    'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/transportation-resources-lincoln-county-st-charles-county-and-warren-county.pdf',
  ],
  [
    'Transportation – Metro Reduced Fare Application',
    'https://www.mercy.net/content/dam/mercy/en/images/transportation_-_senior_metroreducedfareapplication2017.pdf',
  ],
  [
    'Utility & Rent Assistance – St. Louis City & County',
    'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/utility-and-rent-assistance-st-louis-city-and-county.pdf',
  ],
  [
    'Utility & Rent Assistance – Franklin, Gasconade, Washington',
    'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/utility-and-rent-assistance-franklin-county-gasconade-county-and-washington-county.pdf',
  ],
  [
    'Utility & Rent Assistance – Lincoln, St. Charles, Warren',
    'https://www.mercy.net/content/dam/mercy/en/pdf/Utility-and-Rent-Lincoln-St-Charles-warren.pdf',
  ],
  [
    'Utility & Rent Assistance – Jefferson County',
    'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/utility-and-rent-assistance-jefferson-county.pdf',
  ],
  [
    'Vaccination Resources',
    'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/vaccination-resources-stl-and-surrounding-counties.pdf',
  ],
  [
    'Warming Center Site List – Missouri & Illinois',
    'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/warming-center-resources.pdf',
  ],
  [
    'WIC – St. Louis',
    'https://www.mercy.net/content/dam/mercy/en/pdf/wic_resources_-_st_louis_city_and_county_17.pdf',
  ],
  [
    'WIC – Franklin, Jefferson, Washington',
    'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/wic-resources-franklin-jefferson-and-washington.pdf',
  ],
  [
    'WIC – Lincoln, St. Charles, Warren',
    'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/wic-resources-lincoln-st-charles-and-warren.pdf',
  ],
]

const mercyPdfItems: ResourceItem[] = mercyPdfList.map(([text, href]) => ({
  label: '',
  links: [{ text, href }],
}))

export const resourceSections: readonly ResourceSection[] = [
  {
    id: 'general',
    emoji: '📘',
    title: 'Missouri Resource Guide & General Assistance',
    groups: [
      {
        items: [
          {
            label: 'Alternatives to Abortion Missouri',
            links: [{ text: 'Alternatives to Abortion', href: 'https://dss.mo.gov/fsd/a2a/' }],
            text: '– Compassionate support for you and your child',
          },
          {
            label: 'Apply for Temporary Assistance',
            phone: '855-373-4636',
            links: [
              {
                text: 'mydss.mo.gov/temporary-assistance',
                href: 'https://mydss.mo.gov/temporary-assistance/apply',
              },
            ],
            text: "– Cash benefit program for low-income families to help cover costs for the household's children",
          },
          {
            label: 'Assistance League of St. Louis',
            phone: '636-227-6200',
            links: [{ text: 'alstl.org', href: 'https://alstl.org/' }],
            text: '– Tackling unmet community needs: Books, Clothing, Outreach, Scholarships, Support for Shelters, & items to help families through tough times',
          },
          {
            label: 'AZA Program',
            links: [
              { text: 'Compassionate Support for you & your child', href: 'https://moa2a.com/' },
            ],
          },
          {
            label: 'Clothing Resources',
            links: [
              {
                text: 'Mercy PDF',
                href: 'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/Clothing-Resources-stl-and-counties.pdf',
              },
            ],
          },
          {
            label: 'Community Action Agency StL County',
            phone: '314-863-0015',
            links: [{ text: 'caastlc.org', href: 'https://www.caastlc.org/' }],
            text: '(Utilities, Housing, Weatherization, Reentry, Immigrants, Mental Health)',
          },
          {
            label: 'Community Resources (StL County Library)',
            links: [
              {
                text: 'slcl.libguides.com',
                href: 'https://slcl.libguides.com/c.php?g=1288891',
              },
            ],
          },
          {
            label: 'Community Services Directory (St. Louis County)',
            links: [
              {
                text: 'stlouiscountymo.gov',
                href: 'https://stlouiscountymo.gov/st-louis-county-departments/human-services/stlco-dhs-community-resource-directory/',
              },
            ],
          },
          {
            label: 'Emergency Assistance for Single Mothers in Missouri',
            links: [
              {
                text: 'Information',
                href: 'https://www.asinglemother.org/emergency-assistance-for-single-mothers-in-missouri/',
              },
            ],
          },
          {
            label: 'Emergency Cash for Low-Income Families in Missouri',
            links: [
              {
                text: 'Help for single moms in Missouri: 33 assistance programs',
                href: 'https://www.wealthysinglemommy.com/help-for-single-moms-missouri/',
              },
            ],
          },
          {
            label: 'Find Help',
            links: [{ text: 'findhelp.org', href: 'https://www.findhelp.org/' }],
          },
          {
            label: 'Free Diapers',
            links: [
              {
                text: '6 St. Louis County Library Branches',
                href: 'https://www.slcl.org/library-services/diaper-distribution',
              },
              {
                text: 'St. Louis City Library Branches',
                href: 'https://www.slpl.org/free-diaper-distribution/',
              },
              {
                text: 'St. Charles Libraries (article / info)',
                href: 'https://www.midriversnewsmagazine.com/news/st-charles-city-county-library-expands-diaper-bank-hours-locations/article_ce57fb0c-b2bf-445f-837d-df144bc8aade.html',
              },
            ],
            text: '– StL County Libraries 314-994-3300, StL City Libraries (Carpenter, Central, Julia Davis) 314-241-2288, St. Charles Libraries 636-441-2300',
          },
          {
            label: 'Government Related Resources',
            links: [
              {
                text: 'Mercy PDF',
                href: 'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/government-related-resources.pdf',
              },
            ],
          },
          {
            label: 'Missouri DSS Toll-Free Numbers',
            links: [{ text: 'Toll-Free Numbers', href: 'https://dss.mo.gov/toll.htm' }],
          },
          {
            label: 'Missouri Option Program (Graduate from High School)',
            links: [
              {
                text: 'dese.mo.gov',
                href: 'https://dese.mo.gov/quality-schools/missouri-option-program',
              },
            ],
            text: '– Gain your High School Diploma, at least 17 yrs, at risk of dropping out, or not graduating w/cohort group',
          },
          {
            label: 'Missouri Resources & Agency Partners',
            links: [
              {
                text: 'dss.mo.gov/agency-partners',
                href: 'https://dss.mo.gov/fsd/agency-partners~resources.htm',
              },
            ],
            text: '(Blind, Cash Assistance, Child Care, Food, Utility Assistance, & more)',
          },
          {
            label: 'Missouri Resource Guide',
            links: [
              { text: 'mydss.mo.gov/resource-guide', href: 'https://mydss.mo.gov/resource-guide' },
            ],
            text: '(Food, Housing, Safety, Child Care, Health, Disability, Utility Assistance, Mental Health, Parenting, Legal, Vital Records, Unemployment, Transportation, Veterans, Reentry, Technology)',
          },
          {
            label: 'MO Community Resources & Options (MOCOR)',
            phone: '855-834-8555',
            links: [{ text: 'mocor.mo.gov', href: 'https://mocor.mo.gov/' }],
            text: '– Long-Term Support',
          },
          {
            label: 'MO Resources for Low Income Families',
            links: [
              {
                text: 'Search info',
                href: 'https://www.google.com/search?q=resources+for+low+income+families',
              },
            ],
            text: '(Financial/Cash Assistance, Food, Healthcare/WIC, Housing/Utilities)',
          },
          {
            label: 'Public Programs & Services',
            links: [
              {
                text: 'labor.mo.gov/des',
                href: 'https://labor.mo.gov/des/unemployed-workers/public-programs',
              },
            ],
            text: '– Meeting Your Basic Needs, Getting the Support You Need, Preparing for a Career',
          },
          {
            label: 'Social Worker Services StL County Library',
            phone: '314-994-3300',
            links: [
              {
                text: 'slcl.org/social-workers',
                href: 'https://www.slcl.org/library-services/social-workers',
              },
              { text: 'our guide', href: '/social-workers' },
            ],
          },
          {
            label: 'United Way',
            phone: '211',
            links: [{ text: 'How can we help?', href: 'https://search.211helps.org/' }],
            text: '– Dial 2-1-1 (24/7)',
          },
          {
            label: 'US Government Benefits',
            links: [{ text: 'usa.gov/benefits', href: 'https://www.usa.gov/benefits' }],
            text: '– Government Benefits/Financial Help, Food, Health, Housing, Social Security, Government Grants/Loans & more',
          },
        ],
      },
    ],
  },
  {
    id: 'city-county',
    emoji: '🏛️',
    title: 'St. Louis City & County Government Services',
    groups: [
      {
        items: [
          {
            label: 'St. Louis City All Services',
            phone: '314-622-4800',
            links: [
              {
                text: 'Services',
                href: 'https://www.stlouis-mo.gov/services/index.cfm',
              },
            ],
          },
          {
            label: 'St. Louis City Help Resources',
            links: [
              {
                text: 'Help',
                href: 'https://www.stlouis-mo.gov/live-work/community/help/index.cfm',
              },
            ],
            text: '(Employment, Food, Healthcare, Housing, New Americans, Veterans)',
          },
          {
            label: 'St. Louis City Human Services',
            phone: '314-612-5900',
            links: [
              {
                text: 'Human-Services',
                href: 'https://www.stlouis-mo.gov/human-services/index.cfm',
              },
            ],
            text: '(Aging, Disabled, Homeless, Youth/Family)',
          },
          {
            label: 'St. Louis County Find Resources',
            phone: '314-615-5000',
            links: [
              {
                text: 'Find-Resources',
                href: 'https://stlouiscountymo.gov/st-louis-county-departments/public-health/covid-19/find-resources/',
              },
            ],
            text: '(Food, Housing/Rental, Mental Health, Parents, Unemployment)',
          },
          {
            label: 'St. Louis County Human Services',
            phone: '314-615-4444',
            links: [
              {
                text: 'Human-Services',
                href: 'https://stlouiscountymo.gov/st-louis-county-departments/human-services/',
              },
            ],
            text: '(Older Residents, Veterans, Youth)',
          },
        ],
      },
    ],
  },
  {
    id: 'catholic-charities',
    emoji: '✝️',
    title: 'Catholic Charities of St. Louis',
    groups: [
      {
        items: [
          { label: 'Phone:', phone: '314-367-5500' },
          {
            label: 'Website:',
            links: [{ text: 'ccstl.org/services', href: 'https://ccstl.org/services' }],
          },
          {
            label: '',
            text: 'Services: Families, Housing, Immigrants, Legal, Seniors, Workforce, Addiction Recovery, Mental Health, Disaster Relief',
          },
          {
            label: '',
            text: 'Other MO offices: Kansas City/St. Joseph 816-221-4377, Southern MO 417-720-4213, Central/Northern MO 573-635-7719',
          },
        ],
      },
    ],
  },
  {
    id: 'home-sweet-home',
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
    ],
  },
  {
    id: 'mercy',
    emoji: '🏥',
    title: 'Mercy Neighborhood Ministry',
    groups: [
      {
        items: [
          {
            label: 'Main Resource Page:',
            links: [
              {
                text: 'Mercy Neighborhood Ministry Resources',
                href: 'https://www.mercy.net/practice/mercy-neighborhood-ministry/mercy-neighborhood-ministry-resources/',
              },
            ],
          },
          {
            label: '',
            text: 'Categories: Clothing, Dental, Eye Care, Employment, Food, Health, Legal, Utilities, Child Care, Domestic Violence, Ex-Offenders, Immigrant/Refugee, Transportation, Vision, and many more.',
          },
        ],
      },
      {
        heading: 'Complete Resource List (PDFs)',
        emoji: '📎',
        items: mercyPdfItems,
      },
    ],
  },
  {
    id: 'svdp',
    emoji: '🤝',
    title: 'Society of St. Vincent de Paul',
    groups: [
      {
        items: [
          { label: 'Phone:', phone: '314-881-6000' },
          {
            label: 'Request Help:',
            links: [
              {
                text: 'Conference Finder',
                href: 'https://svdpstlouis.org/get-help/request-help-conference-finder',
              },
            ],
            text: 'or Dial 211',
          },
          {
            label: '',
            text: 'Services: Home visits, beds, clothing, emergency food, medications, utilities, thrift stores.',
          },
          {
            label: 'Thrift Store Locations:',
            links: [{ text: 'Find a store', href: 'https://svdpstlouis.org/stores/locations' }],
          },
          {
            label: 'Home Visits (person-to-person help):',
            links: [{ text: 'Everyday Needs', href: 'https://svdpstlouis.org/everyday-needs' }],
            text: '(food, clothing, shelter, transport, rent/utilities)',
          },
        ],
      },
    ],
  },
  {
    id: 'united-way',
    emoji: '💙',
    title: 'United Way 211',
    groups: [
      {
        items: [
          {
            label: 'United Way',
            phone: '211',
            links: [{ text: 'How can we help?', href: 'https://search.211helps.org/' }],
            text: '– Dial 2-1-1 (24/7)',
          },
          {
            label: 'Emergency Assistance:',
            links: [
              {
                text: 'Search',
                href: 'https://www.google.com/search?q=united+way+emergency+assistance',
              },
            ],
          },
          {
            label: 'Find Food Resources:',
            links: [{ text: '211.org/food', href: 'https://www.211.org/food' }],
          },
          {
            label: 'Find your local United Way:',
            links: [
              {
                text: 'unitedway.org/find',
                href: 'https://www.unitedway.org/find-your-united-way',
              },
            ],
          },
          {
            label: 'Help Paying Bills:',
            links: [
              {
                text: '211.org/get-help',
                href: 'https://www.211.org/get-help/i-need-help-paying-my-bills',
              },
            ],
          },
          {
            label: 'My Resource Directory:',
            links: [
              {
                text: 'mo211.myresourcedirectory.com',
                href: 'https://mo211.myresourcedirectory.com/',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'county-extra',
    emoji: '🗺️',
    title: 'Additional County Resources',
    groups: [
      {
        items: [
          {
            label: '',
            links: [
              {
                text: 'St. Charles County',
                href: 'http://www.communitycouncilstc.org/resources',
              },
            ],
          },
          {
            label: '',
            links: [
              {
                text: 'Jefferson County',
                href: 'https://www.jeffcohealth.org/community-resources',
              },
            ],
          },
          {
            label: '',
            links: [
              {
                text: 'Franklin County',
                href: 'https://extension.missouri.edu/locations/mu-extension-in-franklin-county',
              },
            ],
          },
          {
            label: '',
            links: [{ text: 'Lincoln County', href: 'http://www.lincolncountykids.org/reports/' }],
          },
        ],
      },
    ],
  },
  {
    id: 'food',
    emoji: '🍲',
    title: 'Food Assistance',
    groups: [
      {
        items: [
          {
            label: 'Faith Church Food Pantries',
            links: [{ text: '4 Locations', href: 'https://faithchurch.com/' }],
          },
          {
            label: 'Feed My People',
            phone: '314-631-4900',
            links: [
              {
                text: 'findhelp.org',
                href: 'https://www.findhelp.org/provider/feed-my-people--st.-louis-mo/5845924263755776?postal=63129',
              },
            ],
            text: '– 18 programs in various resource areas',
          },
          {
            label: 'Fit & Food Connection',
            phone: '314-649-7367',
            links: [
              { text: 'fitandfoodconnection.org', href: 'https://www.fitandfoodconnection.org/' },
            ],
            text: '– Food Assistance Hotline',
          },
          {
            label: 'Food Pantry Locator',
            links: [
              {
                text: 'Find pantries',
                href: 'https://stlfoodbank.org/find-food/pantry-locations/',
              },
            ],
          },
          {
            label: 'Mercy Food Pantry Lists',
            links: [
              {
                text: 'City PDF',
                href: 'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/food-pantries-st-louis-city.pdf',
              },
              {
                text: 'County PDF',
                href: 'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/food-pantry-resources-st-louis-county.pdf',
              },
            ],
          },
          {
            label: 'MO Food Programs',
            links: [
              {
                text: 'health.mo.gov',
                href: 'https://health.mo.gov/living/wellness/nutrition/foodprograms/',
              },
            ],
          },
          {
            label: 'Operation Food Search',
            phone: '314-726-5355',
            links: [
              { text: 'Find Food', href: 'https://www.operationfoodsearch.org/find-food/' },
              {
                text: 'operationfoodsearch.org',
                href: 'https://www.operationfoodsearch.org/',
              },
              {
                text: 'Nourishing Healthy Starts',
                href: 'https://www.operationfoodsearch.org/nourishing-healthy-starts/',
              },
            ],
            text: '– Fresh Food & Support for Expectant Mothers & Their Families',
          },
          {
            label: 'Salvation Army – St. Louis',
            links: [
              { text: 'City', href: 'https://www.salvationarmyusa.org/mo/saint-louis/' },
              {
                text: 'County',
                href: 'https://www.google.com/search?q=salvation+army++st+louis+county+missouri',
              },
            ],
          },
          {
            label: 'SkillUP',
            links: [
              {
                text: 'Missouri SkillUP Program',
                href: 'https://mydss.mo.gov/skillup-program',
              },
            ],
            text: '– A free program that helps SNAP (Food Stamp) recipients get help with skills, training, and employer connections to get a job (or a better job)',
          },
          {
            label: 'SNAP (Food Stamp Program)',
            links: [
              {
                text: 'Apply for SNAP',
                href: 'https://mydss.mo.gov/food-assistance/apply-for-snap',
              },
            ],
            text: '– The Supplemental Nutrition Assistance Program (SNAP) offers a monthly benefit to help you buy food and food products, such as seeds and plants to grow food',
          },
          {
            label: 'St. Louis Area Food Bank',
            phone: '314-292-6262',
            links: [{ text: 'stlfoodbank.org', href: 'https://stlfoodbank.org/' }],
          },
          {
            label: 'Urban League of Metro St. Louis Food Pantries',
            links: [
              {
                text: 'Food & Clothing Assistance - ULSTL',
                href: 'https://www.ulstl.com/food--clothing-assistance.html',
              },
            ],
            text: '– City Food & Clothing 314-615-3642, County Food Assistance 314-388-9840, St. Clair County Food & Clothing 618-274-1150',
          },
          {
            label: 'WIC Missouri',
            phone: '314-814-8700',
            links: [{ text: 'WIC', href: 'https://health.mo.gov/living/families/wic/' }],
            text: '– Special Supplemental Nutrition Program for Women, Infants, & Children',
          },
        ],
      },
    ],
  },
  {
    id: 'housing',
    emoji: '🏠',
    title: 'Housing & Shelter',
    groups: [
      {
        items: [
          {
            label: 'Beyond Housing',
            phone: '314-533-0600',
            links: [{ text: 'beyondhousing.org', href: 'https://beyondhousing.org/' }],
          },
          {
            label: 'Catholic Charities',
            phone: '314-367-5500',
            links: [{ text: 'Housing', href: 'https://ccstl.org/services/housing/' }],
          },
          {
            label: 'Covenant House',
            phone: '314-533-2241',
            links: [{ text: 'Youth', href: 'https://www.covenanthousemo.org/' }],
            text: '– Runaway, Trafficked, At Risk, or Homeless',
          },
          {
            label: 'DePaul USA St. Louis',
            phone: '314-349-1651',
            links: [{ text: 'Programs', href: 'https://depaulusa.org/programs' }],
          },
          {
            label: 'Gateway 180',
            phone: '314-802-5444',
            links: [{ text: 'Housing Resource Hotline', href: 'https://gateway180.org/' }],
          },
          {
            label: 'Good Shepherd',
            phone: '314-854-5700',
            links: [{ text: 'Home – Good Shepherd', href: 'https://goodshepherdstl.org/' }],
            text: '– Catholic Charities. Connecting Children with Families & Keeping Families Connected',
          },
          {
            label: 'Help and Housing for Single Mothers',
            links: [
              {
                text: 'Information',
                href: 'https://www.bing.com/search?q=help+and+housing+for+single+mothers+st+louis+mo',
              },
            ],
          },
          {
            label: 'Help for Youth',
            links: [
              {
                text: 'Site',
                href: 'https://www.stlouis-mo.gov/live-work/community/help/youth.cfm',
              },
            ],
            text: '– Housing, Education, Substance Use, Employment & more',
          },
          {
            label: 'Home Sweet Home',
            links: [
              {
                text: 'Partner list',
                href: 'https://homesweethomestl.org/partner-agencies/',
              },
            ],
            text: '(partner agency required) – Furniture for underserved families in St. Louis',
          },
          {
            label: 'Homeless & Shelter Resources',
            links: [
              {
                text: 'Mercy PDF',
                href: 'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/homeless-and-shelter-resources.pdf',
              },
            ],
          },
          {
            label: 'Homeless Hotline & Shelter Resources',
            phone: '314-802-5444',
            links: [
              {
                text: 'St. Louis City & County',
                href: 'https://houseeveryonestl.org/resources-shelter/',
              },
            ],
          },
          {
            label: 'Homeless Services',
            phone: '314-657-1704',
            links: [
              {
                text: 'City of St. Louis',
                href: 'https://www.stlouis-mo.gov/homeless-services/index.cfm',
              },
            ],
          },
          {
            label: 'Homeless Shelter Directory',
            links: [{ text: 'Find shelters', href: 'https://www.homelessshelterdirectory.org/' }],
          },
          {
            label: 'Housing Assistance for Single Mothers in Missouri',
            links: [
              {
                text: 'Information',
                href: 'https://www.asinglemother.org/housing-assistance-in-missouri/',
              },
            ],
          },
          {
            label: 'Housing/Foreclosure Resources',
            links: [
              {
                text: 'Mercy PDF',
                href: 'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/housing-foreclosure-resources.pdf',
              },
            ],
          },
          {
            label: 'Maternity Homes Missouri',
            links: [
              {
                text: 'Qualified Maternity Homes (PDF)',
                href: 'https://dss.mo.gov/dfas/taxcredit/pdf/qualified-maternity-homes.pdf',
              },
            ],
            text: '– List of qualified Missouri maternity homes',
          },
          {
            label: 'Missouri Housing Resources',
            phone: '573-751-9206',
            links: [{ text: 'Housing', href: 'https://dmh.mo.gov/housing/unit/housing-resources' }],
          },
          {
            label: 'MO Affordable Housing Locator',
            links: [
              {
                text: 'Search',
                href: 'https://mhdc.com/programs/asset-management/affordable-housing-locator/',
              },
            ],
          },
          {
            label: 'MO Rental Assistance Program',
            links: [{ text: 'Details', href: 'https://dmh.mo.gov/housing/unit/rental-assistance' }],
            text: '– One-time help',
          },
          {
            label: "Our Lady's Inn (Maternity Home)",
            phone: '314-351-4590',
            links: [{ text: 'ourladysinn.org', href: 'https://ourladysinn.org/' }],
            text: '– Safe haven for women & children in need of housing services. StL City & County 314-351-4590, St. Charles Inn 636-398-5375',
          },
          {
            label: 'Peter & Paul Community Services',
            phone: '314-588-7111',
            links: [{ text: 'ppcsinc.org', href: 'https://ppcsinc.org/' }],
            text: '– Helps people experiencing homelessness (Dial 211 for referral)',
          },
          {
            label: 'Rent Assistance for Single Moms in Missouri',
            links: [
              {
                text: 'Information',
                href: 'https://singlemother-grant.com/rent-assistance-for-single-moms-missouri/',
              },
            ],
          },
          {
            label: 'Room at the Inn',
            phone: '314-209-9181',
            links: [{ text: 'Housing', href: 'https://www.roomstl.org/' }],
            text: '– Shelter for Families, Bridgeton, MO',
          },
          {
            label: 'Shelter & Services for Women & Their Children',
            links: [
              {
                text: 'Catholic Charities',
                href: 'https://ccstl.org/services/family-child-care/shelter-and-services-for-women-and-their-children/',
              },
            ],
          },
          {
            label: 'State Assistance for Housing Relief',
            links: [{ text: 'Apply', href: 'https://safhr.smapply.org/res/p/SAFHR/' }],
            text: '(past-due rent, forward rent, utilities)',
          },
          {
            label: 'St. Joseph Housing Initiative',
            phone: '314-471-0282',
            links: [{ text: 'Housing', href: 'https://www.stjosephhousing.org/' }],
            text: '– Affordable housing low/moderate income',
          },
          {
            label: 'St. Louis City Affordable Housing',
            phone: '314-657-3880',
            links: [
              { text: 'Info', href: 'https://www.stlouis-mo.gov/affordable-housing/index.cfm' },
            ],
          },
          {
            label: 'St. Louis City Warming Centers & Shelters',
            links: [
              {
                text: 'stlouis-mo.gov',
                href: 'https://www.stlouis-mo.gov/live-work/warming-centers.cfm',
              },
            ],
          },
          {
            label: 'St. Louis County Housing',
            phone: '314-428-3200',
            links: [{ text: 'countyhousing.org', href: 'https://countyhousing.org/' }],
          },
          {
            label: 'St. Louis Housing Authority',
            phone: '314-531-4770',
            links: [{ text: 'slha.org', href: 'https://www.slha.org/' }],
          },
          {
            label: 'St. Patrick Center',
            phone: '314-802-0700',
            links: [{ text: 'Programs', href: 'https://www.stpatrickcenter.org/programs' }],
            text: '(food, homeless, jobs, shelter)',
          },
          {
            label: 'Supportive Housing Program',
            phone: '314-615-4450',
            links: [
              {
                text: 'StL County',
                href: 'https://stlouiscountymo.gov/st-louis-county-departments/human-services/supportive-housing-program/',
              },
            ],
            text: '– Homeless or having crisis. Call Emergency Shelter Hotline 314-802-4450. St. Louis City/StL County work together/help find a program',
          },
          {
            label: 'Transitional Living & Temporary Shelter Services',
            links: [
              {
                text: 'Housing',
                href: 'https://stlcsf.org/find-a-service/temporary-shelter-and-transitional-living/',
              },
              { text: 'Find a Service', href: 'https://stlcsf.org/find-a-service/' },
            ],
          },
          {
            label: 'United Way 211 – Housing Help',
            phone: '211',
            links: [
              {
                text: 'Housing-Expenses',
                href: 'https://www.211.org/get-help/housing-expenses',
              },
            ],
            text: '– Immediate need of shelter',
          },
        ],
      },
    ],
  },
  {
    id: 'medical',
    emoji: '⚕️',
    title: 'Medical, Dental & Vision',
    groups: [
      {
        items: [
          {
            label: 'Affinia Healthcare',
            phone: '314-814-8700',
            links: [{ text: 'affiniahealthcare.org', href: 'https://affiniahealthcare.org/' }],
          },
          {
            label: 'Apply for Medicaid (MO HealthNet)',
            links: [{ text: 'mydss.mo.gov/healthcare', href: 'https://mydss.mo.gov/healthcare' }],
          },
          {
            label: 'Birthright (Pregnancy / Birthright Counseling)',
            phone: '314-298-0945',
            links: [{ text: 'birthrightstl.org', href: 'https://birthrightstl.org/' }],
          },
          {
            label: 'Casa de Salud',
            phone: '314-977-1250',
            links: [{ text: 'casadesaludstl.org', href: 'https://www.casadesaludstl.org/' }],
            text: '– Help for the immigrant & refugee community of St. Louis',
          },
          {
            label: 'Dental Clinics (Greater St. Louis Dental Society)',
            links: [
              {
                text: 'Low-Cost Dental Care',
                href: 'https://www.greaterstlouisdentalsociety.org/for-the-public/low-cost-dental-care/dental-clinics',
              },
            ],
          },
          {
            label: 'Dental Resources St. Louis Area',
            links: [
              {
                text: 'Mercy PDF',
                href: 'https://www.mercy.net/content/dam/mercy/en/pdf/Dental-Resources-St-Louis.pdf',
              },
            ],
          },
          {
            label: 'Dental Services (Locate Low-Cost)',
            links: [
              {
                text: 'health.mo.gov',
                href: 'https://health.mo.gov/living/families/oralhealth/low-cost.php',
              },
            ],
          },
          {
            label: 'Family Care Health Centers',
            phone: '314-834-2277',
            links: [
              {
                text: 'familycarehealthcenters.org',
                href: 'https://familycarehealthcenters.org/',
              },
            ],
          },
          {
            label: 'Find a Health Center (Primary, Oral, Behavioral)',
            links: [{ text: 'mo-pca.org', href: 'https://mo-pca.org/find-a-health-center/' }],
          },
          {
            label: 'Free Clinics Near Me St. Louis MO',
            links: [
              { text: 'Free Clinics Near Me', href: 'https://benefitsexplorer.com/free-clinics' },
            ],
            text: '– Health, Dental, Vision & more',
          },
          {
            label: 'Free Clinics St. Louis MO',
            links: [
              {
                text: 'St Louis, MO Free Clinics',
                href: 'https://www.freeclinics.com/cit/mo-st_louis',
              },
            ],
          },
          {
            label: 'Free Eye Care Service (Washington University Medicine)',
            links: [
              {
                text: 'WashU Medicine Free Eye Service',
                href: 'https://ophthalmology.wustl.edu/patient-care/washu-medicine-free-eye-service/',
              },
            ],
          },
          {
            label: 'Health Center Services (St. Louis County)',
            links: [
              {
                text: 'Services & Fees',
                href: 'https://clinics.stlouiscountymo.gov/services-and-fees/',
              },
            ],
          },
          {
            label: 'Health Department (City of St. Louis)',
            links: [
              {
                text: 'stlouis-mo.gov',
                href: 'https://www.stlouis-mo.gov/government/departments/health/index.cfm',
              },
            ],
          },
          {
            label: 'Medical Equipment',
            links: [
              {
                text: 'Mercy PDF',
                href: 'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/medical-equipment-resources.pdf',
              },
            ],
          },
          {
            label: 'Mercy Eye Care / Vision Resources',
            links: [
              {
                text: 'Mercy PDF',
                href: 'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/eye-care-vision-resources.pdf',
              },
            ],
          },
          {
            label: 'MO Low-Cost Dental Services',
            links: [
              {
                text: 'Locator',
                href: 'https://health.mo.gov/living/families/oralhealth/low-cost.php',
              },
            ],
          },
          {
            label: 'MO Rx Plan',
            phone: '855-694-4663',
            links: [
              {
                text: 'MO RX Plan',
                href: 'https://mydss.mo.gov/mhd/morx-pharmacist-faqs',
              },
            ],
          },
          {
            label: 'MO TEL-LINK (health resources)',
            phone: '800-835-5465',
            links: [
              {
                text: 'health.mo.gov/tellink',
                href: 'https://health.mo.gov/living/families/tellink/',
              },
            ],
          },
          {
            label: 'Prescription Assistance',
            links: [
              {
                text: 'Mercy list',
                href: 'https://www.mercy.net/content/dam/mercy/en/pdf/prescription-assistance-resources.pdf',
              },
            ],
          },
          {
            label: 'Prescription & OTC Drop-Off',
            links: [
              {
                text: 'Sites',
                href: 'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/prescription-and-otc-medication-drop-off-sites.pdf',
              },
            ],
          },
          {
            label: 'Volunteers in Medicine Crossroads Clinic',
            phone: '636-561-3133',
            links: [
              { text: 'Crossroads Clinic - VIM', href: 'https://www.crossroadsclinicvim.org/' },
            ],
            text: '– Serves the medical needs of western St. Charles, Warren, Lincoln and Montgomery County residents who are not covered by Medicare, Medicaid or private insurance and who live at or below 200% of the federal poverty guidelines. Free Clinic visits by appointment only.',
          },
          {
            label: 'Volunteers in Medicine St. Charles & Lincoln Counties in MO',
            phone: '636-724-4848',
            links: [{ text: 'VIMSTC', href: 'https://www.volunteersinmedicinestcharles.org/' }],
          },
          {
            label: 'Volunteers in Medicine West County Clinic',
            phone: '636-207-5970',
            links: [{ text: 'VIM West County Clinic', href: 'https://www.vimwestco.org/' }],
          },
          {
            label: 'WIC Resources',
            links: [
              {
                text: 'Mercy PDF',
                href: 'https://www.mercy.net/content/dam/mercy/en/pdf/wic_resources_-_st_louis_city_and_county_17.pdf',
              },
            ],
            text: '– St. Louis City & County',
          },
          {
            label: "Women's Health Services (Mercy)",
            phone: '314-872-9192',
            links: [
              {
                text: 'mercy.net/womens-health',
                href: 'https://www.mercy.net/service/womens-health/',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'mental-health',
    emoji: '🧠',
    title: 'Mental Health & Crisis',
    groups: [
      {
        items: [
          {
            label: '988 Suicide & Crisis Lifeline',
            phone: '988',
            links: [{ text: '988lifeline.org', href: 'https://988lifeline.org/' }],
            text: '– Call or text 988',
          },
          {
            label: 'BJC Behavioral Health',
            links: [
              { text: 'bjcbehavioralhealth.org', href: 'https://www.bjcbehavioralhealth.org/' },
            ],
          },
          {
            label: 'Catholic Charities',
            phone: '314-367-5500',
            links: [{ text: 'Site', href: 'https://www.ccstl.org/' }],
            text: '– Mental Health & Wellness, Addiction Recovery',
          },
          {
            label: 'Children & Teens Services (MO Dept. of Mental Health)',
            links: [
              { text: 'Children & Teens', href: 'https://dmh.mo.gov/children-services/child-teen' },
              { text: "Children's Services", href: 'https://dmh.mo.gov/children-services' },
            ],
          },
          {
            label: 'Crisis Care Missouri Dept. of Social Services (DSS)',
            links: [
              {
                text: 'Locations',
                href: 'https://www.findhelp.org/missouri-department-of-social-services-%2528dss%2529--st.-louis-mo--crisis-care/5479607690133504?postal=63134',
              },
            ],
          },
          {
            label: 'Mental Health Centers & Crisis Hotlines (StL County)',
            links: [
              {
                text: 'List',
                href: 'https://stlouiscountymo.gov/st-louis-county-departments/public-health/substance-use-resources/general-resources/mental-health-centers-and-crisis-lifelines/',
              },
              { text: 'Contact Us', href: 'https://dss.mo.gov/dss_map/' },
            ],
          },
          {
            label: 'Mental Health Resources for Self-Care',
            links: [
              {
                text: 'Self-Care Resources',
                href: 'https://www.stlouis-mo.gov/government/departments/health/behavioral-health/self-care-resources.cfm',
              },
            ],
          },
          {
            label: 'Mercy Mental Health Resources',
            links: [
              {
                text: 'Mercy PDF',
                href: 'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/mental-health-resources-in-st-louis.pdf',
              },
            ],
          },
          {
            label: 'Missouri Dept. of Mental Health',
            phone: '800-364-9687',
            links: [{ text: 'dmh.mo.gov', href: 'https://dmh.mo.gov/' }],
          },
          {
            label: 'Missouri Mental Health Hotline',
            phone: '866-903-3787',
            links: [
              {
                text: 'mentalhealthhotline.org/missouri',
                href: 'https://mentalhealthhotline.org/missouri/',
              },
            ],
          },
          {
            label: 'Safe Place',
            links: [
              {
                text: 'Find a Safe Place',
                href: 'https://www.nationalsafeplace.org/find-a-safe-place',
              },
            ],
            text: '– Youth crisis help',
          },
          {
            label: 'St. Louis Behavioral Medicine Institute',
            phone: '314-289-9411',
            links: [{ text: 'slbmi.com', href: 'https://slbmi.com/' }],
          },
          {
            label: "St. Louis Children's Psychiatric Center",
            phone: '800-678-5437',
            links: [
              {
                text: 'Site',
                href: 'https://www.stlouischildrens.org/conditions-treatments/psychiatry-center',
              },
            ],
          },
          {
            label: 'Substance Use Resources',
            links: [
              {
                text: 'Mercy PDF',
                href: 'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/substance-use-resources.pdf',
              },
            ],
          },
          {
            label: 'The Spot',
            phone: '314-535-0413',
            links: [{ text: 'thespot.wustl.edu', href: 'https://thespot.wustl.edu/' }],
            text: '– Supporting Positive Opportunities with Teens',
          },
          {
            label: 'Veterans Crisis Line',
            phone: '988',
            links: [
              { text: 'veteranscrisisline.net', href: 'https://www.veteranscrisisline.net/' },
            ],
            text: '– Dial 988, press 1',
          },
        ],
      },
    ],
  },
  {
    id: 'utilities',
    emoji: '💡',
    title: 'Utilities & Rent Assistance',
    groups: [
      {
        items: [
          {
            label: 'Ameren Clean Slate',
            links: [
              { text: 'Clean Slate', href: 'https://www.ameren.com/bill/assistance/clean-slate' },
            ],
            text: '– For gas customers who have past due accounts',
          },
          {
            label: 'Community Action Agency StL County',
            phone: '314-863-0015',
            links: [{ text: 'caastlc.org', href: 'https://www.caastlc.org/' }],
            text: '(Utilities, Housing, Weatherization, Reentry, Immigrants, Mental Health)',
          },
          {
            label: 'Dial 211 – Utility Help',
            links: [
              {
                text: '211.org/get-help/utilities-expenses',
                href: 'https://www.211.org/get-help/utilities-expenses',
              },
            ],
          },
          {
            label: 'Energy Efficiency Programs MO',
            links: [
              {
                text: 'psc.mo.gov',
                href: 'https://psc.mo.gov/General/Energy_Efficiency_Assistance_Programs',
              },
            ],
          },
          {
            label: "Father Bob's Outreach",
            phone: '314-385-1934',
            links: [{ text: "Father Bob's Outreach", href: 'https://www.fatherbobsoutreach.com/' }],
            text: '(St Augustine Parish, Mon-Wed-Fri, bring $25, ID, utility bill/rental agreement, first 30 at 6am)',
          },
          {
            label: 'Find Community Action Agencies',
            links: [
              {
                text: 'Get Help - Missouri Community Action Network',
                href: 'https://www.communityaction.org/get-help.html',
              },
            ],
          },
          {
            label: 'Get Help Paying Bills & Rent',
            links: [
              {
                text: 'Help for Renters',
                href: 'https://www.consumerfinance.gov/housing/housing-insecurity/help-for-renters/get-help-paying-rent-and-bills/',
              },
            ],
          },
          {
            label: 'LIHEAP Clearinghouse (all utilities)',
            links: [
              {
                text: 'Missouri profile',
                href: 'https://liheapch.acf.gov/profiles/Missouri.htm',
              },
            ],
          },
          {
            label: 'LIHEAP (Low Income Energy Assistance)',
            links: [
              {
                text: 'mydss.mo.gov/utility-assistance',
                href: 'https://mydss.mo.gov/utility-assistance',
              },
            ],
          },
          {
            label: 'Missouri Financial Help Directory',
            links: [
              {
                text: 'Directory',
                href: 'https://www.oacra.com/find-services/missouri-financial-help',
              },
            ],
            text: '– Financial Assist, Emergency aid, Rent, Utility, Reentry',
          },
          {
            label: 'Rental Assistance Program',
            links: [
              {
                text: 'Missouri Dept. of Mental Health',
                href: 'https://dmh.mo.gov/housing/unit/rental-assistance',
              },
            ],
          },
          {
            label: 'Sewer Assistance',
            links: [
              {
                text: 'Mercy PDF',
                href: 'https://www.mercy.net/content/dam/mercy/en/pdf/sewer-assistance-resource.pdf',
              },
            ],
          },
          {
            label: 'Utility & Rent Assistance',
            links: [
              {
                text: 'Mercy PDF',
                href: 'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/utility-and-rent-assistance-st-louis-city-and-county.pdf',
              },
            ],
          },
          {
            label: 'Weatherization Assistance',
            links: [
              {
                text: 'Missouri Dept. of Natural Resources',
                href: 'https://dnr.mo.gov/energy/weatherization',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'jobs',
    emoji: '💼',
    title: 'Jobs, Education & Training',
    groups: [
      {
        heading: 'Job Openings',
        items: [
          {
            label: 'AARP Jobs Search',
            links: [
              {
                text: 'Job Search - Tools and Resources',
                href: 'https://www.aarp.org/work/job-search/',
              },
            ],
            text: '– To help you find a job at 50+',
          },
          {
            label: 'Catholic Charities Workforce',
            phone: '314-377-0495',
            links: [
              {
                text: 'Workforce Development',
                href: 'https://ccstl.org/services/workforce-development/',
              },
            ],
          },
          {
            label: 'City of St. Louis Jobs Board',
            links: [
              {
                text: 'Current Job Openings',
                href: 'https://www.stlouis-mo.gov/government/departments/personnel/jobs/openings/index.cfm',
              },
            ],
          },
          {
            label: 'Employment & Training Resources',
            links: [
              {
                text: 'Mercy PDF',
                href: 'https://www.mercy.net/content/dam/mercy/en/pdf/Employment-and-Training-Resources.pdf',
              },
            ],
          },
          {
            label: 'Employment Connection',
            phone: '314-333-5627',
            links: [
              {
                text: 'Job-Seekers',
                href: 'https://www.employmentstl.org/job-seekers',
              },
            ],
          },
          {
            label: 'Indeed, St. Louis MO',
            links: [
              {
                text: 'Jobs in St. Louis, MO',
                href: 'https://www.indeed.com/l-St.-Louis,-MO-jobs.html',
              },
            ],
          },
          {
            label: 'Job Center (City) SLATE',
            phone: '314-589-8000',
            links: [
              {
                text: 'SLATE',
                href: 'https://jobs.mo.gov/job-centers/st-louis-city-slate-job-center',
              },
            ],
            text: '– 1520 Market St, Suite 3050, St. Louis, MO 63103',
          },
          {
            label: 'Job Center (County) Ferguson',
            phone: '314-244-8020',
            links: [
              {
                text: 'Ferguson',
                href: 'https://jobs.mo.gov/job-centers/st-louis-county-ferguson-job-center',
              },
            ],
            text: '– 2900 Pershall Rd, Suite 166, St. Louis, MO 63136',
          },
          {
            label: 'Job Center MET Center',
            phone: '314-377-0445',
            links: [
              {
                text: 'MET Center',
                href: 'https://jobs.mo.gov/job-centers/st-louis-county-job-center-met-center',
              },
              {
                text: 'Industrial certification programs',
                href: 'https://stl.works/resources/met-center-industrial-certification-program/',
              },
            ],
          },
          {
            label: 'Job Centers Missouri',
            links: [
              { text: 'Find a location', href: 'https://jobs.mo.gov/job-centers' },
              { text: 'Request Job Center Services', href: 'https://jobs.mo.gov/' },
            ],
          },
          {
            label: 'Job Help & Career Building',
            links: [
              {
                text: 'St. Louis County Library',
                href: 'https://www.slcl.org/research-learn/job-help-career-building',
              },
            ],
          },
          {
            label: 'Job Search Guide',
            links: [{ text: 'StL County Library', href: 'https://slcl.libguides.com/jobs' }],
          },
          {
            label: 'Jobs',
            links: [{ text: 'St. Louis Post-Dispatch', href: 'https://jobs.stltoday.com/' }],
          },
          {
            label: 'Mercy Employment & Training',
            links: [
              {
                text: 'Mercy PDF',
                href: 'https://www.mercy.net/content/dam/mercy/en/pdf/Employment-and-Training-Resources.pdf',
              },
            ],
          },
          {
            label: 'Missouri Occupational Projections',
            links: [
              {
                text: 'meric.mo.gov',
                href: 'https://meric.mo.gov/data/occupation/occupational-projections',
              },
            ],
          },
          {
            label: 'MoJobs',
            phone: '866-506-0251',
            links: [
              {
                text: "Missouri's Job Search Resource",
                href: 'https://app-jobs.mo.gov/vosnet/Default.aspx',
              },
            ],
            text: '– Call for Immediate Assistance',
          },
          {
            label: 'Occupational Outlook Handbook: Occupation Finder',
            links: [{ text: 'bls.gov', href: 'https://www.bls.gov/ooh/occupation-finder.htm' }],
          },
          {
            label: 'St. Louis City Employment Help',
            links: [
              {
                text: 'City site',
                href: 'https://www.stlouis-mo.gov/live-work/community/help/employment.cfm',
              },
            ],
          },
          {
            label: 'St. Louis County Workforce',
            links: [
              { text: 'Your Next Step', href: 'https://www.stlcowd.org/' },
              {
                text: 'St. Louis County, Missouri Careers',
                href: 'https://www.governmentjobs.com/careers/stlouis',
              },
            ],
          },
          {
            label: 'St. Louis Jobs Line',
            links: [
              { text: 'Find Jobs in St Louis, MO', href: 'https://www.stlouisjobsline.com/' },
            ],
          },
          {
            label: 'Urban League Employment',
            links: [
              {
                text: 'Employment Services - ULSTL',
                href: 'https://www.ulstl.com/employment-services.html',
              },
            ],
          },
        ],
      },
      {
        heading: 'Education & Training Programs',
        items: [
          {
            label: 'Apprenticeship USA',
            links: [{ text: 'Apprenticeship.gov', href: 'https://www.apprenticeship.gov/' }],
          },
          {
            label: 'Apprenticeships Missouri',
            links: [
              {
                text: 'Missouri Registered Apprenticeships',
                href: 'https://jobs.mo.gov/moapprenticeships',
              },
            ],
          },
          {
            label: 'CareerOneStop',
            links: [
              {
                text: 'Career Exploration, Training, & Jobs',
                href: 'https://www.careeronestop.org/',
              },
            ],
          },
          {
            label: 'Construction Cooperative',
            phone: '314-880-2063',
            links: [
              {
                text: 'Saint Louis Construction Cooperative',
                href: 'https://stlouisconstructioncooperative.org/',
              },
            ],
          },
          {
            label: 'Job Corps (ages 18-24)',
            phone: '800-733-5627',
            links: [{ text: 'Job Corps | St. Louis', href: 'https://stlouis.jobcorps.gov/' }],
            text: '– Many training programs',
          },
          {
            label: 'LaunchCode',
            phone: '314-254-0107',
            links: [
              {
                text: 'Building an AI-ready workforce',
                href: 'https://www.launchcode.org/',
              },
            ],
            text: '– Free education/job placement info-tech',
          },
          {
            label: 'List of Accredited Nursing Schools in Missouri',
            links: [
              {
                text: 'List',
                href: 'https://www.nursingschoolsalmanac.com/articles/list-accredited-nursing-schools-missouri',
              },
            ],
          },
          {
            label: 'List of Trades Careers',
            links: [{ text: 'List', href: 'https://bluecollarbrain.com/list-of-skilled-trades/' }],
            text: '– Salary, Outlook, Job Skills, Location of Training Programs',
          },
          {
            label: 'MET Center',
            phone: '314-377-0445',
            links: [{ text: 'STL.works', href: 'https://stl.works/' }],
            text: '– Find St. Louis Jobs That Pay Well Without a Degree',
          },
          {
            label: 'Missouri Dept. of Higher Education Institutions',
            links: [
              {
                text: 'Find Schools & Programs that Interest You',
                href: 'https://dhewd.mo.gov/mo-higher-education-institutions',
              },
            ],
          },
          {
            label: 'Missouri Training & Education Beyond High School',
            links: [
              {
                text: 'Training and Education | JobsMoGov',
                href: 'https://jobs.mo.gov/jobseeker/training-and-education',
              },
            ],
          },
          {
            label: 'Missouri Work Assistance Program',
            phone: '855-373-4636',
            links: [
              {
                text: 'Missouri Work Assistance Program',
                href: 'https://mydss.mo.gov/missouri-work-assistance-program',
              },
              {
                text: 'Temporary Assistance',
                href: 'https://www.missouriworkassistancestl.net/contact',
              },
            ],
            text: '– Helps recipients become job ready (for St. Louis families 314-746-0800), gain work experience, & secure/keep employment',
          },
          {
            label: 'Missouri Works Initiative',
            phone: '573-536-2237',
            links: [
              {
                text: 'Economic & Job Opportunities',
                href: 'https://moworksinitiative.org/',
              },
              {
                text: 'Program Application',
                href: 'https://moworks.powerappsportals.com/Program-Application/',
              },
            ],
            text: '– Apprenticeship Ready Programs (Construction & Manufacturing), Dislocated Worker Program',
          },
          {
            label: 'MOScores',
            links: [
              {
                text: 'Education & Program Training Search',
                href: 'https://meric.mo.gov/data/moscores',
              },
            ],
          },
          {
            label: 'National Career Readiness Certificate',
            links: [
              {
                text: 'ACT WorkKeys',
                href: 'https://www.act.org/content/act/en/products-and-services/act-workkeys/act-workkeys-ncrc.html',
              },
            ],
          },
          {
            label: 'On-the-Job Training (OJT)',
            links: [{ text: 'OJT', href: 'https://jobs.mo.gov/jobseeker/ojt' }],
          },
          {
            label: 'Practical Nursing Program',
            links: [
              { text: 'appliedtech.edu', href: 'https://appliedtech.edu/' },
              { text: 'Locations', href: 'https://appliedtech.edu/locations/' },
            ],
            text: '– North Tech 314-989-7676, South Tech 314-989-7570',
          },
          {
            label: 'St. Louis College of Health Careers',
            phone: '636-529-0000',
            links: [{ text: 'StL College', href: 'https://slchc.edu/' }],
          },
          {
            label: 'St. Louis Community College',
            phone: '314-539-5151',
            links: [
              { text: 'All Programs', href: 'https://stlcc.edu/programs/' },
              {
                text: 'Career & Technical Education Programs',
                href: 'https://stlcc.edu/programs-academics/pathways/career-and-technical-education/',
              },
              {
                text: 'Short-Term Career Training',
                href: 'https://stlcc.edu/workforce/training-programs/',
              },
              {
                text: 'Skilled Trades Program',
                href: 'https://stlcc.edu/pathways/industrial/skilled-trades/',
              },
            ],
            text: '– Carpentry, Electrical Systems, Programmable Logic Controllers (PLC) & Robotics, Sheet Metal, Manufacturing Assembly & Production. Work Counseling – Call 314-539-5151 to make an appointment',
          },
          {
            label: 'Stl.works',
            links: [
              {
                text: 'Find St. Louis Jobs That Pay Well Without a Degree',
                href: 'https://stl.works/',
              },
            ],
          },
          {
            label: 'Ticket to Work (SSI/SSD)',
            phone: '314-621-6300',
            links: [{ text: 'ssa.gov/work', href: 'https://www.ssa.gov/work/' }],
            text: '– 18 – 64, & receive Social Security Disability & want to work',
          },
          {
            label: 'Vocational Rehabilitation',
            links: [
              {
                text: 'VR',
                href: 'https://dese.mo.gov/adult-learning-rehabilitation-services/vocational-rehabilitation',
              },
            ],
            text: '(Downtown 877-2940, North 475-7999, South 877-1900, West 587-4877) – We can help you if you have a disability & want to work. If you are a student with a disability we can help you prepare for the future',
          },
          {
            label: 'YouthBuild StL City',
            phone: '314-657-3519',
            links: [
              {
                text: 'Program page',
                href: 'https://www.stlouis-mo.gov/government/departments/slate/youth/youthbuild.cfm',
              },
            ],
          },
          {
            label: 'YouthBuild StL County',
            phone: '314-261-0202',
            links: [{ text: 'Info', href: 'https://www.cap4kids.org/stlouis/405180330/' }],
          },
        ],
      },
    ],
  },
  {
    id: 'transportation',
    emoji: '🚌',
    title: 'Transportation',
    groups: [
      {
        items: [
          {
            label: 'Mercy Transportation – StL City & County',
            links: [
              {
                text: 'Mercy PDF',
                href: 'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/transportation-resources-st-louis-city-and-st-louis-county.pdf',
              },
            ],
          },
          {
            label: 'Mercy Transportation – StL South',
            links: [
              {
                text: 'Mercy PDF',
                href: 'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/transportation-resources-st-louis-south.pdf',
              },
            ],
          },
          {
            label: 'Non-Emergency Medical Transport (MORIDES)',
            links: [{ text: 'morides.org', href: 'https://morides.org/search/' }],
          },
          {
            label: 'Metro Reduced Fare Application',
            links: [
              {
                text: 'Mercy PDF',
                href: 'https://www.mercy.net/content/dam/mercy/en/images/transportation_-_senior_metroreducedfareapplication2017.pdf',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'veterans',
    emoji: '🎖️',
    title: 'Veterans',
    groups: [
      {
        items: [
          {
            label: 'Dept of Veterans Affairs',
            phone: '800-698-2411',
            links: [{ text: 'va.gov', href: 'https://www.va.gov/' }],
          },
          {
            label: 'How to Apply for the GI Bill & Related Benefits',
            links: [{ text: 'Apply', href: 'https://www.va.gov/education/how-to-apply/' }],
          },
          {
            label: 'MO Veterans Benefits',
            phone: '573-751-3779',
            links: [
              {
                text: 'Benefits & Resources Guide',
                href: 'https://veteranbenefits.mo.gov/',
              },
            ],
          },
          {
            label: 'National Resource Directory',
            links: [{ text: 'NRD', href: 'https://nrd.gov/' }],
          },
          {
            label: 'Veteran & Military Transition Center',
            links: [{ text: 'CareerOneStop', href: 'https://www.careeronestop.org/veterans/' }],
          },
          {
            label: 'Veteran Disability Portal',
            phone: '800-877-8249',
            links: [
              {
                text: 'Disability Portal',
                href: 'https://disability.mo.gov/veterans-information.htm',
              },
            ],
            text: '(v/tty)',
          },
          {
            label: 'Veterans Education Missouri',
            links: [
              {
                text: 'Veterans Education',
                href: 'https://dese.mo.gov/adult-learning-rehabilitation-services/veterans-education',
              },
            ],
            text: '– Contacts & Phone Numbers',
          },
          {
            label: 'Veterans Resources',
            links: [
              {
                text: 'StL County Library',
                href: 'https://slcl.libguides.com/c.php?g=1288891&p=9480799',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'reentry',
    emoji: '🔓',
    title: 'Reentry Services',
    groups: [
      {
        items: [
          {
            label: 'CareerOneStop Reentry Finder',
            phone: '314-333-5627',
            links: [
              {
                text: 'Find programs',
                href: 'https://www.careeronestop.org/LocalHelp/EmploymentAndTraining/find-reentry-programs.aspx?location=St.%20Louis,%20MO',
              },
            ],
          },
          {
            label: 'Ex-Offender Resources',
            links: [
              {
                text: 'Mercy PDF',
                href: 'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/ex-offender-resources.pdf',
              },
            ],
          },
          {
            label: 'Find Reentry Programs (by State)',
            links: [{ text: 'Reentry Programs', href: 'https://www.reentryprograms.com/' }],
          },
          {
            label: 'Justice-Impacted Job Seekers',
            links: [
              {
                text: 'CareerOneStop',
                href: 'https://www.careeronestop.org/JusticeImpacted/default.aspx',
              },
            ],
          },
          {
            label: 'Missouri Reentry Process (MRP)',
            links: [
              {
                text: 'MRP',
                href: 'https://doc.mo.gov/programs/missouri-reentry-process',
              },
            ],
          },
          {
            label: 'MO Dept. of Corrections Reentry',
            links: [
              {
                text: 'Career & Technical Training',
                href: 'https://doc.mo.gov/programs/education/career-technical',
              },
            ],
          },
          {
            label: 'One-on-One Advising with a Social Worker',
            phone: '314-994-3300',
            links: [
              {
                text: 'Book a Social Worker | St. Louis County Library',
                href: 'https://www.slcl.org/library-services/social-workers/book-a-social-worker',
              },
            ],
            text: '– or request appointment on-line',
          },
          {
            label: 'Reentry St. Louis',
            phone: '314-200-5211',
            links: [{ text: 'Getting out of prison', href: 'https://www.restl.org/' }],
          },
          {
            label: 'St. Louis Alliance for Reentry',
            phone: '314-534-0055',
            links: [{ text: 'STL Reentry', href: 'https://stlarchs.org/stl-reentry/' }],
          },
          {
            label: 'Start Here',
            links: [{ text: 'startherestl.org', href: 'https://www.startherestl.org/' }],
          },
        ],
      },
    ],
  },
  {
    id: 'childcare',
    emoji: '👶',
    title: 'Child Care',
    groups: [
      {
        items: [
          {
            label: 'Child & Crisis Care Resources',
            links: [
              {
                text: 'Mercy PDF',
                href: 'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/child-and-crisis-care-resources-st-louis-and-surrounding-areas.pdf',
              },
            ],
            text: '– St. Louis & Surrounding Areas',
          },
          {
            label: 'Child Care Aware of Missouri',
            links: [
              {
                text: 'State Assistance Resources',
                href: 'https://mochildcareaware.org/cckmw-state-assistance/',
              },
            ],
          },
          {
            label: 'Child Care & Helpful Resources',
            links: [{ text: 'childcare.gov', href: 'https://childcare.gov/' }],
          },
          {
            label: 'Crisis Care Help for Families',
            links: [
              {
                text: 'Crisis Care Locations & Phone Numbers',
                href: 'https://dss.mo.gov/cd/child-care/help-for-families/crisis-help-for-families.htm',
              },
            ],
            text: '– Temporary care for children birth to 18yrs: City 314-340-7007, StL County 314-264-7700',
          },
          {
            label: 'Missouri Family Resources & Child Care Assistance',
            links: [
              {
                text: 'Helpful Family Resources',
                href: 'https://united4children.org/resource-and-referral/',
              },
            ],
          },
          {
            label: "Missouri's Early Care & Education Connections",
            links: [{ text: 'earlyconnections.mo.gov', href: 'https://earlyconnections.mo.gov/' }],
          },
          {
            label: 'MO Parent Education Program',
            phone: '573-751-4212',
            links: [
              {
                text: 'Site',
                href: 'https://dese.mo.gov/childhood/home-visiting/parent-education',
              },
            ],
            text: '– Home Visiting 573-522-2355',
          },
          {
            label: 'The Haven of Grace',
            phone: '314-621-6507',
            links: [{ text: 'Site', href: 'https://www.havenofgracestl.org/' }],
            text: '– Serves women & mothers (unhoused) w/hope & home',
          },
        ],
      },
    ],
  },
  {
    id: 'legal',
    emoji: '⚖️',
    title: 'Legal Aid',
    groups: [
      {
        items: [
          {
            label: 'Arch City Defenders (St. Louis)',
            phone: '314-361-8834',
            links: [
              {
                text: 'ArchCity Defenders - Legal Aid Services',
                href: 'https://www.legalaidoffices.com/details/mo_63103_archcity-defenders',
              },
              {
                text: 'Missouri Legal Aid Offices',
                href: 'https://www.legalaidoffices.com/state/missouri',
              },
            ],
          },
          {
            label: 'Catholic Charities',
            links: [{ text: 'Legal Aid', href: 'https://ccstl.org/services/legal-aid/' }],
          },
          {
            label: 'Immigration Legal Help (International Institute)',
            phone: '314-773-9090',
            links: [{ text: 'International Institute', href: 'https://www.iistl.org/' }],
            text: 'ext. 115',
          },
          {
            label: 'Legal Assistance Resources',
            links: [
              {
                text: 'Mercy PDF',
                href: 'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/legal-assistance-resources-st-louis-area.pdf',
              },
            ],
            text: '– St. Louis Area',
          },
          {
            label: 'Legal Services of Eastern Missouri',
            phone: '800-444-0514',
            links: [{ text: 'lsem.org', href: 'https://lsem.org/' }],
          },
        ],
      },
    ],
  },
  {
    id: 'seniors',
    emoji: '👴',
    title: 'Seniors',
    groups: [
      {
        items: [
          {
            label: 'Area Agencies on Aging & Services',
            links: [
              {
                text: 'Many Services for Seniors',
                href: 'https://health.mo.gov/seniors/aaa/',
              },
            ],
          },
          {
            label: 'Catholic Charities',
            links: [{ text: 'Senior Care', href: 'https://ccstl.org/services/senior-care/' }],
          },
          {
            label: 'Center for Aging',
            phone: '314-747-9234',
            links: [
              {
                text: 'St. Louis/Missouri Community Resources',
                href: 'https://sites.wustl.edu/centerforaging/education-research/resources/',
              },
            ],
          },
          {
            label: 'Missouri Area Offices on Aging',
            links: [
              {
                text: 'Missouri Area',
                href: 'https://health.mo.gov/seniors/pdf/AAARegion.pdf',
              },
            ],
          },
          {
            label: 'MO Dept of Health & Senior Services',
            phone: '573-751-6400',
            links: [{ text: 'health.mo.gov', href: 'https://health.mo.gov/' }],
          },
          {
            label: 'Retirement Guide',
            links: [
              {
                text: 'Missouri Senior Resource Guide',
                href: 'https://slcl.libguides.com/c.php?g=1375411&p=10576665',
              },
            ],
          },
          {
            label: 'Senior Citizen Resources',
            links: [
              {
                text: 'Mercy PDF',
                href: 'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/senior-services-stl.pdf',
              },
            ],
          },
          {
            label: 'St. Louis City Human Services (Aging)',
            phone: '314-612-5918',
          },
          {
            label: 'St. Louis County Older Residents Programs',
            phone: '314-615-4516',
            links: [
              {
                text: 'Older Residents',
                href: 'https://stlouiscountymo.gov/st-louis-county-departments/human-services/county-older-resident-programs/',
              },
            ],
          },
          {
            label: 'St. Louis/Missouri Community Resources',
            phone: '314-747-9234',
            links: [
              {
                text: 'Resource Guide',
                href: 'https://sites.wustl.edu/centerforaging/education-research/resources/',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'immigrants',
    emoji: '🌍',
    title: 'Immigrants & Refugees',
    groups: [
      {
        items: [
          {
            label: 'Catholic Charities',
            links: [
              {
                text: 'Services for Immigrants',
                href: 'https://ccstl.org/services/for-immigrants/',
              },
            ],
          },
          {
            label: 'International Institute of St. Louis',
            phone: '314-773-9090',
            links: [{ text: 'iistl.org', href: 'https://www.iistl.org/' }],
            text: '(legal help ext. 115)',
          },
          {
            label: 'Mercy Immigrant & Refugee Resources',
            links: [
              {
                text: 'Mercy PDF',
                href: 'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/immigrant-and-refugee-resources-st-louis-area.pdf',
              },
            ],
          },
          {
            label: 'Oasis International',
            phone: '314-353-3800',
            links: [{ text: 'St. Louis', href: 'https://www.oasis4refugees.org/refugees/' }],
            text: '– Helps families get settled into a new life in StL MO',
          },
        ],
      },
    ],
  },
  {
    id: 'disability',
    emoji: '♿',
    title: 'Disability Resources',
    groups: [
      {
        items: [
          {
            label: 'Access Office',
            links: [
              {
                text: 'StL Community College',
                href: 'https://stlcc.edu/student-support/disability-services/',
              },
            ],
            text: '– Support for students w/documented disabilities',
          },
          {
            label: 'Disability Resources',
            links: [
              {
                text: 'Mercy PDF',
                href: 'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/disability-resources.pdf',
              },
            ],
          },
          {
            label: 'Discount Programs Disabled/Low Income',
            links: [
              {
                text: 'psc.mo.gov',
                href: 'https://psc.mo.gov/Telecommunications/Lifeline_and_Disabled_Programs_1',
              },
            ],
          },
          {
            label: 'Help for the Blind/Visually Impaired',
            phone: '314-933-7311',
            links: [
              { text: 'Blind Services', href: 'https://dss.mo.gov/fsd/rsb/' },
              { text: 'Contact Us', href: 'https://dss.mo.gov/fsd/rsb/contact-us.htm' },
            ],
            text: '– St. Louis Office',
          },
          {
            label: 'Housing',
            phone: '573-751-9206',
            links: [
              {
                text: 'Missouri Dept. of Mental Health',
                href: 'https://dmh.mo.gov/housing/unit/housing-resources',
              },
            ],
          },
          {
            label: 'Missouri Disability Portal',
            links: [
              {
                text: 'Educational Resources',
                href: 'https://disability.mo.gov/education.htm',
              },
              { text: 'disability.mo.gov', href: 'https://disability.mo.gov/' },
            ],
          },
          {
            label: 'Missouri Help for Disabled People',
            links: [
              {
                text: 'Disability Resources',
                href: 'https://www.disabilityresources.org/missouri.html',
              },
            ],
            text: '– Employment, Independent Living, Rehabilitation, Assistive Technology & more',
          },
          {
            label: 'Resources for Students with Disabilities',
            links: [
              {
                text: 'Resources Education USA',
                href: 'https://educationusa.state.gov/resources-students-disabilities',
              },
            ],
          },
          {
            label: 'St. Louis Arc',
            links: [
              {
                text: 'Community Resources',
                href: 'https://www.slarc.org/resource-library/community-resources/',
              },
            ],
          },
          {
            label: 'Transportation for Older Adults & Adults with Disabilities',
            phone: '800-235-5503',
            links: [{ text: 'Site', href: 'https://health.mo.gov/seniors/aaa/transportation.php' }],
            text: '– Includes Senior & Disability Services List',
          },
        ],
      },
    ],
  },
  {
    id: 'parenting',
    emoji: '👪',
    title: 'Parenting & Family Support',
    groups: [
      {
        items: [
          {
            label: 'Activities/Free Family Oriented',
            links: [
              {
                text: 'Mercy PDF',
                href: 'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/activities-free-and-family-oriented-st-louis-and-surrounding-counties.pdf',
              },
            ],
          },
          {
            label: 'Assistance for Single Mothers in Missouri',
            links: [
              {
                text: 'Grants for Single Mothers in Missouri (MO)',
                href: 'https://singlemotherguide.com/state/missouri',
              },
              { text: 'Singlemom.com', href: 'https://singlemom.com/missouri-assistance/' },
            ],
          },
          {
            label: 'Catholic Charities',
            links: [
              {
                text: 'Family & Child Care',
                href: 'https://ccstl.org/services/family-child-care/',
              },
            ],
          },
          {
            label: "Children's Service Fund",
            phone: '314-615-5850',
            links: [
              {
                text: "Find A Service – St. Louis County Children's Service Fund",
                href: 'https://stlcsf.org/find-a-service/',
              },
            ],
            text: '– Connects families with trusted, high-quality services tailored to your needs',
          },
          {
            label: 'Community Support for Single Mothers in Missouri',
            links: [
              {
                text: 'Information',
                href: 'https://www.asinglemother.org/community-support-for-single-mothers-in-missouri/',
              },
            ],
          },
          {
            label: 'Dads of StL',
            links: [{ text: 'dadsofstl.com', href: 'https://dadsofstl.com/' }],
          },
          {
            label: 'Family Assistance Programs',
            links: [
              {
                text: 'Child Care Aware of Missouri',
                href: 'https://www.mo.gov/home-family/family-services/',
              },
            ],
          },
          {
            label: 'Fathers & Families Support Center',
            phone: '314-333-4170',
            links: [{ text: 'Site', href: 'https://fatherssupportcenter.org/' }],
          },
          {
            label: 'Herman Center/Child & Family Development',
            links: [
              {
                text: 'Washington University',
                href: 'https://hermanncenter.wustl.edu/',
              },
            ],
          },
          {
            label: 'Missouri Child Care Subsidy Program',
            phone: '573-415-8605',
            links: [
              {
                text: 'Child Care Subsidy',
                href: 'https://dese.mo.gov/childhood/child-care-subsidy',
              },
            ],
            text: '– Applications & Authorizations (Childhood Resource & Referral Call Center): 573-415-8605; General DESE Early Learning / translation line: 573-751-4212. Payments for child care to help families with the costs of child care so they can focus on finding & holding steady jobs and/or attend school & training programs',
          },
          {
            label: 'Missouri Dept. of Social Services',
            links: [
              { text: 'Family Support Division', href: 'https://mydss.mo.gov/' },
              { text: 'Contact Us/Find an Office', href: 'https://dss.mo.gov/dss_map/' },
            ],
          },
          {
            label: 'Stronger StL',
            phone: '314-622-3201',
            links: [
              {
                text: 'Job Training & Child Support',
                href: 'https://arpa.stlouis-mo.gov/announcements/single-dads-job-training-builds-strong-families/',
              },
            ],
          },
          {
            label: 'Youth & Family Services City of St. Louis',
            links: [
              {
                text: 'stlouis-mo.gov',
                href: 'https://www.stlouis-mo.gov/government/departments/human-services/youth-family/index.cfm',
              },
            ],
          },
          {
            label: 'Youth Programs St. Louis County',
            links: [
              {
                text: 'stlouiscountymo.gov',
                href: 'https://stlouiscountymo.gov/st-louis-county-departments/human-services/county-youth-programs/',
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
    id: 'clothing',
    emoji: '👕',
    title: 'Clothing, Furniture & Household',
    groups: [
      {
        items: [
          {
            label: 'Home Sweet Home',
            links: [
              {
                text: 'Partner list',
                href: 'https://homesweethomestl.org/partner-agencies/',
              },
            ],
            text: '– Furniture (partner agency)',
          },
          {
            label: 'Mercy Clothing Resources',
            links: [
              {
                text: 'Mercy PDF',
                href: 'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/Clothing-Resources-stl-and-counties.pdf',
              },
            ],
          },
          {
            label: 'St. Vincent de Paul Thrift Stores',
            links: [
              { text: 'Locations', href: 'https://svdpstlouis.org/stores/locations' },
              { text: 'Need Help', href: 'https://svdpstlouis.org/need-help/' },
            ],
          },
          {
            label: 'Urban League Food/Clothing',
            links: [
              {
                text: 'ulstl.com',
                href: 'https://www.ulstl.com/food--clothing-assistance.html',
              },
            ],
            text: '– Food & Clothing 314-615-3642, Food 314-388-9840',
          },
        ],
      },
    ],
  },
  {
    id: 'taxes',
    emoji: '💰',
    title: 'Free Tax Preparation',
    groups: [
      {
        items: [
          {
            label: 'AARP Foundation Tax-Aide',
            links: [
              {
                text: 'Find locations',
                href: 'https://www.aarp.org/money/taxes/aarp-taxaide/locations/',
              },
            ],
          },
          {
            label: 'MyFreeTaxes',
            links: [{ text: 'myfreetaxes.com', href: 'https://myfreetaxes.com/' }],
          },
          {
            label: 'St. Louis Tax Assistance Program',
            links: [{ text: 'stlouistap.org', href: 'https://www.stlouistap.org/' }],
          },
        ],
      },
    ],
  },
  {
    id: 'weather',
    emoji: '❄️☀️',
    title: 'Cooling & Warming Centers',
    groups: [
      {
        items: [
          {
            label: 'Cooling Centers in the St. Louis MO Area',
            links: [
              {
                text: 'stlouis-mo.gov',
                href: 'https://www.stlouis-mo.gov/live-work/summer/cooling-centers.cfm?city=all',
              },
            ],
          },
          {
            label: 'Cooling Sites',
            links: [
              {
                text: '211helps.org/cooling-sites',
                href: 'https://www.211helps.org/cooling-sites/',
              },
            ],
          },
          {
            label: 'Warming Sites',
            links: [
              {
                text: '211helps.org/warming-sites',
                href: 'https://www.211helps.org/warming-sites/',
              },
            ],
          },
          {
            label: 'Mercy Warming Center Site List (MO & IL)',
            links: [
              {
                text: 'Mercy PDF',
                href: 'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/warming-center-resources.pdf',
              },
            ],
          },
          {
            label: 'St. Louis City Warming Centers & Shelters',
            links: [
              {
                text: 'stlouis-mo.gov',
                href: 'https://www.stlouis-mo.gov/live-work/warming-centers.cfm',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'technology',
    emoji: '💻',
    title: 'Technology Assistance',
    groups: [
      {
        items: [
          {
            label: 'Best Free Government Phone Providers in Missouri',
            links: [
              {
                text: 'Lifeline Guide | Cliq Mobile',
                href: 'https://www.gocliqmobile.com/states/missouri',
              },
            ],
          },
          {
            label: 'Evaluation of Free Government Phones',
            links: [
              {
                text: 'Top Free Government Phone Providers Ranked by Customer Reviews',
                href: 'https://govtphones.org/blog/top-providers-customer-reviews',
              },
            ],
          },
          {
            label: 'Free Government Laptop',
            links: [
              {
                text: 'Free Government Tablet Missouri For Low-Income? - AirTalk Wireless',
                href: 'https://airtalkwireless.com/blog/free-government-tablet-missouri',
              },
            ],
          },
          {
            label: 'Free Government Phone Service in Missouri',
            links: [
              {
                text: 'Lifeline Program',
                href: 'https://www.assistwireless.com/lifeline-plans/missouri/',
              },
            ],
          },
          {
            label: 'Mercy Technology Assistance Resources',
            links: [
              {
                text: 'Mercy PDF',
                href: 'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/technology-assistance-resources.pdf',
              },
            ],
            text: '– Earn a Computer Program, Children 8-17',
          },
          {
            label: 'Missouri Application for Lifeline Program',
            links: [
              {
                text: 'efis.psc.mo.gov',
                href: 'https://www.efis.psc.mo.gov/Document/Display/46123',
              },
            ],
          },
          {
            label: 'npower Missouri',
            links: [
              {
                text: 'npower.org/missouri',
                href: 'https://www.npower.org/locations/missouri/',
              },
            ],
            text: '– Free tech training & development to young adult job seekers in St. Louis & Kansas City',
          },
          {
            label: 'STLCC Tech Academy',
            links: [
              {
                text: 'stlcc.edu/techacademy',
                href: 'https://stlcc.edu/programs-academics/pathways/techacademy/',
              },
            ],
            text: '– Empowers you to start your path to an in-demand career in technology',
          },
        ],
      },
    ],
  },
  {
    id: 'vital-records',
    emoji: '📄',
    title: 'Birth Certificates & Missouri State IDs',
    groups: [
      {
        items: [
          {
            label: 'College Church Outreach Program',
            phone: '314-266-9557',
            links: [{ text: 'Outreach', href: 'https://sfxstl.org/outreach' }],
            text: '– St. Francis Xavier College Church, 3628 Lindell Blvd, Lower Level SFX Ballroom, StL 63108. Birth certificates & non-driver IDs, one per person per year. Tuesdays starting at 9am, first come first served or by appointment.',
          },
          {
            label: 'Missouri State ID Access Coalition',
            phone: '314-200-5181',
            links: [{ text: 'moidaccess.org', href: 'https://www.moidaccess.org/' }],
          },
          {
            label: 'MO ID Non-Driver Requirements',
            links: [
              {
                text: 'dor.mo.gov',
                href: 'https://dor.mo.gov/driver-license/issuance/id-requirements.html',
              },
            ],
          },
          {
            label: 'Get Help with MO State ID & Birth Certificate',
            links: [{ text: 'moidaccess.org/gethelp', href: 'https://www.moidaccess.org/gethelp' }],
          },
        ],
      },
    ],
  },
]
