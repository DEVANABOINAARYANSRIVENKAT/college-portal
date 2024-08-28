import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
export default function Studentdash() {
    const [srdata, setsrdata] = useState([]);
    const deleteHandler = (id) => {
        axios.delete(`http://localhost:5000/api/srdata/${id}`).then(res => window.location.reload(false));
    }
    useEffect(() => {
        axios.get('http://localhost:5000/api/srdata').then(res => setsrdata(res.data));
    }, [])
  return (
    <div>
        <div className='up'>
        <marquee width="100%" direction="right">
            <h2>Student Dashboard</h2>
        </marquee>
        </div>
        <div className='stdd'>
        <h2>Student Details:</h2>
        </div>
        <div className='homebtn'> <p><Link to='/home'><button>Return to Home</button></Link></p> </div>
        {srdata.length > 0 && srdata.map(srdata => {
            return(
                <div key={srdata._id} className="srdata">
                    <div className="name"><h3> Name </h3>{srdata.name}</div>
                    <div className="rollno"><h3> Rollno </h3>{srdata.rollno}</div>
                    <div className="emailid"><h3> Emailid </h3>{srdata.emailid}</div>
                    <div className="course"><h3> Course </h3>{srdata.course}</div>
                    <div className="year"><h3> Year </h3>{srdata.year}</div>
                    <div className="branch"><h3> Branch </h3>{srdata.branch}</div>
                    <div className="gender"><h3> Gender </h3>{srdata.gender}</div>
                    <div className="mobileno"><h3> Mobileno </h3>{srdata.mobileno}</div>                    
                    <div className="deltebtn"><button onClick={() => deleteHandler(srdata._id)}>Delete</button></div>
                </div>
            )
        })} 
    </div>
  )
}

















