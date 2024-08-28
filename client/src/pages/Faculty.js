import React from 'react'
import { Link } from 'react-router-dom';
export default function Faculty() {
  return (
    <div>
        <div className='up'>
        <marquee width="100%" direction="right">
            <h2>Faculty page</h2>
        </marquee>
        </div>
        <div className='homebtn'> <p><Link to='/home'><button>Return to Home</button></Link></p> </div>
        <div className='fac'>
        <p><Link to='/StudentRecords'><button><b>Click to Enter New Student Record</b></button></Link></p>
        <p><Link to='/studentdash'><button><b>Click to View Existing Student Records</b></button></Link></p>
        <p><Link to='/classschedules'><button><b>Click to Enter New Class Schedule</b></button></Link></p>
        <p><Link to='/classdash'><button><b>Click to View Existing Class Schedules</b></button></Link></p>
    </div>
    </div>
  )
}
