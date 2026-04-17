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
        <nav >
          <ul>
            <li className='tabs'>
              <b className='d'>Sai Shubham Tours And Travels</b>
              <Link to="/"><h2 style={{ paddingTop: '15px' }}>Home</h2></Link>
              <Link to="about"><h2 style={{ paddingTop: '15px' }}>About</h2></Link>
              <Link to="/gallery"><h2 style={{ paddingTop: '15px' }}>Gallery</h2></Link>
              <Link to="/services"><h2 style={{ paddingTop: '15px' }}>Services</h2></Link>
              <Link to="/contact"><h2 style={{ paddingTop: '15px' }}>Contact</h2></Link>
              <Link to="/contact"><button className='c'>Book Now</button></Link>
            </li>
          </ul>
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
