import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './Contact.css'

function Contact() {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [pass, setpass] = useState('')

  function prit(e) {
    e.preventDefault()

    toast.success("Form submitted successfully 🎉")

    setname('')
    setemail('')
    setpass('')
  }

  return (
    <div className="contact-container">

      <h5 className="heading">
        <span className="blue">Contact Us</span>{' '}
        <span className="yellow">Yash Tours and Travels</span>
      </h5>

      <p className="desc">
        If you have any query related to Cab Services, Tempo Traveller,
        Shirdi Packages, please call us or fill the form below.
      </p>

      <h2 className="title">Quick Book Here</h2>

      <form onSubmit={prit} className="form">
        <input
          type="text"
          value={name}
          onChange={(e) => setname(e.target.value)}
          placeholder="Enter Your Name"
        />

        <input
          type="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          placeholder="Enter Your Email"
        />

        <input
          type="password"
          value={pass}
          onChange={(e) => setpass(e.target.value)}
          placeholder="Enter Your Password"
        />

        <button type="submit">Submit</button>
      </form>

      <ToastContainer position="top-right" />

      {/* Footer */}
      <div className="footer">
        <div>
          <h5>YASH TOURS & TRAVEL</h5>
          <p>
            Your gateway to unforgettable journeys and adventures.
          </p>
        </div>

        <div>
          <h5>CONTACT</h5>
          <p>📩<a href="mailto:barhateyashraj96@gmail.com">barhateyashraj96@gmail.com</a></p>
          <p>📲<a href="tel:9226094853">9226094853</a></p>
        </div>

        <div>
          <h5>MAP</h5>
        </div>
      </div>

    </div>
  )
}

export default Contact