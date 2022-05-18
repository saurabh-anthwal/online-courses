import React, { useState } from "react";
import '../App.css'

export default function Courses({allCourses}) {


  return (
    <div>
      <div className="grid grid-cols-4 gap-4 p-2">
        {allCourses.map((course) =>{
          return (
            <div className="border-2 p-2 rounded-md CourseDetails">
              <img src={course.imageUrl} alt="" className="h-32 w-full" />
              <div className="flex justify-between">
              <Ratings rating={course.rating} />
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="white"
                  className="bi bi-hand-thumbs-up-fill inline bg-blue-500 rounded-full p-1 "
                  viewBox="0 0 16 16"
                >
                  <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                </svg>
              
              <button className="minifontLike">{course.likes}</button>
              </span>
              </div>
              <h2 className="font-semibold py-1">{course.name}</h2>
              <p className="minifontLike  ">{course.auth}</p>
              <p className="font-bold py-2 text-xl text-gray-700">₹  {course.price}<strike className="minifontLike">₹ 3,499</strike></p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Ratings({ rating }) {
  //  const [star,setStar]=useState()
  let starRate = "";
  function rates() {
    for (let i = 1; i <= rating; i++) {
      starRate += "☆";
    }
  }
  rates();
  return (
    <>
      <strong className="text-yellow-500 ">{starRate}</strong>
    </>
  );
}

