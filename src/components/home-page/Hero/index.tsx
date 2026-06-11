import React from 'react'
import Link from 'next/link'

const CharityHeroBackground = () => {
  return (
    <div id="hero" className="relative w-full pb-[100px] overflow-hidden">
      {/* 1. Base Blue Layer */}
      <div className="absolute inset-0 bg-[#2E6F8E]" />
      {/* 2. ULTRA-THIN White Diagonal Strip - HALF HEIGHT */}
      <div
        className="absolute inset-0 bg-white"
        style={{
          clipPath: 'polygon(0% 108%, 100% 32%, 100% 35%, 0% 111%)',
        }}
      />

      {/* 3. Orange Bottom-Right Section - Starts exactly where white ends */}
      <div
        className="absolute inset-0 bg-[#F57C20]"
        style={{
          clipPath: 'polygon(0% 111%, 100% 35%, 100% 100%, 0% 100%)',
        }}
      />

      <div className="hero-container relative z-10 mx-auto w-[90%] max-w-[900px] pt-[150px] pb-[60px] text-center text-white">
        <h1
          className="text-[50px] lg:text-[64px] font-[500] text-[#FFFFFF] leading-[120%] mb-[20px]"
          id="faustina-font"
        >
          CompassionSTL
        </h1>
        <p
          className="text-[24px] font-[400] leading-[130%] text-[#FFFFFF] mb-[40px]"
          id="lato-font"
        >
          Connecting you to help, hope, and a brighter future in St. Louis
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-[12px]">
          <Link
            href="/resources"
            className="w-[300px] sm:w-auto h-[54px] rounded-[27px] px-[32px] py-[18px] flex items-center justify-center gap-[10px] bg-[#FFFFFF] text-[#113563] text-[20px] font-[400] leading-[100%] whitespace-nowrap"
            id="lato-font"
          >
            Find Resources
          </Link>
          <Link
            href="/social-workers"
            className="w-[300px] sm:w-auto h-[54px] rounded-[27px] px-[32px] py-[18px] flex items-center justify-center gap-[10px] bg-[#FFFFFF] text-[#113563] text-[20px] font-[400] leading-[100%] whitespace-nowrap"
            id="lato-font"
          >
            Social Workers
          </Link>
          <Link
            href="/education-career"
            className="w-[300px] sm:w-auto h-[54px] rounded-[27px] px-[32px] py-[18px] flex items-center justify-center gap-[10px] bg-[#FFFFFF] text-[#113563] text-[20px] font-[400] leading-[100%] whitespace-nowrap"
            id="lato-font"
          >
            Education &amp; Career
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CharityHeroBackground
