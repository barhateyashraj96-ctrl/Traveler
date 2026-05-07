import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Contact() {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [pass, setpass] = useState('')

  function prit(e) {
    e.preventDefault()

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", pass);

    // Toast message
    toast.success("Form submitted successfully 🎉")

    // optional: reset form
    setname('')
    setemail('')
    setpass('')
  }

  return (
    <div style={{ justifyContent: 'center', paddingTop: '40px', textAlign: 'center' }}>
      
      <h5>
        <b>
          <span style={{ color: 'blue' }}>Contact Us</span>{' '}
          <span style={{ color: 'yellow' }}>Yash Tours and Travels</span>
        </b>
      </h5>

      <p>
        if you have any query related to Cabs Services, Tempo Traveller , Shirdi Packages Please call us on below given number and you can also contact us through by <br />
        filling below form.
      </p>

      <h2 style={{ color: 'red' }}>Quick Book Here</h2>

      <form onSubmit={prit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setname(e.target.value)}
          placeholder='Enter Your Name'
        /> <br /><br />

        <input
          type="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          placeholder='Enter Your Email'
        /> <br /><br />

        <input
          type="password"
          value={pass}
          onChange={(e) => setpass(e.target.value)}
          placeholder='Enter Your Password'
        /> <br /><br />

        <input
          type="submit"
          value="Submit"
          style={{ backgroundColor: 'orange', border: 'none', borderRadius: '2px', color: 'black' }}
        />
      </form>

      {/* Toast Container */}
      <ToastContainer position="top-right" />

      {/* footer */}
      <div style={{ display: 'flex', justifyContent: 'space-evenly', paddingTop: '50px', marginTop:'92px' , background: 'black', color: 'white' }}>
        <div>
          <h5><b>YASH TOURS & TRAVEL</b></h5>
          <p>
            Yash Tours & Travel is your <br />
            gateway to unforgettable journeys <br />
            and adventures.
          </p>
        </div>

        <div>
          <h5>CONTACT</h5>
          <h6>📖 barhateyashraj96@gmail.com</h6>
          <h6>🚀 8669881059</h6>
        </div>

        <div><h5>MAP</h5></div>
      </div>

    </div>
  )
}

export default Contact