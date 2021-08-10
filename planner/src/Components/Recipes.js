import React, { useEffect, useState } from 'react'
import Grocery from './Grocery'
import RecipeCard from './RecipeCard'
import RefreshButton from './RefreshButton'

function Recipes() {
    const [showRecipe, setShowRecipe] = useState([])
    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/random.php")
            .then(resp => resp.json())
            .then(data => {
                // console.log(data.meals.flat())
                setShowRecipe(data.meals.flat())

            })
    }, [])
    const url = showRecipe.map(x => x.strYoutube.split("/"))
    // console.log(url)
    const cutFirst = url.flat().splice(0, 3)
    const joinUrl = cutFirst.join("/")
    const cutLast = url.flat().splice(3, 4).toString()
    const cut = cutLast.slice(8, 20)
    const fullUrl = joinUrl + "/" + "embed" + "/" + cut

    return (
        <div>
            {showRecipe.map((r) => <RecipeCard key={r.id} r={r} fullUrl={fullUrl} />)}
            <Grocery />
        </div>
    )
}

export default Recipes
