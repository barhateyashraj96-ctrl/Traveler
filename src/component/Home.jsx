import React from 'react'
import carImage from '../assets/car2-img.jpg';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <img src={carImage} alt="Car" className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover" />

      <h2 className="text-center text-blue-600 mt-5 text-lg sm:text-xl md:text-2xl px-3">
        "Your Cab is Booked! Arrival in 5 Minutes Across Maharashtra"
      </h2>

      <div className="flex justify-center mt-4">
        <Link to="/contact">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Book Now
          </button>
        </Link>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-3 mt-6">
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
          <img
            key={index}
            src={img}
            alt="gallery"
            className="w-full h-[150px] object-cover rounded-lg"
          />
        ))}
      </div>

      {/* Why Choose Section */}
      <h2 className="text-center text-2xl md:text-3xl mt-10">
        <span className="text-blue-600">WHY CHOOSE </span>
        <span className="text-orange-500">SAI SHUBHAM TRAVEL</span>
      </h2>

      <p className="text-center mt-4 px-4">
        Looking for cab services anywhere in Maharashtra? Then Sai Shubham Tours and Travels is the right place for you.
      </p>

      <div className="flex flex-col md:flex-row justify-around items-center mt-10 gap-6 px-4">
        {/* Left Content */}
        <div className="text-center md:text-left">
          <h2 className="font-semibold">Featured Luxury Cars</h2>
          <p>We have a range of all types of cabs in Shirdi, Maharashtra. Book Now.</p>

          <h2 className="mt-4 font-semibold">Shirdi Temple Package</h2>
          <p>Special Shirdi Temple Packages by car. Enquire now.</p>

          <h2 className="mt-4 font-semibold">Available 24x7 Car</h2>
          <p>Our Help Representatives are available on calls for any inquiry.</p>
        </div>

        {/* Image */}
        <div>
          <img
            src="https://car-o-man.com/wp-content/uploads/2020/09/caroman-car-service-lbnagar-hyderabad.png"
            alt="service"
            className="w-[250px] sm:w-[300px] md:w-[350px]"
          />
        </div>

        {/* Right Content */}
        <div className="text-center md:text-left">
          <h2 className="font-semibold">Featured Luxury Cars</h2>
          <p>We have a range of all types of cabs in Shirdi, Maharashtra. Book Now.</p>

          <h2 className="mt-4 font-semibold">Shirdi Temple Package</h2>
          <p>Special Shirdi Temple Packages by car. Enquire now.</p>

          <h2 className="mt-4 font-semibold">Available 24x7 Car</h2>
          <p>Our Help Representatives are available on calls for any inquiry.</p>
        </div>
      </div>

      {/* Footer Heading */}
      <h1 className="text-center text-3xl md:text-4xl mt-12">
        <span className="text-blue-600">BEST TAXI FOR </span>
        <span className="text-green-600">TRAVEL</span>
      </h1>

      <hr className="mt-4" />
    </div>
  )
}

export default Home;
