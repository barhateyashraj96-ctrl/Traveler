// import React from 'react'
// import car from '../assets/download.jpg'
// function Gallery() {
//   return (
//     <div>
//       <img src={car} alt="Car" className="img-fluid w-100" />
//     </div>
//   )
// }

// export default Gallery


import React, { useState } from "react";
import "./Gallery.css";

const images = [
  { id: 1, category: "beach", src: "/Beach1.jpg" },
  { id: 2, category: "mountain", src: "/mountain1.jpeg" },
  { id: 3, category: "city", src: "/cities.avif" },
  { id: 4, category: "beach", src: "/beach2.avif" },
  { id: 5, category: "mountain", src: "/mountain2.webp" },
  { id: 6, category: "city", src: "/Cities2.jpg" },
];

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [lightbox, setLightbox] = useState(null);

  const filteredImages =
    filter === "all"
      ? images
      : images.filter((img) => img.category === filter);

  return (
    <section className="gallery">
      <h1 className="Destination">Explore Our Destinations</h1>

      {/* Filters */}
      <div className="filters">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("beach")}>Beaches</button>
        <button onClick={() => setFilter("mountain")}>Mountains</button>
        <button onClick={() => setFilter("city")}>Cities</button>
      </div>

      {/* Grid */}
      <div className="grid">
        {filteredImages.map((img) => (
          <div className="item" key={img.id}>
            <img
              src={img.src}
              alt={img.category}
              onClick={() => setLightbox(img.src)}
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <img src={lightbox} alt="preview" />
        </div>
      )}
    </section>
  );
}