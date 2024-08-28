import React from 'react'
import { Link } from 'react-router-dom';
export default function About() {
  return (
    <div>
        <div className='up'>
        <marquee width="100%" direction="right">
            <h2>About the Webiste</h2>
        </marquee>
        </div>
        <div className='homebtn'> <p><Link to='/home'><button>Return to Home</button></Link></p> </div>
        <div className='ab'>
        <p><h3><u>Introduction:</u></h3><b>"Welcome to our comprehensive system for managing student records and class schedules."</b></p>
        <p><h3><u>Mission Statement:</u></h3><b>"Our mission is to streamline administrative tasks, enhance communication, and optimize academic scheduling for educational institutions."</b></p>
        <p><h3><u>Key Features:</u></h3><b>"Our system offers a range of features, including student enrollment management, admin enrollment management,Student Record creation and Class Schedule creation."</b></p>
        <p><h3><u>User-Friendly Interface:</u></h3><b>"Our website features a user-friendly interface and intuitive design, ensuring easy navigation for both students and administrators."</b></p>
        <p><h3><u>Security and Privacy:</u></h3><b>"We prioritize the security and privacy of user data, implementing measures such as encryption and restricted access to protect sensitive information."</b></p>
        </div>
    </div>
  )
}
