import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ClassSchedules() {
    const navigate = useNavigate();
    const [classschedules, setclassschedules] = useState({});
    const changeHandler = (e) => {
        setclassschedules({ ...classschedules, [e.target.name]: e.target.value });
    }
    const submitHandler = (e) => {
        const course=document.getElementById("course").value
        const courseCheck=/^[a-zA-Z ]+$/
        const instructor=document.getElementById("instructor").value
        const instructorCheck=/^[a-zA-Z ]+$/
        if(course.length<2){
            alert("course name must be of 2 characters... ")
            return false
        }
        if(!course.match(courseCheck)){
            alert("course name is invalid!!  --> please enter valid course name")
            return false
        }
        if(instructor.length<3){
            alert("please enter full name of instructor ")
            return false
        }
        if(!instructor.match(instructorCheck)){
            alert("instructor name is invalid!!  --> please enter valid instructor name")
            return false
        }
        
        e.preventDefault();
        axios.post(`http://localhost:5000/api/auth/ClassSchedules`, classschedules).then(res => { alert(res.data);navigate('/classdash')  }).catch(err => alert(err.response.data));
    }
    return (
        <div>
            <div className='up'>
            <marquee width="100%" direction="right">
                <h2>Class Schedules</h2>
            </marquee>
            </div> 
            <div className='homebtn'> <p><Link to='/home'><button>Return to Home</button></Link></p> </div>           
            <div className='ClassRecords'>      
            <form className="csform" onSubmit={submitHandler}>                
                <label htmlFor="name"><b>Course: </b>
                    <input type="text" placeholder='ex: ML' name='course' id='course' onChange={changeHandler} autoComplete='off' required />
                </label><br />
                <label htmlFor="name"><b>Instructor: </b>
                    <input type="text" placeholder='lecturer name' name='instructor' id='instructor' onChange={changeHandler} autoComplete='off' required />
                </label><br />
                <label htmlFor="name"><b>Time: </b>
                    <input type="text" placeholder='9.am to 10.am ' name='time' id='time' onChange={changeHandler} autoComplete='off' required />
                </label><br />
                <input className='Sdatabtn' type="submit" value="Submit" />
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
