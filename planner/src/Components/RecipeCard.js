import React, { useState } from 'react'
import "./CSS/App.css"

function RecipeCard({ r, fullUrl }) {
    const [readMore, setReadMore] = useState(false);
    return (
        <div>
            <div key={r.idMeal} >
                <h2>Random Recipe: {r.strMeal}</h2>
                <p >Category: {r.strCategory}</p>
                <p >Cuisine: {r.strArea}</p>
                <br></br>
                <div className="container">
                    <iframe
                        className="responsive-iframe"
                        src={fullUrl}
                        frameBorder="0"
                        allowFullScreen
                        title="Random Recipe"
                    />
                </div>
                <br></br>
                <p style={{ fontSize: "10px", display: "flex" }}> INSTRUCTIONS: {readMore ? r.strInstructions : `${r.strInstructions.substring(0, 300)}...`}
                    <span onClick={() => setReadMore(!readMore)} style={{ color: "#000099" }} >
                        {readMore ? 'Show less' : 'Read more'}
                    </span>
                </p>
                <a href={r.strSource} style={{ color: "purple", textDecoration: "none" }} >Click for full Recipe Ingredients</a>
                <div className="shadow">
                    <img src={r.strMealThumb} className="logo" style={{ width: "400px", height: "300px" }} ></img>
                </div>
            </div>
        </div>
    )
}

export default RecipeCard
