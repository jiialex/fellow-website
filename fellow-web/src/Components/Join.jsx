import React from 'react';
import '../Styles/join.css'

function Join() {
  return (
    <div className='head'>
         <h1>join</h1>
         <h3>you want to join the fellow or the team</h3>
    <div className='join'>
      <div className='form'>
        <label>Full Name</label>
        <input type="text" placeholder="Enter your full name" />
        
        <label>Year</label>
        <input type="number" placeholder="Enter your year" />
        
        <label>Department</label>
        <input type="text" placeholder="Enter your department" />
        
        <label>Your previous experience</label>
        <textarea rows="10" cols="10" />
        <button>Submit</button>
      </div>       
    </div>
    </div>
  );
}

export default Join;
