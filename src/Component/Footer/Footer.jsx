import React from 'react'
import './Footer.css'

const Footer = () => {
return (
  <>
  <div className='footer'>
    <div className='information'>
      <div className='FooterLogo'>
        <img src="./Photo/Excel_Logo_Anim.gif" alt="" srcset="" />
      </div>
      <div className='vertical'></div>
      <div className='footerDetails'>
        <div><a href="/">REGISTER</a></div>
        <div><a href="/">CONTACT</a></div>
        <div><a href="/">OUR TEAM</a></div>
      </div>
      <div className='vertical'></div>
      <div className='footerSocial'>
        <p>SOCIALIZE WITH CLUB EXCEL</p>
        <div className='sociaMedia'>
          <div><a href="/"><i className="fa-brands fa-instagram"></i></a></div>
          <div><a href="/"><i className="fa-brands fa-twitter "></i></a></div>
          <div><a href="/"><i className="fa-brands fa-facebook-f"></i></a></div>
          <div><a href="/"><i className="fa-brands fa-linkedin-in"></i></a></div>
        </div>
        <div className='footerContact'>
        <a href="/"><button>CONTACT US</button></a>
        </div>
      </div>
    </div>
    <div className="horizontal"></div>
    <div className='police'>
      <p>2023 © Club Excel - ALL RIGHTS RESERVED</p>
    </div>
  </div>
  </>
  )
}

export default Footer