import React from 'react'

/** "What is CompassionSTL?" card, matching the source site's first card. */
const Mission = () => {
  return (
    <div className="card" id="mission">
      <h2>
        <span aria-hidden="true">📌 </span>What is CompassionSTL?
      </h2>
      <p>
        CompassionSTL is a free, all-in-one directory of community resources in St. Louis and
        Missouri. We gather verified links and phone numbers so you don&apos;t have to search dozens
        of websites. Whether you need food, housing, medical care, job training, or simply a warm
        place to stay, our guide puts help at your fingertips.
      </p>
      <p>
        <strong>With CompassionSTL you can:</strong>
      </p>
      <ul className="list-bullet">
        <li>Find food pantries, free meals, and SNAP application help</li>
        <li>Locate emergency shelters, rental assistance, and affordable housing</li>
        <li>
          Connect with medical/dental clinics, mental health crisis lines, and prescription aid
        </li>
        <li>Explore job centers, career training, apprenticeships, and GED programs</li>
        <li>
          Consider choices after high school: financial aid, scholarships, trades, ACT, and SAT
        </li>
        <li>Get help with utilities, transportation, legal aid, and veteran services</li>
        <li>Book a free appointment with a social worker at St. Louis County Library</li>
      </ul>
      <p>Our goal is to make finding help as simple and stress-free as possible.</p>
    </div>
  )
}

export default Mission
