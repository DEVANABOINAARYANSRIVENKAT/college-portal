import React from 'react'
import { Link } from 'react-router-dom'
export default function Student() {
  return (
    <div>
      <div className='up'>
        <marquee width="100%" direction="right">
            <h2>Student Page</h2>
        </marquee>
        </div>
        <div className='homebtn'> <p><Link to='/home'><button>Return to Home</button></Link></p> </div>
        <div className='std'>
        <p><Link to='/studentdash'><button>Click to View Existing Student Records</button></Link></p>
        <p><Link to='/classdash'><button>Click to View Existing Class schedules</button></Link></p>
        </div>
    </div>
  )
}
