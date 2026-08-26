import React from 'react';
import firstimage from '../assets/yash.png';
import { Link } from 'react-router-dom';
import './Home.css'; // ✅ make sure this is added

function Home() {
  return (
    <div className="container-fluid p-0">

      {/* Hero Image */}
      <img src={firstimage} alt="first" className="img-fluid w-100 hover-zoom" />

      {/* Heading */}
      <h2 className="text-center text-primary mt-3 fs-5 fs-md-4 fs-lg-3">
        "Your Cab is Booked! Arrival in 5 Minutes Across Maharashtra"
      </h2>

      {/* Button */}
      <div className="text-center mt-3">
        <Link to="/contact" className="btn btn-primary px-4 py-2">
          Book Now
        </Link>
      </div>

      <div className="container mt-4">
        <div className="row g-4 justify-content-center">
          {[
            "https://i.postimg.cc/2jWGnHCk/image.jpg",
            "https://i.postimg.cc/tgrSm7c9/image-1.jpg",
            "https://i.postimg.cc/3RdSMYMm/image-1.webp",
            "https://i.postimg.cc/SR9gsdxK/image-2.jpg",
            "https://i.postimg.cc/Zqqj3452/image-3.jpg",
            "https://i.postimg.cc/dVw5s8Pq/image-4.jpg",
            "https://i.postimg.cc/85JHK4Wb/image-5.jpg",
            "https://i.postimg.cc/MH1YxG9M/image-6.jpg"
          ].map((img, index) => (
            <div key={index} className="col-6 col-sm-4 col-md-3">
              <div className="gallery-card">
                <img src={img} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose */}
      <h2 className="text-center mt-5">
        <span className="text-primary">WHY CHOOSE </span>
        <span className="text-warning">YASH TRAVEL</span>
      </h2>

      <p className="text-center mt-3 px-3">
        Looking for cab services anywhere in Maharashtra? Then Yash Tours and Travels is the right place for you.
      </p>

      {/* Features Section */}
      <div className="container mt-5">
        <div className="row align-items-center text-center text-md-start">

          {/* Left */}
          <div className="col-12 col-md-4 mb-4">
            <h5>Featured Luxury Cars</h5>
            <p>We have a range of all types of cabs in Shirdi, Maharashtra.</p>

            <h5>Shirdi Temple Package</h5>
            <p>Special Shirdi Temple Packages by car.</p>

            <h5>Available 24x7 Car</h5>
            <p>Our Help Representatives are always available.</p>
          </div>

          {/* Image */}
          <div className="col-12 col-md-4 text-center mb-4">
            <img
              src="https://car-o-man.com/wp-content/uploads/2020/09/caroman-car-service-lbnagar-hyderabad.png"
              alt=""
              className="img-fluid hover-zoom"
            />
          </div>

          {/* Right */}
          <div className="col-12 col-md-4 mb-4">
            <h5>Featured Luxury Cars</h5>
            <p>We have a range of all types of cabs in Shirdi, Maharashtra.</p>

            <h5>Shirdi Temple Package</h5>
            <p>Special Shirdi Temple Packages by car.</p>

            <h5>Available 24x7 Car</h5>
            <p>Our Help Representatives are always available.</p>
          </div>

        </div>
      </div>

      {/* Footer Heading */}
      <h1 className="text-center mt-5">
        <span className="text-primary">BEST TAXI FOR </span>
        <span className="text-success">TRAVEL</span>
      </h1>

      <hr />
    </div>
  );
}

export default Home;