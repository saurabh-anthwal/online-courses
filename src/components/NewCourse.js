import React, { useState } from "react";

export default function NewCourse({ courses, setCourses }) {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [likes, setLikes] = useState("");
  const [ratings, setRatings] = useState("");
  const [img, setImg] = useState("");

  function saveCourse(){
    if(!name || !price || !author || !ratings || !img || !likes){
      alert('Shut Up')
      return
    }
    const newCourse = {
      name: name,
      auth: author,
      price: price,
      likes: likes,
      rating: ratings,
      imageUrl: img
    };

    setCourses([...courses, newCourse]);
    alert('Course Saved !')
  }
  return (
    <> 
      <div className="grid gap-5  justify-center p-5 bg-blue-100">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Course name"
            className="px-2 py-1 outline-none rounded-sm border-2 border-gray-300"
          />
          <input
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            type="text"
            placeholder="Enter Author name"
            className="px-2 py-1 outline-none rounded-sm border-2 border-gray-300"
          />
        </div>
        <div>
          <input
            value={ratings}
            onChange={(e) => setRatings(e.target.value)}
            type="text"
            placeholder="Rating"
            className="px-2 py-1 outline-none rounded-sm border-2 border-gray-300"
          />
          <input
            value={likes}
            onChange={(e) => setLikes(e.target.value)}
            type="text"
            placeholder="likes"
            className="px-2 py-1 outline-none rounded-sm border-2 border-gray-300"
          />
        </div>
        <div>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="text"
            placeholder="price"
            className="px-2 py-1 outline-none rounded-sm border-2 border-gray-300"
          />
          <input
            value={img}
            onChange={(e) => setImg(e.target.value)}
            type="text"
            placeholder="image"
            className="px-2 py-1 outline-none rounded-sm border-2 border-gray-300"
          />
        </div>
        <div>
          <button onClick={saveCourse} className="px-2 py-1 bg-green-500 text-white rounded-md">
            submit
          </button>
        </div>
      </div>
      {/* <TrendingCourse/> */}
    </>
  );
}
