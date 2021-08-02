import React, { useState } from 'react'
import "./NewsCard.css"
function NewsCard({ newsObj }) {
    // console.table(newsObj)
    const [likes, setLikes] = useState(0);
    return (
        <div>

            <br></br>
            <p className="center">Author:{newsObj.author}</p>
            <p className="center">Description:{newsObj.description}</p>
            <p className="center">Published at:{newsObj.publishedAt}</p>
            <img src={newsObj.urlToImage} className="center" alt={newsObj.title} style={{ height: "500px", width: "500px" }}></img>
            <p className="center">{likes} likes</p>
            <button className="center" onClick={() => setLikes(likes + 1)}>Like</button>
            <br></br>
            <h4 className="center">Content:{newsObj.content}</h4>
            <a href={newsObj.url} className="center">Read More...</a>
            <br></br>
            <p className="center">__________________________________________________________________</p>




        </div>
    )
}

export default NewsCard
