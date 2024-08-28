import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function StudentRds() {
    const navigate = useNavigate();
    const [studentrecords, setstudentrecords] = useState({ });
    const changeHandler = (e) => {
        setstudentrecords({ ...studentrecords, [e.target.name]: e.target.value });
    }
    const submitHandler = (e) => {
        const name=document.getElementById("fullname").value
        const nameCheck=/^[a-zA-Z ]+$/
        const rollno=document.getElementById("rollno").value
        const rollnoCheck=/^[a-zA-Z0-9 ]+$/
        const emailId=document.getElementById("emailid").value
        const emailIdCheck=/^[a-z0-9.]+@[a-z0-9]+\.[a-z]{2,3}$/
        const course=document.getElementById("course").value
        const courseCheck=/^[a-zA-Z. ]+$/
        const year=document.getElementById("year").value
        const yearCheck=/^[a-zA-Z0-9 ]+$/
        const branch=document.getElementById("branch").value
        const branchCheck=/^[a-zA-Z ]+$/
        const gender=document.getElementById("gender").value
        const genderCheck=/^[a-zA-Z ]+$/
        const mobileno=document.getElementById("mobileno").value
        const mobilenoCheck=/^[0-9 ]+$/
        if(name.length<3){
            alert("please enter your full name")
            return false
        }
        if(!name.match(nameCheck)){
            alert("Name is invalid!!  --> please enter valid name")
            return false
        }
        if(rollno.length!=10){
            alert("Rollno must be of 10 characters...")
            return false
        }
        if(!rollno.match(rollnoCheck)){
            alert("Rollno is invalid!!  --> please enter valid rollno")
            return false
        }
        if(!emailId.match(emailIdCheck)){
            alert("emailId is invalid!!  --> please enter valid emailId")
            return false
        }
        if(course.length<3){
            alert("please enter your exact course name")
            return false
        }
        if(!course.match(courseCheck)){
            alert("course name is invalid!!  --> please enter valid course name")
            return false
        }
        if(!year.match(yearCheck)){
            alert("year is invalid!!  --> please enter valid year")
            return false
        }
        if(branch.length<3){
            alert("please enter your branch name")
            return false
        }
        if(!branch.match(branchCheck)){
            alert("branch name is invalid!!  --> please enter valid branch name")
            return false
        }
        if(gender.length<3){
            alert("please enter your branch name")
            return false
        }
        if(!gender.match(genderCheck)){
            alert("branch name is invalid!!  --> please enter valid gender")
            return false
        }
        if(mobileno.length!=10){
            alert("mobileno must be of 10 numbers...")
            return false
        }
        if(!mobileno.match(mobilenoCheck)){
            alert("mobileno is invalid!!  --> please enter valid mobileno")
            return false
        }        

        e.preventDefault();
        axios.post(`http://localhost:5000/api/auth/StudentRecords`, studentrecords).then(res => { alert(res.data);navigate('/studentdash')  }).catch(err => alert(err.response.data));
    }
    return (
        <div>
            <div className='up'>
            <marquee width="100%" direction="right">
                <h2>Student Records</h2>
            </marquee>
            </div>
            <div className='homebtn'> <p><Link to='/home'><button>Return to Home</button></Link></p> </div>
        <div className='StudRecords'>
            
            <form className="srform" onSubmit={submitHandler}>
                
                <label htmlFor="name"><b>Name:</b>
                    <input type="text" placeholder='fullname' name='name' id='fullname' onChange={changeHandler} autoComplete='off' required />
                </label><br/>
                <label htmlFor="name"><b>RollNo:</b> 
                    <input type="text" placeholder='208T1A0527' name='rollno' id='rollno' onChange={changeHandler} autoComplete='off' required />
                </label><br/>
                <label htmlFor="name"><b>Emailid:</b>
                    <input type="text" placeholder='example@gmail.com' name='emailid' id='emailid' onChange={changeHandler} autoComplete='off' required />
                </label><br/>
                <label htmlFor="name"><b>Course:</b>
                    <input type="text" placeholder='B.Tech/degree' name='course' id='course' onChange={changeHandler} autoComplete='off' required />
                </label><br/>
                <label htmlFor="name"><b>Year:</b>
                    <input type="text" placeholder='ex: 3rd year' name='year' id='year' onChange={changeHandler} autoComplete='off' required />
                </label><br/>
                <label htmlFor="name"><b>Branch:</b>
                    <input type="text" placeholder='ex:CSE' name='branch' id='branch' onChange={changeHandler} autoComplete='off' required />
                </label><br/>
                <label htmlFor="name"><b>Gender:</b>
                    <input type="text" placeholder='male/female' name='gender' id='gender' onChange={changeHandler} autoComplete='off' required />
                </label><br/>
                <label htmlFor="name"><b>Mobileno:</b>
                    <input type="text" placeholder='1234567890' name='mobileno' id='mobileno' onChange={changeHandler} autoComplete='off' required />
                </label><br/>
                <input className='Sdatabtn' type="submit" value="Submit Student Record" />
            </form>
            </div>
        </div>
    )
}


























// import React, { useState } from 'react';

// const ClassScheduleForm = ({ onAddClass }) => {
//   const [course, setCourse] = useState('');
//   const [time, setTime] = useState('');
//   const [instructor, setInstructor] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onAddClass({ course, time, instructor });
//     setCourse('');
//     setTime('');
//     setInstructor('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Add Class Schedule :</h2>
//       <label>
//         Course:
//         <input type="text" value={course} onChange={(e) => setCourse(e.target.value)} />
//       </label>
//       <label>
//         Time:
//         <input type="text" value={time} onChange={(e) => setTime(e.target.value)} />
//       </label>
//       <label>
//         Instructor:
//         <input type="text" value={instructor} onChange={(e) => setInstructor(e.target.value)} />
//       </label>
//       <button type="submit">Add Class</button>
//     </form>
//   );
// };

// const ClassSchedule = ({ classData, index, onDelete, onEdit }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedCourse, setEditedCourse] = useState(classData.course);
//   const [editedTime, setEditedTime] = useState(classData.time);
//   const [editedInstructor, setEditedInstructor] = useState(classData.instructor);

//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   const handleSave = () => {
//     onEdit(index, { course: editedCourse, time: editedTime, instructor: editedInstructor });
//     setIsEditing(false);
//   };

//   const handleCancel = () => {
//     setIsEditing(false);
//     setEditedCourse(classData.course);
//     setEditedTime(classData.time);
//     setEditedInstructor(classData.instructor);
//   };

//   return (
//     <div>
//       {isEditing ? (
//         <>
//           <input value={editedCourse} onChange={(e) => setEditedCourse(e.target.value)} />
//           <input value={editedTime} onChange={(e) => setEditedTime(e.target.value)} />
//           <input value={editedInstructor} onChange={(e) => setEditedInstructor(e.target.value)} />
//           <button onClick={handleSave}>Save</button>
//           <button onClick={handleCancel}>Cancel</button>
//         </>
//       ) : (
//         <>
//           <p>Course: {classData.course}</p>
//           <p>Time: {classData.time}</p>
//           <p>Instructor: {classData.instructor}</p>
//           <button onClick={handleEdit}>Edit</button>
//           <button onClick={onDelete}>Delete</button>
//         </>
//       )}
//     </div>
//   );
// };

// const ClassScheduleManager = () => {
//   const [classSchedules, setClassSchedules] = useState([]);

//   const addClass = (classData) => {
//     setClassSchedules([...classSchedules, classData]);
//   };

//   const editClass = (index, editedClassData) => {
//     const updatedClassSchedules = [...classSchedules];
//     updatedClassSchedules[index] = editedClassData;
//     setClassSchedules(updatedClassSchedules);
//   };

//   const deleteClass = (index) => {
//     const updatedClassSchedules = [...classSchedules];
//     updatedClassSchedules.splice(index, 1);
//     setClassSchedules(updatedClassSchedules);
//   };

//   return (
//     <div>
//       <h1>Class Schedule Manager</h1>
//       <ClassScheduleForm onAddClass={addClass} />
//       <h2>Class Schedules :</h2>
//       {classSchedules.map((classData, index) => (
//         <ClassSchedule
//           key={index}
//           classData={classData}
//           index={index}
//           onDelete={() => deleteClass(index)}
//           onEdit={editClass}
//         />
//       ))}
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div>
//       <ClassScheduleManager />
//     </div>
//   );
// };

// export default App;
