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
    // console.log(url)
    const cutFirst = url.flat().splice(0, 3)
    const joinUrl = cutFirst.join("/")
    const cutLast = url.flat().splice(3, 4).toString()
    const cut = cutLast.slice(8, 20)
    const fullUrl = joinUrl + "/" + "embed" + "/" + cut

    return (
        <div>
            {showRecipe.map((r) => <RecipeCard r={r} fullUrl={fullUrl} />)}
            <Grocery />
        </div>
    )
}

export default Recipes
// useEffect(() => {
    //     fetch("https://api.spoonacular.com/recipes/informationBulk/?apiKey=3d4e816aa1404a85a86de8fd294378a4")
    //         .then(resp => resp.json())
    //         .then(data => console.table(data.results))
    // })

    // useEffect(() => {
    //     fetch("https://edamam-food-and-grocery-database.p.rapidapi.com/parser", {
    //         "method": "GET",
    //         "headers": {
    //             "x-rapidapi-key": "a398e94d6bmsh878c1c62c04215fp1de95cjsn885428b47829",
    //             "x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com"
    //         }
    //     })
    //         .then(response => response.json())
    //         .then(data => console.log(data))
    //         .catch(err => {
    //             console.error(err);
    //         })
    // }, [])
