import React, { useState } from 'react'
import "./CSS/NewsCard.css"
function NewsCard({ newsObj }) {
    // console.table(newsObj)
    const [likes, setLikes] = useState(0);
    return (
        <div>

            <br></br>
            <p>Author:{newsObj.author}</p>
            <p>Description:{newsObj.description}</p>
            <p>Published at:{newsObj.publishedAt}</p>
            <img src={newsObj.urlToImage} className="center" alt={newsObj.title} style={{ height: "500px", width: "500px" }}></img>
            <p >{likes} likes</p>
            <button onClick={() => setLikes(likes + 1)}>Like</button>
            <br></br>
            <h4 >Content:{newsObj.content}</h4>
            <a href={newsObj.url} className="center">Read More...</a>
            <br></br>
            <p >__________________________________________________________________</p>




        </div>
    )
}

export default NewsCard
