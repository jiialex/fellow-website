import React from 'react'
import '../Styles/program.css'
import program from './images/program.png'
import program1 from './images/program1.png'
import programs from './images/programs.png'
import evasue1 from './images/evasue1.png'
import evasue2 from './images/evasue2.png'
import evasue3 from './images/evasue3.png'


 function Programs() {
  return (
    <div className='programs'>
    <div className='program'>
        <h1>Programs</h1>
        <div className='daily'>
            <p>we have a fellowship and worship time together <br />
            wednesday at 12:00pm-2:25pm for focus and <br />
            friday at 12:00pm-2:25pm for evasue.that's great time we have <br />
            together to worship christ and learn bible and also to pray for each other.</p>
            <p>
             there is family for fresh students those join university early.
             in family there is bible study, advice from their senior mom and dad 
             and unity with their brothers and sisters to help each other and guide each other 
             when it's first time and everything is new for them. the general idea is to thrive and grow to the christ.
             to preach gospel and worship god.
            </p>
        </div>
        <div className='images'>
            <img src={program} alt="" className="src"/>
            <img src={program1} alt="" className="src" />
            <img src={programs} alt="" className="src" />
            <img src={evasue1} alt="" className="src" />
            <img src={evasue2} alt="" className="src" />
            <img src={evasue3} alt="" className="src" />

    
        </div>
    </div>
    </div>
  )
}

export default Programs;