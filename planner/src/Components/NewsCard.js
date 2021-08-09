import React, { useState } from 'react'
import "./CSS/NewsCard.css"
function NewsCard({ newsObj }) {
    // console.table(newsObj)
    const [likes, setLikes] = useState(0);
    return (
        <div>

            <br></br>

            <p>Title: {newsObj.title}</p>
            <p>Published at: {newsObj.publishedAt}</p>
            <img src={newsObj.image} className="center" alt={newsObj.title} style={{ height: "500px", width: "500px" }}></img>
            <h4 >{newsObj.description}</h4>
            <br></br>
            <p>{newsObj.content}</p>
            <a href={newsObj.url} className="center">Read More...</a>
            <br></br>
            <p >__________________________________________________________________</p>




        </div>
    )
}

export default NewsCard
{/* <p >{likes} likes</p>
            <button onClick={() => setLikes(likes + 1)}>Like</button> */}