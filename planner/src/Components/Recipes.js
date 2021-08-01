import React, { useEffect } from 'react'

function Recipes() {
    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/random.php")
            .then(resp => resp.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            <h1>Random recipe of the Day</h1>
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
