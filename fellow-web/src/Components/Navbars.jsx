import React from 'react'
import '../Styles/navbar.css'


function Navbars() {
  return (
    <div className='navbar-nav sm-40px'>
        <div className='navbar'>
        <div className="head">
            <h1 className='left-side'><span>JIT</span> fellowship</h1>
            </div>
<div className='right-side'>
    <a href="programs">Programs</a>
    <a href="event">Events</a>
    <a href="teams">Teams</a>
    <a href="join">Join</a>
    <a href="services">Services</a>
</div>
        </div>
        </div>

  )
}

export default Navbars;