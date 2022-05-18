import React from 'react';
import Courses from '../components/Courses';

export default function Home({courses}) {

  return (
    <div>
      <div className='flex justify-center'>
      <h2 className='text-gray-500 text-2xl font-semibold  p-2  '>Online Courses</h2>
      </div>
      <Courses allCourses={courses}/>
    </div>
  )
}
