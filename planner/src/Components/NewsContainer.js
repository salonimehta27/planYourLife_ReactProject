import React, { useState, useEffect } from 'react'
import NewsCard from './NewsCard'
import { nanoid } from 'nanoid'
import "./CSS/NewsCard.css"

function NewsContainer({ news, setNews }) {
    const [selectNewsCategory, setSelectNewsCategory] = useState("topHeadlines")

    const displayNews = news.map(n => {
        return <NewsCard key={nanoid()} newsObj={n}></NewsCard>
    })
    useEffect(() => {
        fetch(topHeadlines)
            .then(res => res.json())
            .then(data => setNews(data.articles))
    }, [])
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
        <div >
            <h1 >Top News Headlines</h1>
            <br></br>
            <div>
                <label htmlFor="newsSource">Select News Type : </label>
                <select name="newsSource" value={selectNewsCategory} onChange={(e) => handleChange(e)}>
                    <option value="topHeadlines">Top Headlines</option>
                    <option value="entertainment">Entertainment</option>
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