import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Adminlogin from './pages/Adminlogin';
import Admindash from './pages/Admindash';
import ClassSchedules from './pages/ClassSchedules';
import Classdash from './pages/Classdash';
import StudentRecords from './pages/StudentRecords';
import Studentdash from './pages/Studentdash';
import Wpage from './pages/Wpage';
import Faculty from './pages/Faculty';
import Student from './pages/Student';
import Help from './pages/Help';
import About from './pages/About';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Wpage />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/adminlogin' element={<Adminlogin />} />
        <Route exact path='/admindash' element={<Admindash />} />
        <Route exact path='/classschedules' element={<ClassSchedules />} />
        <Route exact path='/classdash' element={<Classdash />} />
        <Route exact path='/studentrecords' element={<StudentRecords />} />
        <Route exact path='/studentdash' element={<Studentdash />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/faculty' element={<Faculty />} />
        <Route exact path='/student' element={<Student />} />
        <Route exact path='/help' element={<Help />} />
        <Route exact path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
