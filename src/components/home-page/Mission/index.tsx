import React from 'react'

const index = () => {
  return (
    <div id="mission" className="py-[52px]">
      <div className="w-[90%] mx-auto py-[27px] max-w-[1280px]">
        <h1
          className="font-[400] text-[40px] lg:text-[48px] leading-[100%] tracking-[0] text-center w-full lg:w-[906px] mx-auto mb-[50px]"
          id="faustina-font"
        >
          What is CompassionSTL?
        </h1>
        <p
          className="font-[500] text-[25px] leading-[150%] tracking-[0] text-center mb-[30px]"
          id="lato-font"
        >
          CompassionSTL is a free, all-in-one directory of community resources in St. Louis and
          Missouri. We gather verified links and phone numbers so you don&apos;t have to search
          dozens of websites. Whether you need food, housing, medical care, job training, or simply
          a warm place to stay, our guide puts help at your fingertips.
        </p>
        <p
          className="font-[700] text-[25px] leading-[150%] tracking-[0] text-center mb-[20px]"
          id="lato-font"
        >
          With CompassionSTL you can:
        </p>
        <ul
          className="font-[500] text-[20px] leading-[160%] tracking-[0] list-disc max-w-[820px] mx-auto pl-[28px] mb-[30px]"
          id="lato-font"
        >
          <li>Find food pantries, free meals, and SNAP application help</li>
          <li>Locate emergency shelters, rental assistance, and affordable housing</li>
          <li>
            Connect with medical/dental clinics, mental health crisis lines, and prescription aid
          </li>
          <li>Explore job centers, career training, apprenticeships, and GED programs</li>
          <li>Get help with utilities, transportation, legal aid, and veteran services</li>
          <li>Book a free appointment with a social worker at St. Louis County Library</li>
        </ul>
        <p
          className="font-[500] text-[25px] leading-[150%] tracking-[0] text-center"
          id="lato-font"
        >
          Our goal is to make finding help as simple and stress-free as possible.
        </p>
      </div>

      <div className="w-[95%] mt-[50px] mx-auto border border-[#2B627B]"></div>
    </div>
  )
}

export default index
