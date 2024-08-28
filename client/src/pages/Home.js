import React from 'react'
import { useNavigate, Link } from 'react-router-dom';
export default function App() {
  return (
    <div>
      <div className='up'>
      <marquee width="100%" direction="right">
      <h2>Website Home Page</h2>
      </marquee>
      </div>
      <nav class='navbar'>        
        <a href=""><Link to='/faculty'>Faculty</Link></a>
        <a href=""><Link to='/student'>Student</Link></a>
        <a href=""><Link to='/adminlogin'>Admin</Link></a>
        <a href=""><Link to='/about'>About</Link></a>
        <a href=""><Link to='/help'>Help</Link></a>   
        <a href=""><Link to='/login'>Logout</Link></a>         
      </nav>      
      <div className='system'>
        <h2>
          A System to Manage Student Records and class Schedules...
          </h2>
      </div>
    </div>
  )
}
