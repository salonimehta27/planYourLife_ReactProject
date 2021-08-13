import React, { useEffect, useState } from 'react'
import Grocery from './Grocery'
import RecipeCard from './RecipeCard'

function Recipes() {
    const [showRecipe, setShowRecipe] = useState([])
    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/random.php")
            .then(resp => resp.json())
            .then(data => {
                console.log(data.meals.flat())
                setShowRecipe(data.meals.flat())

            })
    }, [])
    const url = showRecipe.map(x => x.strYoutube.split("/"))
    console.log(url)
    const cutFirst = url.flat().splice(0, 3)
    // console.log(cutFirst)
    const joinUrl = cutFirst.join("/")
    // console.log(joinUrl)
    const cutLast = url.flat().splice(3, 4).toString()
    // console.log(cutLast)
    const cut = cutLast.slice(8, 20)
    // console.log(cut)
    const fullUrl = joinUrl + "/" + "embed" + "/" + cut
    // console.log(fullUrl)
    return (
        <div>
            {showRecipe.map((r) => <RecipeCard key={r.idMeal} r={r} fullUrl={fullUrl} />)}
            <Grocery />
        </div>
    )
}

export default Recipes
