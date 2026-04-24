import React, { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { FaMoon, FaSun } from "react-icons/fa"
import Home from './component/Home'
import About from './component/About'
import Gallery from './component/Gallery'
import Services from './component/Services'
import Contact from './component/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'

function App() {

  const [darkMode, setDarkMode] = useState(true)

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  return (
    <BrowserRouter>

      {/* Navbar */}
      <nav className={`navbar navbar-expand-lg px-3 sticky-top ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>

        {/* Brand */}
        <Link className="navbar-brand fw-bold" to="/">
          Sai Shubham Tours And Travels
        </Link>

        {/* Toggle Button */}
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

            {/* Dark/Light Toggle */}
            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <button onClick={toggleTheme} className="btn btn-outline-secondary">
                {darkMode ? <FaMoon /> : <FaSun />}
              </button>
            </li>

            {/* Book Button */}
            <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
              <Link to="/contact" className="btn btn-primary">
                Book Now
              </Link>
            </li>

          </ul>
        </div>
      </nav>

      {/* Page Content */}
      <div className={darkMode ? 'bg-dark text-light min-vh-100' : 'bg-light text-dark min-vh-100'}>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </div>

    </BrowserRouter>
  )
}

export default App