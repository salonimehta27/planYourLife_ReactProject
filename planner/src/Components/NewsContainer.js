import React, { useState } from 'react'
import NewsCard from './NewsCard'
import { nanoid } from 'nanoid'
import "./CSS/NewsCard.css"

function NewsContainer({ news, setNews }) {
    const [selectNewsCategory, setSelectNewsCategory] = useState("Choose Category")

    const displayNews = Object.values(news).filter(k => k === news.articles).flat()
        .map(n => {
            return <NewsCard key={nanoid()} newsObj={n}></NewsCard>
        })

    const apiKey = "bdff385f2d4342ae913c30dcda75ccf4"
    const baseUrl = "https://newsapi.org/v2/"
    const businessUrl = `${baseUrl}top-headlines?country=us&category=business&apiKey=${apiKey}`
    const apple = `${baseUrl}everything?q=apple&from=2021-07-31&to=2021-07-31&sortBy=popularity&apiKey=${apiKey}`
    const techCrunch = `${baseUrl}top-headlines?sources=techcrunch&apiKey=${apiKey}`
    const wallStreetJournal = `${baseUrl}/everything?domains=wsj.com&apiKey=${apiKey}`

    function handleChange(e) {
        setSelectNewsCategory(e.target.value)
        // console.log(e.target.value)
        if (e.target.value === "Tech Crunch") {
            fetch(techCrunch)
                .then(resp => resp.json())
                .then(data => setNews(data))
        }
        else if (e.target.value === "Wall Street Journal") {
            fetch(wallStreetJournal)
                .then(resp => resp.json())
                .then(data => setNews(data))
        }
        else if (e.target.value === "Apple") {
            fetch(apple)
                .then(resp => resp.json())
                .then(data => setNews(data))
        }
        else if (e.target.value === "Business Headlines") {
            fetch(businessUrl)
                .then(resp => resp.json())
                .then(data => setNews(data))
        }
    }
    return (
        <div className="center">
            <h1 >Top News Headlines</h1>
            <br></br>
            <div>
                <label htmlFor="newsSource">News Source : </label>
                <select name="newsSource" value={selectNewsCategory} onChange={(e) => handleChange(e)}>
                    <option>Choose Category</option>
                    <option>Tech Crunch</option>
                    <option>Wall Street Journal</option>
                    <option>Apple</option>
                    <option>Business Headlines</option>
                </select>

            </div>
            {displayNews}
        </div>
    )
}

export default NewsContainer
