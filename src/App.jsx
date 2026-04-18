import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Gallery from './component/Gallery'
import Services from './component/Services'
import Contact from './component/Contact'
import './App.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">

          {/* Brand */}
          <Link className="navbar-brand fw-bold" to="/">
            Sai Shubham Tours And Travels
          </Link>

          {/* Toggle Button (Mobile) */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-lg-center">

              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/gallery">Gallery</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/services">Services</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>

              {/* Button */}
              <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
                <Link to="/contact" className="btn btn-primary">
                  Book Now
                </Link>
              </li>

            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path='/gallery' element={<Gallery />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path='/contact' element={<Contact />}></Route>

        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App
