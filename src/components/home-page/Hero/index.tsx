import React from 'react'

/** Homepage hero: Gateway Arch photo with overlay, matching the source site. */
const Hero = () => {
  return (
    <section className="cstl-hero" id="hero">
      <div className="cstl-hero-content">
        <h1 className="cstl-hero-title">CompassionSTL</h1>
        <p className="cstl-hero-subtitle">
          Connecting you to help, hope, and a brighter future in St. Louis
        </p>
        <a href="#start" className="cstl-hero-cta">
          Find Resources <span aria-hidden="true">▼</span>
        </a>
      </div>
    </section>
  )
}

export default Hero
