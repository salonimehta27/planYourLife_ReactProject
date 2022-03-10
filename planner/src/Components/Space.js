import React, { useEffect, useState } from "react"
import SpaceCard from "./SpaceCard"
import "./CSS/Space.css"

function Space() {
	const [spacePhoto, setSpacePhoto] = useState({})
	const apiKey = process.env.REACT_APP_NASA_API_KEY
	useEffect(() => {
		fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
			.then((resp) => resp.json())
			.then((data) =>
				setSpacePhoto({
					...spacePhoto,
					date: data.date,
					image: data.url,
					explanation: data.explanation,
					title: data.title,
				})
			)
	}, [])

	return (
		<div className="overlay">
			{
				<SpaceCard
					key={spacePhoto.title}
					date={spacePhoto.date}
					image={spacePhoto.image}
					explanation={spacePhoto.explanation}
					title={spacePhoto.title}
				></SpaceCard>
			}
		</div>
	)
}

export default Space
