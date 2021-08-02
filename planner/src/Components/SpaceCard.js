import React from 'react'

function SpaceCard({ title, date, explanation, image }) {
    return (
        <div>
            <h1>NASA Astronomy picture of the Day</h1>
            <h4>{date}</h4>
            <h3>{title}</h3>
            <img src={image} alt={title} style={{ height: "500px", width: "500px" }}></img>
            <p>{explanation}</p>


        </div>
    )
}

export default SpaceCard
