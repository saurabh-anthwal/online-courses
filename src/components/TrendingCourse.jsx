import React from 'react'

export default function TrendingCourse() {
  return (<>
    <div><h2>TrendingCourse</h2></div>
    <div className='grid grid-cols-4 gap-4'>

    {trendingCourse.map((trandcourse)=>{
        return <div className=''>
           <img src={trandcourse.imageUrl} alt={trandcourse.imageUrl} className="h-40" />
            <h2>{trandcourse.name}</h2>
        </div>
    })}
    </div>
  </>
  )
}

const trendingCourse=[
    {
        name: "MicroServices with Node JS and React",
        price: 560,
        auth:"Deepak bajaj",
        likes: 1220,
        rating: 4,
        imageUrl:
          "https://blogger.googleusercontent.com/img/a/AVvXsEgjwTmTutUAmWDJD3ZVS_Nr_p2mB9pcM1nAhQ4OSDF-2fV20RX00XAXbX51RJLZKIyAjypqwfSK4uJewV4sRXdbyCxhKkwHRGAYSRZy4uLG5lndOfs5t58OeNNc3HKTSdGbQx7uWLiYclZyV7kPPvQquUkqhvrruBw7YqFGSyWGeEAkk0FDiwGUMlb6yw=w640-h480",
      },
      {
        name: "Css Course The Complete Bootcamp",
        price: 3000,
        likes: 200,
        auth:"saurbh-anthwal",
        rating: 5,
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1w5mMQXBJliIbPIh0Ngfg-LsWDvYfi6V-f8Kv_XBnTGyv3NwU7lFaqbY12wFJx1clXl8&usqp=CAU",
      },
      {
        name: "The Complete Bootcamp JavaScript Course",
        price: 522,
        likes: 200,
        rating: 4,
        auth:"gaurav",
        imageUrl:
          "https://www.avibeweb.com/images/blog/javascript-logo-thembnail.jpg",
      },
      {
        name: "The Modern Nodejs Course For Beginers!!",
        price: 456,
        likes: 200,
        rating: 3,
        auth:"deven smith",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS47jsQG2Qr90GlEudIvofIYIeJycd2WUHnyleaKO4Lw9c3QWlHzLwG6YAldQNBT0TdXAQ&usqp=CAU",
      },
]