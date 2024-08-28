import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
export default function Classdash() {
    const [userss, setuserss] = useState([]);
    const deleteHandler = (id) => {
        axios.delete(`http://localhost:5000/api/csdata/${id}`).then(res => window.location.reload(false));
    }
    useEffect(() => {
        axios.get('http://localhost:5000/api/csdata').then(res => setuserss(res.data));
    }, [])
  return (
    <div>
        <div className='up'>
        <marquee width="100%" direction="right">
            <h2>Class Dashboard</h2>
        </marquee>
        </div>
        <div className='cd'>
        <h2>Class Schedules</h2>
        </div>
        <div className='homebtn'> <p><Link to='/home'><button>Return to Home</button></Link></p> </div>
        {userss.length > 0 && userss.map(csdata => {
            return(
                <div key={csdata._id} className="csdata">       
                    <div className="course"><h3>course</h3>{csdata.course}</div>
                    <div className="instructor"><h3>instructor</h3>{csdata.instructor}</div>
                    <div className="time"><h3>time</h3>{csdata.time}</div>
                    <div className="deltebtn"><button onClick={() => deleteHandler(csdata._id)}>Delete</button></div>
                </div>
            )
        })} 
    </div>
  )
}

















