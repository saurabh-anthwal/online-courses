import React from "react";
import '../App.css'
import {Link} from "react-router-dom"
import {useNavigate} from "react-router-dom";

export default function ({setAuth}) {
  let navigate = useNavigate();
let saurabh="";
let anthwal="";

  function loginUser(){
    console.log(Auth.userName)
    if(Auth.user.userName==saurabh || Auth.user.password==anthwal){
      setAuth(true);
      navigate("/");
    }else{
      alert("enter corect login")
    }
   
  }
  function useremail(email){
   saurabh=email.target.value
  }
  function userpassword(pass){
    anthwal=pass.target.value
  }

  return (
    <div>
      <div>
        <h1 className="bg-sky-400 text-white">welcome to Online-Examination</h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 gap-4 px-4 py-10 mt-24 bg-slate-100 shadow-md rounded-md">
            <div>
              <span className="text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="gray"
                  className="bi bi-envelope-fill inline-block"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                </svg>{" "}
              </span>
              <input
                type="email"
                className="outline-none px-1 py-1 bg-transparent border-b-2"
                placeholder="enter Email Id.."
                onChange={useremail}
              />
            </div>
            <div>
              <span className="text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="gray"
                  className="bi bi-lock-fill inline-block"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                </svg>
              </span>

              <input
                type="password"
                className="outline-none px-1 py-1 bg-transparent border-b-2"
                placeholder="select"
                onChange={userpassword}
              />
            </div>
            <button onClick={loginUser} className="px-2 py-1 bg-blue-400 text-white rounded-md mt-4">
              Submit
            </button>
            <p className="forgetTxt"><a href="#">Forgotten Password?</a></p>
            <div>
              <Link to="/signin" >
            <button className="createAcountTxt px-2 py-1 bg-green-400 text-white rounded-md mt-4 font-bold">
              Create New Account
            </button>   
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


const Auth={
  user:{userName:"saurabh",password:"anthwal"},
  user:{userName:"gaurav",password:"anthwal"},
}
