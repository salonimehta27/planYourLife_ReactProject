import React, { useEffect, useState } from 'react'
import Grocery from './Grocery'

function Recipes() {
    const [showRecipe, setShowRecipe] = useState([])
    // const[]
    // const [url, setUrl] = useState("")
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
    const joinUrl = cutFirst.join("/")
    const cutLast = url.flat().splice(3, 4).toString()
    const cut = cutLast.slice(8, 20)
    const fullUrl = joinUrl + "/" + "embed" + "/" + cut
    // const newArr = cut.splice(8, 19)
    // console.log(newArr)

    // console.log(url)
    // console.log(showRecipe.strYoutube)
    return (
        <div>

            {showRecipe.map((r) => {
                return (
                    <div key={r.idMeal}>
                        <h2 style={{ paddingLeft: "120px" }}>Random Recipe: {r.strMeal}, Category: {r.strCategory}</h2>
                        <br></br>
                        <iframe
                            style={{ paddingLeft: "120px" }}
                            width="800"
                            height="400"
                            src={fullUrl}
                            frameBorder="0"
                            allowFullScreen
                            title="Random Recipe"
                        />
                        <br></br>
                        <p style={{ fontSize: "13px", paddingLeft: "120px", width: "800", height: "400", display: "flex", paddingRight: "200px" }}>Instructions: {r.strInstructions}</p>
                        <img src={r.strMealThumb} style={{ paddingLeft: "120px", width: "400px", height: "200px" }}></img>
                    </div>
                )
            })
            }

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
