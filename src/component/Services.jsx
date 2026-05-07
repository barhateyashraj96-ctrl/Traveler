import React from 'react';
import './Services.css';

// Example images (replace with your own travel images)
import beach from '../assets/Beach1.jpg';
import mountain from '../assets/mountain2.webp';
import city from '../assets/cities.avif';

function Services() {
  const servicesData = [
    {
      title: "Beach Tours",
      image: beach,
      description: "Enjoy relaxing and scenic beach vacations with crystal clear waters."
    },
    {
      title: "Mountain Trips",
      image: mountain,
      description: "Explore breathtaking mountain landscapes and adventure trekking."
    },
    {
      title: "City Tours",
      image: city,
      description: "Discover vibrant city life, culture, and famous landmarks."
    },
  ];

  return (
    <section className="services">
      <h1 className='travelservices'>Our Travel Services</h1>
      <p className="subtitle">Explore the world with our amazing tour packages</p>

      <div className="services-container">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button>Explore</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;