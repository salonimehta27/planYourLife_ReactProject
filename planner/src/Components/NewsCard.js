import React from 'react'
import "./CSS/NewsCard.css"
function NewsCard({ newsObj }) {
    // console.table(newsObj)
    return (
        <div className="shadow">
            <br></br>
            <h3> {newsObj.title}</h3>
            <h5>Published at: {newsObj.publishedAt}</h5>
            <img src={newsObj.image} className="logo" alt={newsObj.title} style={{ height: "500px", width: "500px" }}></img>
            <h4 style={{ marginLeft: "15%", width: "75%", marginRight: "25%" }}>{newsObj.description}</h4>
            <br></br>
            <p style={{ marginLeft: "15%", width: "75%", marginRight: "25%" }}>{newsObj.content}</p>
            <a href={newsObj.url} style={{ textDecoration: "none", color: "#8918CC" }}>Read more from the source...</a>
            <br></br>
            <hr style={{ height: "5px", color: "black", backgroundColor: "black", width: "50%", marginLeft: "25%", marginRight: "25% !important" }}></hr>
        </div>
    )
}

export default NewsCard
{/* <p >{likes} likes</p>
            <button onClick={() => setLikes(likes + 1)}>Like</button> */}