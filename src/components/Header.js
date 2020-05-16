import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
        <strong>I am Pratyush Goyal</strong><br></br> a computer science engineer
        <br />
        and this is my portfolio.
        <br />
        
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
