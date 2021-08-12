import React from 'react'
import "./CSS/Space.css"

function SpaceCard({ title, date, explanation, image }) {
    return (
        <div className="overlay">
            <h1>NASA Astronomy picture of the Day</h1>
            <h4>{date}</h4>
            <h3>{title}</h3>
            <img src={image} alt={title} className="logo" style={{ height: "500px", width: "500px" }}></img>
            <p className="centerText">{explanation}</p>


        </div>
    )
}

export default SpaceCard
