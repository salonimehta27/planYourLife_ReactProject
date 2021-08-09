import React, { useState } from 'react'
import NewsCard from './NewsCard'
import { nanoid } from 'nanoid'
import "./CSS/NewsCard.css"

function NewsContainer({ news, setNews }) {
    const [selectNewsCategory, setSelectNewsCategory] = useState("Choose Category")

    const displayNews = news.map(n => {
        return <NewsCard key={nanoid()} newsObj={n}></NewsCard>
    })

    const baseUrl = "https://gnews.io/api/v4/"
    const apiFilterKey = "&token=d8008eba398b89556c24d4ca6f490369&lang=en&country=us"
    // const newApiKey = "d8008eba398b89556c24d4ca6f490369"
    const technology = `${baseUrl}search?q=technology${apiFilterKey}`
    const business = `${baseUrl}search?q=business${apiFilterKey}`
    const topHeadlines = `${baseUrl}top-headlines?${apiFilterKey}`
    const entertainment = `${baseUrl}search?q=entertainment${apiFilterKey}`
    const health = `${baseUrl}search?q=health${apiFilterKey}`
    const sports = `${baseUrl}search?q=sports${apiFilterKey}`
    const science = `${baseUrl}search?q=science${apiFilterKey}`

    const newsType = ["entertainment", "topHeadlines", "technology", "business", "sports", "health", "science"];
    function handleChange(e) {
        setSelectNewsCategory(e.target.value)
        //console.log(e.target.value)
        const findType = newsType.find(n => e.target.value === n)
        const fetchUrl = eval(findType)
        fetch(fetchUrl).then(res => res.json()).then(data => setNews(data.articles))
        //console.log(fetchUrl)
    }


    return (
        <div className="center">
            <h1 >Top News Headlines</h1>
            <br></br>
            <div>
                <label htmlFor="newsSource">Select News Type : </label>
                <select name="newsSource" value={selectNewsCategory} onChange={(e) => handleChange(e)}>
                    <option>Choose Category</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="topHeadlines">Top Headlines</option>
                    <option value="technology">Technology</option>
                    <option value="business">Business</option>
                    <option value="sports">Sports</option>
                    <option value="health">Health</option>
                    <option value="science">Science</option>
                </select>

            </div>
            {displayNews}
        </div>
    )
}

export default NewsContainer
// const apiKey = "bdff385f2d4342ae913c30dcda75ccf4"
//     const baseUrl = "https://newsapi.org/v2/"
//     const businessUrl = `${baseUrl}top-headlines?country=us&category=business&apiKey=${apiKey}`
//     const apple = `${baseUrl}everything?q=apple&from=2021-07-31&to=2021-07-31&sortBy=popularity&apiKey=${apiKey}`
//     const techCrunch = `${baseUrl}top-headlines?sources=techcrunch&apiKey=${apiKey}`
//     const wallStreetJournal = `${baseUrl}/everything?domains=wsj.com&apiKey=${apiKey}`

//     function handleChange(e) {
//         setSelectNewsCategory(e.target.value)
//         // console.log(e.target.value)
//         if (e.target.value === "Tech Crunch") {
//             fetch(techCrunch)
//                 .then(resp => resp.json())
//                 .then(data => setNews(data))
//         }
//         else if (e.target.value === "Wall Street Journal") {
//             fetch(wallStreetJournal)
//                 .then(resp => resp.json())
//                 .then(data => setNews(data))
//         }
//         else if (e.target.value === "Apple") {
//             fetch(apple)
//                 .then(resp => resp.json())
//                 .then(data => setNews(data))
//         }
//         else if (e.target.value === "Business Headlines") {
//             fetch(businessUrl)
//                 .then(resp => resp.json())
//                 .then(data => setNews(data))
//         }
//     }