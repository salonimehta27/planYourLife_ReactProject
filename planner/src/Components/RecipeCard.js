import React, { useState } from "react"
import "./CSS/App.css"

function RecipeCard({ r, fullUrl }) {
	const [readMore, setReadMore] = useState(false)
	const [note, setNote] = useState(false)
	return (
		<div>
			<div key={r.idMeal}>
				<h2>Random Recipe: {r.strMeal}</h2>
				<p>Category: {r.strCategory}</p>
				<p>Cuisine: {r.strArea}</p>
				<h4 style={{ color: "#8F25FA" }} onClick={() => setNote(!note)}>
					{note
						? "Note : Sometimes YouTube videos are not available in a case they are deleted or not allowed to be shared on other sites. If a video is unavailable please refresh the page or click on a different tab and come back to this, it will generate new random recipe"
						: "Click to See Note"}
				</h4>
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
				<p>
					{" "}
					INSTRUCTIONS:{" "}
					{readMore
						? r.strInstructions
						: `${r.strInstructions.substring(0, 300)}...`}
					<span
						onClick={() => setReadMore(!readMore)}
						style={{ color: "#000099" }}
					>
						{readMore ? "Show less" : "Read more"}
					</span>
				</p>
				<a
					href={r.strSource}
					style={{ color: "purple", textDecoration: "none" }}
				>
					Click for full Recipe Ingredients
				</a>
				<div className="shadow">
					<img
						src={r.strMealThumb}
						alt="recipe"
						className="logo"
						style={{ width: "400px", height: "300px" }}
					></img>
				</div>
			</div>
		</div>
	)
}

export default RecipeCard
