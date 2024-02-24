import React from 'react'
import './Navbar.css'


function Navbar() {
  return (
    <>
    <div className='navbar'>
      <div className='logo'>
        <img src="Photo/clubexcellogo.webp" alt="" />
        <p>Club Excel</p>
      </div>
      <ul>
        <li><a href ="/">HOME</a></li>
        <li><a href ="/">ABOUT</a></li>
        <li><a href ="/">SCHEDULE</a></li>
        <li><a href ="/">REGISTER</a></li>
        <li><a href ="/">TEAM</a></li>
      </ul>
      <div className='contact'>
        <a href="/"><button>CONTACT US</button></a>
      </div>
    </div>
      <hr />
    </>
  )
}

export default Navbar
