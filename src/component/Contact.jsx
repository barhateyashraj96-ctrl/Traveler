


import React, { useState } from 'react'

function Contact() {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [pass, setpass] = useState('')
  function prit(e) {
    e.preventDefault()
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", pass);

  }

  return (
    <div style={{ justifyContent: 'center', paddingTop: '40px', textAlign: 'center' }}>
      <h5><b> <span style={{ color: 'blue' }}>Contact Us</span> <span style={{ color: 'yellow' }}>Sai Shubham Tours and Travels </span></b></h5>
      <p>if you have any query related to Cabs Services, Tempo Traveller , Shirdi Packages Please call us on below given number and you can also contact us through by <br />
        filling below form.</p> <br /> <br />
      <h2 style={{ color: 'red' }}>Quick Book Here</h2> <br />
      <form onSubmit={prit}>
        <input type="text" onChange={(e) => setname(e.target.value)} placeholder='Enter Your Name' style={{placeholder:'red'}} /> <br /> <br />
        <input type="email" onChange={(e) => setemail(e.target.value)} placeholder='Enter Your Email' /> <br /> <br />
        <input type="password" onChange={(e) => setpass(e.target.value)} placeholder='Enter Your Password' /> <br /> <br />
        <input type="submit" value="Submit" style={{ backgroundColor: 'orange', border: 'none', borderRadius: '2px', color: 'black' }} />
      </form><br /><br /><br /><br /><br /><br /> <br />





      <div style={{ display: 'flex', justifyContent: 'space-evenly', paddingTop: '50px', background: 'black', color: 'white' }}>
        <div >
          <h5><b>SAI SHUBHAM TOURS & TRAVEL</b></h5> <br />
          <p>
            Sai Shubham Tours & Travel is your <br />
            gateway to unforgettable journeys <br />
            and adventures. We specialize in <br />
            crafting personalized travel <br />
            experiences that cater to your <br />
            unique preferences and desires.
          </p>
        </div>
        <div>
          <h5>CONTACT</h5> <br />
          <h6>📖 saishubhamtours8994@gmail.com</h6>
          <h6>🚀 8669881059</h6>
          <h6>📙 8669881059</h6>
        </div>
        <div><h5>MAP</h5>

        </div>
      </div>


    </div>
  )
}

export default Contact

