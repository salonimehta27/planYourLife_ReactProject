import React from 'react'

function RecipeCard({ r, fullUrl }) {
    return (
        <div>
            <div key={r.idMeal}>
                <h2 style={{ paddingLeft: "120px" }}>Random Recipe: {r.strMeal}</h2>
                <p style={{ paddingLeft: "120px" }}>Category: {r.strCategory}</p>
                <p style={{ paddingLeft: "120px" }}>Cuisine: {r.strArea}</p>
                <br></br>
                <iframe
                    style={{ marginLeft: "10%" }}
                    width="800"
                    height="400"
                    src={fullUrl}
                    frameBorder="0"
                    allowFullScreen
                    title="Random Recipe"
                />
                <br></br>
                <p style={{ fontSize: "13px", paddingLeft: "120px", width: "800", height: "400", display: "flex", paddingRight: "200px" }}>Instructions: {r.strInstructions}</p>
                <a href={r.strSource} >Click for full Recipe Ingredients</a>
                <img src={r.strMealThumb} style={{ marginLeft: "10%", width: "300px", height: "200px" }}></img>

            </div>
        </div>
    )
}

export default RecipeCard
