import type { ResourceSection } from './resource-types'

/**
 * Content for the /education-career page — education, training, and career
 * planning resources. Transcribed from the original CompassionSTL site.
 */
export const educationCareerSections: readonly ResourceSection[] = [
  {
    id: 'start-here',
    emoji: '🎓',
    title: 'Education & Career Planning: Start Here',
    intro: [
      'Use the resources below to explore your options after high school and make informed decisions. Visit and research each site.',
    ],
    groups: [
      {
        heading: 'Missouri Department of Higher Education',
        emoji: '📘',
        items: [
          {
            label: 'Main site:',
            phone: '800-473-6757',
            links: [{ text: 'dhewd.mo.gov', href: 'https://dhewd.mo.gov/' }],
          },
          {
            label: '12 Free Publications',
            links: [
              {
                text: 'Prepare for College, Career Guide, Note-Taking, more',
                href: 'https://dhewd.mo.gov/ppc/publications',
              },
            ],
          },
          {
            label: 'Plan & Pay for College',
            links: [{ text: 'dhewd.mo.gov/ppc', href: 'https://dhewd.mo.gov/ppc' }],
          },
          {
            label: 'Helping Adult Learners',
            links: [
              {
                text: 'Information & Institutions',
                href: 'https://dhewd.mo.gov/information-institution',
              },
            ],
          },
          {
            label: 'Workforce Development',
            links: [
              {
                text: 'Apprenticeships, Job Seekers, Training',
                href: 'https://dhewd.mo.gov/workforce-development',
              },
            ],
          },
          {
            label: 'Missouri Higher Education Institutions',
            links: [
              {
                text: 'Public 4-yr, 2-yr, Specialized/Technical, Independent, Theological',
                href: 'https://dhewd.mo.gov/mo-higher-education-institutions',
              },
            ],
          },
          {
            label: 'MO Virtual Campus Tours',
            links: [
              {
                text: 'Explore colleges visually',
                href: 'https://journeytocollege.mo.gov/plan/explore-colleges-careers/virtualcampustours/',
              },
            ],
          },
        ],
      },
      {
        heading: 'ACT & SAT Preparation / Success Tools',
        emoji: '📚',
        items: [
          {
            label: 'ACT Resources for High School Success',
            links: [
              {
                text: 'act.org',
                href: 'https://www.act.org/content/act/en/students-and-parents/high-school-success/high-school-resources.html',
              },
            ],
          },
          {
            label: 'ACT Smart Goals',
            links: [
              {
                text: 'How to set SMART goals',
                href: 'https://www.act.org/content/act/en/students-and-parents/high-school-success/high-school-resources/how-to-set-smart-goals.html',
              },
            ],
          },
          {
            label: 'ACT How to Find Your Path After High School',
            links: [
              {
                text: 'Guide',
                href: 'https://studentblog.act.org/how-to-find-your-path-after-high-school',
              },
            ],
          },
          {
            label: 'ACT Tips on Deciding What to Do After High School',
            links: [
              {
                text: 'Find your path',
                href: 'https://www.act.org/content/act/en/students-and-parents/high-school-success/high-school-resources/find-your-path-in-life.html',
              },
            ],
          },
          {
            label: 'SAT Plan for Life After High School',
            links: [
              {
                text: 'BigFuture by College Board',
                href: 'https://bigfuture.collegeboard.org/plan-for-college',
              },
            ],
          },
          {
            label: 'Tips for College-Bound Students (SLU)',
            links: [
              {
                text: 'Early college prep tips',
                href: 'https://www.slu.edu/beabilliken/articles/early-college-prep.php',
              },
            ],
          },
        ],
      },
      {
        heading: 'College Readiness & Support for Special Populations',
        emoji: '📖',
        items: [
          {
            label: 'College Readiness Resources (PTA)',
            links: [
              {
                text: 'pta.org',
                href: 'https://www.pta.org/home/family-resources/college-and-career-readiness/college-resources',
              },
            ],
          },
          {
            label: 'Rise First (First-Generation, Low-Income – FGLI)',
            links: [
              {
                text: 'Resource directory',
                href: 'https://risefirst.org/resources/resource-directory?life_stage=High%20School%20Student&category=Program',
              },
            ],
          },
          {
            label: 'U.S. Department of Education',
            links: [
              {
                text: 'Colleges, universities, & higher education programs',
                href: 'https://www.ed.gov/higher-education',
              },
            ],
          },
        ],
      },
      {
        heading: 'Free College Tuition for Low-Income Students',
        emoji: '💸',
        items: [
          {
            label: 'List of Colleges with Free Tuition',
            links: [
              {
                text: 'appily.com',
                href: 'https://www.appily.com/guidance/articles/paying-for-college/free-tuition-for-low-income-students',
              },
            ],
          },
          {
            label: 'St. Louis University Promise',
            links: [
              {
                text: 'SLU Tuition Promise details',
                href: 'https://www.slu.edu/news/2026/january/slu-tuition-promise.php',
              },
            ],
          },
          {
            label: 'Washington University Financial Aid',
            links: [
              {
                text: 'How WashU helps',
                href: 'https://financialaid.washu.edu/how-washu-helps/',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'after-high-school',
    emoji: '🎯',
    title: 'What Do You Want to Do After High School?',
    groups: [
      {
        items: [
          {
            label: '1. Public 4-Year College',
            links: [
              {
                text: 'Missouri Higher Education Institutions',
                href: 'https://dhewd.mo.gov/mo-higher-education-institutions',
              },
            ],
          },
          {
            label: '2. Public 2-Year College / Community College',
            links: [{ text: 'St. Louis Community College', href: 'https://stlcc.edu' }],
            text: '– Start here',
          },
          {
            label: '3. Apprenticeship',
            links: [
              {
                text: 'MO Apprenticeships',
                href: 'https://jobs.mo.gov/moapprenticeships',
              },
              {
                text: 'Resource Directory',
                href: 'https://jobs.mo.gov/apprenticeship-grant-resource-directory',
              },
              { text: 'Apprenticeship USA', href: 'https://www.apprenticeship.gov/' },
            ],
          },
          { label: '4. Specialized Tech College' },
          { label: '5. Independent College / University' },
          { label: '6. Theological' },
          {
            label: '7. Military',
            links: [
              {
                text: 'Should I join?',
                href: 'https://www.militaryframes.com/blog/should-i-join-the-military-after-high-school/',
              },
              { text: "Today's Military", href: 'https://www.todaysmilitary.com/' },
            ],
          },
          {
            label: 'More tools:',
            links: [
              {
                text: 'ACT: Find Your Path',
                href: 'https://studentblog.act.org/how-to-find-your-path-after-high-school',
              },
              {
                text: 'Federal Student Aid – Choosing a School',
                href: 'https://studentaid.gov/resources/prepare-for-college/students/choosing-schools',
              },
              {
                text: 'SAT Plan for College',
                href: 'https://bigfuture.collegeboard.org/plan-for-college',
              },
              { text: 'Get Schooled', href: 'https://getschooled.com/' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'college-planning',
    emoji: '📚',
    title: 'College Planning & Financial Aid',
    groups: [
      {
        items: [
          {
            label: 'Journey to College',
            links: [
              {
                text: 'Explore careers, colleges, majors',
                href: 'https://journeytocollege.mo.gov/plan/',
              },
            ],
          },
          {
            label: 'Search Missouri Colleges & Degrees',
            links: [
              {
                text: 'Find programs that fit you',
                href: 'https://journeytocollege.mo.gov/plan/college-and-degree-search/',
              },
            ],
          },
          {
            label: 'Missouri College & Degree Search (MO DHEWD)',
            links: [
              {
                text: 'web.dhewd.mo.gov',
                href: 'https://web.dhewd.mo.gov/collegedegreesearch/',
              },
            ],
          },
          {
            label: 'College Navigator (NCES)',
            links: [
              {
                text: 'Filter by state, degree, financial aid, institution type',
                href: 'https://nces.ed.gov/collegenavigator/',
              },
            ],
          },
          {
            label: 'Find & Compare Colleges / Career Schools',
            links: [
              {
                text: 'StudentAid.gov',
                href: 'https://studentaid.gov/resources/prepare-for-college/students/choosing-schools',
              },
            ],
          },
          {
            label: 'College Scorecard',
            links: [
              {
                text: 'Compare by location, cost, outcomes',
                href: 'https://collegescorecard.ed.gov/',
              },
            ],
          },
          {
            label: 'Community College Information & Resources',
            links: [
              {
                text: 'ed.gov',
                href: 'https://www.ed.gov/higher-education/find-college-or-educational-program/community-college',
              },
            ],
          },
          {
            label: 'College Search (MO.gov)',
            links: [
              {
                text: 'MO.gov education page',
                href: 'https://www.mo.gov/education/colleges-and-universities/',
              },
            ],
          },
          {
            label: 'Big Future (College Board)',
            links: [
              {
                text: 'Plan, pay, search colleges',
                href: 'https://bigfuture.collegeboard.org/',
              },
            ],
          },
        ],
      },
      {
        heading: 'Financial Aid & Tests',
        emoji: '💰',
        items: [
          {
            label: 'FAFSA',
            links: [
              {
                text: 'Apply for federal student aid',
                href: 'https://studentaid.gov/h/apply-for-aid/fafsa',
              },
            ],
          },
          {
            label: 'Student Financial Aid (Federal)',
            links: [
              {
                text: 'studentaid.gov',
                href: 'https://studentaid.gov/h/apply-for-aid/fafsa',
              },
            ],
          },
          {
            label: 'Missouri Financial Aid for College',
            links: [
              {
                text: 'State programs',
                href: 'https://www.mo.gov/education/financial-aid-for-college/',
              },
            ],
          },
          {
            label: 'Types of Financial Aid',
            links: [
              {
                text: 'Understand your options',
                href: 'https://studentaid.gov/understand-aid/types',
              },
            ],
          },
          {
            label: 'ACT Test',
            links: [
              {
                text: 'Register / info',
                href: 'https://www.act.org/content/act/en/products-and-services/the-act.html',
              },
            ],
          },
          {
            label: 'SAT Test',
            links: [{ text: 'College Board SAT', href: 'https://satsuite.collegeboard.org/sat' }],
          },
          {
            label: 'Higher Education Consortium of Greater St. Louis (HECSTL)',
            phone: '314-985-7075',
            links: [{ text: 'hecstl.org', href: 'https://www.hecstl.org/' }],
            text: '(low-income, first-gen, disabled support)',
          },
        ],
      },
    ],
  },
  {
    id: 'careers',
    emoji: '🔍',
    title: 'Explore Careers & Your Interests',
    groups: [
      {
        items: [
          {
            label: 'My Next Move',
            links: [{ text: 'mynextmove.org', href: 'https://www.mynextmove.org/' }],
            text: '(careers by keyword, industry, interests)',
          },
          {
            label: 'Occupational Outlook Handbook',
            links: [{ text: 'bls.gov/ooh', href: 'https://www.bls.gov/ooh/' }],
            text: '(job descriptions, outlook)',
          },
          {
            label: 'O*NET OnLine',
            links: [{ text: 'onetonline.org', href: 'https://www.onetonline.org/' }],
            text: '(browse occupations by abilities, interests, skills)',
          },
          {
            label: 'Missouri Career Pathways',
            links: [
              {
                text: 'Occupations at different education/training levels',
                href: 'https://meric.mo.gov/workforce-research/career/career-pathways',
              },
            ],
          },
          {
            label: "Peterson's College Search Tool",
            links: [
              {
                text: 'College Discovery Center & Test Prep',
                href: 'https://www.petersons.com/college-search.aspx',
              },
            ],
          },
          {
            label: 'MOScores (job training outcomes)',
            links: [
              {
                text: 'meric.mo.gov/data/moscores',
                href: 'https://meric.mo.gov/data/moscores',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'adult-education',
    emoji: '📖',
    title: 'Adult Education & High School Equivalency',
    groups: [
      {
        items: [
          {
            label: 'Adult Education Missouri',
            links: [
              {
                text: 'mo.gov/education/adult-education',
                href: 'https://www.mo.gov/education/adult-education',
              },
            ],
          },
          {
            label: "It's Never Too Late – Adult Learners",
            links: [
              {
                text: 'PDF guide',
                href: 'https://dhewd.mo.gov/media/pdf/its-never-too-late-adult-learners',
              },
            ],
            text: '(college degree or certificate)',
          },
          {
            label: 'High School Equivalency (MOHSE)',
            phone: '573-751-3504',
            links: [
              {
                text: 'dese.mo.gov',
                href: 'https://dese.mo.gov/college-career-readiness/high-school-equivalency',
              },
            ],
          },
          {
            label: 'GED – St. Louis',
            phone: '314-231-3720',
            links: [
              {
                text: 'Find GED programs in St. Louis area',
                href: 'https://www.google.com/search?q=ged+programs+in+st+louis+mo+area',
              },
            ],
          },
          {
            label: 'Excel Adult High School (StL County Library)',
            links: [
              {
                text: 'Online high school diploma, academic support, career/college planning, college credit',
                href: 'https://www.slcl.org/research-learn/excel-adult-high-school',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'apprenticeships',
    emoji: '🔧',
    title: 'Apprenticeships & Skilled Trades',
    groups: [
      {
        items: [
          {
            label: 'Missouri Works Initiative',
            phone: '573-536-2237',
            links: [
              { text: 'moworksinitiative.org', href: 'https://moworksinitiative.org/' },
              {
                text: 'Apply Online',
                href: 'https://moworks.powerappsportals.com/Program-Application/',
              },
            ],
            text: '– Apprentice Ready in Construction & Manufacturing',
          },
          {
            label: 'StL Works',
            links: [{ text: 'stl.works', href: 'https://stl.works/' }],
            text: '– Skilled careers (healthcare, manufacturing, trades, tech, first responders)',
          },
          {
            label: 'Apprenticeship USA',
            links: [{ text: 'apprenticeship.gov', href: 'https://www.apprenticeship.gov/' }],
          },
          {
            label: 'Missouri Apprenticeships',
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
            label: 'National Career Readiness Certificate (ACT WorkKeys)',
            links: [
              {
                text: 'ACT WorkKeys NCRC',
                href: 'https://www.act.org/content/act/en/products-and-services/act-workkeys/act-workkeys-ncrc.html',
              },
            ],
          },
          {
            label: 'WorkReadyMissouri',
            links: [
              {
                text: 'dhewd.mo.gov/workforce-development/cwrc',
                href: 'https://dhewd.mo.gov/workforce-development/cwrc',
              },
            ],
          },
          {
            label: 'MO Training & Certification (mo.gov)',
            links: [{ text: 'mo.gov/work/training', href: 'https://www.mo.gov/work/training' }],
          },
          {
            label: 'Missouri Job Centers',
            links: [{ text: 'Find a location', href: 'https://jobs.mo.gov/job-centers' }],
          },
          {
            label: 'SLATE Missouri Job Center (City)',
            phone: '314-589-8000',
            text: '– 1520 Market St, Suite 3050, St. Louis, MO 63103',
          },
          {
            label: 'Ferguson Job Center (County)',
            phone: '314-244-8020',
            text: '– 2900 Pershall Rd, Suite 166, St. Louis, MO 63136',
          },
          {
            label: 'St. Louis County Job Center (Crossings/Northwest)',
            phone: '314-377-0445',
            text: '– 6347 Plymouth Ave (MET Center), Suites 118, 206, St. Louis, MO 63133',
          },
        ],
      },
    ],
  },
  {
    id: 'stlcc',
    emoji: '🏫',
    title: 'St. Louis Community College (STLCC)',
    groups: [
      {
        paragraph: true,
        items: [
          {
            label: 'Main Phone:',
            phone: '314-539-5005',
            links: [{ text: 'stlcc.edu', href: 'https://stlcc.edu' }],
          },
        ],
      },
      {
        items: [
          {
            label: 'Apply to STLCC',
            links: [
              {
                text: 'Application',
                href: 'https://stlcc.edu/admissions/apply-to-stlcc/',
              },
            ],
          },
          {
            label: 'All Programs',
            links: [{ text: 'Browse programs', href: 'https://stlcc.edu/programs/' }],
            text: '– 15 College Transfer, 80+ Career Programs',
          },
          {
            label: 'Certificate & Degree Training Programs',
            links: [
              {
                text: 'Education for life',
                href: 'https://stlcc.edu/programs-academics/education-for-life.aspx',
              },
            ],
          },
          {
            label: 'Career Technical Education Support',
            links: [
              {
                text: 'Career/Tech programs',
                href: 'https://stlcc.edu/programs-academics/pathways/career-and-technical-education/',
              },
            ],
          },
          {
            label: 'Academic Pathways',
            links: [{ text: 'stlcc.edu/pathways', href: 'https://stlcc.edu/pathways/' }],
          },
          {
            label: 'Continuing Education',
            links: [
              {
                text: 'Browse classes',
                href: 'https://applications.stlcc.edu/Continuing-Education/classes/index.asp',
              },
            ],
          },
          {
            label: 'Online Programs',
            links: [
              {
                text: 'Distance learning',
                href: 'https://stlcc.edu/programs-academics/online-education/',
              },
            ],
          },
          {
            label: 'Short-Term Career Training',
            links: [
              {
                text: 'Advanced Manufacturing (Boeing Apprenticeship), Trades, Transportation, Health Care',
                href: 'https://stlcc.edu/workforce/training-programs/',
              },
            ],
            text: '| Adult Education & Literacy: 314-539-5310',
          },
          {
            label: 'Career & Transfer Pathways',
            links: [
              {
                text: 'Catalog',
                href: 'https://catalog.stlcc.edu/programs/transfer-pathways/',
              },
            ],
          },
        ],
      },
      {
        heading: 'Campuses & Education Centers',
        items: [
          {
            label: 'Florissant Valley',
            phone: '314-513-4200',
            links: [{ text: 'Info', href: 'https://stlcc.edu/locations/florissant-valley/' }],
          },
          {
            label: 'Forest Park',
            phone: '314-644-9100',
            links: [{ text: 'Info', href: 'https://stlcc.edu/locations/forest-park/' }],
          },
          {
            label: 'Meramec',
            phone: '314-984-7500',
            links: [{ text: 'Info', href: 'https://stlcc.edu/locations/meramec/' }],
          },
          {
            label: 'Wildwood',
            phone: '636-422-2000',
            links: [{ text: 'Info', href: 'https://stlcc.edu/locations/wildwood/' }],
          },
          {
            label: 'South County',
            phone: '314-984-7200',
            links: [
              {
                text: 'Info',
                href: 'https://stlcc.edu/campus-life-community/our-locations/south-county/',
              },
            ],
          },
          {
            label: 'Harrison Education Center',
            phone: '314-763-6000',
            text: '(education & training for underserved area)',
          },
        ],
      },
      {
        heading: 'Follow Your Path to Success (Six Schools / Pathways)',
        items: [
          {
            label: '1. Advanced Manufacturing',
            links: [{ text: 'Info', href: 'https://stlcc.edu/pathways/industrial/' }],
          },
          {
            label: '2. Business / Culinary Arts / Hospitality',
            links: [{ text: 'Info', href: 'https://stlcc.edu/pathways/business/' }],
          },
          {
            label: '3. Communications / Design / Creative Arts',
            links: [{ text: 'Info', href: 'https://stlcc.edu/pathways/arts/' }],
          },
          {
            label: '4. Education / Public Service / Social Sciences',
            links: [{ text: 'Info', href: 'https://stlcc.edu/pathways/social/' }],
          },
          {
            label: '5. Health Professions',
            links: [{ text: 'Info', href: 'https://stlcc.edu/pathways/health/' }],
          },
          {
            label: '6. STEM (Science, Technology, Engineering, Math)',
            links: [{ text: 'Info', href: 'https://stlcc.edu/pathways/stem/' }],
          },
          {
            label: 'Exploratory',
            links: [{ text: 'Info', href: 'https://stlcc.edu/pathways/explore/' }],
            text: "– if you're still not sure",
          },
        ],
      },
      {
        heading: 'More STLCC Resources',
        items: [
          {
            label: 'Student Advocacy & Support Center',
            links: [
              {
                text: 'Meals, groceries, crisis response support',
                href: 'https://stlcc.edu/student-support/personal-support/student-advocacy-resource-center.aspx',
              },
            ],
          },
          {
            label: 'Earn Your Associate Degree Before You Transfer',
            links: [
              {
                text: 'Benefits of attending STLCC',
                href: 'https://stlcc.edu/insider/college-pathways/associate-degree-transfer.aspx',
              },
            ],
          },
          {
            label: 'Academic Advising',
            links: [
              {
                text: 'Career & transfer advising',
                href: 'https://stlcc.edu/admissions/advising/career/',
              },
            ],
          },
          {
            label: 'STLCC Tech Academy',
            links: [
              {
                text: 'Cybersecurity, Network Security Engineer, Software Development, Web Development, IT',
                href: 'https://stlcc.edu/programs-academics/pathways/techacademy/',
              },
            ],
          },
          {
            label: 'Missouri Tech Training (npower)',
            phone: '314-513-4600',
            links: [
              {
                text: 'Free tech training for young adults',
                href: 'https://www.npower.org/locations/missouri/',
              },
            ],
            text: "(earn up to 12 college credits toward STLCC Associate's)",
          },
          {
            label: 'STLCC YouTube Channel',
            links: [
              {
                text: 'Videos about programs and student life',
                href: 'https://www.youtube.com/@stlccofficial/videos',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'job-search',
    emoji: '💼',
    title: 'Job Search & Workforce Resources',
    groups: [
      {
        items: [
          {
            label: 'Employment Connection',
            phone: '314-333-5627',
            links: [
              {
                text: 'employmentstl.org',
                href: 'https://www.employmentstl.org/job-seekers',
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
            label: 'Urban League Employment Services',
            links: [
              {
                text: 'ulstl.com/employment',
                href: 'https://www.ulstl.com/employment-services.html#/',
              },
            ],
          },
          {
            label: 'Catholic Charities Workforce Development',
            links: [
              {
                text: 'ccstl.org/workforce',
                href: 'https://ccstl.org/services/workforce-development',
              },
            ],
          },
          {
            label: 'CareerOneStop',
            links: [
              {
                text: 'Careers, job search, training, reentry',
                href: 'https://www.careeronestop.org/',
              },
            ],
          },
          {
            label: 'Job Corps (ages 18-24)',
            phone: '800-733-5627',
            links: [{ text: 'stlouis.jobcorps.gov', href: 'https://stlouis.jobcorps.gov/' }],
          },
          {
            label: 'MET Center',
            phone: '314-377-0445',
            links: [
              { text: 'stl.works', href: 'https://stl.works/' },
              {
                text: 'Industrial certification programs',
                href: 'https://stl.works/resources/met-center-industrial-certification-program/',
              },
            ],
          },
          {
            label: 'YouthBuild St. Louis City',
            phone: '314-657-3519',
            links: [
              {
                text: 'City program page',
                href: 'https://www.stlouis-mo.gov/government/departments/slate/youth/youthbuild.cfm',
              },
            ],
          },
          {
            label: 'YouthBuild St. Louis County (North Oaks Plaza)',
            phone: '314-261-0202',
            links: [{ text: 'Info', href: 'https://www.cap4kids.org/stlouis/405180330/' }],
            text: '(ages 17-24, GED, apprenticeship, job placement)',
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
            text: '| Offices: Downtown 877-2940, North 475-7999, South 877-1900, West 587-4877',
          },
          {
            label: 'Military Community Services (MO Heroes Connect)',
            links: [
              {
                text: 'jobs.mo.gov/mo-heroes-connect',
                href: 'https://jobs.mo.gov/mo-heroes-connect',
              },
            ],
            text: '(counseling, career decisions, supportive services up to $1,500, homeless assistance)',
          },
          {
            label: 'MO Job Centers / MoJobs',
            links: [
              { text: 'jobs.mo.gov', href: 'https://jobs.mo.gov/' },
              {
                text: "Missouri's Job Search Resource (MoJobs)",
                href: 'https://app-jobs.mo.gov/vosnet/Default.aspx',
              },
            ],
          },
          {
            label: 'USA Jobs (Federal Government)',
            links: [{ text: 'usajobs.gov', href: 'https://www.usajobs.gov/' }],
          },
          {
            label: 'Occupational Outlook Handbook (How to Find a Job)',
            links: [
              {
                text: 'Guide',
                href: 'https://www.bls.gov/ooh/how-to-find-a-job/home.htm',
              },
            ],
          },
          {
            label: 'Veteran & Military Transition Center',
            links: [
              {
                text: 'Civilian careers, school, jobs, benefits',
                href: 'https://www.careeronestop.org/veterans/',
              },
            ],
          },
          {
            label: 'Justice-Impacted Job Seekers',
            links: [
              {
                text: 'CareerOneStop reentry resources',
                href: 'https://www.careeronestop.org/JusticeImpacted/default.aspx',
              },
            ],
          },
          {
            label: 'SLATE Approved Training (download)',
            links: [
              {
                text: 'PDF flyer',
                href: 'https://www.stlouis-mo.gov/government/departments/slate/documents/upload/Approved-Training-Provider-Flyer-PY24-with-revisions-12-9-2024.pdf',
              },
            ],
            text: '(Aspire Healthcare, Launch Code, Ranken Tech, Healthcare STLCC, Truck Driver)',
          },
        ],
      },
    ],
  },
]
