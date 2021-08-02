import React, { useEffect, useState } from 'react'
import SpaceCard from './SpaceCard'
import "./Space.css"

function Space() {
    const [spacePhoto, setSpacePhoto] = useState({})

    useEffect(() => {
        fetch("https://api.nasa.gov/planetary/apod?api_key=x58xcKd0iMGjd2ikfftoROh3YNa5UEkJn2Vsa9hp")
            .then(resp => resp.json())
            .then(data => setSpacePhoto({
                ...spacePhoto,
                date: data.date,
                image: data.url,
                explanation: data.explanation,
                title: data.title
            }))
    }, [])
    // console.log(spacePhoto)

    return (
        <div className="center">
            {<SpaceCard key={spacePhoto.title}
                date={spacePhoto.date}
                image={spacePhoto.image}
                explanation={spacePhoto.explanation}
                title={spacePhoto.title}></SpaceCard>}
        </div>
    )
}

export default Space
