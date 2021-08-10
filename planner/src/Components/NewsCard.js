import React from 'react'
import "./CSS/NewsCard.css"
function NewsCard({ newsObj }) {
    // console.table(newsObj)
    return (
        <div className="shadow">

            <br></br>
            <h3> {newsObj.title}</h3>
            <h5>Published at: {newsObj.publishedAt}</h5>
            <div className="shadow">
                <img src={newsObj.image} className="logo" alt={newsObj.title} style={{ height: "500px", width: "500px" }}></img>
            </div >
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