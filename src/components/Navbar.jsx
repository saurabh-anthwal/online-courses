import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ auth,setAuth,userName }) {
  function logOut(){
    setAuth(false)
  }
  return (
    <nav className="flex justify-between p-4 bg-gray-100 ">
      <h1 className="text-2xl font-bold">Online Exam</h1>
      <div className="links">
        <Link to="/" className="mx-4 text-blue-600 font-semibold">
          Home
        </Link>
        {auth ? (
          <>
          <Link to="/online-test" className="mx-4 text-blue-600 font-semibold">
            Online Test
          </Link>
          <Link to="/new-course" className="mx-4 text-blue-600 font-semibold">
            New Course
          </Link>
          <span>{userName}</span>
          <Link onClick={logOut} to="/" className="mx-4 text-blue-600 font-semibold">
            logout
          </Link>
          </>
        ) : (
          <Link to="/login" className="mx-4 text-blue-600 font-semibold">
            login
          </Link>
        )}

      </div>
    </nav>
  );
}
