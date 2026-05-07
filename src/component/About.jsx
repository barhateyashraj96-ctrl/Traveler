import React from 'react'
import Mountain from '../assets/mountain.jpg'

function About() {
  return (
    <div>
      <div style={{
        backgroundImage: `url(${Mountain})`,
        height: '50vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <h2 style={{ textAlign: 'center', color: 'yellow', paddingTop: '10%', fontSize: '40px' }}>Welcome to Yash Tours and Travels</h2>

      </div>

      <br />
      <h5 style={{ fontWeight: 'bold', textAlign: 'center' }}>You can book a car over a call in just 5 minutes. <button style={{ color: 'red', border: '1px  solid red', borderRadius: '7px', height: '40px' }} className='back'>Call me now. </button></h5>

      <br /> <br />
      <h5 style={{ textAlign: 'center' }}>Yash Tours and Travels</h5>
      <br />
      <p style={{ textAlign: 'center' }}> <b> Yash Tours and Travels: </b>Savaari's Shirdi taxi service is your one-stop solution for all your transportation needs in Shirdi. We take pride in offering an <br />
        exceptional travel experience that is both affordable and convenient. With Savaari, you can enjoy the benefits of reliable drivers, comfortable vehicles, and <br />
        hassle-free booking, making us the preferred choice for cab service in Shirdi. Our dedication to customer satisfaction ensures that your experience with us is <br />
        not only pleasant but also unforgettable. Savaari is here to give you a seamless and comfortable taxi service in Shirdi, whether you are going for business or <br />
        pleasure. So sit back, relax, and let us handle the transportation as you enjoy Shirdi's gorgeous city.</p> <br /> <br />

      <div style={{ display: 'flex', justifyContent: 'space-evenly', background: 'black', color: 'White' }}>
        <div style={{ paddingTop: '40px' }}>
          <h4>Yash Tours & Travel</h4>
          <br />
          <p>YASH TOURS & TRAVEL <br /> gateway to unforgettable journeys <br />
            and adventures. We specialize in <br /> crafting personalized travel <br />
            experiences that cater to your <br /> unique preferences and desires.</p>
        </div>

        <div style={{ paddingTop: '40px' }}>
          <h5>CONTACT</h5><br />
          <p> 📩 barhateyashraj96@gmail.com</p>
          <p> 📲 9226094853</p>
          <p> 📝 9226094853</p>

        </div>

        <div style={{ paddingTop: '40px' }}>
          <h5>MAP</h5>
        </div>

      </div>
<hr />
    </div>
  )
}

export default About
