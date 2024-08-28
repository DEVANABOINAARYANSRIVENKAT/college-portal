import React from 'react'
import {Link} from 'react-router-dom';
export default function Wpage() {
  return (
    <div>  
      <div className='up'>  
        <marquee width="100%" direction="right">
          <h2>Codegnan MERN stack Internship Project</h2>
        </marquee>
      </div> 
      <div className='webcss'>
        <p><h1>Welcome to the Website!!!!!</h1></p>      
        <div className="goto website"><Link to='/login'><button style={{ fontSize: '15px', padding: '8px 15px' }}>Go to Login page</button></Link> </div>
      </div>
    </div>
  )
}
