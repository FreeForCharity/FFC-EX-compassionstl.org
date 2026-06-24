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
            label: 'Helping Adult Learners',
            links: [{ text: 'Resources', href: 'https://dhewd.mo.gov/initiatives' }],
          },
          {
            label: 'Missouri Higher Education Institutions',
            links: [
              {
                text: 'Public 4yr, 2yr, Specialized/Technical, Independent, Theological',
                href: 'https://dhewd.mo.gov/mo-higher-education-institutions',
              },
            ],
          },
          {
            label: 'MO Virtual Campus Tours',
            links: [
              {
                text: 'Explore colleges & universities visually',
                href: 'https://journeytocollege.mo.gov/plan/explore-colleges-careers/virtualcampustours/',
              },
            ],
          },
          {
            label: 'Plan & Pay for College',
            links: [{ text: 'dhewd.mo.gov/ppc', href: 'https://dhewd.mo.gov/ppc' }],
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
        ],
      },
      {
        heading: 'ACT & SAT Preparation / Success Tools',
        emoji: '📚',
        items: [
          {
            label: 'Test Prep Resources',
            links: [{ text: 'StL County Library', href: 'https://slcl.libguides.com/testprep' }],
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
            label: 'Preparing for Post-Secondary Education',
            links: [
              {
                text: 'Students with Disabilities | U.S. Department of Education',
                href: 'https://www.ed.gov/higher-education/students-disabilities-preparing-postsecondary-education',
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
        heading: 'Free College Tuition for Low-Income Students & More',
        emoji: '💸',
        items: [
          {
            label: 'Colleges Offering Free Tuition Based on Family Income',
            links: [{ text: 'List', href: 'https://www.road2college.com/free-tuition-colleges/' }],
          },
          {
            label: 'Educational & Training Voucher Program',
            links: [
              {
                text: 'Check Eligibility',
                href: 'https://dss.mo.gov/cd/older-youth-program/education.htm',
              },
            ],
          },
          {
            label: 'For High Achieving Students from Low Income Backgrounds',
            links: [{ text: 'QuestBridge', href: 'https://www.questbridge.org/' }],
          },
          {
            label: 'Free Career-Technical Education in Missouri',
            links: [
              {
                text: 'Certificate Programs',
                href: 'https://missouriindependent.com/briefs/missouri-lawmakers-create-pathway-for-free-career-tech-education/',
              },
            ],
          },
          {
            label: 'Free College Tuition for Middle Class Families',
            links: [
              {
                text: 'CollegeRaptor',
                href: 'https://www.collegeraptor.com/find-colleges/articles/affordability-college-cost/these-10-expensive-colleges-have-free-tuition-or-full-ride-scholarships-for-middle-class-families/',
              },
            ],
          },
          {
            label: 'How to Find Financial Aid for College: 6 Strategies for Middle Class Families',
            links: [
              {
                text: 'CollegeRaptor',
                href: 'https://www.collegeraptor.com/paying-for-college/articles/financial-aid/financial-aid-for-middle-class-families-heres-how-to-find-it-6-strategies/',
              },
            ],
          },
          {
            label: 'List of Colleges with Free Tuition for Low Income Students',
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
            text: 'Full undergraduate tuition covered',
          },
          {
            label: 'Tuition Assistance Former Foster Students',
            links: [
              {
                text: 'dss.mo.gov',
                href: 'https://dss.mo.gov/cd/older-youth-program/tuition-assistance.htm',
              },
            ],
            text: 'Currently or were in Foster Care',
          },
          {
            label: 'University of Missouri Columbia Land Grant',
            links: [
              {
                text: 'financialaid.missouri.edu',
                href: 'https://financialaid.missouri.edu/grants/missouri-land-grant/',
              },
            ],
            text: 'Federal Pell Grant Eligible',
          },
          {
            label: 'Washington University Financial Aid',
            links: [
              {
                text: 'How WashU helps',
                href: 'https://financialaid.washu.edu/how-washu-helps/',
              },
            ],
            text: 'Students whose families make under 75K Program covers tuition, fees, housing, dining, for incoming full-time Missouri & Southern Il. students',
          },
          {
            label: 'Which Colleges Offer Free Tuition',
            text: 'The College Investor Full List',
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
            text: '– Start at ',
            links: [{ text: 'St. Louis Community College', href: 'https://stlcc.edu/' }],
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
            label: '8. Employment (Get a Job)',
            links: [
              {
                text: 'Young Adult Employment Assistance',
                href: 'https://jobs.mo.gov/jobseeker/young-adult-employment-assistance',
              },
            ],
          },
          {
            label: 'Find a Missouri Job Center',
            links: [
              { text: 'Locations', href: 'https://jobs.mo.gov/jobseeker/missouri-job-centers' },
            ],
          },
          {
            label: 'Also visit St. Louis Community College',
            links: [
              { text: 'All Programs', href: 'https://stlcc.edu/programs/' },
              {
                text: 'College Career & Technical Education Programs',
                href: 'https://stlcc.edu/programs-academics/pathways/career-and-technical-education/',
              },
              {
                text: 'Short-Term Career Training',
                href: 'https://stlcc.edu/workforce/training-programs/',
              },
            ],
            text: 'You may find a program that will help you develop the skills for a high demand career. You will receive help to navigate & overcome any program obstacles. Call Counseling 314-539-5151 for all campuses',
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
        heading: 'College Planning',
        items: [
          {
            label: 'College Readiness: Career Exploration',
            links: [
              { text: 'StL County Library', href: 'https://slcl.libguides.com/college_readiness' },
            ],
          },
          {
            label: 'College Students Remote Resource Guide',
            links: [
              {
                text: 'StL County Library',
                href: 'https://slcl.libguides.com/for_college_students',
              },
            ],
          },
          {
            label: 'Communication – Interpersonal Skills Guide',
            links: [
              { text: 'StL County Library', href: 'https://slcl.libguides.com/c.php?g=1422277' },
            ],
          },
          {
            label: 'Middle & High School Resources',
            links: [{ text: 'Stl County Library', href: 'https://slcl.libguides.com/612' }],
          },
          {
            label: 'Saving for College: Cost of College',
            links: [
              { text: 'St.L County Library', href: 'https://slcl.libguides.com/collegesavings' },
            ],
          },
          {
            label: 'How to Be Successful in High School:',
            links: [
              {
                text: 'Complete Guide',
                href: 'https://blog.prepscholar.com/how-to-be-successful-in-high-school-tips',
              },
            ],
          },
          {
            label: 'Tips for Getting a Good Start in High School',
            links: [
              {
                text: 'childmind.org',
                href: 'https://childmind.org/article/tips-for-getting-a-good-start-in-high-school/',
              },
            ],
          },
          {
            label: 'ACT',
            links: [
              {
                text: 'Stay Ahead in High School',
                href: 'https://www.act.org/content/act/en/students-and-parents/high-school-success/high-school-resources/tips-to-stay-ahead-in-high-school.html',
              },
            ],
            text: '7 Tips for Building Study Habits & Skills',
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
          {
            label: 'Choosing a School',
            links: [
              {
                text: 'Federal Student Aid',
                href: 'https://studentaid.gov/resources/prepare-for-college/students/choosing-schools',
              },
            ],
          },
          {
            label: 'College Credit Options for High School Students',
            links: [
              { text: 'StL Community College', href: 'https://stlcc.edu/programs/high-school/' },
            ],
          },
          {
            label: 'College & Degree Search',
            links: [
              {
                text: 'Plan for College',
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
            label: 'College Ready for Students & Parents',
            links: [
              {
                text: 'Plan & Pay for College',
                href: 'https://dhewd.mo.gov/ppc/college-career-readiness/students',
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
                text: 'U.S. Dept. of Education',
                href: 'https://www.ed.gov/higher-education/find-college-or-educational-program/community-college',
              },
            ],
          },
          {
            label: '8 Time Management Tips for Students',
            links: [
              {
                text: 'Harvard Summer School',
                href: 'https://summer.harvard.edu/blog/8-time-management-tips-for-students/',
              },
            ],
          },
          {
            label: 'Find the Right College or Career School',
            links: [
              {
                text: 'StudentAid.gov',
                href: 'https://studentaid.gov/resources/prepare-for-college/students/choosing-schools',
              },
            ],
          },
          {
            label: 'High School Checklist:',
            links: [
              {
                text: 'Freshman Through Senior Year',
                href: 'https://scholarships360.org/college-admissions/high-school-checklist/',
              },
            ],
          },
          {
            label: 'Higher Education Institutions',
            links: [
              { text: 'Missouri', href: 'https://dhewd.mo.gov/mo-higher-education-institutions' },
            ],
          },
          {
            label: 'How to Choose a College',
            links: [
              {
                text: 'ACT',
                href: 'https://www.act.org/content/act/en/students-and-parents/college-planning-resources/choosing-a-college.html',
              },
            ],
            text: 'Many Resources',
          },
          {
            label: 'Missouri College & Degree Search',
            links: [
              {
                text: 'Plan for College',
                href: 'https://web.dhewd.mo.gov/collegedegreesearch/',
              },
            ],
          },
          {
            label: 'National Center for College Students with Disabilities',
            links: [{ text: 'NCCSD', href: 'https://nccsd.ici.umn.edu/' }],
          },
          {
            label: "Peterson's College Search Tool",
            links: [
              { text: 'College Search', href: 'https://www.petersons.com/college-search.aspx' },
            ],
          },
          {
            label: 'Plan for College',
            links: [
              {
                text: 'Middle School & High School',
                href: 'https://journeytocollege.mo.gov/plan/prepare-for-college-and-a-career/yearly-checklists/',
              },
            ],
          },
          {
            label: 'The Princeton Review',
            links: [
              { text: 'Find Your College', href: 'https://www.princetonreview.com/college-search' },
            ],
          },
          {
            label: 'Search Missouri Colleges & Degrees',
            links: [
              {
                text: 'Find Programs That Fit You',
                href: 'https://journeytocollege.mo.gov/plan/college-and-degree-search/',
              },
            ],
          },
          {
            label: 'Skills You Need',
            links: [
              {
                text: 'Interpersonal Skills',
                href: 'https://www.skillsyouneed.com/interpersonal-skills.html',
              },
            ],
            text: 'Lists many skills.',
          },
          {
            label: 'St. Louis Community College',
            links: [
              { text: 'Research Guides', href: 'https://guides.stlcc.edu/college/scholarships' },
            ],
          },
        ],
      },
      {
        heading: 'College Essay',
        items: [
          {
            label: 'How to Write a Great College Essay – Step by Step',
            links: [
              {
                text: 'The Great Essay',
                href: 'https://blog.prepscholar.com/how-to-write-a-college-essay',
              },
            ],
          },
          {
            label: 'St. Louis University',
            links: [
              {
                text: 'Essay Example by an Accepted Student',
                href: 'https://blog.collegevine.com/saint-louis-university-essay-examples/',
              },
              {
                text: 'More Essays SLU',
                href: 'https://www.gradesaver.com/application-essays/undergraduate/saint-louis-university',
              },
            ],
          },
          {
            label: '12 Strategies to Writing the Perfect College Essay',
            links: [
              {
                text: 'Harvard Summer School',
                href: 'https://summer.harvard.edu/blog/12-strategies-to-writing-the-perfect-college-essay/',
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
            label: 'Access Missouri Financial Assistance Program',
            links: [
              {
                text: 'Access the Program',
                href: 'https://dhewd.mo.gov/ppc/grants-scholarships/access-mo',
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
            label: 'FAFSA',
            links: [
              {
                text: 'Apply for federal student aid',
                href: 'https://studentaid.gov/h/apply-for-aid/fafsa',
              },
            ],
          },
          {
            label: 'Federal Student Aid',
            links: [{ text: 'Home', href: 'https://studentaid.gov/' }],
          },
          {
            label: 'Financial Aid for Students with Disabilities',
            links: [
              {
                text: 'Financial Aid',
                href: 'https://www.bestcolleges.com/resources/students-with-disabilities-financial-aid/',
              },
            ],
          },
          {
            label: 'Grants for Economically Disadvantaged Students',
            links: [
              {
                text: 'U.S. Dept. of Education',
                href: 'https://www.ed.gov/grants-and-programs/grants-special-populations/grants-economically-disadvantaged-students',
              },
            ],
          },
          {
            label: 'Higher Education Consortium of Metro St. Louis',
            phone: '314-985-7075',
            links: [{ text: 'HECSTL', href: 'https://www.hecstl.org/' }],
            text: 'low-income, first-generation college students, disabled support',
          },
          {
            label: 'Information on College Preparation & the Federal Student Aid Programs',
            links: [{ text: 'Resources', href: 'https://studentaid.gov/resources' }],
          },
          {
            label: 'Journey to College',
            links: [
              {
                text: 'Your Journey to College Begins Here',
                href: 'https://journeytocollege.mo.gov/',
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
            label: 'Missouri Financial Aid Portal',
            links: [
              {
                text: 'Plan & Pay for College',
                href: 'https://web.dhewd.mo.gov/studentportal/',
              },
            ],
            text: 'Student Portal',
          },
          {
            label: 'Missouri Grants & Scholarships',
            links: [{ text: 'Information', href: 'https://dhewd.mo.gov/ppc/grants-scholarships' }],
          },
          {
            label: 'Missouri Scholarship & Loan Foundation',
            links: [{ text: 'Information', href: 'https://www.moslf.org/programs.aspx' }],
          },
          {
            label: 'Money for College',
            links: [
              {
                text: 'U. S. Dept. of Education',
                href: 'https://www.ed.gov/grants-and-programs/money-college',
              },
            ],
            text: 'From Pell Grants to federal work-study opportunities',
          },
          {
            label: 'School Search Find & Select Colleges & Career Schools',
            links: [{ text: 'School Search', href: 'https://studentaid.gov/fafsa-apply/colleges' }],
          },
          {
            label: 'Student Financial Aid (Federal)',
            links: [
              { text: 'studentaid.gov', href: 'https://studentaid.gov/h/apply-for-aid/fafsa' },
            ],
          },
          {
            label: 'The Go-to Guide for College Financial Aid',
            links: [{ text: 'Your Guide', href: 'https://finaid.org/' }],
          },
          {
            label: 'Types of Financial Aid',
            links: [
              {
                text: 'Understand Your Options',
                href: 'https://studentaid.gov/understand-aid/types',
              },
            ],
          },
        ],
      },
      {
        heading: 'Scholarships',
        emoji: '🎓',
        items: [
          {
            label: 'Fastweb',
            links: [
              {
                text: 'Scholarships for College & Trade School',
                href: 'https://www.fastweb.com/',
              },
            ],
          },
          {
            label: 'Fastweb (Vocational & Trade Schools)',
            links: [
              {
                text: 'Vocational, Technical & Trade School Scholarships',
                href: 'https://www.fastweb.com/college-scholarships/articles/vocational-and-trade-school-scholarships',
              },
            ],
          },
          {
            label: 'Financial Aid in Missouri',
            links: [
              {
                text: 'College Grants & Scholarships',
                href: 'https://www.collegescholarships.org/states/missouri.htm',
              },
            ],
          },
          {
            label: 'Harris Stowe State University',
            phone: '314-340-3366',
            links: [{ text: 'hssu.edu', href: 'https://www.hssu.edu/' }],
            text: 'Scholarship Endowment SIM & G21 Information Technology',
          },
          {
            label: 'Low-Income Student Scholarships',
            links: [
              {
                text: 'Search',
                href: 'https://www.bing.com/search?q=scholarships+for+low-income+students',
              },
            ],
          },
          {
            label: 'MO Dept. of Social Services',
            links: [
              {
                text: 'Tuition Assistance Former Foster Students',
                href: 'https://dss.mo.gov/cd/older-youth-program/tuition-assistance.htm',
              },
            ],
            text: 'Currently or were in Foster Care',
          },
          {
            label: 'Missouri Grants & Scholarships',
            links: [
              {
                text: 'Grants & Scholarships',
                href: 'https://dhewd.mo.gov/ppc/grants-scholarships',
              },
            ],
          },
          {
            label: 'Missouri Scholarships',
            links: [
              {
                text: 'Site',
                href: 'https://www.scholarships.com/financial-aid/college-scholarships/scholarships-by-state/missouri-scholarships',
              },
            ],
            text: 'Scroll to bottom of page',
          },
          {
            label: 'Nine Best Scholarship Websites & Search Engines',
            links: [
              {
                text: '9 Best',
                href: 'https://custommapposter.com/article/9-best-scholarship-websites-and-search-engines/2420',
              },
            ],
          },
          {
            label: 'Scholarships Campus Reel St. Louis City & County',
            links: [
              {
                text: 'StL Residents',
                href: 'https://www.campusreel.org/scholarships/location/missouri-scholarships/st-louis-city-county/st-louis',
              },
            ],
          },
          {
            label: 'The Scholarship Foundation of St. Louis',
            phone: '314-725-7990',
            links: [{ text: 'Home', href: 'https://sfstl.org/' }],
          },
          {
            label: 'StL American Foundation',
            phone: '314-533-8000',
            links: [
              {
                text: 'Scholarships/Grants/Local Minority Students',
                href: 'https://stlafoundation.org/scholarships/',
              },
            ],
          },
          {
            label: 'St. Louis Community College, Foundation Scholarship',
            phone: '314-644-9117',
            links: [
              { text: 'Application', href: 'https://stlcc.academicworks.com/?page=2' },
              {
                text: 'Applying for Aid',
                href: 'https://stlcc.edu/admissions/financial-aid/applying-for-aid.aspx',
              },
              { text: 'Enrollment', href: 'https://stlcc.edu/about/contact-us.aspx' },
              {
                text: 'A+ Schools Program',
                href: 'https://stlcc.edu/admissions/financial-aid/a-plus.aspx',
              },
            ],
            text: 'Financial Aid; Student Support & Admissions Offices; Can cover the costs of tuition for up to 18-credit hours per semester.',
          },
          {
            label: 'St. Louis Community College Scholarships',
            links: [
              {
                text: 'Scholarships',
                href: 'https://stlcc.edu/admissions/financial-aid/stlcc-scholarships.aspx',
              },
              {
                text: 'Department Contacts',
                href: 'https://stlcc.edu/about/contact-us.aspx',
              },
            ],
          },
          {
            label: 'St. Louis Community Foundation Scholarships',
            phone: '314-588-8200',
            links: [
              { text: 'Scholarships', href: 'https://stlgives.org/community-impact/scholarships/' },
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
            text: 'Full undergraduate tuition covered',
          },
          {
            label: 'St. Louis University Undergraduate Scholarships',
            phone: '314-997-2350',
            links: [
              {
                text: 'Undergraduate',
                href: 'https://www.slu.edu/financial-aid/types-of-aid/scholarships.php',
              },
              {
                text: 'Freshmen',
                href: 'https://www.slu.edu/beabilliken/articles/scholarships-for-freshmen.php',
              },
              { text: 'Financial Aid : SLU', href: 'https://www.slu.edu/financial-aid/index.php' },
              {
                text: 'Student Success Coaching',
                href: 'https://www.slu.edu/life-at-slu/student-success-center/student-success-coaching.php',
              },
            ],
            text: 'Financial Aid 314-997-2350; Student Success Coaching 314-977-3484',
          },
          {
            label: 'University of Missouri, Columbia Scholarships',
            phone: '573-882-7786',
            links: [
              {
                text: 'Mizzou Freshman',
                href: 'https://admissions.missouri.edu/costs-aid/scholarships/freshman-scholarships/',
              },
              {
                text: 'Student Financial Aid',
                href: 'https://financialaid.missouri.edu/',
              },
              { text: 'Learning Center', href: 'https://learningcenter.missouri.edu/' },
            ],
            text: 'Financial Aid 573-882-7566; Learning Center 573-882-2493',
          },
          {
            label:
              'University of Missouri (UMSL), Student Financial Services & St. Louis Scholarships & Grants',
            phone: '314-516-5526',
            links: [
              {
                text: 'Student Financial Services | UMSL',
                href: 'https://www.umsl.edu/sfs/index.html',
              },
              {
                text: 'Scholarships and Grants University of Missouri Columbia Land Grant',
                href: 'https://www.umsl.edu/sfs/scholarships-grants/index.html',
              },
            ],
            text: 'Federal Pell Grant Eligible',
          },
          {
            label: 'Urban League St. Louis MO',
            phone: '314-615-3600',
            links: [
              { text: 'Scholarships', href: 'https://www.ulstl.com/scholarships.html' },
              { text: 'Locations - ULSTL', href: 'https://www.ulstl.com/locations.html' },
            ],
            text: 'Headquarters',
          },
          {
            label: 'Washington University Scholarships',
            phone: '314-935-6066',
            links: [
              {
                text: 'Scholarships | Undergraduate',
                href: 'https://admissions.washu.edu/cost-aid/scholarships/',
              },
              { text: 'Financial Aid', href: 'https://financialaid.washu.edu/' },
              {
                text: 'Student Support',
                href: 'https://admissions.washu.edu/academics/student-support/',
              },
            ],
            text: 'Washington University Financial Aid – How WashU helps (financialaid.washu.edu/how-washu-helps). Students whose families make under 75K Program covers tuition, fees, housing, dining, for incoming full-time Missouri & Southern Il. Students. Financial Aid 314-935-5900; Admission 314-935-6000',
          },
          {
            label: 'What are the Best Scholarship Websites for Students?',
            links: [
              {
                text: 'Forbes',
                href: 'https://www.forbes.com/advisor/student-loans/best-scholarship-websites/',
              },
            ],
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
            label: 'Career Ideas for Teens Home',
            links: [
              {
                text: 'Home - LibGuides at St. Louis County Library',
                href: 'https://slcl.libguides.com/c.php?g=1408232&p=10426052',
              },
            ],
            text: 'Learn about different kinds of careers & library resources available to help you explore your future.',
          },
          {
            label: 'CareerOneStop',
            links: [
              {
                text: 'Career clusters | Explore Careers',
                href: 'https://www.careeronestop.org/ExploreCareers/Learn/career-clusters.aspx?secondaryNavPanels=Ag%3D%3D',
              },
            ],
            text: 'Career Clusters can help you choose your Career Path',
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
            label: 'MoScores (job training outcomes)',
            links: [
              {
                text: 'meric.mo.gov/data/moscores',
                href: 'https://meric.mo.gov/data/moscores',
              },
            ],
          },
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
            label: "Peterson's College Search Tool",
            links: [
              {
                text: 'College Discovery Center & Test Prep',
                href: 'https://www.petersons.com/college-search.aspx',
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
            label: 'Adult Education & Literacy',
            phone: '314-231-3720',
            links: [
              {
                text: 'St. Louis Public Schools',
                href: 'https://www.slps.org/departments/academics/college-and-career-readiness/adult-education-and-literacy',
              },
              { text: 'Locations', href: 'https://stlael.weebly.com/center-locations.html' },
            ],
          },
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
            label: 'Excel Adult High School',
            links: [
              {
                text: 'StL County Library – Online high school diploma',
                href: 'https://www.slcl.org/research-learn/excel-adult-high-school',
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
            label: 'Fast-Track Work Incentive Grant',
            links: [
              {
                text: 'Details',
                href: 'https://dhewd.mo.gov/initiatives/fast-track-workforce-incentive-grant',
              },
            ],
            text: 'certificate/degree/industry recognized credential',
          },
          {
            label: 'St. Louis Community College Adult Education & Literacy',
            links: [
              {
                text: 'Free Classes at STLCC',
                href: 'https://stlcc.edu/programs-academics/adult-education-and-literacy/',
              },
              {
                text: 'Access Office-Disability Support Services',
                href: 'https://stlcc.edu/student-support/disability-services/',
              },
            ],
            text: 'Access Office',
          },
          {
            label: '10 Scholarships & Grants for Adults Going Back to School',
            links: [
              {
                text: 'Forbes',
                href: 'https://www.forbes.com/advisor/student-loans/scholarships-for-adults/',
              },
            ],
          },
          {
            label: '13 Scholarships & Grants for Adults Going Back to School for 2026',
            links: [
              {
                text: '13 Scholarships/Grants',
                href: 'https://research.com/student-loans/scholarships-and-grants-for-adults-going-back-to-school',
              },
            ],
          },
          {
            label: 'Top 32 Scholarships for Adults in May 2026',
            links: [
              {
                text: 'Top 30 Scholarships',
                href: 'https://scholarships360.org/scholarships/scholarships-for-adults/',
              },
            ],
          },
          {
            label: 'U.S. Department of Education Adult Programs',
            links: [
              {
                text: 'U.S. Department of Education',
                href: 'https://www.ed.gov/adult-programs',
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
            label: 'Apprenticeship Missouri (DHEWD)',
            links: [
              {
                text: 'Details',
                href: 'https://dhewd.mo.gov/workforce-development/apprenticeship-mo',
              },
            ],
            text: '– Includes Apprenticeship Resources',
          },
          {
            label: 'Apprenticeships & Skilled Craft',
            links: [
              { text: 'Ameren', href: 'https://www.ameren.com/career/paths/apprenticeships' },
            ],
          },
          {
            label: 'Apprenticeships Missouri (jobs.mo.gov)',
            links: [
              {
                text: 'jobs.mo.gov/moapprenticeships',
                href: 'https://jobs.mo.gov/moapprenticeships',
              },
            ],
          },
          {
            label: 'Apprenticeship USA',
            links: [{ text: 'apprenticeship.gov', href: 'https://www.apprenticeship.gov/' }],
          },
          {
            label: 'Skilled Trades Guide',
            links: [
              {
                text: 'StL County Library',
                href: 'https://slcl.libguides.com/skilled_trades_guide',
              },
            ],
          },
          {
            label: 'Missouri Apprenticeship Connect',
            phone: '573-634-3511',
            links: [
              { text: 'moapprenticeconnect.com', href: 'https://www.moapprenticeconnect.com/' },
            ],
            text: '– Matches individuals with actual paid apprenticeships across various regions',
          },
          {
            label: 'Missouri Works Initiative',
            phone: '573-536-2237',
            links: [
              {
                text: 'Apprentice Ready Construction & Manufacturing',
                href: 'https://moworksinitiative.org/',
              },
            ],
          },
          {
            label: 'MO Training & Certification (mo.gov)',
            links: [{ text: 'mo.gov/work/training', href: 'https://www.mo.gov/work/training' }],
          },
          {
            label: 'National Career Readiness Certificate',
            links: [
              {
                text: 'ACT WorkKeys NCRC',
                href: 'https://www.act.org/content/act/en/products-and-services/act-workkeys/act-workkeys-ncrc.html',
              },
            ],
          },
          {
            label: 'On-the-Job Training',
            links: [{ text: 'OJT', href: 'https://jobs.mo.gov/jobseeker/ojt' }],
          },
          {
            label: 'St.L Community College',
            links: [
              { text: 'All Programs', href: 'https://stlcc.edu/programs/' },
              {
                text: 'Career/Technical Education',
                href: 'https://stlcc.edu/programs-academics/pathways/career-and-technical-education/',
              },
              {
                text: 'Short-Term Career Training',
                href: 'https://stlcc.edu/workforce/training-programs/',
              },
            ],
          },
          {
            label: 'Skilled Trades & Industrial Occupations Technology',
            links: [
              {
                text: 'STLCC Skilled Trades',
                href: 'https://stlcc.edu/pathways/industrial/skilled-trades/',
              },
            ],
          },
          {
            label: 'StL Works – Skilled careers',
            links: [{ text: 'stl.works', href: 'https://stl.works/' }],
            text: '(healthcare, manufacturing, trades, tech, first responders)',
          },
          {
            label: 'WorkReadyMissouri',
            links: [
              {
                text: 'Certified Work-Ready Communities',
                href: 'https://dhewd.mo.gov/workforce-development/cwrc',
              },
            ],
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
            label: 'Employment & Training Resources',
            links: [
              {
                text: 'Mercy PDF',
                href: 'https://www.mercy.net/content/dam/mercy/en/pdf/Employment-and-Training-Resources.pdf',
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
            label: 'Job Center (County) Ferguson',
            phone: '314-244-8020',
            links: [
              {
                text: 'Ferguson',
                href: 'https://jobs.mo.gov/job-centers/st-louis-county-ferguson-job-center',
              },
            ],
            text: '2900 Pershall Rd, Suite 166, St. Louis, MO 63136',
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
            text: 'stl.works',
          },
          {
            label: 'Job Center (City) SLATE Missouri',
            phone: '314-589-8000',
            links: [
              {
                text: 'SLATE',
                href: 'https://jobs.mo.gov/job-centers/st-louis-city-slate-job-center',
              },
            ],
            text: '1520 Market St, Suite 3050, St. Louis, MO 63103',
          },
          {
            label: 'Approved Training Courses (download)',
            links: [
              {
                text: 'PDF flyer',
                href: 'https://www.stlouis-mo.gov/government/departments/slate/documents/upload/Approved-Training-Provider-Flyer-PY24-with-revisions-12-9-2024.pdf',
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
            label: 'Catholic Charities Workforce Development',
            links: [
              {
                text: 'ccstl.org/workforce',
                href: 'https://ccstl.org/services/workforce-development',
              },
            ],
          },
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
            label: 'Free Education in Technology',
            phone: '314-254-0107',
            links: [
              {
                text: 'Launch Code',
                href: 'https://www.launchcode.org/',
              },
            ],
            text: 'Education & Job Placement',
          },
          {
            label: 'Job Corps (ages 18-24)',
            phone: '800-733-5627',
            links: [{ text: 'stlouis.jobcorps.gov', href: 'https://stlouis.jobcorps.gov/' }],
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
            label: 'Military Community Services',
            links: [
              {
                text: 'MO Heroes Connect',
                href: 'https://jobs.mo.gov/mo-heroes-connect',
              },
            ],
            text: '– Up to $1,500, homeless assistance)',
          },
          {
            label: 'MOJobs',
            links: [
              {
                text: "Missouri's Job Search Resource",
                href: 'https://app-jobs.mo.gov/vosnet/Default.aspx',
              },
            ],
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
            links: [{ text: 'Your Next Step Starts Here', href: 'https://www.stlcowd.org/' }],
          },
          {
            label: 'Ticket to Work (SSI/SSD)',
            phone: '314-621-6300',
            links: [{ text: 'ssa.gov/work', href: 'https://www.ssa.gov/work/' }],
          },
          {
            label: 'Urban League Employment Services',
            links: [{ text: 'ulstl.com', href: 'https://www.ulstl.com/employment-services.html' }],
          },
          {
            label: 'USA Jobs (Federal Government)',
            links: [{ text: 'usajobs.gov', href: 'https://www.usajobs.gov/' }],
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
            label: 'Vocational Rehabilitation',
            links: [
              {
                text: 'VR',
                href: 'https://dese.mo.gov/adult-learning-rehabilitation-services/vocational-rehabilitation',
              },
            ],
            text: '| Offices: Downtown 877-2940, North 475-7999, South 877-1900, West 587-4877',
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
        ],
      },
    ],
  },
]
