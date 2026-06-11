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
            label: 'Missouri Resource Guide',
            links: [
              { text: 'mydss.mo.gov/resource-guide', href: 'https://mydss.mo.gov/resource-guide' },
            ],
            text: '(Food, Housing, Safety, Child Care, Health, Disability, Utility Assistance, Mental Health, Parenting, Legal, Vital Records, Unemployment, Transportation, Veterans, Reentry, Technology)',
          },
          {
            label: 'Find Help',
            links: [{ text: 'findhelp.org', href: 'https://www.findhelp.org/' }],
          },
          {
            label: 'MO Community Resources & Options (MOCOR)',
            phone: '855-834-8555',
            links: [{ text: 'mocor.mo.gov', href: 'https://mocor.mo.gov/' }],
            text: '(Long-Term Support & Services)',
          },
          {
            label: 'US Government Benefits',
            links: [{ text: 'usa.gov/benefits', href: 'https://www.usa.gov/benefits' }],
            text: '(Food, Health, Housing, Social Security, Utilities, Welfare)',
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
            label: 'Community Action Agency StL County',
            phone: '314-863-0015',
            links: [{ text: 'caastlc.org', href: 'https://www.caastlc.org/' }],
            text: '(Utilities, Housing, Weatherization, Reentry, Immigrants, Mental Health)',
          },
          {
            label: 'Missouri Resources & Agency Partners',
            links: [
              {
                text: 'dss.mo.gov/agency-partners',
                href: 'https://dss.mo.gov/fsd/agency-partners~resources.htm',
              },
            ],
            text: '(Comprehensive list: Blind, Cash Assistance, Child Care, Food, Utility Assistance, etc.)',
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
            label: 'United Way 2-1-1',
            phone: '211',
            links: [
              {
                text: 'helpingpeople.org',
                href: 'https://helpingpeople.org/united-way-2-1-1/',
              },
              { text: '211.org', href: 'https://www.211.org/' },
            ],
            text: '(24/7)',
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
                text: 'stlouis-mo.gov/services',
                href: 'https://www.stlouis-mo.gov/services/index.cfm',
              },
            ],
          },
          {
            label: 'St. Louis City Help Resources',
            links: [
              {
                text: 'stlouis-mo.gov/help',
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
                text: 'stlouis-mo.gov/human-services',
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
                text: 'stlouiscountymo.gov/find-resources',
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
                text: 'stlouiscountymo.gov/human-services',
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
    title: 'United Way 2-1-1',
    groups: [
      {
        items: [
          {
            label: '',
            phone: '211',
            links: [
              {
                text: 'helpingpeople.org',
                href: 'https://helpingpeople.org/united-way-2-1-1/',
              },
              { text: '211.org', href: 'https://www.211.org/' },
            ],
            text: '(Dial 211, available 24/7)',
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
          {
            label: 'Find your local United Way:',
            links: [
              {
                text: 'unitedway.org/find',
                href: 'https://www.unitedway.org/find-your-united-way',
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
            label: 'St. Louis Area Food Bank',
            phone: '314-292-6262',
            links: [{ text: 'stlfoodbank.org', href: 'https://stlfoodbank.org' }],
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
            label: 'Operation Food Search',
            phone: '314-726-5355',
            links: [
              {
                text: 'operationfoodsearch.org',
                href: 'https://www.operationfoodsearch.org',
              },
            ],
          },
          {
            label: 'Urban League of Metro St. Louis',
            links: [
              {
                text: 'Details',
                href: 'https://www.ulstl.com/food--clothing-assistance.html#/',
              },
            ],
            text: '– Food pantries (ID & proof of age required)',
          },
          {
            label: 'MO Food Assistance (SNAP)',
            links: [{ text: 'Apply for SNAP', href: 'https://mydss.mo.gov/food-assistance' }],
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
            label: 'Food Banks & Free Meals (StL City)',
            links: [
              {
                text: 'City food page',
                href: 'https://www.stlouis-mo.gov/live-work/community/help/food.cfm',
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
            label: 'WIC Missouri',
            phone: '314-814-8700',
            links: [
              { text: 'health.mo.gov/wic', href: 'https://health.mo.gov/living/families/wic/' },
            ],
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
            label: 'United Way 211 – Housing Help',
            phone: '211',
            links: [
              {
                text: '211.org/get-help/housing-expenses',
                href: 'https://www.211.org/get-help/housing-expenses',
              },
            ],
          },
          {
            label: 'St. Louis City Affordable Housing',
            phone: '314-657-3880',
            links: [
              {
                text: 'Info',
                href: 'https://www.stlouis-mo.gov/affordable-housing/index.cfm',
              },
            ],
          },
          {
            label: 'St. Louis Housing Authority',
            phone: '314-531-4770',
            links: [{ text: 'slha.org', href: 'https://www.slha.org/' }],
          },
          {
            label: 'St. Louis County Housing',
            phone: '314-428-3200',
            links: [{ text: 'countyhousing.org', href: 'https://countyhousing.org/' }],
          },
          {
            label: 'Missouri Housing Resources',
            phone: '573-751-9206',
            links: [
              {
                text: 'dmh.mo.gov/housing',
                href: 'https://dmh.mo.gov/housing/unit/housing-resources',
              },
            ],
          },
          {
            label: 'MO Rental Assistance Program',
            links: [{ text: 'details', href: 'https://dmh.mo.gov/housing/unit/rental-assistance' }],
            text: '– One-time help',
          },
          {
            label: 'State Assistance for Housing Relief (SAFHR)',
            links: [{ text: 'Apply', href: 'https://safhr.smapply.org/res/p/SAFHR/' }],
            text: '(past-due rent, forward rent, utilities)',
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
            label: 'Homeless Shelter Directory',
            links: [{ text: 'Find shelters', href: 'https://www.homelessshelterdirectory.org/' }],
          },
          {
            label: 'St. Patrick Center',
            phone: '314-802-0700',
            links: [{ text: 'Programs', href: 'https://www.stpatrickcenter.org/programs' }],
            text: '(food, homeless, jobs, shelter)',
          },
          {
            label: 'Gateway 180',
            phone: '314-802-5444',
            links: [{ text: 'gateway180.org', href: 'https://gateway180.org/' }],
            text: '– Housing Resource Hotline',
          },
          {
            label: 'DePaul USA St. Louis',
            phone: '314-349-1651',
            links: [{ text: 'depaulusa.org/programs', href: 'https://depaulusa.org/programs' }],
          },
          {
            label: 'St. Peter & Paul',
            links: [{ text: 'ppcsinc.org', href: 'https://ppcsinc.org/' }],
            text: '– Helps homeless (Dial 211 for referral)',
          },
          {
            label: 'Home Sweet Home',
            links: [
              {
                text: 'Partner list',
                href: 'https://homesweethomestl.org/partner-agencies/',
              },
            ],
            text: '– Furniture (partner agency required)',
          },
          {
            label: 'Beyond Housing',
            phone: '314-533-0600',
            links: [{ text: 'beyondhousing.org', href: 'https://beyondhousing.org/' }],
          },
          {
            label: 'Mission St. Louis',
            links: [{ text: 'missionstl.org', href: 'https://www.missionstl.org/resources' }],
            text: '– Shelter, clothes, food, hygiene',
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
            label: 'Apply for Medicaid (MO HealthNet)',
            links: [{ text: 'mydss.mo.gov/healthcare', href: 'https://mydss.mo.gov/healthcare' }],
          },
          {
            label: 'Affinia Healthcare',
            phone: '314-814-8700',
            links: [{ text: 'affiniahealthcare.org', href: 'https://affiniahealthcare.org/' }],
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
            label: 'Casa de Salud',
            phone: '314-977-1250',
            links: [{ text: 'casadesaludstl.org', href: 'https://www.casadesaludstl.org/' }],
          },
          {
            label: 'Find a Health Center (Primary, Oral, Behavioral)',
            links: [{ text: 'mo-pca.org', href: 'https://mo-pca.org/find-a-health-center/' }],
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
            label: 'Mercy Dental Resources',
            links: [
              {
                text: 'PDF',
                href: 'https://www.mercy.net/content/dam/mercy/en/pdf/Dental-Resources-St-Louis.pdf',
              },
            ],
          },
          {
            label: 'Mercy Eye Care / Vision Resources',
            links: [
              {
                text: 'PDF',
                href: 'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/eye-care-vision-resources.pdf',
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
            label: 'MO Rx Plan',
            phone: '855-694-4663',
            links: [
              {
                text: 'mydss.mo.gov/mhd/morx',
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
            label: 'Pregnancy / Birthright Counseling',
            phone: '314-298-0945',
            links: [{ text: 'birthrightstl.org', href: 'https://birthrightstl.org/' }],
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
          {
            label: 'Free Diapers',
            text: '– StL County Libraries 314-996-3300, StL City Libraries 314-241-2288, St. Charles Libraries 636-441-2300',
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
            label: 'Veterans Crisis Line',
            phone: '988',
            links: [
              { text: 'veteranscrisisline.net', href: 'https://www.veteranscrisisline.net/' },
            ],
            text: '– Dial 988, press 1',
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
            label: 'BJC Behavioral Health',
            links: [
              {
                text: 'bjcbehavioralhealth.org',
                href: 'https://www.bjcbehavioralhealth.org',
              },
            ],
          },
          {
            label: 'MO Dept. of Mental Health',
            phone: '800-364-9687',
            links: [{ text: 'dmh.mo.gov', href: 'https://dmh.mo.gov' }],
          },
          {
            label: 'Mental Health Centers & Crisis Hotlines (StL County)',
            links: [
              {
                text: 'List',
                href: 'https://stlouiscountymo.gov/st-louis-county-departments/public-health/substance-use-resources/general-resources/mental-health-centers-and-crisis-lifelines/',
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
            label: 'Mercy Mental Health Resources',
            links: [
              {
                text: 'PDF',
                href: 'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/mental-health-resources-in-st-louis.pdf',
              },
            ],
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
            label: 'LIHEAP (Low Income Energy Assistance)',
            links: [
              {
                text: 'mydss.mo.gov/utility-assistance',
                href: 'https://mydss.mo.gov/utility-assistance',
              },
            ],
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
            label: 'Weatherization Assistance',
            links: [
              {
                text: 'dnr.mo.gov/energy/weatherization',
                href: 'https://dnr.mo.gov/energy/weatherization',
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
            label: 'LIHEAP Clearinghouse (all utilities)',
            links: [
              {
                text: 'Missouri profile',
                href: 'https://liheapch.acf.gov/profiles/Missouri.htm',
              },
            ],
          },
          {
            label: 'Mercy Utility & Rent Assistance',
            links: [
              {
                text: 'PDF',
                href: 'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/utility-and-rent-assistance-st-louis-city-and-county.pdf',
              },
            ],
          },
          {
            label: 'Mercy Sewer Assistance',
            links: [
              {
                text: 'PDF',
                href: 'https://www.mercy.net/content/dam/mercy/en/pdf/sewer-assistance-resource.pdf',
              },
            ],
          },
          {
            label: 'Community Action Agency StL County',
            phone: '314-863-0015',
            links: [{ text: 'caastlc.org', href: 'https://www.caastlc.org/' }],
          },
          {
            label: "Father Bob's Outreach",
            phone: '314-385-1934',
            text: '(St Augustine Parish, Mon-Wed-Fri, bring $25, ID, utility bill/rental agreement, first 30 at 6am)',
          },
          {
            label: 'Local Agencies in MO (communityaction.org)',
            links: [
              {
                text: 'Find agencies',
                href: 'https://www.communityaction.org/missouri-agencies/',
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
        items: [
          {
            label: 'Missouri Job Centers',
            links: [{ text: 'Find locations', href: 'https://jobs.mo.gov/job-centers' }],
            text: '– SLATE: 314-589-8000, Ferguson: 314-244-8020, St. Louis County: 314-377-0445',
          },
          {
            label: 'MoJobs',
            links: [
              {
                text: 'app-jobs.mo.gov',
                href: 'https://app-jobs.mo.gov/vosnet/Default.aspx',
              },
            ],
          },
          {
            label: 'Employment Connection',
            phone: '314-333-5627',
            links: [
              {
                text: 'employmentstl.org/job-seekers',
                href: 'https://www.employmentstl.org/job-seekers',
              },
            ],
          },
          {
            label: 'Urban League Employment',
            links: [
              {
                text: 'ulstl.com/employment',
                href: 'https://www.ulstl.com/employment-services.html#/',
              },
            ],
          },
          {
            label: 'Catholic Charities Workforce',
            links: [
              {
                text: 'ccstl.org/workforce',
                href: 'https://ccstl.org/services/workforce-development',
              },
            ],
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
            links: [{ text: 'stlcowd.org', href: 'https://www.stlcowd.org/' }],
          },
          {
            label: 'CareerOneStop',
            links: [{ text: 'careeronestop.org', href: 'https://www.careeronestop.org/' }],
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
            label: 'Apprenticeship USA',
            links: [{ text: 'apprenticeship.gov', href: 'https://www.apprenticeship.gov/' }],
          },
          {
            label: 'MO Apprenticeships',
            links: [
              {
                text: 'jobs.mo.gov/moapprenticeships',
                href: 'https://jobs.mo.gov/moapprenticeships',
              },
            ],
          },
          {
            label: 'On-the-Job Training (OJT)',
            links: [{ text: 'jobs.mo.gov/ojt', href: 'https://jobs.mo.gov/jobseeker/ojt' }],
          },
          {
            label: 'Job Corps (ages 18-24)',
            phone: '800-733-5627',
            links: [{ text: 'stlouis.jobcorps.gov', href: 'https://stlouis.jobcorps.gov/' }],
          },
          {
            label: 'MET Center',
            phone: '314-377-0445',
            links: [{ text: 'stl.works', href: 'https://stl.works/' }],
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
          {
            label: 'Ticket to Work (SSI/SSD)',
            phone: '314-621-6300',
            links: [{ text: 'ssa.gov/work', href: 'https://www.ssa.gov/work/' }],
          },
          {
            label: 'Vocational Rehabilitation',
            links: [
              {
                text: 'dese.mo.gov/vr',
                href: 'https://dese.mo.gov/adult-learning-rehabilitation-services/vocational-rehabilitation',
              },
            ],
            text: '(Downtown 877-2940, North 475-7999, South 877-1900, West 587-4877)',
          },
          {
            label: 'Veteran & Military Transition Center',
            links: [
              {
                text: 'careeronestop.org/veterans',
                href: 'https://www.careeronestop.org/veterans/',
              },
            ],
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
                text: 'PDF',
                href: 'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/transportation-resources-st-louis-city-and-st-louis-county.pdf',
              },
            ],
          },
          {
            label: 'Mercy Transportation – StL South',
            links: [
              {
                text: 'PDF',
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
                text: 'PDF',
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
            label: 'MO Veterans Benefits',
            phone: '573-751-3779',
            links: [{ text: 'veteranbenefits.mo.gov', href: 'https://veteranbenefits.mo.gov/' }],
          },
          {
            label: 'Veteran & Military Transition Center',
            links: [{ text: 'CareerOneStop', href: 'https://www.careeronestop.org/veterans/' }],
          },
          {
            label: 'Veterans Resources (StL County Library)',
            links: [
              {
                text: 'slcl.libguides.com',
                href: 'https://slcl.libguides.com/c.php?g=1288891&p=9480799',
              },
            ],
          },
          {
            label: 'Veteran Disability Portal',
            phone: '800-877-8249',
            links: [
              {
                text: 'disability.mo.gov/veterans',
                href: 'https://disability.mo.gov/veterans-information.htm',
              },
            ],
            text: '(v/tty)',
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
            label: 'Criminal Justice Ministry',
            links: [{ text: 'cjmstlouis.org', href: 'https://www.cjmstlouis.org/' }],
            text: '(bus pass, food, housing, jobs)',
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
            label: 'Missouri Reentry Process (MRP)',
            links: [
              {
                text: 'doc.mo.gov',
                href: 'https://doc.mo.gov/programs/missouri-reentry-process',
              },
            ],
          },
          {
            label: 'Find Reentry Programs (by State)',
            links: [{ text: 'reentryprograms.com', href: 'https://www.reentryprograms.com/' }],
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
            label: 'Child Care Aware of Missouri',
            links: [
              {
                text: 'mochildcareaware.org',
                href: 'https://mochildcareaware.org/cckmw-state-assistance/',
              },
            ],
          },
          {
            label: "Missouri's Early Care & Education Connections",
            links: [{ text: 'earlyconnections.mo.gov', href: 'https://earlyconnections.mo.gov/' }],
          },
          {
            label: 'ChildCare.gov',
            links: [{ text: 'childcare.gov', href: 'https://childcare.gov/' }],
          },
          {
            label: 'MO Parent Education Program',
            links: [
              {
                text: 'dese.mo.gov',
                href: 'https://dese.mo.gov/childhood/home-visiting/parent-education',
              },
            ],
          },
          {
            label: 'Crisis Care for Families',
            text: '– Temporary care for children: StL City 314-340-7007, StL County 314-264-7700',
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
            label: 'Legal Services of Eastern Missouri',
            phone: '800-444-0514',
            links: [{ text: 'lsem.org', href: 'https://lsem.org/' }],
          },
          {
            label: 'Immigration Legal Help (International Institute)',
            phone: '314-773-9090',
            text: 'ext. 115',
          },
          {
            label: 'Mercy Legal Assistance Resources',
            links: [
              {
                text: 'PDF',
                href: 'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/legal-assistance-resources-st-louis-area.pdf',
              },
            ],
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
            label: 'MO Dept of Health & Senior Services',
            phone: '573-751-6400',
            links: [{ text: 'health.mo.gov', href: 'https://health.mo.gov/' }],
          },
          {
            label: 'Mercy Senior Citizen Resources',
            links: [
              {
                text: 'PDF',
                href: 'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/senior-services-stl.pdf',
              },
            ],
          },
          { label: 'St. Louis City Human Services (Aging)', phone: '314-612-5900' },
          {
            label: 'St. Louis County Human Services (Older Residents)',
            phone: '314-615-4444',
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
            label: 'International Institute of St. Louis',
            phone: '314-773-9090',
            links: [{ text: 'iistl.org', href: 'https://www.iistl.org/' }],
            text: '(legal help ext. 115)',
          },
          {
            label: 'Mercy Immigrant & Refugee Resources',
            links: [
              {
                text: 'PDF',
                href: 'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/immigrant-and-refugee-resources-st-louis-area.pdf',
              },
            ],
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
            label: 'Missouri Disability Portal',
            links: [{ text: 'disability.mo.gov', href: 'https://disability.mo.gov/' }],
          },
          {
            label: 'St. Louis Arc',
            links: [
              {
                text: 'slarc.org',
                href: 'https://www.slarc.org/resource-library/community-resources/',
              },
            ],
          },
          {
            label: 'Mercy Disability Resources',
            links: [
              {
                text: 'PDF',
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
            label: 'Dads of StL',
            links: [{ text: 'dadsofstl.com', href: 'https://dadsofstl.com/' }],
          },
          { label: 'Fathers & Families Support Center', phone: '314-333-4170' },
          {
            label: 'Family Assistance Programs',
            links: [{ text: 'mo.gov', href: 'https://www.mo.gov/home-family/family-services/' }],
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
                text: 'PDF',
                href: 'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/Clothing-Resources-stl-and-counties.pdf',
              },
            ],
          },
          {
            label: 'St. Vincent de Paul Thrift Stores',
            links: [{ text: 'Locations', href: 'https://svdpstlouis.org/stores/locations' }],
          },
          {
            label: 'Mission St. Louis',
            links: [{ text: 'missionstl.org', href: 'https://www.missionstl.org/resources' }],
            text: '– Clothes, hygiene, laundry',
          },
          {
            label: 'Urban League Food/Clothing',
            links: [
              {
                text: 'ulstl.com',
                href: 'https://www.ulstl.com/food--clothing-assistance.html#/',
              },
            ],
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
            label: 'St. Louis Tax Assistance Program',
            links: [{ text: 'stlouistap.org', href: 'https://www.stlouistap.org/' }],
          },
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
            label: 'St. Louis City Warming Centers',
            links: [
              {
                text: 'stlouis-mo.gov',
                href: 'https://www.stlouis-mo.gov/live-work/warming-centers.cfm',
              },
            ],
          },
          {
            label: 'Mercy Warming Center Site List (MO & IL)',
            links: [
              {
                text: 'PDF',
                href: 'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/warming-center-resources.pdf',
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
            label: 'Mercy Technology Assistance Resources',
            links: [
              {
                text: 'PDF',
                href: 'https://www.mercy.net/content/dam/mercy/en/pdf/mnm-resources/technology-assistance-resources.pdf',
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
            text: '– Free tech training',
          },
          {
            label: 'STLCC Tech Academy',
            links: [
              {
                text: 'stlcc.edu/techacademy',
                href: 'https://stlcc.edu/programs-academics/pathways/techacademy/',
              },
            ],
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
