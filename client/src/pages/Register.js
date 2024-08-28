import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();
    const [register, setregister] = useState({ name: '', username: '', email: '', password: '' });
    const changeHandler = (e) => {
        setregister({ ...register, [e.target.name]: e.target.value });
    }
    const submitHandler = (e) => {
        const name=document.getElementById("fullname").value
        const nameCheck=/^[a-zA-Z ]+$/
        const username=document.getElementById("username").value
        const usernameCheck=/^[a-zA-Z ]+$/
        const emailId=document.getElementById("emailid").value
        const emailIdCheck=/^[a-z0-9.]+@[a-z0-9]+\.[a-z]{2,3}$/
        const pwd=document.getElementById("password").value
        const pwdCheck=/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
        if(name.length<3){
            alert("please enter your full name")
            return false
        }
        if(!name.match(nameCheck)){
            alert("Name is invalid!!  --> please enter valid name")
            return false
        }
        if(username.length<3){
            alert("Username must contain atleast 3 characters")
            return false
        }
        if(!username.match(usernameCheck)){
            alert("Name is invalid!!  --> please enter valid name")
            return false
        }
        if(!emailId.match(emailIdCheck)){
            alert("emailId is invalid!!  --> please enter valid emailId")
            return false
        }
        if(pwd.length<6){
            alert("Password must contain more than 6 characters")
            return false
        }
        if(pwd.length>16){
            alert("Password must contain less than 16 characters")
            return false
        }
        if(!pwd.match(pwdCheck)){
        alert("password is invalid!!  --> password must contain atleast:\n 1 capital letter\n 1 small letter\n 1 special character\n 1 digit")
            return false
        }
        e.preventDefault();
        axios.post(`http://localhost:5000/api/auth/register`, register).then(res => { alert(res.data); navigate('/login') }).catch(err => alert(err.response.data));
    }
    return (
        <div>
            <div className='up'>
            <marquee width="100%" direction="right">
                <h2>Register page </h2>
            </marquee>
            </div>
        <div className='register'>            
            <div className="loginadmin"><Link to='/adminlogin' ><button>Login as Admin</button></Link></div>
            <h2 className="regishead">Sign-up</h2>
            <form className="regisform" onSubmit={submitHandler}>
                <label htmlFor="name">Name: <br />
                    <input type="text" placeholder='fullname' name='name' id='fullname' onChange={changeHandler} autoComplete='off' required />
                </label>
                <label htmlFor="name">Username: <br />
                    <input type="text" placeholder='username' name='username' id='username' onChange={changeHandler} autoComplete='off' required />
                </label>
                <label htmlFor="name">Email: <br />
                    <input type="text" placeholder='example@gmail.com' name='email' id='emailid' onChange={changeHandler} autoComplete='off' required />
                </label>
                <label htmlFor="name">Password: <br />
                    <input type="password" placeholder='Password@123' name='password' id='password' onChange={changeHandler} autoComplete='off' required />
                </label>                
                <input className='regisbtn' type="submit" value="Register" />
            </form>
            <div className="already">Already have an account? <Link to='/login'>Sign-In</Link></div>
        </div>
        </div>
    )
}
