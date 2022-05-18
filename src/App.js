import "./App.css";
import React, { useEffect } from 'react'
import Login from "./login/Login";
import Signin from "./signin/Signin";
import Home from "./main/Home";



// import {useLo} from 'react-dom';

import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import NewCourse from "./components/NewCourse";
import OnlineTest from "./components/OnlineTest"
import {allCourses} from "./components/data/courseData"
// import Logout from "./logout/Logout";

function App() {
  const [auth,setAuth]=useState(false)  
  const [courses, setCourses] = useState(allCourses);
  return (
    <BrowserRouter>
      <div className="App"> 
      <Navbar auth={auth} setAuth={setAuth}/>
        <Routes>
          <Route path="/" element={ auth ? <Home  courses={courses}/> : <Navigate replace to="/login" />} />
          <Route path="/login" element={<Login setAuth={setAuth}/>} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/new-course" element={<NewCourse courses={courses} setCourses={setCourses}/>} />
          <Route path="/online-test" element={<OnlineTest/>} />
          {/* <Route path="/login" element={<Logout/>} /> */}

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
