import React from 'react'

export default function Signin() {
  return (
    <div>
        <div>
            <h1 className='bg-sky-400 text-white'>welcome to Online-Examination</h1>
            <div className='flex justify-center'>
                <div className='grid grid-cols-2 gap-4 p-4 mt-24 bg-slate-100'>
                   <div><span>First Name: </span><input type="text" placeholder='enter first name..'/></div>
                   <div><span>Last Name : </span><input type="text" placeholder='enter last name..'/></div>
                   <div><span>Email -Id: </span><input type="email" placeholder='enter Email Id..'/></div>
                   <div><span>Mobile No : </span><input type="number" placeholder='enter mobile no..'/></div>
                   <div><span>DOB: </span><input type="date" placeholder='select'/></div>
                </div>  
            </div>
            <button className='px-2 py-1 bg-blue-400 text-white rounded-md mt-4'>Submit</button>  
        </div>
    </div>
  )
}
