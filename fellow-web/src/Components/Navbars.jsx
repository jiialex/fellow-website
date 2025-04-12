import React from 'react'
import '../Styles/navbar.css'
import bible from './images/bible.png'

function Navbars() {
  return (
    <div className='navbar-nav sm-40px'>
        <div className='navbar'>
        
          <div className="head">
            <div className='logo-container'>
          <img src={bible} alt=" "/> 
        <h1 className='left-side'><span>JIT</span> fellowship</h1>
            </div>
            </div>
<div className='right-side'>
    <a href="/">Home</a>
    <a href="programs">Programs</a>
    <a href="event">Events</a>
    <a href="teams">Teams</a>
    <a href="join">Join</a>
  
</div>
        </div>
        </div>
     

  )
}

export default Navbars;