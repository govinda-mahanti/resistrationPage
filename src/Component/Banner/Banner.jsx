import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
  <>

  <div style={{backgroundColor:"#160e2a"}}>
    <link rel="stylesheet" href=" https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
       
    <div className='club'>
      <div className="twopart"> 
        <div className="leftside">
          <h1>CLUB EXCEL</h1>
          <h3 className='work'>One of the Top Coding</h3>
          <h3 className='work'>Club in NIST University</h3>
          <h3 className='work'>Represent </h3>
          <h3 className='workshop'>Frontend Workshop</h3>
          <h3 className='workshop'>Using React</h3>
        </div>
        <div className="rightside"> 
          <img src="./Photo/Excel_Logo_Anim.gif" alt="" srcset="" /> 
        </div>
      </div>
        <div className="msg">
          <div className="msg1">
            <i class="fa-regular fa-clock"></i>
            <p>16th March,2024 </p>
          </div>
          <div className="msg2">
            <i class="fa-solid fa-location-dot"></i>
            <p>Galleria ,NIST University</p>
          </div>
        </div>
      </div>
             {/* about workshop */}
             
      <div className="aboutWorkshop">
        <h1>About Workshop</h1>
        <div className="about">
          <div className="left">
            <p>The Frontend Project Workshop organized by Club Excel is an immersive
               and hands-on experience aimed at providing participants with a solid 
               foundation in web development. The workshop will cover essential 
               technologies including HTML, CSS, JavaScript, and React, catering to
                both beginners and those looking to deepen their understanding. </p>
          
            <p>The workshop goes beyond individual skill development, fostering a 
              sense of community through open discussions, Q&A sessions, and networking 
              opportunities.  </p>
          </div>
         
            <img src="./Photo/reactjscss.png" alt="" srcset="" />
        
        </div>
      </div>
    {/* shedule */}
    <div className="schedule">
      <div className="head">
        <h1>Event Schedule</h1>
      </div>
      <div className="scheduleTable">
        <div className="tableBox">Date</div>
        <div className="tableBox">Program</div>
        <div className="tableBox">Timing</div>
        {/* <div className="tableBox">15th March</div>
        <div className="tableBox">Basics of Html, Css, JavaScript and React</div>
        <div className="tableBox">4-7pm</div> */}
        <div className="tableBox">16th March</div>
        <div className="tableBox">React project</div>
        <div className="tableBox">3-5pm</div>
      </div>
      <div className='bannerRegister'>
        <a href="/" className='register'><button className='registerButton'>REGISTER NOW</button></a>
        </div>
    </div>

    </div>
  </>
  )
}

export default Banner