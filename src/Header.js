// es7
import React from 'react'
import Home from './Home'
import About from './About'
import Card from './Card'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
const Header = () => {
  const navigate=useNavigate();
  return (
 <header>
 
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">  
          <li className="nav-item">
           <a className="nav-link "><Link to="/">HOME</Link> </a>
          </li>
          
          <li className="nav-item">
            <a className="nav-link"  ><Link to="/about">ABOUT</Link> </a>
          </li>
          <li className="nav-item">
            <a className="nav-link"  ><Link to="/items">ITEMS</Link> </a>
          </li>
        </ul>
      </div>
    </div>
   </nav>
   <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/items' element={<Card/>}/>
 </Routes>
 </header>
  )
}

export default Header