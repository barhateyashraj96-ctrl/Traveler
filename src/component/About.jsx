import React from 'react'
import Mountain from '../assets/mountain.jpg'
import './About.css'

function About() {
  return (
    <div className="about-container">
      
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${Mountain})` }}
      >
        <h2>Welcome to Yash Tours and Travels</h2>
      </div>

      <h5 className="call-text">
        You can book a car over a call in just 5 minutes.
        <button className="call-btn">Call me now</button>
      </h5>

      <h5 className="title">Yash Tours and Travels</h5>

      <p className="description">
        <b>Yash Tours and Travels:</b> Savaari's Shirdi taxi service is your
        one-stop solution for all your transportation needs in Shirdi. We take
        pride in offering an exceptional travel experience that is both
        affordable and convenient...
      </p>

      <div className="footer">
        <div>
          <h4>Yash Tours & Travel</h4>
          <p>
            Gateway to unforgettable journeys and adventures. We specialize in
            crafting personalized travel experiences.
          </p>
        </div>

        <div>
          <h5>CONTACT</h5>
          <p>📩 barhateyashraj96@gmail.com</p>
          <p>📲 9226094853</p>
        </div>

        <div>
          <h5>MAP</h5>
        </div>
      </div>

    </div>
  )
}

export default About