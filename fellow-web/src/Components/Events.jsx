import React from 'react'
import charis from './images/charisevent.png'
import charis1 from './images/charisevent1.png'
import charis2 from './images/charisevent2.png'
import charis3 from './images/eventf.png'
import charis4 from './images/eventfo.png'
import '../Styles/event.css'

 function Events() {
  return (
    <div className='events'>
        <h1>Events</h1>
     <p>events are programs we have at zoe for evasue and at charis for focus<br /> and charis and focus mean a place we have to take arest to have unity time <br />with freinds a place we we have bible study pray and it's our house <br /> were we freely do what we want.
     and also some special programs we have there. also there is family time Programs
     an amazing and memorable time it's time and place to thrive and to grow</p>
    <div className='box'>
    <img src={charis4} alt="" className="src" />
      <img src={charis} alt="" className="src" />
      <img src={charis1} alt="" className="src" />
      <img src={charis2} alt="" className="src" />
      <img src={charis3} alt="" className="src" />

    </div>
</div>
  )
}

export default Events;