import React from 'react'
import carImage from '../assets/car2-img.jpg';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <img src={carImage} alt="Car" height="571px" width="100%" />
      <h2 style={{ textAlign: 'center', color: 'blue', marginTop: '20px', fontSize: '25px' }}>"Your Cab is Booked! Arrival in 5 Minutes Across Maharashtra"</h2>
      <button style={{ backgroundColor: 'blue', borderRadius: "10px", border: "none", color:"white", width: '150px', height: "40px", marginLeft: '45%' }}> <Link to="/contact">Book Now </Link></button>

      <div style={{ display: "flex", gap: "35px", marginTop: "20px", marginLeft: "10px" }}>
        <img src="https://i.postimg.cc/2jWGnHCk/image.jpg" alt="" height='180px' style={{ borderRadius: "10px" }} />
        <img src="https://i.postimg.cc/tgrSm7c9/image-1.jpg" alt="" height='180px' style={{ borderRadius: "10px" }} />
        <img src="https://i.postimg.cc/3RdSMYMm/image-1.webp" alt="" height='180px' style={{ borderRadius: "10px" }} />
        <img src="https://i.postimg.cc/SR9gsdxK/image-2.jpg" alt="" height='180px' style={{ borderRadius: "10px" }} />


      </div>

      <div style={{ display: "flex", gap: "30px", marginTop: "20px", marginLeft: "10px", }}>
        <img src="https://i.postimg.cc/Zqqj3452/image-3.jpg" alt="" height='180px' style={{ borderRadius: "10px" }} />
        <img src="https://i.postimg.cc/dVw5s8Pq/image-4.jpg" alt="" height='180px' style={{ borderRadius: "10px" }} />
        <img src="https://i.postimg.cc/85JHK4Wb/image-5.jpg" alt="" height='180px' style={{ borderRadius: "10px" }} />
        <img src="https://i.postimg.cc/MH1YxG9M/image-6.jpg" alt="" height='180px' style={{ borderRadius: "10px" }} />

      </div>

      <h2 style={{ fontSize: '30px', textAlign: 'center', marginTop: '40px' }}> <span style={{ color: 'blue' }}>WHY CHOOSE </span> <span style={{ color: 'orange' }}>SAI SHUBHAM TRAVEL</span></h2>

      <p style={{ textAlign: 'center', marginTop: '20px' }}>Looking for cab services anywhere in Maharashtra? Then Sai Shubham Tours and Travels is the right place for you.</p>
      <div style={{ display: "flex", justifyContent: "space-around", marginTop: "80px" }}>
        <div style={{ marginTop: "40px" }}>
          <h2>Featured Luxury Cars</h2>
          <p>We have a range of all types of cabs in shirdi,<br /> Maharashtra. Book Now.</p> <br />

          <h2>Shirdi Temple Package</h2>
          <p>Special Shirdi Temple Packages by car. Enquire <br /> now.</p><br />

          <h2>Available 24x7 Car</h2>
          <p>Our Help Representatives are available on calls <br /> for any inquiry.</p>
        </div>

        <div>
          <img src="https://car-o-man.com/wp-content/uploads/2020/09/caroman-car-service-lbnagar-hyderabad.png" alt="" height="400px" />
        </div>

        <div style={{ marginTop: "40px" }}>
          <h2>Featured Luxury Cars</h2>
          <p>We have a range of all types of cabs in shirdi,<br /> Maharashtra. Book Now.</p> <br />

          <h2>Shirdi Temple Package</h2>
          <p>Special Shirdi Temple Packages by car. Enquire <br /> now.</p><br />

          <h2>Available 24x7 Car</h2>
          <p>Our Help Representatives are available on calls <br /> for any inquiry.</p>
        </div>
      </div>

      <h1 style={{ fontSize: '40px', textAlign: 'center', marginTop: '60px' }}><span style={{ color: 'blue' }}>BEST TAXI FOR</span> <span style={{ color: 'green' }}>TRAVEL</span></h1>
      <hr />

    </div>
  )
}

export default Home
