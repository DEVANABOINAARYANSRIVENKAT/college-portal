import React from 'react'
import { Link } from 'react-router-dom'
export default function Help() {
  return (
    <div>
      <div className='up'>
        <marquee width="100%" direction="right">
            <h2>Help</h2>
        </marquee>
        </div>
        <div className='homebtn'> <p><Link to='/home'><button>Return to Home</button></Link></p> </div>
        <div className='help'>
          <b>
        <p>***First you will have Website page of this website...Click on Go to Login page button to have the login page. </p>
        <p>***Then after you log in you will have Home page</p>
        <p>***In Home page you will have...</p>
        <div>
            <p>1: Faculty</p>
            <p>2: Student</p>
            <p>3: Admin</p>
            <p>4: About</p>
            <p>5: Help</p>
            <p>6: Logout</p>            
        </div>
        <p>***Click on <u>Faculty</u> to  add/view/delete  Student Records/Class Schedules.</p>
        <p>***Click on <u>Student</u> to view Student Records/Class Schedules.<br/>  </p>
        <p>***Click on <u>Admin</u> to login to the Admin.</p>
        <p>***Click on <u>About</u> to know about the website.</p>
        <p>***Click on <u>Help</u> to get help to use the website.</p>
        <p>***Click on <u>Logout</u> to logout from the session.</p></b>
        </div>
    </div>
  )
}
